import {
    landing
} from './landing.js';

import {
    menu
} from './menu.js';

import {
    about
} from './about.js';

import {
    reservations
} from './reservations.js';

import {
    destroy
} from './destroy.js';

import {
    fade
} from './fade.js'

let logo = document.querySelector('.logo');
let aboutButton = document.querySelector('#about-link');
let menuButton = document.querySelector('#menu-link');
let contactButton = document.querySelector('#contact-link');



window.onscroll = function () {
    stickyNav();
};

let stickyNav = () => {
    let navbar = document.querySelector('.navbar');
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    console.log('this is sticky ' + sticky);
    console.log('this is page offset ' + window.pageYOffset);
}

let setRemoveActive = (button) => {
    aboutButton.classList.remove('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
    button.classList.add('active');
}


aboutButton.addEventListener('click', (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(about, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
})

menuButton.addEventListener('click', (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(menu, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
})

contactButton.addEventListener('click', (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(reservations, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
})

logo.addEventListener('click', (e) => {
    setTimeout(destroy, 700);
    setTimeout(landing, 700);
    setTimeout(fade, 700);
    setRemoveActive(e);
})

landing();