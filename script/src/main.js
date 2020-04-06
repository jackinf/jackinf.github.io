/*
  Variables & HTMLl element references
 */
let canScrollOrSwipe = false;
let previousPageVerticalPosition = 0;
let pageVerticalPosition = 0;
let currentPhase = "horizontal";
let deltaPageVerticalPosition = 0;
const constants = { PHASE_1: "phase1" };

const contentDiv = document.getElementById("content");
const layers = {
  LAYER_1: mapLayer("layer-horizontal-1"),
  LAYER_2: mapLayer("layer-horizontal-2"),
  LAYER_3: mapLayer("layer-horizontal-3"),
};
const player = document.getElementById("player");
const layerKeys = Object.keys(layers);

/*
  Layer logic
 */

function mapLayer(layerId) {
  const elem = document.getElementById(layerId);
  const speed = parseFloat(elem.getAttribute('data-layer-speed'));
  let offset = elem.getAttribute('data-left-offset');
  offset = offset ? parseFloat(offset) : 0;
  return { elem, speed, offset };
}

function moveLayers() {
  for (let layerKey of layerKeys) {
    const layerElem = layers[layerKey];
    const newLeftPosition = layerElem.offset + (-1 * layerElem.speed * pageVerticalPosition);
    layerElem.elem.style.left = `${newLeftPosition}px`;
  }
}

/*
  PLAYER'S SECTION
 */

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

/*
  BOARDS ANIMATIONS
 */

const boardTravix = document.getElementById("project-board-travix");
const boardGenius = document.getElementById("project-board-genius");
const boardFinest = document.getElementById("project-board-finest");
const boardAbb = document.getElementById("project-board-abb");
const boardAnimationsPlayed = {
  travix: true,
  genius: true,
  finest: true,
  abb: true
}

function resetBoardsAnimations() {
  for (let key of Object.keys(boardAnimationsPlayed)) {
    console.log(key);
    if (boardAnimationsPlayed[key]) {
      boardAnimationsPlayed[key] = false;
      $(`#project-board-${key}`).css({top: '+=600px'});
    }
  }
}

function startBoardsAnimations(key) {
  if (!boardAnimationsPlayed[key]) {
    boardAnimationsPlayed[key] = true;
    $(`#project-board-${key}`).animate({ top: "-=600px" }, 500);
  }
}

/*
  LOADER ANIMATIONS
 */

const animationsPlayed = { loaders: false };
const csharpBar = document.getElementById("progress-bar-charp");
const jsBar = document.getElementById("progress-bar-js");
const pythonBar = document.getElementById("progress-bar-python");

function resetLoaderAnimations() {
  if (!animationsPlayed.loaders) {
    return;
  }
  animationsPlayed.loaders = false;
  [csharpBar, jsBar, pythonBar].forEach(bar => bar.style.width = "0px");
}

function startLoaderAnimations() {
  if (animationsPlayed.loaders) {
    return;
  }
  animationsPlayed.loaders = true;

  const loadingPixelWidth = 15;
  const steps = {csharp: 0, js: 0, python: 0};
  const maxSteps = {csharp: 20, js: 18, python: 14};

  const csharpInterval = setInterval(() => increasePercent("csharp", csharpBar, () => csharpInterval), 50);
  const jsInterval = setInterval(() => increasePercent("js", jsBar, () => jsInterval), 50);
  const pythonInterval = setInterval(() => increasePercent("python", pythonBar, () => pythonInterval), 50);

  function increasePercent(key, bar, getInterval) {
    steps[key] += 1;
    bar.style.width = `${steps[key] * loadingPixelWidth}px`;
    if (steps[key] >= maxSteps[key]) {
      clearInterval(getInterval());
    }
  }
}

function startDescriptionAnimation() {
  if (Typed) {
    new Typed('#s01-monitor-text', {
      strings: ['WELCOME TO MY WEBPAGE!', 'CONTINUE SCROLLING TO DISCOVER MY EXPERIENCE!'],
      typeSpeed: 40
    });
  }
}

/*
  START OF THE PROGRAM
 */

function setPhase() {
  currentPhase = constants.PHASE_1;
}

function reset() {
  resetLoaderAnimations();
  resetBoardsAnimations();
}

function makePageScrollable() {
  contentDiv.removeAttribute("class");
  canScrollOrSwipe = true;
}

function detectPageVerticalPosition() {
  previousPageVerticalPosition = pageVerticalPosition;
  pageVerticalPosition = pageYOffset;
  deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
}

function runTheseFunctionsAfterScrollOrSwipe() {
  setPhase();
  moveLayers();

  pageYOffset > 13500 && startLoaderAnimations();
  pageYOffset > 2700 && startBoardsAnimations("travix");
  pageYOffset > 3800 && startBoardsAnimations("genius");
  pageYOffset > 5600 && startBoardsAnimations("finest");
  pageYOffset > 7300 && startBoardsAnimations("abb");

  pageYOffset < 1500 && reset();
}

window.onload = function (e) {
  reset();
  startDescriptionAnimation();
  makePageScrollable();
};

window.onscroll = function (e) {
  if (canScrollOrSwipe) {
    detectPageVerticalPosition();
    runTheseFunctionsAfterScrollOrSwipe();
    playerMovement();
  }
};

moveLayers();
