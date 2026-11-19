# video-style-catalog

An agent skill for building browser-playable short-form explainer videos (HTML + CSS + GSAP + Three.js, optional MP4 export) across **64 named visual styles**:

- **3D animation** (20): `skills/video-style-catalog/styles/3d/`
- **Motion graphics** (24): `skills/video-style-catalog/styles/motion-graphics/`
- **Talking-head edits** (20): `skills/video-style-catalog/styles/talking-head/`

Includes three deterministic HTML starters (`assets/`), mechanical anti-PPT production rules (`references/production-rules.md`), key-frame contact-sheet verification (`scripts/snap.mjs`), and FFmpeg MP4 export (`scripts/export-frames.mjs`).

Each style file lists palette (hex), materials, typography, composition, mood, signature elements, a recipe with concrete values, don'ts, a one-frame test, and a topic-free base prompt.

## Install

The skill follows the [Agent Skills](https://agentskills.io) format: a folder with a `SKILL.md`. Copy `skills/video-style-catalog/` into your agent's skills directory.

| Agent | Project scope |
|---|---|
| Claude Code | `.claude/skills/` |
| Antigravity | `.agents/skills/` |
| Other agents | the skills directory from your agent's docs |

Or with the skills CLI:

```sh
npx skills add farizziezhi/antigravity-motion
```

## Use

Ask the agent for a frame, prompt, or edit plan in a named style, for example "make a storyboard about how bicycle brakes work in the Blueprint style". Without a style name, the agent offers matching styles from the index in `SKILL.md`.

## License

[MIT](LICENSE)

