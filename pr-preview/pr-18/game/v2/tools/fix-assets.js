#!/usr/bin/env node

/**
 * Post-processes generated assets:
 *  1. Removes the baked-in checkerboard transparency pattern
 *  2. Resizes to reasonable dimensions
 *
 * Usage: node fix-assets.js
 */

import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_ROOT = join(__dirname, '..', 'assets');

// Target sizes per category
const SIZE_MAP = {
  'character': { height: 128 },      // character sprites
  'backgrounds': { height: 600 },    // parallax backgrounds
  'sections': { height: 256 },       // section elements
  'ui': { height: 64 },              // ui elements
  'decorative': { height: 192 },     // decorative elements
};

// The checkerboard pattern uses two colors — light gray and white
// Typical values: white (#ffffff / 255,255,255) and light gray (#e8e8e8 / ~232,232,232)
// or (#cccccc / 204,204,204). We'll detect pixels that are near-white/light-gray
// and in the checkerboard pattern, replacing them with transparent.

/**
 * Remove checkerboard transparency pattern from a raw RGBA buffer.
 * The pattern consists of alternating squares of ~white and ~light-gray.
 */
async function removeCheckerboard(inputPath, outputPath, targetHeight) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Read raw pixel data
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const buf = Buffer.from(data);

  // Detect the checkerboard cell size by sampling the top-left corner
  // Look for alternating color bands
  const cellSize = detectCellSize(buf, w, h);

  if (cellSize > 0) {
    // For each pixel, check if it's part of the checkerboard pattern
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        const r = buf[idx];
        const g = buf[idx + 1];
        const b = buf[idx + 2];

        // Check if this pixel matches checkerboard colors
        if (isCheckerboardColor(r, g, b)) {
          // Verify it's in a checkerboard position by checking neighbors
          const cellX = Math.floor(x / cellSize);
          const cellY = Math.floor(y / cellSize);
          const isEvenCell = (cellX + cellY) % 2 === 0;

          // Sample the expected other color at the adjacent cell
          const neighborX = Math.min(w - 1, x + cellSize);
          const nIdx = (y * w + neighborX) * 4;
          const nr = buf[nIdx];
          const ng = buf[nIdx + 1];
          const nb = buf[nIdx + 2];

          if (isCheckerboardColor(nr, ng, nb) && colorsAreDifferent(r, g, b, nr, ng, nb)) {
            // This is a checkerboard pixel — make transparent
            buf[idx + 3] = 0;
          } else if (isCheckerboardColor(r, g, b)) {
            // Single color region that's checker-colored — check a larger area
            // If surrounded by other checker-colored pixels, it's background
            if (isCheckerboardRegion(buf, w, h, x, y, cellSize)) {
              buf[idx + 3] = 0;
            }
          }
        }
      }
    }
  }

  // Create output image from modified buffer, then resize
  let pipeline = sharp(buf, { raw: { width: w, height: h, channels: 4 } }).png();

  if (targetHeight && h > targetHeight) {
    pipeline = pipeline.resize({ height: targetHeight, fit: 'inside' });
  }

  await pipeline.toFile(outputPath);
}

/**
 * Detect checkerboard cell size by analyzing the top-left corner
 */
function detectCellSize(buf, w, h) {
  // Sample along the top row — find where color alternates
  const getPixel = (x, y) => {
    const idx = (y * w + x) * 4;
    return [buf[idx], buf[idx + 1], buf[idx + 2]];
  };

  // Start from top-left, which should be a checkerboard area
  const [r0, g0, b0] = getPixel(0, 0);
  if (!isCheckerboardColor(r0, g0, b0)) {
    // Top-left isn't checkerboard, try to find it
    return detectCellSizeFromEdges(buf, w, h);
  }

  // Walk right until color changes
  for (let x = 1; x < Math.min(w, 100); x++) {
    const [r, g, b] = getPixel(x, 0);
    if (isCheckerboardColor(r, g, b) && colorsAreDifferent(r0, g0, b0, r, g, b)) {
      return x; // cell size found
    }
  }

  return 0; // not detected
}

function detectCellSizeFromEdges(buf, w, h) {
  // Try bottom-right corner
  const getPixel = (x, y) => {
    const idx = (y * w + x) * 4;
    return [buf[idx], buf[idx + 1], buf[idx + 2]];
  };

  for (const startY of [h - 1, h - 2, 0, 1]) {
    const [r0, g0, b0] = getPixel(0, startY);
    if (!isCheckerboardColor(r0, g0, b0)) continue;

    for (let x = 1; x < Math.min(w, 100); x++) {
      const [r, g, b] = getPixel(x, startY);
      if (isCheckerboardColor(r, g, b) && colorsAreDifferent(r0, g0, b0, r, g, b)) {
        return x;
      }
    }
  }

  // Try a simpler heuristic: common cell sizes
  for (const cs of [16, 12, 8, 20, 24, 32]) {
    const [r1, g1, b1] = getPixel(0, 0);
    const [r2, g2, b2] = getPixel(cs, 0);
    if (isCheckerboardColor(r1, g1, b1) && isCheckerboardColor(r2, g2, b2) &&
        colorsAreDifferent(r1, g1, b1, r2, g2, b2)) {
      return cs;
    }
  }

  return 16; // default fallback
}

/**
 * Check if a color matches typical checkerboard background colors.
 * The two colors are typically:
 *  - White/near-white: rgb(255,255,255) or rgb(252-255, 252-255, 252-255)
 *  - Light gray: rgb(200-240, 200-240, 200-240)
 */
function isCheckerboardColor(r, g, b) {
  // Must be gray-ish (r ≈ g ≈ b)
  const maxDiff = Math.max(r, g, b) - Math.min(r, g, b);
  if (maxDiff > 15) return false;

  // Must be light (avg > 190)
  const avg = (r + g + b) / 3;
  return avg > 190;
}

function colorsAreDifferent(r1, g1, b1, r2, g2, b2) {
  const diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
  return diff > 10 && diff < 120; // different but both light
}

/**
 * Check if a pixel is in a region that looks like checkerboard
 */
function isCheckerboardRegion(buf, w, h, x, y, cellSize) {
  // Sample a few neighbors at cell-size distance
  let checkerCount = 0;
  let total = 0;

  for (const [dx, dy] of [[cellSize, 0], [-cellSize, 0], [0, cellSize], [0, -cellSize]]) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;

    total++;
    const idx = (ny * w + nx) * 4;
    const r = buf[idx], g = buf[idx + 1], b = buf[idx + 2];
    if (isCheckerboardColor(r, g, b)) checkerCount++;
  }

  return total > 0 && checkerCount / total >= 0.5;
}

/**
 * Walk all asset directories and process each PNG
 */
async function processAll() {
  console.log('Post-processing assets...\n');

  let processed = 0;
  let errors = 0;

  for (const [category, sizeConfig] of Object.entries(SIZE_MAP)) {
    const dir = join(ASSETS_ROOT, category);
    let files;
    try {
      files = readdirSync(dir).filter(f => extname(f) === '.png');
    } catch {
      continue;
    }

    for (const file of files) {
      const inputPath = join(dir, file);
      const outputPath = inputPath; // overwrite in place

      try {
        const meta = await sharp(inputPath).metadata();
        console.log(`  [fix] ${category}/${file} (${meta.width}x${meta.height} → h:${sizeConfig.height})`);
        await removeCheckerboard(inputPath, outputPath, sizeConfig.height);
        processed++;
      } catch (err) {
        console.error(`  [err] ${category}/${file}: ${err.message}`);
        errors++;
      }
    }
  }

  console.log(`\nDone! Processed: ${processed}, Errors: ${errors}`);
}

processAll().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
