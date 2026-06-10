/**
 * The player's flying saucer: low-poly placeholder (swappable with a custom
 * Meshy GLB), rim lights, under-glow and a tractor beam that switches on
 * while scanning a district.
 */
import * as THREE from "three";
import {
  UFO_ACCEL,
  UFO_ALTITUDE,
  UFO_BOOST_SPEED,
  UFO_BOUNDS,
  UFO_MAX_SPEED,
} from "./config";
import { swapInModel } from "./assets";

export interface UFO {
  group: THREE.Group;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  beamMat: THREE.MeshBasicMaterial;
  update(dt: number, dir: { x: number; z: number }, boost: boolean, scanning: boolean, time: number): void;
}

export function buildUFO(scene: THREE.Scene, reducedMotion: boolean): UFO {
  const group = new THREE.Group();
  scene.add(group);

  // Placeholder saucer body; ufo.glb replaces it when present.
  const body = new THREE.Group();
  group.add(body);

  const hullMat = new THREE.MeshStandardMaterial({
    color: 0x9aa6c0,
    metalness: 0.7,
    roughness: 0.3,
    flatShading: true,
  });
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 1.4, 0.7, 12), hullMat);
  body.add(hull);

  const belly = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 0.7, 0.5, 12), hullMat);
  belly.position.y = -0.55;
  body.add(belly);

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({
      color: 0x8fd4ff,
      metalness: 0.1,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
      emissive: 0x2a76a8,
      emissiveIntensity: 0.6,
    }),
  );
  dome.position.y = 0.35;
  body.add(dome);

  const rimLights = new THREE.Group();
  const lightGeo = new THREE.SphereGeometry(0.16, 8, 6);
  const lightMat = new THREE.MeshStandardMaterial({
    color: 0x062a30,
    emissive: 0x7cf3ff,
    emissiveIntensity: 3,
  });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const l = new THREE.Mesh(lightGeo, lightMat);
    l.position.set(Math.cos(a) * 2.45, -0.1, Math.sin(a) * 2.45);
    rimLights.add(l);
  }
  body.add(rimLights);
  body.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) o.castShadow = true;
  });

  swapInModel(body as THREE.Group, "ufo", 5.4, -1);

  // Tractor beam (visible while scanning a district).
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0x8fe8ff,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 5.6, UFO_ALTITUDE, 24, 1, true),
    beamMat,
  );
  beam.position.y = -UFO_ALTITUDE / 2;
  group.add(beam);

  const glow = new THREE.PointLight(0x7cc8ff, 60, 40, 1.8);
  glow.position.y = -1.2;
  group.add(glow);

  const position = new THREE.Vector3(0, UFO_ALTITUDE, 9);
  const velocity = new THREE.Vector3();
  let beamTarget = 0;

  function update(
    dt: number,
    dir: { x: number; z: number },
    boost: boolean,
    scanning: boolean,
    time: number,
  ): void {
    const max = boost ? UFO_BOOST_SPEED : UFO_MAX_SPEED;
    velocity.x += dir.x * UFO_ACCEL * dt;
    velocity.z += dir.z * UFO_ACCEL * dt;
    const damp = Math.exp(-2.6 * dt);
    velocity.multiplyScalar(damp);
    if (velocity.length() > max) velocity.setLength(max);

    position.x += velocity.x * dt;
    position.z += velocity.z * dt;
    const planar = Math.hypot(position.x, position.z);
    if (planar > UFO_BOUNDS) {
      position.x *= UFO_BOUNDS / planar;
      position.z *= UFO_BOUNDS / planar;
    }

    const bob = reducedMotion ? 0 : Math.sin(time * 2.1) * 0.3;
    position.y = UFO_ALTITUDE + bob;
    group.position.copy(position);

    // Bank into the direction of travel, slow idle spin.
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -velocity.x * 0.011, 0.12);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, velocity.z * 0.011, 0.12);
    body.rotation.y += dt * (reducedMotion ? 0.2 : 0.7);
    rimLights.rotation.y -= dt * 1.6;

    beamTarget = scanning ? 0.16 : 0;
    beamMat.opacity += (beamTarget - beamMat.opacity) * Math.min(1, dt * 5);
    beam.visible = beamMat.opacity > 0.01;
    if (beam.visible && !reducedMotion) {
      beam.rotation.y += dt * 0.8;
      beam.scale.x = beam.scale.z = 1 + Math.sin(time * 6) * 0.04;
    }

    glow.intensity = scanning ? 110 : 60;
  }

  return { group, position, velocity, beamMat, update };
}
