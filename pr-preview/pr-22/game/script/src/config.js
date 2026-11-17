// Scroll positions (px) that trigger or reset each animation/gate.
export const SCROLL = {
  RESET:                 1500,

  EXP_GATE_RESET:        1500,
  EXP_GATE_START:        1700,

  BOARD_TRAVIX:          2700,
  BOARD_GENIUS:          3800,
  BOARD_FINEST:          5600,
  BOARD_ABB:             7300,

  PROJECTS_GATE_RESET:   9100,
  PROJECTS_GATE_START:   9300,

  STONE_SPEYS:           9300,
  STONE_TRIVEN:          10300,

  KNOWLEDGE_GATE_RESET:  12800,
  KNOWLEDGE_GATE_START:  13000,
  LOADERS:               13500,

  TREES:                 16100,
};

// Duration / speed constants for every animation (ms unless noted).
export const ANIM = {
  MODAL_FADE_IN_MS:    300,
  MODAL_FADE_OUT_MS:   300,

  PLAYER_STEP_MS:      100,
  PLAYER_STOP_MS:      200,

  BOARD_SLIDE_MS:      500,

  STONE_RISE_MS:       500,
  STONE_EXPAND_MS:     500,
  STONE_TYPE_SPEED:    5,    // chars/tick for Typed.js

  TREE_FADE_MS:        500,

  GATE_SLIDE_MS:       500,

  LOADER_TICK_MS:      50,
  LOADER_PX_PER_STEP:  15,
};

// Maximum steps for each skill loading bar (step × LOADER_PX_PER_STEP = final width).
export const LOADER_MAX_STEPS = {
  csharp: 20,   // 300 px
  js:     18,   // 270 px
  python: 14,   // 210 px
};

// Touch-swipe speed multiplier (higher = faster horizontal travel per px swiped).
export const TOUCH_SPEED = 3;
