import { initCanvas } from './canvas.js';
import { initTypewriter, initScrollReveal } from './animations.js';
import { initSlider } from './slider.js';
import { initNav } from './nav.js';
import { generateCV } from './cv.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initTypewriter();
  initScrollReveal();
  initSlider();
  initNav();
  initContact();
});
