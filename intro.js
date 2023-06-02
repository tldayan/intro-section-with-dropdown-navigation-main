"use strict";


/* HAMBURGER MENU OPEN & CLOSE  */
let hamburgerMenu = document.querySelector(`.hamburger_logo`);
let closeMenu = document.querySelector(`.close_menu_logo`);

/* NAV */
let Nav = document.querySelector(`.nav`);

/* OPEN MOBILE NAV */
hamburgerMenu.onclick = function () {
  Nav.style.display = `block`;
};

/* CLOSE MOBILE NAV */
closeMenu.onclick = function () {
  Nav.style.display = `none`;
};



/* LINK ANIMATIONS */

let featuresElement = document.querySelector(`.features`);

let featuresContainer = document.querySelector(`.features_container`);

let featuresAnimation = document.querySelector(`.scaleup`);

featuresElement.onclick = function(event) {
  event.preventDefault();

  if (featuresContainer.style.display === `flex`) {
    featuresContainer.style.display = `none`;
  } else {
    featuresContainer.classList.add(`scaleup`);
    featuresContainer.style.display = `flex`;
  }
};



let companyElement = document.querySelector(`.company`);

let companyContainer = document.querySelector(`.company_container`);

let companyAnimation = document.querySelector(`.scaleup`);

companyElement.onclick = function (event) {
  event.preventDefault();

  if (companyContainer.style.display === `flex`) {
    companyContainer.style.display = `none`;
  } else {
    companyContainer.classList.add(`scaleup`);
    companyContainer.style.display = `flex`;
  }
};



/* IF BROWSER SIZE IS CHANGED TO LARGE SCREEN, IF YES. CLOSE MOBILE NAV */
const mediaQuery = "(min-width: 1200px)";

const mq = window.matchMedia(mediaQuery);

const handleMediaQueryChange = (event) => {
  if (event.matches) {
    Nav.style.display = `flex`;
  } else {
    Nav.style.display = "none";
  }
};

mq.addListener(handleMediaQueryChange);
