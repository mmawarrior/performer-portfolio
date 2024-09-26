// Slider functionality placed outside DOMContentLoaded for global availability
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    
    if (!slides) {
        console.error('Slides element not found');
        return;
    }
    
    const totalSlides = slides.children.length;

    currentIndex += direction;

    // If you go past the last image, return to the first one
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // If you go past the first image, go to the last one
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Move the slides container
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Toggle hamburger menu functionality
function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    menu.classList.toggle('open');
    
    // If the menu is open, change the symbol to a cross
    if (menu.classList.contains('open')) {
        menuIcon.innerHTML = '&#10005;';  // Cross symbol ("×")
    } else {
        menuIcon.innerHTML = '&#9776;';  // Hamburger symbol ("☰")
    }
}

// Wait until the DOM is fully loaded before executing the rest of the code
document.addEventListener('DOMContentLoaded', () => {
    // Create a custom cursor and add it to the page
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Update the position of the cursor with mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Change the cursor when hovering over links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.backgroundColor = '#f01';  // Change to red when hovering
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.backgroundColor = 'transparent';  // Transparent when leaving the link
        });
    });

    // Event listener for the hamburger menu
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    // Wavify init for the wave animation
    if (typeof $.fn.wavify !== 'undefined') {
        $('#wave').wavify({
            height: 300,    // Adjust this value to see if the wave becomes visible
            bones: 6,       // Adjust the number of waves
            amplitude: 80,
            color: '#0bd',
            speed: 0.3
        });
    } else {
        console.error("Wavify library is not loaded.");
    }
});
