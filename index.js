/*const result = (
  ' Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nВсего 110 баллов'
))
  */
/*
const result_plans2 = (
  'Вёрстка соответствует макету. Ширина экрана 768px +24\nВёрстка соответствует макету. Ширина экрана 380px +24\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меню на ширине более 380, но не допускается на ширине более 770px)\nИтог:85 баллов'
)
*/
  // Burger

(function () {
const burgerItem = document.querySelector('.header_burger');
const menu = document.querySelector(".header_nav");
const menuCloseItem = document.querySelector('.header_nav_close');
const menuCloseLink = document.querySelector('.header_list');
burgerItem.addEventListener('click', () => {
  menu.classList.add('header_nav_active');
    });
menuCloseItem.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
menuCloseLink.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
}());  

/* const menuCloseLink = document.querySelectorAll('.header_link');
menuCloseLink.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
}); */