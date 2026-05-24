document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-slideshow]').forEach(initSlideshow);
});

function initSlideshow(root) {
    const slides = [...root.querySelectorAll('.slide')];
    const prevBtn = root.querySelector('.slideshow-prev');
    const nextBtn = root.querySelector('.slideshow-next');
    const dotsContainer = root.querySelector('.slideshow-dots');

    if (slides.length === 0) return;

    let index = slides.findIndex((slide) => slide.classList.contains('active'));
    if (index < 0) index = 0;

    const hasMultiple = slides.length > 1;

    if (!hasMultiple) {
        prevBtn?.setAttribute('hidden', '');
        nextBtn?.setAttribute('hidden', '');
        dotsContainer?.replaceChildren();
        slides[0].classList.add('active');
        return;
    }

    prevBtn?.removeAttribute('hidden');
    nextBtn?.removeAttribute('hidden');

    dotsContainer?.replaceChildren();
    const dotButtons = slides.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show image ${i + 1} of ${slides.length}`);
        dot.addEventListener('click', () => show(i));
        dotsContainer.appendChild(dot);
        return dot;
    });

    function show(nextIndex) {
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dotButtons.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    prevBtn?.addEventListener('click', () => show(index - 1));
    nextBtn?.addEventListener('click', () => show(index + 1));

    root.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            show(index - 1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            show(index + 1);
        }
    });

    root.setAttribute('tabindex', '0');
    show(index);
}
