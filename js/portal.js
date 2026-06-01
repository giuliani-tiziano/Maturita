/* =========================================================================
   portal.js — Logica della home portale (/index.html)
   Dark mode con persistenza in localStorage (chiave condivisa "theme").
   ========================================================================= */
(function () {
  "use strict";

  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);

  function buildToggle() {
    if (document.querySelector(".p-theme-toggle")) return;
    const topbar = document.querySelector(".p-topbar");
    if (!topbar) return;

    // Raggruppa l'anno e il toggle a destra
    const year = topbar.querySelector(".p-year");
    let right = topbar.querySelector(".p-topbar-right");
    if (!right) {
      right = document.createElement("div");
      right.className = "p-topbar-right";
      if (year) { topbar.appendChild(right); right.appendChild(year); }
      else topbar.appendChild(right);
    }

    const btn = document.createElement("button");
    btn.className = "p-theme-toggle";
    btn.setAttribute("aria-label", "Modalità notte");
    btn.setAttribute("title", "Modalità notte");
    btn.textContent = (document.documentElement.getAttribute("data-theme") === "dark") ? "☀" : "☾";
    btn.addEventListener("click", function () {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      btn.textContent = next === "dark" ? "☀" : "☾";
    });
    right.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildToggle);
  } else {
    buildToggle();
  }
})();
