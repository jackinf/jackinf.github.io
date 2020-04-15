const modalDiv = document.getElementById("wooden-modal");
const modalContentDiv = document.getElementById("wooden-modal-content");
modalDiv.onclick = () => $(modalDiv).fadeOut(500);

$(function () {
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

  function activatePlank(plankName) {
    const currentBoard = $(plankName)[0];
    const plankTextEl = $(`${plankName} > .board-plank-text`)[0];

    // plank can only be activated if it exists and has some text in it
    if (currentBoard && plankTextEl) {
      currentBoard.style.cursor = "pointer";
      currentBoard.onclick = () => {
        modalContentDiv.innerText = plankTextEl.innerText;
        $(modalDiv).fadeIn(500);
      }
    }
  }
});
