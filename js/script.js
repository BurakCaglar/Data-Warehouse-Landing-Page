/* IS NAVBAR ITEM ACTIVE? START */

const navLinks = document.querySelectorAll(".nav-item");

const handleClick = (e) => {
  navLinks.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

navLinks.forEach((item) => {
  item.addEventListener("click", handleClick);
});

/* IS NAVBAR ITEM ACTIVE? END */

/* NAVBAR COLOR IF SCROLL DOWNS START */
var navBar = document.querySelector('.navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
        navBar.classList.remove("mt-5");
    } 
    else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
        navBar.classList.add("mt-5");
    }
};

/* NAVBAR COLOR IF SCROLL DOWNS END */


/* SCROLL REVEAL ANIMATIONS START */

window.scale = new ScrollReveal();

ScrollReveal().reveal('.ani-left', {
  origin: 'left',
  distance: '1rem',
  duration: 1000,
  easeing: 'ease-in'
});

ScrollReveal().reveal('.ani-right', {
  origin: 'right',
  distance: '1rem',
  duration: 1000,
  easeing: 'ease-in'
});
ScrollReveal().reveal('.ani-bottom', {
  origin: 'bottom',
  distance: '10rem',
  duration: 3000,
  easeing: 'ease-in'
});
ScrollReveal().reveal('.ani-fade-up', {
  opacity: 0,
  easing: 'ease-in'
});

ScrollReveal().reveal('.ani-delay', {
  delay: 600
});

ScrollReveal().reveal('.ani-delay2', {
  delay: 1000
});

ScrollReveal().reveal('.ani-free', {
  delay: 500,
  duration: 300,
  interval: 750
})

ScrollReveal().reveal('.ani-headlink', {
  opacity: .1,
  delay: 250,
  interval: 500,
  duration: 2500
});

ScrollReveal().reveal('.ani-oneWeekFree', {
  delay: 1750,
  duration: 2000,
  interval: 750,
  scale: .8
});

ScrollReveal().reveal('.ani-scale', {
  duration: 1200,
  scale: .4,
  delay: 300,
});

ScrollReveal().reveal('.interval', {
  duration: 1200,
  interval: 700
});

ScrollReveal().reveal('.interval2', {
  duration: 1200,
  interval: 700
});

ScrollReveal().reveal('.interval3', {
  delay: 1200,
  duration: 1200,
  interval: 800
});

/* SCROLL REVEAL ANIMATIONS END */
