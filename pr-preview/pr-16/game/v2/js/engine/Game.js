/**
 * Core game: PixiJS application setup, parallax layers, character, ticker loop.
 */
import Camera from './Camera.js';
import InputManager from './InputManager.js';
import AssetLoader from './AssetLoader.js';
import SectionManager from '../sections/SectionManager.js';
import CFG from '../config.js';

const LAYERS = [
  { key: 'bg-sky', speed: CFG.parallax.sky, tiled: false },
  { key: 'bg-city-far', speed: CFG.parallax.cityFar, tiled: true },
  { key: 'bg-hills-mid', speed: CFG.parallax.hillsMid, tiled: true },
  { key: 'bg-trees-near', speed: CFG.parallax.treesNear, tiled: true },
];

export default class Game {
  constructor() {
    this.app = null;
    this.camera = null;
    this.input = null;
    this.loader = null;
    this.textures = {};
    this.layers = {};
    this.character = null;
    this.sectionManager = null;
    this.groundY = 0;
    this.prevCameraX = 0;
    this.charFrameIndex = 0;
    this.charFrameTimer = 0;
    this.charState = 'idle';
    this.charFrames = { idle: [], walk: [] };
  }

  async init(container, onProgress) {
    this.app = new PIXI.Application();
    await this.app.init({
      resizeTo: container,
      backgroundColor: CFG.colors.bgDark,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });
    container.appendChild(this.app.canvas);

    const vw = this.app.screen.width;
    const vh = this.app.screen.height;
    this.groundY = vh * CFG.world.groundYRatio;

    this.camera = new Camera(CFG.world.width, vw);
    this.input = new InputManager(CFG.world.width * CFG.camera.scrollMultiplier);
    this.input.bind(this.app.canvas);

    this.loader = new AssetLoader(onProgress);
    this.textures = await this.loader.load(this.app);

    this.buildParallaxLayers();
    this.buildGround();
    this.buildCharacter();

    this.sectionManager = new SectionManager(this.app, this.textures, this.groundY, CFG.world.width);
    this.sectionManager.build();

    this.app.ticker.add(this.update, this);
    window.addEventListener('resize', () => this.onResize());
  }

  buildParallaxLayers() {
    const vh = this.app.screen.height;
    const vw = this.app.screen.width;

    for (const layer of LAYERS) {
      const tex = this.textures[layer.key];
      if (!tex) continue;

      if (layer.tiled) {
        const tiling = new PIXI.TilingSprite({
          texture: tex,
          width: vw,
          height: vh * CFG.parallax.tiledLayerHeight,
        });
        tiling.y = vh * CFG.parallax.tiledLayerY;
        tiling.label = layer.key;
        this.app.stage.addChild(tiling);
        this.layers[layer.key] = { sprite: tiling, speed: layer.speed, tiled: true };
      } else {
        const sprite = new PIXI.Sprite(tex);
        sprite.width = vw;
        sprite.height = vh;
        sprite.label = layer.key;
        this.app.stage.addChild(sprite);
        this.layers[layer.key] = { sprite, speed: layer.speed, tiled: false };
      }
    }
  }

  buildGround() {
    const vw = this.app.screen.width;
    const vh = this.app.screen.height;
    const tex = this.textures['bg-ground'];
    if (!tex) return;

    const ground = new PIXI.TilingSprite({
      texture: tex,
      width: vw,
      height: vh - this.groundY,
    });
    ground.y = this.groundY;
    ground.label = 'ground';
    this.app.stage.addChild(ground);
    this.layers['bg-ground'] = { sprite: ground, speed: CFG.parallax.ground, tiled: true };
  }

  sliceFrames(baseTexture, numFrames) {
    const frames = [];
    const frameWidth = Math.floor(baseTexture.width / numFrames);
    const frameHeight = baseTexture.height;
    for (let i = 0; i < numFrames; i++) {
      const rect = new PIXI.Rectangle(i * frameWidth, 0, frameWidth, frameHeight);
      frames.push(new PIXI.Texture({ source: baseTexture.source, frame: rect }));
    }
    return frames;
  }

  buildCharacter() {
    const idleTex = this.textures['char-idle'];
    const walkTex = this.textures['char-walk'];
    if (!idleTex) return;

    this.charFrames.idle = this.sliceFrames(idleTex, CFG.character.idleFrames);
    this.charFrames.walk = walkTex ? this.sliceFrames(walkTex, CFG.character.walkFrames) : this.charFrames.idle;

    this.character = new PIXI.Sprite(this.charFrames.idle[0]);
    this.character.anchor.set(0.5, 1);
    this.character.x = this.app.screen.width * CFG.character.xRatio;
    this.character.y = this.groundY;
    this.character.scale.set(CFG.character.scale);
    this.character.label = 'character';
    this.app.stage.addChild(this.character);
  }

  update(ticker) {
    const dt = ticker.deltaTime;
    const maxScroll = CFG.world.width * CFG.camera.scrollMultiplier;
    const progress = this.input.position / maxScroll;
    this.camera.update(Math.min(1, Math.max(0, progress)));

    const cameraDelta = Math.abs(this.camera.x - this.prevCameraX);
    const isMoving = cameraDelta > CFG.character.moveThreshold;
    this.prevCameraX = this.camera.x;

    this.updateCharacterAnimation(dt, isMoving);

    for (const [, layer] of Object.entries(this.layers)) {
      if (layer.tiled) {
        layer.sprite.tilePosition.x = this.camera.getLayerOffset(layer.speed);
      }
    }

    if (this.sectionManager) {
      this.sectionManager.update(this.camera.x, this.app.screen.width);
    }
  }

  updateCharacterAnimation(dt, isMoving) {
    if (!this.character || this.charFrames.idle.length === 0) return;

    const newState = isMoving ? 'walk' : 'idle';
    if (newState !== this.charState) {
      this.charState = newState;
      this.charFrameIndex = 0;
      this.charFrameTimer = 0;
    }

    this.charFrameTimer += dt;
    const frameSpeed = this.charState === 'walk' ? CFG.character.walkFrameSpeed : CFG.character.idleFrameSpeed;
    if (this.charFrameTimer > frameSpeed) {
      this.charFrameTimer = 0;
      const frames = this.charFrames[this.charState];
      this.charFrameIndex = (this.charFrameIndex + 1) % frames.length;
      this.character.texture = frames[this.charFrameIndex];
    }
  }

  onResize() {
    const vw = this.app.screen.width;
    const vh = this.app.screen.height;
    this.groundY = vh * CFG.world.groundYRatio;

    for (const [key, layer] of Object.entries(this.layers)) {
      if (key === 'bg-sky') {
        layer.sprite.width = vw;
        layer.sprite.height = vh;
      } else if (key === 'bg-ground') {
        layer.sprite.width = vw;
        layer.sprite.height = vh - this.groundY;
        layer.sprite.y = this.groundY;
      } else if (layer.tiled) {
        layer.sprite.width = vw;
        layer.sprite.height = vh * CFG.parallax.tiledLayerHeight;
        layer.sprite.y = vh * CFG.parallax.tiledLayerY;
      }
    }

    if (this.character) {
      this.character.x = vw * CFG.character.xRatio;
      this.character.y = this.groundY;
    }

    this.camera.viewportWidth = vw;
  }

  get scrollProgress() {
    const maxScroll = CFG.world.width * CFG.camera.scrollMultiplier;
    return this.camera ? Math.min(1, this.input.position / maxScroll) : 0;
  }

  get currentSection() {
    return this.sectionManager ? this.sectionManager.currentSection : 'intro';
  }
}
