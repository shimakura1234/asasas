document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");
  
  function checkScroll() {
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (boxTop < windowHeight) {
        box.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", checkScroll);
});
