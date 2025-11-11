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

(function () {
    const TEXT = "Steven Dormady";
    const TYPING_SPEED = 80;   // ms per character
    const DELETING_SPEED = 40; // ms per character when deleting
    const PAUSE_AFTER = 1200;  // ms to wait after typing full text
    const PAUSE_BEFORE = 500;  // ms to wait before re-typing
    const LOOP = true;         // set false to type once

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        document.addEventListener('DOMContentLoaded', () => {
        const el = document.querySelector('#about');
        if (el) el.textContent = TEXT;
        });
        return;
    }

    function typeEffect(el, text, opts = {}) {
        let i = 0;
        let deleting = false;

        el.setAttribute('aria-live', 'polite');
        el.classList.add('typing');

        function step() {
            if (!el) return;

            if (!deleting) {
                el.textContent = text.slice(0, i + 1);
                i++;
                if (i >= text.length) {
                    setTimeout(() => { deleting = true; }, opts.pauseAfter || PAUSE_AFTER);
                    setTimeout(step, opts.deletingSpeed || DELETING_SPEED);
                    return;
                }
                setTimeout(step, opts.typingSpeed || TYPING_SPEED);
            } else {
                el.textContent = text.slice(0, i - 1);
                i--;
                if (i <= 0) {
                    if (opts.loop) {
                    setTimeout(() => { deleting = false; }, opts.pauseBefore || PAUSE_BEFORE);
                    setTimeout(step, opts.typingSpeed || TYPING_SPEED);
                    return;
                    } else {
                    el.classList.remove('typing');
                    el.textContent = text;
                    return;
                    }
                }
                setTimeout(step, opts.deletingSpeed || DELETING_SPEED);
                }
        }
        setTimeout(step, opts.pauseBefore || 0);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const el = document.querySelector('#about');
        if (!el) return;

        typeEffect(el, TEXT, {
            typingSpeed: TYPING_SPEED,
            deletingSpeed: DELETING_SPEED,
            pauseAfter: PAUSE_AFTER,
            pauseBefore: PAUSE_BEFORE,
            loop: LOOP
        });
    
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
            if (!document._typingRunning) {

                setTimeout(() => {
                el.textContent = "";
                typeEffect(el, TEXT, { typingSpeed: TYPING_SPEED, deletingSpeed: DELETING_SPEED, pauseAfter: PAUSE_AFTER, pauseBefore: PAUSE_BEFORE, loop: LOOP });
                }, 200);
            }
            }
        });
    });
})();
