# Pixel RPG
Motion graphics
16-bit pixel-art role-playing game screen framed permanently by a top category HUD, bottom narrator dialog box, and A/B button prompts.

## Palette
| role | hex | note |
| --- | --- | --- |
| deep UI navy | ≈#101830 | framed dialog boxes, quest windows, HUD panels |
| 16-bit sky blue | ≈#4AA8FF | saturated daylight game skies |
| bright grass green | ≈#4CD948 | pixel turf, trees, and slime enemy sprites |
| arcade amber | ≈#FFA51F | big pixel headlines, icons, and active HUD borders |
| dialog white | ≈#FFFFFF | crisp pixel narration inside dark navy dialog boxes |

## Materials & texture
Strict 16-bit pixel art with crisp nearest-neighbor blocky pixels, zero anti-aliasing, and zero smooth gradients; skies, terrain, and props are built from visible pixel tiles.

## Typography
Crisp uppercase pixel monospace font across the entire screen: oversized orange/yellow pixel display headers inside scenes, bordered HUD badges at top left (`MYTH`, `DATA`, `STUDY`), and crisp white narration inside a permanent dark navy `NARRATOR` dialog box above an `A NEXT / B SKIP` footer.

## Composition
Permanent classic RPG interface shell wrapping every shot: small category badge at top left, framed game world or stacked blue quest/party/progress-bar windows in the middle, `NARRATOR` dialog box across the lower third, and `A NEXT / B SKIP` button prompts along the very bottom.

## Mood
Playful, nostalgic, and nerdy, framing factual explanations like leveling up inside a retro handheld adventure.

## Signature elements
- Crisp nearest-neighbor 16-bit pixel art with zero anti-aliasing or smooth gradients.
- Permanent dark-navy `NARRATOR` dialog box above an `A NEXT / B SKIP` prompt bar.
- Top-left uppercase RPG category tag (`MYTH`, `ORIGIN`, `KEY`) and stacked blue UI quest/party panels.
- Animated pixel sprites (capped explorer hero, green slime monsters, tiled grass, multi-player grids).

## Recipe
1. Render every asset at low resolution with nearest-neighbor scaling (zero anti-aliasing) using saturated 16-bit navy (`≈#101830`), sky blue (`≈#4AA8FF`), grass green (`≈#4CD948`), and amber (`≈#FFA51F`).
2. Lock a permanent RPG UI frame across all scenes: top-left category pill, bottom `NARRATOR` dialog box, and bottom-most `A NEXT / B SKIP` footer.
3. Stage scenes with tiled pixel backgrounds, simple sprites, and stacked dark-navy framed windows (quest logs, party rosters, progress bars, `GAME OVER?` prompts).
4. Set all headers, stats, and dialog in crisp uppercase pixel monospace, coloring hero headlines bright orange-yellow.
5. Animate with character idle-bobs, filling pixel progress bars, typewriter dialog text, and screen-wipe level transitions.

## Don'ts
- Do not enable anti-aliasing, smooth vector curves, soft drop shadows, or smooth gradients.
- Do not drop the bottom `NARRATOR` box and `A NEXT / B SKIP` RPG shell.
- Do not mix smooth modern sans-serif typography with the pixel-art UI.

## One-frame test
- Are crisp square pixels visible on every sprite, tile, and letter without anti-aliasing?
- Do the top-left category badge, bottom `NARRATOR` box, and `A NEXT / B SKIP` footer frame the scene?
- Are data points presented inside dark-navy bordered RPG quest or status windows?

## Base prompt
Vertical 9:16 authentic 16-bit pixel-art RPG motion graphics frame with crisp nearest-neighbor pixels and zero anti-aliasing, showing a bright blue sky (#4AA8FF) and green tiled meadow (#4CD948) with a capped pixel hero facing a green pixel slime beside stacked dark-navy (#101830) framed quest and progress-bar UI windows, large orange (#FFA51F) pixel title, top-left uppercase category HUD tag, and a permanent bottom NARRATOR dialog box with white pixel text above an A NEXT / B SKIP footer.
