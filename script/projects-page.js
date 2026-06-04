function renderSlideshow(slides) {
    const slideHtml = slides
        .map(
            (s, i) =>
                `<img class="slide${i === 0 ? " active" : ""}" src="${s.src}" alt="${s.alt}">`
        )
        .join("");

    return `
        <div class="project-slideshow" data-slideshow>
            <div class="slideshow-viewport">${slideHtml}</div>
            <button type="button" class="slideshow-btn slideshow-prev" aria-label="Previous image">&#10094;</button>
            <button type="button" class="slideshow-btn slideshow-next" aria-label="Next image">&#10095;</button>
            <div class="slideshow-dots" aria-hidden="true"></div>
        </div>`;
}

function renderProjectCard(project) {
    const tech = Site.renderTags(project.technologies).replace(/skill-badge/g, "tech-badge");
    const links = project.links
        .map(
            (l) =>
                `<a class="project-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
        )
        .join("");
    const takeaways = project.takeaways?.length
        ? `<div class="project-takeaways">
            <h5>Key Takeaways</h5>
            <ul>${project.takeaways.map((t) => `<li>${t}</li>`).join("")}</ul>
           </div>`
        : "";

    return `
        <article class="project-card reveal">
            ${renderSlideshow(project.slides)}
            <div class="project-body">
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tech">${tech}</div>
                ${takeaways}
                <div class="project-links">${links}</div>
            </div>
        </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof PROJECTS_DATA === "undefined") return;

    Site.renderPageHeader(main, PROJECTS_PAGE.header);

    const grid = document.createElement("div");
    grid.className = "projects-grid";
    grid.innerHTML = PROJECTS_DATA.map(renderProjectCard).join("");
    main.appendChild(grid);

    document.querySelectorAll("[data-slideshow]").forEach(initSlideshow);
    Site.initReveal();
});
