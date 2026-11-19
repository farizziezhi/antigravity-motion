#!/usr/bin/env node
// Capture key timestamps from a deterministic HTML video into PNGs + contact sheet.
// Usage: node scripts/snap.mjs <path/to/index.html> [count=8] [outDir=./snaps]
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const htmlArg = process.argv[2];
if (!htmlArg) {
  console.error('Usage: node scripts/snap.mjs <index.html> [count=8] [outDir=./snaps]');
  process.exit(1);
}

const count = Math.max(2, parseInt(process.argv[3] || '8', 10));
const outDir = path.resolve(process.argv[4] || './snaps');
fs.mkdirSync(outDir, { recursive: true });

let puppeteer;
try {
  ({ default: puppeteer } = await import('puppeteer'));
} catch {
  console.error('Puppeteer is not installed. Run: npm i -D puppeteer');
  process.exit(1);
}

const url = `${pathToFileURL(path.resolve(htmlArg)).href}?clean=1`;
const browser = await puppeteer.launch({ headless: true });
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

const files = [];
for (let i = 0; i < count; i++) {
  const t = count === 1 ? 0 : (meta.dur * i) / (count - 1);
  await page.evaluate((sec) => window.__SEEK(sec), t);
  await new Promise((r) => setTimeout(r, 40));
  const name = `frame-${String(i + 1).padStart(2, '0')}-${t.toFixed(2)}s.png`;
  const dest = path.join(outDir, name);
  await page.screenshot({ path: dest });
  files.push({ name, t: t.toFixed(2) });
}

// Lightweight HTML contact sheet for quick visual inspection
const grid = files
  .map((f) => `<figure><img src="${f.name}"><figcaption>${f.t}s</figcaption></figure>`)
  .join('\n');
fs.writeFileSync(
  path.join(outDir, 'contact-sheet.html'),
  `<!doctype html><meta charset="utf-8"><style>
body{margin:16px;background:#111;color:#eee;font:13px monospace}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
figure{margin:0}img{width:100%;display:block;border:1px solid #333}
figcaption{margin-top:4px;opacity:.8}
</style><div class="g">${grid}</div>`
);

await browser.close();
console.log(`Captured ${files.length} frames (${meta.w}x${meta.h}, ${meta.dur.toFixed(2)}s) -> ${outDir}`);
