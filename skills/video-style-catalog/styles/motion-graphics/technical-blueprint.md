# Technical Blueprint
Motion graphics
Crisp white engineering line drawings on deep blueprint navy with subtle grid lines, numbered callouts, and yellow focus highlights.

## Palette
| role | hex | note |
| --- | --- | --- |
| blueprint base | #0E2F66 | solid digital background (`#0A2A5E` to `#123C7A` range) |
| linework & grid | ≈#FFFFFF | 2 to 3 px technical strokes and low-opacity grid |
| dark fill | ≈#071E44 | reserved for enclosed structural cabins or compartments |
| focus highlight | #FFD21F | one highlighted element, underline, and header outline |
| hazard accent | #FF4D4D | reserved strictly for danger or worst-case warning boxes |

## Materials & texture
Clean digital technical-sheet aesthetic with a faint white orthogonal grid over solid navy, zero paper grain, and crisp vector linework with diagonal hatching for solid structural weights or concrete.

## Typography
One consistent small monospace/technical typeface for all floor markers (`LEVEL 1` to `6`), detail headers (`DETAIL A`), numbered callout labels, and the persistent top bar (`TOPIC | SHEET 01/02 | [CATEGORY]` with an outlined `#FFD21F` tag at top right). Bottom captions sit inside a dark translucent corner-bracketed box (`≈#06142E`) with `#FFD21F` underlined keywords.

## Composition
Tall vertical cross-section layout following a structure from top to bottom, leaving wide navy margins. Rectangular detail callout boxes layer cleanly over the main schematic with thin leader lines.

## Mood
Calm, authoritative, and engineering-precise, using `#FF4D4D` warning boxes sparingly for tension.

## Signature elements
- Persistent top-bar technical sheet header with an outlined `#FFD21F` category box at top right.
- White 2 to 3 px architectural cross-sections with diagonal hatching and simple circle-and-rectangle stick pictograms.
- Corner-bracketed detail inset boxes and numbered callouts (`1`, `2`) with thin leader lines.
- Dark corner-bracketed bottom caption panel featuring `#FFD21F` underlined keywords.

## Recipe
1. Set a solid `#0E2F66` canvas overlaid with a low-opacity white square grid.
2. Draw all machinery, cross-sections, and human pictograms in `#FFFFFF` 2 to 3 px strokes without fills, using `≈#071E44` only for primary chambers and diagonal hatching for mass blocks.
3. Add a persistent top-frame mono header (`[SYSTEM] | SHEET 01/02 | [CATEGORY]`) and corner-bracketed `DETAIL A` inset panels.
4. Restrict `#FFD21F` to one highlighted diagram part and underlined caption keywords per scene; restrict `#FF4D4D` strictly to hazard scenarios.
5. Animate with stroke draw-on paths, vertical camera pans along the shaft, smooth zooms into detail boxes, and hard cuts between sheets.

## Don'ts
- Do not use multi-colored gradients, organic curved brushwork, or textured paper backgrounds.
- Do not draw detailed human characters beyond minimal circle-head and rectangle-body pictograms.
- Do not place red `#FF4D4D` accents on non-hazard informational labels.
- Do not omit the corner-bracket framing or top-right outlined category tag.

## One-frame test
- Does the frame look like an authentic `#0E2F66` engineering sheet with 2 to 3 px white line drawings?
- Is `#FFD21F` limited to one active highlight and the caption keyword underline?
- Are the top sheet header, leader callouts, and corner-bracketed bottom caption all present?

## Base prompt
Vertical 9:16 clean digital technical blueprint motion graphics frame on solid navy (#0E2F66) with a faint white grid, showing a 2 px white engineering cross-section diagram with diagonal hatching, a minimal circle-and-rectangle human pictogram, numbered leader-line callouts, a yellow (#FFD21F) highlighted mechanism, a small monospace top sheet header with an outlined yellow category box, and a dark translucent corner-bracketed caption bar at the bottom with a yellow underlined keyword.
