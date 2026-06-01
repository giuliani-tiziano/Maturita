/* =========================================================================
   flashcard-engine.js — Motore flashcard con flip 3D, navigazione, shuffle
   Richiede window.flashcardData (flashcard-data.js).
   ========================================================================= */
(function () {
  "use strict";

  const AUTHOR_NAMES = {
    verga: "Giovanni Verga", pascoli: "Giovanni Pascoli", dannunzio: "Gabriele D'Annunzio",
    pirandello: "Luigi Pirandello", svevo: "Italo Svevo", ungaretti: "Giuseppe Ungaretti",
    saba: "Umberto Saba", montale: "Eugenio Montale", campana: "Dino Campana",
    pavese: "Cesare Pavese", pasolini: "Pier Paolo Pasolini", calvino: "Italo Calvino"
  };

  let deck = [];        // carte correnti (eventualmente mescolate)
  let idx = 0;          // indice carta corrente
  let currentKey = null;

  const overlay = document.getElementById("fc-overlay");
  const cardEl = document.getElementById("fc-card");
  const frontEl = document.getElementById("fc-front-text");
  const backEl = document.getElementById("fc-back-text");
  const labelEl = document.getElementById("fc-author-label");
  const counterEl = document.getElementById("fc-counter");
  const progFill = document.getElementById("fc-prog-fill");

  function fyShuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderCard() {
    const card = deck[idx];
    if (!card) return;
    cardEl.classList.remove("flipped");
    frontEl.textContent = card.fronte;
    backEl.textContent = card.retro;
    counterEl.textContent = (idx + 1) + " / " + deck.length;
    progFill.style.width = ((idx + 1) / deck.length * 100) + "%";
  }

  function openDeck(key) {
    const data = (window.flashcardData || {})[key];
    if (!data || !data.length) return;
    currentKey = key;
    deck = data.slice();
    idx = 0;
    labelEl.textContent = AUTHOR_NAMES[key] || key;
    document.getElementById("fc-shuffle").classList.remove("on");
    renderCard();
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeDeck() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  function next() { if (idx < deck.length - 1) { idx++; renderCard(); } }
  function prev() { if (idx > 0) { idx--; renderCard(); } }
  function restart() { idx = 0; renderCard(); }
  function toggleShuffle() {
    const btn = document.getElementById("fc-shuffle");
    const on = btn.classList.toggle("on");
    if (on) deck = fyShuffle(window.flashcardData[currentKey]);
    else deck = window.flashcardData[currentKey].slice();
    idx = 0;
    renderCard();
  }

  /* ── EVENTI ── */
  cardEl.addEventListener("click", () => cardEl.classList.toggle("flipped"));
  document.getElementById("fc-next").addEventListener("click", next);
  document.getElementById("fc-prev").addEventListener("click", prev);
  document.getElementById("fc-restart").addEventListener("click", restart);
  document.getElementById("fc-shuffle").addEventListener("click", toggleShuffle);
  document.getElementById("fc-close").addEventListener("click", closeDeck);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeDeck(); });

  document.addEventListener("keydown", e => {
    if (!overlay.classList.contains("show")) return;
    if (e.key === "Escape") closeDeck();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === " " || e.key === "Enter") { e.preventDefault(); cardEl.classList.toggle("flipped"); }
  });

  // Esposto per i bottoni "Inizia →" delle card autore
  window.startFlashcards = openDeck;
})();
