/**
 * Static preview server for the production build in `dist/`.
 * Run `bun run build` first, then `bun run preview`.
 */
import { existsSync, statSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const dist = `${root}dist`;

if (!existsSync(dist)) {
  console.error("✗ dist/ not found. Run `bun run build` first.");
  process.exit(1);
}

const server = Bun.serve({
  port: 4173,
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);

    // Directory → index.html (root and /game/).
    if (path.endsWith("/")) path += "index.html";

    let filePath = `${dist}${path}`;

    // Fallback to the requested directory's index, else the root index.
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      const dirIndex = `${dist}${path.replace(/\/?$/, "/")}index.html`;
      filePath = existsSync(dirIndex) ? dirIndex : `${dist}/index.html`;
    }

    return new Response(Bun.file(filePath));
  },
});

console.log(`✓ Preview running at http://localhost:${server.port}`);
console.log(`  Legacy game at http://localhost:${server.port}/game/`);
