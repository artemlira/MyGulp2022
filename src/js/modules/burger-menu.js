const burgerMenu = document.querySelector('.burger__wrapper');
const burgerNav = burgerMenu.querySelector('.burger__menu');
const burgerIcon = burgerMenu.querySelector('.menu__icon');

export function showMenu() {
   burgerMenu.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.menu__icon')) {
         burgerNav.classList.toggle('active');
         burgerIcon.classList.toggle('active');
      }
   });
}