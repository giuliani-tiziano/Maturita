/* =========================================================================
   vociani-quiz-data.js — Banca domande: I Vociani
   50 domande: 35 MC + 10 TF + 5 open
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
  window.QUIZ_DATA.vociani = [

    mc("vo01","Origini","Chi fonda la rivista La Voce e in quale anno?",
      ["Giovanni Papini, 1905","Giuseppe Prezzolini, 1908","Ardengo Soffici, 1910","Clemente Rebora, 1912"],
      1,"La Voce viene fondata a Firenze da Giuseppe Prezzolini nel 1908. Non e una scuola letteraria con manifesto: e un laboratorio intellettuale aperto che accoglie posizioni diverse — interventismo politico, rinnovamento culturale, sperimentalismo poetico."),

    mc("vo02","Origini","I Vociani sono una scuola letteraria con un programma unitario definito?",
      ["Si, hanno un manifesto pubblicato nel 1908","No: e un insieme di voci diverse aggregate intorno alla rivista, senza poetica omogenea","Si, ma il manifesto e rimasto segreto","No, e sono categoricamente contrari a qualsiasi programma"],
      1,"No: i Vociani non sono una scuola con programma unitario. Sono poeti e scrittori diversi aggregati intorno alla rivista La Voce, accomunati dall'interesse per il rinnovamento culturale e dal rifiuto della retorica dannunziana e accademica."),

    mc("vo03","Origini","In quale periodo e attiva la rivista La Voce?",
      ["1905-1910","1908-1916","1913-1922","1920-1930"],
      1,"La Voce e attiva dal 1908 al 1916. Cambia diversi direttori: Prezzolini, poi Papini, poi Giuseppe De Robertis (1913-1916), che porta la rivista verso la radicalizzazione letteraria del frammento e della prosa d'arte."),

    mc("vo04","Origini","Quale critico e direttore porta La Voce verso la radicalizzazione letteraria del frammento?",
      ["Giuseppe Prezzolini","Giovanni Papini","Giuseppe De Robertis","Scipio Slataper"],
      2,"Giuseppe De Robertis dirige La Voce nella sua fase finale (1913-1916) e la porta verso la radicalizzazione letteraria: il frammento come forma privilegiata, la prosa d'arte, la poesia pura. E il critico che teorizza la 'poesia assoluta' e anticipa l'Ermetismo."),

    mc("vo05","Origini","Quale altra rivista fiorentina, piu vicina al Futurismo, dialoga e si scontra con La Voce?",
      ["Solaria","Il Leonardo","Lacerba","La Ronda"],
      2,"Lacerba (fondata da Papini e Soffici nel 1913) e la rivista che ospita sia posizioni vociane che futuriste, e che rappresenta la corrente piu radicale e provocatoria del movimento. La Voce e piu riflessiva; Lacerba e piu aggressiva."),

    mc("vo06","Poetica","Cosa e il 'frammento' come forma poetica vociana?",
      ["Un testo breve e incompiuto per incapacita","Un testo breve e incompiuto per scelta: cattura l'attimo, il lampo, l'intuizione — il tutto non e dicibile, solo la scheggia puo catturare qualcosa di essenziale","Un brano estratto da un testo piu lungo","Un tipo di prosa narrativa breve"],
      1,"Il frammento vociano: non e incompletezza ma poetica. Il tutto — il senso pieno della vita, il poema organico — non e dicibile. Solo il frammento, la scheggia, il lampo puo catturare qualcosa di essenziale. Rebora intitola la sua raccolta 'Frammenti lirici' dichiarando questa scelta."),

    mc("vo07","Poetica","Cosa e la 'prosa d'arte' o 'prosa lirica' vociana?",
      ["Un romanzo con stile letterario elevato","Un testo in prosa che usa gli strumenti della poesia (ritmo, immagine, analogia) senza rispettare il verso","Un tipo di saggio critico","Una prosa che imita il verso di D'Annunzio"],
      1,"La prosa d'arte: testo in prosa con alta tensione poetica — ritmo interno, immagine, analogia — senza rispettare la metrica formale. Non e romanzo ne poesia: e una forma ibrida. Il mio Carso di Slataper (1912) e il modello compiuto."),

    mc("vo08","Poetica","Quale tendenza stilistica caratterizza in particolare la poesia di Rebora?",
      ["Il simbolismo musicale di tipo verlainiano","L'espressionismo: immagini violente, ritmo spezzato, tensione morale quasi fisica","Il realismo prosastico di tipo verista","La vaghezza impressionistica di tipo crepuscolare"],
      1,"Rebora porta nella lirica italiana l'espressionismo: immagini violente, ritmo spezzato, tensione morale ed esistenziale quasi fisica. E la versione italiana di una tendenza europea (Munch, il Blaue Reiter) ma con caratteri propri legati alla spiritualita e alla coscienza morale."),

    mc("vo09","Poetica","Il Vocianesimo e il Crepuscolarismo condividono quale caratteristica?",
      ["L'entusiasmo futurista per la modernita","Il rifiuto dell'ornamentazione dannunziana e una certa essenzialita espressiva","Il nazionalismo politico","L'uso del dialetto locale"],
      1,"Vociani e Crepuscolaristi condividono il rifiuto dell'ornamentazione magniloquente di D'Annunzio e una preferenza per l'essenzialita espressiva. Ma i Vociani sono piu impegnati moralmente e piu sperimentali formalmente; i Crepuscolari sono piu malinconici e meno tensivi."),

    mc("vo10","Poetica","Il Vocianesimo e il tramite tra quale corrente europea e l'Ermetismo italiano?",
      ["Il Romanticismo tedesco e il Futurismo","Il Simbolismo francese e l'Ermetismo italiano","Il Naturalismo e il Neorealismo","L'Espressionismo tedesco e il Neorealismo"],
      1,"Il Vocianesimo e il tramite principale tra il Simbolismo francese (Mallarme, Rimbaud) e l'Ermetismo italiano (Ungaretti, Quasimodo). La linea e: Baudelaire/Mallarme → Simbolismo → Vociani (La Voce) → Ermetismo. Ungaretti frequenta l'ambiente vociano prima di sviluppare la sua poetica."),

    mc("vo11","Poetica","Quale poeta e considerato l'outsider assoluto rispetto ai Vociani pur essendo contemporaneo?",
      ["Camillo Sbarbaro","Clemente Rebora","Dino Campana","Scipio Slataper"],
      2,"Dino Campana: contemporaneo dei Vociani, pubblica i Canti orfici nello stesso 1914 di Pianissimo di Sbarbaro. Ma non puo essere classificato come Vociano: la sua opera e piu visionaria, piu orfica, piu radicalmente sperimentale. E l'outsider assoluto del primo Novecento italiano."),

    mc("vo12","Poetica","Cosa caratterizza la poetica di Sbarbaro rispetto agli altri Vociani?",
      ["La tensione morale espressionista","L'inerzia psicologica e la distanza dalla vita: il paesaggio come specchio di un'anima incapace di sentire","Il vitalismo nazionalista","La sperimentazione tipografica"],
      1,"Sbarbaro e il poeta dell'inerzia: distanza dalla vita, incapacita di sentire, paesaggio ligure (freddo, aspro) come specchio di un'anima che guarda se stessa dall'esterno. Mentre Rebora urla, Sbarbaro tace. Pianissimo — l'indicazione musicale piu bassa — e il titolo perfetto."),

    mc("vo13","Opere","Quale raccolta di Camillo Sbarbaro (1914) e il suo testo principale?",
      ["Resine","Rimanenze","Pianissimo","Trucioli"],
      2,"Pianissimo (1914) e la raccolta principale di Sbarbaro. Il titolo e l'indicazione musicale piu bassa — il contrario del fragore futurista e della magniloquenza dannunziana. Distanza dalla vita, inerzia, paesaggio ligure come specchio dell'anima."),

    mc("vo14","Opere","Quale raccolta di Clemente Rebora (1913) e la piu rappresentativa dell'espressionismo vociano?",
      ["Canti anonimi","Frammenti lirici","Via crucis","Curriculum vitae"],
      1,"Frammenti lirici (1913) e la raccolta principale di Rebora. Il titolo e gia un manifesto: non 'poesie' ma 'frammenti', non 'odi' ma 'lirici'. Tensione morale e religiosa, immagini violente, ritmo spezzato — espressionismo italiano nella sua forma piu intensa."),

    mc("vo15","Opere","Quale testo di Scipio Slataper (1912) e il modello compiuto di prosa lirica vociana?",
      ["Trieste","Il mio Carso","Questa nostra Trieste","Appunti e note di diario"],
      1,"Il mio Carso (1912) di Slataper: prosa lirica autobiografica. Il paesaggio carsico (altopiano tra Trieste e la Slovenia) come spazio fisico dell'identita, dell'appartenenza, del conflitto tra culture (Slataper e triestino di lingua italiana in territorio di frontiera)."),

    mc("vo16","Opere","Quale e il destino di Scipio Slataper?",
      ["Muore di malattia nel 1920","Muore nella Prima Guerra Mondiale nel 1915","Si converte e diventa sacerdote","Emigra in America del Sud"],
      1,"Slataper muore nella Prima Guerra Mondiale nel 1915, sul Carso che aveva descritto nella sua opera principale. Il Carso del libro diventa il Carso della battaglia — e della morte. La sua storia e tra le piu tragiche del Vocianesimo."),

    mc("vo17","Confronti","Come si differenziano i Vociani dai Futuristi nel rapporto con la modernita?",
      ["I Vociani amano la modernita industriale come i Futuristi","I Vociani guardano all'interiorita, alla coscienza morale, al frammento; i Futuristi guardano all'esteriorita, alla macchina, alla velocita. Approcci opposti alla stessa crisi culturale","Non c'e differenza tra le due correnti","I Futuristi sono piu introspettivi dei Vociani"],
      1,"Vociani vs Futuristi: gli stessi anni, la stessa crisi culturale, approcci opposti. I Futuristi esaltano l'esteriorita (macchina, velocita, energia); i Vociani approfondiscono l'interiorita (coscienza morale, frammento, prosa d'arte). Talvolta dialogano sulle stesse riviste (Lacerba) ma restano distanti nei valori."),

    mc("vo18","Confronti","Come i Vociani preparano l'Ermetismo?",
      ["Il Vocianesimo non ha nessuna relazione con l'Ermetismo","Il frammento vociano diventa la parola assoluta ermetica; Ungaretti e il tramite principale: frequenta l'ambiente vociano e poi sviluppa l'Ermetismo con L'allegria","I Vociani si oppongono all'Ermetismo","L'Ermetismo nasce prima del Vocianesimo"],
      1,"La linea e chiara: il frammento vociano (Rebora, Sbarbaro) → la parola assoluta ermetica (Ungaretti). Ungaretti frequenta La Voce e i vociani negli anni della sua formazione. L'Allegria (1919) porta il frammento vociano all'estremo della purezza ermetica — il verso di una parola, il bianco della pagina."),

    mc("vo19","Testi","Qual e il tema centrale della poesia di Sbarbaro 'Taci, anima stanca di godere'?",
      ["La nostalgia per la giovinezza perduta","L'inerzia psicologica e la distanza dalla vita: l'anima e 'stanca di godere e di soffrire', incapace di emozione","La protesta sociale contro l'ingiustizia","Il viaggio come metafora esistenziale"],
      1,"'Taci, anima stanca di godere / e di soffrire': l'inerzia come tema centrale. L'anima non vuole ne gioia ne dolore — solo quiete. E la forma piu radicale del crepuscolarismo: non malinconia ma assenza totale di emozione. Il paesaggio ligure invernale (freddo, grigio) rispecchia questo stato."),

    mc("vo20","Testi","Perche Il mio Carso di Slataper non e classificabile ne come romanzo ne come poesia?",
      ["Perche e un saggio critico","Perche usa lo stile epistolare","Perche e una prosa lirica autobiografica: ha il ritmo e la densita della poesia ma e scritta in prosa, con una trama autobiografica esile","Perche e scritto in dialetto triestino"],
      2,"Il mio Carso e una prosa lirica autobiografica: non romanzo (manca una trama organica), non poesia (e in prosa), non saggio (e autobiografico e poetico). E la forma ibrida che i Vociani privilegiano — la prosa d'arte o prosa lirica — e che Slataper porta alla sua realizzazione piu compiuta."),

    mc("vo21","Testi","Cosa si intende per 'tensione morale' nella poesia di Rebora?",
      ["L'impegno politico di sinistra","La ricerca angosciosa di un fondamento esistenziale e religioso attraverso la poesia: le immagini violente esprimono un'urgenza morale","La critica alla societa capitalista","L'etica della guerra e del sacrificio"],
      1,"La tensione morale di Rebora: la poesia non e esercizio estetico ma ricerca di un fondamento esistenziale. Le immagini violente e il ritmo spezzato esprimono un'urgenza — quasi fisica — di trovare un senso. Nel 1929 si convertira e diventera sacerdote rosminiano: la tensione morale delle poesie prefigurava questa svolta."),

    mc("vo22","Glossario","Cosa e la 'rivista letteraria' nel contesto culturale del primo Novecento italiano?",
      ["Un volume di critica letteraria accademica","Il luogo fondamentale di aggregazione culturale e dibattito: sostituisce il salotto ottocentesco e il manifesto futurista, offrendo una piattaforma piu plurale e aperta","Un periodico commerciale di letteratura popolare","Un bollettino interno di un'associazione letteraria"],
      1,"Le riviste letterarie del primo Novecento italiano sono i luoghi fondamentali della cultura: La Voce, Il Leonardo, Lacerba. Ogni posizione culturale si definisce in relazione alle riviste. La rivista e piu plurale del manifesto (futurista) e piu pubblica del salotto (ottocentesco)."),

    mc("vo23","Glossario","Cosa e l'espressionismo italiano in poesia?",
      ["L'imitazione dell'Espressionismo pittorico tedesco","Una tendenza nella poesia italiana (principalmente Rebora e Campana) che porta immagini violente, ritmo spezzato, tensione fisica della parola — parallelo all'espressionismo europeo ma con caratteri propri","Un movimento organizzato con manifesto","Una tecnica tipografica"],
      1,"L'espressionismo italiano in poesia: immagini violente, ritmo spezzato, tensione quasi fisica della parola. E nella poesia di Rebora (Frammenti lirici) e Campana (Canti orfici). Parallelo all'Espressionismo europeo (Munch, letteratura tedesca) ma con caratteri propri legati alla spiritualita e all'identita italiana."),

    mc("vo24","Confronti","Perche Campana non puo essere classificato come Vociano nonostante sia contemporaneo?",
      ["Perche e nato in Sicilia, non in Toscana","Perche i Canti orfici sono troppo lunghi per la forma del frammento vociano","Perche la sua opera e piu visionaria, orfica, radicalmente sperimentale — non classificabile in nessuna corrente","Perche non ha mai pubblicato sulla rivista La Voce"],
      2,"Campana e un 'outsider assoluto': contemporaneo dei Vociani, frequenta l'ambiente fiorentino, ma i Canti orfici non sono classificabili ne come Vocianismo (troppo visionari e lunghi) ne come Futurismo (troppo mitici e lirici) ne come Crepuscolarismo (troppo intensi). E un caso singolare nella letteratura italiana del primo Novecento."),

    mc("vo25","Confronti","Come si differenzia Sbarbaro da Rebora nel Vocianesimo?",
      ["Sbarbaro e piu politicamente impegnato di Rebora","Sbarbaro ha il tono piu basso del Vocianesimo (inerzia, silenzio, pianissimo); Rebora ha il tono piu alto (urlo morale, espressionismo, tensione violenta)","Non c'e differenza rilevante tra i due","Rebora e il piu pessimista; Sbarbaro il piu ottimista"],
      1,"Sbarbaro e Rebora sono i due poli del Vocianesimo poetico. Sbarbaro: tono pianissimo, inerzia, distanza dalla vita, paesaggio come specchio. Rebora: tono fortissimo, tensione morale, espressionismo, violenza delle immagini. Rappresentano la gamma completa dell'espressione vociana, dall'estremo basso all'estremo alto."),

    tf("vo26","Origini","La Voce viene fondata a Roma da Benedetto Croce nel 1910.",
      false,"Falso. La Voce viene fondata a Firenze da Giuseppe Prezzolini nel 1908. Non a Roma e non da Croce — sebbene Croce collabori alla rivista. Firenze e il centro culturale del Vocianesimo."),

    tf("vo27","Origini","I Vociani hanno un manifesto letterario pubblicato all'inizio della corrente.",
      false,"Falso. I Vociani non hanno un manifesto: non sono una scuola con programma unitario. Sono poeti diversi aggregati intorno alla rivista senza una poetica comune esplicita. Questa pluralita e aperta e una delle loro caratteristiche fondamentali."),

    tf("vo28","Poetica","Il frammento vociano e una forma di incompiutezza involontaria dei poeti.",
      false,"Falso. Il frammento e una scelta estetica consapevole, non un difetto. Il titolo stesso di Rebora — 'Frammenti lirici' — dichiara la scelta. Il tutto non e dicibile: solo il frammento, la scheggia, il lampo puo catturare qualcosa di essenziale."),

    tf("vo29","Poetica","La prosa d'arte vociana e una forma ibrida tra prosa narrativa e poesia.",
      true,"Vero. La prosa d'arte e ibrida: usa la prosa ma con gli strumenti della poesia (ritmo interno, immagine, analogia, densita semantica). Non e ne romanzo ne poesia in senso stretto. Il mio Carso di Slataper ne e il modello piu compiuto."),

    tf("vo30","Opere","Scipio Slataper muore sul Carso durante la Prima Guerra Mondiale.",
      true,"Vero. Slataper — triestino che aveva cantato il Carso nel suo libro omonimo — muore combattendo sul Carso nel 1915. Il paesaggio che aveva usato come spazio dell'identita e della poesia diventa il paesaggio della sua morte. E una delle storie piu tragiche del Vocianesimo."),

    tf("vo31","Confronti","Il Vocianesimo e fondamentalmente antagonista all'Ermetismo che nasce successivamente.",
      false,"Falso. Il Vocianesimo prepara e anticipa l'Ermetismo: il frammento vociano diventa la parola assoluta ermetica; l'essenzialita del verso vociano diventa il verso-lampo di Ungaretti. Ungaretti frequenta l'ambiente vociano. La relazione e di continuita, non di opposizione."),

    tf("vo32","Confronti","Dino Campana e classificato come uno dei principali poeti vociani.",
      false,"Falso. Campana e un outsider inclassificabile: contemporaneo dei Vociani, ma i Canti orfici non sono classificabili come Vocianesimo. Campana e piu visionario, piu orfico, piu radicalmente sperimentale di qualsiasi Vociano. E un caso unico nella letteratura italiana del primo Novecento."),

    tf("vo33","Poetica","Clemente Rebora si convertera alla fede cattolica dopo la sua produzione vociana.",
      true,"Vero. Rebora si converte nel 1929 e diventa sacerdote della congregazione rosminiana. La sua poesia post-conversione e radicalmente diversa da quella vociana — ma la tensione morale e religiosa dei Frammenti lirici prefigura gia questa svolta. E uno dei percorsi piu radicali del Novecento italiano."),

    tf("vo34","Opere","Pianissimo di Sbarbaro (1914) e una raccolta di poesie dalla grande energia e vitalita.",
      false,"Falso. Pianissimo e esattamente il contrario: il titolo (l'indicazione musicale piu bassa) suggerisce il tono minimo, quieto, inearto. E la raccolta dell'inerzia, della distanza dalla vita, del paesaggio freddo come specchio di un'anima che non riesce a sentire."),

    tf("vo35","Origini","La rivista La Voce e ancora attiva oggi.",
      false,"Falso. La Voce cessa le pubblicazioni nel 1916. Dura solo otto anni ma in quel periodo pubblica testi fondamentali della cultura italiana del primo Novecento. La sua chiusura coincide con l'entrata in guerra dell'Italia e la dispersione dei suoi collaboratori."),

    open("vo36","Poetica","Spiega perche il 'frammento' e la forma privilegiata dei Vociani.",
      "Il frammento vociano nasce da una visione del mondo: il tutto — il senso pieno della vita, il poema organico e armonico — non e dicibile ne attraverso la lirica tradizionale ne attraverso il romanzo. Solo il frammento, la scheggia, il lampo puo catturare qualcosa di essenziale nella sua intensita momentanea. E una poetica dell'incompiutezza come scelta, non come difetto. Rebora intitola 'Frammenti lirici' dichiarando questa scelta: ogni poesia e un frammento di un tutto che non si puo dire. E una posizione opposta a quella di D'Annunzio (il poema totale, la parola che tutto abbraccia) e del Futurismo (il manifesto totale, il programma che tutto trasforma).",
      ["frammento","tutto","scheggia","lampo","incompiutezza","scelta"]),

    open("vo37","Confronti","Come si differenziano i Vociani dai Futuristi nell'approccio alla crisi culturale del primo Novecento?",
      "Stessa crisi culturale (il peso di D'Annunzio, il positivismo in crisi, la modernita accelerata), risposte opposte. I Futuristi reagiscono verso l'esteriorita: piu velocita, piu rumore, piu macchina, piu futuro. Distruzione della tradizione come programma. I Vociani reagiscono verso l'interiorita: piu silenzio, piu essenzialita, piu coscienza morale, piu frammento. Non distruzione ma approfondimento. I Futuristi gridano; i Vociani cercano. Entrambi sulle stesse riviste (Lacerba) ma con valori inconciliabili.",
      ["crisi","Futuristi","Vociani","esteriorita","interiorita","approfondimento"]),

    open("vo38","Opere","Analizza Il mio Carso di Slataper come esempio di prosa d'arte vociana.",
      "Il mio Carso (1912) e la realizzazione piu compiuta della prosa d'arte vociana: non romanzo (non ha trama organica), non poesia (e in prosa), non saggio (e autobiografico e poetico). E una prosa con ritmo interno, densita di immagini, analogie poetiche. Il Carso — l'altopiano carsico — non e solo paesaggio: e lo spazio fisico dell'identita di Slataper, triestino di lingua italiana in territorio di frontiera. La domanda che attraversa il libro ('chi sono, dove mi appartengono?') trova risposta nel paesaggio — in modo obliquo e simbolico, non filosofico. E la prosa lirica come indagine di se attraverso il luogo.",
      ["prosa d'arte","Carso","identita","paesaggio","obliquo","simbolico"]),

    open("vo39","Confronti","Come i Vociani preparano l'Ermetismo italiano?",
      "La preparazione avviene su piu livelli. 1) Formale: il frammento vociano (verso breve, essenziale) diventa il verso-lampo di Ungaretti ('M'illumino / d'immenso' — due parole). 2) Concettuale: l'idea vociana che il tutto non sia dicibile si trasforma nell'idea ermetica che la parola debba avere densita massima. 3) Biografica: Ungaretti frequenta l'ambiente vociano prima di sviluppare la sua poetica. La linea e: Simbolismo francese → Vociani → Ermetismo. Il Vocianesimo e il tramite indispensabile senza il quale l'Ermetismo non sarebbe stato possibile.",
      ["formale","concettuale","Ungaretti","tramite","linea","simbolismo"]),

    open("vo40","Poetica","Perche La Voce e descritta come 'laboratorio intellettuale' invece che come movimento?",
      "Laboratorio implica pluralita, apertura, sperimentazione — al contrario del manifesto (che implica programma chiuso) e della scuola (che implica regole). La Voce pubblica posizioni diverse: l'interventismo politico di Prezzolini e Slataper, il nazionalismo di Papini, il pacifismo di alcuni, l'espressionismo di Rebora, il lirismo di Sbarbaro. Questa pluralita e una forza: la rivista diventa il luogo in cui la cultura italiana del primo Novecento si interroga su se stessa senza dogmi. La chiusura nel 1916 coincide con l'esaurimento di questa apertura — la guerra divide chi si aspettava di trovare risposte nella cultura.",
      ["laboratorio","pluralita","apertura","Prezzolini","Papini","guerra"])

  ];
})();
