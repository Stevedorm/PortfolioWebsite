function renderBullets(items) {
    return `<ul class="card-list">${items.map((b) => `<li>${b}</li>`).join("")}</ul>`;
}

function renderLinks(links) {
    return links
        .map(
            (l) =>
                `<a class="project-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
        )
        .join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof RESUME_DATA === "undefined" || typeof SITE === "undefined") return;

    Site.renderPageHeader(main, RESUME_PAGE.header);

    main.insertAdjacentHTML(
        "beforeend",
        `
        <article class="glass-card resume-header-card reveal">
            <p class="resume-name">${SITE.name}</p>
            <p class="resume-contact-line">
                ${SITE.location} ·
                <a id="email" href="mailto:${SITE.email}">${SITE.email}</a> ·
                <a id="number" href="tel:+14027078676">${SITE.phone}</a> ·
                <a href="${SITE.links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <div class="resume-download-row">
                <button id="downloadBtn" type="button" class="btn btn-primary">Download Resume (DOCX)</button>
                <a class="btn btn-secondary" href="projects.html">View Projects</a>
            </div>
        </article>`
    );

    Site.renderSectionTitle(main, "Education");
    RESUME_DATA.education.forEach((edu) => {
        Site.renderCard(main, {
            title: edu.school,
            meta: edu.dates,
            bodyHtml: renderBullets(edu.bullets),
        });
    });

    Site.renderSectionTitle(main, "Projects");
    RESUME_DATA.projects.forEach((p) => {
        Site.renderCard(main, {
            title: p.title,
            bodyHtml: `<p>${p.text}</p><div class="project-links">${renderLinks(p.links)}</div>`,
        });
    });

    Site.renderSectionTitle(main, "Certifications");
    RESUME_DATA.certifications.forEach((c) => {
        Site.renderCard(main, { title: c.title, bodyHtml: `<p>${c.text}</p>` });
    });

    Site.renderSectionTitle(main, "Experience");
    RESUME_DATA.experience.forEach((job) => {
        Site.renderCard(main, {
            title: job.role,
            meta: `${job.org} · ${job.dates}`,
            bodyHtml: renderBullets(job.bullets),
        });
    });

    Site.renderSectionTitle(main, "Activities & Honors");
    RESUME_DATA.activities.forEach((a) => {
        Site.renderCard(main, { title: a.title, bodyHtml: `<p>${a.text}</p>` });
    });

    Site.initReveal();
});
