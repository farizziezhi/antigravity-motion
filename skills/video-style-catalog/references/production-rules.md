# Production Rules (Video, Not Slides)

Apply these rules whenever turning a style from `styles/` into a browser-playable HTML/GSAP/Three.js video.

## 1. Mechanical Anti-PPT Checks

Check the generated `index.html` before delivering:

1. **No fading slide deck.** Do not build 3 or more `<section>` blocks that simply fade in and out with `opacity`/`autoAlpha`. Move the world or camera (pan, whip, push-through, card wipe, scale-down) or keep one persistent stage alive.
2. **Maximum 2 text tiers per beat.** Never stack eyebrow + headline + body paragraph + feature badges on one screen. Use at most one hero line/number plus one small world label or bottom caption.
3. **No static background.** Every beat needs subtle motion tied to the style (camera drift, floating particles, shifting gradient, parallax layer, or active UI state).
4. **Legible on mobile.** On a 1080px short edge, keep body/caption text `>= 36px` and labels `>= 28px`. Maintain WCAG AA contrast behind text.
5. **No player chrome by default.** Autoplay and loop cleanly (`onComplete: () => tl.play(0)`). Keep keyboard shortcuts (`Space` pause/play, `R` restart) hidden. Show the scrub bar only on `?debug=1`, and freeze at `t = 0` on `?clean=1` for headless frame capture.

## 2. Deterministic Rendering

Every visual state must be a pure function of `tl.time()` (the master GSAP timeline time in seconds):

- **Never** use `Date.now()`, `performance.now()`, or `Math.random()` inside render loops or `onUpdate`.
- For shake, flicker, or particles, use seeded math or `Math.sin(t * freq + seed)`.
- For Three.js scenes, update camera, meshes, and uniforms inside `window.__RENDER(t)` called from `tl.eventCallback('onUpdate', ...)` and on every `seek(t)`.
- For talking-head video overlays, set `video.currentTime = t` when seeking (`?debug=1` or `?clean=1`).
- Expose `window.__TL` (the master GSAP timeline) and `window.__DURATION` (total seconds) so `scripts/snap.mjs` and `scripts/export-frames.mjs` can scrub any frame identically.

## 3. Single-File Deliverable

- Deliver one `index.html` that opens directly via `file://` (double-click, no `npm install` or local server required to watch).
- Inline all CSS and JS inside `index.html`. Load GSAP and Three.js from CDN.
- Use `font-variant-numeric: tabular-nums` on any animated counter or clock so digits never jitter.
- Replace every placeholder token (`--bg`, `--ink`, `--accent`, `--font-display`) from the starter with the chosen style's hex palette and typography before writing scenes.

## 4. Common Pitfalls

- **CSS specificity beating initial hidden state:** set initial transforms/opacity with `gsap.set()` rather than competing CSS classes.
- **Audio autoplay block:** if audio exists, call `audio.play()` and catch rejection; hold at `t = 0` and start both timeline and audio on first pointer/key gesture.
- **Unverified layout:** never declare done from code alone. Capture key timestamps with `scripts/snap.mjs` (or open `?debug=1` in browser) and inspect text clipping, overlap, and palette fidelity.
