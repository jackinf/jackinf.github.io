/**
 * Builds one district per CV entry around a ring road. Each district is a
 * cluster of low-poly buildings with emissive windows, a glow ring that
 * lights up when the UFO hovers above, and a floating sign sprite.
 */
import * as THREE from "three";
import { DISTRICT_RADIUS, TOWN_RING_RADIUS } from "./config";
import { districtDefs } from "./data";
import type { DistrictDef } from "./data";
import { makeFacadeTexture, makeSignTexture, mulberry32 } from "./textures";
import { swapInModel } from "./assets";

export interface District {
  def: DistrictDef;
  angle: number;
  center: THREE.Vector3;
  group: THREE.Group;
  ringMat: THREE.MeshStandardMaterial;
  sign: THREE.Sprite;
  signBaseScale: THREE.Vector2;
  signBaseY: number;
  buildings: { mesh: THREE.Mesh; mat: THREE.MeshStandardMaterial; phase: number }[];
  /** 0..1 hover activation, eased every frame. */
  activation: number;
}

export function buildTown(scene: THREE.Scene): District[] {
  const n = districtDefs.length;
  return districtDefs.map((def, i) => {
    // Newest role at the top of the screen (-Z), clockwise into the past.
    const angle = -Math.PI / 2 + (i / n) * Math.PI * 2;
    const center = new THREE.Vector3(
      Math.cos(angle) * TOWN_RING_RADIUS,
      0,
      Math.sin(angle) * TOWN_RING_RADIUS,
    );
    return buildDistrict(scene, def, angle, center, i);
  });
}

function buildDistrict(
  scene: THREE.Scene,
  def: DistrictDef,
  angle: number,
  center: THREE.Vector3,
  index: number,
): District {
  const rnd = mulberry32(1000 + index * 97);
  const group = new THREE.Group();
  group.position.copy(center);
  scene.add(group);

  const accent = new THREE.Color(def.color);

  // Ground plate, tinted with the district accent.
  const plateColor = new THREE.Color(0x141b2e).lerp(accent, 0.12);
  const plate = new THREE.Mesh(
    new THREE.CylinderGeometry(DISTRICT_RADIUS, DISTRICT_RADIUS + 0.7, 0.34, 24),
    new THREE.MeshStandardMaterial({ color: plateColor, roughness: 0.9, flatShading: true }),
  );
  plate.position.y = 0.17;
  plate.receiveShadow = true;
  group.add(plate);

  // Glow ring that breathes when the UFO scans the district.
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x0c1120,
    emissive: accent,
    emissiveIntensity: 0.35,
  });
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(DISTRICT_RADIUS + 0.25, 0.16, 8, 56),
    ringMat,
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.4;
  group.add(ring);

  // Building cluster sized by how long the chapter lasted.
  const buildings: District["buildings"] = [];
  const count = Math.min(7, 3 + Math.floor(def.years * 0.9));
  for (let b = 0; b < count; b++) {
    const placeAngle = (b / count) * Math.PI * 2 + rnd() * 0.5;
    const placeR = b === 0 ? 0 : 3.2 + rnd() * 3.4;
    const w = 2 + rnd() * 1.4;
    const d = 2 + rnd() * 1.4;
    const h = 3.2 + def.years * 1.7 + rnd() * 2.4 - (b === 0 ? 0 : rnd() * 2);

    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x232c44).offsetHSL(0, 0, (rnd() - 0.5) * 0.05),
      roughness: 0.85,
      flatShading: true,
      emissive: 0xffffff,
      emissiveMap: makeFacadeTexture(def.color, index * 31 + b),
      emissiveIntensity: 1.05,
    });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(Math.cos(placeAngle) * placeR, h / 2 + 0.34, Math.sin(placeAngle) * placeR);
    mesh.rotation.y = rnd() * Math.PI * 0.5;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    buildings.push({ mesh, mat, phase: rnd() * Math.PI * 2 });

    // Accent trim on the roof of the tallest (first) building.
    if (b === 0) {
      const trim = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.7, 0.22, d * 0.7),
        new THREE.MeshStandardMaterial({
          color: 0x0c1120,
          emissive: accent,
          emissiveIntensity: 2.2,
        }),
      );
      trim.position.set(mesh.position.x, h + 0.45, mesh.position.z);
      trim.rotation.y = mesh.rotation.y;
      group.add(trim);

      const antenna = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 1.6, 5),
        new THREE.MeshStandardMaterial({ color: 0x39415c }),
      );
      antenna.position.set(mesh.position.x, h + 1.3, mesh.position.z);
      group.add(antenna);
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 8, 6),
        new THREE.MeshStandardMaterial({
          color: 0x200505,
          emissive: 0xff4455,
          emissiveIntensity: 3,
        }),
      );
      beacon.position.set(mesh.position.x, h + 2.15, mesh.position.z);
      group.add(beacon);
    }
  }

  // Floating sign, always facing the camera.
  const sign = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: makeSignTexture(def.title, def.color, def.kind === "role" ? def.period : def.subtitle),
      toneMapped: false,
      depthWrite: false,
    }),
  );
  const signBaseScale = new THREE.Vector2(10, 3.75);
  sign.scale.set(signBaseScale.x, signBaseScale.y, 1);
  const tallest = 3.2 + def.years * 1.7 + 2.4;
  const signBaseY = tallest + 3.6;
  sign.position.set(0, signBaseY, 0);
  group.add(sign);

  // Custom Meshy landmark slot, e.g. landmark-kraken.glb.
  const landmark = new THREE.Group();
  landmark.position.set(0, 0.34, 0);
  group.add(landmark);
  swapInModel(landmark, `landmark-${def.id}`, DISTRICT_RADIUS * 1.1);

  return {
    def,
    angle,
    center,
    group,
    ringMat,
    sign,
    signBaseScale,
    signBaseY,
    buildings,
    activation: 0,
  };
}

/** Per-frame district animation; `active` is the district under the UFO. */
export function updateDistricts(
  districts: District[],
  active: District | null,
  dt: number,
  time: number,
): void {
  for (const d of districts) {
    const target = d === active ? 1 : 0;
    d.activation += (target - d.activation) * Math.min(1, dt * 4);
    const a = d.activation;

    d.ringMat.emissiveIntensity = 0.35 + a * (2.6 + Math.sin(time * 5) * 0.5);

    for (const b of d.buildings) {
      b.mat.emissiveIntensity = 1.05 + a * 1.2;
      const pop = 1 + a * 0.07 * (1 + Math.sin(time * 3 + b.phase) * 0.4);
      b.mesh.scale.y += (pop - b.mesh.scale.y) * Math.min(1, dt * 6);
    }

    const signPop = 1 + a * 0.18;
    d.sign.scale.set(d.signBaseScale.x * signPop, d.signBaseScale.y * signPop, 1);
    d.sign.position.y = d.signBaseY + a * 0.9 + Math.sin(time * 1.6 + d.angle) * 0.18;
    // In the top-down view the sign sits right under the saucer, so it fades
    // out while scanning; the info card carries the details instead.
    d.sign.material.opacity = 1 - a * 0.92;
  }
}
