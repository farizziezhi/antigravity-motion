# Voxel Night
3D animation
Every object, building, and character is built from flat-shaded 3D cubes set in a rainy night palette cut by warm orange room lights and an in-world code monitor.

## Palette
| Role | Hex | Note |
|---|---|---|
| Primary | ≈#0F2537 | Deep rainy night blue-teal sky and shadows |
| Secondary | ≈#1D4E5F | Muted teal architecture and clothing |
| Accent | ≈#F28C28 | Warm orange interior lamps, windows, and bot glow |
| Highlight | ≈#A94438 | Brick red structural accents |
| Surface | ≈#1A222B | Wet dark asphalt reflecting streetlamps |

## Materials & texture
- Flat-shaded cubic geometry with sharp 90-degree edges and hard directional shadows.
- Zero smooth surface grain or curved bevels; forms rely on stacked block silhouettes and light contrast.
- Wet ground plane uses low roughness (around 0.15) to mirror warm orange and cool teal lights.

## Typography
- In-world monitor and terminal screens use crisp monospace code (`14px` to `18px`, light cyan and white on dark slate).
- No large title overlays appear on screen.
- Optional narration uses the 3D family subtitle pill at bottom center (`rgba(15, 20, 28, 0.78)` rounded container, white sans text, keywords in `≈#FFC83D`).

## Composition
- Opens in a tight upper-floor room interior framed around a glowing desk monitor.
- Pulls back in a continuous dolly-out to reveal a full miniature city street with trams, power lines, and stacked blocks.
- Foreground rain streaks and reflective puddles anchor depth across both scales.

## Mood
Cozy, rainy, quiet yet warm, capturing focused late-night maker solitude.

## Signature elements
- Cubic voxel construction across every prop, figure, vehicle, and tree.
- Diegetic code on a desktop monitor (e.g., `world.ts`, `const scene = new Grid({ rain: 0.4 })`, `0 errors · 60 fps`).
- Rainy blue-teal atmosphere sliced by warm orange interior windows and lamps.
- Stylized boxy character archetype (square head, rectangular glasses, teal hoodie) paired with a small orange cubic companion bot.
- Single continuous scale-shift reveal from cramped desk to full city block.

## Recipe
1. Model every asset on a uniform cubic voxel grid with flat material shading and hard shadows.
2. Light the ambient scene with cool night blue (`≈#0F2537`, 25% fill) and place one warm point light (`≈#F28C28`, 2800K) inside each window or room.
3. Add angled falling rain particles (12-degree tilt) and set street roughness to `0.15` for specular reflections.
4. Animate a 3-second hold on the glowing monitor code before a 4-second smooth dolly-out (35mm focal length) revealing the full street.
5. Keep all text inside the computer screen prop rather than floating explanatory labels.

## Don'ts
- Do not use smooth organic curves, subsurface skin shading, or beveled edges.
- Do not add bright midday sunlight or pastel washes.
- Do not place large floating title cards or narration banners over the city reveal.
- Do not omit the warm orange light contrast inside the cool blue night.

## One-frame test
- [ ] Every visible shape is made of crisp, flat-shaded 3D cubes.
- [ ] Warm orange room or lamp glow cuts through a dark rainy blue-teal environment.
- [ ] An in-world glowing monitor displays readable monospace code without large overlay titles.

## Base prompt
Isometric to wide-angle 3D voxel animation in a rainy night palette of deep blue-teal (≈#0F2537) and warm orange interior glow (≈#F28C28) with brick red accents (≈#A94438), every building, desk, tram, and cubic hooded character with glasses and small orange cubic companion bot constructed from flat-shaded sharp-edged cubes, wet reflective streets catching lamp light, falling rain streaks, glowing computer monitor displaying clean monospace code as a physical scene prop, cozy late-night atmosphere, no large overlay titles.
