/*
  Variables
 */
let canScrollOrSwipe = false;
let previousPageVerticalPosition = 0;
let pageVerticalPosition = 0;
let currentPhase = "horizontal";
let deltaPageVerticalPosition = 0;
const constants = { PHASE_1: "phase1" };

/*
  HTMLl element references
 */
const containerDiv = document.getElementById("container");
const contentDiv = document.getElementById("content");
const layers = {
  LAYER_1: mapLayer("layer-horizontal-1"),
  LAYER_2: mapLayer("layer-horizontal-2"),
  LAYER_3: mapLayer("layer-horizontal-3"),
};
const player = document.getElementById("player");
const layerKeys = Object.keys(layers);

const enableScrollOrSwipe = () => canScrollOrSwipe = true;

function mapLayer(layerId) {
  const elem = document.getElementById(layerId);
  const speed = parseFloat(elem.getAttribute('data-layer-speed'));
  let offset = elem.getAttribute('data-left-offset');
  offset = offset ? parseFloat(offset) : 0;
  return { elem, speed, offset };
}

function setPhase() {
  currentPhase = constants.PHASE_1;
}

function makePageScrollable() {
  contentDiv.removeAttribute("class");
  enableScrollOrSwipe();
}

function detectPageVerticalPosition() {
  previousPageVerticalPosition = pageVerticalPosition;
  pageVerticalPosition = pageYOffset;
  deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
  return deltaPageVerticalPosition;
}

function moveLayers() {
  for (let layerKey of layerKeys) {
    const layerElem = layers[layerKey];
    const newLeftPosition = layerElem.offset + (-1 * layerElem.speed * pageVerticalPosition);
    layerElem.elem.style.left = `${newLeftPosition}px`;
  }
}

function runTheseFunctionsAfterScrollOrSwipe() {
  setPhase();
  moveLayers();
}

window.onload = function (e) {
  makePageScrollable();
};

let moveInterval = null, moveIntervalStopTimeout = null, movePositions = [60, 114], moveIndex = 0;
let playMoveAnimationStep = () => {
  moveIndex += 1;
  player.style["background-position"] = `${movePositions[moveIndex % movePositions.length]}px`;
};
let createMoveAnimation = () => setInterval(playMoveAnimationStep, 100);

function playerMovement() {
  if (!moveInterval) {
    document.getElementById("player-hint").style.opacity = 0;
    playMoveAnimationStep();
    moveInterval = createMoveAnimation();
  }

  if (moveIntervalStopTimeout) {
    clearTimeout(moveIntervalStopTimeout);
    moveIntervalStopTimeout = null;
  }

  moveIntervalStopTimeout = setTimeout(() => {
    clearInterval(moveInterval);
    moveInterval = null;
    player.style["background-position"] = 0;
    document.getElementById("player-hint").style.opacity = 1;
  }, 200);
}

window.onscroll = function (e) {
  if (canScrollOrSwipe) {
    const delta = detectPageVerticalPosition();
    runTheseFunctionsAfterScrollOrSwipe();
    playerMovement();
  }
};

moveLayers();