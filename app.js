const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close_btn');
const myNav = document.querySelector('#myNav');
const openNav = () => {
    myNav.style.height = '100%';
};
const closeNav = () => {
    myNav.style.height = '0%';
};

hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);