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
 spaceBetween: 15,
 autoWidth: false,
 autoHeight: true,
 freeMode: true,
});

var swiper2 = new Swiper(".show-slider", {
 direction: "vertical",
 slidesPerView: 1,
 spaceBetween: 30,
 mousewheel: false,
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
});