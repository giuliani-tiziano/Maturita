/* =========================================================================
  quiz-engine.js — Motore quiz unificato per i 7 autori
   Architettura: home autori → modal modalità → quiz → risultati
   Dipende da: quiz-data.js (window.QUIZ_DATA)
   ========================================================================= */

(function () {
  'use strict';

  /* ────────────────────────  CONFIG AUTORI  ─────────────────────────── */
  const AUTHORS = {
    saba: {
      key: 'saba',
      name: 'Umberto Saba',
      short: 'Saba',
      bodyClass: 'saba',
      storageKey: 'q_saba_best',
      storageTot: 'q_saba_best_total',
      footerQuote: '«Ho attraversata tutta la città. / Poi ho salita un\'erta… / un cantuccio in cui solo / siedo.»',
      footerCite: '— Umberto Saba, Trieste'
    },
    ungaretti: {
      key: 'ungaretti',
      name: 'Giuseppe Ungaretti',
      short: 'Ungaretti',
      bodyClass: 'ungaretti',
      storageKey: 'q_ung_best',
      storageTot: 'q_ung_best_total',
      footerQuote: '«Di questa poesia / mi resta / quel nulla / d\'inesauribile segreto.»',
      footerCite: '— Giuseppe Ungaretti, Il porto sepolto'
    },
    montale: {
      key: 'montale',
      name: 'Eugenio Montale',
      short: 'Montale',
      bodyClass: 'montale',
      storageKey: 'q_mon_best',
      storageTot: 'q_mon_best_total',
      footerQuote: '«Codesto solo oggi possiamo dirti, / ciò che non siamo, ciò che non vogliamo.»',
      footerCite: '— Eugenio Montale, Non chiederci la parola'
    },
    svevo: {
      key: 'svevo',
      name: 'Italo Svevo',
      short: 'Svevo',
      bodyClass: 'svevo',
      storageKey: 'q_svevo_best',
      storageTot: 'q_svevo_best_total',
      footerQuote: '«La vita o la si vive o la si scrive.»',
      footerCite: '— Italo Svevo, Il fu Mattia Pascal (in epigrafe)'
    },
    pirandello: {
      key: 'pirandello',
      name: 'Luigi Pirandello',
      short: 'Pirandello',
      bodyClass: 'pirandello',
      storageKey: 'q_pir_best',
      storageTot: 'q_pir_best_total',
      footerQuote: '«Uno, nessuno e centomila: non è una condanna, è una libertà. La più difficile delle libertà.»',
      footerCite: '— Luigi Pirandello'
    },
    dannunzio: {
      key: 'dannunzio',
      name: 'Gabriele D\'Annunzio',
      short: 'D\'Annunzio',
      bodyClass: 'dannunzio',
      storageKey: 'q_dan_best',
      storageTot: 'q_dan_best_total',
      footerQuote: '«Bisogna fare la propria vita come si fa un\'opera d\'arte.»',
      footerCite: '— Gabriele D\'Annunzio, Il piacere'
    },
    pascoli: {
      key: "pascoli",
      name: "Giovanni Pascoli",
      short: "Pascoli",
      bodyClass: "pascoli",
      storageKey: "q_pascoli_best",
      storageTot: "q_pascoli_best_total",
      footerQuote: "«E s’aprono i fiori notturni, nell’ora che penso a’ miei cari.»",
      footerCite: "— Giovanni Pascoli, Il gelsomino notturno"
    },
    verga: {
      key: "verga",
      name: "Giovanni Verga",
      short: "Verga",
      bodyClass: "verga",
      storageKey: "q_verga_best",
      storageTot: "q_verga_best_total",
      footerQuote: "«Solo l’osservatore, travolto anch’esso dalla fiumana, ha il diritto di interessarsi ai vinti.»",
      footerCite: "— Giovanni Verga, Prefazione ai Malavoglia"
    },
    campana: {
      key: "campana",
      name: "Dino Campana",
      short: "Campana",
      bodyClass: "campana",
      storageKey: "q_campana_best",
      storageTot: "q_campana_best_total",
      footerQuote: "«Sempre una piaga rossa languente.»",
      footerCite: "— Dino Campana, L’invetriata"
    },

    carducci: {
      key: "carducci", name: "Giosuè Carducci", short: "Carducci",
      bodyClass: "carducci", storageKey: "q_carducci_best", storageTot: "q_carducci_best_total",
      footerQuote: "«Meglio oprare che lamentarsi.»", footerCite: "— Giosuè Carducci"
    },
    marinetti: {
      key: "marinetti", name: "Filippo Tommaso Marinetti", short: "Marinetti",
      bodyClass: "marinetti", storageKey: "q_marinetti_best", storageTot: "q_marinetti_best_total",
      footerQuote: "«Non v'è più bellezza se non nella lotta.»",
      footerCite: "— F.T. Marinetti, Manifesto del Futurismo, 1909"
    },
    quasimodo: {
      key: "quasimodo", name: "Salvatore Quasimodo", short: "Quasimodo",
      bodyClass: "quasimodo", storageKey: "q_quasimodo_best", storageTot: "q_quasimodo_best_total",
      footerQuote: "«Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed è subito sera.»",
      footerCite: "— Salvatore Quasimodo, Ed è subito sera, 1930"
    },
    fenoglio: {
      key: "fenoglio", name: "Beppe Fenoglio", short: "Fenoglio",
      bodyClass: "fenoglio", storageKey: "q_fenoglio_best", storageTot: "q_fenoglio_best_total",
      footerQuote: "«Passò il Tanaro in piena come un esercito.»",
      footerCite: "— Beppe Fenoglio, Il partigiano Johnny"
    },

    /* ── CORRENTI LETTERARIE ── */
    carduccianesimo: {
      key: "carduccianesimo", name: "Il Carduccianesimo", short: "Carduccianesimo",
      bodyClass: "verga", storageKey: "q_carduccianesimo_best", storageTot: "q_carduccianesimo_best_total",
      footerQuote: "«Salute, o Satana, o ribellione, o forza vindice de la ragione!»",
      footerCite: "— Giosuè Carducci, Inno a Satana"
    },
    naturalismo: {
      key: "naturalismo",
      name: "Il Naturalismo",
      short: "Naturalismo",
      bodyClass: "verga",
      storageKey: "q_naturalismo_best",
      storageTot: "q_naturalismo_best_total",
      footerQuote: "«Il romanziere sperimentale fa muovere i personaggi secondo le leggi che la scienza ha scoperto.»",
      footerCite: "— Emile Zola, Il romanzo sperimentale"
    },
    verismo: {
      key: "verismo",
      name: "Il Verismo",
      short: "Verismo",
      bodyClass: "campana",
      storageKey: "q_verismo_best",
      storageTot: "q_verismo_best_total",
      footerQuote: "«La fiumana del progresso porta via tutti — vincitori e vinti.»",
      footerCite: "— Giovanni Verga, Prefazione ai Malavoglia"
    },
    decadentismo: {
      key: "decadentismo",
      name: "Il Decadentismo",
      short: "Decadentismo",
      bodyClass: "dannunzio",
      storageKey: "q_decadentismo_best",
      storageTot: "q_decadentismo_best_total",
      footerQuote: "«La Natura e un tempio dove viventi pilastri lasciano sfuggire confuse parole.»",
      footerCite: "— Charles Baudelaire, Corrispondenze"
    },
    simbolismo: {
      key: "simbolismo",
      name: "Il Simbolismo",
      short: "Simbolismo",
      bodyClass: "pascoli",
      storageKey: "q_simbolismo_best",
      storageTot: "q_simbolismo_best_total",
      footerQuote: "«Nominare un oggetto significa sopprimere i tre quarti del piacere della poesia.»",
      footerCite: "— Stephane Mallarme"
    },
    estetismo: {
      key: "estetismo",
      name: "L’Estetismo",
      short: "Estetismo",
      bodyClass: "montale",
      storageKey: "q_estetismo_best",
      storageTot: "q_estetismo_best_total",
      footerQuote: "«L’unica maniera di liberarsi da una tentazione e cedere a essa.»",
      footerCite: "— Oscar Wilde, Il ritratto di Dorian Gray"
    },
    futurismo: {
      key: "futurismo",
      name: "Il Futurismo",
      short: "Futurismo",
      bodyClass: "pirandello",
      storageKey: "q_futurismo_best",
      storageTot: "q_futurismo_best_total",
      footerQuote: "«Un automobile da corsa e piu bello della Nike di Samotracia.»",
      footerCite: "— F.T. Marinetti, Manifesto del Futurismo"
    },
    crepuscolarismo: {
      key: "crepuscolarismo",
      name: "Il Crepuscolarismo",
      short: "Crepuscolarismo",
      bodyClass: "saba",
      storageKey: "q_crepuscolarismo_best",
      storageTot: "q_crepuscolarismo_best_total",
      footerQuote: "«Perche tu mi dici: poeta? Io non sono che un piccolo fanciullo che piange.»",
      footerCite: "— Sergio Corazzini, Desolazione del povero poeta sentimentale"
    },
    vociani: {
      key: "vociani",
      name: "I Vociani",
      short: "Vociani",
      bodyClass: "ungaretti",
      storageKey: "q_vociani_best",
      storageTot: "q_vociani_best_total",
      footerQuote: "«Taci, anima stanca di godere e di soffrire.»",
      footerCite: "— Camillo Sbarbaro, Pianissimo"
    },
    ermetismo: {
      key: "ermetismo",
      name: "L’Ermetismo",
      short: "Ermetismo",
      bodyClass: "svevo",
      storageKey: "q_ermetismo_best",
      storageTot: "q_ermetismo_best_total",
      footerQuote: "«M’illumino d’immenso.»",
      footerCite: "— Giuseppe Ungaretti, Mattina"
    },
    antinovecentismo: {
      key: "antinovecentismo",
      name: "Linea Antinovecentista",
      short: "Antinovecentismo",
      bodyClass: "saba",
      storageKey: "q_antinovecentismo_best",
      storageTot: "q_antinovecentismo_best_total",
      footerQuote: "«Avevo scelto le trite parole perche il mio cuore fosse compreso.»",
      footerCite: "— Umberto Saba"
    },

    /* ── SECONDO NOVECENTO ── */
    pavese: {
      key: "pavese",
      name: "Cesare Pavese",
      short: "Pavese",
      bodyClass: "verga",
      storageKey: "q_pavese_best",
      storageTot: "q_pavese_best_total",
      footerQuote: "«Un paese ci vuole, non fosse che per il gusto di andarsene via.»",
      footerCite: "— Cesare Pavese, La luna e i falo"
    },
    pasolini: {
      key: "pasolini",
      name: "Pier Paolo Pasolini",
      short: "Pasolini",
      bodyClass: "campana",
      storageKey: "q_pasolini_best",
      storageTot: "q_pasolini_best_total",
      footerQuote: "«Io so. Ma non ho le prove.»",
      footerCite: "— Pier Paolo Pasolini, Scritti corsari"
    },
    calvino: {
      key: "calvino",
      name: "Italo Calvino",
      short: "Calvino",
      bodyClass: "pirandello",
      storageKey: "q_calvino_best",
      storageTot: "q_calvino_best_total",
      footerQuote: "«Leggerezza non e superficialita, ma planare sulle cose dall'alto.»",
      footerCite: "— Italo Calvino, Lezioni americane"
    },

    /* ── NEOREALISMO ── */
    neorealismo: {
      key: "neorealismo",
      name: "Il Neorealismo",
      short: "Neorealismo",
      bodyClass: "verga",
      storageKey: "q_neorealismo_best",
      storageTot: "q_neorealismo_best_total",
      footerQuote: "«Cristo si e fermato a Eboli.»",
      footerCite: "— Carlo Levi"
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

  /* ────────────────────────  PANNELLO MODALITÀ  ─────────────────────── */
  function openAuthorPanel(authorKey) {
    if (!window.QUIZ_DATA || !window.QUIZ_DATA[authorKey]) {
      alert('Banca domande non disponibile per questo autore.');
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
    if (tLbl) { tLbl.textContent = 'disattivato'; tLbl.style.color = 'var(--gray)'; }
    const sBtn = document.getElementById('panel-shuffle-toggle');
    if (sBtn) sBtn.classList.add('on');

    const lbl = document.getElementById('panel-author-label');
    if (lbl) {
      lbl.textContent = author.name;
      const c = (({
        saba: 'var(--red)', ungaretti: '#2d5a87', montale: 'var(--green-dark)',
        svevo: '#6b4a2a', pirandello: '#6040a0', dannunzio: '#7a2235', pascoli: '#8a6a2a',
        verga: '#5C1A28', campana: '#4a1a60',
        naturalismo: '#5C1A28', verismo: '#4a1a60', decadentismo: '#7a2235',
        simbolismo: '#8a6a2a', estetismo: '#2d5a87', futurismo: '#6040a0',
        crepuscolarismo: 'var(--red)', vociani: '#2d5a87', ermetismo: '#6b4a2a',
        antinovecentismo: 'var(--red)'
      })[authorKey]);
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
      lbl.textContent = panelCfg.timer ? '20 min' : 'disattivato';
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
