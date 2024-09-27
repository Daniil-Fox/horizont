import './_components.js';
import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox=gallery]", {
  // Your custom options
});


const menu = document.querySelector('.menu')
const headerBurger = document.querySelector('.header__burger')
headerBurger.addEventListener('click', e => {
  menu.classList.toggle('active')
  headerBurger.classList.toggle('active')
})
