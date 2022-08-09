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