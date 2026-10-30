(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const templates = require('./templates');

let previewElements;
let mainElement;

const loadImage = (target) => {
  const image = new Image();
  mainElement.classList.remove('gallery-main--video');
  mainElement.classList.add('gallery-main--loading');
  image.onload = () => {
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }
    mainElement.appendChild(image);
    mainElement.classList.remove('gallery-main--loading');
  };
  image.src = target.getAttribute('data-target');
  image.setAttribute('alt', target.getAttribute('data-desc'));
};

const loadVideo = (type, target) => {
  mainElement.classList.add('gallery-main--video');
  const id = target.getAttribute('data-target');
  const videoframe = templates[type](id);
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
  mainElement.innerHTML = videoframe;
};

const handlePreviewClick = (e) => {
  const { target } = e;

  switch (target.getAttribute('data-target-type')) {
    case 'img':
      loadImage(target);
      break;
    case 'youtube':
      loadVideo('youtube', target);
      break;
    case 'vimeo':
      loadVideo('vimeo', target);
      break;
    default:
      break;
  }
};

const attachListeners = () => {
  for (let i = 0; i < previewElements.length; i++) {
    previewElements[i].addEventListener('click', handlePreviewClick);
  }
};

const init = () => {
  if (document.getElementsByClassName('gallery-main').length > 0) {
    mainElement = document.querySelector('.gallery-main');
    previewElements = document.getElementsByClassName('gallery-preview-item');
    attachListeners();
  }
};

module.exports = {
  init,
};

},{"./templates":3}],2:[function(require,module,exports){
module.exports = (function menu() {
  let navList;
  let togglebutton;

  const setMenuOpen = (isOpen) => {
    navList.classList.toggle('nav_open', isOpen);
    togglebutton.setAttribute('aria-expanded', isOpen);
    togglebutton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };

  const handleMenuClick = () => {
    setMenuOpen(!navList.classList.contains('nav_open'));
  };

  const initMenu = () => {
    togglebutton = document.getElementById('menu_toggle_button');
    navList = document.getElementById('nav_list');
    if (!togglebutton || !navList) return;

    togglebutton.addEventListener('click', handleMenuClick);
    navList.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navList.classList.contains('nav_open')) {
        setMenuOpen(false);
        togglebutton.focus();
      }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', () => setMenuOpen(false));
  };

  return {
    init: initMenu,
  };
}());

},{}],3:[function(require,module,exports){
const youtube = id => `<iframe src="https://www.youtube.com/embed/${id}?autoplay=true" frameborder="0" allowfullscreen></iframe>`;
const vimeo = id => `<iframe src="https://player.vimeo.com/video/${id}?badge=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;

module.exports = {
  youtube,
  vimeo,
};

},{}],4:[function(require,module,exports){
const menu = require('./components/menu');
const gallery = require('./components/gallery');

menu.init();
gallery.init();

},{"./components/gallery":1,"./components/menu":2}]},{},[4]);
