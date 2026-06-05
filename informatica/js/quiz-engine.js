/* =========================================================================
   quiz-engine.js — Motore quiz Informatica
   Architettura: hub moduli → modal modalità → quiz → risultati
   Dipende da: quiz-data.js (window.QUIZ_DATA)
   ========================================================================= */

(function () {
  'use strict';

  /* ────────────────────────  CONFIG MODULI  ──────────────────────────── */
  const AUTHORS = {
    "basi-di-dati": {
      key: 'basi-di-dati',
      name: 'Basi di Dati',
      short: 'Basi di Dati',
      bodyClass: 'basi-di-dati',
      storageKey: 'q_basi_best',
      storageTot: 'q_basi_best_total',
      footerQuote: '«In Dio ci fidiamo; tutti gli altri portino dati.»',
      footerCite: '— W. Edwards Deming, statistico e padre della gestione della qualità'
    },
    "php": {
      key: 'php',
      name: 'PHP lato Server',
      short: 'PHP',
      bodyClass: 'php',
      storageKey: 'q_php_best',
      storageTot: 'q_php_best_total',
      footerQuote: '«Non sono un vero programmatore. Assemblo cose finché funzionano, poi vado avanti.»',
      footerCite: '— Rasmus Lerdorf, creatore di PHP'
    },
    "javascript": {
      key: 'javascript',
      name: 'JavaScript lato Client',
      short: 'JavaScript',
      bodyClass: 'javascript',
      storageKey: 'q_js_best',
      storageTot: 'q_js_best_total',
      footerQuote: '«JavaScript è il linguaggio di programmazione più frainteso al mondo.»',
      footerCite: '— Douglas Crockford, autore di "JavaScript: The Good Parts"'
    },
    "sql": {
      key: 'sql',
      name: 'SQL',
      short: 'SQL',
      bodyClass: 'sql',
      storageKey: 'q_sql_best',
      storageTot: 'q_sql_best_total',
      footerQuote: '«I programmatori scadenti si preoccupano del codice. I buoni si preoccupano delle strutture dati e delle loro relazioni.»',
      footerCite: '— Linus Torvalds, creatore del kernel Linux'
    },
    "applicazioni-web": {
      key: 'applicazioni-web',
      name: 'Applicazioni Web',
      short: 'App Web',
      bodyClass: 'applicazioni-web',
      storageKey: 'q_appweb_best',
      storageTot: 'q_appweb_best_total',
      footerQuote: '«Il Web è più un\'invenzione sociale che tecnica. L\'ho progettato per un effetto sociale — per aiutare le persone a lavorare insieme — non come giocattolo tecnologico.»',
      footerCite: '— Tim Berners-Lee, inventore del World Wide Web'
    },
    "progettazione-db": {
      key: 'progettazione-db',
      name: 'Progettazione DB',
      short: 'Progettazione DB',
      bodyClass: 'progettazione-db',
      storageKey: 'q_progdb_best',
      storageTot: 'q_progdb_best_total',
      footerQuote: '«Ci sono solo due cose difficili in informatica: l\'invalidazione della cache e dare nomi alle cose.»',
      footerCite: '— Phil Karlton, ingegnere software Netscape'
    },
    "sicurezza": {
      key: 'sicurezza',
      name: 'Sicurezza Web',
      short: 'Sicurezza',
      bodyClass: 'sicurezza',
      storageKey: 'q_sicurezza_best',
      storageTot: 'q_sicurezza_best_total',
      footerQuote: '«La sicurezza non è un prodotto, ma un processo.»',
      footerCite: '— Bruce Schneier, crittografo e esperto di sicurezza'
    },
    "algoritmi": {
      key: 'algoritmi',
      name: 'Algoritmi e Strutture Dati',
      short: 'Algoritmi',
      bodyClass: 'algoritmi',
      storageKey: 'q_algoritmi_best',
      storageTot: 'q_algoritmi_best_total',
      footerQuote: '«Un algoritmo deve essere visto per essere creduto.»',
      footerCite: '— Donald Knuth, autore di "The Art of Computer Programming"'
    },
    "api-rest": {
      key: 'api-rest',
      name: 'API REST',
      short: 'API REST',
      bodyClass: 'api-rest',
      storageKey: 'q_apirest_best',
      storageTot: 'q_apirest_best_total',
      footerQuote: '«Il Web è più un\'invenzione sociale che tecnica. L\'ho progettato per un effetto sociale.»',
      footerCite: '— Tim Berners-Lee, inventore del World Wide Web'
    },
    "db-avanzato": {
      key: 'db-avanzato',
      name: 'DB Avanzato',
      short: 'DB Avanzato',
      bodyClass: 'db-avanzato',
      storageKey: 'q_dbavanz_best',
      storageTot: 'q_dbavanz_best_total',
      footerQuote: '«Senza dati sei solo un\'altra persona con un\'opinione.»',
      footerCite: '— W. Edwards Deming, statistico e teorico della qualità'
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
      if (!confirm('Sei sicuro di voler uscire? Il progresso andrà perso.')) return;
    }
    goHome();
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
    if (pool.length === 0) pool = [...allQ];
    return shuffleArr(pool).slice(0, QUIZ_SIZE);
  }

  function startQuiz(authorKey, mode, timerOn, shuffle) {
    const author = AUTHORS[authorKey];
    if (!author) return;
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
    })[q.type] || { label: q.type, cls: q.type };

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
            <span>${escHtml(opt)}</span>
          </button>`;
      });
      html += `</div>`;

      if (ans.answered) {
        const ok = ans.chosenIndex === q.correct;
        html += `
          <div class="feedback-box ${ok ? 'ok' : 'ko'} show">
            <div class="fb-text">
              ${ok ? '✓ Risposta corretta!' : '✗ Risposta errata — corretta: ' + escHtml(q.options[q.correct])}
            </div>
            ${q.explanation ? `<div class="fb-expl">${escHtml(q.explanation)}</div>` : ''}
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
          <div class="ma-text">${escHtml(q.modelAnswer)}</div>
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

    card.querySelectorAll('.ans-btn').forEach(b => {
      b.addEventListener('click', () => chooseAnswer(parseInt(b.dataset.i, 10)));
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
    const tp = document.getElementById('pb');
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
    if (pct >= .90) { grade = '<em>Eccellente</em>'; msg = author.short + ': argomento padroneggiato. Sei pronto per l\'esame.'; }
    else if (pct >= .75) { grade = '<em>Ottimo</em>'; msg = 'Ottima preparazione. Ripassa solo le domande sbagliate.'; }
    else if (pct >= .60) { grade = 'Discreto'; msg = 'Buona base, ma ci sono lacune. Torna ai concetti chiave e riprova.'; }
    else { grade = 'Insufficiente'; msg = 'Serve un ripasso approfondito. Riparti dalla teoria, poi prova le domande aperte.'; }

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
      if (ebEl) ebEl.textContent = 'Risultato · ' + author.name;
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
        ring.style.stroke = pct >= .90 ? '#C9A84C' :
                            pct >= .75 ? '#2A6B9A' :
                            pct >= .60 ? '#1A4A6B' : '#7a1f1f';
      }

      const bestVal = parseInt(localStorage.getItem(author.storageKey) || '0', 10);
      const bestTot = parseInt(localStorage.getItem(author.storageTot) || total, 10);
      const brEl = document.getElementById('best-record');
      if (brEl) brEl.textContent = '★ Record personale: ' + bestVal + '/' + bestTot;

      const fqEl = document.getElementById('footer-q');
      if (fqEl) fqEl.innerHTML = author.footerQuote + '<cite>' + author.footerCite + '</cite>';

      buildReviewList();
      const tp = document.getElementById('pb');
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
      if (!ans.answered)          { sCls = 'o'; sIcon = '?'; }
      else if (q.type === 'open') { sCls = ans.correct ? 'c' : 'o'; sIcon = ans.correct ? '✓' : '·'; }
      else if (ans.correct)       { sCls = 'c'; sIcon = '✓'; }
      else                        { sCls = 'w'; sIcon = '✗'; }

      let body = '';
      if (q.type === 'mc' || q.type === 'tf') {
        if (ans.answered && !ans.correct) {
          body += `<div style="font-size:13px;margin-bottom:8px"><strong>Tua risposta:</strong> ${escHtml(q.options[ans.chosenIndex] || '—')}</div>`;
        }
        body += `<div class="rev-correct-lbl">Risposta corretta</div>
                 <div class="rev-correct-txt">${escHtml(q.options[q.correct])}</div>`;
        if (q.explanation) {
          body += `<div style="margin-top:10px;font-family:'Cormorant Garamond',serif;font-size:15px;font-style:italic;color:var(--ink-soft);line-height:1.55">${escHtml(q.explanation)}</div>`;
        }
      } else {
        body = `<div class="rev-correct-lbl">Risposta modello</div>
                <div class="rev-correct-txt">${escHtml(q.modelAnswer)}</div>
                <div class="rev-correct-lbl" style="margin-top:12px">Parole chiave</div>
                <div class="kw-row" style="margin-top:4px">${(q.keywords || []).map(k => `<span class="kw">${escHtml(k)}</span>`).join('')}</div>`;
      }

      const shortTxt = q.text.length > 100 ? q.text.slice(0, 100) + '…' : q.text;
      const item = document.createElement('div');
      item.className = 'rev-item';
      item.innerHTML = `
        <div class="rev-head">
          <div class="rev-st ${sCls}">${sIcon}</div>
          <div class="rev-qn">#${i + 1}</div>
          <div class="rev-qt">${escHtml(shortTxt)}</div>
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
    startQuiz,
    confirmExit,
    goHome,
    restartQuiz,
    refreshBestScores,
    AUTHORS
  };

  /* ────────────────────────  INIT  ──────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    refreshBestScores();
    showScreen('screen-home');

    const sp = new URLSearchParams(location.search);
    const urlKey  = sp.get('key');
    const urlMode = sp.get('mode');
    if (urlKey && urlMode && window.QUIZ_DATA && window.QUIZ_DATA[urlKey]) {
      const urlTimer = sp.get('timer')  === '1';
      const urlShuf  = sp.get('shuffle') !== '0';
      setTimeout(() => startQuiz(urlKey, urlMode, urlTimer, urlShuf), 80);
    }

    const ov = document.getElementById('mode-overlay');
    if (ov) {
      ov.addEventListener('click', e => { if (e.target === ov) closePanel(); });
    }
  });

  function closePanel() {
    const ov = document.getElementById('mode-overlay');
    if (ov) ov.classList.remove('visible');
  }
  window.closePanel = closePanel;
})();
