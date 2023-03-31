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
const sliderNext = document.querySelector("#sliderNext");

sliderPrev.onclick = function () {
  slider.goTo("prev");
};
sliderNext.onclick = function () {
  slider.goTo("next");
};

// Что на старте
const sliderInfo = slider.getInfo();

const currentSliderIndexEl = document.querySelector("#sliderCurrent");
const sliderTotalEl = document.querySelector("#sliderTotal");

currentSliderIndexEl.innerText = sliderInfo.index;
sliderTotalEl.innerText = sliderInfo.pages;

// При перемещении

slider.events.on("indexChanged", () => {
  const sliderInfo = slider.getInfo();
  currentSliderIndexEl.innerText = sliderInfo.index;
  sliderTotalEl.innerText = sliderInfo.pages;
});
