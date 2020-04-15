/*
  Variables & HTMLl element references
 */
let canScrollOrSwipe = false;
let previousPageVerticalPosition = 0, pageVerticalPosition = 0, deltaPageVerticalPosition = 0;
let touchStartX = 0, touchCurrentX = 0, touchEndX = 0, pageVerticalPositionOnTouch = 0, touchSpeed = 3;

const pageDiv = document.getElementById("page");
const containerDiv = document.getElementById("container");
const contentDiv = document.getElementById("content");
const layers = {
  LAYER_1: mapLayer("layer-horizontal-1"),
  LAYER_2: mapLayer("layer-horizontal-2"),
  LAYER_3: mapLayer("layer-horizontal-3"),
  LAYER_4: mapLayer("layer-horizontal-4"),
  LAYER_5: mapLayer("layer-horizontal-5"),
};
const player = document.getElementById("player");
const layerKeys = Object.keys(layers);
const animationsEnabled = true;

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
      $(`#project-board-${key}`).animate({bottom: '-=600px'}, 500);
    }
  }
}

function startBoardsAnimations(key) {
  if (!boardAnimationsPlayed[key]) {
    boardAnimationsPlayed[key] = true;
    $(`#project-board-${key}`).animate({ bottom: "+=600px" }, 500);
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
  speys: "PURPOSE OF THE SYSTEM IS TO ALLOW USERS TO TRACK PACKAGES, MAINTAIN INFORMATION ABOUT PACKAGES IN USER-FRIENDLY SINGLE-PAGE-APPLICATION. INFRASTRUCTURE COMPOSED OF MICROSERVICES. IT GAVE THE POSSIBILITY TO PRACTICE MICROSERVICE ARCHITECTURE (.NET) AS WELL AS REACT. SERVICES WERE HOSTED IN AZURE.",
  triven: "TRIVEN WAS THE STARTUP, WHICH AIMED TO MAKE BUYING AND SELLING VEHICLES EASIER. WITH A TEAM OF SEVEN PEOPLE, WE BUILT A PLATFORM IN JAVA SPRING BOOT AND REACT."
};

const skipStoneDialog = {speys: false, triven: false};
function resetStonesAnimations() {
  for (let key of Object.keys(stoneAnimationsPlayed)) {
    if (stoneAnimationsPlayed[key]) {
      stoneAnimationsPlayed[key] = false;
      $(`#stone-${key}`).css({bottom: '-300px'});
      $(`#dialog-${key}`).css({
        width: "200px",
        height: "100px",
        bottom: "0",
        left: "0",
        opacity: "0"
      });
    }
  }
}

function startStonesAnimation(key) {
  if (!stoneAnimationsPlayed[key]) {
    stoneAnimationsPlayed[key] = true;
    $(`#stone-${key}`).animate({ bottom: "0px" }, 500, function () {
      $(`#dialog-${key}`).animate({
        width: "400px",
        height: "200px",
        opacity: "1",
        left: "100px",
        bottom: "200px",
      }, 500, function () {
        if (!skipStoneDialog[key]) {
          skipStoneDialog[key] = true;
          new Typed(`#dialog-${key}`, { strings: [dialogText[key]], typeSpeed: 5, showCursor: false });
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
  TREE ANIMATIONS
 */

const treeAnimationsPlayed = {master: true, bachelor: true};
const bachelorTreeDiv = document.getElementById("s03-tree-bachelor");
const masterTreeDiv = document.getElementById("s03-tree-master");

function resetTreeAnimations() {
  if (treeAnimationsPlayed.bachelor) {
    treeAnimationsPlayed.bachelor = false;
    bachelorTreeDiv.style.opacity = 0;
    bachelorTreeDiv.style.top = "175px";
  }

  if (treeAnimationsPlayed.master) {
    treeAnimationsPlayed.master = false;
    masterTreeDiv.style.opacity = 0;
    masterTreeDiv.style.top = "45px";
  }
}

function startTreeAnimations() {
  if (!treeAnimationsPlayed.bachelor) {
    treeAnimationsPlayed.bachelor = true;
    $(bachelorTreeDiv).animate({opacity: "1", top: "+=25px"}, 500);
  }
  if (!treeAnimationsPlayed.master) {
    treeAnimationsPlayed.master = true;
    setTimeout(() => {
      $(masterTreeDiv).animate({opacity: "1", top: "+=25px"}, 500)
    }, 500);
  }
}

/*
  GATE LABELS ANIMATION
 */

const gateLabelsDivs = {
  exp: document.getElementById("gate-label-experience"),
  projects: document.getElementById("gate-label-projects"),
  knowledge: document.getElementById("gate-label-knowledge")
};
const gateLabelsAnimationsPlayed = {exp: true, projects: true, knowledge: true};

function resetGateLabelsAnimations() {
  Object.keys(gateLabelsAnimationsPlayed).forEach(resetGateLabelAnimation);
}

function resetGateLabelAnimation(key) {
  if (gateLabelsAnimationsPlayed[key]) {
    gateLabelsAnimationsPlayed[key] = false;
    $(gateLabelsDivs[key]).animate({top: "+=100px"}, 500);
  }
}

function startLabelAnimation(key) {
  if (!gateLabelsAnimationsPlayed[key]) {
    gateLabelsAnimationsPlayed[key] = true;
    $(gateLabelsDivs[key]).animate({top: "-=100px"}, 500);
  }
}

/*
  TOUCH CONTROLS
 */

function initTouchEvents() {
  document.addEventListener("touchstart", handleStart);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}

function handleStart(e) {
  touchStartX = e.targetTouches[0].pageX;
  pageVerticalPositionOnTouch = pageVerticalPosition;
}

function handleMove(e) {
  touchCurrentX = e.targetTouches[0].pageX;
  if (canScrollOrSwipe) {
    detectPageVerticalPosition();
    runTheseFunctionsAfterScrollOrSwipe();
    playerMovement();
  }
}

function handleEnd(e) {
  touchEndX = e.changedTouches[0].pageX;
}

/*
  START OF THE PROGRAM
 */

function reset() {
  moveLayers();

  if (animationsEnabled) {
    resetGateLabelsAnimations();
    resetLoaderAnimations();
    resetBoardsAnimations();
    resetStonesAnimations();
    resetTreeAnimations();
  }

}

function makePageScrollable() {
  contentDiv.removeAttribute("class");
  canScrollOrSwipe = true;
}

function detectPageVerticalPosition() {
  previousPageVerticalPosition = pageVerticalPosition;

  if ("computer" === deviceName) {
    pageVerticalPosition = pageYOffset;
    deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
  } else {
    pageVerticalPosition = Math.max(pageVerticalPositionOnTouch + (touchStartX - touchCurrentX) * touchSpeed, 0);
    if (pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight) {
      pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight;
    }
    deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
  }
}

function runTheseFunctionsAfterScrollOrSwipe() {
  moveLayers();

  // Gate labels
  if (animationsEnabled) {
    pageVerticalPosition < 1500 && resetGateLabelAnimation("exp");
    pageVerticalPosition < 9100 && resetGateLabelAnimation("projects");
    pageVerticalPosition < 12800 && resetGateLabelAnimation("knowledge");
    pageVerticalPosition > 1700 && startLabelAnimation("exp");
    pageVerticalPosition > 9300 && startLabelAnimation("projects");
    pageVerticalPosition > 13000 && startLabelAnimation("knowledge");

    pageVerticalPosition > 13500 && startLoaderAnimations();
    pageVerticalPosition > 2700 && startBoardsAnimations("travix");
    pageVerticalPosition > 3800 && startBoardsAnimations("genius");
    pageVerticalPosition > 5600 && startBoardsAnimations("finest");
    pageVerticalPosition > 7300 && startBoardsAnimations("abb");

    pageVerticalPosition > 9300 && startStonesAnimation("speys");
    pageVerticalPosition > 10300 && startStonesAnimation("triven");

    pageVerticalPosition > 16100 && startTreeAnimations();

    pageVerticalPosition < 1500 && reset();
  }
}

window.onload = function (e) {
  if ("computer" !== deviceName) {
    initTouchEvents();
  }
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
