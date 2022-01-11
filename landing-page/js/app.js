/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

// helper function to remove active links
function removeActiveLinks() {
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach((link) => {
        if (link.classList.contains('active-link'))
            link.classList.remove('active-link');
    });
}

// build the nav
function buildNav() {
    sections.forEach((section) => {
        let newEntry = document.createElement('li');
        newEntry.innerHTML = `<a href="#${section.id}" class="${section.id} menu__link">${section.dataset.nav}</a>`;
        navbar.appendChild(newEntry);
        addScroll(newEntry, section);
    });
}

// make link active on click event
function activateLink() {
    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            removeActiveLinks();
            e.target.classList.add('active-link');
        });
    });
}

// Add class 'active' to section and nav link when in viewport
function addActive() {
    sections.forEach((section) => {
        let link = document.querySelector(`.${section.id}`);
        let box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('your-active-class');
            removeActiveLinks();
            link.classList.add('active-link');
        } else {
            section.classList.remove('your-active-class');
            link.classList.remove('active-link');
        }
    });
}

// Scroll to anchor ID using scrollTO event
function addScroll(clickedElement, scrolledElement) {
    clickedElement.addEventListener('click', function (e) {
        e.preventDefault();
        scrolledElement.scrollIntoView({behavior: 'smooth'});
    });
}

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Set sections as active
document.addEventListener('DOMContentLoaded', activateLink);
document.addEventListener('scroll', addActive);
