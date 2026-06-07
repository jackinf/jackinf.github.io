/**
 * Production build for the portfolio.
 *
 * 1. Bundles the React app from the HTML entrypoint into `dist/` (minified, hashed assets).
 * 2. Copies everything in `public/` to `dist/` (favicon, cv.md, og image, etc.).
 * 3. Copies the legacy 8-bit resume from `game/` to `dist/game/` so it stays live.
 *
 * Output `dist/` is what GitHub Actions uploads to GitHub Pages.
 */
import { rm, mkdir, cp, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const dist = `${root}dist`;

console.log("→ Cleaning dist/");
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

console.log("→ Bundling React app from index.html");
const result = await Bun.build({
  entrypoints: [`${root}index.html`],
  outdir: dist,
  minify: true,
  // Code-split so the heavy PDF renderer (@react-pdf/renderer) lands in its
  // own chunk and is fetched only when "Download CV" is clicked.
  splitting: true,
  sourcemap: "linked",
  naming: {
    entry: "[dir]/[name].[ext]",
    chunk: "assets/[name]-[hash].[ext]",
    asset: "assets/[name]-[hash].[ext]",
  },
});

if (!result.success) {
  console.error("✗ Build failed:");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}
console.log(`  bundled ${result.outputs.length} file(s)`);

// Post-process the built index.html:
//  - strip the original dev <script src="./src/main.tsx"> Bun leaves behind
//    (Bun injects the hashed bundle into <head>; the dev tag would 404)
//  - inject the favicon <link> here so Bun never tries to resolve the
//    public/ asset during bundling (it 404s at build time otherwise)
const htmlPath = `${dist}/index.html`;
const html = await readFile(htmlPath, "utf8");
let out = html.replace(
  /\s*<script[^>]*src="\.\/src\/main\.tsx"[^>]*><\/script>/g,
  "",
);
out = out.replace(
  "</head>",
  // Relative href (not "/favicon.svg") so the build works both at the site
  // root AND under a subpath (e.g. PR previews at /pr-preview/pr-N/).
  '  <link rel="icon" href="./favicon.svg" type="image/svg+xml" />\n  </head>',
);
if (out !== html) {
  await writeFile(htmlPath, out);
  console.log("  post-processed index.html (favicon + dev script)");
}

if (existsSync(`${root}public`)) {
  console.log("→ Copying public/ → dist/");
  for (const entry of await readdir(`${root}public`)) {
    await cp(`${root}public/${entry}`, `${dist}/${entry}`, { recursive: true });
  }
}

console.log("→ Copying game/ → dist/game/");
await cp(`${root}game`, `${dist}/game`, { recursive: true });

// GitHub Pages serves the deploy branch (gh-pages) through Jekyll by default,
// which skips files/dirs beginning with "_". A .nojekyll file disables that so
// hashed asset names are served verbatim.
await writeFile(`${dist}/.nojekyll`, "");

console.log("✓ Build complete → dist/");
