// Header slider

const slider = tns({
  container: ".header-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
});

const sliderPrev = document.querySelector("#sliderPrev");
// const sliderNext = document.querySelector("#sliderNext");

sliderPrev.onclick = function () {
  slider.goTo("prev");
};
// sliderNext.onclick = function () {
//   slider.goTo("next");
// };

document.querySelector("#sliderNext").onclick = function () {
  slider.goTo("next");
};

// Блок счетчика
const currentSliderIndexEl = document.querySelector("#sliderCurrent");
const sliderTotalEl = document.querySelector("#sliderTotal");

function updateSliderCount() {
  const sliderInfo = slider.getInfo();
  currentSliderIndexEl.innerText = "0" + (sliderInfo.navCurrentIndex + 1);
  sliderTotalEl.innerText = "0" + sliderInfo.pages;
}
// На старте
updateSliderCount();

// При перемещении
slider.events.on("indexChanged", () => {
  updateSliderCount();
});

// burger
const nav = document.querySelector(".header-nav__menu");
// const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".header-nav__extra");
const navBtnImg = document.querySelector(".nav-btn-img");
const menuLinks = document.querySelectorAll(".header-nav__link");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/header/nav-close.svg";
  } else {
    navBtnImg.src = "./img/header/nav-icon.svg";
  }
};

(function () {
  if (window.innerWidth <= 1140) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        nav.classList.toggle("open");
        navBtnImg.src = "./img/header/nav-icon.svg";
      });
    }
  }
})();
