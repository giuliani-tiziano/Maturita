/* =========================================================================
   estetismo-quiz-data.js — Banca domande: L'Estetismo
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
  window.QUIZ_DATA.estetismo = [

    mc("es01","Origini","Chi e il fondatore del principio 'arte per l'arte' (l'art pour l'art) nella prefazione a Mademoiselle de Maupin?",
      ["Oscar Wilde","Walter Pater","Theophile Gautier","Joris-Karl Huysmans"],
      2,"Theophile Gautier, nella prefazione a Mademoiselle de Maupin (1835), enuncia il principio: 'il bello non e mai assurdo, il brutto non e mai utile.' L'arte non ha obblighi morali ne sociali; la bellezza e l'unico valore assoluto."),

    mc("es02","Origini","Quale saggio di Walter Pater (1873) e il fondamento filosofico dell'Estetismo inglese?",
      ["La decadenza dell'Inghilterra","Il Rinascimento: studi in arte e poesia","Estetica e critica moderna","Il culto della bellezza"],
      1,"Il Rinascimento: studi in arte e poesia (1873) di Walter Pater: la tesi e vivere intensamente nel presente, cercare l'istante perfetto, 'bruciare sempre con una fiamma adamantina'. L'arte e il mezzo per ottenere questa intensita. E il fondamento dell'Estetismo inglese."),

    mc("es03","Origini","In quale anno Oscar Wilde pubblica Il ritratto di Dorian Gray?",
      ["1884","1887","1890","1895"],
      2,"Il ritratto di Dorian Gray viene pubblicato nel 1890 sulla Lippincott's Monthly Magazine e poi in volume nel 1891 con alcune modifiche. E il manifesto dell'Estetismo inglese."),

    mc("es04","Origini","In quale paese nasce l'Estetismo come corrente letteraria organizzata?",
      ["Francia","Germania","Inghilterra","Italia"],
      2,"L'Estetismo nasce in Inghilterra nella seconda meta dell'Ottocento. Le sue radici filosofiche stanno in Walter Pater; il suo protagonista assoluto e Oscar Wilde. In Francia il movimento si intreccia col Decadentismo (Huysmans)."),

    mc("es05","Origini","Quale romanzo di Huysmans (1884) e considerato 'breviario dell'Estetismo' oltre che del Decadentismo?",
      ["En Route","La-Bas","Controcorrente (A rebours)","Marthe"],
      2,"Controcorrente (A rebours, 1884) di Huysmans e sia il breviario del Decadentismo che dell'Estetismo. Des Esseintes costruisce un universo artificiale totale. Oscar Wilde era ossessionato da questo libro; il protagonista del Dorian Gray ne e direttamente ispirato."),

    mc("es06","Poetica","Qual e il paradosso fondamentale di Wilde nel rapporto tra arte e vita?",
      ["L'arte imita la vita fedelmente","Non e l'arte a imitare la vita, ma la vita che imita l'arte","L'arte e inferiore alla natura","L'arte deve essere utile alla societa"],
      1,"'La vita imita l'arte piu di quanto l'arte imiti la vita' (Wilde, La decadenza della menzogna, 1889). Le nevi invernali esistono perche i pittori impressionisti le hanno inventate; la bellezza precede la sua scoperta nel reale. L'artificio e superiore al naturale."),

    mc("es07","Poetica","Chi e il dandy nell'Estetismo?",
      ["Un aristocratico di nascita con grandi proprieta","Un uomo che ha trasformato la propria esistenza in un capolavoro: eleganza, ironia, indifferenza ai valori borghesi","Un poeta di strada che scrive sul lavoro","Un critico d'arte professionista"],
      1,"Il dandy non e aristocratico per nascita ma per vocazione estetica: trasforma la propria esistenza in un capolavoro. Eleganza impeccabile, ironia tagliente, conversazione brillante, indifferenza alla morale borghese. Wilde e il dandy per eccellenza — pagandone il prezzo con la prigione."),

    mc("es08","Poetica","Cosa e l'edonismo nell'Estetismo wildiano?",
      ["Una corrente filosofica che esalta la sofferenza come via alla verita","La ricerca del piacere estetico come ragione di vita: 'Vivete la meravigliosa vita che e in voi'","Un tipo di ascetismo spirituale","Il godimento dei beni materiali e del lusso"],
      1,"L'edonismo wildiano: il piacere estetico come bene supremo e ragione di vita. Non e puro sensualismo ma ricerca intellettuale del bello in tutte le sue forme — anche il paradosso, l'ironia, la conversazione brillante sono forme di piacere estetico superiore."),

    mc("es09","Poetica","Il paradosso come forma di pensiero e…",
      ["Un errore logico da evitare","Un'affermazione che contraddice il senso comune ma contiene una verita nascosta: arma privilegiata di Wilde per dissacrare le certezze borghesi","Una figura retorica simile alla metafora","Un tipo di sillogismo aristotelico"],
      1,"Il paradosso di Wilde: 'L'unica maniera di liberarsi da una tentazione e cedervi'; 'Un cinico e chi conosce il prezzo di tutto e il valore di niente.' Rovescia il senso comune, rivelando le sue contraddizioni. E la versione mondana e brillante della filosofia estetista."),

    mc("es10","Poetica","Cosa si intende per 'artificio superiore alla natura' nell'Estetismo?",
      ["Le tecnologie moderne superano le risorse naturali","L'arte, la cultura e la forma costruita dall'uomo valgono piu del dato grezzo della natura","L'artigianato e piu bello dell'arte","La natura e intrinsecamente brutta"],
      1,"L'artificio superiore alla natura: un vestito ben tagliato vale piu di un fiore; una conversazione brillante vale piu di un paesaggio. L'uomo migliora la natura attraverso l'arte. Des Esseintes (Huysmans) porta questo principio all'estremo: elimina ogni elemento naturale dalla sua vita."),

    mc("es11","Poetica","In cosa si differenzia il dandy da un semplice uomo elegante?",
      ["Il dandy spende piu denaro in abiti","Il dandy non e solo elegante: ha trasformato l'intera esistenza in un'opera d'arte, dalla conversazione al gesto, dall'arredamento della casa alla filosofia di vita","Il dandy e necessariamente un aristocratico","Il dandy rifiuta l'eleganza a favore dell'eccentric"],
      1,"Il dandy e un artista che usa la propria vita come materiale. Non si limita all'abbigliamento: la sua conversazione e un'arte, il suo silenzio e calcolato, il suo appartamento e allestito, la sua filosofia e raffinata. E l'incarnazione totale dell'Estetismo — non come teoria ma come pratica."),

    mc("es12","Opere","In Il ritratto di Dorian Gray, chi e Lord Henry Wotton?",
      ["Il pittore che dipinge il ritratto di Dorian","Il dandy intellettuale e cinico che seduce Dorian con la filosofia estetista: 'Vivete! Vivete la meravigliosa vita che e in voi'","Il padre adottivo di Dorian","Il critico d'arte che esamina il ritratto"],
      1,"Lord Henry e il portavoce dell'estetismo nel romanzo: seduce Dorian con la filosofia del piacere e della giovinezza come beni supremi. Wilde mette in bocca a Lord Henry le sue idee piu pericolose, lasciando al romanzo il compito di mostrarne le conseguenze devastanti."),

    mc("es13","Opere","Quale 'patto' fa Dorian Gray nel romanzo di Wilde?",
      ["Vende l'anima al diavolo in cambio della ricchezza","Il ritratto invecchiera e si degradera al suo posto, permettendo a Dorian di restare eternamente giovane e bello","Promette di non usare mai la sua bellezza in modo immorale","Dedica la propria vita all'arte pittorica"],
      1,"Dorian desidera intensamente che il ritratto invecchi al posto suo. Il desiderio si avvera — senza che Dorian faccia un patto esplicito. Il ritratto diventa il suo specchio dell'anima: ogni azione morale lo corrode visivamente, mentre Dorian resta bello. Alla fine, distrugge il ritratto — e muore lui stesso."),

    mc("es14","Opere","Quale commedia di Wilde (1895) e considerata il suo capolavoro del teatro brillante?",
      ["Salome","Un marito ideale","L'importanza di chiamarsi Ernesto","Una donna senza importanza"],
      2,"L'importanza di chiamarsi Ernesto (The Importance of Being Earnest, 1895) e il capolavoro comico di Wilde. Dissacra i valori vittoriani (matrimonio, rispettabilita, seriosnta) attraverso paradossi e malintesi brillanti. L'Estetismo come gioco intellettuale nella sua forma piu leggera e duratura."),

    mc("es15","Opere","In quale anno Wilde viene condannato per 'atti indecenti' (omosessualita)?",
      ["1890","1893","1895","1899"],
      2,"Nel 1895 Wilde viene arrestato, processato e condannato a due anni di lavori forzati per 'atti indecenti' — una conseguenza del processo intentato dal marchese di Queensberry, padre del suo amante Lord Alfred Douglas. La condanna distrugge la sua carriera e la sua salute."),

    mc("es16","Opere","Quale dramma in prosa di Wilde (1891) si ispira alla figura biblica di Salome?",
      ["Dorian Gray","L'importanza di chiamarsi Ernesto","Salome","Un marito ideale"],
      2,"Salome (1891, scritta in francese) di Wilde: la principessa che danza davanti a Erode per ottenere la testa di Giovanni Battista. La figura della donna fatale decadente nella sua forma piu esplicita. Fu vietata dalla censura inglese per il soggetto biblico."),

    mc("es17","Opere","Il piacere di D'Annunzio (1889) e il romanzo estetista italiano. Chi e il protagonista Andrea Sperelli?",
      ["Un operaio che diventa artista","Un dandy romano che vive per la bellezza, incapace di amare autenticamente","Un politico corrotto","Un poeta che si ritira dalla vita mondana"],
      1,"Andrea Sperelli e il dandy italiano per eccellenza: aristocratico romano che vive per la bellezza degli oggetti e delle donne come fine estetico, non come legame umano. E anche un 'inetto' — come Zeno Cosini di Svevo — che non riesce a costruire nulla di solido perche ha fatto dell'estetica il suo unico principio."),

    mc("es18","Confronti","In cosa si differenziano Oscar Wilde e D'Annunzio come interpreti dell'Estetismo?",
      ["Non ci sono differenze rilevanti","Wilde usa l'Estetismo con ironia consapevole, mostrandone le contraddizioni (Dorian muore); D'Annunzio lo incarna senza riserve, come stile di vita totale senza autocritica","D'Annunzio e piu ironico; Wilde e piu serio","Wilde e italiano; D'Annunzio e inglese"],
      1,"Wilde usa l'Estetismo con ironia: Dorian Gray mostra dove porta il culto assoluto della bellezza (la distruzione). D'Annunzio lo vive senza ironia ne autocritica: il Vittoriale come monumento a se stesso, la vita inimitabile come programma. L'ironia di Wilde manca completamente a D'Annunzio."),

    mc("es19","Confronti","Come si differenzia l'Estetismo dal Simbolismo?",
      ["L'Estetismo usa la prosa; il Simbolismo il verso","L'Estetismo e mondano e sensuale (punta al bello visibile e al suo godimento); il Simbolismo e mistico e conoscitivo (punta all'invisibile attraverso il simbolo)","Sono identici","L'Estetismo e italiano; il Simbolismo e francese"],
      1,"Estetismo vs Simbolismo: entrambi rifiutano positivismo e valori borghesi, ma l'Estetismo punta al godimento del bello visibile (vita come opera d'arte, dandy, paradosso brillante); il Simbolismo punta alla rivelazione dell'invisibile (simbolo, mistero, oscurita). Wilde e mondano; Mallarme e iniziatico."),

    mc("es20","Testi","Nel cap. II di Dorian Gray, cosa propone Lord Henry a Dorian con il discorso sull'edonismo?",
      ["Di diventare un grande pittore","Di cedere a tutte le tentazioni, cercare sempre nuove sensazioni, vivere la meravigliosa vita che e in lui","Di sposare Sibyl Vane e stabilirsi","Di dedicarsi alla filantropia"],
      1,"Lord Henry propone a Dorian una filosofia estetista: 'La sola maniera di liberarsi da una tentazione e cedervi [...] Vivete! Vivete la meravigliosa vita che e in voi! [...] Un nuovo edonismo — e cio di cui ha bisogno questo nostro secolo.' E il momento della corruzione di Dorian."),

    mc("es21","Testi","In L'importanza di chiamarsi Ernesto, perche le due protagoniste vogliono sposare un uomo di nome Ernesto?",
      ["Perche e un nome nobile e aristocratico","Per un malinteso comico: credono di essere fidanzate con lo stesso uomo di nome Earnest/Ernesto, ma i fidanzati hanno inventato alter ego con questo nome","Perche il nome Ernesto porta fortuna","Perche il nonno ha lasciato un'eredita solo a chi sposa un Ernesto"],
      1,"Le due protagoniste — Gwendolen e Cecily — sono entrambe convinte che i loro fidanzati si chiamino Ernesto. Ma i fidanzati (Algernon e Jack) hanno entrambi inventato un alter ego immaginario con questo nome per sfuggire alle obbligazioni sociali. Il malinteso comico porta all'agnizione finale."),

    mc("es22","Glossario","Cos'e l'aforisma come forma letteraria privilegiata di Wilde?",
      ["Un lungo discorso filosofico","Una breve massima concentrata, spesso paradossale, che cattura una verita nella forma piu brillante possibile","Un tipo di sonetto","Una citazione da autori classici"],
      1,"L'aforisma: breve massima espressiva e paradossale. Wilde ne e il maestro: 'Si puo sopportare di tutto tranne la perfezione'; 'Solo i superficiali non giudicano dalle apparenze.' La forma distillata dell'intelligenza estetista — il gioiello della conversazione del dandy."),

    mc("es23","Glossario","Cosa si intende per 'estetica della decadenza' nell'Estetismo?",
      ["Il rifiuto di qualunque forma artistica moderna","La corruzione, il vizio, la decadenza fisica o morale possono essere belli quanto la perfezione: il Dorian corrotto e il ritratto orribile ne sono la dimostrazione","La decorazione eccessiva degli oggetti d'arte","Il culto delle rovine architettoniche"],
      1,"L'estetica della decadenza: la degradazione puo essere bella quanto la perfezione. Il ritratto di Dorian — sempre piu orrifico mentre Dorian resta bello — e bello nella sua orribilita. La bellezza esterna nasconde e rivela l'orrore interno. E la forma piu estrema del culto decadente del bello."),

    mc("es24","Testi","Quale frase di Lord Henry sintetizza la filosofia estetista di Wilde?",
      ["'L'arte e la forma piu intensa della vita individuale'","'La vita e troppo importante per essere presa sul serio'","'Un nuovo edonismo — e cio di cui ha bisogno questo nostro secolo'","'Bisogna fare della propria vita un'opera d'arte'"],
      2,"'Un nuovo edonismo — e cio di cui ha bisogno questo nostro secolo. Voi potreste esserne il simbolo visibile.' E la proposta che Lord Henry fa a Dorian nel cap. II: il giovane bello come incarnazione della filosofia estetista. E la formulazione piu diretta dell'edonismo wildiano."),

    mc("es25","Confronti","Come viene recepito l'Estetismo in Italia rispetto all'Inghilterra?",
      ["L'Italia ignora l'Estetismo","In Italia D'Annunzio porta l'Estetismo come stile di vita totale (vita inimitabile, Vittoriale), senza l'ironia autocritica di Wilde","L'Italia sviluppa un Estetismo piu modesto e dimesso","L'Estetismo italiano e piu simile al Naturalismo"],
      1,"D'Annunzio importa l'Estetismo di Wilde in Italia trasformandolo: lo vive senza la distanza ironica, lo declina in chiave nazionalistica e muscolare, lo porta alle estreme conseguenze (il Vittoriale come teatro di se stesso). E l'Estetismo senza autocritica — il pericolo che Wilde aveva mostrato nel Dorian Gray."),

    tf("es26","Origini","Il principio 'arte per l'arte' viene formulato per la prima volta da Oscar Wilde.",
      false,"Falso. Il principio 'l'art pour l'art' viene formulato per la prima volta da Theophile Gautier nella prefazione a Mademoiselle de Maupin (1835), decenni prima di Wilde. Wilde lo eredita attraverso la mediazione di Walter Pater e la cultura estetista inglese."),

    tf("es27","Origini","Walter Pater e il fondamento filosofico dell'Estetismo inglese con il suo saggio Il Rinascimento (1873).",
      true,"Vero. Il Rinascimento (1873) di Pater: vivere intensamente nel presente, cercare l'istante perfetto, 'bruciare sempre con una fiamma adamantina'. La vita va vissuta come una serie di esperienze estetiche intense. E il fondamento filosofico diretto dell'Estetismo di Wilde."),

    tf("es28","Poetica","Il dandy e necessariamente un aristocratico di nascita.",
      false,"Falso. Il dandy non e aristocratico per nascita ma per vocazione estetica. Wilde stesso era di origine borghese irlandese — non aristocratico. La superiorita del dandy non e di sangue ma di gusto, di intelligenza, di capacita di trasformare la propria esistenza in opera d'arte."),

    tf("es29","Opere","Il ritratto di Dorian Gray fu accolto positivamente dalla critica e dalla societa vittoriana.",
      false,"Falso. Dorian Gray suscito scandalo nell'Inghilterra vittoriana: fu accusato di immoralita per i temi della corruzione e dell'omosessualita velata. Wilde fu costretto a modificare alcune parti per la pubblicazione in volume nel 1891."),

    tf("es30","Opere","Oscar Wilde fu condannato a due anni di lavori forzati nel 1895.",
      true,"Vero. Wilde fu condannato nel 1895 per 'atti di oscenita grave' (omosessualita). Usci di prigione nel 1897 fisicamente e spiritualmente distrutto. Mori a Parigi nel 1900, a 46 anni, in poverta e abbandono. La sua storia e la piu tragica conferma del paradosso estetista: l'artista che paga con la vita il privilegio della bellezza."),

    tf("es31","Confronti","Wilde usa l'Estetismo con totale ironia, mostrando sempre le sue conseguenze distruttive.",
      true,"Vero. Il romanzo di Dorian Gray e sia manifesto che critica dell'Estetismo: Wilde predica il culto del bello attraverso Lord Henry, ma mostra le conseguenze attraverso la storia di Dorian. E la sua doppiezza fondamentale: insegna il pericolo estetizzando il pericolo stesso."),

    tf("es32","Poetica","L'aforisma come forma privilegiata di Wilde e solo un esercizio di stile senza contenuto filosofico.",
      false,"Falso. Gli aforismi di Wilde hanno sempre un contenuto: rovesciano il senso comune per rivelare una verita nascosta. 'Un cinico e chi conosce il prezzo di tutto e il valore di niente' critica la societa borghese che mette il prezzo sopra il valore. E filosofia nella forma piu concentrata e brillante."),

    tf("es33","Confronti","D'Annunzio e Wilde condividono la stessa ironia autocritica sull'Estetismo.",
      false,"Falso. D'Annunzio non ha l'ironia autocritica di Wilde. Mentre Wilde mostra (nel Dorian Gray) dove porta il culto del bello, D'Annunzio vive l'Estetismo senza riserve e senza autocritica — il Vittoriale come monumento a se stesso ne e la prova definitiva."),

    tf("es34","Origini","Huysmans era un naturalista prima di diventare il teorico dell'Estetismo.",
      true,"Vero. Joris-Karl Huysmans era stato un discepolo di Zola e scrittore naturalista (Marthe, 1876; Les Soeurs Vatard, 1879). A rebours (1884) rappresenta la sua rottura definitiva con il Naturalismo. Zola lo defini 'un colpo di piccone nel Naturalismo'."),

    tf("es35","Testi","In Dorian Gray, il ritratto dipinto da Basil Hallward diventa piu bello man mano che Dorian si corrompe.",
      false,"Falso. E il contrario: il ritratto diventa sempre piu orribile e degradato man mano che l'anima di Dorian si corrompe. Dorian resta fisicamente bello mentre il ritratto porta il peso morale della sua vita. Alla fine Dorian distrugge il ritratto — e muore lui stesso, orripilante."),

    open("es36","Poetica","Spiega il paradosso di Wilde 'L'arte non imita la vita; e la vita che imita l'arte.'",
      "Wilde rovescia Aristotele (la mimesis: l'arte imita la natura). La sua tesi: le nevi invernali esistono perche i pittori impressionisti le hanno 'inventate'; il tramonto sul Tamigi e bello perche Turner lo ha dipinto. La bellezza precede la sua scoperta — e l'arte che la svela, non la natura che la produce. Applicato all'esistenza: le persone interessanti si comportano come personaggi letterari, i comportamenti sociali imitano i modelli narrativi. L'artificio e superiore al naturale perche lo precede e lo forma.",
      ["paradosso","Wilde","arte","vita","Turner","precedenza"]),

    open("es37","Opere","Come funziona il meccanismo narrativo del ritratto in Dorian Gray?",
      "Il ritratto di Basil Hallward funge da specchio dell'anima: conserva la verita morale di Dorian mentre il corpo resta bello. Ogni azione immorale corrode il ritratto — che diventa progressivamente orrorifico — senza toccare l'aspetto fisico di Dorian. Il romanzo usa questa scissione tra apparenza (bellezza fisica) e realta (anima corrotta) per criticare l'Estetismo: la bellezza esterna non corrisponde necessariamente alla bonta interna. Quando Dorian tenta di distruggere lo specchio della propria anima, distrugge se stesso — la verita era lui, non il ritratto.",
      ["ritratto","specchio","anima","scissione","apparenza","realta"]),

    open("es38","Confronti","In cosa si differenzia l'ironia estetista di Wilde dall'Estetismo senza ironia di D'Annunzio?",
      "Wilde e consapevole del pericolo dell'Estetismo e lo mostra nel Dorian Gray: il culto del bello senza etica porta alla distruzione. Questa consapevolezza autocritica e il segnale della sua superiorita intellettuale. D'Annunzio incarna l'Estetismo senza distanza critica: la vita inimitabile, il Vittoriale, il poeta-vate come personaggio pubblico permanente. Non mostra le conseguenze distruttive — le esibisce come trionfi. La differenza e tra un artista che usa l'ironia come scudo e un artista che la ignora come debolezza.",
      ["ironia","autocritica","Wilde","D'Annunzio","Dorian Gray","distanza"]),

    open("es39","Confronti","Perche l'Estetismo di Wilde e l'Estetismo di D'Annunzio hanno esiti cosi diversi?",
      "Wilde: processo, condanna, esilio, morte in poverta. Il sistema borghese che aveva sfidato si vendica. D'Annunzio: gloria nazionale, il Vittoriale come monumento personale, morte nel 1938 rispettato (e usato dal fascismo). Le differenze spiegano i diversi esiti: Wilde sfida esplicitamente la morale borghese vittoriana (omosessualita dichiarata, processi); D'Annunzio usa l'Estetismo per costruire un personaggio pubblico nazionalista compatibile con il potere. Wilde paga il prezzo; D'Annunzio lo raccoglie.",
      ["Wilde","D'Annunzio","processo","Vittoriale","nazionalismo","potere"]),

    open("es40","Poetica","Qual e la funzione del paradosso nella filosofia estetista di Wilde?",
      "Il paradosso e l'arma intellettuale di Wilde contro la morale borghese: rovescia il senso comune per rivelare le sue contraddizioni interne. 'L'unica maniera di liberarsi da una tentazione e cedervi' — il paradosso smonta la repressione vittoriana mostrando che e controproducente. 'Un cinico conosce il prezzo di tutto e il valore di niente' — critica la societa che valuta in denaro. Il paradosso non e solo stile: e una forma di pensiero che usa la logica per distruggere la logica del senso comune. E la versione mondana e brillante della rivoluzione estetista.",
      ["paradosso","arma","senso comune","contraddizione","brillante","mondano"])

  ];
})();
