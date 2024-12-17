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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navlinks = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top < 300;
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

  
// build the nav
function buildNav() {
    const fragment = document.createDocumentFragment();
  
    sections.forEach(section => {
      const navItem = document.createElement('a');
      navItem.textContent = section.getAttribute('data-nav');
      navItem.href = `#${section.id}`;
      navItem.classList.add('menu__link');
      fragment.appendChild(navItem);
    });
  
    navBar.appendChild(fragment);
  }

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            navLink.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    });
}


// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
  

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
  
  // 
document.addEventListener('DOMContentLoaded', buildNav);
// Scroll to section on link click
navBar.addEventListener('click', scrollToSection);
// Set sections as active
window.addEventListener('scroll', setActiveSection);

