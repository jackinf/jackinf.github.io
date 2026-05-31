#!/usr/bin/env node

/**
 * Gemini API batch asset generation script.
 *
 * Usage:
 *   GEMINI_API_KEY=your_key node generate-assets.js
 *
 * Options:
 *   --force     Regenerate all assets (skip existing check)
 *   --only=key  Generate only a specific asset by key
 *
 * Requires: npm install @google/genai
 */

import { GoogleGenAI } from '@google/genai';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Parse args
const args = process.argv.slice(2);
const force = args.includes('--force');
const onlyArg = args.find(a => a.startsWith('--only='));
const onlyKey = onlyArg ? onlyArg.split('=')[1] : null;

// Load manifest
const manifest = JSON.parse(readFileSync(join(__dirname, 'asset-manifest.json'), 'utf-8'));
const STYLE_PREFIX = manifest.stylePrefix;

// Init Gemini
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY environment variable is required.');
  console.error('Usage: GEMINI_API_KEY=your_key node generate-assets.js');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generateAsset(asset) {
  const outputPath = join(ROOT, asset.path);

  // Skip if exists (unless --force)
  if (!force && existsSync(outputPath)) {
    console.log(`  [skip] ${asset.key} — already exists`);
    return;
  }

  // Ensure directory exists
  const dir = dirname(outputPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const fullPrompt = `${STYLE_PREFIX} ${asset.prompt}`;

  console.log(`  [gen]  ${asset.key} (${asset.aspectRatio})...`);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: fullPrompt,
      config: {
        responseModalities: ['IMAGE'],
        imageConfig: {
          aspectRatio: asset.aspectRatio || '1:1',
        },
      },
    });

    // Extract image from response
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      console.error(`  [err]  ${asset.key} — no content in response`);
      return;
    }

    const imagePart = parts.find(p => p.inlineData);
    if (!imagePart) {
      console.error(`  [err]  ${asset.key} — no image in response`);
      // Log text response if any
      const textPart = parts.find(p => p.text);
      if (textPart) console.error(`         Response: ${textPart.text.slice(0, 200)}`);
      return;
    }

    const imageData = Buffer.from(imagePart.inlineData.data, 'base64');
    writeFileSync(outputPath, imageData);
    console.log(`  [ok]   ${asset.key} — saved (${(imageData.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`  [err]  ${asset.key} — ${err.message}`);
  }
}

async function main() {
  console.log(`\nGemini Asset Generator`);
  console.log(`=====================`);
  console.log(`Assets: ${manifest.assets.length}`);
  console.log(`Force: ${force}`);
  if (onlyKey) console.log(`Only: ${onlyKey}`);
  console.log();

  const assets = onlyKey
    ? manifest.assets.filter(a => a.key === onlyKey)
    : manifest.assets;

  if (assets.length === 0) {
    console.error(`No assets matched key: ${onlyKey}`);
    process.exit(1);
  }

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const asset of assets) {
    const outputPath = join(ROOT, asset.path);
    if (!force && existsSync(outputPath)) {
      skipped++;
      console.log(`  [skip] ${asset.key}`);
      continue;
    }

    await generateAsset(asset);
    generated++;

    // Rate limit: 2s delay between API calls
    if (generated < assets.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\nDone! Generated: ${generated}, Skipped: ${skipped}, Errors: ${errors}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
