const checkbox = document.querySelector('.header__checkbox');
const buttonOpen = document.querySelector('.header__open-button');
const buttonClose = document.querySelector('.header__close-button');
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

if( window.innerWidth < 1024){
  addClass(menu, 'menu_hidden')
}

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

const dots = document.querySelectorAll('.dots__item')

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        
    })
})


let currentSlide = 0;
const slides = document.querySelectorAll('.press__source');
const links =  document.querySelectorAll('.press__link');

function ChangeDot(dot) {
    document.querySelector(".dots__item_active").classList.remove('dots__item_active')
    dot.classList.add('dots__item_active');
}

function ChangeCard(i) {
    document.querySelector('.press__source_active').classList.remove('press__source_active');
    slides[i].classList.add('press__source_active');

    document.querySelector('.press__link_active').classList.remove('press__link_active');
    links[i].classList.add('press__link_active');
}

for (var i = 0; i < dots.length; i++) {
    (function(index){
       dots[i].onclick = function() {
        if (currentSlide !== index) {
            ChangeDot(dots[index]);
            ChangeCard(index);
            currentSlide = index;
        }
      }
    })(i);
   }

const formButton = document.querySelector('.form__button');

formButton.addEventListener('click', function() {
  formButton.innerHTML = "Готово!";
})