// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuBar = document.querySelector('.menu-bar');
    
    if (menuToggle && menuBar) {
        menuToggle.addEventListener('click', function() {
            menuBar.classList.toggle('menu-open');
            
            // Update button text/icon
            if (menuBar.classList.contains('menu-open')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
        
        // Close menu when a link is clicked (on mobile)
        const menuLinks = menuBar.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menuBar.classList.remove('menu-open');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                menuBar.classList.remove('menu-open');
                menuToggle.innerHTML = '☰';
            }
        });
    }
});

