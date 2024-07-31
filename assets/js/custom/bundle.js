// :: LOADER
// Select the page-loader element
const pageLoader = document.querySelector('.loader');

// Apply fade-out transition to the page-loader when the page has finished loading
window.onload = function () {
    if (pageLoader) {
        pageLoader.style.opacity = '0';
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 500); // Adjust the duration (in milliseconds) as needed
    }
};
/* --------------------------------------------------------------------- */

// :: snippet to set the gap value
// Get all elements with the attributes "data-gap-x" or "data-gap-y"
let elements = document.querySelectorAll('[data-gap-x], [data-gap-y]');

// Loop through each element
elements.forEach(element => {
    // Get the value of the "data-gap-x" and "data-gap-y" attributes
    let gapXValue = element.getAttribute('data-gap-x');
    let gapYValue = element.getAttribute('data-gap-y');

    // Check if the element has only the "data-gap-x" attribute
    if (gapXValue && !gapYValue) {
        // Set the CSS "gap" property using the value of "data-gap-x"
        element.style.columnGap = gapXValue;
    }

    // Check if the element has only the "data-gap-y" attribute
    if (gapYValue && !gapXValue) {
        // Set the CSS "gap" property using the value of "data-gap-y"
        element.style.rowGap = gapYValue;
    }

    // Check if the element has both the "data-gap-x" and "data-gap-y" attributes
    if (gapXValue && gapYValue) {
        // Set the CSS "gap" property using the values of "data-gap-x" and "data-gap-y"
        element.style.columnGap = gapXValue;
        element.style.rowGap = gapYValue;
    }
});
/* --------------------------------------------------------------------- */

// Language Menu
document.addEventListener('click', function (e) {
    const langOption = document.getElementById('lang-option');
    if (langOption.contains(e.target)) {
        langOption.classList.toggle('menu-opened');
    } else {
        langOption.classList.remove('menu-opened');
    }
});
/* --------------------------------------------------------------------- */

// Attach click event handler to the element with ID "aside-btn"
document.addEventListener('DOMContentLoaded', function() {
    var asideBtn = document.getElementById('aside-btn');
    var sidebarBtn = document.getElementById('sidebar-btn');
    var mainElement = document.querySelector('main');

    asideBtn.addEventListener('click', toggleSidebar);
    sidebarBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        mainElement.classList.toggle('collapse-sidebar');
    }
});
/* --------------------------------------------------------------------- */

window.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.querySelector('main');

    function checkWindowWidth() {
        if (window.innerWidth < 1200) {
            mainElement.classList.add('collapse-sidebar');
        } else {
            mainElement.classList.remove('collapse-sidebar');
        }
    }

    // Check window width on page load
    checkWindowWidth();

    // Check window width on window resize
    window.addEventListener('resize', checkWindowWidth);
});
/* --------------------------------------------------------------------- */
