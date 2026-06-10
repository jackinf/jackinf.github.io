/**
 * Keyboard (WASD / arrows, shift to boost) and pointer-drag steering.
 * The camera never yaws, so screen space maps directly to world XZ.
 */
export class Input {
  private keys = new Set<string>();
  private dragOrigin: { x: number; y: number } | null = null;
  private dragVec = { x: 0, z: 0 };
  /** Set true by any user steering; used to cancel the auto tour. */
  steered = false;

  constructor(el: HTMLElement) {
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      this.keys.add(e.key.toLowerCase());
      if (this.dir().x !== 0 || this.dir().z !== 0) this.steered = true;
    });
    window.addEventListener("keyup", (e) => this.keys.delete(e.key.toLowerCase()));
    window.addEventListener("blur", () => this.keys.clear());

    el.addEventListener("pointerdown", (e) => {
      this.dragOrigin = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", (e) => {
      if (!this.dragOrigin) return;
      const dx = (e.clientX - this.dragOrigin.x) / 70;
      const dy = (e.clientY - this.dragOrigin.y) / 70;
      const len = Math.hypot(dx, dy);
      const clamp = len > 1 ? 1 / len : 1;
      this.dragVec = { x: dx * clamp, z: dy * clamp };
      if (len > 0.15) this.steered = true;
    });
    const end = () => {
      this.dragOrigin = null;
      this.dragVec = { x: 0, z: 0 };
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }

  dir(): { x: number; z: number } {
    let x = 0;
    let z = 0;
    if (this.keys.has("w") || this.keys.has("arrowup")) z -= 1;
    if (this.keys.has("s") || this.keys.has("arrowdown")) z += 1;
    if (this.keys.has("a") || this.keys.has("arrowleft")) x -= 1;
    if (this.keys.has("d") || this.keys.has("arrowright")) x += 1;
    x += this.dragVec.x;
    z += this.dragVec.z;
    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }
    return { x, z };
  }

  boost(): boolean {
    return this.keys.has("shift");
  }
}
