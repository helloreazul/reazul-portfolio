/* ==========================================================================
   Reazul Portfolio — interactions
   ========================================================================== */

(() => {
    "use strict";

    const cards = document.querySelectorAll(".project-card");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cards.length || reducedMotion) return;

    const ROTATION_INTERVAL = 2800;
    const SLIDE_DURATION = 720;

    cards.forEach((card) => {
        const track = card.querySelector(".project-card__track");
        if (!track) return;

        const originalSlides = Array.from(track.querySelectorAll(".project-card__slide"));
        if (originalSlides.length !== 3) return;

        const originalSources = originalSlides.map((slide) => slide.cloneNode(true));

        // Add two leading-cycle clones so the viewport always has three complete items.
        track.append(
            originalSlides[0].cloneNode(true),
            originalSlides[1].cloneNode(true)
        );

        let nextSourceIndex = 2;
        let intervalId = null;
        let isPaused = false;
        let isSliding = false;

        const getStepDistance = () => {
            const firstSlide = track.querySelector(".project-card__slide");
            if (!firstSlide) return 0;

            const trackStyles = window.getComputedStyle(track);
            const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
            return firstSlide.getBoundingClientRect().width + gap;
        };

        const finishSlide = () => {
            if (!isSliding) return;

            // Recycle the outgoing slide and append the next item in the sequence.
            track.firstElementChild.remove();
            track.appendChild(originalSources[nextSourceIndex].cloneNode(true));
            nextSourceIndex = (nextSourceIndex + 1) % originalSources.length;

            // Reset without animation after the DOM order has advanced by one item.
            track.style.transition = "none";
            track.style.transform = "translate3d(0, 0, 0)";
            track.offsetHeight; // Commit the reset before restoring the transition.
            track.style.transition = "";

            isSliding = false;
        };

        const slideNext = () => {
            if (isPaused || isSliding) return;

            const distance = getStepDistance();
            if (!distance) return;

            isSliding = true;
            track.style.transform = `translate3d(-${distance}px, 0, 0)`;
        };

        track.addEventListener("transitionend", (event) => {
            if (event.target === track && event.propertyName === "transform") {
                finishSlide();
            }
        });

        // Fallback for cases where transitionend is suppressed by browser/layout changes.
        const completeIfStuck = () => {
            if (isSliding) finishSlide();
        };

        const startRotation = () => {
            if (intervalId !== null || isPaused) return;
            intervalId = window.setInterval(() => {
                slideNext();
                window.setTimeout(completeIfStuck, SLIDE_DURATION + 100);
            }, ROTATION_INTERVAL);
        };

        const stopRotation = () => {
            if (intervalId === null) return;
            window.clearInterval(intervalId);
            intervalId = null;
        };

        const pauseRotation = () => {
            isPaused = true;
            stopRotation();
        };

        const resumeRotation = () => {
            isPaused = false;
            startRotation();
        };

        card.addEventListener("mouseenter", pauseRotation);
        card.addEventListener("mouseleave", resumeRotation);
        card.addEventListener("focusin", pauseRotation);
        card.addEventListener("focusout", (event) => {
            if (!card.contains(event.relatedTarget)) resumeRotation();
        });

        startRotation();
    });
})();

/* ==========================================================================
   Services section — accessible single-open accordion
   ========================================================================== */

(() => {
    "use strict";

    const accordion = document.querySelector("[data-service-accordion]");
    if (!accordion) return;

    const items = Array.from(accordion.querySelectorAll(".service-item"));

    const setExpandedItem = (selectedItem) => {
        items.forEach((item) => {
            const trigger = item.querySelector(".service-item__toggle");
            const details = item.querySelector(".service-item__details");
            const isExpanded = item === selectedItem;

            item.classList.toggle("is-expanded", isExpanded);
            trigger.setAttribute("aria-expanded", String(isExpanded));
            details.setAttribute("aria-hidden", String(!isExpanded));
        });
    };

    items.forEach((item) => {
        const trigger = item.querySelector(".service-item__toggle");

        trigger.addEventListener("click", () => {
            const isAlreadyExpanded = item.classList.contains("is-expanded");
            if (!isAlreadyExpanded) setExpandedItem(item);
        });
    });

    // Ensure the first service is the only expanded item on initial load.
    setExpandedItem(items[0]);
})();


/* ==========================================================================
   Footer — scroll-triggered highlight entrance
   ========================================================================== */

(() => {
    "use strict";

    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        footer.classList.add("is-visible");
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            footer.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
        });
    }, {
        threshold: 0.28,
        rootMargin: "0px 0px -8% 0px"
    });

    observer.observe(footer);
})();


/* ==========================================================================
   Hero — scroll-linked layered transition
   ==========================================================================
   The name moves down, the portrait moves up, and the content fades from
   30% to 100% opacity over one shared scroll-progress range.
   ========================================================================== */

(() => {
    "use strict";

    const hero = document.querySelector(".hero-section");
    const name = hero?.querySelector(".hero-section__backdrop-name");
    const portrait = hero?.querySelector(".hero-section__portrait");
    const content = hero?.querySelector(".hero-section__content");

    if (!hero || !name || !portrait || !content) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        hero.style.setProperty("--hero-name-shift", "0px");
        hero.style.setProperty("--hero-portrait-shift", "0px");
        hero.style.setProperty("--hero-content-opacity", "1");
        return;
    }

    let frameRequested = false;
    let heroTop = 0;
    let scrollDistance = 900;

    const measureHero = () => {
        heroTop = hero.getBoundingClientRect().top + window.scrollY;
        scrollDistance = Math.max(650, Math.min(hero.offsetHeight * 0.62, 1000));
    };

    const updateParallax = () => {
        const progress = Math.max(0, Math.min(1, (window.scrollY - heroTop) / scrollDistance));

        // The name moves down and out while the portrait rises.
        const nameShift = progress * scrollDistance * 1.22;
        const portraitShift = progress * -Math.min(290, scrollDistance * 0.32);
        const contentOpacity = 0.3 + (0.7 * progress);

        hero.style.setProperty("--hero-name-shift", `${nameShift.toFixed(2)}px`);
        hero.style.setProperty("--hero-portrait-shift", `${portraitShift.toFixed(2)}px`);
        hero.style.setProperty("--hero-content-opacity", contentOpacity.toFixed(3));

        frameRequested = false;
    };

    const requestParallaxUpdate = () => {
        if (frameRequested) return;
        frameRequested = true;
        window.requestAnimationFrame(updateParallax);
    };

    measureHero();
    requestParallaxUpdate();

    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", () => {
        measureHero();
        requestParallaxUpdate();
    }, { passive: true });
})();


/* ==========================================================================\n   Site preloader — two text phases and a lightweight exit transition\n   ========================================================================== */
(() => {
    "use strict";
    const preloader = document.getElementById("site-preloader");
    if (!preloader) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phaseDuration = reducedMotion ? 180 : 1050;
    const urlDuration = reducedMotion ? 180 : 650;
    const maximumWait = 5000;
    let hasExited = false;
    const exitPreloader = () => {
        if (hasExited) return;
        hasExited = true;
        preloader.classList.add("is-leaving");
        window.setTimeout(() => preloader.remove(), reducedMotion ? 30 : 500);
    };
    window.setTimeout(() => {
        if (!hasExited && preloader.isConnected) preloader.classList.add("is-url-phase");
    }, phaseDuration);
    const startExitAfterSequence = () => window.setTimeout(exitPreloader, phaseDuration + urlDuration);
    if (document.readyState === "complete") startExitAfterSequence();
    else window.addEventListener("load", startExitAfterSequence, { once: true });
    window.setTimeout(exitPreloader, maximumWait);
})();


/* ==========================================================================
   Timetics booking modal — lazy-loaded on CTA interaction
   ========================================================================== */
(() => {
    "use strict";

    const modal = document.getElementById("booking-modal");
    const openButtons = document.querySelectorAll("[data-open-booking]");
    const closeButton = modal?.querySelector("[data-close-booking]");
    const embed = modal?.querySelector(".timetics-inline-embed");
    if (!modal || !openButtons.length || !closeButton || !embed) return;

    let embedScriptRequested = false;

    const loadTimeticsEmbed = () => {
        if (embedScriptRequested) return;
        embedScriptRequested = true;
        const script = document.createElement("script");
        script.src = "https://app.timetics.ai/script/embed.js";
        script.async = true;
        script.onerror = () => {
            embedScriptRequested = false;
        };
        document.body.appendChild(script);
    };

    const openModal = () => {
        if (typeof modal.showModal === "function") {
            modal.showModal();
        } else {
            modal.setAttribute("open", "");
        }
        document.body.classList.add("booking-modal-open");
        loadTimeticsEmbed();
    };

    const closeModal = () => {
        if (typeof modal.close === "function" && modal.open) {
            modal.close();
        } else {
            modal.removeAttribute("open");
        }
        document.body.classList.remove("booking-modal-open");
    };

    openButtons.forEach((button) => button.addEventListener("click", openModal));
    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    modal.addEventListener("close", () => {
        document.body.classList.remove("booking-modal-open");
    });
})();
