/**
 * Shared UI components for inner portfolio pages.
 * Usage: include site-data.js, then site.js, then page-specific scripts.
 */
const Site = {
    renderPageHeader(container, { label, title, subtitle }) {
        const html = `
            <header class="page-header reveal">
                ${label ? `<span class="section-label">${label}</span>` : ""}
                <h1 class="page-title">${title}</h1>
                ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ""}
            </header>`;
        container.insertAdjacentHTML("beforeend", html);
    },

    renderIntroCard(container, text) {
        container.insertAdjacentHTML(
            "beforeend",
            `<div class="glass-card page-intro reveal"><p>${text}</p></div>`
        );
    },

    renderSectionTitle(container, title, id) {
        const idAttr = id ? ` id="${id}"` : "";
        container.insertAdjacentHTML(
            "beforeend",
            `<h2 class="content-section-title reveal"${idAttr}>${title}</h2>`
        );
    },

    renderTags(tags) {
        if (!tags?.length) return "";
        return tags
            .map((t) => `<span class="skill-badge">${t}</span>`)
            .join("");
    },

    renderCard(container, { title, meta, bodyHtml, tags, className = "" }) {
        container.insertAdjacentHTML(
            "beforeend",
            `
            <article class="glass-card content-card reveal ${className}">
                <div class="card-header">
                    ${title ? `<h3 class="card-title">${title}</h3>` : ""}
                    ${meta ? `<span class="card-meta">${meta}</span>` : ""}
                </div>
                <div class="card-body">${bodyHtml}</div>
                ${tags?.length ? `<div class="card-tags">${this.renderTags(tags)}</div>` : ""}
            </article>`
        );
    },

    renderTimelineCard(container, item) {
        const bullets =
            item.bullets?.length ?
                `<ul class="card-list">${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
            :   "";
        const skills = item.skills?.length ?
            `<div class="card-tags">${this.renderTags(item.skills)}</div>` : "";

        container.insertAdjacentHTML(
            "beforeend",
            `
            <article class="glass-card timeline-card reveal ${item.emphasis === "low" ? "timeline-card--muted" : ""}">
                <div class="timeline-marker" aria-hidden="true"></div>
                <div class="card-header">
                    <h3 class="card-title">${item.role}</h3>
                    <span class="card-meta">${item.organization}${item.location ? ` · ${item.location}` : ""}</span>
                    <span class="card-date">${item.dates}</span>
                </div>
                ${item.description ? `<p class="card-lead">${item.description}</p>` : ""}
                ${bullets}
                ${skills}
            </article>`
        );
    },

    renderFooter() {
        const slot = document.getElementById("site-footer");
        if (!slot || typeof SITE === "undefined") return;

        slot.innerHTML = `
            <footer class="site-footer">
                <p class="footer-name">${SITE.name}</p>
                <p class="footer-tagline">${SITE.footer.tagline}</p>
                <nav class="footer-links" aria-label="Footer links">
                    <a href="mailto:${SITE.email}">Email</a>
                    <a href="${SITE.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="${SITE.links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="${SITE.links.resume}">Resume</a>
                </nav>
                <p class="footer-copy">${SITE.footer.copyright}</p>
            </footer>`;
    },

    markActiveNav() {
        const page = document.body.dataset.page;
        if (!page) return;
        document.querySelectorAll(".menu-bar a").forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === page || href.endsWith(page));
        });
    },

    initReveal() {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const elements = document.querySelectorAll(".reveal");
        if (prefersReduced) {
            elements.forEach((el) => el.classList.add("visible"));
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
            { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
        );
        elements.forEach((el) => observer.observe(el));
    },

    init() {
        this.renderFooter();
        this.markActiveNav();
    },
};

document.addEventListener("DOMContentLoaded", () => Site.init());
