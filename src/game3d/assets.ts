/**
 * Custom asset pipeline.
 *
 * Generated assets (Meshy GLBs, Midjourney textures, ElevenLabs audio) go into
 * `public/game-3d-assets/` (copied to `dist/game-3d-assets/` by the build).
 * Every loader here degrades gracefully: if a file is missing, the procedural
 * placeholder stays. See game-3d/ASSETS.md for the full generation list.
 *
 * Note: the Bun HMR dev server does not serve public/, so custom assets only
 * show up via `bun run build && bun run preview` (or on GitHub Pages).
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ASSET_BASE } from "./config";

const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

/**
 * True if the file exists. The preview server falls back to index.html for
 * unknown paths, so an HTML content type also counts as "missing".
 */
async function exists(path: string): Promise<boolean> {
  try {
    const res = await fetch(path, { method: "HEAD" });
    if (!res.ok) return false;
    const type = res.headers.get("content-type") ?? "";
    return !type.includes("text/html");
  } catch {
    return false;
  }
}

export async function tryLoadModel(key: string): Promise<THREE.Object3D | null> {
  const path = `${ASSET_BASE}/models/${key}.glb`;
  if (!(await exists(path))) return null;
  try {
    const gltf = await gltfLoader.loadAsync(path);
    return gltf.scene;
  } catch (err) {
    console.warn(`[game3d] failed to load ${path}`, err);
    return null;
  }
}

/**
 * Replaces a group's placeholder children with a custom GLB when available.
 * `fit` is the target diameter the model is scaled to.
 */
export function swapInModel(group: THREE.Group, key: string, fit: number, yOffset = 0): void {
  void tryLoadModel(key).then((model) => {
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const diameter = Math.max(size.x, size.z, 0.001);
    const scale = fit / diameter;
    model.scale.setScalar(scale);
    const fitted = new THREE.Box3().setFromObject(model);
    model.position.y += yOffset - fitted.min.y;
    model.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    group.clear();
    group.add(model);
  });
}

export async function tryLoadTexture(name: string): Promise<THREE.Texture | null> {
  for (const ext of ["png", "jpg", "webp"]) {
    const path = `${ASSET_BASE}/textures/${name}.${ext}`;
    if (await exists(path)) {
      try {
        const tex = await textureLoader.loadAsync(path);
        tex.colorSpace = THREE.SRGBColorSpace;
        return tex;
      } catch (err) {
        console.warn(`[game3d] failed to load ${path}`, err);
      }
    }
  }
  return null;
}

export async function tryLoadAudio(name: string): Promise<HTMLAudioElement | null> {
  const path = `${ASSET_BASE}/audio/${name}.mp3`;
  if (!(await exists(path))) return null;
  const audio = new Audio(path);
  audio.preload = "auto";
  return audio;
}
