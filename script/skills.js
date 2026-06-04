document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof SKILLS_DATA === "undefined") return;

    Site.renderPageHeader(main, SKILLS_PAGE.header);

    const grid = document.createElement("div");
    grid.className = "skills-page-grid";
    main.appendChild(grid);

    SKILLS_DATA.categories.forEach((cat) => {
        grid.insertAdjacentHTML(
            "beforeend",
            `
            <article class="glass-card skill-group-card reveal">
                <h3>${cat.name}</h3>
                <div class="card-tags">${Site.renderTags(cat.skills)}</div>
            </article>`
        );
    });

    Site.renderSectionTitle(main, "Operating System Experience", "os-notes");
    SKILLS_DATA.osNotes.forEach((os) => {
        Site.renderCard(main, {
            title: os.name,
            bodyHtml: `<p>${os.note}</p>`,
        });
    });

    Site.renderSectionTitle(main, "Soft Skills", "soft-skills");
    const softCard = document.createElement("article");
    softCard.className = "glass-card content-card reveal";
    softCard.innerHTML = SKILLS_DATA.soft
        .map(
            (s) => `
        <div class="soft-skill-item">
            <h4>${s.name}</h4>
            <p>${s.text}</p>
        </div>`
        )
        .join("");
    main.appendChild(softCard);

    Site.initReveal();
});
