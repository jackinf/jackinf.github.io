import CFG from '../config.js';

export default class InputManager {
  constructor(maxScroll) {
    this.maxScroll = maxScroll;
    this.position = 0;
    this._touchLastX = 0;
    this._bound = false;
  }

  bind(element) {
    if (this._bound) return;
    this._bound = true;

    element.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      this.position = Math.max(0, Math.min(this.maxScroll, this.position + delta));
    }, { passive: false });

    element.addEventListener('touchstart', (e) => {
      this._touchLastX = e.touches[0].clientX;
    }, { passive: true });

    element.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const x = e.touches[0].clientX;
      const dx = this._touchLastX - x;
      this._touchLastX = x;
      this.position = Math.max(0, Math.min(this.maxScroll, this.position + dx * CFG.camera.touchMultiplier));
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      const step = CFG.camera.keyboardStep;
      if (e.key === 'ArrowRight' || e.key === 'd') {
        this.position = Math.min(this.maxScroll, this.position + step);
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        this.position = Math.max(0, this.position - step);
      }
    });
  }

  get progress() {
    return this.maxScroll > 0 ? this.position / this.maxScroll : 0;
  }

  scrollTo(progress) {
    this.position = Math.max(0, Math.min(this.maxScroll, progress * this.maxScroll));
  }
}
