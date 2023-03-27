let tablinks = document.querySelectorAll(".technical__link");
let tabcontent = document.querySelectorAll(".technical__tabs-content");
let mobileTab = document.querySelectorAll('.technical__mobile-box');
let screenWidth = window.screen.width

window.addEventListener('resize', () => {
 screenWidth = window.screen.width
})

document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
 if (screenWidth >= screenWidth && window.screen.width > 768) {
  for (let i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
 } else {
  for (let i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
  }
 }
}


for (let i = 0; i < mobileTab.length; i++) {
 if (screenWidth < 768) {
  mobileTab[i].addEventListener('click', () => {
   mobileTab[i].classList.toggle('active')
  })
 }
}

