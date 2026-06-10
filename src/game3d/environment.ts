/**
 * Static scenery: sky, stars, moon, ground, roads, lamps, trees and the
 * central landing pad. All low-poly placeholders, swappable via assets.ts.
 */
import * as THREE from "three";
import {
  DISTRICT_RADIUS,
  GROUND_RADIUS,
  SKY_GLOW,
  SKY_HORIZON,
  SKY_TOP,
  TOWN_RING_RADIUS,
} from "./config";
import { makeSignTexture, makeSkyTexture, mulberry32 } from "./textures";
import { swapInModel, tryLoadModel, tryLoadTexture } from "./assets";
import { cityProfile } from "./data";

export function buildEnvironment(scene: THREE.Scene, districtAngles: number[]): void {
  buildSky(scene);
  buildGround(scene);
  buildRoads(scene, districtAngles);
  buildLamps(scene);
  buildTrees(scene, districtAngles);
  buildCenterPlaza(scene);
}

function buildSky(scene: THREE.Scene): void {
  const skyMat = new THREE.MeshBasicMaterial({
    map: makeSkyTexture(SKY_TOP, SKY_HORIZON, SKY_GLOW),
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(480, 24, 16), skyMat);
  scene.add(sky);

  // Custom Midjourney sky panorama replaces the gradient when present.
  void tryLoadTexture("sky-panorama").then((tex) => {
    if (!tex) return;
    tex.mapping = THREE.EquirectangularReflectionMapping;
    skyMat.map = tex;
    skyMat.needsUpdate = true;
  });

  const rnd = mulberry32(7);
  const starCount = 700;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const theta = rnd() * Math.PI * 2;
    const phi = Math.acos(rnd() * 0.85); // upper hemisphere
    const r = 430;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi) + 10;
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.4, sizeAttenuation: false, fog: false }),
  );
  scene.add(stars);

  const moon = new THREE.Mesh(
    new THREE.CircleGeometry(13, 24),
    new THREE.MeshBasicMaterial({ color: 0xfff3cf, fog: false, toneMapped: false }),
  );
  moon.position.set(-170, 130, -300);
  moon.lookAt(0, 0, 0);
  scene.add(moon);
}

function buildGround(scene: THREE.Scene): void {
  const geo = new THREE.CircleGeometry(GROUND_RADIUS, 96);
  geo.rotateX(-Math.PI / 2);
  // Gentle low-poly hills outside the town, flat inside.
  const rnd = mulberry32(42);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const d = Math.hypot(x, z);
    const beyond = Math.max(0, d - (TOWN_RING_RADIUS + DISTRICT_RADIUS + 14));
    pos.setY(i, beyond > 0 ? rnd() * Math.min(beyond * 0.12, 7) : 0);
  }
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    color: 0x131a2c,
    roughness: 1,
    flatShading: true,
  });
  const ground = new THREE.Mesh(geo, mat);
  ground.receiveShadow = true;
  scene.add(ground);

  void tryLoadTexture("ground").then((tex) => {
    if (!tex) return;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(24, 24);
    mat.map = tex;
    mat.color.set(0xffffff);
    mat.needsUpdate = true;
  });
}

function buildRoads(scene: THREE.Scene, districtAngles: number[]): void {
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x1b2030, roughness: 0.95 });

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(TOWN_RING_RADIUS - 3, TOWN_RING_RADIUS + 3, 96),
    roadMat,
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  ring.receiveShadow = true;
  scene.add(ring);

  for (const angle of districtAngles) {
    const spoke = new THREE.Mesh(new THREE.PlaneGeometry(3.4, TOWN_RING_RADIUS), roadMat);
    spoke.rotation.x = -Math.PI / 2;
    spoke.rotation.z = -angle - Math.PI / 2;
    spoke.position.set(
      (Math.cos(angle) * TOWN_RING_RADIUS) / 2,
      0.02,
      (Math.sin(angle) * TOWN_RING_RADIUS) / 2,
    );
    spoke.receiveShadow = true;
    scene.add(spoke);
  }
}

function buildLamps(scene: THREE.Scene): void {
  const poleGeo = new THREE.CylinderGeometry(0.08, 0.1, 3.4, 6);
  const bulbGeo = new THREE.SphereGeometry(0.28, 8, 6);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x2a3146, roughness: 0.7 });
  const bulbMat = new THREE.MeshStandardMaterial({
    color: 0x331f06,
    emissive: 0xffc066,
    emissiveIntensity: 3,
  });
  const lamps = new THREE.Group();
  const count = 22;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + 0.14;
    const r = TOWN_RING_RADIUS + 4.6;
    const lamp = new THREE.Group();
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 1.7;
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.y = 3.5;
    lamp.add(pole, bulb);
    lamp.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    lamps.add(lamp);
  }
  scene.add(lamps);
}

function buildTrees(scene: THREE.Scene, districtAngles: number[]): void {
  const rnd = mulberry32(1337);
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.22, 1, 5);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3a2a20, roughness: 1 });
  const leafGeo = new THREE.ConeGeometry(1.15, 2.6, 6);
  const leafMats = [0x1d4a36, 0x215a3c, 0x173d44].map(
    (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 1, flatShading: true }),
  );

  const districtCenters = districtAngles.map((a) => ({
    x: Math.cos(a) * TOWN_RING_RADIUS,
    z: Math.sin(a) * TOWN_RING_RADIUS,
  }));

  const trees = new THREE.Group();
  let placed = 0;
  while (placed < 110) {
    const r = 12 + rnd() * 95;
    const a = rnd() * Math.PI * 2;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.abs(r - TOWN_RING_RADIUS) < 5.5) continue;
    if (districtCenters.some((c) => Math.hypot(x - c.x, z - c.z) < DISTRICT_RADIUS + 3)) continue;

    const tree = new THREE.Group();
    const s = 0.7 + rnd() * 1;
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 0.5 * s;
    trunk.scale.setScalar(s);
    const leaves = new THREE.Mesh(leafGeo, leafMats[Math.floor(rnd() * leafMats.length)]);
    leaves.position.y = (1 + 1.3) * s;
    leaves.scale.setScalar(s);
    leaves.castShadow = true;
    tree.add(trunk, leaves);
    tree.position.set(x, 0, z);
    tree.rotation.y = rnd() * Math.PI;
    trees.add(tree);
    placed++;
  }
  scene.add(trees);

  // A custom Meshy tree replaces the cone placeholders when present.
  void tryLoadModel("tree").then((model) => {
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const diameter = Math.max(size.x, size.z, 0.001);
    for (const tree of trees.children) {
      const s = (tree as THREE.Group).children[1]?.scale.x ?? 1;
      const clone = model.clone();
      clone.scale.setScalar((2.6 / diameter) * s);
      const fitted = new THREE.Box3().setFromObject(clone);
      clone.position.y -= fitted.min.y;
      (tree as THREE.Group).clear();
      tree.add(clone);
    }
  });
}

function buildCenterPlaza(scene: THREE.Scene): void {
  const pad = new THREE.Mesh(
    new THREE.CylinderGeometry(7, 7.8, 0.5, 24),
    new THREE.MeshStandardMaterial({ color: 0x222a40, roughness: 0.8, flatShading: true }),
  );
  pad.position.y = 0.25;
  pad.receiveShadow = true;
  scene.add(pad);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(5.6, 0.14, 8, 48),
    new THREE.MeshStandardMaterial({
      color: 0x101524,
      emissive: 0x6c9bff,
      emissiveIntensity: 2.4,
    }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.55;
  scene.add(ring);

  const sign = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: makeSignTexture(cityProfile.name, "#6c9bff", cityProfile.title),
      toneMapped: false,
      depthWrite: false,
    }),
  );
  sign.scale.set(13, 4.9, 1);
  sign.position.set(0, 8.5, 0);
  sign.name = "plaza-sign";
  scene.add(sign);

  // Custom Meshy monument slot at the plaza.
  const monument = new THREE.Group();
  monument.position.set(0, 0.5, 0);
  scene.add(monument);
  swapInModel(monument, "monument", 6);
}
