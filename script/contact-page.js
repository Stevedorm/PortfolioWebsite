document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof SITE === "undefined") return;

    Site.renderPageHeader(main, {
        label: "Contact",
        title: "Get In Touch",
        subtitle: "Open to internships, research conversations, and collaboration on security and systems projects.",
    });

    main.insertAdjacentHTML(
        "beforeend",
        `
        <article class="glass-card contact-hero-card reveal">
            <h2>Let's connect</h2>
            <p>Reach out via email or connect on LinkedIn and GitHub. You can also view or download my resume.</p>
            <div class="contact-actions">
                <a class="btn btn-primary" href="mailto:${SITE.email}">Email</a>
                <a class="btn btn-secondary" href="${SITE.links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a class="btn btn-secondary" href="${SITE.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="btn btn-ghost" href="${SITE.links.resume}">Resume</a>
            </div>
            <p class="contact-phone" style="margin-top:1.25rem;font-size:0.9rem;color:var(--text-muted);">
                Mobile: <a href="tel:+14027078676" style="color:var(--accent);text-decoration:none;">${SITE.phone}</a>
            </p>
        </article>`
    );

    Site.initReveal();
});
