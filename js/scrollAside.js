let adviceBox = document.querySelectorAll('.advice__box');
let adviceLink = document.querySelectorAll('.advice__link');
let adviceLinkBox = document.querySelector('.advice__nav-inner-box');
let aside = document.querySelector('.advice__nav');

let koef = 75*4.5
let sumOfHeight = adviceBox[adviceBox.length - 1].offsetHeight + adviceBox[adviceBox.length - 2].offsetHeight + adviceBox[adviceBox.length - 3].offsetHeight + koef
let checkPoint = aside.offsetHeight - sumOfHeight

window.addEventListener('scroll', () => {
 scrollAside()
 addClass()
})



function scrollAside() {
 if (adviceBox.length <= 3) {
  if (aside.getBoundingClientRect().top <= 0 && adviceBox[adviceBox.length - 1].getBoundingClientRect().top >= 100) {
   adviceLinkBox.style.position = 'fixed';
   adviceLinkBox.style.top = '0';
   adviceLinkBox.style.bottom = 'auto';
  } else if (aside.getBoundingClientRect().top >= 0) {
   adviceLinkBox.style.position = 'relative';
  } else if (adviceBox[adviceBox.length - 1].getBoundingClientRect().top <= 100) {
   adviceLinkBox.style.position = 'absolute';
   adviceLinkBox.style.top = 'auto';
   adviceLinkBox.style.bottom = '0';
  }
 } else {
  if (aside.getBoundingClientRect().top <= 0 && aside.getBoundingClientRect().top >= -checkPoint) {
   adviceLinkBox.style.position = 'fixed';
   adviceLinkBox.style.top = '0';
   adviceLinkBox.style.bottom = 'auto';
  } else if (aside.getBoundingClientRect().top >= 0) {
   adviceLinkBox.style.position = 'relative';
  } else if (aside.getBoundingClientRect().top <= -checkPoint) {
   adviceLinkBox.style.position = 'absolute';
   adviceLinkBox.style.top = 'auto';
   adviceLinkBox.style.bottom = '0';
  }
 }
}

function addClass() {
 for (let i = 0; i < adviceBox.length; i++) {
  if (adviceBox[i].getBoundingClientRect().top <= 50 && adviceBox[i].getBoundingClientRect().bottom >= 0) {
   adviceLink[i].classList.add('active')
  } else {
   adviceLink[i].classList.remove('active')
  }
 }
}