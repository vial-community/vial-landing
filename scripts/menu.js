/* MENU */
let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu-wrapper');
let header = document.getElementById('header-wrapper');

let navButtons = document.getElementsByClassName('nav-button');
let socialsButtons = document.getElementsByClassName('socials-button');

function eventListenerAdder (button) {
  button.addEventListener('click',function(){
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
    header.classList.toggle("overlay");
  });
}

eventListenerAdder(burgerMenu);


for(let i = 0; i < navButtons.length; i++) {
  eventListenerAdder(navButtons[i]);
}