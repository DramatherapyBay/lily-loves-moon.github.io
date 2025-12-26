// Smooth scroll for buttons
document.addEventListener("DOMContentLoaded", function() {
  // Scroll to consultation form
  const consultationButtons = document.querySelectorAll(".book-consultation-btn");
  
  consultationButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault(); // prevent default jump
      const target = document.querySelector("#contact");
      if(target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Section animations on scroll
  const sections = document.querySelectorAll(".section");
  
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < triggerBottom) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // trigger on load
});
