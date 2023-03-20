//ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container], [data-animation-start]');
$('[data-animation-start]').scrollAnimations({
 offset: 0.9
});
$containers.scrollAnimations();

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
 cards[i].addEventListener('transitionend', () => {
  cards[i].style.transitionDelay = '0s'
 })
}