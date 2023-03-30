const swiper = new Swiper('.project-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 1,
 spaceBetween: 30,
 autoWidth: false,
 freeMode: false,
 breakpoints: {
  768: {
   slidesPerView: 'auto',
   freeMode: true,
  }
 }
});

const swiper1 = new Swiper('.solutions-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 1,
 centeredSlides: true,
 spaceBetween: 50,
 autoWidth: false,
 autoHeight: true,
 freeMode: true,
 breakpoints: {
  768: {
   slidesPerView: 'auto',
   spaceBetween: 15,
   centeredSlides: false,
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
 loop: true,
 autoplay: {
  delay: 3000,
 },
 speed: 4000,
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

var swiper3 = new Swiper(".addition-slider", {
 slidesPerView: 1,
 spaceBetween: 0,
 speed: 3000,
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
});

const swiper5 = new Swiper('.addition-mobile-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 1,
 spaceBetween: 30,
 autoWidth: false,
 freeMode: false,
 breakpoints: {
  768: {
   slidesPerView: 'auto',
   freeMode: true,
  }
 }
});

const swiper4 = new Swiper('.design-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 slidesPerView: 'auto',
 spaceBetween: 10,
 autoWidth: false,
 centeredSlides: true,
 loop: true,
 768: {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 30,
  centeredSlides: true,
 }
});