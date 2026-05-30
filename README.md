# jackinf.github.io — Portfolio

Personal portfolio of **Jevgeni Rumjantsev** — Senior Software Engineer (Payments & Fintech).
A fast, single-page, modern-minimalist site with light/dark modes and a print-to-PDF
single-page CV. Built with **Bun + React + TypeScript** (no Vite, no framework runtime
beyond React), deployed to GitHub Pages via GitHub Actions.

Live: https://jackinf.github.io

## Develop

Requires [Bun](https://bun.sh) ≥ 1.2.

```bash
bun install
bun run dev      # dev server with HMR (Bun serves ./index.html)
```

## Build & preview

```bash
bun run build    # bundles to dist/, copies public/ and game/ into dist/
bun run preview  # serves dist/ at http://localhost:4173
```

`scripts/build.ts` does three things:
1. Bundles the React app from `index.html` into `dist/` (minified, hashed assets).
2. Copies everything in `public/` to `dist/` (favicon, `cv.md`).
3. Copies the legacy 8-bit résumé from `game/` to `dist/game/`.

## Structure

```
index.html            # app entry (loads src/main.tsx)
src/
  main.tsx            # React bootstrap
  App.tsx             # page composition
  data/cv.ts          # SINGLE SOURCE OF TRUTH for all content — edit here
  components/         # Nav, Hero, Experience, Projects, Skills, Education, Footer, ThemeToggle
  hooks/              # useTheme (light/dark), useReveal (scroll animations)
  styles/             # theme.css (tokens), global.css (layout), print.css (1-page CV)
public/               # favicon.svg, cv.md
scripts/              # build.ts, serve.ts
game/                 # legacy 8-bit gamified résumé (served at /game/)
.github/workflows/    # deploy.yml — Bun build + Pages deploy
```

## Editing content

All copy lives in [`src/data/cv.ts`](src/data/cv.ts). Update roles, skills, projects,
and contact details there — both the website and the printable CV read from it.
The standalone Markdown CV for download is [`public/cv.md`](public/cv.md); keep it in
sync when you change `cv.ts`.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds with Bun and
publishes `dist/` to GitHub Pages.

> **One-time setup:** In the GitHub repo, go to **Settings → Pages → Build and
> deployment → Source** and select **"GitHub Actions"**. (Previously this repo served
> from the branch root; the Actions workflow replaces that.)

## Legacy site

The previous 8-bit side-scrolling résumé now lives in [`game/`](game/) and stays live at
[`/game/`](https://jackinf.github.io/game/), linked from the footer of the new portfolio.
