const swiper = new Swiper('.project-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 'auto',
 spaceBetween: 30,
 autoWidth: false,
 freeMode: true,
});

const swiper1 = new Swiper('.solutions-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 'auto',
 centeredSlides: false,
 spaceBetween: 50,
 autoWidth: false,
 autoHeight: true,
 freeMode: true,
 breakpoints: {
  768: {
   slidesPerView: 'auto',
   spaceBetween: 15,
  }
 }
});

var swiper2 = new Swiper(".show-slider", {
 direction: "vertical",
 slidesPerView: 1,
 spaceBetween: 30,
 loop: true,
 mousewheel: true,
 speed: 1000,
 effect: "slide",
 parallax: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
});

var swiper3 = new Swiper(".clients-slider", {
 slidesPerView: 4,
 spaceBetween: 18,
 autoWidth: false,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  300: {
   slidesPerView: 1,
  },
  768: {
   slidesPerView: 2,
  },
  1300: {
   slidesPerView: 4,
  },
 }
});