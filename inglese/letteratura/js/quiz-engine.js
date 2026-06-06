/* =========================================================================
  quiz-engine.js — Motore quiz unificato per i 7 autori
   Architettura: home autori → modal modalità → quiz → risultati
   Dipende da: quiz-data.js (window.QUIZ_DATA)
   ========================================================================= */

(function () {
  'use strict';

  /* ────────────────────────  AUTHORS CONFIG (English Literature)  ──── */
  const AUTHORS = {
    /* ── ROMANTIC & GOTHIC ── */
    blake: {
      key: ‘blake’, name: ‘William Blake’, short: ‘Blake’, bodyClass: ‘blake’,
      storageKey: ‘enlit_blake_best’, storageTot: ‘enlit_blake_best_total’,
      footerQuote: ‘"Tyger Tyger, burning bright / In the forests of the night."’,
      footerCite: ‘— William Blake, Songs of Experience’
    },
    wordsworth: {
      key: ‘wordsworth’, name: ‘William Wordsworth’, short: ‘Wordsworth’, bodyClass: ‘wordsworth’,
      storageKey: ‘enlit_wordsworth_best’, storageTot: ‘enlit_wordsworth_best_total’,
      footerQuote: ‘"Poetry is the spontaneous overflow of powerful feelings."’,
      footerCite: ‘— William Wordsworth, Preface to Lyrical Ballads’
    },
    byron: {
      key: ‘byron’, name: ‘Lord Byron’, short: ‘Byron’, bodyClass: ‘byron’,
      storageKey: ‘enlit_byron_best’, storageTot: ‘enlit_byron_best_total’,
      footerQuote: ‘"She walks in beauty, like the night / Of cloudless climes and starry skies."’,
      footerCite: ‘— Lord Byron, She Walks in Beauty’
    },
    shelley: {
      key: ‘shelley’, name: ‘Mary Shelley’, short: ‘Mary Shelley’, bodyClass: ‘shelley’,
      storageKey: ‘enlit_shelley_best’, storageTot: ‘enlit_shelley_best_total’,
      footerQuote: ‘"Beware; for I am fearless, and therefore powerful."’,
      footerCite: ‘— Mary Shelley, Frankenstein’
    },
    shakespeare: {
      key: ‘shakespeare’, name: ‘William Shakespeare’, short: ‘Shakespeare’, bodyClass: ‘shakespeare’,
      storageKey: ‘enlit_shakespeare_best’, storageTot: ‘enlit_shakespeare_best_total’,
      footerQuote: ‘"To be, or not to be, that is the question."’,
      footerCite: ‘— William Shakespeare, Hamlet, Act III’
    },
    /* ── VICTORIAN ── */
    dickens: {
      key: ‘dickens’, name: ‘Charles Dickens’, short: ‘Dickens’, bodyClass: ‘dickens’,
      storageKey: ‘enlit_dickens_best’, storageTot: ‘enlit_dickens_best_total’,
      footerQuote: ‘"It was the best of times, it was the worst of times."’,
      footerCite: ‘— Charles Dickens, A Tale of Two Cities’
    },
    wilde: {
      key: ‘wilde’, name: ‘Oscar Wilde’, short: ‘Wilde’, bodyClass: ‘wilde’,
      storageKey: ‘enlit_wilde_best’, storageTot: ‘enlit_wilde_best_total’,
      footerQuote: ‘"The only way to get rid of a temptation is to yield to it."’,
      footerCite: ‘— Oscar Wilde, The Picture of Dorian Gray’
    },
    /* ── MODERNISM ── */
    woolf: {
      key: ‘woolf’, name: ‘Virginia Woolf’, short: ‘Woolf’, bodyClass: ‘woolf’,
      storageKey: ‘enlit_woolf_best’, storageTot: ‘enlit_woolf_best_total’,
      footerQuote: ‘"A woman must have money and a room of her own if she is to write fiction."’,
      footerCite: ‘— Virginia Woolf, A Room of One\’s Own’
    },
    joyce: {
      key: ‘joyce’, name: ‘James Joyce’, short: ‘Joyce’, bodyClass: ‘joyce’,
      storageKey: ‘enlit_joyce_best’, storageTot: ‘enlit_joyce_best_total’,
      footerQuote: ‘"His soul swooned slowly as he heard the snow falling faintly through the universe."’,
      footerCite: ‘— James Joyce, The Dead’
    },
    eliot: {
      key: ‘eliot’, name: ‘T.S. Eliot’, short: ‘T.S. Eliot’, bodyClass: ‘eliot’,
      storageKey: ‘enlit_eliot_best’, storageTot: ‘enlit_eliot_best_total’,
      footerQuote: ‘"April is the cruellest month, breeding / Lilacs out of the dead land."’,
      footerCite: ‘— T.S. Eliot, The Waste Land’
    },
    /* ── POST-WAR ── */
    orwell: {
      key: ‘orwell’, name: ‘George Orwell’, short: ‘Orwell’, bodyClass: ‘orwell’,
      storageKey: ‘enlit_orwell_best’, storageTot: ‘enlit_orwell_best_total’,
      footerQuote: ‘"Big Brother is watching you."’,
      footerCite: ‘— George Orwell, Nineteen Eighty-Four’
    },
    golding: {
      key: ‘golding’, name: ‘William Golding’, short: ‘Golding’, bodyClass: ‘golding’,
      storageKey: ‘enlit_golding_best’, storageTot: ‘enlit_golding_best_total’,
      footerQuote: ‘"Maybe there is a beast… maybe it\’s only us."’,
      footerCite: ‘— William Golding, Lord of the Flies’
    },
    beckett: {
      key: ‘beckett’, name: ‘Samuel Beckett’, short: ‘Beckett’, bodyClass: ‘beckett’,
      storageKey: ‘enlit_beckett_best’, storageTot: ‘enlit_beckett_best_total’,
      footerQuote: ‘"Nothing to be done."’,
      footerCite: ‘— Samuel Beckett, Waiting for Godot’
    },
    /* ── LITERARY MOVEMENTS ── */
    romanticism: {
      key: ‘romanticism’, name: ‘Romanticism’, short: ‘Romanticism’, bodyClass: ‘wordsworth’,
      storageKey: ‘enlit_romanticism_best’, storageTot: ‘enlit_romanticism_best_total’,
      footerQuote: ‘"What is now proved was once only imagined."’,
      footerCite: ‘— William Blake, The Marriage of Heaven and Hell’
    },
    victorianism: {
      key: ‘victorianism’, name: ‘Victorian Age’, short: ‘Victorianism’, bodyClass: ‘dickens’,
      storageKey: ‘enlit_victorianism_best’, storageTot: ‘enlit_victorianism_best_total’,
      footerQuote: ‘"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."’,
      footerCite: ‘— Jane Austen, Pride and Prejudice’
    },
    modernism: {
      key: ‘modernism’, name: ‘Modernism’, short: ‘Modernism’, bodyClass: ‘woolf’,
      storageKey: ‘enlit_modernism_best’, storageTot: ‘enlit_modernism_best_total’,
      footerQuote: ‘"I have measured out my life with coffee spoons."’,
      footerCite: ‘— T.S. Eliot, The Love Song of J. Alfred Prufrock’
    },
    dystopia: {
      key: ‘dystopia’, name: ‘Dystopian Fiction’, short: ‘Dystopia’, bodyClass: ‘orwell’,
      storageKey: ‘enlit_dystopia_best’, storageTot: ‘enlit_dystopia_best_total’,
      footerQuote: ‘"War is peace. Freedom is slavery. Ignorance is strength."’,
      footerCite: ‘— George Orwell, Nineteen Eighty-Four’
    },
    gothicnovel: {
      key: ‘gothicnovel’, name: ‘Gothic Novel’, short: ‘Gothic’, bodyClass: ‘shelley’,
      storageKey: ‘enlit_gothic_best’, storageTot: ‘enlit_gothic_best_total’,
      footerQuote: ‘"You have created a monster, and it will destroy you."’,
      footerCite: ‘— Mary Shelley, Frankenstein’
    }
  };

  /* ────────────────────────  STATO  ─────────────────────────────────── */
  const state = {
    author: null,
    mode: 'all',
    shuffle: true,
    timerOn: false,
    questions: [],
    current: 0,
    answers: [],
    timerInterval: null,
    timerSeconds: 1200,
    finished: false
  };

  const panelCfg = { mode: 'all', timer: false, shuffle: true, author: null };
  const QUIZ_SIZE = 10;

  /* ────────────────────────  UTILS  ─────────────────────────────────── */
  function shuffleArr(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ────────────────────────  SCREENS  ───────────────────────────────── */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ────────────────────────  HOME  ──────────────────────────────────── */
  function refreshBestScores() {
    Object.keys(AUTHORS).forEach(k => {
      const a = AUTHORS[k];
      const v = localStorage.getItem(a.storageKey);
      const t = localStorage.getItem(a.storageTot);
      const el = document.getElementById('best-' + k);
      if (el) el.textContent = v ? '★ Record: ' + v + '/' + t : '';
    });
  }

  function goHome() {
    clearInterval(state.timerInterval);
    document.body.className = '';
    refreshBestScores();
    showScreen('screen-home');
  }

  function confirmExit() {
    if (!state.finished && state.answers.some(a => a.answered)) {
      if (!confirm('Are you sure you want to quit? Your progress will be lost.')) return;
    }
    goHome();
  }

  /* ────────────────────────  PANNELLO MODALITÀ  ─────────────────────── */
  function openAuthorPanel(authorKey) {
    if (!window.QUIZ_DATA || !window.QUIZ_DATA[authorKey]) {
      alert('No quiz questions available for this author/movement.');
      return;
    }
    const author = AUTHORS[authorKey];
    panelCfg.author = authorKey;
    panelCfg.mode = 'all';
    panelCfg.timer = false;
    panelCfg.shuffle = true;

    document.querySelectorAll('.mode-opt').forEach(el => {
      el.classList.toggle('selected', el.dataset.mode === 'all');
    });
    const tBtn = document.getElementById('panel-timer-toggle');
    const tLbl = document.getElementById('panel-timer-label');
    if (tBtn) tBtn.classList.remove('on');
    if (tLbl) { tLbl.textContent = 'disabled'; tLbl.style.color = 'var(--gray)'; }
    const sBtn = document.getElementById('panel-shuffle-toggle');
    if (sBtn) sBtn.classList.add('on');

    const lbl = document.getElementById('panel-author-label');
    if (lbl) {
      lbl.textContent = author.name;
      const c = (({
        blake: '#5C7A2A', wordsworth: '#2A6B3A', byron: '#1A4A2A', shelley: '#3A3A7A',
        shakespeare: '#7A4A1A', dickens: '#8B5E1A', wilde: '#8B7A2A',
        woolf: '#1A5C8A', joyce: '#1A4A6B', eliot: '#2d5a87',
        orwell: '#7A1A1A', golding: '#5C1A28', beckett: '#4A1A7A',
        romanticism: '#2A6B3A', victorianism: '#7A4A1A', modernism: '#1A5C8A',
        dystopia: '#7A1A1A', gothicnovel: '#3A3A7A'
      })[authorKey] || 'var(--color-primary)');
      lbl.style.color = c;
    }

    const ov = document.getElementById('mode-overlay');
    if (ov) ov.classList.add('visible');
  }

  function closePanel() {
    const ov = document.getElementById('mode-overlay');
    if (ov) ov.classList.remove('visible');
  }

  function selectMode(el) {
    document.querySelectorAll('.mode-opt').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    panelCfg.mode = el.dataset.mode;
  }

  function togglePanelTimer() {
    panelCfg.timer = !panelCfg.timer;
    const btn = document.getElementById('panel-timer-toggle');
    const lbl = document.getElementById('panel-timer-label');
    if (btn) btn.classList.toggle('on', panelCfg.timer);
    if (lbl) {
      lbl.textContent = panelCfg.timer ? '20 min' : 'disabled';
      lbl.style.color = panelCfg.timer ? 'var(--red)' : 'var(--gray)';
    }
  }

  function togglePanelShuffle() {
    panelCfg.shuffle = !panelCfg.shuffle;
    const btn = document.getElementById('panel-shuffle-toggle');
    if (btn) btn.classList.toggle('on', panelCfg.shuffle);
  }

  function launchFromPanel() {
    closePanel();
    setTimeout(() => startQuiz(panelCfg.author, panelCfg.mode, panelCfg.timer, panelCfg.shuffle), 280);
  }

  /* ────────────────────────  AVVIO QUIZ  ────────────────────────────── */
  function getModeQuestions(allQ, mode) {
    let pool = [...allQ];
    switch (mode) {
      case 'quick':
        break;
      case 'mc-only':
        pool = pool.filter(q => q.type === 'mc' || q.type === 'tf');
        break;
      case 'hard':
        pool = pool.filter(q => q.type === 'open' || q.type === 'tf');
        break;
      default:
        break;
    }
    return shuffleArr(pool).slice(0, QUIZ_SIZE);
  }

  function startQuiz(authorKey, mode, timerOn, shuffle) {
    const author = AUTHORS[authorKey];
    const data = (window.QUIZ_DATA || {})[authorKey] || [];

    state.author = authorKey;
    state.mode = mode;
    state.timerOn = timerOn;
    state.finished = false;
    state.timerSeconds = 20 * 60;
    state.current = 0;

    document.body.className = author.bodyClass;

    let qs = getModeQuestions(data, mode);
    if (!shuffle) qs = [...qs].sort((a, b) => data.indexOf(a) - data.indexOf(b));
    state.questions = qs;
    state.answers = qs.map(() => ({
      answered: false, correct: null, openShown: false,
      selfScore: null, chosenIndex: undefined, userText: ''
    }));

    const lblEl = document.getElementById('quiz-author-label');
    if (lblEl) lblEl.textContent = author.short;
    const totEl = document.getElementById('qTot');
    if (totEl) totEl.textContent = qs.length;

    buildDotMap();
    showScreen('screen-quiz');
    renderQuestion();
    updateHeader();
    updateScoreLive();

    clearInterval(state.timerInterval);
    const td = document.getElementById('timer-disp');
    if (td) td.classList.remove('on', 'warn');
    if (timerOn) startTimer();
  }

  /* ────────────────────────  TIMER  ─────────────────────────────────── */
  function startTimer() {
    const td = document.getElementById('timer-disp');
    if (td) td.classList.add('on');
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      updateTimerDisplay();
      if (state.timerSeconds <= 120 && td) td.classList.add('warn');
      if (state.timerSeconds <= 0) {
        clearInterval(state.timerInterval);
        finishQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const td = document.getElementById('timer-disp');
    if (!td) return;
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    td.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  /* ────────────────────────  RENDER DOMANDA  ────────────────────────── */
  function renderQuestion() {
    const q = state.questions[state.current];
    const ans = state.answers[state.current];
    const card = document.getElementById('q-card');
    if (!q || !card) return;

    const typeInfo = ({
      mc:   { label: 'Risposta multipla', cls: 'mc' },
      tf:   { label: 'Vero / Falso',      cls: 'tf' },
      open: { label: 'Domanda aperta',    cls: 'open' }
    })[q.type];

    let html = `
      <div class="q-meta">
        <span class="q-badge ${typeInfo.cls}">${typeInfo.label}</span>
        <span class="q-topic">${escHtml(q.topic || '')}</span>
      </div>
      <div class="q-num">Domanda ${state.current + 1} di ${state.questions.length}</div>
      <div class="q-text">${q.text}</div>
    `;

    if (q.type === 'mc' || q.type === 'tf') {
      html += `<div class="answers">`;
      const letters = ['A', 'B', 'C', 'D'];
      if (!q.options || !Array.isArray(q.options)) {
        console.warn('[quiz] domanda senza options:', q);
        card.innerHTML = html + `<p style="padding:1rem;font-size:.85rem;color:var(--ink-muted)">Domanda non disponibile — passa alla prossima.</p>`;
        return;
      }
      q.options.forEach((opt, i) => {
        let cls = '';
        if (ans.answered) {
          if (i === q.correct) cls = 'correct';
          else if (i === ans.chosenIndex) cls = 'wrong';
        }
        const dis = ans.answered ? 'disabled' : '';
        html += `
          <button class="ans-btn ${cls}" ${dis} data-i="${i}">
            <span class="ans-letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>`;
      });
      html += `</div>`;

      if (ans.answered) {
        const ok = ans.chosenIndex === q.correct;
        html += `
          <div class="feedback-box ${ok ? 'ok' : 'ko'} show">
            <div class="fb-text">
              <span class="fb-icon">${ok ? '✓' : '✗'}</span>
              ${ok ? 'Risposta corretta!' : 'Risposta errata — corretta: ' + q.options[q.correct]}
            </div>
            ${q.explanation ? `<div class="fb-expl">${q.explanation}</div>` : ''}
          </div>`;
      }
    } else {
      html += `
        <div class="open-wrap">
          <textarea class="open-ta" id="open-ta" placeholder="Scrivi la tua risposta…" ${ans.openShown ? 'disabled' : ''}>${escHtml(ans.userText || '')}</textarea>
          <button class="btn-reveal" id="btn-reveal" ${ans.openShown ? 'style="display:none"' : ''}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Rivela risposta modello
          </button>
        </div>
        <div class="model-ans ${ans.openShown ? 'show' : ''}" id="model-ans">
          <div class="ma-label">Risposta modello</div>
          <div class="ma-text">${q.modelAnswer}</div>
          <div class="ma-label" style="margin-top:14px">Parole chiave attese</div>
          <div class="kw-row">${(q.keywords || []).map(k => `<span class="kw">${escHtml(k)}</span>`).join('')}</div>
        </div>
        <div class="self-score ${ans.openShown ? 'show' : ''}" id="self-score">
          <div class="ss-label">Auto-valutazione · com'è andata?</div>
          <div class="ss-btns">
            <button class="ss-btn bad ${ans.selfScore === 'bad' ? 'chosen' : ''}" data-self="bad">✗ Non sapevo / incompleta</button>
            <button class="ss-btn good ${ans.selfScore === 'good' ? 'chosen' : ''}" data-self="good">✓ Sapevo / sostanzialmente corretta</button>
          </div>
        </div>`;
    }

    const isLast = state.current === state.questions.length - 1;
    const canNext = ans.answered || (q.type === 'open' && ans.openShown && ans.selfScore);
    html += `
      <div class="q-nav">
        <button class="btn-nav" data-goto="${state.current - 1}" ${state.current === 0 ? 'disabled' : ''}>← Precedente</button>
        ${isLast
          ? `<button class="btn-nav primary" id="btn-finish" ${!canNext ? 'disabled' : ''}>Vedi risultati →</button>`
          : `<button class="btn-nav primary" data-goto="${state.current + 1}" ${!canNext ? 'disabled' : ''}>Prossima →</button>`
        }
      </div>`;

    card.innerHTML = html;

    // Event delegation
    card.querySelectorAll('.ans-btn').forEach(b => {
      b.addEventListener('click', e => chooseAnswer(parseInt(b.dataset.i, 10)));
    });
    const ta = document.getElementById('open-ta');
    if (ta) ta.addEventListener('input', () => { state.answers[state.current].userText = ta.value; });
    const reveal = document.getElementById('btn-reveal');
    if (reveal) reveal.addEventListener('click', revealAnswer);
    card.querySelectorAll('.ss-btn').forEach(b => {
      b.addEventListener('click', () => selfScore(b.dataset.self));
    });
    card.querySelectorAll('.btn-nav[data-goto]').forEach(b => {
      b.addEventListener('click', () => goTo(parseInt(b.dataset.goto, 10)));
    });
    const finishBtn = document.getElementById('btn-finish');
    if (finishBtn) finishBtn.addEventListener('click', finishQuiz);

    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      card.style.transition = 'opacity .32s ease, transform .32s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });

    updateDotMap();
  }

  /* ────────────────────────  RISPOSTA  ──────────────────────────────── */
  function chooseAnswer(idx) {
    const ans = state.answers[state.current];
    if (ans.answered) return;
    ans.answered = true;
    ans.chosenIndex = idx;
    ans.correct = (idx === state.questions[state.current].correct);
    updateScoreLive();
    renderQuestion();
  }

  function revealAnswer() {
    const ta = document.getElementById('open-ta');
    if (ta) state.answers[state.current].userText = ta.value;
    state.answers[state.current].answered = true;
    state.answers[state.current].openShown = true;
    renderQuestion();
  }

  function selfScore(val) {
    const ans = state.answers[state.current];
    ans.selfScore = val;
    ans.correct = (val === 'good');
    updateScoreLive();
    renderQuestion();
  }

  function goTo(idx) {
    if (idx < 0 || idx >= state.questions.length) return;
    state.current = idx;
    renderQuestion();
    updateHeader();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ────────────────────────  HEADER + MAP  ──────────────────────────── */
  function updateHeader() {
    const n = state.questions.length;
    const c = state.current + 1;
    const curEl = document.getElementById('qCur');
    const totEl = document.getElementById('qTot');
    if (curEl) curEl.textContent = c;
    if (totEl) totEl.textContent = n;
    const pct = n ? (c / n) * 100 : 0;
    const pf = document.getElementById('q-prog-fill');
    if (pf) pf.style.width = pct + '%';
    const tp = document.getElementById('top-progress-fill') || document.getElementById('pb');
    if (tp) tp.style.width = pct + '%';
  }

  function updateScoreLive() {
    const ok = state.answers.filter(a => a.answered && a.correct === true).length;
    const el = document.getElementById('score-live');
    if (el) el.textContent = ok;
  }

  function buildDotMap() {
    const wrap = document.getElementById('q-dots');
    if (!wrap) return;
    wrap.innerHTML = '';
    state.questions.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'q-dot';
      d.textContent = i + 1;
      d.onclick = () => goTo(i);
      wrap.appendChild(d);
    });
  }

  function updateDotMap() {
    document.querySelectorAll('.q-dot').forEach((dot, i) => {
      dot.className = 'q-dot';
      if (i === state.current) {
        dot.classList.add('cur');
      } else {
        const a = state.answers[i];
        if (a && a.answered) {
          if (state.questions[i].type === 'open') dot.classList.add('o');
          else dot.classList.add(a.correct ? 'c' : 'w');
        }
      }
    });
  }

  /* ────────────────────────  FINE QUIZ  ─────────────────────────────── */
  function finishQuiz() {
    clearInterval(state.timerInterval);
    state.finished = true;

    const author = AUTHORS[state.author];
    const total = state.questions.length;
    const correct = state.answers.filter(a => a.answered && a.correct === true).length;
    const wrong = state.answers.filter(a => a.answered && a.correct === false).length;
    const openCnt = state.answers.filter((_, i) => state.questions[i].type === 'open').length;
    const pct = total > 0 ? correct / total : 0;

    let grade, msg;
    if (pct >= .90) { grade = '<em>Eccellente</em>'; msg = author.short + ' lo conosci perfettamente. Sei pronto per qualsiasi interrogazione.'; }
    else if (pct >= .75) { grade = '<em>Ottimo</em>'; msg = 'Ottima preparazione. Ripassa solo le domande sbagliate.'; }
    else if (pct >= .60) { grade = 'Discreto'; msg = 'Buona base, ma ci sono zone d\'ombra. Torna sulla poetica e sui testi.'; }
    else { grade = 'Insufficiente'; msg = 'Serve un ripasso approfondito. Riparti dalla vita, poi la poetica, poi i testi.'; }

    const circ = 2 * Math.PI * 56;
    const offset = circ - pct * circ;

    const prev = parseInt(localStorage.getItem(author.storageKey) || '0', 10);
    if (correct > prev) {
      localStorage.setItem(author.storageKey, correct);
      localStorage.setItem(author.storageTot, total);
    }

    showScreen('screen-results');

    setTimeout(() => {
      const ebEl = document.getElementById('res-eyebrow');
      if (ebEl) ebEl.textContent = 'Risultato · Quiz ' + author.short;
      const rsEl = document.getElementById('ring-score');
      if (rsEl) rsEl.textContent = correct;
      const rtEl = document.getElementById('ring-total');
      if (rtEl) rtEl.textContent = '/' + total;
      const grEl = document.getElementById('res-grade');
      if (grEl) grEl.innerHTML = grade;
      const msgEl = document.getElementById('res-msg');
      if (msgEl) msgEl.textContent = msg;

      const okEl = document.getElementById('rb-ok');
      const koEl = document.getElementById('rb-ko');
      const opEl = document.getElementById('rb-op');
      if (okEl) okEl.textContent = correct;
      if (koEl) koEl.textContent = wrong;
      if (opEl) opEl.textContent = openCnt;

      const ring = document.getElementById('ring-fill');
      if (ring) {
        ring.style.strokeDashoffset = offset;
        ring.style.stroke = pct >= .90 ? '#b88a3e' :
                            pct >= .75 ? '#4a6b3a' :
                            pct >= .60 ? '#7a6a40' : '#7a1f1f';
      }

      const bestVal = parseInt(localStorage.getItem(author.storageKey) || '0', 10);
      const bestTot = parseInt(localStorage.getItem(author.storageTot) || total, 10);
      const brEl = document.getElementById('best-record');
      if (brEl) brEl.textContent = '★ Record personale: ' + bestVal + '/' + bestTot;

      const fqEl = document.getElementById('footer-q');
      if (fqEl) fqEl.innerHTML = author.footerQuote + '<cite>' + author.footerCite + '</cite>';

      buildReviewList();
      const tp = document.getElementById('top-progress-fill') || document.getElementById('pb');
      if (tp) tp.style.width = '100%';
    }, 280);
  }

  /* ────────────────────────  REVISIONE  ─────────────────────────────── */
  function buildReviewList() {
    const list = document.getElementById('rev-list');
    if (!list) return;
    list.innerHTML = '';

    state.questions.forEach((q, i) => {
      const ans = state.answers[i];
      let sCls, sIcon;
      if (!ans.answered)     { sCls = 'o'; sIcon = '?'; }
      else if (q.type === 'open') { sCls = ans.correct ? 'c' : 'o'; sIcon = ans.correct ? '✓' : '·'; }
      else if (ans.correct)  { sCls = 'c'; sIcon = '✓'; }
      else                   { sCls = 'w'; sIcon = '✗'; }

      let body = '';
      if (q.type === 'mc' || q.type === 'tf') {
        if (ans.answered && !ans.correct) {
          body += `<div style="color:var(--red-dark);font-size:13px;margin-bottom:8px"><strong>Tua risposta:</strong> ${escHtml(q.options[ans.chosenIndex] || '—')}</div>`;
        }
        body += `<div class="rev-correct-lbl">Risposta corretta</div>
                 <div class="rev-correct-txt">${q.options[q.correct]}</div>`;
        if (q.explanation) {
          body += `<div style="margin-top:10px;font-family:'Cormorant Garamond',serif;font-size:15px;font-style:italic;color:var(--ink2);line-height:1.55">${q.explanation}</div>`;
        }
      } else {
        body = `<div class="rev-correct-lbl">Risposta modello</div>
                <div class="rev-correct-txt">${q.modelAnswer}</div>
                <div class="rev-correct-lbl" style="margin-top:12px">Parole chiave</div>
                <div class="kw-row" style="margin-top:4px">${(q.keywords || []).map(k => `<span class="kw" style="background:rgba(122,31,31,.1);color:var(--red-dark)">${escHtml(k)}</span>`).join('')}</div>`;
      }

      const shortTxt = q.text.length > 100 ? q.text.slice(0, 100) + '…' : q.text;
      const item = document.createElement('div');
      item.className = 'rev-item';
      item.innerHTML = `
        <div class="rev-head">
          <div class="rev-st ${sCls}">${sIcon}</div>
          <div class="rev-qn">#${i + 1}</div>
          <div class="rev-qt">${shortTxt}</div>
          <div class="rev-chev">▼</div>
        </div>
        <div class="rev-body">${body}</div>`;
      item.querySelector('.rev-head').addEventListener('click', () => {
        item.classList.toggle('open');
      });
      list.appendChild(item);
    });
  }

  function restartQuiz() {
    clearInterval(state.timerInterval);
    if (state.author) startQuiz(state.author, state.mode, state.timerOn, panelCfg.shuffle);
  }

  /* ────────────────────────  ESPORTAZIONI  ──────────────────────────── */
  window.QuizApp = {
    openAuthorPanel,
    closePanel,
    selectMode,
    togglePanelTimer,
    togglePanelShuffle,
    launchFromPanel,
    confirmExit,
    goHome,
    restartQuiz,
    refreshBestScores,
    AUTHORS
  };

  /* ────────────────────────  INIT  ──────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    // Mostra conteggi sulla home
    if (window.QUIZ_DATA) {
      ['saba', 'ungaretti', 'montale', 'svevo', 'pirandello', 'dannunzio', 'pascoli', 'verga', 'campana'].forEach(k => {
        const el = document.getElementById('cs-' + k + '-total');
        if (el && window.QUIZ_DATA[k]) el.textContent = window.QUIZ_DATA[k].length;
      });
    }
    refreshBestScores();
    showScreen('screen-home');

    // ── Avvio diretto da pages/quiz.html (parametri URL) ──────────────
    // URL: quiz/quiz.html?key=verga&mode=all&timer=0&shuffle=1
    const sp = new URLSearchParams(location.search);
    const urlKey  = sp.get('key');
    const urlMode = sp.get('mode');
    if (urlKey && urlMode && window.QUIZ_DATA && window.QUIZ_DATA[urlKey]) {
      const urlTimer  = sp.get('timer')  === '1';
      const urlShuf   = sp.get('shuffle') !== '0';
      setTimeout(() => startQuiz(urlKey, urlMode, urlTimer, urlShuf), 80);
    } else {
      // Fallback: hash legacy (#authorKey) → apre il panel di selezione modalità
      const hash = location.hash.slice(1);
      if (hash && window.QUIZ_DATA && window.QUIZ_DATA[hash]) {
        setTimeout(() => openAuthorPanel(hash), 80);
      }
    }

    // Wiring statico
    const ov = document.getElementById('mode-overlay');
    if (ov) {
      ov.addEventListener('click', e => { if (e.target === ov) closePanel(); });
    }
  });
})();
