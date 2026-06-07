/* =========================================================================
   timeline.js — English Literature Interactive Timeline 1750–1970 (SVG)
   4 levels: History · Movements · Authors · Works
   ========================================================================= */
(function () {
  "use strict";

  /* ── DATA ─────────────────────────────────────────────────────────── */
  const YEAR_MIN = 1750, YEAR_MAX = 1970;

  const STORIA = [
    { year: 1776, label: "American Independence", desc: "The 13 colonies declare independence from Britain — inspiring revolutionary ideals across Europe." },
    { year: 1789, label: "French Revolution", desc: "The French Revolution begins — a key inspiration for Romantic poets Blake, Wordsworth and Coleridge." },
    { year: 1815, label: "Battle of Waterloo", desc: "Napoleon defeated at Waterloo — end of the Napoleonic Wars. British dominance confirmed." },
    { year: 1832, label: "Reform Act", desc: "The Great Reform Act — extends voting rights in Britain, beginning of democratic reform." },
    { year: 1837, label: "Queen Victoria", desc: "Queen Victoria ascends the throne — beginning of the Victorian Age (1837–1901)." },
    { year: 1859, label: "Darwin: Origin of Species", desc: "Darwin publishes On the Origin of Species — challenges religious certainty and Victorian stability." },
    { year: 1901, label: "Death of Victoria", desc: "Queen Victoria dies — end of the Victorian Age, beginning of the Edwardian period." },
    { year: 1914, label: "World War I begins", desc: "Britain enters World War I (1914–1918) — shatters Victorian optimism and faith in progress." },
    { year: 1917, label: "Russian Revolution", desc: "Bolshevik revolution in Russia — the event allegorised in Orwell's Animal Farm (1945)." },
    { year: 1918, label: "End of WWI", desc: "Armistice Day, 11 November 1918 — the trauma of the trenches shapes the entire Modernist generation." },
    { year: 1929, label: "Great Depression", desc: "Wall Street Crash — global economic depression, political radicalisation, rise of totalitarianisms." },
    { year: 1939, label: "World War II", desc: "Britain declares war on Germany — WWII begins (1939–1945)." },
    { year: 1945, label: "End of WWII", desc: "Atomic bombs on Hiroshima and Nagasaki. End of WWII — beginning of the Cold War and dystopian anxieties." },
    { year: 1947, label: "Indian Independence", desc: "India gains independence — beginning of British decolonisation of the Empire." },
    { year: 1948, label: "NHS Founded", desc: "The National Health Service founded — the post-war welfare state and Attlee's Labour government." },
    { year: 1956, label: "Suez Crisis", desc: "Suez Crisis — marks Britain's definitive decline as a global imperial power." }
  ];

  const CORRENTI = [
    { key: "pre-romanticism",  name: "Pre-Romanticism",     start: 1750, end: 1790, color: "#5C7A2A" },
    { key: "romanticism",      name: "Romanticism",         start: 1785, end: 1830, color: "#2A6B3A" },
    { key: "gothic",           name: "Gothic Novel",        start: 1764, end: 1850, color: "#3A3A7A" },
    { key: "victorianism",     name: "Victorian Age",       start: 1837, end: 1901, color: "#7A4A1A" },
    { key: "aestheticism",     name: "Aestheticism",        start: 1880, end: 1900, color: "#C9A84C" },
    { key: "modernism",        name: "Modernism",           start: 1900, end: 1940, color: "#1A5C8A" },
    { key: "dystopia",         name: "Dystopian Fiction",   start: 1932, end: 1970, color: "#7A1A1A" },
    { key: "absurd",           name: "Theatre of Absurd",   start: 1950, end: 1970, color: "#4A1A7A" }
  ];

  const AUTORI = [
    { key: "blake",       name: "Blake",        birth: 1757, death: 1827 },
    { key: "wordsworth",  name: "Wordsworth",   birth: 1770, death: 1850 },
    { key: "byron",       name: "Byron",        birth: 1788, death: 1824 },
    { key: "shelley",     name: "Mary Shelley", birth: 1797, death: 1851 },
    { key: "dickens",     name: "Dickens",      birth: 1812, death: 1870 },
    { key: "wilde",       name: "Wilde",        birth: 1854, death: 1900 },
    { key: "woolf",       name: "Woolf",        birth: 1882, death: 1941 },
    { key: "joyce",       name: "Joyce",        birth: 1882, death: 1941 },
    { key: "eliot",       name: "T.S. Eliot",   birth: 1888, death: 1965 },
    { key: "orwell",      name: "Orwell",       birth: 1903, death: 1950 },
    { key: "beckett",     name: "Beckett",      birth: 1906, death: 1989 },
    { key: "golding",     name: "Golding",      birth: 1911, death: 1993 }
  ];

  const OPERE = [
    { author: "blake",       year: 1789, title: "Songs of Innocence", desc: "Blake's first illuminated collection — the Lamb, the Chimney Sweeper, the Echoing Green." },
    { author: "blake",       year: 1794, title: "Songs of Experience", desc: "The Tyger, London, The Sick Rose, A Poison Tree — innocence corrupted." },
    { author: "wordsworth",  year: 1798, title: "Lyrical Ballads", desc: "With Coleridge — the manifesto of English Romanticism. Preface added 1800." },
    { author: "wordsworth",  year: 1850, title: "The Prelude", desc: "Posthumous autobiographical epic — the growth of a poet's mind." },
    { author: "shelley",     year: 1818, title: "Frankenstein", desc: "Frankenstein; or, The Modern Prometheus — first science-fiction novel, Gothic and Romantic." },
    { author: "dickens",     year: 1838, title: "Oliver Twist", desc: "Critique of the Poor Law and child labour in Victorian London." },
    { author: "dickens",     year: 1853, title: "Bleak House", desc: "Satire of the English legal system — fog as symbol of Victorian obfuscation." },
    { author: "dickens",     year: 1861, title: "Great Expectations", desc: "Pip's search for identity — class, ambition and moral growth in Victorian England." },
    { author: "wilde",       year: 1890, title: "The Picture of Dorian Gray", desc: "Aestheticism and the Faustian portrait — beauty, corruption and the soul." },
    { author: "wilde",       year: 1895, title: "The Importance of Being Earnest", desc: "Wit, double identity and Victorian hypocrisy — 'To lose one parent may be regarded as a misfortune.'" },
    { author: "woolf",       year: 1925, title: "Mrs Dalloway", desc: "One day, two lives — stream of consciousness, WWI trauma, the ticking clock." },
    { author: "woolf",       year: 1927, title: "To the Lighthouse", desc: "Time, loss and artistic vision across three sections." },
    { author: "woolf",       year: 1929, title: "A Room of One's Own", desc: "Feminist essay on women, writing and economic independence." },
    { author: "joyce",       year: 1914, title: "Dubliners", desc: "Paralysis and epiphany in Dublin — 'Eveline', 'Araby', 'The Dead'." },
    { author: "joyce",       year: 1916, title: "A Portrait of the Artist", desc: "Stephen Dedalus's artistic awakening — 'silence, exile and cunning'." },
    { author: "joyce",       year: 1922, title: "Ulysses", desc: "One day in Dublin — the Odyssey rewritten as Modernist masterpiece." },
    { author: "eliot",       year: 1915, title: "The Love Song of J. Alfred Prufrock", desc: "Modern paralysis and alienation — 'I have measured out my life with coffee spoons'." },
    { author: "eliot",       year: 1922, title: "The Waste Land", desc: "Post-WWI fragmentation — 'April is the cruellest month…' — cultural collapse and renewal." },
    { author: "orwell",      year: 1945, title: "Animal Farm", desc: "Allegory of the Russian Revolution and Stalinism — 'All animals are equal, but some…'" },
    { author: "orwell",      year: 1949, title: "Nineteen Eighty-Four", desc: "Big Brother, Newspeak, doublethink — totalitarian dystopia and the Ministry of Truth." },
    { author: "golding",     year: 1954, title: "Lord of the Flies", desc: "Civilisation vs savagery — British schoolboys on a desert island." },
    { author: "beckett",     year: 1953, title: "Waiting for Godot", desc: "Theatre of the Absurd — 'Nothing to be done.' Estragon and Vladimir wait in vain." }
  ];

  /* ── STATE ────────────────────────────────────────────────────────── */
  let pxPerYear = 9;
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
      bandLabel("History", y + ROW_H);
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
      bandLabel("Movements", y);
      CORRENTI.forEach((c, i) => {
        const yy = y + i * ROW_H;
        const x1 = xOf(clampYear(c.start)), x2 = xOf(clampYear(c.end));
        const g = el("g", { class: "tl-item", style: "cursor:pointer" });
        const bar = el("rect", { x: x1, y: yy + 4, width: Math.max(8, x2 - x1), height: ROW_H - 9, rx: 4, fill: c.color, opacity: .82 });
        g.appendChild(bar);
        const lbl = el("text", { x: x1 + 8, y: yy + ROW_H - 6, "font-family": "var(--sans)", "font-size": 10.5, "font-weight": 600, fill: "#fff" }, c.name);
        g.appendChild(lbl);
        g.addEventListener("mousemove", e => showTip("<strong>" + c.name + "</strong><br>" + c.start + "–" + c.end + " · click for overview", e));
        g.addEventListener("mouseleave", hideTip);
        g.addEventListener("click", () => { window.location.href = "movements/" + c.key + "/index.html"; });
        svg.appendChild(g);
      });
      y += CORRENTI.length * ROW_H + BAND_GAP;
    }

    /* ── AUTORI + OPERE ── */
    if (filters.autori || filters.opere) {
      bandLabel("Authors & Works", y);
      AUTORI.forEach((a, i) => {
        const yy = y + i * ROW_H;
        if (filters.autori) {
          const bClamped = Math.max(YEAR_MIN, a.birth);
          const x1 = xOf(bClamped), x2 = xOf(clampYear(a.death));
          const g = el("g", { class: "tl-item", style: a.nolink ? "" : "cursor:pointer" });
          const bar = el("rect", { x: x1, y: yy + 7, width: Math.max(8, x2 - x1), height: ROW_H - 13, rx: 3, fill: "var(--color-primary)", opacity: .55 });
          g.appendChild(bar);
          const lbl = el("text", { x: x1 + 6, y: yy + ROW_H - 6, "font-family": "var(--sans)", "font-size": 10, "font-weight": 600, fill: "var(--ink)" }, a.name);
          g.appendChild(lbl);
          g.addEventListener("mousemove", e => showTip("<strong>" + a.name + "</strong><br>" + a.birth + "–" + a.death + (a.nolink ? "" : " · click for profile"), e));
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

  /* ── CONTROLS ────────────────────────────────────────────────────── */
  document.querySelectorAll(".tl-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.dataset.level;
      filters[k] = !filters[k];
      btn.classList.toggle("off", !filters[k]);
      render();
    });
  });
  const zoomIn  = document.getElementById("tl-zoom-in");
  const zoomOut = document.getElementById("tl-zoom-out");
  if (zoomIn)  zoomIn.addEventListener("click",  () => { pxPerYear = Math.max(5,  pxPerYear - 4); render(); });
  if (zoomOut) zoomOut.addEventListener("click", () => { pxPerYear = Math.min(40, pxPerYear + 4); render(); });

  render();
})();
