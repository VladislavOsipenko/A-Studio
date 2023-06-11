import "./jquery-3.6.3.js";
import "./slick.min.js";

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper('.swiper', {
    
});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__li'),
    hamburger = document.querySelector('.header__hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    });

    $('.comments__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
        ]
      });
})

