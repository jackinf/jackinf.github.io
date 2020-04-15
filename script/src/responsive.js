$(() => {
  if (outerWidth < 600) {
    const modalOuterContent = $("#wooden-modal-content-outer")[0];
    if (modalOuterContent) {
      modalOuterContent.style["font-size"] = "4em";
    }
  }
});
