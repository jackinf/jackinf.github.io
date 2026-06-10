/** Tunables for the 3D town. Distances are in world units (roughly meters). */

export const TOWN_RING_RADIUS = 34;
export const DISTRICT_RADIUS = 9;
export const GROUND_RADIUS = 240;

export const UFO_ALTITUDE = 16;
export const UFO_MAX_SPEED = 26;
export const UFO_BOOST_SPEED = 40;
export const UFO_ACCEL = 55;
export const UFO_BOUNDS = 110;

/** Diablo-style chase camera: steep pitch (~60deg), almost top down. */
export const CAMERA_OFFSET = { x: 0, y: 50, z: 27 };

export const BLOOM = { strength: 0.9, radius: 0.55, threshold: 0.82 };

export const SKY_TOP = "#04050d";
export const SKY_HORIZON = "#241634";
export const SKY_GLOW = "#46243f";
export const FOG_COLOR = 0x0a0c18;

/**
 * Where custom generated assets are looked up at runtime. Document-relative
 * (the page lives at <base>/game-3d/) so PR previews under /pr-preview/pr-N/
 * work as well as the production root.
 */
export const ASSET_BASE = "../game-3d-assets";
