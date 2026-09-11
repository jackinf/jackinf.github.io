/**
 * Loads all game assets via PixiJS Assets with progress tracking.
 * Falls back to colored rectangles when image files are missing.
 */

const ASSET_MANIFEST = {
  // Character spritesheets
  'char-idle': 'assets/character/char-idle.png',
  'char-walk': 'assets/character/char-walk.png',
  'char-wave': 'assets/character/char-wave.png',

  // Backgrounds
  'bg-sky': 'assets/backgrounds/bg-sky.png',
  'bg-city-far': 'assets/backgrounds/bg-city-far.png',
  'bg-hills-mid': 'assets/backgrounds/bg-hills-mid.png',
  'bg-trees-near': 'assets/backgrounds/bg-trees-near.png',
  'bg-ground': 'assets/backgrounds/bg-ground.png',

  // Section markers
  'gate-arch': 'assets/sections/gate-arch.png',
  'signpost': 'assets/sections/signpost.png',

  // Intro
  'intro-terminal': 'assets/sections/intro-terminal.png',
  'intro-desk': 'assets/sections/intro-desk.png',

  // Experience
  'exp-board': 'assets/sections/exp-board.png',
  'exp-building-1': 'assets/sections/exp-building-1.png',
  'exp-building-2': 'assets/sections/exp-building-2.png',
  'exp-building-3': 'assets/sections/exp-building-3.png',
  'exp-building-4': 'assets/sections/exp-building-4.png',

  // Projects
  'project-laptop': 'assets/sections/project-laptop.png',
  'project-cloud': 'assets/sections/project-cloud.png',

  // Education
  'edu-university': 'assets/sections/edu-university.png',
  'edu-diploma': 'assets/sections/edu-diploma.png',
  'edu-tree': 'assets/sections/edu-tree.png',

  // Contact
  'contact-mailbox': 'assets/sections/contact-mailbox.png',

  // Decorative
  'deco-lamp-post': 'assets/decorative/deco-lamp-post.png',
  'deco-bench': 'assets/decorative/deco-bench.png',
  'deco-plant-pot': 'assets/decorative/deco-plant-pot.png',
};

export default class AssetLoader {
  constructor(onProgress) {
    this.onProgress = onProgress || (() => {});
    this.textures = {};
    this.fallbackColors = {
      'char-idle': 0xe8c4c4,
      'char-walk': 0xe8c4c4,
      'char-wave': 0xe8c4c4,
      'bg-sky': 0x1a1a2e,
      'bg-city-far': 0x2a2a4e,
      'bg-hills-mid': 0xa8c5a0,
      'bg-trees-near': 0x7a9a72,
      'bg-ground': 0x3a3a4e,
      'gate-arch': 0x6b7b8d,
      'signpost': 0x8b7b6d,
      'intro-terminal': 0x4a4a6e,
      'intro-desk': 0x5a4a3e,
      'exp-board': 0x8b7b6d,
      'exp-building-1': 0x5a6a7e,
      'exp-building-2': 0x5a7a6e,
      'exp-building-3': 0x7a5a6e,
      'exp-building-4': 0x6a6a7e,
      'project-laptop': 0x4a5a6e,
      'project-cloud': 0x6a8aae,
      'edu-university': 0x7a7a6e,
      'edu-diploma': 0xc4b490,
      'edu-tree': 0x6a8a5a,
      'contact-mailbox': 0x5a6a8e,
      'deco-lamp-post': 0x8a8a6e,
      'deco-bench': 0x6a5a4e,
      'deco-plant-pot': 0x5a7a5e,
    };
  }

  /**
   * Creates a colored rectangle texture as fallback
   */
  createFallbackTexture(app, key, width, height) {
    const color = this.fallbackColors[key] || 0x555555;
    const g = new PIXI.Graphics();
    g.roundRect(0, 0, width, height, 4);
    g.fill({ color, alpha: 0.8 });
    g.stroke({ color: 0xffffff, alpha: 0.15, width: 1 });
    return app.renderer.generateTexture(g);
  }

  /**
   * Load all assets, falling back to colored rects on failure
   */
  async load(app) {
    const keys = Object.keys(ASSET_MANIFEST);
    const total = keys.length;
    let loaded = 0;

    for (const key of keys) {
      try {
        const texture = await PIXI.Assets.load(ASSET_MANIFEST[key]);
        this.textures[key] = texture;
      } catch {
        // Asset not generated yet — create a placeholder
        const isBackground = key.startsWith('bg-');
        const w = isBackground ? 1920 : 128;
        const h = isBackground ? (key === 'bg-ground' ? 200 : 1080) : 128;
        this.textures[key] = this.createFallbackTexture(app, key, w, h);
      }
      loaded++;
      this.onProgress(loaded / total);
    }

    return this.textures;
  }

  get(key) {
    return this.textures[key] || null;
  }
}
