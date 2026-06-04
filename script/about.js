function renderGallery(images) {
    if (!images?.length) return "";
    const figures = images
        .map(
            (img) => `
        <figure>
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <figcaption>${img.caption}</figcaption>
        </figure>`
        )
        .join("");
    return `<div class="media-gallery">${figures}</div>`;
}

function renderSchoolBullets(bullets) {
    return `<ul class="card-list">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof ABOUT_DATA === "undefined") return;

    Site.renderPageHeader(main, ABOUT_PAGE.header);

    Site.renderSectionTitle(main, ABOUT_DATA.intro.title, "quick-intro");
    Site.renderCard(main, {
        bodyHtml: ABOUT_DATA.intro.paragraphs.map((p) => `<p>${p}</p>`).join(""),
    });

    Site.renderSectionTitle(main, ABOUT_DATA.education.title, "education");
    ABOUT_DATA.education.schools.forEach((school) => {
        Site.renderCard(main, {
            title: school.name,
            meta: school.dates,
            bodyHtml: renderSchoolBullets(school.bullets),
        });
    });

    Site.renderSectionTitle(main, ABOUT_DATA.cybersecurity.title, "cybersecurity");
    Site.renderCard(main, {
        bodyHtml: ABOUT_DATA.cybersecurity.paragraphs.map((p) => `<p>${p}</p>`).join(""),
        tags: ABOUT_DATA.cybersecurity.tags,
    });

    Site.renderSectionTitle(main, ABOUT_DATA.technical.title, "technical");
    Site.renderCard(main, {
        bodyHtml: `<ul class="card-list">${ABOUT_DATA.technical.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`,
        tags: ABOUT_DATA.technical.tags,
    });

    Site.renderSectionTitle(main, ABOUT_DATA.leadership.title, "leadership");
    ABOUT_DATA.leadership.items.forEach((item) => {
        Site.renderCard(main, {
            title: item.name,
            meta: item.dates,
            bodyHtml: `<p>${item.body}</p>${renderGallery(item.gallery)}`,
        });
    });

    Site.renderSectionTitle(main, ABOUT_DATA.personal.title, "personal");
    Site.renderCard(main, {
        bodyHtml:
            ABOUT_DATA.personal.paragraphs.map((p) => `<p>${p}</p>`).join("") +
            renderGallery(ABOUT_DATA.personal.gallery),
    });

    Site.initReveal();
});
