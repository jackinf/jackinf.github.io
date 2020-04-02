/*
  Variables
 */
let canScrollOrSwipe = false;
let previousPageVerticalPosition = 0;
let pageVerticalPosition = 0;
let currentPhase = "horizontal";
const constants = { PHASE_1: "phase1" };

/*
  HTMLl element references
 */
const containerDiv = document.getElementById("container");
const contentDiv = document.getElementById("content");
const layers = {
  LAYER_1: mapLayer("layer-horizontal-1"),
  LAYER_2: mapLayer("layer-horizontal-2"),
};
const player = document.getElementById("player");
const layerKeys = Object.keys(layers);

const enableScrollOrSwipe = () => canScrollOrSwipe = true;

function mapLayer(layerId) {
  const elem = document.getElementById(layerId);
  const speed = parseFloat(elem.getAttribute('data-layer-speed'));
  return { elem, speed };
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
}

function moveLayers() {
  for (let layerKey of layerKeys) {
    const layerElem = layers[layerKey];
    const newLeftPosition = -1 * layerElem.speed * pageVerticalPosition;
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

window.onscroll = function (e) {
  if (canScrollOrSwipe) {
    detectPageVerticalPosition();
    runTheseFunctionsAfterScrollOrSwipe();
  }
};
