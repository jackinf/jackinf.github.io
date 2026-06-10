/**
 * Procedural canvas textures used as placeholders until custom Midjourney
 * textures are dropped into public/game-3d-assets/textures/.
 */
import * as THREE from "three";

/** Deterministic PRNG so the town looks the same on every visit. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Emissive facade map: dark field with a grid of lit windows.
 * Used as `emissiveMap`, so unlit windows stay black (no glow).
 */
export function makeFacadeTexture(accent: string, seed: number): THREE.CanvasTexture {
  const rnd = mulberry32(seed);
  const w = 128;
  const h = 256;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000000";
  g.fillRect(0, 0, w, h);

  const cols = 4;
  const rows = 9;
  const cw = w / cols;
  const ch = h / rows;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const lit = rnd();
      if (lit < 0.42) continue;
      const warm = rnd() < 0.78;
      g.fillStyle = warm ? "#ffd9a0" : accent;
      g.globalAlpha = lit > 0.85 ? 1 : 0.55;
      g.fillRect(x * cw + cw * 0.26, y * ch + ch * 0.24, cw * 0.48, ch * 0.5);
      g.globalAlpha = 1;
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

/** Floating district sign rendered to a sprite. */
export function makeSignTexture(
  text: string,
  accent: string,
  sub?: string,
): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 192;
  const g = c.getContext("2d")!;

  const r = 26;
  g.fillStyle = "rgba(8, 10, 20, 0.82)";
  g.strokeStyle = accent;
  g.lineWidth = 6;
  g.beginPath();
  g.roundRect(6, 6, c.width - 12, c.height - 12, r);
  g.fill();
  g.stroke();

  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillStyle = "#f4f6ff";
  g.font = "700 52px 'JetBrains Mono', monospace";
  g.fillText(text.toUpperCase(), c.width / 2, sub ? 74 : c.height / 2, c.width - 60);
  if (sub) {
    g.fillStyle = accent;
    g.font = "500 30px 'JetBrains Mono', monospace";
    g.fillText(sub, c.width / 2, 134, c.width - 60);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Twilight gradient for the sky dome. */
export function makeSkyTexture(top: string, horizon: string, glow: string): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 16;
  c.height = 512;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, top);
  grad.addColorStop(0.55, top);
  grad.addColorStop(0.82, horizon);
  grad.addColorStop(1, glow);
  g.fillStyle = grad;
  g.fillRect(0, 0, c.width, c.height);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
