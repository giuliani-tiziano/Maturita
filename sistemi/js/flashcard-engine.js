/* =========================================================================
   flashcard-engine.js — Motore flashcard Sistemi e Reti
   Richiede window.flashcardData (flashcard-data.js).
   ========================================================================= */
(function () {
  "use strict";

  const MODULE_NAMES = {
    "tcpip":           "TCP/IP e Indirizzi IP",
    "subnetting":      "Subnetting, VLSM e CIDR",
    "nat-icmp":        "NAT, PAT e ICMP",
    "routing":         "Routing: Fondamenti e Algoritmi",
    "rip":             "RIP",
    "ospf-bgp":        "OSPF e BGP",
    "crittografia":    "Crittografia Simmetrica",
    "diffie-hellman":  "Diffie-Hellman, Hash, MAC, Firma",
    "pki":             "Certificati Digitali e PKI",
    "ssl-tls":         "SSL/TLS",
    "vpn":             "VPN",
    "ipsec":           "IPsec",
    "firewall":        "Firewall e Architetture",
    "acl":             "ACL",
    "ids-ips":         "IDS, IPS e Sicurezza",
    "cloud":           "Cloud, Virtualizzazione e AD",
    "packet-tracer":   "Laboratorio Packet Tracer"
  };

  let deck = [];
  let idx = 0;
  let currentKey = null;
  let shuffleOn = false;

  const overlay  = document.getElementById("fc-overlay");
  const cardEl   = document.getElementById("fc-card");
  const frontEl  = document.getElementById("fc-front-text");
  const backEl   = document.getElementById("fc-back-text");
  const labelEl  = document.getElementById("fc-author-label");
  const counterEl= document.getElementById("fc-counter");
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
    if (cardEl) cardEl.classList.remove("flipped");
    if (frontEl) frontEl.textContent = card.fronte;
    if (backEl) backEl.textContent = card.retro;
    if (counterEl) counterEl.textContent = (idx + 1) + " / " + deck.length;
    if (progFill) progFill.style.width = ((idx + 1) / deck.length * 100) + "%";
  }

  window.startFlashcards = function(key) {
    const raw = (window.flashcardData || {})[key];
    if (!raw || raw.length === 0) return;
    currentKey = key;
    deck = shuffleOn ? fyShuffle(raw) : raw.slice();
    idx = 0;
    if (labelEl) labelEl.textContent = MODULE_NAMES[key] || key;
    renderCard();
    if (overlay) overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  function closeOverlay() {
    if (overlay) overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  function next() {
    if (idx < deck.length - 1) { idx++; renderCard(); }
  }

  function prev() {
    if (idx > 0) { idx--; renderCard(); }
  }

  function restart() {
    idx = 0;
    if (shuffleOn) deck = fyShuffle(deck);
    renderCard();
  }

  function toggleShuffle() {
    shuffleOn = !shuffleOn;
    const btn = document.getElementById("fc-shuffle");
    if (btn) btn.classList.toggle("on", shuffleOn);
    if (shuffleOn) deck = fyShuffle(deck);
    else {
      const raw = (window.flashcardData || {})[currentKey];
      if (raw) deck = raw.slice();
    }
    idx = 0;
    renderCard();
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (cardEl) {
      cardEl.addEventListener("click", function() {
        cardEl.classList.toggle("flipped");
      });
    }

    const nextBtn = document.getElementById("fc-next");
    if (nextBtn) nextBtn.addEventListener("click", next);

    const prevBtn = document.getElementById("fc-prev");
    if (prevBtn) prevBtn.addEventListener("click", prev);

    const closeBtn = document.getElementById("fc-close");
    if (closeBtn) closeBtn.addEventListener("click", closeOverlay);

    const shuffleBtn = document.getElementById("fc-shuffle");
    if (shuffleBtn) shuffleBtn.addEventListener("click", toggleShuffle);

    const restartBtn = document.getElementById("fc-restart");
    if (restartBtn) restartBtn.addEventListener("click", restart);

    if (overlay) {
      overlay.addEventListener("click", function(e) {
        if (e.target === overlay) closeOverlay();
      });
    }

    document.addEventListener("keydown", function(e) {
      if (!overlay || !overlay.classList.contains("show")) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (cardEl) cardEl.classList.toggle("flipped");
      }
      else if (e.key === "Escape") closeOverlay();
    });
  });
})();
