document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navTrigger = document.querySelector(".navTrigger");
  const mainListDiv = document.getElementById("mainListDiv");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const indicators = document.getElementById("indicators");
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slider-container img");
  const totalSlides = slides.length;

  navTrigger.addEventListener("click", () => {
    navTrigger.classList.toggle("active");
    mainListDiv.classList.toggle("show_list");
    nav.classList.toggle("affix");
  });

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    indicators.classList.toggle("dark-mode");
    slides.forEach((slide) => slide.classList.toggle("dark-mode"));
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
    updateIndicators();
    document.getElementById("slide-number").textContent = `${
      index + 1
    } / ${totalSlides}`;
  }

  function createIndicators() {
    const ul = document.createElement("ul");
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("li");
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      ul.appendChild(dot);
    }
    indicators.appendChild(ul);
    updateIndicators();
  }

  function updateIndicators() {
    const dots = indicators.querySelectorAll("li");
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === currentSlide) {
        dot.classList.add("active");
      }
    });
  }

  document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  createIndicators();
  showSlide(currentSlide);
});

/*tabs*/
var tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
var tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, "");

/* modal */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("modalBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
