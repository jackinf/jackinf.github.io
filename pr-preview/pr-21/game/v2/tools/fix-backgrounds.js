#!/usr/bin/env node

/**
 * Removes white/near-white backgrounds from sprite images (not full backgrounds).
 * Uses flood-fill from corners to only remove the outer background,
 * preserving any white pixels inside the actual artwork.
 *
 * Usage: node fix-backgrounds.js
 */

import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_ROOT = join(__dirname, '..', 'assets');

// Only process sprite images (not full-scene backgrounds like bg-sky)
const DIRS_TO_PROCESS = ['character', 'sections', 'ui', 'decorative'];

// bg-sky and bg-ground are full backgrounds, don't remove their white.
// bg-city-far, bg-hills-mid, bg-trees-near should have transparent bg.
const BG_FILES_TO_PROCESS = ['bg-city-far.png', 'bg-hills-mid.png', 'bg-trees-near.png', 'bg-ground.png'];

const WHITE_THRESHOLD = 240; // pixels with r,g,b all above this are "white"
const TOLERANCE = 30;        // flood fill color tolerance

async function removeWhiteBackground(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const buf = Buffer.from(data);

  // Create visited array
  const visited = new Uint8Array(w * h);

  // Get pixel color
  const getPixel = (x, y) => {
    const idx = (y * w + x) * 4;
    return [buf[idx], buf[idx + 1], buf[idx + 2], buf[idx + 3]];
  };

  const isNearWhite = (r, g, b) => {
    return r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
  };

  const colorMatch = (r1, g1, b1, r2, g2, b2) => {
    return Math.abs(r1 - r2) <= TOLERANCE &&
           Math.abs(g1 - g2) <= TOLERANCE &&
           Math.abs(b1 - b2) <= TOLERANCE;
  };

  // Flood fill from seed points (corners and edges)
  const seeds = [];

  // Add corner seeds
  for (const x of [0, w - 1]) {
    for (const y of [0, h - 1]) {
      seeds.push([x, y]);
    }
  }
  // Add edge seeds every 10px
  for (let x = 0; x < w; x += 10) {
    seeds.push([x, 0]);
    seeds.push([x, h - 1]);
  }
  for (let y = 0; y < h; y += 10) {
    seeds.push([0, y]);
    seeds.push([w - 1, y]);
  }

  let made_transparent = 0;

  for (const [sx, sy] of seeds) {
    const [sr, sg, sb] = getPixel(sx, sy);
    if (!isNearWhite(sr, sg, sb)) continue;

    // BFS flood fill
    const queue = [[sx, sy]];
    const key = sy * w + sx;
    if (visited[key]) continue;
    visited[key] = 1;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      const idx = (cy * w + cx) * 4;
      const r = buf[idx], g = buf[idx + 1], b = buf[idx + 2];

      // Make transparent
      buf[idx + 3] = 0;
      made_transparent++;

      // Check 4 neighbors
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;

        const nkey = ny * w + nx;
        if (visited[nkey]) continue;
        visited[nkey] = 1;

        const [nr, ng, nb] = getPixel(nx, ny);
        if (isNearWhite(nr, ng, nb) && colorMatch(sr, sg, sb, nr, ng, nb)) {
          queue.push([nx, ny]);
        }
      }
    }
  }

  await sharp(buf, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(outputPath);

  return made_transparent;
}

async function main() {
  console.log('Removing white backgrounds from sprites...\n');

  let processed = 0;

  for (const dir of DIRS_TO_PROCESS) {
    const fullDir = join(ASSETS_ROOT, dir);
    let files;
    try {
      files = readdirSync(fullDir).filter(f => extname(f) === '.png');
    } catch { continue; }

    for (const file of files) {
      const path = join(fullDir, file);
      const count = await removeWhiteBackground(path, path);
      console.log(`  [fix] ${dir}/${file} — ${count} pixels made transparent`);
      processed++;
    }
  }

  // Process select background files
  const bgDir = join(ASSETS_ROOT, 'backgrounds');
  for (const file of BG_FILES_TO_PROCESS) {
    const path = join(bgDir, file);
    try {
      const count = await removeWhiteBackground(path, path);
      console.log(`  [fix] backgrounds/${file} — ${count} pixels made transparent`);
      processed++;
    } catch (err) {
      console.log(`  [skip] backgrounds/${file} — ${err.message}`);
    }
  }

  console.log(`\nDone! Processed: ${processed}`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
