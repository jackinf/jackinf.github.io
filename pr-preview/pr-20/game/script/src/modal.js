// Modal dialog — shows wooden-sign overlay when the user clicks interactive elements.
//
// Previously split across modal-logic.js and main.js; consolidated here.
// Fixes: the original code registered two conflicting click handlers on travix board-plan-1
// (a jQuery .on() that showed an empty modal, then an .onclick that set content). Only
// the single .onclick path is kept.

import { ANIM } from "./config.js";
import { BIO, PLANK_TEXT, STONE_TEXT } from "./content.js";

const modalEl   = document.getElementById("wooden-modal");
const contentEl = document.getElementById("wooden-modal-content");
const outerEl   = document.getElementById("wooden-modal-content-outer");

// Clicking anywhere on the backdrop closes the modal.
modalEl.onclick = () => $(modalEl).fadeOut(ANIM.MODAL_FADE_OUT_MS);

function getLayout() {
  const w = outerWidth;
  return {
    fontSize: w < 600  ? "4em" : "3em",
    top:      w < 600  ? "10%" : "20%",
    width:    w < 1100 ? ""    : "70%",   // empty string removes any previous inline value
    left:     w < 1100 ? ""    : "15%",
    height:   "60%",
  };
}

function showModal(text, overrides = {}) {
  const layout = { ...getLayout(), ...overrides };
  outerEl.style.fontSize = layout.fontSize;
  outerEl.style.top      = layout.top;
  outerEl.style.height   = layout.height;
  outerEl.style.width    = layout.width;
  outerEl.style.left     = layout.left;
  contentEl.innerText    = text;
  $(modalEl).fadeIn(ANIM.MODAL_FADE_IN_MS);
}

// Wires up all interactive click targets.  Call once from window.onload.
export function initModal() {
  // Project board planks
  for (const [company, texts] of Object.entries(PLANK_TEXT)) {
    texts.forEach((text, i) => {
      const el = document.querySelector(`#project-board-${company} > .board-plan-${i + 1}`);
      if (!el) return;
      el.style.cursor = "pointer";
      el.onclick = () => showModal(text);
    });
  }

  // Monitor / bio
  const monitorEl = document.getElementById("s01-description");
  monitorEl.style.cursor = "pointer";
  monitorEl.onclick = () => showModal(BIO);

  // Side-project stones
  for (const key of Object.keys(STONE_TEXT)) {
    const stoneEl = document.getElementById(`stone-${key}`);
    stoneEl.style.cursor = "pointer";
    stoneEl.onclick = () => showModal(STONE_TEXT[key], { top: "10%", height: "70%" });
  }
}
