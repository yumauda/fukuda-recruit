"use strict";

let swiper = new Swiper(".swiper1", {
  loop: true,
  centeredSlides: false,
  speed: 300,
  breakpoints: {
    768: {
      slidesPerView: 2, 
      slidesPerGroup: 2,
      spaceBetween: 400,
    },
  },
});

let thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});
