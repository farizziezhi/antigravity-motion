#!/usr/bin/env node
// Render deterministic frames from an HTML video and encode MP4 via ffmpeg.
// Usage: node scripts/export-frames.mjs <index.html> [out.mp4] [fps=30]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const htmlArg = process.argv[2];
if (!htmlArg) {
  console.error('Usage: node scripts/export-frames.mjs <index.html> [out.mp4] [fps=30]');
  process.exit(1);
}

const outMp4 = path.resolve(process.argv[3] || './output.mp4');
const fps = Math.max(1, parseInt(process.argv[4] || '30', 10));

let puppeteer;
try {
  ({ default: puppeteer } = await import('puppeteer'));
} catch {
  console.error('Puppeteer is not installed. Run: npm i -D puppeteer');
  process.exit(1);
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vsc-frames-'));
const url = `${pathToFileURL(path.resolve(htmlArg)).href}?clean=1`;
const browser = await puppeteer.launch({ headless: true });

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  const meta = await page.evaluate(() => {
    const cs = getComputedStyle(document.documentElement);
    const w = parseInt(cs.getPropertyValue('--w'), 10) || 1080;
    const h = parseInt(cs.getPropertyValue('--h'), 10) || 1920;
    return { w, h, dur: window.__DURATION || 5 };
  });

  await page.setViewport({ width: meta.w, height: meta.h, deviceScaleFactor: 1 });
  await page.evaluate(() => window.dispatchEvent(new Event('resize')));

  const totalFrames = Math.max(1, Math.ceil(meta.dur * fps));
  for (let i = 0; i < totalFrames; i++) {
    const t = i / fps;
    await page.evaluate((sec) => window.__SEEK(sec), t);
    const dest = path.join(tmpDir, `f-${String(i).padStart(5, '0')}.png`);
    await page.screenshot({ path: dest });
  }

  execFileSync(
    'ffmpeg',
    [
      '-y',
      '-framerate', String(fps),
      '-i', path.join(tmpDir, 'f-%05d.png'),
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      outMp4
    ],
    { stdio: 'inherit' }
  );
  console.log(`Exported ${totalFrames} frames @ ${fps}fps -> ${outMp4}`);
} finally {
  await browser.close();
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
