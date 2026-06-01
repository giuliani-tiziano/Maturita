/* =========================================================================
   pasolini-quiz-data.js — Banca domande per Pier Paolo Pasolini
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
  window.QUIZ_DATA.pasolini = [

    /* ── VITA ── */
    mc("pp01", "Vita", "Dove e in che anno nacque Pier Paolo Pasolini?",
      ["1922 a Bologna", "1908 a Cuneo", "1896 a Genova", "1885 a Marradi"],
      0, "Pasolini nacque il 5 marzo 1922 a Bologna. La madre Susanna Colussi era friulana, e a lei Pasolini fu legatissimo per tutta la vita."),
    mc("pp02", "Vita", "Perché Pasolini fu espulso dal PCI e lasciò il Friuli nel 1949?",
      ["Per ragioni economiche", "Per uno scandalo sessuale", "Per motivi di salute", "Per studiare a Roma"],
      1, "Nel 1949 Pasolini fu espulso dal PCI e perse il posto di insegnante per uno scandalo sessuale. Fuggì a Roma con la madre, stabilendosi nelle borgate."),
    mc("pp03", "Vita", "In quale regione e con quale lingua scrisse le sue prime poesie?",
      ["In Sicilia, in dialetto siciliano", "In Friuli, in dialetto friulano", "A Napoli, in napoletano", "In Toscana, in fiorentino"],
      1, "Le prime poesie (Poesie a Casarsa, 1942) sono in dialetto friulano, la lingua della madre e del mondo contadino: lingua affettiva e pre-ideologica."),
    mc("pp04", "Vita", "Come e dove morì Pasolini nel 1975?",
      ["Di malattia a Roma", "In un incidente d'auto", "Assassinato all'Idroscalo di Ostia", "Suicida"],
      2, "Pasolini fu assassinato la notte tra il 1° e il 2 novembre 1975 all'Idroscalo di Ostia, in circostanze mai del tutto chiarite."),
    tf("pp05", "Vita", "Pasolini fu poeta, romanziere, regista e saggista.",
      true, "Vero. Pasolini fu una figura totale: poeta, romanziere, regista cinematografico, saggista e giornalista."),
    tf("pp06", "Vita", "Pasolini si stabilì nelle borgate romane dopo la fuga da Roma.",
      true, "Vero. Dopo l'espulsione dal PCI (1949) si trasferì a Roma e visse nelle borgate, di cui fece il centro della sua opera narrativa."),
    mc("pp07", "Vita", "A quale figura familiare Pasolini fu legatissimo?",
      ["Al padre ufficiale", "Alla madre friulana Susanna", "Al fratello Guido", "Allo zio"],
      1, "Pasolini fu legatissimo alla madre Susanna Colussi, friulana e maestra. Il dialetto friulano è la «lingua della madre»."),

    /* ── IDEOLOGIA ── */
    mc("pp08", "Ideologia", "Cos'è l'«omologazione culturale» per Pasolini?",
      ["L'unione politica della sinistra", "L'annullamento delle differenze culturali e di classe operato dal consumismo, il «nuovo fascismo»", "La riforma della scuola", "La diffusione dei dialetti"],
      1, "L'omologazione è l'annullamento delle differenze culturali e di classe operato dal consumismo: un «nuovo fascismo» più potente di quello storico perché agisce sulle coscienze."),
    mc("pp09", "Ideologia", "Cosa rappresenta il sottoproletariato per Pasolini?",
      ["Una massa da disprezzare", "Una vitalità corporea e culturale autentica che il capitalismo sta distruggendo", "La futura classe dirigente", "Un fenomeno solo economico"],
      1, "Il sottoproletariato (borgate, mondo contadino) rappresenta una vitalità corporea e culturale autentica, pre-borghese, da salvare dall'omologazione."),
    mc("pp10", "Ideologia", "Cos'è la «mutazione antropologica»?",
      ["Un'evoluzione biologica", "Il cambiamento profondo dell'essere umano prodotto dal consumismo", "Una teoria scientifica", "Un fenomeno migratorio"],
      1, "La «mutazione antropologica» è il cambiamento profondo dell'essere umano prodotto dal consumismo: i giovani vitali e autentici diventano piccolo-borghesi senza identità."),
    mc("pp11", "Ideologia", "Perché Pasolini si definisce «corsaro» e «luterano»?",
      ["Perché ama il mare", "Perché è eretico rispetto a ogni potere: sinistra, destra, borghesia, Chiesa", "Perché è protestante", "Perché è un pirata"],
      1, "I titoli Scritti corsari e Lettere luterane dichiarano la posizione di eretico permanente: Pasolini è sempre «contro» ogni potere costituito."),
    tf("pp12", "Ideologia", "Per Pasolini il «nuovo fascismo» dei consumi è più totalitario del fascismo storico.",
      true, "Vero. Il fascismo storico era esteriore; il consumismo invece omologa le coscienze in profondità, realizzando ciò che la dittatura non aveva ottenuto."),
    open("pp13", "Ideologia", "Spiega cosa simboleggia la «scomparsa delle lucciole».",
      "Nel celebre articolo del 1975, la scomparsa delle lucciole (per inquinamento) è metafora della fine di un mondo autentico, contadino e pre-consumistico. Segna il momento della «mutazione antropologica»: il punto in cui l'Italia ha perso la sua diversità culturale, omologata dai consumi e dalla televisione.",
      ["lucciole", "omologazione", "consumismo", "mutazione antropologica", "autenticità"]),

    /* ── POETICA ── */
    mc("pp14", "Poetica", "Il dialetto friulano è per Pasolini…",
      ["Strumento del realismo scientifico", "Lingua affettiva, materna, pre-ideologica e di resistenza culturale", "Una moda letteraria", "Una lingua da abbandonare"],
      1, "Il friulano è la lingua della madre: affettiva, materna, pre-ideologica. Per Pasolini il dialetto è resistenza culturale contro l'omologazione."),
    mc("pp15", "Poetica", "Come definisce Pasolini il rapporto tra cinema e letteratura?",
      ["Due attività separate", "Il cinema è la «continuazione della poetica con altri mezzi»", "Il cinema è superiore alla letteratura", "Il cinema è solo intrattenimento"],
      1, "Per Pasolini il cinema è la «continuazione della poetica con altri mezzi», la «lingua scritta della realtà»: gli stessi temi attraversano poesia, romanzi e film."),
    mc("pp16", "Poetica", "Qual è la caratteristica della lingua poetica pasoliniana?",
      ["Astratta ed essenziale come l'Ermetismo", "Densa, fisica, sensoriale: la parola pesa e brucia", "Aulica e classicista", "Onomatopeica come Pascoli"],
      1, "La lingua di Pasolini è densa, fisica, sensoriale: la parola rende palpabile l'esperienza invece di astrarla. È il rovescio dell'Ermetismo."),
    tf("pp17", "Poetica", "Per Pasolini la poesia è azione politica e impegno civile, non illuminazione interiore.",
      true, "Vero. A differenza degli ermetici, Pasolini riporta la poesia nella storia, nel corpo e nella polemica civile."),
    mc("pp18", "Poetica", "Da quale dialetto attinge Pasolini nei romanzi romani?",
      ["Il napoletano", "Il romanesco delle borgate", "Il siciliano", "Il milanese"],
      1, "Nei romanzi romani (Ragazzi di vita, Una vita violenta) Pasolini trasfigura il dialetto romanesco delle borgate in lingua letteraria."),

    /* ── OPERE ── */
    mc("pp19", "Opere", "Quale opera contiene la critica all'omologazione e al «nuovo fascismo»?",
      ["Ragazzi di vita", "Poesie a Casarsa", "Scritti corsari (1975)", "Le ceneri di Gramsci"],
      2, "Gli Scritti corsari (1975) raccolgono gli articoli con la critica all'omologazione, alla TV come strumento di distruzione culturale, al «nuovo fascismo» dei consumi."),
    mc("pp20", "Opere", "Dove è ambientato Ragazzi di vita (1955)?",
      ["In Friuli", "Nelle borgate romane", "A Bologna", "In Sicilia"],
      1, "Ragazzi di vita è ambientato nelle borgate romane del dopoguerra, con il dialetto romanesco trasfigurato in lingua letteraria."),
    mc("pp21", "Opere", "Cos'è Le ceneri di Gramsci (1957)?",
      ["Un romanzo", "Un poemetto in terzine sul conflitto ragione/sottoproletariato", "Un film", "Un saggio economico"],
      1, "Le ceneri di Gramsci è un poemetto in terzine dantesche, ambientato davanti alla tomba di Gramsci, sul conflitto tra ragione marxista e attrazione per il sottoproletariato."),
    mc("pp22", "Opere", "Quale film del 1975 è l'allegoria estrema del potere come distruzione dei corpi?",
      ["Accattone", "Mamma Roma", "Il Vangelo secondo Matteo", "Salò o le 120 giornate di Sodoma"],
      3, "Salò o le 120 giornate di Sodoma (1975), ultima opera cinematografica, è l'allegoria estrema del potere come distruzione dei corpi."),
    mc("pp23", "Opere", "Con quale film Pasolini esordì alla regia nel 1961?",
      ["Mamma Roma", "Accattone", "Teorema", "Medea"],
      1, "Pasolini esordì alla regia con Accattone (1961), che portava sullo schermo il mondo delle borgate romane."),
    tf("pp24", "Opere", "Petrolio è un romanzo-poema enciclopedico lasciato incompiuto e pubblicato postumo.",
      true, "Vero. Petrolio fu lasciato incompiuto alla morte di Pasolini e pubblicato postumo nel 1992: un'opera magmatica sul potere e la politica italiana."),
    mc("pp25", "Opere", "Cosa rappresentano le Poesie a Casarsa (1942)?",
      ["Il primo romanzo", "Le prime poesie in dialetto friulano", "Un saggio politico", "Una sceneggiatura"],
      1, "Le Poesie a Casarsa (1942) sono le prime poesie in dialetto friulano: il dialetto come lingua madre, affettiva, pre-ideologica."),

    /* ── TESTI ── */
    mc("pp26", "Testi", "Qual è il conflitto centrale de Le ceneri di Gramsci?",
      ["Tra città e campagna", "Tra la ragione marxista e l'attrazione viscerale per il sottoproletariato", "Tra Italia e Friuli", "Tra poesia e cinema"],
      1, "Il poemetto mette in scena il conflitto tra la ragione (Gramsci, il marxismo) e il corpo/i sensi (l'attrazione per il sottoproletariato): «con te e contro di te»."),
    mc("pp27", "Testi", "Come parla Pasolini a Gramsci nel poemetto?",
      ["Come a un nemico", "Come a un padre assente, con ammirazione e ribellione insieme", "Come a un estraneo", "Come a un discepolo"],
      1, "Gramsci, morto nel 1937, è figura paterna: Pasolini gli parla con un rapporto ambivalente di ammirazione e ribellione, «con te e contro di te»."),
    mc("pp28", "Testi", "Nell'articolo delle lucciole, cosa distingue Pasolini?",
      ["Nord e Sud", "Il fascismo «vecchio» di Mussolini dal «nuovo fascismo» dei consumi", "Città e campagna", "Poesia e prosa"],
      1, "Pasolini distingue il fascismo storico (esteriore, violento) dal «nuovo fascismo» dei consumi, che ha realizzato un'omologazione delle coscienze impossibile per la dittatura."),
    tf("pp29", "Testi", "Lo stile delle strofe de Le ceneri di Gramsci è denso, fisico e sensoriale.",
      true, "Vero. Odore d'erba, crepuscolo sui tigli, sole sul selciato: la parola pesa e brucia, rende palpabile l'esperienza. È il rovescio dell'astrazione ermetica."),

    /* ── CONFRONTI ── */
    mc("pp30", "Confronti", "In che rapporto è Pasolini con Ungaretti?",
      ["Sono identici", "Sono opposti: azione politica/corpo vs illuminazione interiore", "Pasolini imita Ungaretti", "Non si conoscono"],
      1, "Sono i due poli della poesia del Novecento: Ungaretti porta la parola verso l'illuminazione e il silenzio; Pasolini la riporta nella storia, nel corpo, nella polemica civile."),
    mc("pp31", "Confronti", "Cosa accomuna e cosa divide Pasolini e D'Annunzio?",
      ["Niente in comune", "Entrambi intellettuali totali e scandalosi, ma D'Annunzio al servizio del potere, Pasolini contro il potere", "Sono identici politicamente", "Entrambi celebrano il superuomo"],
      1, "Entrambi sono intellettuali «totali» e scandalosi che fanno della vita un'opera pubblica, ma per ragioni opposte: D'Annunzio celebra il potere, Pasolini lo combatte in nome degli ultimi."),
    open("pp32", "Confronti", "Spiega il rapporto di Pasolini con il Neorealismo.",
      "Pasolini parte dal Neorealismo (borgate, dialetto, popolo, ambienti reali) ma lo supera: il sottoproletariato non è solo realtà sociale da documentare, ma mito, sacro, vitalità pre-borghese da difendere dall'omologazione. Usa gli strumenti neorealisti caricandoli di valore mitico e sacrale.",
      ["Neorealismo", "borgate", "dialetto", "mito", "sottoproletariato", "omologazione"])

  ];
})();
