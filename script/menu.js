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
    const CHARSET = "01{}[]<>/\\|&;:=>#@$%*+-~^λ01xFF";
    const DECODE_SPEED = 100;   // ms per character while decoding
    const ENCODE_SPEED = 75;   // ms per character while encoding
    const PAUSE_DECODED = 1200;
    const PAUSE_SCRAMBLED = 500;
    const LOOP = true;

    let animationGeneration = 0;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        document.addEventListener('DOMContentLoaded', () => {
            const el = document.querySelector('#about');
            if (el) el.textContent = TEXT;
        });
        return;
    }

    function randomSymbol() {
        return CHARSET[Math.floor(Math.random() * CHARSET.length)];
    }

    function renderScramble(text, settledCount) {
        return [...text].map((char, index) => {
            if (char === " ") return " ";
            return index < settledCount ? char : randomSymbol();
        }).join("");
    }

    function renderFullyScrambled(text) {
        return [...text].map((char) => (char === " " ? " " : randomSymbol())).join("");
    }

    function decodeEncodeEffect(el, text, opts = {}) {
        const generation = ++animationGeneration;
        const decodeSpeed = opts.decodeSpeed ?? DECODE_SPEED;
        const encodeSpeed = opts.encodeSpeed ?? ENCODE_SPEED;
        const pauseDecoded = opts.pauseDecoded ?? PAUSE_DECODED;
        const pauseScrambled = opts.pauseScrambled ?? PAUSE_SCRAMBLED;
        const loop = opts.loop ?? LOOP;

        const isActive = () => generation === animationGeneration && el;

        const delay = (ms, fn) => {
            setTimeout(() => {
                if (isActive()) fn();
            }, ms);
        };

        el.setAttribute("aria-live", "polite");
        el.classList.add("typing");

        function runDecode(settled, onComplete) {
            if (!isActive()) return;

            el.textContent = settled >= text.length ? text : renderScramble(text, settled);

            if (settled >= text.length) {
                delay(pauseDecoded, onComplete);
                return;
            }

            delay(decodeSpeed, () => runDecode(settled + 1, onComplete));
        }

        function runEncode(settled, onComplete) {
            if (!isActive()) return;

            if (settled <= 0) {
                el.textContent = renderFullyScrambled(text);
                delay(pauseScrambled, onComplete);
                return;
            }

            el.textContent = renderScramble(text, settled);
            delay(encodeSpeed, () => runEncode(settled - 1, onComplete));
        }

        function cycle() {
            if (!isActive()) return;

            el.textContent = renderFullyScrambled(text);
            delay(pauseScrambled, () => {
                runDecode(0, () => {
                    runEncode(text.length, () => {
                        if (!isActive()) return;
                        if (loop) {
                            cycle();
                        } else {
                            el.classList.remove("typing");
                            el.textContent = text;
                        }
                    });
                });
            });
        }

        cycle();
    }

    document.addEventListener("DOMContentLoaded", () => {
        const el = document.querySelector("#about");
        if (!el) return;

        decodeEncodeEffect(el, TEXT, {
            decodeSpeed: DECODE_SPEED,
            encodeSpeed: ENCODE_SPEED,
            pauseDecoded: PAUSE_DECODED,
            pauseScrambled: PAUSE_SCRAMBLED,
            loop: LOOP
        });

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                animationGeneration++;
                el.textContent = "";
                setTimeout(() => {
                    decodeEncodeEffect(el, TEXT, {
                        decodeSpeed: DECODE_SPEED,
                        encodeSpeed: ENCODE_SPEED,
                        pauseDecoded: PAUSE_DECODED,
                        pauseScrambled: PAUSE_SCRAMBLED,
                        loop: LOOP
                    });
                }, 200);
            } else {
                animationGeneration++;
            }
        });
    });
})();
