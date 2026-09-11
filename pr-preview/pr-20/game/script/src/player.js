// Player sprite walk animation triggered by scroll/swipe movement.

import { ANIM } from "./config.js";

const player   = document.getElementById("player");
const hint     = document.getElementById("player-hint");

const WALK_FRAMES = [60, 114]; // background-position-x values for each walk frame
let frameIndex  = 0;
let walkInterval = null;
let stopTimeout  = null;

function advanceFrame() {
  frameIndex += 1;
  player.style.backgroundPosition = `${WALK_FRAMES[frameIndex % WALK_FRAMES.length]}px`;
}

// Call on every scroll/swipe event to play the walk cycle and auto-stop when idle.
export function animatePlayer() {
  if (!walkInterval) {
    hint.style.opacity = 0;
    advanceFrame();
    walkInterval = setInterval(advanceFrame, ANIM.PLAYER_STEP_MS);
  }

  clearTimeout(stopTimeout);
  stopTimeout = setTimeout(() => {
    clearInterval(walkInterval);
    walkInterval = null;
    stopTimeout  = null;
    player.style.backgroundPosition = "0px";
    hint.style.opacity = 1;
  }, ANIM.PLAYER_STOP_MS);
}
