let burger = document.querySelector('.header__burger-box');
let close = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');
let html = document.querySelector('.html');

function Scroll() {
  if (menu.classList.contains('open')) {
    html.style.overflow = 'hidden'
  } else {
    html.style.overflow = 'auto'
  }
}

burger.addEventListener('click', () => {
  menu.classList.add('open')
  Scroll()
  menu.style.top = '0%'
})

close.addEventListener('click', () => {
  menu.classList.remove('open')
  Scroll()
  menu.style.top = '-200%'
})

let mobileBtn = document.querySelectorAll('.mobile-btn');
let mobileArr = document.querySelectorAll('.mobile-arr');

for (let i = 0; i < mobileBtn.length; i++) {
  mobileBtn[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      mobileArr[i].classList.toggle('active');
      checkClass()
    } else {
      removeClass()
      mobileArr[i].classList.toggle('active');
      checkClass()
    }
  })
}

function removeClass(target) {
  for (let i = 0; i < mobileBtn.length; i++) {
    mobileArr[i].classList.remove('active');
  }
}

function checkClass() {
  for (let i = 0; i < mobileBtn.length; i++) {
    if (mobileArr[i].classList.contains('active')) {
      mobileBtn[i].style.maxHeight = '370px'
    } else {
      mobileBtn[i].style.maxHeight = '50px'
    }
  }
}

//COOKIES

let cookies = document.querySelector('.cookies');
let cookiesBtn = document.querySelector('.cookies__accept');

cookiesBtn.addEventListener('click', () => {
  cookies.classList.add('cookies_accepted');
})