/*const result = (
  ' Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nВсего 110 баллов'
))
  */
  // Burger

(function () {
const burgerItem = document.querySelector('.header_burger');
const menu = document.querySelector(".header_nav");
const menuCloseItem = document.querySelector('.header_nav_close');
burgerItem.addEventListener('click', () => {
  menu.classList.add('header_nav_active');
    });
menuCloseItem.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});

}());  

/* const menuCloseLink = document.querySelectorAll('.header_link');
menuCloseLink.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
}); */