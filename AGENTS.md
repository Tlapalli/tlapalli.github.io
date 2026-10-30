# Tlapalli site: agent instructions

Website of Tlapalli, the game studio, and of its open-source engine Ollin (`github.com/Tlapalli/ollin`). Astro with Starlight for the docs, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Commands

```bash
npm run dev      # astro dev; for agents: `npx astro dev --background`, then `astro dev stop|status|logs`
npm run build    # must pass before calling a change done
```

## Structure

- `src/pages/index.astro`: studio home (hero, games, tools, studio). `src/pages/ollin/index.astro`: the engine's product page. Both use `src/layouts/Studio.astro` and `src/styles/studio.css`.
- `src/content/docs/docs/`: the engine's user docs, rendered by Starlight at `/docs/` (theme in `src/styles/docs.css`).
- `src/assets/art/`: key art, generated in codex style (see `.specs/art/brief.md` locally for the art direction). Import images through `astro:assets` `<Image>` so they ship as resized WebP.
- Build every internal link with `href()` from `src/href.ts`, so the site keeps working if it is ever served under a base path. Links inside docs pages are relative (`../guide/#camera`).

## Conventions

- **English only** for site content, code, comments and commits.
- **AI-generated working files** (plans, notes, art briefs, scratch) go in `.specs/`, which is gitignored. Never commit it.
- Voice: Tlapalli speaks as a small studio ("we"); Ollin is "our engine". Mexica/Nahuatl identity lives in art and wording; API names in snippets stay plain English as in the engine. Write Spanish and Nahuatl words with their accents (cempasúchil).
- Palette, from the codices: tlapalli `#B5302A`, tlilli `#1B1B1B`, xihuitl `#1F9E9A`, cempasúchil `#F28C28`, amatl `#F3E6C9`, night `#120D17`. Display font Unbounded, body Inter.
- Numbers on the site (benchmarks, sizes) must match the engine README; update both together.

## Content

- `docs/getting-started.md` (tutorial over the `create-ollin` template) and `docs/guide.md` (every feature with code) are the engine's user docs. When the engine's public API changes, update them in the same release, and check every snippet against the engine code.
- The playable demo (`src/components/Demo.astro`) runs `src/demo/game.ts`, a copy of `create-ollin/template/src/game.ts` from the engine repo (images imported with `?url`), on the published `@tlapalli/ollin`. Keep the copy in sync when the template changes.
