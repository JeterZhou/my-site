(() => {
    "use strict";

    // Replace these placeholder values with your real contact details.
    const CONTACT = {
        email: "x20250082@stu.hibiuh.edu.cn",
        githubLabel: "GitHub / Portfolio",
        githubUrl: "https://github.com/JeterZhou"
    };

    const pages = [
        { key: "home", label: "Home", href: "index.html" },
        { key: "quotes", label: "Quotes", href: "quotes.html" },
        { key: "projects", label: "Projects", href: "project.html" },
        { key: "useless machine", label: "Useless Machine", href: "machine.html" }
    ];

    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const currentPage = pages.find(page => page.href.toLowerCase() === currentFile);
    const currentKey = currentPage ? currentPage.key : "home";

    const style = document.createElement("style");
    style.textContent = `
        :root {
            --site-nav-height: 64px;
        }

        body.site-nav-enabled {
            padding-top: calc(var(--site-nav-height) + 18px) !important;
        }

        .site-switcher,
        .site-switcher * {
            box-sizing: border-box;
        }

        .site-switcher {
            position: fixed;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            width: min(680px, calc(100vw - 24px));
            min-height: var(--site-nav-height);
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            border: 1px solid rgba(255,255,255,0.48);
            border-radius: 999px;
            background: rgba(22, 31, 44, 0.78);
            box-shadow: 0 12px 34px rgba(0, 0, 0, 0.20);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .site-switcher__links {
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            flex: 1 1 auto;
        }

        .site-switcher .site-nav-link,
        .site-switcher .site-contact-button {
            appearance: none;
            min-height: 44px;
            padding: 0 16px;
            border: 0 !important;
            border-radius: 999px !important;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none !important;
            white-space: nowrap;
            font: inherit !important;
            font-size: 14px !important;
            font-weight: 650 !important;
            letter-spacing: 0.01em !important;
            line-height: 1 !important;
            color: rgba(255,255,255,0.82) !important;
            background: transparent !important;
            cursor: pointer;
            transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .site-switcher .site-nav-link:hover,
        .site-switcher .site-contact-button:hover,
        .site-switcher .site-nav-link:focus-visible,
        .site-switcher .site-contact-button:focus-visible {
            color: #ffffff !important;
            background: rgba(255,255,255,0.12) !important;
            transform: translateY(-1px);
            outline: none;
        }

        .site-switcher .site-nav-link.is-active {
            color: #142033 !important;
            background: rgba(255,255,255,0.95) !important;
            box-shadow: 0 6px 18px rgba(0,0,0,0.16);
        }

        .site-switcher .site-contact-button {
            flex: 0 0 auto;
            color: #ffffff !important;
            background: linear-gradient(135deg, #6f8cff, #8b6cff) !important;
            box-shadow: 0 8px 18px rgba(67, 79, 168, 0.28);
        }

        .site-switcher .site-contact-button.is-open {
            background: linear-gradient(135deg, #8b6cff, #b067d4) !important;
        }

        .site-contact-panel[hidden] {
            display: none !important;
        }

        .site-contact-panel {
            position: fixed;
            top: calc(var(--site-nav-height) + 26px);
            left: 50%;
            transform: translateX(-50%);
            z-index: 9998;
            width: min(420px, calc(100vw - 28px));
            padding: 22px;
            border: 1px solid rgba(255,255,255,0.42);
            border-radius: 24px;
            background: rgba(22, 31, 44, 0.93);
            color: #ffffff;
            box-shadow: 0 20px 50px rgba(0,0,0,0.28);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .site-contact-panel h2 {
            margin: 0 0 8px !important;
            color: #ffffff !important;
            font: 700 22px/1.2 Inter, ui-sans-serif, system-ui, sans-serif !important;
            text-align: left !important;
        }

        .site-contact-panel p {
            margin: 0 0 16px !important;
            color: rgba(255,255,255,0.72) !important;
            font: 400 14px/1.65 Inter, ui-sans-serif, system-ui, sans-serif !important;
            text-align: left !important;
        }

        .site-contact-list {
            display: grid;
            gap: 10px;
        }

        .site-contact-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            min-height: 50px;
            padding: 10px 13px;
            border-radius: 15px;
            background: rgba(255,255,255,0.08);
        }

        .site-contact-item span {
            color: rgba(255,255,255,0.62);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        .site-contact-item a {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #ffffff !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            text-decoration: none !important;
        }

        .site-contact-item a:hover,
        .site-contact-item a:focus-visible {
            text-decoration: underline !important;
            outline: none;
        }

        .site-contact-note {
            margin-top: 14px !important;
            margin-bottom: 0 !important;
            font-size: 12px !important;
            color: rgba(255,255,255,0.52) !important;
        }

        .site-switcher.site-nav-light {
            background: rgba(255, 255, 255, 0.84);
            border-color: rgba(148, 163, 184, 0.4);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(22px);
            -webkit-backdrop-filter: blur(22px);
        }

        .site-switcher.site-nav-dark {
            background: rgba(23, 36, 58, 0.78);
            border-color: rgba(203, 213, 225, 0.2);
        }

        .site-switcher.site-nav-light .site-nav-link {
            color: rgba(15, 23, 42, 0.78) !important;
        }

        .site-switcher.site-nav-light .site-nav-link:hover,
        .site-switcher.site-nav-light .site-contact-button:hover,
        .site-switcher.site-nav-light .site-nav-link:focus-visible,
        .site-switcher.site-nav-light .site-contact-button:focus-visible {
            color: #111827 !important;
            background: rgba(15, 23, 42, 0.06) !important;
        }

        .site-switcher.site-nav-light .site-nav-link.is-active {
            color: #ffffff !important;
            background: linear-gradient(135deg, #111827, #1f2937) !important;
            box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);
        }

        .site-switcher.site-nav-light .site-contact-button {
            color: #ffffff !important;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
            box-shadow: 0 8px 18px rgba(59, 130, 246, 0.18);
        }

        .site-theme-button {
            appearance: none;
            min-height: 42px;
            padding: 0 14px;
            border: 1px solid rgba(255,255,255,0.28);
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: rgba(255,255,255,0.08);
            color: rgba(255,255,255,0.9);
            cursor: pointer;
            font: inherit !important;
            font-size: 12px !important;
            font-weight: 700 !important;
            letter-spacing: 0.04em;
            transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .site-theme-button:hover,
        .site-theme-button:focus-visible {
            transform: translateY(-1px);
            background: rgba(255,255,255,0.14);
            border-color: rgba(255,255,255,0.38);
            outline: none;
        }

        .site-theme-button__icon {
            font-size: 14px;
            line-height: 1;
        }

        .site-switcher.site-nav-light .site-theme-button {
            border-color: rgba(148, 163, 184, 0.45);
            background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.8));
            color: #111827;
            box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
        }

        .site-switcher.site-nav-light .site-theme-button:hover,
        .site-switcher.site-nav-light .site-theme-button:focus-visible {
            background: linear-gradient(135deg, rgba(255,255,255,1), rgba(241,245,249,0.94));
            border-color: rgba(148, 163, 184, 0.65);
        }

        .site-contact-panel.site-contact-panel-light {
            background: rgba(255, 255, 255, 0.92);
            border-color: rgba(15, 23, 42, 0.12);
            color: #111827;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        }

        .site-contact-panel.site-contact-panel-light h2 {
            color: #111827 !important;
        }

        .site-contact-panel.site-contact-panel-light p {
            color: rgba(17, 24, 39, 0.72) !important;
        }

        .site-contact-panel.site-contact-panel-light .site-contact-item {
            background: rgba(15, 23, 42, 0.04);
        }

        .site-contact-panel.site-contact-panel-light .site-contact-item span {
            color: rgba(15, 23, 42, 0.62);
        }

        .site-contact-panel.site-contact-panel-light .site-contact-item a {
            color: #111827 !important;
        }

        .site-contact-panel.site-contact-panel-light .site-contact-note {
            color: rgba(15, 23, 42, 0.62) !important;
        }

        @media (max-width: 560px) {
            :root {
                --site-nav-height: 58px;
            }

            body.site-nav-enabled {
                padding-top: calc(var(--site-nav-height) + 14px) !important;
            }

            .site-switcher {
                top: 8px;
                width: calc(100vw - 16px);
                padding: 6px;
                gap: 4px;
            }

            .site-switcher__links {
                gap: 3px;
            }

            .site-switcher .site-nav-link,
            .site-switcher .site-contact-button {
                min-height: 42px;
                padding: 0 10px;
                font-size: 12px !important;
            }

            .site-contact-panel {
                top: calc(var(--site-nav-height) + 20px);
                padding: 18px;
                border-radius: 20px;
            }
        }

        @media (max-width: 390px) {
            .site-switcher .site-nav-link,
            .site-switcher .site-contact-button {
                padding-inline: 8px;
                font-size: 11px !important;
            }
        }
    `;
    // Keep the full desktop navigation; use a compact dropdown on small screens.
    // This also works on existing Quotes, Projects, and Useless Machine pages.
    style.textContent += `
        .site-switcher__brand,
        .site-switcher__menu-button { display: none; }

        @media (max-width: 760px) {
            .site-switcher {
                top: 10px;
                width: calc(100vw - 20px);
                min-height: 58px;
                justify-content: space-between;
                gap: 7px;
                padding: 7px 9px;
            }
            .site-switcher__brand {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;
                padding: 0 11px;
                min-height: 40px;
                color: #fff;
                font: 800 19px/1 Manrope, Inter, system-ui, sans-serif;
                letter-spacing: -.06em;
                text-decoration: none;
            }
            .site-switcher.site-nav-light .site-switcher__brand { color: #18243a; }
            .site-switcher__links {
                position: absolute;
                top: calc(100% + 10px);
                left: 0;
                right: 0;
                z-index: 1;
                display: none;
                flex: none;
                flex-direction: column;
                align-items: stretch;
                gap: 4px;
                padding: 10px;
                border: 1px solid rgba(255,255,255,.2);
                border-radius: 19px;
                background: rgba(21,32,49,.97);
                box-shadow: 0 18px 40px rgba(0,0,0,.18);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
            }
            .site-switcher.site-nav-light .site-switcher__links {
                background: rgba(255,255,255,.97);
                border-color: rgba(148,163,184,.23);
            }
            .site-switcher.is-menu-open .site-switcher__links { display: flex; }
            .site-switcher .site-nav-link {
                min-height: 42px;
                width: 100%;
                justify-content: flex-start;
                padding: 0 15px;
                font-size: 13px !important;
            }
            .site-switcher .site-theme-button {
                min-width: 40px;
                width: 40px;
                min-height: 40px;
                padding: 0;
                flex: 0 0 auto;
            }
            .site-switcher .site-theme-button__label { display: none; }
            .site-switcher .site-contact-button {
                min-height: 40px;
                padding: 0 14px;
                font-size: 12px !important;
                margin-left: auto;
            }
            .site-switcher__menu-button {
                appearance: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;
                min-width: 40px;
                width: 40px;
                height: 40px;
                padding: 0;
                border: 1px solid rgba(255,255,255,.28);
                border-radius: 50%;
                color: #fff;
                background: rgba(255,255,255,.08);
                cursor: pointer;
            }
            .site-switcher.site-nav-light .site-switcher__menu-button {
                color: #17243a;
                background: #fff;
                border-color: rgba(148,163,184,.4);
            }
            .site-switcher__menu-button:hover { background: rgba(255,255,255,.18); }
            .site-switcher__menu-button:focus-visible {
                outline: 2px solid #abc1ff;
                outline-offset: 2px;
            }
            .site-switcher__menu-icon { display: flex; flex-direction: column; gap: 5px; }
            .site-switcher__menu-icon i {
                display: block; width: 17px; height: 2px;
                border-radius: 2px; background: currentColor;
                transition: transform .2s ease;
            }
            .site-switcher.is-menu-open .site-switcher__menu-icon i:first-child { transform: translateY(3.5px) rotate(45deg); }
            .site-switcher.is-menu-open .site-switcher__menu-icon i:last-child { transform: translateY(-3.5px) rotate(-45deg); }
        }
        @media (max-width: 360px) {
            .site-switcher { gap: 3px; padding: 6px; }
            .site-switcher__brand { padding: 0 8px; }
            .site-switcher .site-contact-button { padding: 0 10px; }
        }
    `;
    document.head.appendChild(style);

    let siteNavThemeObserver = null;

    function isDarkNavigationTheme() {
        return Boolean(document.body && document.body.classList.contains("dark-mode"));
    }

    function syncThemeControls() {
        const themeButtons = document.querySelectorAll(".theme-toggle");
        const navThemeButton = document.querySelector(".site-theme-button");
        const isDark = isDarkNavigationTheme();

        themeButtons.forEach((button) => {
            const icon = button.querySelector(".theme-icon");
            const label = button.querySelector(".theme-label");
            if (icon) icon.textContent = isDark ? "☀" : "☾";
            if (label) label.textContent = isDark ? "Light" : "Dark";
            button.setAttribute("aria-pressed", String(isDark));
        });

        if (navThemeButton) {
            const icon = navThemeButton.querySelector(".site-theme-button__icon");
            const label = navThemeButton.querySelector(".site-theme-button__label");
            if (icon) icon.textContent = isDark ? "☀" : "☾";
            if (label) label.textContent = isDark ? "Light" : "Dark";
            navThemeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        }
    }

    function applyNavigationTheme() {
        const nav = document.querySelector(".site-switcher");
        const panel = document.getElementById("siteContactPanel");

        if (!nav) return;

        const isDark = isDarkNavigationTheme();
        nav.classList.toggle("site-nav-light", !isDark);
        nav.classList.toggle("site-nav-dark", isDark);

        if (panel) {
            panel.classList.toggle("site-contact-panel-light", !isDark);
        }

        syncThemeControls();
    }

    function buildNavigation() {
        if (!document.body || document.querySelector(".site-switcher")) return;

        let savedTheme = null;
        try {
            savedTheme = localStorage.getItem("quote-theme");
        } catch (error) {
            savedTheme = null;
        }
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
        document.body.classList.add("site-nav-enabled");

        const nav = document.createElement("nav");
        nav.className = "site-switcher";
        nav.setAttribute("aria-label", "Main page switcher");

        const brand = document.createElement("a");
        brand.className = "site-switcher__brand";
        brand.href = "index.html";
        brand.textContent = "JZ.";
        brand.setAttribute("aria-label", "Jeter Zhou — Home");

        const links = document.createElement("div");
        links.className = "site-switcher__links";
        links.id = "siteNavigationLinks";

        pages.forEach((page) => {
            const link = document.createElement("a");
            link.className = "site-nav-link";
            link.href = page.href;
            link.textContent = page.label;

            if (page.key === currentKey) {
                link.classList.add("is-active");
                link.setAttribute("aria-current", "page");
            }

            links.appendChild(link);
        });

        const themeButton = document.createElement("button");
        themeButton.type = "button";
        themeButton.className = "site-theme-button";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
        themeButton.innerHTML = '<span class="site-theme-button__icon">☾</span><span class="site-theme-button__label">Dark</span>';

        const contactButton = document.createElement("button");
        contactButton.type = "button";
        contactButton.className = "site-contact-button";
        contactButton.textContent = "Contact";
        contactButton.setAttribute("aria-expanded", "false");
        contactButton.setAttribute("aria-controls", "siteContactPanel");

        const menuButton = document.createElement("button");
        menuButton.type = "button";
        menuButton.className = "site-switcher__menu-button";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-controls", "siteNavigationLinks");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<span class="site-switcher__menu-icon" aria-hidden="true"><i></i><i></i></span>';

        nav.append(brand, links, themeButton, contactButton, menuButton);

        themeButton.addEventListener("click", () => {
            const nextDark = !document.body.classList.contains("dark-mode");
            document.body.classList.toggle("dark-mode", nextDark);

            try {
                localStorage.setItem("quote-theme", nextDark ? "dark" : "light");
            } catch (error) {
                // localStorage unavailable: theme still works for the current page.
            }

            applyNavigationTheme();
        });

        const panel = document.createElement("section");
        panel.id = "siteContactPanel";
        panel.className = "site-contact-panel";
        panel.hidden = true;
        panel.setAttribute("aria-label", "Contact information");

        const title = document.createElement("h2");
        title.textContent = "Contact";

        const intro = document.createElement("p");
        intro.textContent = "Use the links below to get in touch.";

        const list = document.createElement("div");
        list.className = "site-contact-list";

        const emailItem = document.createElement("div");
        emailItem.className = "site-contact-item";
        emailItem.innerHTML = `<span>Email</span><a href="mailto:${CONTACT.email}">${CONTACT.email}</a>`;

        const githubItem = document.createElement("div");
        githubItem.className = "site-contact-item";
        githubItem.innerHTML = `<span>${CONTACT.githubLabel}</span><a href="${CONTACT.githubUrl}" target="_blank" rel="noopener noreferrer">Open link</a>`;

        const note = document.createElement("p");
        note.className = "site-contact-note";
        note.textContent = "Open to ideas, feedback, and a friendly hello.";

        list.append(emailItem, githubItem);
        panel.append(title, intro, list, note);

        document.body.prepend(panel);
        document.body.prepend(nav);

        if (!siteNavThemeObserver) {
            siteNavThemeObserver = new MutationObserver(() => {
                applyNavigationTheme();
            });
            siteNavThemeObserver.observe(document.body, {
                attributes: true,
                attributeFilter: ["class"]
            });
        }

        applyNavigationTheme();

        // Over the hero the navigation stays dark/glassy even in light mode.
        // Once the user reaches the white project section it returns to the
        // normal shared light/dark navigation theme.
        function syncHeroNavigation() {
            if (!document.body.classList.contains("home-page")) return;
            const hero = document.querySelector(".home-hero");
            const overHero = Boolean(hero && hero.getBoundingClientRect().bottom > 108);
            nav.classList.toggle("site-nav-over-hero", overHero);
        }
        syncHeroNavigation();
        window.addEventListener("scroll", syncHeroNavigation, { passive: true });
        window.addEventListener("resize", () => {
            syncHeroNavigation();
            if (window.innerWidth > 760) setMobileMenu(false);
        });

        function setPanel(open) {
            panel.hidden = !open;
            contactButton.classList.toggle("is-open", open);
            contactButton.setAttribute("aria-expanded", String(open));
            if (open) setMobileMenu(false);
        }

        function setMobileMenu(open) {
            nav.classList.toggle("is-menu-open", open);
            menuButton.setAttribute("aria-expanded", String(open));
            menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        }

        menuButton.addEventListener("click", () => {
            const shouldOpen = !nav.classList.contains("is-menu-open");
            setMobileMenu(shouldOpen);
            if (shouldOpen) setPanel(false);
        });

        contactButton.addEventListener("click", () => {
            setPanel(panel.hidden);
        });

        document.addEventListener("click", (event) => {
            if (!panel.hidden && !panel.contains(event.target) && !contactButton.contains(event.target)) {
                setPanel(false);
            }
            if (nav.classList.contains("is-menu-open") && !nav.contains(event.target)) {
                setMobileMenu(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;
            if (!panel.hidden) {
                setPanel(false);
                contactButton.focus();
            } else if (nav.classList.contains("is-menu-open")) {
                setMobileMenu(false);
                menuButton.focus();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildNavigation, { once: true });
    } else {
        buildNavigation();
    }
})();
