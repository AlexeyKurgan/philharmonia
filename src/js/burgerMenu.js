const burgerMenu = document.querySelector('.header__burger-menu');
const bottomLine = document.querySelector('.header__bottomline-nav');
const topLine = document.querySelector('.header__topline');
const menuitems = document.querySelectorAll('.header__bottomline-nav li')

burgerMenu.addEventListener('click', ()=>{
  document.body.classList.toggle('overflow-hidden');
  bottomLine.classList.toggle('active-menu');
//   topLine.classList.toggle('active-menu');
  burgerMenu.classList.toggle('header__burger-menu_active');
  
  menuitems.forEach((item) => {
    item.classList.toggle('menu-visible');
  })
})