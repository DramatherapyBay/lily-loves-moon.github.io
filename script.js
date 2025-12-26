document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll("nav a");

  function hideAll() {
    sections.forEach(sec => sec.classList.remove("active"));
  }

  links.forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();
      hideAll();
      const target = this.getAttribute("href").substring(1);
      document.getElementById(target).classList.add("active");
    });
  });

  // Show home by default
  document.getElementById("home").classList.add("active");
});
