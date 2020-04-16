const modalDiv = document.getElementById("wooden-modal");
const modalContentDiv = document.getElementById("wooden-modal-content");
const modalContentOuterDiv = document.getElementById("wooden-modal-content-outer");
const modalFadeInSpeed = 300;
const modalFadeOutSpeed = 300;
modalDiv.onclick = () => $(modalDiv).fadeOut(modalFadeOutSpeed);

$(function () {
  let defaultFontSize = "3em";
  let defaultHeight = "55%";
  let defaultTop = "20%";
  if (outerWidth < 600) {
    const modalOuterContent = $("#wooden-modal-content-outer")[0];
    if (modalOuterContent) {
      defaultFontSize = "4em";
      defaultTop = "10%";
    }
  }

  function resetModalCss() {
    modalContentOuterDiv.style["top"] = defaultTop;
    modalContentOuterDiv.style["height"] = defaultHeight;
    modalContentOuterDiv.style["font-size"] = defaultFontSize;
  }

  const travixBoardPlank1 = $("#project-board-travix > .board-plan-1");
  travixBoardPlank1[0].style.cursor = "pointer";
  travixBoardPlank1.on("click", () => $(modalDiv).fadeIn(modalFadeInSpeed));

  activatePlank("#project-board-travix > .board-plan-1", "IMPLEMENTED GOOGLE PAY AND APPLE PAY PAYMENT OPTIONS, RESULTING IN AN INCREASE IN REVENUE.");
  activatePlank("#project-board-travix > .board-plan-2", "DELIVERED 3D SECURE 2.0 - STRONG CUSTOMER AUTHENTICATION - STANDARD, WHICH AIMED TO ENHANCE CARD-HOLDER SECURITY.");
  activatePlank("#project-board-travix > .board-plan-3", "CONTRIBUTED TO GDPR-COMPLIANCE WORK BY MASKING SENSITIVE DATA FROM DATABASE.");

  activatePlank("#project-board-genius > .board-plan-1", "DEVELOPED MICROSERVICES REQUIRED FOR A PROPERLY FUNCTIONING RISK MANAGEMENT SYSTEM RESULTING IN 3X FEWER ERRORS");
  activatePlank("#project-board-genius > .board-plan-2", "MIGRATED AND MANAGED BUSINESS LOGIC FROM THE DATABASE’S STORED PROCEDURES INTO THE BACKEND AND COVERED WITH TESTS MAKING THE SYSTEM LESS PRONE TO ERRORS.");
  activatePlank("#project-board-genius > .board-plan-3", "OVERSAW MULTIPLE DEPLOYMENTS BY TAKING THE DEPLOYMENT MANAGER’S ROLE AND SYNCHRONIZING VERSIONS OF MULTIPLE MICROSERVICES.");

  activatePlank("#project-board-finest > .board-plan-1", "DEVELOPED INTEGRATION WITH GOVERNMENTAL SYSTEMS USING ESTONIAN DATA EXCHANGE LAYER AND MAKING DATA MORE SECURE.");
  activatePlank("#project-board-finest > .board-plan-2", "DEVELOPED MULTIPLE ASP MVC FORMS SO THAT SCIENTISTS WERE ABLE TO CREATE THEIR APPLICATIONS AND ASK FOR MONEY FOR THEIR RESEARCH.");
  activatePlank("#project-board-finest > .board-plan-3", "CREATED AROUND 3000 TESTS WHICH MADE CODE MANY TIMES LESS PRONE TO ERRORS.");

  activatePlank("#project-board-abb > .board-plan-1", "DEVELOPED DESKTOP APPLICATION WHICH GAVE OVERVIEW OF ACCIDENTS IN THE COMPANY AND RESULTING IN A REDUCTION OF ACCIDENTS BY 50% PER CENT.");
  activatePlank("#project-board-abb > .board-plan-2", "DEVELOPED AND DELIVERED A DESKTOP APPLICATION WHICH ALLOWED THE COMMUNICATION OF PROCESS STATUSES BETWEEN MULTIPLE COMPANIES RESULTING IN TIME SAVINGS.");

  activateMonitor();

  activateStones();

  function activatePlank(plankName, text) {
    const currentBoard = $(plankName)[0];
    const plankTextEl = $(`${plankName} > .board-plank-text`)[0];

    // plank can only be activated if it exists and has some text in it
    if (currentBoard && plankTextEl) {
      currentBoard.style.cursor = "pointer";
      currentBoard.onclick = () => {
        modalContentDiv.innerText = text;
        resetModalCss();
        $(modalDiv).fadeIn(modalFadeInSpeed);
      }
    }
  }

  function activateMonitor() {
    const monitorDiv = document.getElementById("s01-description");
    monitorDiv.onclick = () => {
      resetModalCss();
      monitorDiv.style.cursor = "pointer";
      modalContentDiv.innerText = "I have 8+ years of software engineering experience and strong knowledge in building applications using C#, JavaScript & Python. " +
        "Experienced working in international teams as a senior full-stack developer. I'm from Estonia and currently living in the Netherlands.";
      modalContentOuterDiv.style["height"] = defaultHeight;
      modalContentOuterDiv.style["font-size"] = defaultFontSize;
      $(modalDiv).fadeIn(modalFadeInSpeed);
    }
  }

  function activateStones() {
    const speysStoneDiv = document.getElementById("stone-speys");
    speysStoneDiv.onclick = () => {
      speysStoneDiv.style.cursor = "pointer";
      resetModalCss();
      modalContentOuterDiv.style["top"] = "10%";
      modalContentOuterDiv.style["height"] = "70%";
      modalContentDiv.innerText = "PURPOSE OF THE SYSTEM IS TO ALLOW USERS TO TRACK PACKAGES, MAINTAIN INFORMATION ABOUT PACKAGES IN USER-FRIENDLY SINGLE-PAGE-APPLICATION. INFRASTRUCTURE COMPOSED OF MICROSERVICES. IT GAVE THE POSSIBILITY TO PRACTICE MICROSERVICE ARCHITECTURE (.NET) AS WELL AS REACT. SERVICES WERE HOSTED IN AZURE.";
      $(modalDiv).fadeIn(modalFadeInSpeed);
    };
    const trivenStoneDiv = document.getElementById("stone-triven");
    trivenStoneDiv.onclick = () => {
      trivenStoneDiv.style.cursor = "pointer";
      resetModalCss();
      modalContentDiv.innerText = "TRIVEN WAS THE STARTUP, WHICH AIMED TO MAKE BUYING AND SELLING VEHICLES EASIER. WITH A TEAM OF SEVEN PEOPLE, WE BUILT A PLATFORM IN JAVA SPRING BOOT AND REACT.";
      $(modalDiv).fadeIn(modalFadeInSpeed);
    };
  }
});
