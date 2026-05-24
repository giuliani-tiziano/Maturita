/* =========================================================================
   page-ungaretti.js — Quiz finale dinamico della pagina Ungaretti
   Rende 15 domande nel container #quiz-container, traccia il punteggio
   nel #score-box.
   ========================================================================= */

(function () {
  'use strict';

  const container = document.getElementById('quiz-container');
  if (!container) return; // non siamo nella pagina ungaretti

  const questions = [
    { q: "Dove nasce Ungaretti e in che anno?",
      options: ["A Lucca nel 1867", "Ad Alessandria d'Egitto nel 1888", "A Parigi nel 1880", "A Milano nel 1900"],
      correct: 1,
      feedback: "Nasce ad Alessandria d'Egitto l'8 febbraio 1888. I genitori erano lucchesi emigrati per il Canale di Suez." },
    { q: "Qual è l'idea centrale della poetica di Ungaretti?",
      options: ["La poesia deve descrivere la natura in modo realistico",
                "La parola poetica è un'illuminazione: un lampo che fa apparire la verità nascosta",
                "La poesia deve avere metrica e rima tradizionali",
                "La poesia esprime solo sentimenti personali"],
      correct: 1,
      feedback: "La parola poetica è un lampo che fa apparire la verità per un istante. Da qui versi brevissimi, spazio bianco, analogie." },
    { q: "Cosa rappresenta il 'porto sepolto' nella poetica di Ungaretti?",
      options: ["Un porto distrutto dalla guerra",
                "Il porto di Trieste",
                "La leggenda di un porto di Alessandria sepolto, simbolo della verità nascosta nell'inconscio",
                "Il cimitero dei soldati sul Carso"],
      correct: 2,
      feedback: "Il porto sepolto di Alessandria è la metafora del fare poetico: immersione → contatto con la verità → emersione con il canto." },
    { q: "Cosa sono gli 'spazi bianchi' nelle poesie di Ungaretti?",
      options: ["Spazio per appunti del lettore",
                "Il silenzio da cui emerge la parola (idea di Mallarmé)",
                "Una scelta tipografica casuale",
                "La pagina bianca della carta di trincea"],
      correct: 1,
      feedback: "Idea di Mallarmé: la pagina bianca non è vuoto, è silenzio che dà peso alla parola." },
    { q: "In 'Mattina', cosa indica la parola 'immenso'?",
      options: ["La grandezza del sole",
                "L'oceano che vede dalla trincea",
                "Ciò che non si può misurare = l'infinito, l'assoluto",
                "Il campo di battaglia"],
      correct: 2,
      feedback: "'Immenso' = in-mensus = ciò che non si può misurare = l'infinito. Fusione mistica con l'assoluto." },
    { q: "In 'Soldati', cosa significa il verbo impersonale 'si sta'?",
      options: ["Io sto fermo nella trincea",
                "I soldati sono in attesa di ordini",
                "La condizione vale per TUTTI gli uomini (unanimismo)",
                "I soldati stanno dormendo"],
      correct: 2,
      feedback: "Il 'si sta' impersonale è la chiave dell'unanimismo: parla dell'intera umanità, non solo dei soldati." },
    { q: "In 'Fratelli', cosa rappresenta l'analogia 'foglia appena nata'?",
      options: ["La primavera che torna dopo la guerra",
                "La parola 'fratelli': vitale ma delicatissima",
                "I giovani soldati inesperti",
                "Le foglie del bosco"],
      correct: 1,
      feedback: "Parola 'fratelli' = foglia appena nata: vitale ma estremamente fragile." },
    { q: "In 'Veglia', cosa fa il poeta accanto al cadavere?",
      options: ["Prega tutta la notte",
                "Scrive lettere piene d'amore",
                "Cerca di salvarlo",
                "Dorme per stanchezza"],
      correct: 1,
      feedback: "Scrive lettere d'amore. Paradosso: davanti alla morte si scopre l'attaccamento alla vita." },
    { q: "In 'Il porto sepolto', l'ossimoro 'quel nulla / d'inesauribile segreto' significa che…",
      options: ["La poesia è inutile",
                "Il poeta non ha niente da dire",
                "La poesia tocca la verità ma non la possiede mai: il mistero resta sempre",
                "La guerra cancella ogni significato"],
      correct: 2,
      feedback: "Ossimoro: nulla + inesauribile segreto. La poesia sfiora la verità ma non la possiede del tutto." },
    { q: "In 'I Fiumi', quali sono i quattro fiumi della vita di Ungaretti?",
      options: ["Po, Arno, Tevere, Senna",
                "Isonzo, Nilo, Senna, Tamigi",
                "Isonzo, Serchio, Nilo, Senna",
                "Carso, Nilo, Senna, Lambro"],
      correct: 2,
      feedback: "Isonzo (presente, guerra), Serchio (origini toscane), Nilo (Egitto), Senna (Parigi)." },
    { q: "In 'I Fiumi', cosa significa 'docile fibra dell'universo'?",
      options: ["Il poeta si sente debole",
                "Il poeta si sente in armonia con il tutto, parte del tessuto cosmico",
                "Il poeta si sente insignificante",
                "Una metafora della modernità"],
      correct: 1,
      feedback: "'Docile' = duttile. Immerso nell'Isonzo, il poeta si sente parte armonica dell'universo." },
    { q: "In 'Non gridate più', l'espressione 'uccidere i morti' è un…",
      options: ["Similitudine", "Sinestesia", "Anafora", "Ossimoro (e adynaton)"],
      correct: 3,
      feedback: "Ossimoro: i morti sono già morti. Adynaton: evocare l'impossibile per denunciare il reale." },
    { q: "Qual è la principale differenza tra L'Allegria e Sentimento del tempo?",
      options: ["Versi più brevi, niente punteggiatura",
                "Stesso stile, solo temi nuovi",
                "Versi più lunghi, ritorno della punteggiatura, lessico aulico, modelli classici",
                "Sperimentazione futurista estrema"],
      correct: 2,
      feedback: "Fase 'classica': versi lunghi, punteggiatura, lessico aulico, Petrarca/Leopardi/Dante. Modello dell'Ermetismo." },
    { q: "Da quale lutto privato nasce 'Il dolore' (1947)?",
      options: ["La morte della moglie",
                "La morte del padre",
                "La morte del figlio Antonietto (1939, in Brasile)",
                "La morte del fratello"],
      correct: 2,
      feedback: "Antonietto muore nel 1939 a 9 anni. Il dolore privato si fonde con quello della Seconda guerra." },
    { q: "Quale frase riassume meglio i 3 autori del Novecento?",
      options: ["Tutti e tre cercano l'illuminazione poetica",
                "Tre risposte diverse: Ungaretti cerca l'illuminazione, Saba l'onestà, Montale dichiara l'impossibilità del senso",
                "Tutti e tre sono ermetici",
                "Tutti e tre rifiutano la tradizione"],
      correct: 1,
      feedback: "Ungaretti = parola che illumina; Saba = onestà; Montale = 'ciò che non siamo'." }
  ];

  const answered = {};

  function renderQuiz() {
    container.innerHTML = '';
    Object.keys(answered).forEach(k => delete answered[k]);
    questions.forEach((qq, i) => {
      const div = document.createElement('div');
      div.className = 'question';
      div.id = 'q-' + i;
      div.innerHTML = `
        <div class="question-num">Domanda ${i + 1} / ${questions.length}</div>
        <div class="question-text">${qq.q}</div>
        <div class="options">
          ${qq.options.map((opt, j) => `
            <button class="option" data-q="${i}" data-o="${j}">
              <span class="option-letter">${String.fromCharCode(65 + j)}.</span> ${opt}
            </button>
          `).join('')}
        </div>
        <div class="feedback" id="fb-${i}"></div>
      `;
      container.appendChild(div);
    });
    container.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => {
        answer(parseInt(btn.dataset.q, 10), parseInt(btn.dataset.o, 10));
      });
    });
  }

  function answer(qIdx, optIdx) {
    if (answered[qIdx] !== undefined) return;
    answered[qIdx] = optIdx;
    const qDiv = document.getElementById('q-' + qIdx);
    const buttons = qDiv.querySelectorAll('.option');
    const correct = questions[qIdx].correct;
    buttons.forEach((btn, j) => {
      btn.disabled = true;
      if (j === correct) btn.classList.add('correct');
      if (j === optIdx && j !== correct) btn.classList.add('wrong');
    });
    qDiv.classList.add('answered');
    const fb = document.getElementById('fb-' + qIdx);
    fb.innerHTML = (optIdx === correct ? '✓ <strong>Giusto.</strong> ' : '✗ <strong>Sbagliato.</strong> ') + questions[qIdx].feedback;
    fb.classList.add('show');
    if (Object.keys(answered).length === questions.length) showScore();
  }

  function showScore() {
    let count = 0;
    for (let k in answered) if (answered[k] === questions[k].correct) count++;
    const box = document.getElementById('score-box');
    document.getElementById('score-number').textContent = count + ' / ' + questions.length;
    let msg;
    if (count === 15)      msg = "Perfetto. Sei pronto per l'interrogazione.";
    else if (count >= 12)  msg = "Molto bene. Ripassa le 2-3 risposte sbagliate.";
    else if (count >= 9)   msg = "Buono, ma rivedi i punti che non sono fermi.";
    else if (count >= 6)   msg = "Sei a metà strada. Riprendi le sezioni sopra e ripeti.";
    else                   msg = "Riprendi dall'inizio: leggi con più attenzione e poi rifai.";
    document.getElementById('score-msg').textContent = msg;
    box.style.display = 'block';
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Esponi resetQuiz globalmente (usato in onclick inline nella pagina)
  window.resetQuiz = function () {
    document.getElementById('score-box').style.display = 'none';
    renderQuiz();
    const finalSec = document.getElementById('final');
    if (finalSec) finalSec.scrollIntoView({ behavior: 'smooth' });
  };

  renderQuiz();
})();
