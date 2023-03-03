let burger = document.querySelector('.header__burger-box');
let close = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.style.right = '0%'
})

close.addEventListener('click', () => {
  menu.style.right = '-100%'
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