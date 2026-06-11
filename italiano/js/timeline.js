/* =========================================================================
   timeline.js — Linea del tempo interattiva 1800–2000 (JS puro, SVG)
   4 livelli: Storia · Correnti · Autori · Opere
   ========================================================================= */
(function () {
  "use strict";

  /* ── DATI ─────────────────────────────────────────────────────────── */
  const YEAR_MIN = 1800, YEAR_MAX = 2000;

  const STORIA = [
    { year: 1796, label: "Campagna d'Italia", desc: "Napoleone in Italia: speranze rivoluzionarie e nuove repubbliche." },
    { year: 1797, label: "Campoformio", desc: "Trattato di Campoformio: Venezia ceduta all'Austria, delusione di Foscolo." },
    { year: 1815, label: "Restaurazione", desc: "Congresso di Vienna: ritorno dell'Austria in Italia." },
    { year: 1820, label: "Moti del '20-21", desc: "Moti liberali in Piemonte e nel Regno delle Due Sicilie." },
    { year: 1848, label: "Moti del '48", desc: "Primavera dei popoli: rivoluzioni e prima guerra d'indipendenza." },
    { year: 1861, label: "Unità d'Italia", desc: "Proclamazione del Regno d'Italia (17 marzo 1861)." },
    { year: 1870, label: "Porta Pia", desc: "Breccia di Porta Pia: Roma capitale, fine dello Stato pontificio." },
    { year: 1882, label: "Triplice Alleanza", desc: "Patto difensivo tra Italia, Germania e Austria-Ungheria." },
    { year: 1896, label: "Adua", desc: "Sconfitta di Adua: crisi della politica coloniale di Crispi in Africa." },
    { year: 1900, label: "Età giolittiana", desc: "Inizio dell'età giolittiana (1900–1914): riforme e sviluppo industriale." },
    { year: 1915, label: "1ª guerra mondiale", desc: "L'Italia entra nella Prima guerra mondiale (1915–1918)." },
    { year: 1922, label: "Fascismo", desc: "Marcia su Roma: inizio del regime fascista." },
    { year: 1938, label: "Leggi razziali", desc: "Promulgazione delle leggi razziali fasciste." },
    { year: 1940, label: "2ª guerra mondiale", desc: "L'Italia entra nella Seconda guerra mondiale (1940–1945)." },
    { year: 1943, label: "Resistenza", desc: "Inizio della Resistenza partigiana (1943–1945)." },
    { year: 1946, label: "Repubblica", desc: "Referendum: nasce la Repubblica Italiana." }
  ];

  const CORRENTI = [
    { key: "carduccianesimo",  name: "Carduccianesimo",  start: 1860, end: 1907, color: "#8B1A1A" },
    { key: "naturalismo",      name: "Naturalismo",      start: 1860, end: 1890, color: "#C0392B" },
    { key: "verismo",          name: "Verismo",          start: 1870, end: 1900, color: "#9E3347" },
    { key: "decadentismo",     name: "Decadentismo",     start: 1880, end: 1910, color: "#5C1A28" },
    { key: "simbolismo",       name: "Simbolismo",       start: 1880, end: 1910, color: "#B85C1A" },
    { key: "estetismo",        name: "Estetismo",        start: 1880, end: 1900, color: "#C9A84C" },
    { key: "futurismo",        name: "Futurismo",        start: 1909, end: 1930, color: "#1A5C8A" },
    { key: "crepuscolarismo",  name: "Crepuscolarismo",  start: 1900, end: 1915, color: "#2A6B3A" },
    { key: "vociani",          name: "Vociani",          start: 1908, end: 1916, color: "#1A4A6B" },
    { key: "ermetismo",        name: "Ermetismo",        start: 1925, end: 1945, color: "#7A6B1A" },
    { key: "antinovecentismo", name: "Antinovecentismo", start: 1920, end: 1960, color: "#6B4F4F" },
    { key: "neorealismo",      name: "Neorealismo",      start: 1945, end: 1955, color: "#B85C1A" }
  ];

  const AUTORI = [
    { key: "foscolo",    name: "Foscolo",    birth: 1778, death: 1827 },
    { key: "manzoni",    name: "Manzoni",    birth: 1785, death: 1873 },
    { key: "leopardi",   name: "Leopardi",   birth: 1798, death: 1837 },
    { key: "carducci",   name: "Carducci",   birth: 1835, death: 1907 },
    { key: "verga",      name: "Verga",      birth: 1840, death: 1922 },
    { key: "pascoli",    name: "Pascoli",    birth: 1855, death: 1912 },
    { key: "svevo",      name: "Svevo",      birth: 1861, death: 1928 },
    { key: "dannunzio",  name: "D'Annunzio", birth: 1863, death: 1938 },
    { key: "pirandello", name: "Pirandello", birth: 1867, death: 1936 },
    { key: "marinetti",  name: "Marinetti",  birth: 1876, death: 1944 },
    { key: "saba",       name: "Saba",       birth: 1883, death: 1957 },
    { key: "campana",    name: "Campana",    birth: 1885, death: 1932 },
    { key: "ungaretti",  name: "Ungaretti",  birth: 1888, death: 1970 },
    { key: "montale",    name: "Montale",    birth: 1896, death: 1981 },
    { key: "quasimodo",  name: "Quasimodo",  birth: 1901, death: 1968 },
    { key: "levi",       name: "Carlo Levi", birth: 1902, death: 1975, nolink: true },
    { key: "pavese",     name: "Pavese",     birth: 1908, death: 1950 },
    { key: "fenoglio",   name: "Fenoglio",   birth: 1922, death: 1963 },
    { key: "pasolini",   name: "Pasolini",   birth: 1922, death: 1975 },
    { key: "calvino",    name: "Calvino",    birth: 1923, death: 1985 }
  ];

  const OPERE = [
    { author: "foscolo", year: 1802, title: "Ultime lettere di Jacopo Ortis", desc: "Romanzo epistolare: delusione politica e amore infelice." },
    { author: "foscolo", year: 1803, title: "Sonetti", desc: "A Zacinto, Alla sera, In morte del fratello Giovanni." },
    { author: "foscolo", year: 1807, title: "Dei Sepolcri", desc: "Carme sulla funzione civile e affettiva delle tombe." },
    { author: "manzoni", year: 1812, title: "Inni Sacri", desc: "Poesia religiosa popolare dopo la conversione." },
    { author: "manzoni", year: 1821, title: "Il cinque maggio", desc: "Ode sulla morte di Napoleone: Ai posteri l'ardua sentenza." },
    { author: "manzoni", year: 1822, title: "Adelchi", desc: "Tragedia storica: il coro Dagli atrii muscosi." },
    { author: "manzoni", year: 1827, title: "I Promessi Sposi", desc: "Il romanzo storico: Renzo, Lucia, la Provvidenza, la peste." },
    { author: "manzoni", year: 1840, title: "I Promessi Sposi (ed. definitiva)", desc: "Edizione quarantana: il fiorentino dell'uso." },
    { author: "leopardi", year: 1819, title: "L'infinito", desc: "La siepe, l'immaginazione, il naufragar m'è dolce." },
    { author: "leopardi", year: 1829, title: "A Silvia", desc: "La giovinezza spezzata, le illusioni perdute." },
    { author: "leopardi", year: 1835, title: "Operette morali", desc: "Dialoghi filosofici dal tono ironico e paradossale." },
    { author: "leopardi", year: 1836, title: "La ginestra", desc: "Il fiore del deserto: la social catena." },
    { author: "carducci", year: 1865, title: "Inno a Satana", desc: "Manifesto anticlericale e positivista: Satana come ragione umana." },
    { author: "carducci", year: 1877, title: "Odi barbare I", desc: "Prima serie: Alle fonti del Clitumno, la rivoluzione metrica." },
    { author: "carducci", year: 1887, title: "Rime nuove", desc: "Pianto antico, San Martino, Funere mersit acerbo." },
    { author: "carducci", year: 1889, title: "Odi barbare II", desc: "Alla stazione, Nevicata: il culmine della tecnica metrica." },
    { author: "verga", year: 1881, title: "I Malavoglia", desc: "Primo romanzo del Ciclo dei Vinti." },
    { author: "verga", year: 1889, title: "Mastro-don Gesualdo", desc: "Secondo romanzo del Ciclo dei Vinti." },
    { author: "pascoli", year: 1891, title: "Myricae", desc: "La raccolta delle piccole cose." },
    { author: "pascoli", year: 1897, title: "Il fanciullino", desc: "Il saggio-manifesto della poetica." },
    { author: "dannunzio", year: 1889, title: "Il piacere", desc: "Il romanzo dell'estetismo: Andrea Sperelli." },
    { author: "dannunzio", year: 1903, title: "Alcyone", desc: "Il capolavoro lirico: il panismo." },
    { author: "svevo", year: 1923, title: "La coscienza di Zeno", desc: "Il capolavoro dell'inetto e della psicanalisi." },
    { author: "pirandello", year: 1921, title: "Sei personaggi", desc: "Sei personaggi in cerca d'autore: il metateatro." },
    { author: "campana", year: 1914, title: "Canti orfici", desc: "L'unica opera: l'orfismo, la visione." },
    { author: "ungaretti", year: 1916, title: "L'allegria", desc: "La poesia di trincea, la parola essenziale." },
    { author: "saba", year: 1921, title: "Il Canzoniere", desc: "L'opera di una vita: la poesia onesta." },
    { author: "montale", year: 1925, title: "Ossi di seppia", desc: "Il male di vivere, il correlativo oggettivo." },
    { author: "montale", year: 1939, title: "Le occasioni", desc: "Clizia, i Mottetti." },
    { author: "pavese", year: 1950, title: "La luna e i falò", desc: "Il capolavoro-testamento: il mito e il ritorno." },
    { author: "levi", year: 1945, title: "Cristo si è fermato a Eboli", desc: "Il documento della questione meridionale." },
    { author: "calvino", year: 1947, title: "Il sentiero dei nidi di ragno", desc: "La Resistenza vista da un bambino." },
    { author: "calvino", year: 1972, title: "Le città invisibili", desc: "Marco Polo, le 55 città (oltre l'asse, indicato al 1960)." },
    { author: "pasolini", year: 1955, title: "Ragazzi di vita", desc: "Le borgate romane, il dialetto." },
    { author: "marinetti", year: 1909, title: "Manifesto del Futurismo", desc: "Le Figaro, 20 febbraio 1909: 11 punti che fondano il Futurismo." },
    { author: "marinetti", year: 1914, title: "Zang Tumb Tuum", desc: "Il capolavoro del paroliberismo: la battaglia di Adrianopoli." },
    { author: "quasimodo", year: 1930, title: "Acque e terre", desc: "Esordio ermetico: Ed è subito sera, Vento a Tindari." },
    { author: "quasimodo", year: 1947, title: "Giorno dopo giorno", desc: "La svolta civile: Alle fronde dei salici, Uomo del mio tempo." },
    { author: "fenoglio", year: 1952, title: "I ventitre giorni della città di Alba", desc: "Esordio Einaudi: Resistenza tragicomica e anti-retorica." },
    { author: "fenoglio", year: 1963, title: "Una questione privata", desc: "Il capolavoro postumo: Milton, Fulvia, Fulvio. Calvino: 'aveva quello che tutti cercavano'." }
  ];

  /* ── STATO ────────────────────────────────────────────────────────── */
  let pxPerYear = 13;
  const filters = { storia: true, correnti: true, autori: true, opere: true };

  const MARGIN_L = 130, AXIS_H = 46, ROW_H = 22, BAND_GAP = 26, PAD = 16;

  const svg = document.getElementById("tl-svg");
  const tip = document.getElementById("tl-tooltip");
  const wrap = document.getElementById("tl-scroll");

  function xOf(year) { return MARGIN_L + (year - YEAR_MIN) * pxPerYear; }
  function clampYear(y) { return Math.max(YEAR_MIN, Math.min(YEAR_MAX, y)); }
  const NS = "http://www.w3.org/2000/svg";

  function el(name, attrs, text) {
    const e = document.createElementNS(NS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  function showTip(html, evt) {
    tip.innerHTML = html;
    tip.style.display = "block";
    const r = wrap.getBoundingClientRect();
    let x = evt.clientX - r.left + wrap.scrollLeft + 14;
    let y = evt.clientY - r.top + wrap.scrollTop + 14;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }
  function hideTip() { tip.style.display = "none"; }

  /* ── RENDER ───────────────────────────────────────────────────────── */
  function render() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const totalW = MARGIN_L + (YEAR_MAX - YEAR_MIN) * pxPerYear + PAD;
    let y = AXIS_H + PAD;

    /* calcola altezza */
    let h = AXIS_H + PAD;
    if (filters.storia) h += ROW_H * 2 + BAND_GAP;
    if (filters.correnti) h += CORRENTI.length * (ROW_H) + BAND_GAP;
    if (filters.autori || filters.opere) h += AUTORI.length * (ROW_H) + BAND_GAP;
    h += PAD;

    svg.setAttribute("viewBox", "0 0 " + totalW + " " + h);
    svg.setAttribute("width", totalW);
    svg.setAttribute("height", h);

    /* ── ASSE ANNI ── */
    for (let yr = YEAR_MIN; yr <= YEAR_MAX; yr += 10) {
      const x = xOf(yr);
      svg.appendChild(el("line", { x1: x, y1: AXIS_H - 8, x2: x, y2: h - PAD, stroke: "var(--rule-soft)", "stroke-width": 1 }));
      const t = el("text", { x: x, y: 22, "text-anchor": "middle", "font-family": "var(--sans)", "font-size": 12, "font-weight": 500, fill: "var(--ink-muted)" }, String(yr));
      svg.appendChild(t);
    }
    svg.appendChild(el("line", { x1: MARGIN_L, y1: AXIS_H, x2: totalW - PAD, y2: AXIS_H, stroke: "var(--rule)", "stroke-width": 1.5 }));

    /* ── STORIA ── */
    if (filters.storia) {
      bandLabel("Storia", y + ROW_H);
      STORIA.forEach((ev, i) => {
        const x = xOf(ev.year);
        const yy = y + (i % 2) * ROW_H;
        svg.appendChild(el("line", { x1: x, y1: AXIS_H, x2: x, y2: yy + 10, stroke: "var(--bordeaux-light)", "stroke-width": 1, "stroke-dasharray": "2 2", opacity: .5 }));
        const dot = el("circle", { cx: x, cy: yy + 10, r: 5, fill: "var(--bordeaux-deep)", class: "tl-hit" });
        const g = el("g", { class: "tl-item" });
        g.appendChild(dot);
        const lbl = el("text", { x: x + 8, y: yy + 14, "font-family": "var(--sans)", "font-size": 10.5, "font-weight": 500, fill: "var(--ink)" }, ev.year + " · " + ev.label);
        g.appendChild(lbl);
        g.addEventListener("mousemove", e => showTip("<strong>" + ev.year + " — " + ev.label + "</strong><br>" + ev.desc, e));
        g.addEventListener("mouseleave", hideTip);
        svg.appendChild(g);
      });
      y += ROW_H * 2 + BAND_GAP;
    }

    /* ── CORRENTI ── */
    if (filters.correnti) {
      bandLabel("Correnti", y);
      CORRENTI.forEach((c, i) => {
        const yy = y + i * ROW_H;
        const x1 = xOf(clampYear(c.start)), x2 = xOf(clampYear(c.end));
        const g = el("g", { class: "tl-item", style: "cursor:pointer" });
        const bar = el("rect", { x: x1, y: yy + 4, width: Math.max(8, x2 - x1), height: ROW_H - 9, rx: 4, fill: c.color, opacity: .82 });
        g.appendChild(bar);
        const lbl = el("text", { x: x1 + 8, y: yy + ROW_H - 6, "font-family": "var(--sans)", "font-size": 10.5, "font-weight": 600, fill: "#fff" }, c.name);
        g.appendChild(lbl);
        g.addEventListener("mousemove", e => showTip("<strong>" + c.name + "</strong><br>" + c.start + "–" + c.end + " · clicca per la scheda", e));
        g.addEventListener("mouseleave", hideTip);
        g.addEventListener("click", () => { window.location.href = "correnti/" + c.key + "/index.html"; });
        svg.appendChild(g);
      });
      y += CORRENTI.length * ROW_H + BAND_GAP;
    }

    /* ── AUTORI + OPERE ── */
    if (filters.autori || filters.opere) {
      bandLabel("Autori e opere", y);
      AUTORI.forEach((a, i) => {
        const yy = y + i * ROW_H;
        if (filters.autori) {
          const x1 = xOf(clampYear(a.birth)), x2 = xOf(clampYear(a.death));
          const g = el("g", { class: "tl-item", style: a.nolink ? "" : "cursor:pointer" });
          const bar = el("rect", { x: x1, y: yy + 7, width: Math.max(8, x2 - x1), height: ROW_H - 13, rx: 3, fill: "var(--color-primary)", opacity: .55 });
          g.appendChild(bar);
          const lbl = el("text", { x: (a.birth < YEAR_MIN ? MARGIN_L : x1) + 6, y: yy + ROW_H - 6, "font-family": "var(--sans)", "font-size": 10, "font-weight": 600, fill: "var(--ink)" }, a.name);
          g.appendChild(lbl);
          g.addEventListener("mousemove", e => showTip("<strong>" + a.name + "</strong><br>" + a.birth + "–" + a.death + (a.nolink ? "" : " · clicca per la scheda"), e));
          g.addEventListener("mouseleave", hideTip);
          if (!a.nolink) g.addEventListener("click", () => { window.location.href = "authors/" + a.key + "/index.html"; });
          svg.appendChild(g);
        }
        if (filters.opere) {
          OPERE.filter(o => o.author === a.key).forEach(o => {
            const ox = xOf(clampYear(o.year));
            const g = el("g", { class: "tl-item", style: "cursor:pointer" });
            const d = el("rect", { x: ox - 4, y: yy + 6, width: 8, height: 8, rx: 1.5, transform: "rotate(45 " + ox + " " + (yy + 10) + ")", fill: "var(--gold)", stroke: "var(--bordeaux-deep)", "stroke-width": 1 });
            g.appendChild(d);
            g.addEventListener("mousemove", e => showTip("<strong>" + o.title + "</strong> (" + o.year + ")<br>" + o.desc, e));
            g.addEventListener("mouseleave", hideTip);
            svg.appendChild(g);
          });
        }
      });
      y += AUTORI.length * ROW_H + BAND_GAP;
    }

    function bandLabel(txt, yy) {
      svg.appendChild(el("text", { x: 14, y: yy - 2, "font-family": "var(--sans)", "font-size": 10, "font-weight": 600, "letter-spacing": ".18em", fill: "var(--bordeaux-mid)", style: "text-transform:uppercase" }, txt));
    }
  }

  /* ── CONTROLLI ────────────────────────────────────────────────────── */
  document.querySelectorAll(".tl-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.dataset.level;
      filters[k] = !filters[k];
      btn.classList.toggle("off", !filters[k]);
      render();
    });
  });
  document.getElementById("tl-zoom-in").addEventListener("click",  () => { pxPerYear = Math.max(7,  pxPerYear - 4); render(); });
  document.getElementById("tl-zoom-out").addEventListener("click", () => { pxPerYear = Math.min(40, pxPerYear + 4); render(); });

  render();
})();
