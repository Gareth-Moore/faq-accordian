const buttons = document.querySelectorAll(".btn");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const target = buttons.getAttribute("data-target");
    const paragraph = document.getElementById(target);

    if (paragraph) {
      // paragraph.style.maxHeight = paragraph.scrollHeight + "px";
      const allParagraphs = document.querySelectorAll(".paragraph");
      allParagraphs.forEach((paragraph) => {
        if (paragraph.id != target) paragraph.classList.remove("show");
      });
      paragraph.classList.toggle("show");
    }
  });
});
