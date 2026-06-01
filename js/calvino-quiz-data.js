/* =========================================================================
   calvino-quiz-data.js — Banca domande per Italo Calvino
   32 domande in formato compatibile con quiz-engine.js
   ========================================================================= */

(function () {
  "use strict";

  function mc(id, topic, text, options, correct, explanation) {
    return { id: id, type: "mc", topic: topic, text: text, options: options, correct: correct, explanation: explanation };
  }
  function tf(id, topic, text, correct, explanation) {
    return { id: id, type: "tf", topic: topic, text: text, options: ["Vero", "Falso"], correct: correct ? 0 : 1, explanation: explanation };
  }
  function open(id, topic, text, modelAnswer, keywords) {
    return { id: id, type: "open", topic: topic, text: text, modelAnswer: modelAnswer, keywords: keywords };
  }

  window.QUIZ_DATA = window.QUIZ_DATA || {};
  window.QUIZ_DATA.calvino = [

    /* ── VITA ── */
    mc("cv01", "Vita", "Dove nacque Italo Calvino nel 1923?",
      ["A Sanremo", "A Santiago de Las Vegas (Cuba)", "A Torino", "A Parigi"],
      1, "Calvino nacque il 15 ottobre 1923 a Santiago de Las Vegas, a Cuba, da genitori italiani. La famiglia rientrò presto in Italia, a Sanremo."),
    mc("cv02", "Vita", "A quale esperienza storica partecipò Calvino tra il 1943 e il 1945?",
      ["Alla guerra di Spagna", "Alla Resistenza nelle Brigate Garibaldi", "Alla guerra di Libia", "Alla Prima guerra mondiale"],
      1, "Calvino partecipò alla Resistenza nelle Brigate Garibaldi: l'esperienza partigiana fu la materia del suo primo romanzo."),
    mc("cv03", "Vita", "Per quale casa editrice lavorò Calvino per tutta la vita?",
      ["Mondadori", "Einaudi", "Bompiani", "Garzanti"],
      1, "Calvino lavorò per la casa editrice Einaudi di Torino per gran parte della sua vita, come consulente e redattore."),
    mc("cv04", "Vita", "Su quale autore Calvino scrisse la tesi di laurea?",
      ["Joseph Conrad", "Ernest Hemingway", "Franz Kafka", "James Joyce"],
      0, "Calvino si laureò a Torino con una tesi su Joseph Conrad, lo scrittore di mare e d'avventura."),
    mc("cv05", "Vita", "In quale città visse Calvino dal 1967 al 1980, entrando in contatto con l'Oulipo?",
      ["Londra", "New York", "Parigi", "Berlino"],
      2, "Calvino visse a Parigi dal 1967 al 1980, dove entrò in contatto con l'Oulipo di Queneau e Perec."),
    mc("cv06", "Vita", "Cosa stava preparando Calvino quando morì nel 1985?",
      ["Un romanzo sull'America", "Le Lezioni americane per Harvard", "Un film", "Una raccolta di poesie"],
      1, "Calvino morì a Siena nel 1985 per un ictus mentre preparava le Lezioni americane, sei conferenze per l'università di Harvard, poi pubblicate postume."),
    tf("cv07", "Vita", "I genitori di Calvino erano entrambi scienziati.",
      true, "Vero. Il padre era agronomo e la madre botanica: la formazione scientifica della famiglia si rifletterà nell'interesse di Calvino per la scienza (Le cosmicomiche)."),
    tf("cv08", "Vita", "Calvino si iscrisse al PCI e ne uscì nel 1957 dopo i fatti d'Ungheria.",
      true, "Vero. Calvino aderì al PCI durante la Resistenza e se ne allontanò nel 1957, dopo l'invasione sovietica dell'Ungheria del 1956."),

    /* ── POETICA ── */
    mc("cv09", "Poetica", "Cos'è la «leggerezza» per Calvino?",
      ["La superficialità", "La capacità di sollevarsi dal peso della realtà senza negarla", "La brevità dei testi", "L'ironia facile"],
      1, "La leggerezza è la capacità di sollevarsi dal peso della realtà senza negarla. L'emblema è Perseo che guarda Medusa riflessa nello scudo: guardare il mondo indirettamente."),
    mc("cv10", "Poetica", "Quale mito illustra la «leggerezza» nelle Lezioni americane?",
      ["Ulisse e le sirene", "Perseo e Medusa", "Orfeo ed Euridice", "Icaro e il sole"],
      1, "Perseo taglia la testa di Medusa guardandola riflessa nello scudo, senza esserne pietrificato: è l'emblema della leggerezza come sguardo obliquo sulla realtà."),
    mc("cv11", "Poetica", "Cos'è l'Oulipo?",
      ["Una corrente neorealista", "Una rivista italiana", "Il gruppo (Queneau, Perec) che concepisce la letteratura come gioco combinatorio basato su vincoli formali", "Una casa editrice"],
      2, "L'Oulipo (Ouvroir de littérature potentielle) è il gruppo francese di Queneau e Perec che concepisce la letteratura come gioco combinatorio basato su vincoli e regole formali."),
    mc("cv12", "Poetica", "Per Calvino, qual è il rapporto tra struttura e creatività?",
      ["La struttura limita la creatività", "La struttura non limita la creatività, la genera", "La creatività deve ignorare la struttura", "Non c'è rapporto"],
      1, "Secondo la concezione combinatoria (Oulipo), i vincoli formali non limitano la creatività ma la generano: la struttura è un generatore di senso."),
    tf("cv13", "Poetica", "La leggerezza di Calvino significa disimpegno e fuga dalla realtà.",
      false, "Falso. La leggerezza non è disimpegno né fuga: è affrontare il peso del mondo sottraendovisi con l'intelligenza, come Perseo che vince Medusa senza guardarla in faccia."),
    open("cv14", "Poetica", "Spiega cosa rappresenta il mito di Perseo nelle Lezioni americane.",
      "Perseo affronta la Medusa (che pietrifica chi la guarda) sostenendosi sulle cose leggere — i venti e le nubi — e fissandola solo riflessa nello scudo, in una visione indiretta. È l'emblema della leggerezza calviniana: per affrontare il peso e l'opacità del mondo bisogna guardarlo obliquamente, planare sulle cose dall'alto, senza lasciarsi pietrificare.",
      ["Perseo", "Medusa", "leggerezza", "visione indiretta", "scudo"]),

    /* ── LE FASI ── */
    mc("cv15", "Le fasi", "Quale fase rappresenta Il sentiero dei nidi di ragno?",
      ["Il postmoderno", "Il Neorealismo (con superamento)", "La fantascienza", "La fiaba pura"],
      1, "Il sentiero dei nidi di ragno (1947) è neorealismo, ma già superato: la Resistenza è vista con lo sguardo straniato di Pin, un bambino."),
    mc("cv16", "Le fasi", "Perché Il sentiero dei nidi di ragno supera il Neorealismo?",
      ["È ambientato nel futuro", "La Resistenza è vista con lo sguardo straniato di un bambino (Pin)", "Non parla della guerra", "È scritto in dialetto"],
      1, "Lo sguardo infantile di Pin smonta la retorica eroica: i partigiani sono uomini comuni con paure e debolezze. La struttura fiabesca è già una distanza dal realismo."),
    mc("cv17", "Le fasi", "Quale fase rappresentano Le cosmicomiche (1965)?",
      ["Il Neorealismo", "La fantascienza filosofica e ironica", "Il romanzo storico", "La poesia"],
      1, "Le cosmicomiche partono da nozioni scientifiche narrate da Qfwfq, essere antichissimo: scienza e mito fusi in un'ironia cosmica."),
    tf("cv18", "Le fasi", "Calvino reinventa continuamente il modo di raccontare, dal Neorealismo al postmoderno.",
      true, "Vero. Calvino attraversa Neorealismo, fiaba filosofica, fantascienza ironica e postmoderno, in una continua reinvenzione del modo di narrare."),

    /* ── OPERE ── */
    mc("cv19", "Opere", "Quali romanzi compongono la trilogia I nostri antenati?",
      ["Il sentiero, Le città, Le cosmicomiche", "Il visconte dimezzato, Il barone rampante, Il cavaliere inesistente", "Tre romanzi sulla Resistenza", "Tre raccolte di poesie"],
      1, "La trilogia I nostri antenati comprende Il visconte dimezzato (1952), Il barone rampante (1957) e Il cavaliere inesistente (1959): allegorie filosofiche in forma di favola."),
    mc("cv20", "Opere", "Chi descrive le città a Kublai Khan ne Le città invisibili?",
      ["Qfwfq", "Cosimo di Rondò", "Marco Polo", "Il Lettore"],
      2, "Ne Le città invisibili (1972) Marco Polo descrive all'imperatore Kublai Khan 55 città immaginarie organizzate in 11 categorie."),
    mc("cv21", "Opere", "Cosa rappresenta Cosimo di Rondò ne Il barone rampante?",
      ["L'identità divisa", "La libertà come distanza scelta dal mondo (vive sugli alberi)", "L'esistenza ridotta a funzione", "Il consumismo"],
      1, "Cosimo, a dodici anni, sale su un albero e non scende mai più: vive tutta la vita sugli alberi, partecipando al mondo da una distanza scelta. È l'allegoria della libertà come distacco critico."),
    mc("cv22", "Opere", "Quale opera è un romanzo postmoderno in cui il Lettore è protagonista?",
      ["Il visconte dimezzato", "Se una notte d'inverno un viaggiatore (1979)", "Le cosmicomiche", "Il sentiero dei nidi di ragno"],
      1, "Se una notte d'inverno un viaggiatore (1979) è il romanzo postmoderno in cui il protagonista è il Lettore (tu), tra dieci incipit di romanzi mai finiti."),
    mc("cv23", "Opere", "Cosa rappresenta Agilulfo ne Il cavaliere inesistente?",
      ["Un eroe coraggioso", "Un'armatura vuota animata dalla pura volontà: l'esistenza ridotta a funzione", "Un re medievale", "Un bambino"],
      1, "Agilulfo è un'armatura vuota animata solo dalla volontà e dalla disciplina: esiste senza essere. È l'allegoria dell'uomo moderno ridotto a pura funzione."),
    tf("cv24", "Opere", "Le città invisibili sono organizzate secondo uno schema combinatorio rigoroso.",
      true, "Vero. Le 55 città sono organizzate in 11 categorie (le città e la memoria, e il desiderio, e i segni…) secondo uno schema matematico, tipico della poetica combinatoria."),
    mc("cv25", "Opere", "Chi è il narratore delle Cosmicomiche?",
      ["Marco Polo", "Pin", "Qfwfq", "Cosimo"],
      2, "Le cosmicomiche sono narrate da Qfwfq, un essere antichissimo che ha assistito alla formazione dell'universo e racconta i fenomeni cosmici come avventure quotidiane."),

    /* ── TESTI ── */
    mc("cv26", "Testi", "Qual è il «carattere» della città di Diomira?",
      ["Le sue meraviglie architettoniche", "Un sentimento: l'invidia per chi ha già vissuto una sera come quella e ne è stato felice", "La sua ricchezza", "La sua posizione"],
      1, "Il carattere di Diomira non sono le meraviglie (già viste altrove), ma un sentimento: l'invidia per chi ha già vissuto una sera simile e ne è stato felice."),
    mc("cv27", "Testi", "Nelle città di Calvino, di cosa sono fatte le città?",
      ["Di pietra e marmo", "Di linguaggio più che di pietra: ricordi, desideri, paure", "Di metallo", "Di vetro"],
      1, "Le città invisibili sono fatte di linguaggio più che di pietra: sono modi di interrogare esperienze umane — la memoria, il desiderio, il tempo, la morte."),
    mc("cv28", "Testi", "Cosa metaforizza il dialogo Marco Polo–Kublai Khan?",
      ["Il commercio", "Il rapporto tra scrittura e lettura, tra esperienza e racconto", "La guerra", "Un viaggio reale"],
      1, "Il dialogo strutturale (Marco Polo descrive le città all'imperatore) è una metafora del rapporto tra scrittura e lettura, tra esperienza e racconto."),
    tf("cv29", "Testi", "In Diomira l'emozione è trasmessa attraverso dettagli concreti, non descrizioni psicologiche.",
      true, "Vero. L'invidia e la malinconia sono trasmesse attraverso dettagli concreti (le lampade multicolori, la voce di donna, il gallo d'oro): la leggerezza calviniana."),

    /* ── CONFRONTI ── */
    mc("cv30", "Confronti", "Qual è la differenza tra Calvino e Pirandello nell'interrogare l'identità?",
      ["Non c'è differenza", "Calvino lo fa con leggerezza giocosa, Pirandello con angoscia", "Calvino è più tragico", "Pirandello usa la fiaba"],
      1, "Entrambi mettono in crisi identità e realtà, ma con tonalità opposte: Pirandello con l'angoscia del relativismo tragico, Calvino con la leggerezza del gioco e dell'allegoria."),
    mc("cv31", "Confronti", "Come si differenzia il mito di Calvino da quello di Pavese?",
      ["Sono identici", "Il mito di Calvino è giocoso, quello di Pavese è tragico", "Calvino non usa il mito", "Pavese è ironico"],
      1, "Colleghi all'Einaudi, entrambi lavorano col mito: ma per Pavese è tragico (le Langhe, il ritorno impossibile, il suicidio); per Calvino è giocoso (Qfwfq, la fiaba, l'ironia)."),
    open("cv32", "Confronti", "Spiega in che senso Calvino è dentro e oltre il Neorealismo.",
      "Calvino è dentro il Neorealismo all'esordio (Il sentiero dei nidi di ragno racconta la Resistenza, con impegno civile e ambienti reali) ma già lo supera dall'interno: lo sguardo straniato del bambino Pin e la struttura fiabesca smontano la retorica eroica e segnano la strada verso l'allegoria filosofica della trilogia. Dalla Resistenza alla leggerezza in pochi anni.",
      ["Neorealismo", "Resistenza", "Pin", "sguardo straniato", "fiaba", "leggerezza"])

  ];
})();
