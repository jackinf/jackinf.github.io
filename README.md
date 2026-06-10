<div align="center">

# jackinf.github.io — Personal Portfolio

### Fast single-page portfolio & print-to-PDF CV, built with Bun + React

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)
[![Repo](https://img.shields.io/badge/GitHub-jackinf%2Fjackinf.github.io-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jackinf/jackinf.github.io)

</div>

## Overview

Personal portfolio of **Jevgeni Rumjantsev** — Senior Software Engineer (Payments & Fintech).
A fast, single-page, modern-minimalist site with light/dark modes and a print-to-PDF
single-page CV. Built with **Bun + React + TypeScript** (no Vite, no framework runtime
beyond React), deployed to GitHub Pages via GitHub Actions.

Live: https://jackinf.github.io

## Features

- Single-page React 19 portfolio composed of Nav, Hero, Experience, Projects, Skills, Education, and Footer sections.
- Light/dark theme toggle (`useTheme`) and scroll-reveal animations (`useReveal`).
- Print-to-PDF single-page CV via dedicated `print.css`.
- Single source of truth for all content in `src/data/cv.ts` — website and printable CV both read from it.
- Bun-native build (`scripts/build.ts`) producing minified, hashed assets in `dist/`, with no Vite or bundler config.
- Legacy 8-bit gamified résumé preserved under `game/`, served at `/game/`.
- Automated GitHub Pages deployment via GitHub Actions.

## Tech Stack

| Area | Technology |
| --- | --- |
| Language | TypeScript, JavaScript |
| UI | React 19, React DOM 19 |
| Runtime / Toolchain | Bun (≥ 1.2) — dev server, bundler, scripts |
| Markup / Styles | HTML5, CSS (theme/global/print) |
| Deployment | GitHub Pages via GitHub Actions |

## Getting Started

### Prerequisites

Requires [Bun](https://bun.sh) ≥ 1.2.

### Installation

```bash
bun install
```

### Running

```bash
bun run dev      # dev server with HMR (Bun serves ./index.html)
```

### Build & preview

```bash
bun run build    # bundles to dist/, copies public/ and game/ into dist/
bun run preview  # serves dist/ at http://localhost:4173
```

`scripts/build.ts` does three things:

1. Bundles the React app from `index.html` into `dist/` (minified, hashed assets).
2. Copies everything in `public/` to `dist/` (favicon, `cv.md`).
3. Copies the legacy 8-bit résumé from `game/` to `dist/game/`.

## Project Structure

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
.github/workflows/    # deploy.yml (prod → gh-pages root) + preview.yml (PR previews)
```

## Editing content

All copy lives in [`src/data/cv.ts`](src/data/cv.ts). Update roles, skills, projects,
and contact details there — both the website and the printable CV read from it.
The standalone Markdown CV for download is [`public/cv.md`](public/cv.md); keep it in
sync when you change `cv.ts`.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds with Bun and
publishes `dist/` to the **`gh-pages`** branch root (preserving any live PR previews
under `pr-preview/`).

> **One-time setup:** In the GitHub repo, go to **Settings → Pages → Build and
> deployment → Source** and select **"Deploy from a branch"**, then choose the
> **`gh-pages`** branch and **`/ (root)`** folder. This single Pages source serves both
> production (`/`) and PR previews (`/pr-preview/pr-N/`).

### PR previews

Every pull request is published to a live URL so changes can be reviewed before merging:

```
https://jackinf.github.io/pr-preview/pr-<number>/
```

`.github/workflows/preview.yml` builds the PR and deploys it to `gh-pages` under
`pr-preview/pr-<number>/`, posts the link as a comment, rebuilds on each push, and
removes the directory when the PR closes. Production redeploys never wipe active
previews (`clean-exclude`), and all asset paths are relative so the same build works
at the root and under a preview subpath.

> Because `pull_request` workflows run from the version on the **base** branch, previews
> activate for PRs opened **after** this workflow lands on `master`.

## Legacy site

The previous 8-bit side-scrolling résumé now lives in [`game/`](game/) and stays live at
[`/game/`](https://jackinf.github.io/game/), linked from the footer of the new portfolio.
