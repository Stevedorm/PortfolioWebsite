document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("page-main");
    if (!main || typeof EXP_DATA === "undefined") return;

    Site.renderPageHeader(main, EXP_PAGE.header);
    Site.renderIntroCard(main, EXP_PAGE.intro);

    const stack = document.createElement("div");
    stack.className = "timeline-stack";
    main.appendChild(stack);

    EXP_DATA.forEach((item) => Site.renderTimelineCard(stack, item));

    Site.initReveal();
});
