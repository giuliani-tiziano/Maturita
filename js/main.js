/* =========================================================================
   main.js — Logica condivisa per tutte le pagine autore
   - Progress bar
   - Section nav (data-sec)
   - Poem tabs (data-poem)
   - Accordion (.acc-head e .acc-trigger)
   - Mini-quiz (.qd / .quiz-q / .mq-question)
   - Quiz finale inline (.qd[data-quiz="fin"])
   - Smooth scroll & animazioni
   ========================================================================= */

(function () {
  'use strict';

  /* ────────────────────────  PROGRESS BAR  ──────────────────────────── */
  const pb = document.getElementById('pb');
  function updateProg() {
    if (!pb) return;
    const h = document.documentElement, b = document.body;
    const tot = (h.scrollHeight || b.scrollHeight) - h.clientHeight;
    if (tot <= 0) return;
    const pct = (h.scrollTop || b.scrollTop) / tot * 100;
    pb.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }
  window.addEventListener('scroll', updateProg, { passive: true });
  window.addEventListener('resize', updateProg);
  updateProg();

  /* ────────────────────────  SECTION NAV  ───────────────────────────── */
  // Pattern: .nav-btn[data-sec="id"] + .section#id (con .active)
  const navBtns = document.querySelectorAll('.nav-btn[data-sec]');
  const allSections = document.querySelectorAll('.section[id]');

  function closeAllAccordions(scope) {
    const root = scope || document;
    root.querySelectorAll('.acc-head.open, .acc-trigger.open, .acc-body.open').forEach(el => {
      el.classList.remove('open');
    });
    root.querySelectorAll('.acc-head[aria-expanded], .acc-trigger[aria-expanded]').forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });
  }

  function showSection(id) {
    closeAllAccordions();
    allSections.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));
    const sec = document.getElementById(id);
    if (sec) {
      sec.classList.add('active');
      // Rendi visibili gli elementi .ai nella sezione appena mostrata
      sec.querySelectorAll('.ai:not(.visible)').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 30 + i * 40);
      });
    }
    navBtns.forEach(b => {
      if (b.dataset.sec === id) b.classList.add('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.sec;
      if (id) showSection(id);
    });
  });

  /* Espongo globalmente per debug / link esterni */
  window.showSection = showSection;

  /* ────────────────────────  POEM TABS  ─────────────────────────────── */
  // Pattern Saba: .ptab[data-poem] + .poem-panel[id="poem-X"]
  document.querySelectorAll('.ptab[data-poem]').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.poem;
      document.querySelectorAll('.poem-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('poem-' + id);
      if (panel) panel.classList.add('active');
    });
  });

  // Helper globale per onclick="showPoem('id')" del file Saba originale
  window.showPoem = function (id) {
    document.querySelectorAll('.poem-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    const panel = document.getElementById('poem-' + id);
    if (panel) panel.classList.add('active');
    // Attiva la tab corrispondente cercandola tramite data-poem o tramite onclick inline
    document.querySelectorAll('.ptab').forEach(t => {
      if (t.dataset.poem === id) { t.classList.add('active'); return; }
      const oc = t.getAttribute('onclick') || '';
      if (oc.indexOf("'" + id + "'") !== -1 || oc.indexOf('"' + id + '"') !== -1) {
        t.classList.add('active');
      }
    });
  };

  /* ────────────────────────  ACCORDION  ─────────────────────────────── */
  // Saba pattern: .acc-head (toggleAcc) — single open per accordion-container
  // Pirandello/Svevo pattern: .acc-trigger — single open per container
  function toggleAccordion(trigger) {
    const body = trigger.nextElementSibling;
    if (!body) return;
    const isOpen = trigger.classList.contains('open');

    // Trova il container più ragionevole (parent .accordion o parent)
    let container = trigger.closest('.accordion');
    if (!container) {
      // fall-back: cerca un parent comune che contiene gli altri trigger
      container = trigger.parentElement;
      while (container && container.querySelectorAll &&
        container.querySelectorAll('.acc-head, .acc-trigger').length < 2) {
        container = container.parentElement;
      }
      if (!container) container = document.body;
    }

    container.querySelectorAll('.acc-head, .acc-trigger').forEach(t => {
      t.classList.remove('open');
      const b = t.nextElementSibling;
      if (b && b.classList) b.classList.remove('open');
    });

    if (!isOpen) {
      trigger.classList.add('open');
      body.classList.add('open');
    }
  }

  document.querySelectorAll('.acc-head, .acc-trigger').forEach(t => {
    // Rimuovi vecchi inline handler se presenti
    t.onclick = null;
    t.addEventListener('click', function () { toggleAccordion(this); });
  });

  // Stato iniziale coerente: nessun pannello aperto automaticamente.
  closeAllAccordions();

  // Espongo per compatibilità con onclick="toggleAcc(this)" inline
  window.toggleAcc = toggleAccordion;

  /* ────────────────────────  MINI-QUIZ  ─────────────────────────────── */
  /*
    Pattern compatibili:
    1. .qd[data-correct] > .qopts > .qo + .qfb (Saba)
    2. .quiz-q[data-correct] > .quiz-opts > .qopt + .qfb (Montale, Ungaretti)
    3. .mq-question[data-correct] > .mq-options > .mq-opt + .mq-feedback (Ungaretti micro)
  */
  function setupMiniQuiz(question, optionsClass, optClass, fbClass) {
    const correct = parseInt(question.dataset.correct, 10);
    const opts = question.querySelectorAll('.' + optClass);
    const fb = question.querySelector('.' + fbClass);

    opts.forEach((opt, i) => {
      opt.addEventListener('click', () => {
        if (question.dataset.answered === 'true') return;
        question.dataset.answered = 'true';
        question.dataset.userChoice = i;

        opts.forEach((o, j) => {
          o.disabled = true;
          if (j === correct) o.classList.add('correct');
        });

        if (fb) {
          if (i === correct) {
            fb.textContent = '✓ Corretto.';
            fb.classList.add('show', 'ok');
          } else {
            opt.classList.add('wrong');
            fb.innerHTML = '✗ Risposta corretta: <strong>' +
              opts[correct].textContent.trim() + '</strong>';
            fb.classList.add('show', 'ko', 'wrong-fb');
          }
        }

        // Se è una domanda del quiz finale inline, ricalcola
        if (question.dataset.quiz === 'fin' || question.closest('#quizfinale')) {
          recalcInlineQuizScore();
        }
      });
    });
  }

  // .qd con .qo + .qfb
  document.querySelectorAll('.qd[data-correct]').forEach(q => {
    setupMiniQuiz(q, 'qopts', 'qo', 'qfb');
  });

  // .quiz-q con .qopt + .qfb
  document.querySelectorAll('.quiz-q[data-correct]').forEach(q => {
    setupMiniQuiz(q, 'quiz-opts', 'qopt', 'qfb');
  });

  // .mq-question con .mq-opt + .mq-feedback
  document.querySelectorAll('.mq-question[data-correct]').forEach(q => {
    setupMiniQuiz(q, 'mq-options', 'mq-opt', 'mq-feedback');
  });

  /* ────────  QUIZ FINALE INLINE (presente in Saba/Montale)  ────────── */
  // Saba: .qd[data-quiz="fin"] tutte insieme + #risFin + #puntFin + #msgFin
  // Montale: .quiz-q dentro #quizfinale + #risultatoFinale + #punteggioFinale + #messaggioFinale
  function recalcInlineQuizScore() {
    // Saba style
    const sabaQs = document.querySelectorAll('.qd[data-quiz="fin"]');
    if (sabaQs.length > 0) {
      let answered = 0, correct = 0;
      sabaQs.forEach(d => {
        if (d.dataset.answered === 'true') {
          answered++;
          if (parseInt(d.dataset.userChoice, 10) === parseInt(d.dataset.correct, 10)) correct++;
        }
      });
      if (answered < sabaQs.length) return;
      const pEl = document.getElementById('puntFin');
      const rEl = document.getElementById('risFin');
      const mEl = document.getElementById('msgFin');
      if (pEl) pEl.textContent = correct;
      if (rEl) rEl.classList.add('show');
      if (mEl) mEl.textContent = sabaFinalMessage(correct, sabaQs.length);
      if (rEl) setTimeout(() => rEl.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
      return;
    }

    // Montale style
    const montaleContainer = document.getElementById('quizfinale');
    if (montaleContainer) {
      const qs = montaleContainer.querySelectorAll('.quiz-q[data-correct]');
      let answered = 0, correct = 0;
      qs.forEach(d => {
        if (d.dataset.answered === 'true') {
          answered++;
          if (parseInt(d.dataset.userChoice, 10) === parseInt(d.dataset.correct, 10)) correct++;
        }
      });
      if (answered < qs.length) return;
      const pEl = document.getElementById('punteggioFinale');
      const rEl = document.getElementById('risultatoFinale');
      const mEl = document.getElementById('messaggioFinale');
      if (pEl) pEl.textContent = correct;
      if (rEl) rEl.classList.add('show');
      if (mEl) mEl.textContent = montaleFinalMessage(correct, qs.length);
      if (rEl) setTimeout(() => rEl.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  }

  function sabaFinalMessage(correct, total) {
    if (correct === total) return 'Saba lo conosci come la tasca. Vai sereno all\'interrogazione.';
    if (correct >= total - 2) return 'Quasi perfetto. Ripassa solo le 2–3 domande sbagliate.';
    if (correct >= Math.floor(total * 0.75)) return 'Buona base. Torna sui punti deboli e fai un giro veloce della poetica.';
    if (correct >= Math.floor(total * 0.6)) return 'Vai bene ma c\'è ancora terreno. Rileggi le sezioni che hai sbagliato.';
    if (correct >= Math.floor(total * 0.4)) return 'Sei a metà strada. Concentrati su poetica e testi chiave.';
    return 'Serve un altro ripasso completo. Riprendi dall\'inizio: i contenuti si capiscono, non si memorizzano.';
  }

  function montaleFinalMessage(correct, total) {
    if (correct === total) return 'Lo conosci a memoria. La divina Indifferenza ti sorride: puoi affrontare qualsiasi commissione.';
    if (correct >= 17) return 'Ottimo. Qualche dettaglio da ripassare, ma sei pronto/a.';
    if (correct >= 14) return 'Buona base. Rivedi le poesie che hai sbagliato e i concetti fondamentali.';
    if (correct >= 10) return 'A metà strada. Concentrati sulla sezione Poesie e sulla poetica.';
    return 'Serve un ripasso completo. Parti dall\'inizio: glossario, poi poetica, poi i testi uno per uno.';
  }

  /* ────────  QUIZ FINALE UNGARETTI (con render dinamico)  ─────────── */
  // Ungaretti file: function answer(qIdx, optIdx) globale + #quiz-container + #score-box
  // Lo lasciamo gestire allo script inline (è troppo specifico) — questo blocco è qui solo come ancoraggio.

  /* ────────────  Smooth scroll su anchor links  ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    a.addEventListener('click', e => {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ────────────  IntersectionObserver per animazioni  ───────────────── */
  if ('IntersectionObserver' in window) {
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          animObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.card, .opera-card, .author-card, .feature').forEach(el => {
      animObserver.observe(el);
    });

    /* Observer per .ai → aggiunge classe .visible */
    const aiObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          aiObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.ai').forEach(el => aiObserver.observe(el));
  } else {
    /* Fallback senza IntersectionObserver: mostra tutto subito */
    document.querySelectorAll('.ai').forEach(el => el.classList.add('visible'));
  }
})();
