const burgerMenu = document.querySelector('.header__burger-menu'),
    season = document.querySelector('.season'),
    celebrating = document.querySelector('.header__celebrating'),
    actions = document.querySelector('.header__actions'),
    bottomLine = document.querySelector('.header__bottomline-nav'),
    headerInner = document.querySelector('.header__inner');

burgerMenu.addEventListener('click', ()=>{
    
    season.classList.toggle('display');
    celebrating.classList.toggle('display');
    actions.classList.toggle('display');
    bottomLine.classList.toggle('display');
    headerInner.classList.toggle('header__inner_active');
    burgerMenu.classList.toggle('header__burger-menu_active');

    if(headerInner.classList.contains('header__inner_active')){
        document.body.classList.toggle('overflow-hidden');
    }else{
        document.body.classList.remove('overflow-hidden');
    }
})