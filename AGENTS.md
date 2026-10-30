# Ollin site: agent instructions

Website and docs of the Ollin game engine (`github.com/Tlapalli/ollin`), built with Astro Starlight and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Commands

```bash
npm run dev      # astro dev; for agents: `npx astro dev --background`, then `astro dev stop|status|logs`
npm run build    # must pass before calling a change done
```

## Conventions

- **English only** for site content, code, comments and commits.
- **AI-generated working files** (plans, notes, scratch) go in `.specs/`, which is gitignored. Never commit it.
- Mexica/Nahuatl identity lives in branding and wording; API names in snippets stay in plain English as in the engine.

## Content

- `src/content/docs/getting-started.md` (tutorial over the `create-ollin` template) and `src/content/docs/guide.md` (every feature with code) are the engine's user docs. When the engine's public API changes, update them in the same release, and check every snippet against the engine code.
- Links between pages are relative (`../guide/#camera`), because the site is served under `/ollin-site/`.
- The landing demo (`src/components/Demo.astro`) runs `src/demo/game.ts`, a copy of `create-ollin/template/src/game.ts` from the engine repo, on the published `@tlapalli/ollin`. Keep the copy in sync when the template changes.
- Palette comes from the Ollin glyph (`src/assets/ollin.svg`): tlapalli `#B5302A`, xihuitl `#1F9E9A`, amatl `#F3E6C9`, tlilli `#1B1B1B`.
