---
description: Bump marketed Sapphire version and refresh browser WASM from GitHub releases
argument-hint: "<semver e.g. 0.7.0>"
---

Ship Sapphire release **$ARGUMENTS** on this site:

1. **`scripts/download-wasm.js`** — Set `VERSION` to `v$ARGUMENTS` (leading `v`, matching [GitHub releases](https://github.com/sapphire-project/sapphire/releases)).

2. **`src/components/Hero.astro`** — In the hero badge, set the label to `v$ARGUMENTS — Early preview`.

3. **`src/components/Footer.astro`** — Set `const version = '$ARGUMENTS'` (semver only, no `v`).

4. Run **`node scripts/download-wasm.js`** from the repo root so `src/lib/sapphire.js` and `public/wasm/sapphire_bg.wasm` match the release (requires the GitHub release assets to exist).

5. If tests are appropriate after the change, run them.

Do not edit unrelated files or bump npm/package versions unless the user asked.
