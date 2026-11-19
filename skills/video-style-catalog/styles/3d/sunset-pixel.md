# Sunset Pixel
3D animation
Chunky 16-bit pixel-art sprites walk across dark timber interiors and toward a glowing orange-maroon sunset while oversized mixed-typeface title cards tell the story without subtitles.

## Palette
| Role | Hex | Note |
|---|---|---|
| Primary | ≈#3A2418 | Dark interior timber brown |
| Secondary | ≈#C83737 | Crimson hooded sprite accent |
| Accent | ≈#F5B841 | Warm yellow lamp glow and gold script text |
| Gradient A | ≈#D95B26 | Lower sunset horizon orange |
| Gradient B | ≈#5A182B | Upper dusk sky dark maroon |

## Materials & texture
- Coarse, unsmoothed 16-bit pixel grid with visible stair-stepped edges and nearest-neighbor scaling.
- Dark wood planks, warm glowing lamp halos, and crisp floating white pixel item blocks.
- No smooth gradients on sprites; only the sky backdrop uses a stepped or rich sunset wash.

## Typography
- Typographic title cards are the primary storyteller, centered large over the frame.
- Cards alternate sharply across three contrasting styles: thin italic serif (`"One spark."`), bold all-caps sans inside a pixel editor selection box (`"NOT A PRESET."`), and gold calligraphic script (`"MAKE IT FEEL alive."`).
- Exception to 3D family rule: no narration subtitle pill at all; silent pauses separate each short card.

## Composition
- First half frames a dim wooden study with a glowing desk monitor at eye level.
- Second half opens onto a centered straight road leading straight toward a low sunset horizon with floating white blocks overhead.
- Characters cast long directional shadows across the ground plane.

## Mood
Retro game nostalgia, quiet ambition, warm yet slightly melancholic.

## Signature elements
- Pure 16-bit pixel resolution with visible blocky edges and stiff sprite walk cycles.
- Dominant warm orange-to-maroon sunset gradient sky filling the outdoor half.
- Small hooded pixel sprite archetype (chibi proportions, two-dot eyes) paired with a tiny floating lamp companion sprite.
- Three-way typographic contrast on large centered story cards instead of spoken subtitles.
- Floating white pixel boxes hovering above the horizon path like collectible game items.

## Recipe
1. Restrict the scene palette to 4 or 5 dominant colors anchored by dark wood (`≈#3A2418`) and crimson (`≈#C83737`).
2. Render sprites and props with nearest-neighbor filtering so every pixel edge stays crisp and unblurred.
3. Transition from a warm lamp-lit wooden room (`≈#F5B841`) to a centered perspective road against an orange-to-maroon (`≈#D95B26` to `≈#5A182B`) sky.
4. Animate sprites with 4-frame step cycles and cast 30-degree elongated ground shadows.
5. Sequence 3 to 4 centered title cards (`64px` to `88px`), holding 1.5s of quiet ambient motion between each phrase.

## Don'ts
- Do not use anti-aliased smooth vectors, PBR shaders, or realistic 3D lighting.
- Do not add a bottom narration subtitle pill or explanatory captions.
- Do not crowd the palette past 5 dominant colors.
- Do not use uniform typography across consecutive cards; keep the serif, boxed sans, and script contrast.

## One-frame test
- [ ] Visible chunky pixels and crisp aliased edges define every character and prop.
- [ ] A bold centered multi-style text card or a 4-color sunset horizon road fills the frame.
- [ ] Zero bottom subtitle pills appear anywhere in the frame.

## Base prompt
Retro 16-bit pixel-art animation scene with crisp unsmoothed pixels and long cast shadows, limited five-color palette of dark wood brown (≈#3A2418), crimson red (≈#C83737), warm lamp gold (≈#F5B841), and a deep orange-to-maroon sunset sky gradient (≈#D95B26 to ≈#5A182B), small hooded pixel sprite walking beside a tiny floating lamp bot along a straight path toward the horizon under floating white game cubes, large centered contrasting title typography, nostalgic quiet atmosphere, no subtitle bars.
