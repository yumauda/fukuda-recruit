"use strict";

let swiper = new Swiper(".swiper1", {
  loop: true,
  centeredSlides: false,
  speed: 300,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: "30%",
    },
  },
});

let swiper2 = new Swiper(".swiper-voice", {
  loop: true,
  centeredSlides: true,
  speed: 300,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-voice .swiper-pagination", // ← 必須
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
