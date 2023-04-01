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
