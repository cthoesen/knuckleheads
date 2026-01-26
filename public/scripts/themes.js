/* themes.js
   Reusable theme picker for MFL-style pages.

   Requirements:
   - A container element (default: #MFLSkinSelection)
   - A panel element inside it (default: #myMFLSkinSelection)
   - Optional NFL container (default: #nflThemeList)
   - Optional swatch links using: .theme-option[data-theme][data-swatch]
*/

(function (global) {
  "use strict";

  const DEFAULTS = {
    containerId: "MFLSkinSelection",
    panelSelector: "#myMFLSkinSelection",
    openBtnSelector: ".MFLSkinSelectionbtn",
    closeBtnSelector: ".as_close_btn",
    overlaySelector: ".ThemeSwitch_overlay",
    themeOptionSelector: ".theme-option[data-theme]",
    swatchSelector: ".theme-option[data-swatch]",
    nflContainerId: "nflThemeList",

    defaultTheme: "theme-cerulean",
    themePrefix: "theme-",

    // How we build the localStorage key
    storageKey: ({ year, leagueId }) => `theme_${year}_${leagueId}`,

    // Where we apply the theme class
    applyTo: "documentElement", // "documentElement" (html) or "body"

    // Generate NFL links?
    generateNFL: true,
    sortNFL: true,

    // NFL logo base path
    nflLogoBaseURL:
      "https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2",

    nflTeams: [
      { id: "bears", name: "Bears", code: "CHI" },
      { id: "bengals", name: "Bengals", code: "CIN" },
      { id: "bills", name: "Bills", code: "BUF" },
      { id: "broncos", name: "Broncos", code: "DEN" },
      { id: "browns", name: "Browns", code: "CLE" },
      { id: "bucs", name: "Bucs", code: "TBB" },
      { id: "cardinals", name: "Cardinals", code: "ARI" },
      { id: "chargers", name: "Chargers", code: "LAC" },
      { id: "chiefs", name: "Chiefs", code: "KCC" },
      { id: "colts", name: "Colts", code: "IND" },
      { id: "commanders", name: "Commanders", code: "WAS" },
      { id: "cowboys", name: "Cowboys", code: "DAL" },
      { id: "dolphins", name: "Dolphins", code: "MIA" },
      { id: "eagles", name: "Eagles", code: "PHI" },
      { id: "falcons", name: "Falcons", code: "ATL" },
      { id: "giants", name: "Giants", code: "NYG" },
      { id: "jaguars", name: "Jaguars", code: "JAC" },
      { id: "jets", name: "Jets", code: "NYJ" },
      { id: "lions", name: "Lions", code: "DET" },
      { id: "packers", name: "Packers", code: "GBP" },
      { id: "panthers", name: "Panthers", code: "CAR" },
      { id: "patriots", name: "Patriots", code: "NEP" },
      { id: "raiders", name: "Raiders", code: "OAK" },
      { id: "rams", name: "Rams", code: "LAR" },
      { id: "ravens", name: "Ravens", code: "BAL" },
      { id: "saints", name: "Saints", code: "NOS" },
      { id: "seahawks", name: "Seahawks", code: "SEA" },
      { id: "steelers", name: "Steelers", code: "PIT" },
      { id: "texans", name: "Texans", code: "HOU" },
      { id: "titans", name: "Titans", code: "TEN" },
      { id: "vikings", name: "Vikings", code: "MIN" },
    ],
  };

  function pickApplyElement(applyTo) {
    return applyTo === "body" ? document.body : document.documentElement;
  }

  function removeThemeClasses(el, themePrefix) {
    [...el.classList].forEach((cls) => {
      if (cls.startsWith(themePrefix)) el.classList.remove(cls);
    });
  }

  function applyTheme(el, themePrefix, themeName) {
    if (typeof themeName !== "string" || !themeName.trim()) return;
    removeThemeClasses(el, themePrefix);
    el.classList.add(themeName);
  }

  function initThemePicker(options) {
    const cfg = Object.assign({}, DEFAULTS, options || {});

    if (!cfg.year || !cfg.leagueId) {
      // Fail silently to avoid breaking pages
      return;
    }

    const container = document.getElementById(cfg.containerId);
    if (!container) return;

    const openBtn = container.querySelector(cfg.openBtnSelector);
    const panel = container.querySelector(cfg.panelSelector);
    const closeBtn = container.querySelector(cfg.closeBtnSelector);
    const overlay = container.querySelector(cfg.overlaySelector);

    const applyEl = pickApplyElement(cfg.applyTo);
    const key = cfg.storageKey({ year: cfg.year, leagueId: cfg.leagueId });

    function setTheme(themeName) {
      if (typeof themeName !== "string" || !themeName.trim()) return;
      try {
        localStorage.setItem(key, themeName);
      } catch (_) {}
      applyTheme(applyEl, cfg.themePrefix, themeName);
    }

    function getStoredTheme() {
      try {
        return localStorage.getItem(key) || cfg.defaultTheme;
      } catch (_) {
        return cfg.defaultTheme;
      }
    }

    // Apply stored theme on load
    applyTheme(applyEl, cfg.themePrefix, getStoredTheme());

    // Export for optional use elsewhere
    global.setTheme = setTheme;

    // Open/close panel (uses hidden attribute if present, fallback to display)
    function show(el) {
      if (!el) return;
      if ("hidden" in el) el.hidden = false;
      else el.style.display = "";
    }
    function hide(el) {
      if (!el) return;
      if ("hidden" in el) el.hidden = true;
      else el.style.display = "none";
    }

    function openPanel() {
      show(panel);
      show(overlay);
    }
    function closePanel() {
      hide(panel);
      hide(overlay);
    }

    openBtn && openBtn.addEventListener("click", openPanel);
    closeBtn && closeBtn.addEventListener("click", closePanel);
    overlay && overlay.addEventListener("click", closePanel);

    // Swatch preview: copy data-swatch -> CSS variable
    container.querySelectorAll(cfg.swatchSelector).forEach((a) => {
      const swatch = a.getAttribute("data-swatch");
      if (swatch) a.style.setProperty("--theme-swatch", swatch);
    });

    // Generate NFL list if desired
    if (cfg.generateNFL) {
      const nflContainer = document.getElementById(cfg.nflContainerId);
      if (nflContainer) {
        const teams = cfg.sortNFL
          ? [...cfg.nflTeams].sort((a, b) => a.name.localeCompare(b.name))
          : cfg.nflTeams;

        nflContainer.innerHTML = teams
          .map(
            (team) => `
            <a href="#" class="theme-option theme-option--team" data-theme="${cfg.themePrefix}${team.id}">
              <img src="${cfg.nflLogoBaseURL}/${team.code}.svg" alt="" loading="lazy" />
              <span>${team.name}</span>
            </a>`
          )
          .join("");
      }
    }

    // Theme option click handler (delegated)
    container.addEventListener("click", (e) => {
      const opt = e.target.closest(cfg.themeOptionSelector);
      if (!opt) return;
      e.preventDefault();
      const themeName = opt.getAttribute("data-theme");
      if (themeName) setTheme(themeName);
      closePanel();
    });
  }

  // Expose a single global initializer
  global.MFLThemes = { init: initThemePicker };
})(window);
