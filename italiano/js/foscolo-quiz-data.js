/* =========================================================================
   foscolo-quiz-data.js — Banca domande Ugo Foscolo
   ========================================================================= */
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA.foscolo = [
  /* ── VITA ── */
  { type:"mc", text:"In quale anno e isola nasce Ugo Foscolo?", options:["1778 a Zante","1785 a Milano","1798 a Recanati","1772 a Venezia"], correct:0 },
  { type:"mc", text:"Dove e quando muore Foscolo?", options:["1827 a Turnham Green, in esilio in Inghilterra","1827 a Milano","1815 a Venezia","1837 a Napoli"], correct:0 },
  { type:"tf", text:"Foscolo combatté con Napoleone sperando nella liberazione dell'Italia, ma rimase deluso dal Trattato di Campoformio (1797).", options:["Vero","Falso"], correct:0 },
  { type:"mc", text:"Cosa provoca in Foscolo la 'delusione napoleonica'?", options:["Il Trattato di Campoformio, che cede Venezia all'Austria", "La sconfitta di Napoleone a Waterloo","La morte di Napoleone","L'incoronazione di Napoleone a imperatore"], correct:0 },
  { type:"tf", text:"Foscolo trascorse gli ultimi anni della sua vita in esilio in Inghilterra per non giurare fedeltà all'Austria.", options:["Vero","Falso"], correct:0 },
  /* ── POETICA ── */
  { type:"mc", text:"Cosa si intende per 'materialismo eroico' in Foscolo?", options:["La concezione secondo cui la materia è tutto ciò che esiste, ma l'uomo può opporsi al nulla con azioni eroiche e illusioni vitali","La fede nella Provvidenza divina","Il rifiuto totale di ogni illusione","L'adesione al positivismo scientifico"], correct:0 },
  { type:"mc", text:"Quali sono le 'illusioni' che danno senso alla vita secondo Foscolo?", options:["Patria, amore, bellezza, poesia/gloria","Ricchezza, potere, fama politica","Fede religiosa e vita ultraterrena","Scienza e progresso tecnico"], correct:0 },
  { type:"mc", text:"Qual è la 'funzione eternatrice' della poesia in Foscolo?", options:["La poesia può rendere eterna la memoria di chi non c'è più, vincendo simbolicamente il tempo e la morte","La poesia serve solo a intrattenere","La poesia deve descrivere la natura in modo oggettivo","La poesia ha una funzione puramente religiosa"], correct:0 },
  { type:"tf", text:"Foscolo è considerato una figura di passaggio tra Neoclassicismo e Romanticismo / Preromanticismo.", options:["Vero","Falso"], correct:0 },
  { type:"mc", text:"Il 'titanismo foscoliano' indica...", options:["La ribellione dell'individuo contro un destino ostile, pur nella consapevolezza della sconfitta","L'accettazione serena del proprio destino","La fede nella vittoria finale dell'uomo sulla natura","Il disinteresse per le passioni civili"], correct:0 },
  /* ── OPERE ── */
  { type:"mc", text:"Le Ultime lettere di Jacopo Ortis sono scritte in forma di...", options:["Romanzo epistolare","Poema in terzine","Tragedia in versi","Raccolta di sonetti"], correct:0 },
  { type:"mc", text:"Jacopo Ortis si toglie la vita per...", options:["La delusione politica (Campoformio) e l'amore infelice per Teresa","Una malattia incurabile","Un duello d'onore","La povertà estrema"], correct:0 },
  { type:"mc", text:"A quale opera straniera viene spesso paragonato l'Ortis?", options:["I dolori del giovane Werther di Goethe","Il Don Chisciotte di Cervantes","I Promessi Sposi di Manzoni","La Divina Commedia di Dante"], correct:0 },
  { type:"mc", text:"Quanti sonetti maggiori sono comunemente considerati i capolavori lirici di Foscolo?", options:["Alla sera, A Zacinto, In morte del fratello Giovanni","Solo A Zacinto","Cinque sonetti dedicati a Napoleone","Dieci sonetti d'amore"], correct:0 },
  { type:"mc", text:"Dei Sepolcri è un carme dedicato al tema...", options:["Della funzione civile e affettiva delle tombe e della memoria","Della guerra contro l'Austria","Dell'amore per Teresa","Della bellezza della natura ligure"], correct:0 },
  { type:"mc", text:"Cosa scatena la composizione dei Sepolcri?", options:["L'editto napoleonico di Saint-Cloud sulle sepolture","La morte del fratello Giovanni","La pubblicazione dell'Ortis","Il viaggio in Inghilterra"], correct:0 },
  /* ── TESTI ── */
  { type:"mc", text:"In 'A Zacinto', Foscolo si paragona a...", options:["Ulisse, che però — a differenza sua — potrà fare ritorno in patria","Achille","Enea che fonda una nuova patria","Telemaco in cerca del padre"], correct:0 },
  { type:"tf", text:"In 'A Zacinto', Foscolo afferma che non toccherà mai più le 'sacre sponde' della sua isola natale.", options:["Vero","Falso"], correct:0 },
  { type:"mc", text:"In 'Alla sera', la sera viene invocata come immagine...", options:["Della pace e di un'immagine anticipata della morte, vissuta senza angoscia", "Di un momento di festa e gioia","Di un ricordo d'infanzia felice","Della vittoria militare"], correct:0 },
  { type:"mc", text:"'In morte del fratello Giovanni' è ispirato anche a un componimento di...", options:["Catullo (carme per il fratello morto)","Orazio","Petrarca","Dante"], correct:0 },
  /* ── CONFRONTI ── */
  { type:"mc", text:"Rispetto a Leopardi, la posizione di Foscolo sulle illusioni è...", options:["Le illusioni (patria, amore, bellezza) hanno valore e vanno difese attivamente; per Leopardi sono necessarie ma destinate a dissolversi con la ragione","Identica a quella di Leopardi","Foscolo nega ogni illusione, Leopardi le esalta","Nessuno dei due si occupa del tema delle illusioni"], correct:0 },
  { type:"mc", text:"Cosa accomuna Foscolo ad Alfieri?", options:["Il titanismo, la tensione verso la libertà e l'insofferenza per ogni costrizione","L'adesione al cattolicesimo","Lo stile dimesso e colloquiale","Il disinteresse per la politica"], correct:0 },
  { type:"open", text:"Spiega in breve perché Foscolo è considerato una figura 'di cerniera' tra Neoclassicismo e Romanticismo.", modelAnswer:"Foscolo usa forme e miti classici (Neoclassicismo: armonia, bellezza, mitologia greca) ma li riempie di contenuti soggettivi, passionali e disperati tipici del Romanticismo (l'esilio, la delusione politica, il titanismo, la sensibilità autobiografica)." }
];
