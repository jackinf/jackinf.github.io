# CLAUDE.md — Portfolio (jackinf.github.io)

Guidance for AI agents working in this repo.

## What this is

Single-page personal portfolio for Jevgeni Rumjantsev. Stack: **Bun + React 19 +
TypeScript**, plain CSS (custom properties), no Vite. Deployed to GitHub Pages via
GitHub Actions (`.github/workflows/deploy.yml`).

## Commands

Bun may not be on PATH; if `bun` is not found, use `~/.bun/bin/bun` or
`export PATH="$HOME/.bun/bin:$PATH"`.

- `bun install`
- `bun run dev` — HMR dev server (`bun ./index.html`)
- `bun run build` — bundle to `dist/`, copy `public/` and `game/` in (`scripts/build.ts`)
- `bun run preview` — serve `dist/` at :4173

## Key invariants

1. **Content lives in `src/data/cv.ts`.** All sections render from it. Do not hardcode
   copy in components. Keep `public/cv.md` in sync with `cv.ts` for the download link.
2. **Theming via CSS custom properties** in `src/styles/theme.css`; light is default,
   `[data-theme="dark"]` overrides. `useTheme` toggles the `data-theme` attribute and
   persists to localStorage.
3. **Animations** are scroll-reveal via `useReveal` + the `Reveal` wrapper. Always
   respect `prefers-reduced-motion` (already handled in the hook and CSS).
4. **`src/styles/print.css`** drives the "Download CV" output (`window.print()`). It
   must stay tuned to fit **one A4 page** — verify after any content/length change.
5. **The legacy site is in `game/`** and is copied verbatim into `dist/game/` by the
   build. It uses relative asset paths — do not add root-absolute (`/...`) asset URLs
   there. It's a separate vanilla HTML/JS project (see `game/CLAUDE.md`).
6. **User GitHub Pages site** serves from `/`, so asset URLs are root-relative and need
   no base path.

## Deploy

Push to `master` → Actions builds and deploys `dist/`. Requires repo
**Settings → Pages → Source = "GitHub Actions"** (one-time, manual).
