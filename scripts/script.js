const checkbox = document.querySelector('.menu__checkbox');
const buttonOpen = document.querySelector('.menu__open-button');
const buttonClose = document.querySelector('.menu__close-button');
const header = document.querySelector('.header');
const logoHeader = header.querySelector('.logo');
const menu = document.querySelector('.menu');

function removeClass(elem, className) {
    elem.classList.remove(className);
    return;
  }
  
  function addClass(elem, className) {
    elem.classList.add(className);
    return;
  }

window.addEventListener('resize', evt => {
    if (evt.target.innerWidth < 1024) {
      if (checkbox.checked == false) {
          addClass(menu, 'menu_hidden')
      }
    }

    if (evt.target.innerWidth > 1023) {
        removeClass(menu, 'menu_hidden')
        removeClass(logoHeader, 'logo_hidden');
        checkbox.checked = false;
      }
  })

  checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        addClass(logoHeader, 'logo_hidden');
        removeClass(menu, 'menu_hidden');
    } else {
    removeClass(logoHeader, 'logo_hidden');
    addClass(menu, 'menu_hidden');
    }
} )

const images = document.querySelectorAll(".slider__image");
const slider = document.querySelector(".slider");
const sliderSlide= document.querySelector(".slider__slide");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let width;
let activeSlide = 0;

const turnSlider = () => {
    sliderSlide.style.transform = "translate(-" + width * activeSlide + "px)";
};

const initialize = () => {
  width = slider.offsetWidth;
  sliderSlide.style.width = width * images.length + "px";
  images.forEach((image) => {
    image.style.width = width + "px";
    image.style.heigth = "auto";
  });
};

initialize();

window.addEventListener("resize", () => {
  initialize();
  turnSlider();
});

nextButton.addEventListener("click", () => {
  activeSlide >= images.length - 1 ? (activeSlide = 0) : activeSlide++;
  turnSlider();
});

prevButton.addEventListener("click", () => {
  activeSlide <= 0 ? (activeSlide = images.length - 1) : activeSlide--;
  turnSlider();
});
