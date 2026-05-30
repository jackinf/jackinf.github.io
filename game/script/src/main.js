// Entry point — orchestrates scroll detection, parallax movement, and all animations.

import { SCROLL } from "./config.js";
import { moveLayers } from "./layers.js";
import { animatePlayer } from "./player.js";
import {
  resetBoards,    showBoard,
  resetStones,    showStone,
  resetLoaders,   showLoaders,
  resetTrees,     showTrees,
  resetGateLabel, showGateLabel,
} from "./animations.js";
import { initModal } from "./modal.js";
import { initTouch } from "./touch.js";

const pageEl      = document.getElementById("page");
const containerEl = document.getElementById("container");
const contentEl   = document.getElementById("content");

let scrollPos  = 0;
let canScroll  = false;

// Sends all animation groups back to their off-screen / hidden state.
function resetScene() {
  moveLayers(scrollPos);
  resetGateLabel("exp");
  resetGateLabel("projects");
  resetGateLabel("knowledge");
  resetLoaders();
  resetBoards();
  resetStones();
  resetTrees();
}

// Called on every scroll/swipe tick; evaluates which animations should be active.
function tick() {
  moveLayers(scrollPos);

  // Gate labels slide down into the gate arch as the player approaches.
  if (scrollPos < SCROLL.EXP_GATE_RESET)       resetGateLabel("exp");
  if (scrollPos < SCROLL.PROJECTS_GATE_RESET)   resetGateLabel("projects");
  if (scrollPos < SCROLL.KNOWLEDGE_GATE_RESET)  resetGateLabel("knowledge");
  if (scrollPos > SCROLL.EXP_GATE_START)        showGateLabel("exp");
  if (scrollPos > SCROLL.PROJECTS_GATE_START)   showGateLabel("projects");
  if (scrollPos > SCROLL.KNOWLEDGE_GATE_START)  showGateLabel("knowledge");

  // Project boards rise from below ground as the player walks past each company.
  if (scrollPos > SCROLL.BOARD_TRAVIX)   showBoard("travix");
  if (scrollPos > SCROLL.BOARD_GENIUS)   showBoard("genius");
  if (scrollPos > SCROLL.BOARD_FINEST)   showBoard("finest");
  if (scrollPos > SCROLL.BOARD_ABB)      showBoard("abb");

  // Side-project stones emerge and reveal their dialog bubbles.
  if (scrollPos > SCROLL.STONE_SPEYS)    showStone("speys");
  if (scrollPos > SCROLL.STONE_TRIVEN)   showStone("triven");

  // Skill loading bars animate to their final widths.
  if (scrollPos > SCROLL.LOADERS)        showLoaders();

  // University degree nodes fade in on the tree.
  if (scrollPos > SCROLL.TREES)          showTrees();

  // Scrolling back to the start resets everything.
  if (scrollPos < SCROLL.RESET)          resetScene();
}

window.onload = () => {
  initModal();

  if (deviceName !== "computer") {
    initTouch({
      getScrollPos:      () => scrollPos,
      setScrollPos:      pos => { scrollPos = pos; },
      onMove() { tick(); animatePlayer(); },
      getPageHeight:      () => pageEl.offsetHeight,
      getContainerHeight: () => containerEl.offsetHeight,
    });
  }

  resetScene();

  new Typed("#s01-monitor-text", {
    strings:   ["WELCOME TO MY WEBPAGE!", "CLICK ON ME TO SEE MY SHORT SUMMARY"],
    typeSpeed: 70,
  });

  // Remove the overflow:hidden lock so the page becomes scrollable.
  contentEl.removeAttribute("class");
  canScroll = true;
};

window.onscroll = () => {
  if (!canScroll) return;
  scrollPos = pageYOffset;
  tick();
  animatePlayer();
};
