let adviceDrop = document.querySelectorAll('.advice__box');

for (let i = 0; i < adviceBox.length; i++) {
 adviceDrop[i].addEventListener('click', () => {
  adviceDrop[i].classList.toggle('active')
 })
}