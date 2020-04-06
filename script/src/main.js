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

const boardAnimationsPlayed = {
  travix: true,
  genius: true,
  finest: true,
  abb: true
};

function resetBoardsAnimations() {
  for (let key of Object.keys(boardAnimationsPlayed)) {
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
  STONES ANIMATIONS
 */

const stoneAnimationsPlayed = {
  speys: true,
  triven: true
};

const dialogText = {
  speys: "PURPOSE OF THE SYSTEM IS TO ALLOW USERS TO TRACK PACKAGES, MAINTAIN INFORMATION ABOUT PACKAGES IN USER-FRIENDLY SINGLE-PAGE-APPLICATION. INFOSTRUCTURE COMPOSED OF MICROSERVICES. IT GAVE THE POSSIBILITY TO PRACTICE MICROSERVICE ARCHITECTURE (.NET) AS WELL AS REACT. SERVICES WERE HOSTED IN AZURE.",
  triven: "TRIVEN WAS THE STARTUP, WHICH AIMED TO MAKE BUYING AND SELLING VEHICLES EASIER. WITH A TEAM OF SEVEN PEOPLE, WE BUILT A PLATFORM IN JAVA SPRING BOOT AND REACT."
};

let hackSkipTyped = false;
function resetStonesAnimations() {
  for (let key of Object.keys(stoneAnimationsPlayed)) {
    if (stoneAnimationsPlayed[key]) {
      stoneAnimationsPlayed[key] = false;
      $(`#stone-${key}`).css({top: '+=600px'});
      $(`#dialog-${key}`).css({
        width: "200px",
        height: "100px",
        bottom: "0",
        left: "0",
        opacity: "0"
      });

      document.getElementById(`dialog-${key}`).innerHTML = "";

      // hack: if we scrolled too quickly, don't retype the text for the stone
      if (!hackSkipTyped) {
        setTimeout(() => {
          if (document.getElementById(`dialog-${key}`).innerHTML !== "") {
            hackSkipTyped = true;
          }
        });
      }
    }
  }
}

function startStonesAnimation(key) {
  if (!stoneAnimationsPlayed[key]) {
    stoneAnimationsPlayed[key] = true;
    $(`#stone-${key}`).animate({ top: "-=600px" }, 500, function () {
      $(`#dialog-${key}`).animate({
        width: "400px",
        height: "200px",
        opacity: "1",
        left: "100px",
        bottom: "200px",
      }, 500, function () {
        if (!hackSkipTyped) {
          new Typed(`#dialog-${key}`, { strings: [dialogText[key]], typeSpeed: 5 });
        }
      })
    });
  }
}

/*
  LOADER ANIMATIONS
 */

const animationsPlayed = { loaders: true };
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
  moveLayers();
  resetLoaderAnimations();
  resetBoardsAnimations();
  resetStonesAnimations();
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

  pageYOffset > 9300 && startStonesAnimation("speys");
  pageYOffset > 10300 && startStonesAnimation("triven");

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