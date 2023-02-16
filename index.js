/*const result = (
  ' Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nВсего 110 баллов'
))
  */
  // Burger

(function () {
const burgerItem = document.querySelector('.header_burger');
const menu = document.querySelector(".header_nav");
const menuCloseItem = document.querySelector('.header_nav_close');
const menuCloseLink = document.querySelectorAll('.header_link');
burgerItem.addEventListener('click', () => {
  menu.classList.add('header_nav_active');
    });
menuCloseItem.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
}());  

(function () {
const buttonGarden = document.querySelector('.service_item'); // кнопка слушаем
const buttonGarden2 = document.querySelector('.service_item2');
const buttonGarden3 = document.querySelector('.service_item3');
const colorLinkForChange = document.querySelector('.service_link'); //линки менять
const colorLinkForChange2 = document.querySelector('.service_link2');
const colorLinkForChange3 = document.querySelector('.service_link3');
const divGardenCare = document.querySelectorAll('.garden_care'); //блоки блюрить
const divPlanting = document.querySelectorAll('.planting');
const divLawn = document.querySelectorAll('.lawn_care');

buttonGarden.addEventListener('click', () => {
  
  divGardenCare.forEach(butt => {
      if (buttonGarden2.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
    butt.classList.remove('blur_active')
      }else butt.classList.toggle('blur_active');
});

if (buttonGarden2.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
  buttonGarden.classList.remove('button_cponk')
    }else buttonGarden.classList.toggle('button_cponk');
  
    if (buttonGarden2.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
      colorLinkForChange.classList.remove('service_link_cponk')
        }else colorLinkForChange.classList.toggle('service_link_cponk');
 
});

////////////////////////////

buttonGarden2.addEventListener('click', () => {
  
  divPlanting.forEach(butt => {
      if (buttonGarden.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
        butt.classList.remove('blur_active')
      }else butt.classList.toggle('blur_active');
});

if (buttonGarden.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
  buttonGarden2.classList.remove('button_cponk')
    }else buttonGarden2.classList.toggle('button_cponk');
  
    if (buttonGarden.classList.contains('button_cponk') && buttonGarden3.classList.contains('button_cponk')){
      colorLinkForChange2.classList.remove('service_link_cponk')
        }else colorLinkForChange2.classList.toggle('service_link_cponk');
 
});

/////////////////////////////

buttonGarden3.addEventListener('click', () => {
  
  divLawn.forEach(butt => {
      if (buttonGarden.classList.contains('button_cponk') && buttonGarden2.classList.contains('button_cponk')){
    butt.classList.remove('blur_active')
      }else butt.classList.toggle('blur_active');
});

if (buttonGarden.classList.contains('button_cponk') && buttonGarden2.classList.contains('button_cponk')){
  buttonGarden3.classList.remove('button_cponk')
    }else buttonGarden3.classList.toggle('button_cponk');
  
    if (buttonGarden.classList.contains('button_cponk') && buttonGarden2.classList.contains('button_cponk')){
      colorLinkForChange3.classList.remove('service_link_cponk')
        }else colorLinkForChange3.classList.toggle('service_link_cponk');
 
});



}());

// accordeon

let tabPrices = document.querySelectorAll('.tabPrices');
let tabPricesDrop = document.querySelectorAll('.tabPricesDrop')
let tabPricesLogo = document.querySelectorAll('.tabPricesLogo')


const toClick = click => {
  const target1 = click.target;
  const target2 = click.target.nextElementSibling;
  target1.classList.toggle('active')
  target2.classList.toggle('active')


  tabPricesDrop.forEach(item => {
    if (item !== target2) {
      item.classList.remove("active")
    }
  })

  tabPrices.forEach(item => {
    if (item !== target1) {
      item.classList.remove("active")
    }
  })

  tabPricesLogo.forEach(item => {
    if (item !== target1) {
      item.classList.remove("active")
    }
  })  
}
tabPrices.forEach(item => {
  item.addEventListener("click", toClick);
});

//////////////////////
const accordion = document.getElementsByClassName('tab_contact_us');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (let j = 0; j < accordion.length; j++) {
        accordion[j].classList.remove('active');
      }
      this.classList.toggle('active');
    }
  });
};


const selectItems = document.querySelectorAll('.select-item');
const selectCurrent = document.querySelector('.select-current')
const selectHeader = document.querySelector('.select-header')

selectItems.forEach(item => {
  item.addEventListener('click', function () {
    const selectedText = this.textContent;
    selectCurrent.textContent = selectedText;
    if (selectedText !== 'City') {
      selectHeader.style.backgroundColor = '#C1E698';
    }
  });
});

//contact us


const selectorContUs = document.querySelector('.select');
const contactInfoBlock = document.querySelector('.contact_info');
const contactInfoBlockNy = document.querySelector('.contact_info_ny');
const contactInfoBlockYon = document.querySelector('.contact_info_yon');
const contactInfoBlockSher = document.querySelector('.contact_info_sher');

selectorContUs.onchange = function() {
    let item = this.value;
 if (item === '111'){
  contactInfoBlock.classList.add('active_info');
  contactInfoBlockNy.classList.remove('active_info');
  contactInfoBlockYon.classList.remove('active_info');
  contactInfoBlockSher.classList.remove('active_info');
 }
 if (item === '222'){
  contactInfoBlockNy.classList.add('active_info'); 
  contactInfoBlock.classList.remove('active_info');
  contactInfoBlockYon.classList.remove('active_info');
  contactInfoBlockSher.classList.remove('active_info');
 }
 if (item === '333'){
  contactInfoBlockYon.classList.add('active_info'); 
  contactInfoBlock.classList.remove('active_info');
  contactInfoBlockNy.classList.remove('active_info');
  contactInfoBlockSher.classList.remove('active_info');
 }
 if (item === '444'){
  contactInfoBlockSher.classList.add('active_info'); 
  contactInfoBlockNy.classList.remove('active_info');
  contactInfoBlockYon.classList.remove('active_info');
  contactInfoBlock.classList.remove('active_info');
 }
}
  

