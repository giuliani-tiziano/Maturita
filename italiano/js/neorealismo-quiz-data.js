/* =========================================================================
   neorealismo-quiz-data.js — Banca domande per il Neorealismo
   30 domande in formato compatibile con quiz-engine.js
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
  window.QUIZ_DATA.neorealismo = [

    /* ── ORIGINI ── */
    mc("nr01", "Origini", "In quale periodo si sviluppa il Neorealismo?",
      ["1870–1900", "Il secondo dopoguerra (1945–1955 ca.)", "1909–1930", "1920–1945"],
      1, "Il Neorealismo è la corrente letteraria e cinematografica del secondo dopoguerra italiano, tra il 1945 e il 1955 circa."),
    mc("nr02", "Origini", "Quali sono le tre radici del Neorealismo?",
      ["Decadentismo, Futurismo, Ermetismo", "Verismo, letteratura americana, antifascismo", "Romanticismo, Positivismo, Simbolismo", "Estetismo, Crepuscolarismo, Vociani"],
      1, "Le tre radici sono il Verismo di Verga (impersonalità, ceti bassi), la letteratura americana tradotta negli anni Trenta, e l'antifascismo come impegno morale."),
    mc("nr03", "Origini", "Quale esperienza storica è fondante per il Neorealismo?",
      ["La Prima guerra mondiale", "La Resistenza (1943–1945)", "Il Risorgimento", "La guerra di Libia"],
      1, "La Resistenza partigiana contro il nazifascismo (1943–45) è l'esperienza fondante: fornisce temi, eroi popolari e urgenza morale."),
    mc("nr04", "Origini", "Chi tradusse la letteratura americana negli anni Trenta, preparando il Neorealismo?",
      ["D'Annunzio e Pascoli", "Pavese e Vittorini", "Montale e Ungaretti", "Saba e Svevo"],
      1, "Pavese e Vittorini furono i principali traduttori della letteratura americana (Hemingway, Steinbeck, Dos Passos): un modello alternativo alla retorica fascista."),
    mc("nr05", "Origini", "Il Neorealismo è anche un fenomeno…",
      ["Solo poetico", "Cinematografico (Rossellini, De Sica, Visconti)", "Solo teatrale", "Solo musicale"],
      1, "Il Neorealismo è soprattutto cinematografico: Rossellini (Roma città aperta), De Sica (Ladri di biciclette), Visconti (La terra trema, dai Malavoglia)."),
    tf("nr06", "Origini", "Conversazione in Sicilia di Vittorini (1941) è considerato un precursore del Neorealismo.",
      true, "Vero. Conversazione in Sicilia (1941) ha lingua lirica e simbolica, ma già l'impegno civile contro «il mondo offeso»: è il ponte verso il Neorealismo."),

    /* ── POETICA ── */
    mc("nr07", "Poetica", "Qual è il principio centrale del Neorealismo?",
      ["L'oscurità della parola", "La rappresentazione diretta della realtà sociale e l'impegno civile", "L'estetismo", "Il superuomo"],
      1, "Il Neorealismo si fonda sulla rappresentazione diretta della realtà sociale (operai, contadini, partigiani) e sull'impegno civile dell'intellettuale."),
    mc("nr08", "Poetica", "Com'è lo stile neorealista?",
      ["Aulico e classicista", "Ermetico e analogico", "Medio o basso, lineare, con inserti dialettali", "Onomatopeico"],
      2, "Lo stile è medio o basso, vicino al parlato, con inserti dialettali, struttura lineare e prevalenza dell'azione sulla psicologia."),
    mc("nr09", "Poetica", "Cos'è il «documento» nel Neorealismo?",
      ["Un certificato", "La testimonianza/cronaca come forma letteraria, il cui valore sta nell'aderenza al vero", "Un genere poetico", "Un manifesto politico"],
      1, "Il documento è la forma letteraria privilegiata: la testimonianza, il diario, la cronaca. Il valore dell'opera sta nella sua aderenza al reale."),
    mc("nr10", "Poetica", "Cos'è la «trasfigurazione mitica»?",
      ["La rappresentazione fotografica", "Il caricare la realtà di valore simbolico e mitico (Pavese, Fenoglio)", "L'uso del dialetto", "La documentazione oggettiva"],
      1, "La trasfigurazione mitica è la tendenza, opposta al realismo fotografico, a caricare la realtà di valore simbolico: Pavese (Langhe), Fenoglio (epica), Vittorini (Sicilia)."),
    tf("nr11", "Poetica", "Il Neorealismo eredita dal Verismo l'attenzione ai ceti bassi e l'impersonalità.",
      true, "Vero. Lo stile neorealista deve molto al Verismo: l'impersonalità, l'attenzione ai ceti bassi, il rifiuto della retorica."),
    open("nr12", "Poetica", "Spiega cos'è l'«impegno» nel Neorealismo.",
      "L'impegno è il dovere dell'intellettuale di partecipare alla storia, testimoniare e denunciare la realtà sociale. La letteratura non è evasione ma azione: nasce dall'antifascismo e dalla Resistenza come responsabilità morale e politica verso la collettività. La letteratura come strumento di conoscenza e trasformazione sociale.",
      ["impegno", "intellettuale", "testimoniare", "antifascismo", "Resistenza"]),

    /* ── AUTORI ── */
    mc("nr13", "Autori", "Chi scrive Cristo si è fermato a Eboli?",
      ["Cesare Pavese", "Italo Calvino", "Carlo Levi", "Beppe Fenoglio"],
      2, "Carlo Levi, medico e pittore torinese confinato in Lucania per antifascismo, scrive Cristo si è fermato a Eboli (1945)."),
    mc("nr14", "Autori", "Chi scrive Il sentiero dei nidi di ragno (1947)?",
      ["Italo Calvino", "Vasco Pratolini", "Elio Vittorini", "Beppe Fenoglio"],
      0, "Italo Calvino esordisce nel 1947 con Il sentiero dei nidi di ragno: la Resistenza vista con gli occhi del bambino Pin."),
    mc("nr15", "Autori", "Chi scrive La casa in collina (1949)?",
      ["Carlo Levi", "Cesare Pavese", "Vasco Pratolini", "Elio Vittorini"],
      1, "Cesare Pavese scrive La casa in collina (1949): la guerra partigiana vista da un intellettuale che non riesce a schierarsi."),
    mc("nr16", "Autori", "Chi scrive Il partigiano Johnny?",
      ["Italo Calvino", "Beppe Fenoglio", "Carlo Levi", "Vasco Pratolini"],
      1, "Beppe Fenoglio scrive Il partigiano Johnny (postumo 1968): la Resistenza nelle Langhe, prosa sperimentale con inglese mescolato all'italiano."),
    mc("nr17", "Autori", "Chi scrive Cronache di poveri amanti (1947)?",
      ["Cesare Pavese", "Italo Calvino", "Vasco Pratolini", "Carlo Levi"],
      2, "Vasco Pratolini scrive Cronache di poveri amanti (1947): la vita corale di una strada popolare di Firenze durante l'avvento del fascismo."),
    tf("nr18", "Autori", "Pavese, Calvino e Fenoglio sono autori che partono dal Neorealismo ma lo superano trasfigurando la realtà in mito.",
      true, "Vero. I migliori autori neorealisti (Pavese nel mito, Calvino nella fiaba, Fenoglio nell'epica) superano il realismo documentario puro."),

    /* ── OPERE ── */
    mc("nr19", "Opere", "Cosa racconta Cristo si è fermato a Eboli?",
      ["La Resistenza nelle Langhe", "Il confino in Lucania e il Sud contadino come mondo separato dalla storia", "La Firenze fascista", "La vita di fabbrica"],
      1, "Cristo si è fermato a Eboli è il resoconto del confino di Carlo Levi in Lucania: il Sud contadino come mondo arcaico, separato dalla storia e dalla civiltà."),
    mc("nr20", "Opere", "Cosa racconta La casa in collina di Pavese?",
      ["L'emigrazione in America", "La guerra partigiana vista da un intellettuale che non riesce a schierarsi", "La vita contadina", "La Resistenza eroica"],
      1, "La casa in collina racconta la guerra vista da Corrado, intellettuale che non sceglie: «ogni guerra è una guerra civile». È il Neorealismo problematico."),
    mc("nr21", "Opere", "Cosa caratterizza Il partigiano Johnny di Fenoglio?",
      ["Una prosa documentaria semplice", "Una prosa sperimentale con inglese mescolato all'italiano, la Resistenza come epica", "Il dialetto romanesco", "Un tono comico"],
      1, "Il partigiano Johnny ha prosa sperimentale (Fenoglio era anglista, mescola inglese e italiano) e trasforma la Resistenza in epica solitaria e tragica."),
    mc("nr22", "Opere", "In Cronache di poveri amanti, chi è il vero protagonista?",
      ["Un singolo eroe", "Una comunità: il quartiere, il popolo di una strada di Firenze", "Un partigiano", "Un contadino"],
      1, "In Cronache di poveri amanti il protagonista non è un individuo ma una comunità: la strada popolare di Via del Corno, il popolo fiorentino. È il romanzo corale."),
    tf("nr23", "Opere", "Visconti trasse il film La terra trema dai Malavoglia di Verga.",
      true, "Vero. La terra trema di Visconti è tratto dai Malavoglia: il Verismo siciliano rinasce nel Neorealismo cinematografico."),
    mc("nr24", "Opere", "Perché Il sentiero dei nidi di ragno supera il Neorealismo puro?",
      ["È ambientato nel futuro", "La Resistenza è vista con lo sguardo straniato di un bambino (Pin) e con struttura fiabesca", "Non parla della guerra", "È scritto in latino"],
      1, "Lo sguardo del bambino Pin smonta la retorica eroica; la struttura fiabesca è già una distanza dal realismo documentario. Calvino è dentro e oltre il Neorealismo."),

    /* ── TESTI ── */
    mc("nr25", "Testi", "Nel titolo «Cristo si è fermato a Eboli», cosa rappresenta «Cristo»?",
      ["Solo il Cristo religioso", "La storia, lo Stato, la modernità, la civiltà", "Un personaggio", "Il fascismo"],
      1, "«Cristo» non è solo il Cristo religioso: rappresenta la storia, lo Stato, la modernità, la civiltà. Il Sud profondo ne è rimasto escluso."),
    mc("nr26", "Testi", "Quando i contadini lucani dicono «non siamo cristiani» intendono…",
      ["Che sono atei", "Che non sono considerati uomini, esclusi dalla civiltà e dalla storia", "Che sono di un'altra religione", "Che vivono male"],
      1, "Per i contadini «cristiano» significa «uomo». Dicendo «non siamo cristiani» affermano di non essere considerati uomini, di essere esclusi dalla storia."),
    mc("nr27", "Testi", "Qual è l'atteggiamento di Carlo Levi verso i contadini lucani?",
      ["Li ascolta e racconta senza giudicare né idealizzare", "Li condanna", "Li idealizza come eroi", "Li ignora"],
      0, "Carlo Levi non giudica né idealizza: ascolta e racconta. È il modello del documento-testimonianza neorealista, strumento di conoscenza e denuncia."),
    tf("nr28", "Testi", "Cristo si è fermato a Eboli è una denuncia della questione meridionale.",
      true, "Vero. Il libro denuncia la condizione del Sud contadino, un mondo intero lasciato fuori dalla modernità e dallo Stato unitario."),

    /* ── CONFRONTI ── */
    mc("nr29", "Confronti", "Qual è la differenza tra Neorealismo e Verismo?",
      ["Nessuna", "Il Neorealismo eredita l'attenzione ai ceti bassi ma rovescia il pessimismo con l'impegno", "Il Verismo è più recente", "Il Neorealismo ignora i ceti bassi"],
      1, "Il Neorealismo eredita dal Verismo l'attenzione ai ceti bassi e l'impersonalità, ma ne rovescia il pessimismo: crede nell'impegno e nella trasformazione sociale."),
    open("nr30", "Confronti", "Spiega perché Neorealismo ed Ermetismo sono i due poli opposti del Novecento.",
      "L'Ermetismo (anni Trenta) è interiorità, oscurità, parola pura, evasione dalla storia sotto il fascismo, lingua difficile per pochi. Il Neorealismo (dopoguerra) è impegno, chiarezza, documento, immersione nella storia, lingua media accessibile a tutti. Sono opposti: interiorità contro impegno, oscurità contro chiarezza. Lo stesso Quasimodo passa dall'Ermetismo a una poesia più civile dopo la guerra.",
      ["Ermetismo", "interiorità", "oscurità", "impegno", "chiarezza", "storia"])

  ];
})();
