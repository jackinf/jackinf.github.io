/**
 * /game-3d entry: a low-poly night town where each district is a chapter of
 * the CV. Fly the saucer (WASD / drag), hover a district to scan it. Bloom
 * post-processing makes every emissive surface glow.
 */
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import "./game3d.css";
import { BLOOM, CAMERA_OFFSET, DISTRICT_RADIUS, FOG_COLOR } from "./config";
import { buildEnvironment } from "./environment";
import { buildTown, updateDistricts } from "./town";
import type { District } from "./town";
import { buildUFO } from "./ufo";
import { Input } from "./input";
import { buildHUD } from "./hud";
import { AudioManager } from "./audio";

const root = document.getElementById("app")!;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Renderer + scene
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
root.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(FOG_COLOR, 110, 360);

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  900,
);

// Lights: cold moonlight + soft sky fill.
scene.add(new THREE.HemisphereLight(0x44557f, 0x0e1220, 1.0));
const moonlight = new THREE.DirectionalLight(0xbfd0ff, 0.9);
moonlight.position.set(-60, 90, -40);
moonlight.castShadow = true;
moonlight.shadow.mapSize.set(2048, 2048);
moonlight.shadow.camera.left = -75;
moonlight.shadow.camera.right = 75;
moonlight.shadow.camera.top = 75;
moonlight.shadow.camera.bottom = -75;
moonlight.shadow.camera.far = 260;
scene.add(moonlight);

// World
const districts = buildTown(scene);
buildEnvironment(
  scene,
  districts.map((d) => d.angle),
);
const ufo = buildUFO(scene, reducedMotion);

// Post-processing: render + bloom (emissives pop above the threshold).
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  BLOOM.strength,
  BLOOM.radius,
  BLOOM.threshold,
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// UI + audio + input
const hud = buildHUD(root);
const audio = new AudioManager();
void audio.preload(districts.map((d) => d.def.id));
const input = new Input(renderer.domElement);

let flying = false;
hud.onStart(() => {
  flying = true;
  audio.start();
});
hud.onSound(() => audio.toggle());

// Auto tour: fly from district to district, dwell, move on.
let tour = false;
let tourIndex = -1;
let tourDwell = 0;
hud.onTour(() => {
  tour = !tour;
  if (tour) {
    input.steered = false;
    tourIndex = -1;
    tourDwell = 0;
  }
  return tour;
});

function tourDirection(dt: number): { x: number; z: number } {
  if (tourIndex === -1) tourIndex = 0;
  const target = districts[tourIndex].center;
  const dx = target.x - ufo.position.x;
  const dz = target.z - ufo.position.z;
  const dist = Math.hypot(dx, dz);
  if (dist < DISTRICT_RADIUS * 0.4) {
    tourDwell += dt;
    if (tourDwell > 7) {
      tourDwell = 0;
      tourIndex = (tourIndex + 1) % districts.length;
    }
    return { x: 0, z: 0 };
  }
  // Ease off when arriving so the saucer parks over the district.
  const speed = Math.min(1, dist / 14);
  return { x: (dx / dist) * speed, z: (dz / dist) * speed };
}

// Hover detection with hysteresis so the card does not flicker at the edge.
let active: District | null = null;
function detectActive(): District | null {
  const px = ufo.position.x;
  const pz = ufo.position.z;
  if (active) {
    const d = Math.hypot(px - active.center.x, pz - active.center.z);
    if (d < DISTRICT_RADIUS + 4) return active;
  }
  let best: District | null = null;
  let bestDist = DISTRICT_RADIUS + 1;
  for (const d of districts) {
    const dist = Math.hypot(px - d.center.x, pz - d.center.z);
    if (dist < bestDist) {
      bestDist = dist;
      best = d;
    }
  }
  return best;
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

const timer = new THREE.Timer();
camera.position.set(CAMERA_OFFSET.x, CAMERA_OFFSET.y + 16, CAMERA_OFFSET.z + 20);

function frame(): void {
  requestAnimationFrame(frame);
  timer.update();
  const dt = Math.min(timer.getDelta(), 0.05);
  const time = timer.getElapsed();

  let dir = { x: 0, z: 0 };
  if (flying) {
    if (tour && input.steered) {
      tour = false;
      hud.setTourActive(false);
    }
    dir = tour ? tourDirection(dt) : input.dir();
  }
  ufo.update(dt, dir, input.boost(), active !== null, time);

  const prev = active;
  active = flying ? detectActive() : null;
  if (active !== prev) {
    if (active) {
      hud.showCard(active.def);
      audio.play("scan-reveal");
      audio.playVoice(active.def.id);
    } else {
      hud.hideCard();
      audio.stopVoice();
    }
  }
  updateDistricts(districts, active, dt, time);

  // The plaza sign sits under the saucer at spawn; fade it once airborne.
  const plazaSign = scene.getObjectByName("plaza-sign") as THREE.Sprite | undefined;
  if (plazaSign) {
    const target = flying ? 0 : 1;
    plazaSign.material.opacity += (target - plazaSign.material.opacity) * Math.min(1, dt * 2);
    plazaSign.visible = plazaSign.material.opacity > 0.02;
  }

  // Diablo-style chase camera: steep fixed angle, looks at the ground
  // beneath the saucer so the scanned district stays centered.
  const targetPos = flying
    ? new THREE.Vector3(
        ufo.position.x + CAMERA_OFFSET.x,
        CAMERA_OFFSET.y + (reducedMotion ? 0 : Math.sin(time * 0.7) * 0.4),
        ufo.position.z + CAMERA_OFFSET.z,
      )
    : new THREE.Vector3(CAMERA_OFFSET.x, CAMERA_OFFSET.y + 16, CAMERA_OFFSET.z + 20);
  camera.position.lerp(targetPos, Math.min(1, dt * 3));
  camera.lookAt(ufo.position.x, 2, ufo.position.z);

  composer.render();
}
frame();
