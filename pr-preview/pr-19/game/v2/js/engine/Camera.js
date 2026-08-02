import CFG from '../config.js';

export default class Camera {
  constructor(worldWidth, viewportWidth) {
    this.worldWidth = worldWidth;
    this.viewportWidth = viewportWidth;
    this.x = 0;
    this.targetX = 0;
    this.smoothing = CFG.camera.smoothing;
  }

  update(progress) {
    this.targetX = progress * (this.worldWidth - this.viewportWidth);
    this.x += (this.targetX - this.x) * this.smoothing;
  }

  getLayerOffset(speed) {
    return -this.x * speed;
  }
}
