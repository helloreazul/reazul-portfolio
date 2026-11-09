(() => {
    "use strict";

    const root = document.querySelector("[data-project-slug]");
    if (!root) return;

    const requestedSlug = new URLSearchParams(window.location.search).get("project");
    const slug = requestedSlug || root.dataset.projectSlug;
    root.dataset.projectSlug = slug;
    const project = window.portfolioProjects?.[slug];
    const sidebar = document.getElementById("project-information");
    const socials = document.getElementById("project-social-links");
    const content = document.getElementById("project-content");

    if (!project || !sidebar || !socials || !content) {
        if (content) content.innerHTML = '<p class="project-content__error">This project could not be found.</p>';
        return;
    }

    document.title = `${project.title} | Reazul Karim`;

    const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);

    const placeholder = (item, index) => item.src
        ? `<figure class="project-placeholder project-placeholder--${escapeHTML(item.ratio || "landscape")}">
               <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.label || `Project image ${index + 1}`)}" loading="lazy">
           </figure>`
        : `<div class="project-placeholder project-placeholder--${escapeHTML(item.ratio || "landscape")}" role="img" aria-label="${escapeHTML(item.label || `Project image ${index + 1}`)}"></div>`;

    const gallery = (items = [], className = "") => `
        <div class="project-gallery ${className}">
            ${items.map(placeholder).join("")}
        </div>`;

    sidebar.innerHTML = `
        <p class="project-sidebar__eyebrow">${escapeHTML(project.sidebarEyebrow || "SaaS Platform")}</p>
        ${project.sidebar.map((item) => `
            <div class="project-sidebar__item">
                <p class="project-sidebar__label">${escapeHTML(item.label)}</p>
                ${item.href
                    ? `<a class="project-sidebar__value project-sidebar__external" href="${escapeHTML(item.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.value)}</a>`
                    : `<p class="project-sidebar__value">${escapeHTML(item.value)}</p>`}
            </div>`).join("")}
        <div class="project-sidebar__item">
            <p class="project-sidebar__label">Service Provide</p>
            <ul class="project-sidebar__services">
                ${project.services.map((service) => `<li><span class="project-sidebar__service-dot" aria-hidden="true"></span><span>${escapeHTML(service)}</span></li>`).join("")}
            </ul>
        </div>`;

    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(`${project.title} — Reazul Karim`);
    const socialItems = [
        { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, mark: "f" },
        { name: "X", url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, mark: "𝕏" },
        { name: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, mark: "in" },
        { name: "WhatsApp", url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`, mark: "⌁" }
    ];
    socials.innerHTML = socialItems.map((item) => `
        <a class="project-social" href="${item.url}" target="_blank" rel="noopener noreferrer"
           aria-label="Share on ${item.name}"><span aria-hidden="true">${item.mark}</span></a>
    `).join("");

    content.innerHTML = `
        <header class="project-content__header">
            <p class="project-content__eyebrow">/ ${escapeHTML(project.number)} / ${escapeHTML(project.category)}</p>
            <h1 class="project-content__title">${escapeHTML(project.title)}</h1>
            ${project.heroImage
                ? `<figure class="project-placeholder project-placeholder--hero"><img src="${escapeHTML(project.heroImage)}" alt="${escapeHTML(project.title)} product interface preview" fetchpriority="high"></figure>`
                : `<div class="project-placeholder project-placeholder--hero" role="img" aria-label="${escapeHTML(project.title)} hero image placeholder"></div>`}
        </header>

        <section class="project-section project-section--overview" aria-labelledby="project-overview-title">
            <div class="project-copy-block">
                <h2 id="project-overview-title">Project overview</h2>
                <p>${escapeHTML(project.overview)}</p>
            </div>
            <div class="project-copy-block">
                <h2>The Goal</h2>
                <p>${escapeHTML(project.goal)}</p>
            </div>
            ${gallery(project.overviewGallery, "project-gallery--two")}
        </section>

        <section class="project-section" aria-labelledby="project-research-title">
            <div class="project-copy-block project-copy-block--research">
                <h2 id="project-research-title">Problem and research</h2>
                <p class="project-copy-block__lead">${escapeHTML(project.research.introTitle)}</p>
                <p>${escapeHTML(project.research.intro)}</p>
                ${project.research.context ? `<p>${escapeHTML(project.research.context)}</p>` : ""}
                <p class="project-copy-block__lead">${escapeHTML(project.research.challengeTitle)}</p>
                <ul>${project.research.challenges.map((challenge) => `<li>${escapeHTML(challenge)}</li>`).join("")}</ul>
                <p class="project-copy-block__lead">${escapeHTML(project.research.discoveryTitle)}</p>
                <p>${escapeHTML(project.research.discovery)}</p>
                ${project.research.discoveryDetail ? `<p>${escapeHTML(project.research.discoveryDetail)}</p>` : ""}
                ${project.research.tools ? `<div class="project-detail-list">${project.research.tools.map((item) => `<div class="project-detail-list__item"><p class="project-copy-block__lead">${escapeHTML(item.title)}</p><p>${escapeHTML(item.body)}</p></div>`).join("")}</div>` : ""}
                <p class="project-copy-block__lead">${project.research.tools ? "Research note:" : "Research evidence:"}</p>
                <p>${escapeHTML(project.research.evidence)}</p>
            </div>
            ${gallery(project.researchGallery, "project-gallery--research")}
        </section>

        <section class="project-section" aria-labelledby="project-process-title">
            <div class="project-copy-block">
                <h2 id="project-process-title">${escapeHTML(project.process.heading)}</h2>
                ${project.process.body ? `<p>${escapeHTML(project.process.body)}</p>` : ""}
                ${project.process.items ? `<div class="project-detail-list">${project.process.items.map((item) => `<div class="project-detail-list__item"><p class="project-copy-block__lead">${escapeHTML(item.title)}</p><p>${escapeHTML(item.body)}</p></div>`).join("")}</div>` : ""}
            </div>
            ${gallery(project.processGallery, "project-gallery--process")}
        </section>

        <section class="project-section" aria-labelledby="project-solution-title">
            <div class="project-copy-block">
                <h2 id="project-solution-title">${escapeHTML(project.solution.heading)}</h2>
                <p>${escapeHTML(project.solution.body)}</p>
                ${project.solution.intro ? `<p class="project-copy-block__lead">${escapeHTML(project.solution.intro)}</p>` : ""}
                ${project.solution.improvements ? `<ol class="project-improvements">${project.solution.improvements.map((item) => `<li><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.body)}</p></li>`).join("")}</ol>` : ""}
            </div>
            ${gallery(project.solutionGallery, "project-gallery--solution")}
        </section>

        <section class="project-section project-section--results" aria-labelledby="project-results-title">
            <div class="project-copy-block">
                <h2 id="project-results-title">${escapeHTML(project.results.heading)}</h2>
                ${project.results.introTitle ? `<p class="project-copy-block__lead">${escapeHTML(project.results.introTitle)}</p>` : ""}
                <p>${escapeHTML(project.results.body)}</p>
                ${project.results.outcomesTitle ? `<p class="project-copy-block__lead">${escapeHTML(project.results.outcomesTitle)}</p>` : ""}
                ${project.results.outcomes ? `<ul>${project.results.outcomes.map((outcome) => `<li>${escapeHTML(outcome)}</li>`).join("")}</ul>` : ""}
                ${project.results.learningTitle ? `<p class="project-copy-block__lead">${escapeHTML(project.results.learningTitle)}</p>` : ""}
                ${project.results.learning ? `<p>${escapeHTML(project.results.learning)}</p>` : ""}
            </div>
            <div class="project-tags-wrap"><p class="project-tags__label">Tag</p>
            <ul class="project-tags" aria-label="Project disciplines">${project.tags.map((tag) => `<li><span class="project-tags__dot" aria-hidden="true"></span><span>${escapeHTML(tag)}</span></li>`).join("")}</ul></div>
        </section>

        <section class="project-contact-cta" aria-label="Contact call to action">
            <div class="project-contact-cta__copy">
                <h2>Let's build something useful.</h2>
                <p>Looking for a Product Designer or UI/UX Designer for your team? Have a digital product idea that needs thoughtful design?</p>
                <strong>I'd love to hear what you're working on.</strong>
            </div>
            <button class="project-contact-cta__button" type="button" data-open-booking aria-haspopup="dialog" aria-controls="booking-modal">Discuss Your Project</button>
        </section>`;
})();
