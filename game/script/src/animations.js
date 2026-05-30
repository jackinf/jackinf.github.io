// Scroll-triggered animations: boards, stones, skill loaders, degree trees, gate labels.
//
// Each group uses a "visible" flag to prevent re-running an animation that already
// played.  "visible = true" means the element is currently on-screen; reset functions
// move it off-screen (visible → false) and show functions bring it back (false → true).

import { ANIM, LOADER_MAX_STEPS } from "./config.js";
import { STONE_TEXT } from "./content.js";

// ── Project boards ────────────────────────────────────────────────────────────

const BOARD_KEYS = ["travix", "genius", "finest", "abb"];
const boardVisible = Object.fromEntries(BOARD_KEYS.map(k => [k, true]));

export function resetBoards() {
  for (const key of BOARD_KEYS) {
    if (boardVisible[key]) {
      boardVisible[key] = false;
      $(`#project-board-${key}`).animate({ bottom: "-=600px" }, ANIM.BOARD_SLIDE_MS);
    }
  }
}

export function showBoard(key) {
  if (!boardVisible[key]) {
    boardVisible[key] = true;
    $(`#project-board-${key}`).animate({ bottom: "+=600px" }, ANIM.BOARD_SLIDE_MS);
  }
}

// ── Stones ────────────────────────────────────────────────────────────────────

const STONE_KEYS = ["speys", "triven"];
const stoneVisible = Object.fromEntries(STONE_KEYS.map(k => [k, true]));
const stoneTyped   = Object.fromEntries(STONE_KEYS.map(k => [k, false]));

export function resetStones() {
  for (const key of STONE_KEYS) {
    if (stoneVisible[key]) {
      stoneVisible[key] = false;
      $(`#stone-${key}`).css({ bottom: "-300px" });
      $(`#dialog-${key}`).css({ width: "200px", height: "100px", bottom: "0", left: "0", opacity: "0" });
    }
  }
}

export function showStone(key) {
  if (stoneVisible[key]) return;
  stoneVisible[key] = true;

  $(`#stone-${key}`).animate({ bottom: "0px" }, ANIM.STONE_RISE_MS, () => {
    $(`#dialog-${key}`).animate(
      { width: "400px", height: "200px", opacity: "1", left: "100px", bottom: "200px" },
      ANIM.STONE_EXPAND_MS,
      () => {
        if (!stoneTyped[key]) {
          stoneTyped[key] = true;
          new Typed(`#dialog-${key}`, {
            strings: [STONE_TEXT[key]],
            typeSpeed: ANIM.STONE_TYPE_SPEED,
            showCursor: false,
          });
        }
      }
    );
  });
}

// ── Skill loading bars ────────────────────────────────────────────────────────

const loaderBars = {
  csharp: document.getElementById("progress-bar-charp"),
  js:     document.getElementById("progress-bar-js"),
  python: document.getElementById("progress-bar-python"),
};
let loadersVisible = true;

export function resetLoaders() {
  if (!loadersVisible) return;
  loadersVisible = false;
  for (const bar of Object.values(loaderBars)) {
    bar.style.width = "0px";
  }
}

export function showLoaders() {
  if (loadersVisible) return;
  loadersVisible = true;

  for (const key of Object.keys(loaderBars)) {
    const bar  = loaderBars[key];
    const max  = LOADER_MAX_STEPS[key];
    let   step = 0;
    const id   = setInterval(() => {
      step += 1;
      bar.style.width = `${step * ANIM.LOADER_PX_PER_STEP}px`;
      if (step >= max) clearInterval(id);
    }, ANIM.LOADER_TICK_MS);
  }
}

// ── Degree tree ───────────────────────────────────────────────────────────────

const treeEls = {
  master:   document.getElementById("s03-tree-master"),
  bachelor: document.getElementById("s03-tree-bachelor"),
};
const treeVisible = { master: true, bachelor: true };

export function resetTrees() {
  if (treeVisible.bachelor) {
    treeVisible.bachelor = false;
    treeEls.bachelor.style.opacity = 0;
    treeEls.bachelor.style.top     = "175px";
  }
  if (treeVisible.master) {
    treeVisible.master = false;
    treeEls.master.style.opacity = 0;
    treeEls.master.style.top     = "45px";
  }
}

export function showTrees() {
  if (!treeVisible.bachelor) {
    treeVisible.bachelor = true;
    $(treeEls.bachelor).animate({ opacity: "1", top: "+=25px" }, ANIM.TREE_FADE_MS);
  }
  if (!treeVisible.master) {
    treeVisible.master = true;
    setTimeout(
      () => $(treeEls.master).animate({ opacity: "1", top: "+=25px" }, ANIM.TREE_FADE_MS),
      ANIM.TREE_FADE_MS
    );
  }
}

// ── Gate labels ───────────────────────────────────────────────────────────────

const gateEls = {
  exp:       document.getElementById("gate-label-experience"),
  projects:  document.getElementById("gate-label-projects"),
  knowledge: document.getElementById("gate-label-knowledge"),
};
const gateVisible = { exp: true, projects: true, knowledge: true };

export function resetGateLabel(key) {
  if (gateVisible[key]) {
    gateVisible[key] = false;
    $(gateEls[key]).animate({ top: "+=100px" }, ANIM.GATE_SLIDE_MS);
  }
}

export function showGateLabel(key) {
  if (!gateVisible[key]) {
    gateVisible[key] = true;
    $(gateEls[key]).animate({ top: "-=100px" }, ANIM.GATE_SLIDE_MS);
  }
}
