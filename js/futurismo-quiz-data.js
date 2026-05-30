/* =========================================================================
   futurismo-quiz-data.js — Banca domande: Il Futurismo
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
  window.QUIZ_DATA.futurismo = [

    mc("fu01","Origini","In quale data esatta viene pubblicato il Manifesto del Futurismo?",
      ["1 gennaio 1909","20 febbraio 1909","15 marzo 1910","4 novembre 1914"],
      1,"Il Manifesto del Futurismo viene pubblicato da Filippo Tommaso Marinetti sulla prima pagina del quotidiano Le Figaro di Parigi il 20 febbraio 1909. E la data di nascita ufficiale del Futurismo."),

    mc("fu02","Origini","Su quale giornale viene pubblicato il primo Manifesto del Futurismo?",
      ["Il Corriere della Sera","La Stampa","Le Figaro di Parigi","The Times di Londra"],
      2,"Il Manifesto del Futurismo viene pubblicato sul quotidiano francese Le Figaro di Parigi il 20 febbraio 1909. La scelta di un giornale francese e strategica: Parigi e allora la capitale culturale mondiale."),

    mc("fu03","Origini","Chi e il fondatore e capofila del Futurismo?",
      ["Giovanni Papini","Umberto Boccioni","Filippo Tommaso Marinetti","Ardengo Soffici"],
      2,"Filippo Tommaso Marinetti e il fondatore, teorico e organizzatore del Futurismo. Scrive il primo Manifesto (1909), il Manifesto tecnico della letteratura futurista (1912) e dirige il movimento per decenni."),

    mc("fu04","Origini","Il Futurismo e la prima avanguardia italiana. Cosa significa 'avanguardia' in senso letterario?",
      ["Un gruppo di soldati in prima linea in battaglia","Un movimento artistico-letterario che si pone in anticipo sui tempi, rompendo con la tradizione","Un tipo di spettacolo teatrale sperimentale","Un gruppo di critica letteraria conservatrice"],
      1,"Avanguardia (dal francese avant-garde, avanguardia militare): movimento artistico che si pone in anticipo rispetto ai tempi, rompendo con la tradizione e proponendo linguaggi radicalmente nuovi. Il Futurismo e la prima avanguardia italiana e una delle piu radicali d'Europa."),

    mc("fu05","Origini","In quale anno Marinetti fonda la rivista Lacerba insieme a Papini e Soffici?",
      ["1909","1910","1913","1916"],
      2,"Lacerba viene fondata a Firenze nel 1913 da Giovanni Papini e Ardengo Soffici, con la collaborazione di Marinetti e del Futurismo. E uno dei principali organi della rivolta culturale futurista, insieme alla rivista Poesia di Marinetti."),

    mc("fu06","Poetica","Cosa afferma il punto 4 del Manifesto del Futurismo riguardo all'automobile?",
      ["L'automobile e un prodotto della societa capitalista da abbattere","Un automobile da corsa e piu bello della Nike di Samotracia","L'automobile deve sostituire la locomotiva nei trasporti","L'automobile e la morte della tradizione artigianale"],
      1,"Punto 4 del Manifesto: 'Noi affermiamo che la magnificenza del mondo si e arricchita di una bellezza nuova: la bellezza della velocita. Un automobile da corsa [...] e piu bello della Nike di Samotracia.' La velocita come nuovo sublime; la macchina come nuova estetica."),

    mc("fu07","Poetica","Cosa si intende per 'parole in liberta' nel Futurismo?",
      ["La poesia senza censura politica","Le parole liberate dalla sintassi e dalla punteggiatura tradizionali, disposte sulla pagina secondo criteri visivi e sonori","Una tecnica di improvvisazione poetica","La poesia scritta in dialetto locale"],
      1,"Le parole in liberta: sistema espressivo futurista che libera le parole dalla sintassi (verbi all'infinito, no aggettivi, no avverbi, no punteggiatura) e le dispone sulla pagina secondo criteri visivi, sonori e analogici. L'obiettivo e la velocita massima di trasmissione dell'immagine."),

    mc("fu08","Poetica","Cosa prescrive il Manifesto tecnico della letteratura futurista (1912) riguardo ai verbi?",
      ["Usare solo i verbi al passato remoto","Usare il verbo all'infinito sempre, eliminare la coniugazione","Eliminare tutti i verbi dalla poesia","Usare solo il presente indicativo"],
      1,"Il Manifesto tecnico (1912) di Marinetti: i verbi devono essere usati all'infinito — non coniugati. Questo elimina il soggetto (chi fa l'azione), il tempo (quando accade) e il modo (come si pone il parlante), creando la velocita e l'immediatezza desiderate."),

    mc("fu09","Poetica","Cosa e la 'tavola parolibera'?",
      ["Una lista di parole proibite dalla censura","Una composizione in cui la disposizione visiva delle parole sulla pagina e parte del significato, con variazioni di dimensione e orientamento","Un dizionario futurista","Una tavola degli elementi del manifesto"],
      1,"La tavola parolibera: composizione futurista in cui le parole cambiano dimensione, orientamento, peso tipografico sulla pagina. E insieme testo, grafica e partitura. Precursore della poesia visiva e della poesia concreta del Novecento. Il massimo esempio: Zang Tumb Tuum di Marinetti (1914)."),

    mc("fu10","Poetica","Cosa e l'onomatopea nel Futurismo?",
      ["Una rima di tipo alternato","Parole che imitano foneticamente i suoni della modernita industriale (macchine, esplosioni, motori): strumento per rendere fisicamente presenti i suoni","Un tipo di metafora visiva","Un segno tipografico inventato da Marinetti"],
      1,"L'onomatopea futurista: 'zang', 'tumb', 'vrrrr', 'bang'. Non e un ornamento retorico ma lo strumento principale per rendere fisicamente presenti i suoni della modernita. La poesia deve essere ascoltata e sentita fisicamente, non solo compresa intellettualmente."),

    mc("fu11","Poetica","Cosa significa 'passatismo' per i Futuristi?",
      ["L'interesse per la storia del passato","Un termine dispregiativo per tutto cio che appartiene alla tradizione culturale: musei, biblioteche, accademie, classicismo","L'imitazione degli stili pittorici del Seicento","La nostalgia romantica per la natura"],
      1,"'Passatismo': neologismo futurista per indicare tutto cio che appartiene alla tradizione culturale. E il nemico da combattere e distruggere. Sono passatisti musei, biblioteche, accademie, il romanticismo, il simbolismo — chiunque guardi indietro invece di proiettarsi nel futuro."),

    mc("fu12","Poetica","Cosa e la 'simultaneita' nella poetica futurista?",
      ["L'uso di due voci narranti contemporaneamente","La tecnica che mira a rappresentare piu azioni o sensazioni diverse nello stesso istante, come nella percezione moderna accelerata","Una composizione musicale per piu strumenti","Il metodo di lavoro collettivo del gruppo futurista"],
      1,"La simultaneita: la percezione moderna e accelerata e plurima — il cervello elabora stimoli contemporanei, non sequenziali. La poesia e l'arte futuriste vogliono riprodurre questa simultaneita. La sintassi tradizionale e sequenziale (prima A poi B); la simultaneita futurista fa accadere A e B nello stesso istante."),

    mc("fu13","Poetica","Cosa proclama il punto 9 del Manifesto del Futurismo riguardo alla guerra?",
      ["La guerra e il peggiore dei mali da evitare","Noi vogliamo glorificare la guerra — sola igiene del mondo — il militarismo, il patriottismo","La guerra deve essere sostituita dalla diplomazia","La guerra e un errore della borghesia capitalista"],
      1,"Punto 9: 'Noi vogliamo glorificare la guerra — sola igiene del mondo — il militarismo, il patriottismo, il gesto distruttore dei libertari, le belle idee per cui si muore, e il disprezzo della donna.' E il punto piu controverso: esalta la violenza come forza rinnovatrice. Portato a compimento nel 1915 con la campagna interventista."),

    mc("fu14","Poetica","Cosa prescrive il Manifesto tecnico del 1912 riguardo agli aggettivi?",
      ["Usare solo aggettivi cromatici","Abolire l'aggettivo: impedisce la velocita della comunicazione","Usare solo aggettivi superlativi","Raddoppiare ogni sostantivo con due aggettivi"],
      1,"Abolire l'aggettivo: l'aggettivo rallenta la comunicazione qualificando il sostantivo invece di lasciarlo agire direttamente sull'immaginazione del lettore. Il sostantivo deve stare da solo, nudo, con la massima forza visiva immediata."),

    mc("fu15","Opere","Quale e il titolo del poema onomatopeico di Marinetti (1914) sulla battaglia di Adrianopoli?",
      ["Zang Tumb Tuum","Parole in liberta","Manifesto tecnico","La liberta del bombardamento"],
      0,"Zang Tumb Tuum (1914): poema onomatopeico sulla battaglia di Adrianopoli del 1912 — la prima guerra modernamente documentata da un corrispondente (Marinetti stesso). I suoni della battaglia (bombe, cannoni, grida) sono riprodotti foneticamente con parole in liberta e tavole parolibere."),

    mc("fu16","Opere","Quale poeta e legato inizialmente al Futurismo ma con venature ironiche e crepuscolari?",
      ["Corrado Govoni","Umberto Saba","Camillo Sbarbaro","Mario Luzi"],
      0,"Aldo Palazzeschi (non Corrado Govoni — ma Govoni e comunque un futurista). Aldo Palazzeschi e il futurista con la vena ironica e crepuscolare piu marcata. Lascia il Futurismo nel 1914 e diventa uno dei narratori piu originali del Novecento italiano. Corrado Govoni scrive invece Rarefazioni e parole in liberta (1915)."),

    mc("fu17","Opere","Il Manifesto dei pittori futuristi (1910) e firmato da quali artisti?",
      ["Modigliani, De Chirico, Savinio","Boccioni, Carra, Russolo, Balla, Severini","Klimt, Schiele, Kokoschka","Miro, Dali, Ernst"],
      1,"Il Manifesto dei pittori futuristi (1910) e firmato da Umberto Boccioni, Carlo Carra, Luigi Russolo, Giacomo Balla e Gino Severini. Il Futurismo si estende subito alle arti visive: simultaneita, dinamismo e disgregazione della forma nella pittura."),

    mc("fu18","Confronti","Quale corrente reagisce al Futurismo in direzione opposta, con tono dimesso e quotidiano?",
      ["Il Decadentismo","Il Naturalismo","Il Crepuscolarismo","L'Ermetismo"],
      2,"Il Crepuscolarismo e il polo opposto del Futurismo nella poesia italiana del primo Novecento: mentre il Futurismo esplode nell'urlo e nella velocita, il Crepuscolarismo si ritrae nel silenzio e nel quotidiano provinciale. Entrambi reagiscono a D'Annunzio ma in direzioni opposte."),

    mc("fu19","Confronti","Come si differenzia il Futurismo dal Decadentismo?",
      ["Non c'e differenza","Il Futurismo guarda al futuro (macchina, velocita, energia); il Decadentismo guarda al passato (mistero, irrazionale, aristocrazia). Opposti su modernita, tradizione e vitalismo","Il Futurismo e una corrente poetica; il Decadentismo e solo pittorica","Il Decadentismo e piu violento del Futurismo"],
      1,"Futurismo vs Decadentismo: il Futurismo esalta la modernita industriale (macchina, velocita, energia positiva); il Decadentismo la rifiuta in favore del mistero aristocratico (irrazionale, passato, spleen). Entrambi reagiscono alla borghesia positivista — ma in direzioni opposte: il futuro vs il passato, l'esteriorita vs l'interiorita."),

    mc("fu20","Confronti","Qual e il rapporto tra Futurismo e fascismo?",
      ["Il Futurismo si oppone al fascismo","Marinetti aderisce ai Fasci di combattimento nel 1919: il Futurismo ha culturalmente preparato il terreno per il nazionalismo aggressivo, ma il fascismo non usa il Futurismo come arte di regime","Il Futurismo diventa l'arte ufficiale del regime fascista","Non c'e nessun rapporto tra le due correnti"],
      1,"Marinetti aderisce ai Fasci di combattimento nel 1919 e vota nel fascismo la realizzazione del programma futurista (azione, violenza rinnovatrice, nazionalismo). Ma Mussolini preferisce il classicismo accademico come arte di regime: il Futurismo resta ai margini del fascismo istituzionale nonostante la vicinanza ideologica."),

    mc("fu21","Testi","In Zang Tumb Tuum, come vengono disposti i suoni della battaglia sulla pagina?",
      ["In versi regolari con rima alternata","Con variazioni di dimensione tipografica, orientamento e attraverso onomatopee che imitano i suoni della guerra: cannoni, proiettili, voci","In forma di dialogo tra i soldati","In prosa descrittiva senza elementi visivi"],
      1,"Zang Tumb Tuum rivoluziona la pagina: le parole cambiano dimensione e orientamento, le onomatopee imitano i suoni specifici della battaglia (Zang = esplosione; Tumb = caduta; Tuum = risonanza). La pagina diventa tavola parolibera: testo, grafica e partitura in uno."),

    mc("fu22","Testi","Qual e l'obiettivo dei Futuristi nel bruciare musei e biblioteche?",
      ["Un gesto di pura violenza nichilista","Liberare l'Italia dal culto del passato che blocca la creativita nel presente: la tradizione come prigione","Distruggere le proprieta delle classi dominanti","Una provocazione politica senza contenuto"],
      1,"'Vogliamo demolire i musei, le biblioteche, le accademie.' Non e nichilismo casuale: e il programma di liberare l'Italia dal peso soffocante della tradizione classica che blocca la creativita nel presente. Il passato e un nemico — non un patrimonio da custodire."),

    mc("fu23","Glossario","Cosa e il 'passatismo' nel vocabolario futurista?",
      ["Una corrente letteraria precedente al Futurismo","Termine dispregiativo per tutto cio che appartiene alla tradizione culturale: da combattere e distruggere","Un tipo di malattia nostalgia","Il nome del museo principale di Firenze"],
      1,"Passatismo: neologismo futurista per indicare qualunque valore, opera o istituzione legata al passato. Sono passatiste le accademie, i musei, le biblioteche, la grammatica tradizionale, il romanticismo, il simbolismo. Il passatismo e il nemico assoluto del Futurismo."),

    mc("fu24","Glossario","Cosa e il 'dinamismo' nella poetica futurista?",
      ["La velocita dei mezzi di trasporto moderni","La rappresentazione artistica del movimento, dell'energia e della trasformazione continua come caratteri fondamentali della modernita industriale","Un tipo di tecnica pittorica","La musica dei motori a scoppio"],
      1,"Il dinamismo: la modernita industriale e movimento, energia, trasformazione. L'arte futurista (letteratura, pittura, scultura) deve catturare questo dinamismo — non la staticita classica ma la forza cinetica della macchina in moto, della folla, dell'elettricita."),

    mc("fu25","Confronti","Come si relaziona il Futurismo italiano con le avanguardie europee contemporanee?",
      ["Il Futurismo e un fenomeno esclusivamente italiano senza rapporti internazionali","Il Futurismo ha influenzato ed e stato influenzato dal Cubismo, dall'Espressionismo e dal Dadaismo: e la prima avanguardia italiana di risonanza europea","Il Futurismo si oppone esplicitamente a tutte le avanguardie europee","Il Futurismo e nato in Francia e poi si e spostato in Italia"],
      1,"Il Futurismo ha una dimensione internazionale: influenza il Cubismo (Picasso e Braque conoscono i futuristi), il Vorticismo inglese, il Costruttivismo russo e il nascente Dadaismo. E la prima avanguardia italiana di risonanza europea, esportata anche grazie alle 'serate futuriste' che Marinetti organizza in tutta Europa."),

    tf("fu26","Origini","Il Manifesto del Futurismo e stato pubblicato per la prima volta su un giornale italiano.",
      false,"Falso. Il Manifesto e stato pubblicato per la prima volta sul francese Le Figaro il 20 febbraio 1909. La scelta e strategica: Parigi e la capitale culturale mondiale; pubblicare in Francia garantisce risonanza internazionale immediata."),

    tf("fu27","Origini","Marinetti e il solo autore del Manifesto del Futurismo del 1909.",
      true,"Vero. Il Manifesto del Futurismo del 1909 e scritto e firmato dal solo Marinetti. I successivi manifesti pittorici (1910) sono firmati dai pittori futuristi. Marinetti rimane il fondatore e leader del movimento fino alla morte (1944)."),

    tf("fu28","Poetica","Il Futurismo esalta la tradizione classica greca e romana come modello per l'arte italiana.",
      false,"Falso. Il Futurismo e l'opposto: rifiuta violentemente la tradizione classica. 'Un automobile da corsa e piu bello della Nike di Samotracia': la macchina moderna supera la scultura greca. I musei e le accademie devono essere distrutti."),

    tf("fu29","Poetica","Le parole in liberta futuriste eliminano la punteggiatura tradizionale.",
      true,"Vero. Il Manifesto tecnico della letteratura futurista (1912) prescrive l'abolizione della punteggiatura: rallenta la velocita di comunicazione e introduce pause non necessarie. Le parole si susseguono senza virgole, punti o due punti — il flusso e continuo come il movimento della macchina."),

    tf("fu30","Opere","Zang Tumb Tuum (1914) di Marinetti e basato sulla guerra russo-giapponese.",
      false,"Falso. Zang Tumb Tuum e basato sulla battaglia di Adrianopoli del 1912-1913, durante la Prima guerra balcanica. Marinetti era presente come corrispondente di guerra. Non la guerra russo-giapponese."),

    tf("fu31","Confronti","Il Futurismo e il Crepuscolarismo sono correnti che si completano e si integrano.",
      false,"Falso. Sono correnti opposte: il Futurismo esalta velocita, energia, urlo, futuro; il Crepuscolarismo valorizza lentezza, malinconia, silenzio, quotidiano provinciale. Entrambi reagiscono a D'Annunzio ma in direzioni radicalmente diverse."),

    tf("fu32","Confronti","Marinetti aderisce al fascismo nel 1919.",
      true,"Vero. Marinetti e tra i fondatori dei Fasci di combattimento nel 1919. Il Futurismo aveva culturalmente preparato il nazionalismo aggressivo, il culto dell'azione e della violenza. Ma Mussolini non usa il Futurismo come arte di regime, preferendo il classicismo accademico."),

    tf("fu33","Poetica","Il Futurismo propone di abolire l'aggettivo e l'avverbio per aumentare la velocita del testo.",
      true,"Vero. Il Manifesto tecnico (1912) prescrive: abolire l'aggettivo (che qualifica e rallenta), abolire l'avverbio (che modifica e rallenta), usare il sostantivo nudo e il verbo all'infinito. L'obiettivo e la trasmissione immediata dell'immagine, senza filtri grammaticali."),

    tf("fu34","Poetica","Il Futurismo non ha avuto influenza sulle arti visive, limitandosi alla letteratura.",
      false,"Falso. Il Futurismo ha avuto un'influenza enorme sulle arti visive: pittura (Boccioni, Severini, Balla), scultura (Boccioni), architettura (Sant'Elia), musica (Russolo e le intonarumori), teatro, cinema. E stato il primo movimento italiano a dichiarare l'integrazione di tutte le arti."),

    tf("fu35","Origini","Il Futurismo e durato solo come movimento unitario per pochi anni prima di dissolversi.",
      false,"Falso. Il Futurismo come movimento ufficiale dura dal 1909 fino alla morte di Marinetti nel 1944 — quasi trentacinque anni. Anche se la sua influenza culturale maggiore si esercita tra il 1909 e il 1920, Marinetti mantiene il movimento attivo per decenni."),

    open("fu36","Poetica","Spiega la differenza tra 'parole in liberta' e poesia tradizionale in termini di struttura e obiettivi.",
      "La poesia tradizionale e vincolata dalla metrica (numero fisso di sillabe), dalla rima, dalla punteggiatura e dalla sintassi (soggetto-verbo-complemento). Le parole in liberta aboliscono tutto questo: nessuna regola metrica, niente punteggiatura, verbi all'infinito, no aggettivi, le parole si susseguono per associazione libera o onomatopea. L'obiettivo e la velocita: eliminare tutto cio che rallenta la trasmissione dell'immagine al cervello del lettore. La poesia deve avere la velocita e l'impatto di un'automobile da corsa, non la lentezza di una carrozza trainata da cavalli.",
      ["metrica","sintassi","velocita","infinito","immagine","impatto"]),

    open("fu37","Confronti","In cosa differisce il manifesto futurista dal manifesto artistico tradizionale?",
      "I manifesti artistici tradizionali descrivono principi estetici e teorici. Il Manifesto del Futurismo e diverso: e un testo letterario in se — scritto con stile violento e visionario, con metafore e immagini poetiche. Non si limita a enunciare principi: li incarna nel modo in cui e scritto. La prosa del Manifesto e gia poesia futurista — energia, velocita, provocazione. Inoltre il Manifesto futurista e pensato come azione pubblica (pubblicazione su giornale, non su rivista accademica) e come scandalo provocatorio, non come proposta culturale pacifica.",
      ["stile","violento","incarna","azione","scandalo","pubblico"]),

    open("fu38","Origini","Perche il Futurismo sceglie di pubblicare il Manifesto su Le Figaro di Parigi invece che su un giornale italiano?",
      "Parigi e nel 1909 la capitale culturale mondiale: pubblicare in Francia garantisce risonanza europea e internazionale immediata. Un manifesto pubblicato a Milano o Roma sarebbe rimasto provinciale. Marinetti vuole che il Futurismo sia percepito come movimento internazionale, non come fenomeno localizzato. La scelta del francese (la lingua europea per eccellenza) e del quotidiano piu letto in Europa e una mossa strategica brillante: il Futurismo nasce gia come avanguardia mondiale.",
      ["Parigi","Francia","internazionale","strategia","mondiale","risonanza"]),

    open("fu39","Confronti","Qual e il paradosso del rapporto tra Futurismo e fascismo?",
      "Il paradosso: il Futurismo aveva culturalmente preparato il fascismo (nazionalismo aggressivo, culto dell'azione e della violenza, rifiuto della democrazia) e Marinetti fu tra i fondatori dei Fasci di combattimento. Ma il fascismo non usa il Futurismo come arte ufficiale del regime: Mussolini preferisce il classicismo accademico, piu adatto alla retorica della grandezza imperiale romana. Il Futurismo sperimentale e anti-accademico non si adatta ai bisogni propagandistici del regime. Marinetti muore nel 1944 membro del Partito fascista — senza aver ottenuto il riconoscimento ufficiale sperato.",
      ["paradosso","fascismo","classicismo","propaganda","Marinetti","regime"]),

    open("fu40","Poetica","Perche il Futurismo e considerato anche una corrente 'totalizzante' che va oltre la letteratura?",
      "Il Futurismo non si limita alla letteratura: invade pittura, scultura, architettura, musica, cucina (il Manifesto della cucina futurista, 1930), moda, teatro, cinema, fotografia. Marinetti teorizza una rivoluzione culturale totale che trasformi ogni aspetto della vita quotidiana italiana. E il primo movimento italiano a dichiarare l'integrazione di tutte le arti. Questa ambizione totalizzante lo distingue dal Simbolismo (che e principalmente poetico) e dal Crepuscolarismo (che e una tendenza lirica) — e lo avvicina alle grandi avanguardie europee come il Dadaismo e il Costruttivismo russo.",
      ["totalizzante","pittura","cucina","rivoluzione","integrazione","avanguardia"])

  ];
})();
