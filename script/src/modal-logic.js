const modalDiv = document.getElementById("wooden-modal");
const modalContentDiv = document.getElementById("wooden-modal-content");
const modalContentOuterDiv = document.getElementById("wooden-modal-content-outer");
modalDiv.onclick = () => $(modalDiv).fadeOut(500);

$(function () {
  let defaultFontSize = "3em";
  let defaultHeight = "45%";
  let defaultTop = "20%";
  if (outerWidth < 600) {
    const modalOuterContent = $("#wooden-modal-content-outer")[0];
    if (modalOuterContent) {
      defaultFontSize = "4em";
      // modalOuterContent.style["font-size"] = "4em";
    }
  }

  function resetModalCss() {
    modalContentOuterDiv.style["top"] = defaultTop;
    modalContentOuterDiv.style["height"] = defaultHeight;
    modalContentOuterDiv.style["font-size"] = defaultFontSize;
  }

  const travixBoardPlank1 = $("#project-board-travix > .board-plan-1");
  travixBoardPlank1[0].style.cursor = "pointer";
  travixBoardPlank1.on("click", function () {
    $(modalDiv).fadeIn(500);
  });

  activatePlank("#project-board-travix > .board-plan-1");
  activatePlank("#project-board-travix > .board-plan-2");
  activatePlank("#project-board-travix > .board-plan-3");

  activatePlank("#project-board-genius > .board-plan-1");
  activatePlank("#project-board-genius > .board-plan-2");
  activatePlank("#project-board-genius > .board-plan-3");

  activatePlank("#project-board-finest > .board-plan-1");
  activatePlank("#project-board-finest > .board-plan-2");
  activatePlank("#project-board-finest > .board-plan-3");

  activatePlank("#project-board-abb > .board-plan-1");
  activatePlank("#project-board-abb > .board-plan-2");

  activateMonitor();

  activateStones();

  function activatePlank(plankName) {
    const currentBoard = $(plankName)[0];
    const plankTextEl = $(`${plankName} > .board-plank-text`)[0];

    // plank can only be activated if it exists and has some text in it
    if (currentBoard && plankTextEl) {
      currentBoard.style.cursor = "pointer";
      currentBoard.onclick = () => {
        modalContentDiv.innerText = plankTextEl.innerText;
        resetModalCss();
        $(modalDiv).fadeIn(500);
      }
    }
  }

  function activateMonitor() {
    const monitorDiv = document.getElementById("s01-description");
    monitorDiv.onclick = () => {
      monitorDiv.style.cursor = "pointer";
      modalContentDiv.innerText = "WELCOME TO MY WEBPAGE! CONTINUE SCROLLING TO DISCOVER MY EXPERIENCE!";
      resetModalCss();
      $(modalDiv).fadeIn(500);
    }
  }

  function activateStones() {
    const speysStoneDiv = document.getElementById("stone-speys");
    speysStoneDiv.onclick = () => {
      speysStoneDiv.style.cursor = "pointer";
      resetModalCss();
      modalContentOuterDiv.style["top"] = "0%";
      modalContentOuterDiv.style["height"] = "75%";
      modalContentDiv.innerText = "PURPOSE OF THE SYSTEM IS TO ALLOW USERS TO TRACK PACKAGES, MAINTAIN INFORMATION ABOUT PACKAGES IN USER-FRIENDLY SINGLE-PAGE-APPLICATION. INFRASTRUCTURE COMPOSED OF MICROSERVICES. IT GAVE THE POSSIBILITY TO PRACTICE MICROSERVICE ARCHITECTURE (.NET) AS WELL AS REACT. SERVICES WERE HOSTED IN AZURE.";
      $(modalDiv).fadeIn(500);
    };
    const trivenStoneDiv = document.getElementById("stone-triven");
    trivenStoneDiv.onclick = () => {
      trivenStoneDiv.style.cursor = "pointer";
      resetModalCss();
      modalContentDiv.innerText = "TRIVEN WAS THE STARTUP, WHICH AIMED TO MAKE BUYING AND SELLING VEHICLES EASIER. WITH A TEAM OF SEVEN PEOPLE, WE BUILT A PLATFORM IN JAVA SPRING BOOT AND REACT.";
      $(modalDiv).fadeIn(500);
    };
  }
});
