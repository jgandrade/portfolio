let burgerBtn = document.querySelector(".burger-btn");
let navMenu = document.querySelector(".nav-menu");
let socialLink = document.querySelector(".socials-links");
let navBar = document.querySelector(".nav-container");

burgerBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-none');
    navMenu.classList.add('nav-menu-block');
});

let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    navMenu.classList.add('nav-menu-none');
    navMenu.classList.remove('nav-menu-block');
    socialLink.classList.remove('socials-links-open');
    navBar.classList.remove('show-nav');
});

let showBtn = document.querySelector(".show-btn");

showBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-none');
    navMenu.classList.add('nav-menu-block');
    socialLink.classList.add('socials-links-open');
    navBar.classList.add('show-nav');
});


