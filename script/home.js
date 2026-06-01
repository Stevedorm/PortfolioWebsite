/**
 * Homepage section renderers — reads from HOME_DATA (home-data.js).
 * Add a new section: define data in home-data.js, add a render function here,
 * and call it from initHomepage().
 */

const SKILL_ICONS = {
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6M14 4l-4 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2" fill="currentColor"/><circle cx="5" cy="19" r="2" fill="currentColor"/><circle cx="19" cy="19" r="2" fill="currentColor"/><path d="M12 7v4M8.5 15.5L10 11M15.5 15.5L14 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    tool: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.1 2.1-3.2-3.2 2.1-2.1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    os: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 20h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

const CONTACT_ICONS = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 11v5M8 8v.01M12 16v-5c0-1.5 1-2.5 2.5-2.5S17 9.5 17 11v5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M14 2v6h6M10 13h4M10 17h4M8 13h.01M8 17h.01" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
}

function linkAttrs(link) {
    const attrs = link.external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return attrs;
}

/** Append a section to main — do not use innerHTML on #home-main or earlier sections are wiped. */
function appendSection(container, html) {
    container.insertAdjacentHTML("beforeend", html);
}

function sectionIdFromTitle(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderSectionHeader({ label, title, subtitle }) {
    const titleId = sectionIdFromTitle(title);
    return `
        <div class="section-header reveal">
            ${label ? `<span class="section-label">${label}</span>` : ""}
            <h2 class="section-title" id="${titleId}">${title}</h2>
            ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ""}
        </div>
    `;
}

function renderHero(container, data) {
    const ctaHtml = data.ctas
        .map(
            (cta) =>
                `<a class="btn btn-${cta.variant}" href="${cta.href}">${cta.label}</a>`
        )
        .join("");

    appendSection(container, `
        <section class="hero" id="hero" aria-label="Introduction">
            <div class="hero-bg" aria-hidden="true"></div>
            <div class="hero-inner reveal">
                <div class="hero-image-wrap">
                    <div class="hero-image-glow" aria-hidden="true"></div>
                    <img class="hero-image" src="${data.profileImage}" alt="${data.profileAlt}" width="280" height="280">
                </div>
                <div class="hero-content">
                    <p class="hero-greeting">Hi, I'm Steven</p>
                    <h2 class="hero-headline">${data.headline}</h2>
                    <p class="hero-intro">${data.intro}</p>
                    <div class="hero-ctas">${ctaHtml}</div>
                </div>
            </div>
            <a class="hero-scroll-hint" href="#about-preview" aria-label="Scroll to about section">
                <span>Explore</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
        </section>
    `);
}

function renderAboutPreview(container, data) {
    const highlightsHtml = data.highlights
        .map((item) => `<li>${item}</li>`)
        .join("");

    const statsHtml = data.graphic.items
        .map(
            (item) => `
            <div class="about-stat">
                <span class="about-stat-value">${item.value}</span>
                <span class="about-stat-label">${item.label}</span>
            </div>`
        )
        .join("");

    appendSection(container, `
        <section class="home-section about-preview" id="${data.id}" aria-labelledby="about-preview-title">
            ${renderSectionHeader(data)}
            <div class="about-preview-grid reveal">
                <div class="glass-card about-preview-text">
                    ${data.paragraphs.map((p) => `<p>${p}</p>`).join("")}
                    <ul class="about-preview-list">${highlightsHtml}</ul>
                    <a class="btn btn-primary" href="${data.readMoreHref}">${data.readMoreLabel}</a>
                </div>
                <div class="glass-card about-preview-graphic" aria-hidden="false">
                    <div class="about-stats">${statsHtml}</div>
                </div>
            </div>
        </section>
    `);
}

function renderProjectCard(project) {
    const techHtml = project.technologies
        .map((t) => `<span class="tech-tag">${t}</span>`)
        .join("");

    const linksHtml = project.links
        .map(
            (link) =>
                `<a class="project-card-link" href="${link.href}"${linkAttrs(link)}>${link.label}</a>`
        )
        .join("");

    return `
        <article class="featured-card reveal">
            <div class="featured-card-image">
                <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
            </div>
            <div class="featured-card-body">
                <h3 class="featured-card-title">${project.title}</h3>
                <p class="featured-card-desc">${project.description}</p>
                <div class="featured-card-tech">${techHtml}</div>
                <div class="featured-card-links">${linksHtml}</div>
            </div>
        </article>
    `;
}

function renderFeaturedProjects(container, data) {
    const cardsHtml = data.projects.map(renderProjectCard).join("");

    appendSection(container, `
        <section class="home-section featured-projects" id="${data.id}" aria-labelledby="featured-projects-title">
            ${renderSectionHeader(data)}
            <div class="featured-grid">${cardsHtml}</div>
            <div class="section-actions reveal">
                <a class="btn btn-secondary" href="${data.viewAllHref}">${data.viewAllLabel}</a>
            </div>
        </section>
    `);
}

function renderSkillCategory(category) {
    const icon = SKILL_ICONS[category.icon] || SKILL_ICONS.code;
    const tagsHtml = category.skills
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join("");

    return `
        <div class="skill-group glass-card reveal">
            <div class="skill-group-header">
                <span class="skill-group-icon">${icon}</span>
                <h3 class="skill-group-title">${category.name}</h3>
            </div>
            <div class="skill-tags">${tagsHtml}</div>
        </div>
    `;
}

function renderSkills(container, data) {
    const groupsHtml = data.categories.map(renderSkillCategory).join("");

    appendSection(container, `
        <section class="home-section skills-section" id="${data.id}" aria-labelledby="skills-title">
            ${renderSectionHeader(data)}
            <div class="skills-grid">${groupsHtml}</div>
            <div class="section-actions reveal">
                <a class="btn btn-ghost" href="${data.viewAllHref}">${data.viewAllLabel}</a>
            </div>
        </section>
    `);
}

function renderHighlightItem(item) {
    const tagsHtml = item.tags
        .map((tag) => `<span class="highlight-tag">${tag}</span>`)
        .join("");

    return `
        <article class="highlight-card glass-card reveal">
            <div class="highlight-card-header">
                <span class="highlight-type">${item.type}</span>
                <span class="highlight-period">${item.period}</span>
            </div>
            <h3 class="highlight-title">${item.title}</h3>
            <p class="highlight-desc">${item.description}</p>
            <div class="highlight-tags">${tagsHtml}</div>
        </article>
    `;
}

function renderHighlights(container, data) {
    const itemsHtml = data.items.map(renderHighlightItem).join("");

    appendSection(container, `
        <section class="home-section highlights-section" id="${data.id}" aria-labelledby="highlights-title">
            ${renderSectionHeader(data)}
            <div class="highlights-grid">${itemsHtml}</div>
        </section>
    `);
}

function renderContactLink(link) {
    const icon = CONTACT_ICONS[link.icon] || CONTACT_ICONS.email;
    const external = link.external ? ' target="_blank" rel="noopener noreferrer"' : "";

    return `
        <a class="contact-card glass-card reveal" href="${link.href}"${external}>
            <span class="contact-icon">${icon}</span>
            <span class="contact-label">${link.label}</span>
            <span class="contact-value">${link.value}</span>
        </a>
    `;
}

function renderContact(container, data) {
    const linksHtml = data.links.map(renderContactLink).join("");

    appendSection(container, `
        <section class="home-section contact-section" id="${data.id}" aria-labelledby="contact-title">
            ${renderSectionHeader(data)}
            <div class="contact-grid">${linksHtml}</div>
            <div class="contact-download reveal">
                <a class="btn btn-secondary" href="${data.resumeDownload.href}" download>${data.resumeDownload.label}</a>
            </div>
        </section>
    `);
}

function renderFooter(container, data) {
    container.innerHTML = `
        <footer class="site-footer home-footer">
            <p class="footer-copy">${data.copyright}</p>
            <p class="footer-tagline">${data.tagline}</p>
        </footer>
    `;
}

function initScrollReveal() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function markActiveNavLink() {
    const homeLink = document.querySelector('.menu-bar a[href="index.html"]');
    if (homeLink) homeLink.classList.add("active");
}

function initHomepage() {
    if (typeof HOME_DATA === "undefined") {
        console.error("HOME_DATA not loaded. Include home-data.js before home.js.");
        return;
    }

    const main = document.getElementById("home-main");
    const footerSlot = document.getElementById("home-footer");
    if (!main) return;

    main.innerHTML = "";

    renderHero(main, HOME_DATA.hero);
    renderAboutPreview(main, HOME_DATA.aboutPreview);
    renderFeaturedProjects(main, HOME_DATA.featuredProjects);
    renderSkills(main, HOME_DATA.skills);
    renderHighlights(main, HOME_DATA.highlights);
    renderContact(main, HOME_DATA.contact);

    if (footerSlot) {
        renderFooter(footerSlot, HOME_DATA.footer);
    }

    initScrollReveal();
    markActiveNavLink();
}

document.addEventListener("DOMContentLoaded", initHomepage);
