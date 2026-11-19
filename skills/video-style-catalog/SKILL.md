---
name: video-style-catalog
description: >-
  Catalog of 64 named visual styles for short-form explainer videos across
  three families: 3D animation, 2D motion graphics, and talking-head edit
  treatments. Each style gives hex palette, materials, typography,
  composition, signature elements, recipe, and don'ts. Use when asked to
  design, prompt, render, or edit a video or frame in a named style, or to
  pick a visual style for a topic.
---

# Video Style Catalog

This skill holds **visual style only**: no stories, topics, or plots. Every style must work for any topic.

## Core rules

1. **One-frame test.** From a single rendered frame, a viewer should name the style without a label. If not, sharpen the signature elements. Do not add decoration.
2. **Topic-agnostic.** Sample on-screen text in style files shows *shape* only (length, casing, highlight position). Replace it with the user's content.
3. **On-screen language follows the audience.** Write on-screen text in the user's target language. Default to the language the user writes in.
4. **One idea per screen.** A new idea means a new card or scene.
5. **Real numbers and sources only.** Styles built on big numbers or cited sources still need real data from the user or a checkable source. No data: show the marker `[REAL DATA]`. Never invent figures.
6. **Original assets.** Imitate the visual language (palette, composition, technique). Never copy third-party footage, images, music, characters, or logos.

## How to use

1. User names a style: open its file from the index below and apply every section.
2. User has no style yet: ask which family fits (3D, motion graphics, talking-head edit), then offer 2 or 3 matching styles from the index.
3. Apply the family system below first, then the style's own language on top.
4. **Apply style to a story:** let the user's story set scene count and order; adapt pacing or camera beats in `Recipe` when the plot needs it, while locking hex palette, materials, character proportions, and subtitle rules across every scene.
5. Before delivering: run the style's **One-frame test** and check its **Don'ts**.

## Family systems

**3D animation** (`styles/3d/`)
- Subtitle pill: dark semi-transparent rounded box at the bottom, white text, keywords in yellow or orange. Exceptions are noted in the style file.

**Motion graphics** (`styles/motion-graphics/`)
- Bottom caption pill with one highlighted keyword (highlight color depends on the style).
- Small category label in a top corner.
- A big number as hero visual when the topic has a number.

**Talking-head edits** (`styles/talking-head/`)
- Footage is never left raw. The style is the edit treatment: what is overlaid, how text behaves, how the video itself is handled (blur, mask, shrink, background swap, card).
- Default subtitle: plain white, sans, lowercase, no box, lower third. Exceptions are noted in the style file.
- The keyword highlight color is the style's fingerprint: yellow, red, orange, lime (#C6FF00), or none.
- Segments change through fullscreen cards, blur, punch-in, or scale-down. Hard cuts are rare.
- Five treatment families: (1) full graphic screen replaces video, (2) video inside a layout, (3) annotation over video, (4) video as a small window inside a UI system, (5) stickers and paste-ups.
- Keep **structure** (text hierarchy, element order) separate from **material** (background, texture, color). A style can be flattened by swapping materials one by one while structure stays.

## Style file format

Every file under `styles/` uses these sections, in order:

```
# Style Name
Family · treatment family (talking-head only)
One-sentence fingerprint: what makes a single frame recognizable.

## Palette           table: role | hex | note  ("≈" marks an estimated hex)
## Materials & texture
## Typography        typeface class + behavior (size, casing, highlight color, container)
## Composition
## Mood
## Signature elements   3 to 6 bullets, most distinctive first
## Recipe            concrete steps with values (hex, opacity, angle, px, timing)
## Don'ts            what must NOT appear in this style
## One-frame test    3-item checklist
## Base prompt       one paragraph, ready to paste into an image/video generator, topic-free
```

## Index

<!-- index:start -->
### 3D animation

| Style | File | Fingerprint |
|---|---|---|
| Voxel Night | styles/3d/voxel-night.md | Flat-shaded 3D cubes in rainy night blue-teal, warm orange lamps, in-world code monitor. |
| Sunset Pixel | styles/3d/sunset-pixel.md | Chunky 16-bit pixel sprites toward an orange-maroon sunset with large multi-style title cards. |
| Pastel Papercut | styles/3d/pastel-papercut.md | Matte pastel cardstock layers with rough cut edges, soft shadows, and portal doorways. |
| Mood Room | styles/3d/mood-room.md | Smooth animated character in one bedroom shifting blue to purple-pink with glowing thought orbs. |
| Neon Thriller | styles/3d/neon-thriller.md | Cold blue-gray night thriller slashed by red neon, hidden faces, in-world documents. |
| Comic 3D | styles/3d/comic-3d.md | Primary-colored 3D cartoons with halftones, thick ink outlines, speed lines, 3-panel strips. |
| Felt Storybook | styles/3d/felt-storybook.md | Fuzzy matte felt bedtime scenes framed inside an open physical book with serif text. |
| Map Documentary | styles/3d/map-documentary.md | Dark teal maps and orange glow with giant changing numerals, outlined silhouettes, citations. |
| Cutaway Guide | styles/3d/cutaway-guide.md | Bright low-poly tropical architecture with soil cross-sections and thin white pointer labels. |
| Stick Slapstick | styles/3d/stick-slapstick.md | Giant-headed 3D stick puppets in warm wood markets with black-outlined white subtitles. |
| Social Sim | styles/3d/social-sim.md | Bright low-poly town growing beneath floating social comment cards and population counters. |
| Listicle Cartoon | styles/3d/listicle-cartoon.md | Persistent green banner and numbered cards framing big-headed character gags on sunny streets. |
| Arcade Escalation | styles/3d/arcade-escalation.md | Pastel low-poly yard flooded by multiplying orange critters tracked by arcade HUD multipliers. |
| Product Teardown | styles/3d/product-teardown.md | Glossy red-and-black hardware exploding symmetrically on plain cream with a live part counter. |
| Terracotta Diorama | styles/3d/terracotta-diorama.md | Miniature terracotta-and-stone city diorama shifting from midday blue to golden dusk. |
| Red Planet Base | styles/3d/red-planet-base.md | Rust-orange desert with white modular domes, cyan trim, amber windows, one green dome. |
| Timeline Pedestal | styles/3d/timeline-pedestal.md | Evolving objects on an identical white podium above a timeline scrubber. |
| Archviz Timelapse | styles/3d/archviz-timelapse.md | Modern house rising from grass across five numbered upper-left construction chapters. |
| Monochrome Studio | styles/3d/monochrome-studio.md | Glossy white hardware exploding vertically in studio negative space with tiny callouts. |
| Building Cutaway | styles/3d/building-cutaway.md | Clean white building sliced open among diorama trees with dotted labels and live badges. |

### Motion graphics

| Style | File | Fingerprint |
|---|---|---|
| Evidence Board | styles/motion-graphics/evidence-board.md | Tilted cream paper cutouts pinned onto brown corkboard with red string and stamps. |
| Technical Blueprint | styles/motion-graphics/technical-blueprint.md | White engineering line drawings on blueprint navy with grid, callouts, yellow highlights. |
| Notebook Sketch | styles/motion-graphics/notebook-sketch.md | Wobbly hand-drawn stick figures on cream ruled notebook paper with yellow highlighter. |
| Bauhaus Poster | styles/motion-graphics/bauhaus-poster.md | Flat geometric infographic with oversized condensed numerals, primary blocks, black caption bars. |
| Shadow Puppet | styles/motion-graphics/shadow-puppet.md | Perforated black puppet silhouettes over amber dusk gradients with riveted cream wood plaques. |
| Neon Terminal | styles/motion-graphics/neon-terminal.md | Black CRT terminal windows and glowing neon-green phone frames over green hex rain. |
| Glossy Biolab | styles/motion-graphics/glossy-biolab.md | Glowing violet-pink glass vessels with bubbling fluids and color-coded particles on dark purple. |
| Pastel Stage | styles/motion-graphics/pastel-stage.md | Big-headed flat chibi characters inside a pastel backdrop circle on warm cream. |
| Ransom Collage | styles/motion-graphics/ransom-collage.md | Torn-paper tabloid collage with ransom-note type, halftone dots, bold verdict stamps. |
| Brutalist Type | styles/motion-graphics/brutalist-type.md | Gigantic condensed uppercase type on alternating solid color blocks with one accent word. |
| Atlas Cartography | styles/motion-graphics/atlas-cartography.md | Paper-textured atlas with muted oceans, cream land, red route line, compass. |
| Retro Tape Duel | styles/motion-graphics/retro-tape-duel.md | 70s game-show duel inside a camcorder PLAY overlay, scanlines, live scoreboard. |
| Pastel Clay | styles/motion-graphics/pastel-clay.md | Matte claymation props and a wide-eyed blob mascot on empty pastel backdrops. |
| Pixel RPG | styles/motion-graphics/pixel-rpg.md | 16-bit pixel RPG framed by top HUD, narrator box, and A/B choice footer. |
| Dark Dot Matrix | styles/motion-graphics/dark-dot-matrix.md | Dark data dashboard with giant thin numerals, cyan dot matrices, lime bars. |
| Block Arcade | styles/motion-graphics/block-arcade.md | Bright blocky 2D game cartoons with thick black outlines, top badges, stacked bubbles. |
| Storybook Sunburst | styles/motion-graphics/storybook-sunburst.md | Daylight chibi landscapes, repeated-head crowds, gold-trimmed red ribbons, sunburst reveals. |
| Starlit Folktale | styles/motion-graphics/starlit-folktale.md | Starry navy sky over village silhouettes blending mythic figures and orbit diagrams. |
| Glossy Anatomy | styles/motion-graphics/glossy-anatomy.md | Glossy polka-dot pink inside-the-body world with costumed chibi cells. |
| Night Phone UI | styles/motion-graphics/night-phone-ui.md | Late-night bedroom framing an oversized bright phone mockup with yellow traps and red tags. |
| Number Line | styles/motion-graphics/number-line.md | Minimal cream vector world split by a panning horizontal numbered ruler. |
| Green Chalkboard | styles/motion-graphics/green-chalkboard.md | Classroom green blackboard with chalk dust, handwritten math, black caption pills. |
| Dark UI Cards | styles/motion-graphics/dark-ui-cards.md | Dark-navy UI simulation with floating white cards, yellow donut meters, gold highlights. |
| Isometric Diorama | styles/motion-graphics/isometric-diorama.md | Pastel 30-degree isometric city and island dioramas with tiny faceless figures. |

### Talking-head edits

| Style | File | Fingerprint |
|---|---|---|
| Graphite | styles/talking-head/graphite.md | Dark charcoal screens, giant numerals, segmented bars, orange-tinted video-masked numbers. |
| Interface | styles/talking-head/interface.md | Light mobile UI mockups, chat threads, search lists, blue notifications, full-screen. |
| Marker | styles/talking-head/marker.md | Black cards with bold text inside neon-yellow highlighter strips. |
| Press | styles/talking-head/press.md | Cream broadsheet columns, hairline rules, inset video, black highlight bars. |
| Typeset | styles/talking-head/typeset.md | Speaker cutout on electric purple with italic serif, bold uppercase, outline echoes. |
| Clean | styles/talking-head/clean.md | Bright talking-head with stacked yellow sans keywords and white line icons overhead. |
| Spotlight | styles/talking-head/spotlight.md | Face under a radial spotlight on near-black green, serif subtitles, yellow numerals. |
| Bold | styles/talking-head/bold.md | Footage under translucent yellow washes, dark lowercase words, full yellow cards. |
| Calm | styles/talking-head/calm.md | Warm dark brown frames, tracked pale-gold italic serif, circular face crop. |
| Podcast | styles/talking-head/podcast.md | Off-axis speaker on flat dark olive with translucent yellow sans and serif card. |
| Noted | styles/talking-head/noted.md | Ruled notebook cards taped over blurred video, yellow highlights, black keyword boxes. |
| Poster | styles/talking-head/poster.md | Royal-blue posters, hard cuts, outline headlines, red subtitle highlights. |
| Lumen | styles/talking-head/lumen.md | Uncut room with soft vignette, glowing mint and purple numbers, orange highlights. |
| Depth | styles/talking-head/depth.md | Uncut talking-head over typographic wallpaper and tiled video mosaics with ink doodles. |
| Noir Search | styles/talking-head/noir-search.md | Desaturated footage framed by dark search bars, pink outline heart, glowing-arc title. |
| Aurora Glass | styles/talking-head/aurora-glass.md | Blurred purple-maroon aurora, 1px glass cards, orange-gradient keywords. |
| Flat Artboard | styles/talking-head/flat-artboard.md | Cream gridded artboard, corner brackets, red-orange block wipes, flat phones. |
| Lime Punch | styles/talking-head/lime-punch.md | Punch-ins, chunky white caption pills, neon-lime word highlights, dotted checklists. |
| System | styles/talking-head/system.md | Small speaker card above a full-screen AI chat panel and typing-cursor caption bar. |
| Sticker Pop | styles/talking-head/sticker-pop.md | Tilted outlined sticker pills, diagonal split-screens, cutouts on vivid purple. |
<!-- index:end -->
