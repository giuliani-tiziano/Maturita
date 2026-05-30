/* =========================================================================
   campana-quiz-data.js — Banca domande per Dino Campana
   35 domande in formato compatibile con quiz-engine.js
   NOTA: tutte le stringhe usano doppi apici per evitare problemi con
   gli apostrofi italiani nelle stringhe single-quoted.
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
  window.QUIZ_DATA.campana = [

    /* ── VITA ── */
    mc("ca01", "Vita", "In quale anno e luogo nacque Dino Campana?",
      ["1885 a Marradi (Firenze)", "1863 a Pescara", "1888 ad Alessandria d'Egitto", "1878 a Firenze"],
      0, "Campana nacque il 20 agosto 1885 a Marradi, piccolo paese sull'Appennino tosco-romagnolo in provincia di Firenze."),

    mc("ca02", "Vita", "Dove studia Campana prima di iscriversi all'universita?",
      ["Liceo classico di Firenze", "Scuole a Faenza e Torino", "Istituto tecnico di Bologna", "Seminario di Arezzo"],
      1, "Campana frequenta le scuole a Faenza e Torino, poi si iscrive alla Facolta di Chimica a Bologna e Firenze senza mai terminare gli studi."),

    mc("ca03", "Vita", "A quale rivista fiorentina si avvicina Campana attorno al 1905?",
      ["La Ronda", "Lacerba", "La Voce", "Il Leonardo"],
      2, "Campana entra in contatto con l'ambiente fiorentino della rivista La Voce (fondata da Prezzolini nel 1908), pur rimanendone un outsider inclassificabile."),

    mc("ca04", "Vita", "In quale anno Campana consegno il primo manoscritto a Soffici e Papini?",
      ["1905", "1910", "1913", "1918"],
      2, "Nel 1913 Campana consegna a Soffici e Papini il manoscritto Il piu lungo giorno, che va perduto. Lo riscrivera a memoria."),

    mc("ca05", "Vita", "Come si intitolava il primo manoscritto perduto di Campana?",
      ["I canti della notte", "Notturni toscani", "Il piu lungo giorno", "La tragedia orfica"],
      2, "Il primo manoscritto consegnato a Soffici e Papini nel 1913 si intitolava Il piu lungo giorno. Smarrito da questi, Campana lo riscrisse a memoria."),

    mc("ca06", "Vita", "In quale anno pubblica i Canti orfici e con quale modalita?",
      ["1910, tramite un grande editore milanese", "1914, a proprie spese", "1918, postumi", "1906, sulla rivista La Voce"],
      1, "I Canti orfici vengono pubblicati nel 1914 a proprie spese in 500 copie, dopo che il primo manoscritto era andato perduto."),

    mc("ca07", "Vita", "Con quale scrittrice Campana ebbe una relazione tormentata tra il 1916 e il 1917?",
      ["Ada Negri", "Grazia Deledda", "Sibilla Aleramo", "Matilde Serao"],
      2, "Tra il 1916 e il 1917 Campana ha una relazione intensa e tormentata con la scrittrice Sibilla Aleramo. Il loro carteggio e' uno dei piu intensi della letteratura italiana del Novecento."),

    mc("ca08", "Vita", "In quale ospedale psichiatrico fu internato Campana nel 1918?",
      ["Santa Maria della Pieta a Roma", "San Lazzaro di Reggio Emilia", "Castel Pulci, presso Firenze", "Mombello di Milano"],
      2, "Nel 1918 Campana viene internato nell'ospedale psichiatrico di Castel Pulci, vicino a Firenze, dove rimarra fino alla morte nel 1932."),

    tf("ca09", "Vita", "Campana conosceva il francese, il tedesco, l'inglese e lo spagnolo pur senza mai averli studiati formalmente.",
      true, "Vero. Campana e' un autodidatta straordinario: legge Baudelaire e Rimbaud in francese, Nietzsche in tedesco, Whitman in inglese, senza percorsi formali di studio delle lingue."),

    tf("ca10", "Vita", "Il manoscritto originale de Il piu lungo giorno e' andato definitivamente perduto.",
      false, "Falso. Nel 1971, quasi sessant'anni dopo la scomparsa, il manoscritto viene ritrovato negli archivi di Soffici, permettendo il confronto con i Canti orfici pubblicati."),

    /* ── POETICA ── */
    mc("ca11", "Poetica", "Cosa significa che la poesia di Campana e' «orfica»?",
      ["Usa la scala musicale dorica", "E' poesia come discesa agli Inferi, rivelazione, parola magica e misteriosa", "Imita la poesia greca antica", "E' ispirata al canto liturgico"],
      1, "La concezione orfica riprende il mito di Orfeo: il poeta scende nelle zone oscure del reale per riportarne una verita' intraducibile in linguaggio razionale. La poesia non comunica: rivela."),

    mc("ca12", "Poetica", "Quali autori francesi lesse Campana direttamente in lingua originale?",
      ["Hugo e Zola", "Flaubert e Maupassant", "Baudelaire e Rimbaud", "Verlaine e Mallarme"],
      2, "Campana legge Baudelaire e Rimbaud in francese, non attraverso traduzioni o mediazioni italiane. E' l'unico poeta italiano del primo Novecento a fare questo uso strutturale del Simbolismo francese."),

    mc("ca13", "Poetica", "La 'musicalita ossessiva' dei Canti orfici si basa su:",
      ["Rime baciate perfette e metro regolare", "Uso sistematico della ripetizione e della reiterazione di parole e immagini", "Citazioni di melodie musicali classiche", "Alternanza di rime e assonanze"],
      1, "La musicalita ossessiva e' costruita sulla ripetizione: la stessa immagine o le stesse parole ritornano variate fino a diventare un'incantazione. Non cerca armonia: costruisce ossessione."),

    mc("ca14", "Poetica", "Cosa distingue la lettura di Nietzsche in Campana da quella in D'Annunzio?",
      ["D'Annunzio non ha mai letto Nietzsche; Campana si", "D'Annunzio costruisce il superuomo mondano-estetizzante; Campana legge Nietzsche come sfida esistenziale abissale", "Entrambi hanno la stessa interpretazione", "Campana rifiuta Nietzsche; D'Annunzio lo accetta"],
      1, "D'Annunzio usa Nietzsche per costruire il personaggio del superuomo trionfante e mondano. Campana lo legge direttamente in tedesco come sfida esistenziale, senza filtri estetizzanti."),

    mc("ca15", "Poetica", "Quale poeta americano influenza il verso lungo di Campana?",
      ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Henry Wadsworth Longfellow"],
      2, "Whitman, letto in inglese da Campana, e' all'origine del verso lungo, catalogante, aperto all'esperienza totale del mondo — in netto contrasto con il frammento breve degli altri vociani."),

    mc("ca16", "Poetica", "Come si chiama la tecnica di montaggio visivo dei Canti orfici?",
      ["Impressionismo letterario", "Cinematografia sentimentale", "Flusso di coscienza", "Prosa d'arte"],
      1, "La 'cinematografia sentimentale' e' il montaggio ardito di immagini e temporalita' non lineare: le scene si sovrappongono, si interrompono, riprendono da punti imprevedibili — come in un sogno."),

    open("ca17", "Poetica", "Spiega perche Campana e' considerato un 'outsider inclassificabile' rispetto alla sua epoca.",
      "Campana gravita nell'orbita de La Voce ma non vi appartiene: i vociani preferiscono il frammento breve e la prosa d'arte; lui scrive un poema visionario e lungo. Non appartiene al Simbolismo, all'Espressionismo, al Futurismo, alla Scapigliatura. Legge le sue fonti in lingua originale senza mediazioni italiane. E' geneticamente singolo, senza scuola.",
      ["outsider", "La Voce", "inclassificabile", "poema visionario", "lingua originale"]),

    /* ── CANTI ORFICI ── */
    mc("ca18", "Opere", "Cosa e' il 'prosimetro'?",
      ["Un tipo di sonetto allungato", "Un genere che alterna prosa lirica e versi", "Un romanzo in versi liberi", "Un componimento teatrale in versi"],
      1, "Il prosimetro alterna prosa e versi. I Canti orfici sono un prosimetro: prosa lirica e versi si intrecciano in un flusso continuo dove le distinzioni di genere si dissolvono."),

    mc("ca19", "Opere", "Qual e' il sottotitolo in tedesco dei Canti orfici e cosa significa?",
      ["'La tragedia tedesca in Italia' — critica alla cultura italiana", "'Die Tragodie des letzten Germanen in Italien' — 'La tragedia dell'ultimo Germano in Italia', ideale di purezza morale", "'I canti dei Germani' — riferimento alla tradizione nordica", "'Musica e poesia' — dialogo tra le arti"],
      1, "Il sottotitolo tedesco Die Tragodie des letzten Germanen in Italien ('La tragedia dell'ultimo Germano in Italia') non e' una rivendicazione etnica: e' un ideale di purezza morale e spirituale contro la corruzione del presente italiano."),

    mc("ca20", "Opere", "In quante sezioni sono divisi i Canti orfici?",
      ["Due (poesie e prose)", "Tre (Notte, Giorno, Alba)", "Quattro (La Notte, Notturni, La Verna, Varie e frammenti)", "Cinque"],
      2, "I Canti orfici sono divisi in quattro sezioni: La Notte, Notturni, La Verna, Varie e frammenti. Ognuna ha un tono e un registro diverso ma tutte convergono nella matrice orfica."),

    mc("ca21", "Opere", "Cosa rappresenta la sezione La Verna nei Canti orfici?",
      ["Le poesie scritte durante il ricovero psichiatrico", "Il pellegrinaggio spirituale al santuario francescano di La Verna (Arezzo)", "La descrizione del viaggio in America del Sud", "Le poesie giovanili scritte a Marradi"],
      1, "La Verna e' il santuario francescano in Casentino (Arezzo) dove san Francesco ricevette le stimmate. Il pellegrinaggio di Campana e' allo stesso tempo fisico e spirituale: il viaggio come ascesi."),

    tf("ca22", "Opere", "I Canti orfici, nonostante l'apparenza frammentaria, sono un poema unitario retto da corrispondenze interne.",
      true, "Vero. L'apparente frammentarieta' e' ingannevole. Le quattro sezioni formano un percorso coerente retto da corrispondenze interne e dalla matrice orfica che attraversa tutta l'opera."),

    tf("ca23", "Opere", "I Canti orfici ebbero un grande successo di pubblico alla loro pubblicazione nel 1914.",
      false, "Falso. I Canti orfici (1914, 500 copie a spese dell'autore) ebbero scarso riscontro immediato. Il riconoscimento di Campana e' postumo."),

    /* ── L'INVETRIATA ── */
    mc("ca24", "Testi", "In quale sezione dei Canti orfici si trova L'invetriata?",
      ["La Notte", "Notturni", "La Verna", "Varie e frammenti"],
      3, "L'invetriata si trova nella sezione Varie e frammenti, l'ultima dei Canti orfici, che raccoglie testi di diverso registro."),

    mc("ca25", "Testi", "Cosa rappresenta la 'piaga rossa languente' ne L'invetriata?",
      ["Una ferita fisica del poeta", "Il tramonto rosso della sera estiva", "La condizione esistenziale di scissione e sofferenza — si estende dal cuore del poeta al cuore della sera stessa", "Un elemento decorativo del paesaggio notturno"],
      2, "La piaga rossa languente e' il simbolo centrale della lirica: ripetuta ai vv. 7 e 11, rappresenta il dolore esistenziale del poeta che si estende fino a invadere la sera stessa. E' il colore rosso del simbolismo cromatico campaniano."),

    mc("ca26", "Testi", "Cosa indica la 'Madonnina del Ponte' ne L'invetriata?",
      ["Una statua barocca di Roma", "Una cappella votiva sul fiume Lamone, vicino a Marradi", "Un affresco nella cattedrale di Firenze", "Un soprannome della donna amata"],
      1, "La Madonnina del Ponte e' una cappella votiva sul fiume Lamone nei pressi di Marradi (paese natale di Campana). E' uno dei rarissimi riferimenti geografici concreti nella sua poesia."),

    mc("ca27", "Testi", "Quale figura retorica e' presente in 'Le stelle sono bottoni di madreperla e la sera si veste di velluto'?",
      ["Metafora e personificazione della sera", "Similitudine e anastrofe", "Iperbole e anafora", "Metonimia e chiasmo"],
      0, "Il verso contiene una metafora (stelle = bottoni di madreperla) e una personificazione (la sera si veste di velluto). La sera e' trattata come una figura mondana e frivola."),

    mc("ca28", "Testi", "Quali sono i tre momenti temporali de L'invetriata?",
      ["Mattino, mezzogiorno, pomeriggio", "Tramonto (vv. 1-3), sera (vv. 4-9), notte (vv. 10-11)", "Passato, presente, futuro", "Infanzia, giovinezza, vecchiaia"],
      1, "La struttura temporale e' precisa: tramonto (le luci filtrano dall'invetriata, vv. 1-3), sera (la stanza con l'odore di putredine, vv. 4-9), notte (la piaga nel cuore della sera, vv. 10-11)."),

    open("ca29", "Testi", "Analizza la funzione della ripetizione ossessiva ne L'invetriata con almeno due esempi.",
      "La ripetizione costruisce ossessione e allucinazione, non musicalita' armoniosa. Esempio 1: 'piaga rossa languente' ripetuta ai vv. 7 e 11 — il dolore non si conclude ma si espande, invadendo prima la stanza poi il cuore della sera. Esempio 2: 'c'e / c'e / c'e' ripetuto tre volte — la presenza minacciosa si intensifica progressivamente. Esempio 3: 'fatua / fatua' e 'tremola / tremola' in un solo verso.",
      ["ripetizione", "piaga rossa languente", "ossessione", "allucinazione", "tre volte"]),

    /* ── CONFRONTI ── */
    mc("ca30", "Confronti", "In cosa differisce Campana da Pascoli nell'uso del paesaggio toscano?",
      ["Pascoli descrive il paesaggio realisticamente; Campana lo ignora", "Pascoli usa il paesaggio come luogo affettivo del nido; Campana lo trasfigura in visione visionaria del vagabondo sradicato", "Entrambi usano il paesaggio allo stesso modo", "Campana usa il paesaggio umbro; Pascoli quello toscano"],
      1, "Pascoli cerca il nido e la protezione nel paesaggio romagnolo; Campana fugge da Marradi e lo trasfigura. Il paesaggio e' intimita' in Pascoli, materia prima per la visione in Campana."),

    mc("ca31", "Confronti", "Come si differenzia l'uso della parola poetica in Campana rispetto a Ungaretti?",
      ["Campana usa rime, Ungaretti no", "Campana ha visione prolungata e ossessiva con verso lungo; Ungaretti ha l'illuminazione istantanea con il verso-parola brevissimo", "Non c'e' differenza rilevante", "Campana scrive in prosa; Ungaretti in versi"],
      1, "Campana (1914) precede Ungaretti (L'Allegria, 1919). Entrambi usano la parola come rivelazione. Ma Campana ha visione prolungata con verso lungo whitmaniano; Ungaretti ha il lampo istantaneo e il silenzio bianco."),

    tf("ca32", "Confronti", "Campana influenzera' Ungaretti e gli Ermetici nonostante il limitato successo contemporaneo dei Canti orfici.",
      true, "Vero. L'influenza di Campana su Ungaretti e sugli Ermetici (Quasimodo, Luzi, Gatto) e' riconosciuta dalla critica: la parola come rivelazione opaca, non comunicazione, e' un'eredita' campaniana."),

    mc("ca33", "Confronti", "Montale definisce la poesia di Campana…",
      ["'Poesia rigorosa e classica'", "'Poesia in fuga, che si disfa sempre sul punto di concludere'", "'Poesia politica e impegnata'", "'Poesia popolare e comprensibile'"],
      1, "La celebre definizione di Montale e' 'poesia in fuga, che si disfa sempre sul punto di concludere': la poesia di Campana sfugge alla conclusione, si autodistrugge nel momento in cui sembra realizzarsi."),

    /* ── MISTO ── */
    mc("ca34", "Misto", "Quale patologia fu diagnosticata a Campana durante l'internamento?",
      ["Epilessia", "Depressione cronica", "Schizofrenia", "Paranoia"],
      2, "A Campana fu diagnosticata la schizofrenia. Ma la sua condizione non esaurisce chi e' come intellettuale: e' un uomo coltissimo, poliglotta, capace di scrittura lucidissima anche durante il ricovero."),

    open("ca35", "Misto", "Perche i Canti orfici (1914) segnano un punto di non ritorno nella lirica italiana del primo Novecento?",
      "I Canti orfici sono l'unica opera di pura visionarieta' orfica nella tradizione italiana. Campana fonde Simbolismo francese (non mediato) ed Espressionismo, usa il prosimetro con una tensione unitaria inedita, sviluppa il verso lungo di respiro whitmaniano contro la tendenza al frammento breve. Nessun poeta italiano del suo tempo ha questa sintesi. Influenzera' Ungaretti e gli Ermetici.",
      ["visionarieta'", "orfica", "Simbolismo", "prosimetro", "Ungaretti", "Ermetici"])

  ];
})();
