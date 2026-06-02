/* =========================================================================
   simbolismo-quiz-data.js — Banca domande: Il Simbolismo
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
  window.QUIZ_DATA.simbolismo = [

    mc("si01","Origini","Chi pubblica il Manifesto del Simbolismo nel 1886 sul 'Le Figaro'?",
      ["Paul Verlaine","Arthur Rimbaud","Jean Moreas","Stephane Mallarme"],
      2,"Jean Moreas pubblica il Manifeste du symbolisme sul quotidiano Le Figaro il 18 settembre 1886. Il manifesto afferma che la poesia deve 'vestire l'Idea di una forma sensibile' — l'idea non si esprime direttamente ma attraverso il simbolo."),

    mc("si02","Origini","Il Simbolismo sistematizza le intuizioni di quale poeta precedente?",
      ["Victor Hugo","Theophile Gautier","Charles Baudelaire","Alfred de Musset"],
      2,"Il Simbolismo sistematizza le intuizioni di Baudelaire, in particolare la teoria delle corrispondenze (I fiori del male, 1857). Se Baudelaire aveva intuito i legami nascosti tra i sensi e tra il visibile e l'invisibile, i simbolisti ne fanno un programma poetico consapevole."),

    mc("si03","Origini","Il Simbolismo e una corrente poetica interna a quale movimento piu ampio?",
      ["Il Naturalismo","Il Futurismo","Il Decadentismo","Il Romanticismo"],
      2,"Il Simbolismo e la corrente poetica che sistematizza la poetica all'interno del Decadentismo. Se il Decadentismo e una condizione culturale ampia (rifiuto del positivismo, culto del mistero), il Simbolismo ne e la risposta tecnica in poesia: il come fare poesia in modo decadente."),

    mc("si04","Origini","In quale anno Rimbaud scrive la 'Lettera del veggente' a Paul Demeny?",
      ["1857","1871","1880","1886"],
      1,"La Lettera del veggente e scritta il 15 maggio 1871, quando Rimbaud ha 16 anni. E uno dei testi teorici piu importanti della letteratura francese: teorizza il poeta come veggente che attraverso lo sregolamento dei sensi accede a visioni superiori."),

    mc("si05","Poetica","Qual e il principio cardine del Simbolismo secondo Mallarme?",
      ["La poesia deve descrivere la realta con precisione scientifica","La poesia deve suggerire, non nominare: 'nominare un oggetto significa sopprimere i tre quarti del piacere della poesia'","La poesia deve essere accessibile a tutti i lettori","La poesia deve trasmettere un messaggio morale"],
      1,"La formula di Mallarme e il manifesto del Simbolismo: nominare direttamente un oggetto uccide il piacere della poesia. La poesia deve evocare, suggerire, alludere — lasciare risuonare piuttosto che dichiarare. Il senso va conquistato dal lettore, non dato dall'autore."),

    mc("si06","Poetica","Cosa significa che Verlaine vuole avvicinare la poesia alla musica?",
      ["Vuole mettere le poesie in musica","La poesia deve privilegiare la sonorità sul significato, il ritmo sulla logica: agisce come la musica, direttamente sull'emozione senza passare dall'intelletto","La poesia deve seguire le regole della composizione musicale classica","La poesia deve essere cantata e non letta"],
      1,"'De la musique avant toute chose' (Verlaine, Arte poetica): la musica non ha referenti fisici, agisce direttamente sull'emozione. I simbolisti vogliono che la poesia faccia lo stesso: non descrivere oggetti ma far risuonare stati d'animo attraverso la sonorità e il ritmo."),

    mc("si07","Poetica","Chi e il 'veggente' nella teoria di Rimbaud?",
      ["Un profeta religioso che prevede il futuro","Il poeta che, attraverso lo sregolamento volontario di tutti i sensi, accede a una visione superiore della realta nascosta","Un critico letterario con capacita intuitive eccezionali","Un poeta che usa solo immagini visive"],
      1,"Il veggente (voyant) di Rimbaud: non aspetta l'ispirazione spontanea ma la provoca deliberatamente attraverso uno 'sregolamento lungo, immenso e ragionato di tutti i sensi'. Accetta di diventare 'il grande malato, il grande criminale, il grande maledetto' per accedere alla visione."),

    mc("si08","Poetica","Cosa significa 'Io e un altro' nella Lettera del veggente di Rimbaud?",
      ["Il poeta ha una doppia personalita psicologica","Il poeta non e il padrone di se stesso: e un canale attraverso cui parla qualcosa che lo supera","Il poeta scrive usando uno pseudonimo","Il poeta descrive un altro personaggio"],
      1,"'Je est un autre' (Rimbaud): il poeta non e padrone di se stesso. Cio che scrive non viene da lui ma attraverso di lui — e un veicolo, non un autore nel senso tradizionale. Questa idea anticipa la psicoanalisi (l'inconscio come altra voce) e il Surrealismo."),

    mc("si09","Poetica","Cosa e il 'verso libero' (vers libre) introdotto dai simbolisti?",
      ["Un verso senza rime e con sillabe variabili che segue il ritmo interno del pensiero","Un verso di lunghezza fissa ma senza rime","Un verso di tradizione classica","Un tipo di prosa con ritmo poetico"],
      0,"Il verso libero abbandona le regole metriche tradizionali (numero fisso di sillabe, rima obbligatoria) per seguire il ritmo interno del pensiero e dell'emozione. Non e assenza di ritmo: e un ritmo diverso, personale, che rifiuta le costrizioni formali."),

    mc("si10","Poetica","Perche i simbolisti valorizzano l'oscurita nella poesia?",
      ["Per escludere i lettori poco istruiti","Perche la difficolta non e un difetto ma una scelta che preserva la profondita del significato: se tutto fosse chiaro la poesia sarebbe banale","Per imitare le lingue antiche","Per nascondere i contenuti politici sovversivi"],
      1,"L'oscurita simbolista e consapevole e valorizzata: il lettore deve partecipare attivamente; il senso non e dato ma va conquistato. Se tutto fosse immediatamente chiaro, la poesia sarebbe banale. Mallarme porta questo principio all'estremo — alcune sue poesie sono quasi incomprensibili senza chiavi di lettura."),

    mc("si11","Poetica","Qual e il modello musicale di riferimento per i simbolisti?",
      ["Chopin e il pianoforte romantico","Wagner e la musica totale (Gesamtkunstwerk)","Vivaldi e il barocco","Verdi e il melodramma italiano"],
      1,"Wagner e il riferimento musicale del Simbolismo. La sua teoria dell'opera d'arte totale (Gesamtkunstwerk) — fusione di musica, poesia, teatro, pittura — influenza i simbolisti. Come la musica wagneriana, la poesia simbolista mira ad agire sull'inconscio del lettore senza passare dalla razionalita."),

    mc("si12","Poetica","Cosa e il 'poema in prosa' inaugurato da Baudelaire e sviluppato da Rimbaud?",
      ["Un romanzo scritto in versi","Un testo in prosa che usa gli strumenti della poesia (ritmo, immagine, analogia) senza rispettare la metrica formale","Una poesia senza rime","Un saggio filosofico in stile poetico"],
      1,"Il poema in prosa e una forma ibrida: prosa che ha il ritmo interno, la densita metaforica e la concentrazione emotiva della poesia, senza rispettare il verso tradizionale. Baudelaire lo inaugura con Lo spleen di Parigi; Rimbaud lo porta all'estremo nelle Illuminazioni."),

    mc("si13","Opere","In quale anno Verlaine pubblica le Romanze senza parole?",
      ["1857","1869","1874","1884"],
      2,"Romanze senza parole esce nel 1874: il titolo e gia un manifesto. 'Senza parole' come le composizioni pianistiche di Mendelssohn: musica che non ha bisogno di parole. La raccolta porta all'estremo la poetica della sonorità e della vaghezza impressionistica."),

    mc("si14","Opere","Quale poema di Mallarme (1876) e famoso per la sua oscurita onirica?",
      ["Corrispondenze","L'albatro","L'apres-midi d'un faune","Illuminazioni"],
      2,"L'apres-midi d'un faune (1876) di Mallarme: il fauno che non ricorda se ha sognato le ninfe o le ha realmente incontrate. Massima oscurita come valore estetico; il significato non e dato ma va conquistato. Debussy lo usera come base per il celebre preludio orchestrale."),

    mc("si15","Opere","Quale opera finale di Mallarme (1897) e considerata il testo piu radicale del Simbolismo?",
      ["Herodiade","L'apres-midi d'un faune","Toast funebre","Un coup de des n'abolira jamais le hasard"],
      3,"Un colpo di dadi non abolira mai il caso (1897): poema visivo in cui le parole sono disposte sulla pagina in dimensioni e orientamenti diversi. Il bianco della pagina e silenzio significante. E il testo piu sperimentale del Simbolismo, precursore della poesia visiva del Novecento."),

    mc("si16","Opere","Le Illuminazioni di Rimbaud vengono pubblicate in quale anno e da chi?",
      ["1873, da Rimbaud stesso","1886, da Verlaine, senza il consenso di Rimbaud","1880, dalla rivista Le Figaro","1900, postume"],
      1,"Le Illuminazioni vengono pubblicate da Verlaine nel 1886 su La Vogue, senza il consenso di Rimbaud (che aveva gia abbandonato la poesia). Sono poemi in prosa visionari, frammentari, oscuri — i testi piu radicali del Simbolismo prima del Surrealismo."),

    mc("si17","Confronti","Come si differenziano Simbolismo ed Estetismo?",
      ["Sono identici: entrambi valorizzano la bellezza sopra la morale","Il Simbolismo e mistico e conoscitivo (punta all'invisibile attraverso il simbolo); l'Estetismo e sensuale e mondano (punta al godimento del bello visibile)","L'Estetismo usa il verso; il Simbolismo la prosa","Il Simbolismo e inglese; l'Estetismo e francese"],
      1,"Simbolismo ed Estetismo sono correnti complementari ma diverse: entrambi rifiutano positivismo e valori borghesi, ma il Simbolismo punta al mistero e all'invisibile (misticismo conoscitivo); l'Estetismo punta al bello visibile e al godimento (mondanita sensuale). Mallarme e iniziatico; Wilde e brillante."),

    mc("si18","Confronti","Come influenza il Simbolismo francese l'Ermetismo italiano?",
      ["Non lo influenza: sono correnti indipendenti","Il Simbolismo e l'antecedente diretto dell'Ermetismo: stessa oscurita come valore, stessa parola densa. Ungaretti e il tramite principale","Il Simbolismo francese rifiuta l'Ermetismo","Il Simbolismo non arriva in Italia"],
      1,"Il Simbolismo e l'antecedente diretto dell'Ermetismo italiano: stessa oscurita come valore, stessa parola assoluta e densa, stessa analogia ardita. Ungaretti — che frequenta i vociani e legge i simbolisti — e il tramite principale. La linea e: Baudelaire → Mallarme → Vociani → Ermetismo."),

    mc("si19","Testi","In Arte poetica (Verlaine), cosa significa 'De la musique avant toute chose'?",
      ["La poesia deve avere un accompagnamento musicale","La sonorità deve precedere il significato: la poesia deve evocare prima di descrivere","La musica e superiore a tutte le altre arti","La poesia deve seguire le regole del contrappunto"],
      1,"'La musica prima di tutto': il principio centrale dell'Arte poetica di Verlaine. La musicalita del verso — i suoni, il ritmo, la fluidita — deve precedere il significato razionale. Come la musica, la poesia agisce direttamente sull'emozione senza passare dall'intelletto."),

    mc("si20","Testi","Nella Lettera del veggente di Rimbaud, il 'sregolamento ragionato di tutti i sensi' e…",
      ["Una patologia psicologica involontaria","Una trasformazione deliberata e programmata della propria percezione per accedere alla visione","Una tecnica di meditazione buddista","Un effetto dell'uso di sostanze stupefacenti"],
      1,"L'aggettivo 'ragionato' e fondamentale: non e follia casuale ma dissoluzione programmata. Il poeta accetta consapevolmente di diventare 'il grande malato, il grande criminale, il grande maledetto' come strumento conoscitivo — non per piacere ma per accedere a cio che la ragione normale non puo raggiungere."),

    mc("si21","Testi","Cosa descrive Un colpo di dadi di Mallarme attraverso la disposizione visiva del testo?",
      ["La musica del mare","Il caso come legge fondamentale dell'universo: anche un milione di tiri di dadi non annulleranno il caso","Un naufragio nel mare in tempesta","La storia di un marinaio perduto"],
      1,"Un colpo di dadi non abolira mai il caso: il titolo e anche il tema e la struttura del poema. Il caso governa tutto — il tiro di dadi, il naufragio, la vita. Nessuna azione umana (ne il tiro di dadi ne la poesia) puo abolire il caso. La disposizione tipografica delle parole sulla pagina incarna visivamente questa idea."),

    mc("si22","Poetica","Cosa si intende per 'poesia pura' nell'ideale simbolista?",
      ["Una poesia senza contenuto politico","Una poesia liberata da ogni elemento narrativo, descrittivo o retorico: solo l'essenziale, solo la rivelazione","Una poesia scritta in purezza stilistica","Una poesia religiosa"],
      1,"La poesia pura (ideale mallarmeano): libera la poesia da ogni elemento narrativo, descrittivo o retorico. Solo l'essenziale: la parola che rivela, non che descrive. Non e purezza morale ma purezza formale — la riduzione della poesia al suo nucleo irriducibile, cio che non puo essere detto in altro modo."),

    mc("si23","Confronti","Il Simbolismo italiano e rappresentato soprattutto da quali autori?",
      ["Marinetti e i Futuristi","D'Annunzio nella poesia piu sensuale e Pascoli con il fonosimbolismo delle piccole cose","Saba e il Canzoniere","Ungaretti e Quasimodo come Ermetici"],
      1,"In Italia il Simbolismo e filtrato principalmente da D'Annunzio (nelle sue poesie piu musicali e sensoriali) e da Pascoli (il fonosimbolismo, le piccole cose come simboli del mistero, le corrispondenze sensoriali). Nessuno dei due e un simbolista puro — entrambi mediano la corrente attraverso la specificita italiana."),

    mc("si24","Glossario","Cosa e la 'suggestione' come principio del Simbolismo?",
      ["Uno strumento pubblicitario","Il principio per cui la poesia non spiega ne descrive ma evoca, allude, lascia risuonare: il significato va conquistato dal lettore","Un tipo di rima suggestiva","La presenza di immagini subliminali nella poesia"],
      1,"La suggestione: la poesia simbolista non da il significato ma lo allude, lo evoca, lo lascia risuonare. Il lettore deve partecipare attivamente. Mallarme: 'nominare un oggetto significa sopprimere i tre quarti del piacere della poesia.' Suggerire e piu potente di nominare."),

    mc("si25","Glossario","Cosa e la 'corrispondenza' in senso simbolista?",
      ["Le lettere scambiate tra poeti","Il legame nascosto tra mondo fisico e spirituale e tra diverse sfere sensoriali, rivelato dall'arte","Un sistema di rima alternata","Un tipo di enjambement"),
      1,"Le corrispondenze (da Baudelaire): rete di richiami nascosti tra il mondo fisico e quello spirituale e tra le diverse sfere sensoriali (sinestesia). Il Simbolismo sistematizza questa intuizione: la Natura e un sistema di simboli dove tutto 'si risponde'. L'artista e colui che sa leggere e tradurre questo sistema."),

    tf("si26","Origini","Il Simbolismo e una corrente del tutto autonoma dal Decadentismo.",
      false,"Falso. Il Simbolismo e una corrente interna al Decadentismo, ne e la risposta tecnica in campo poetico. Ogni simbolista e decadente, ma non ogni decadente e simbolista. Il Decadentismo e piu ampio: abbraccia poesia, romanzo, teatro, arti visive."),

    tf("si27","Origini","Jean Moreas pubblica il Manifesto del Simbolismo nel 1886 su Le Figaro.",
      true,"Vero. Jean Moreas pubblica il Manifeste du symbolisme sul Le Figaro il 18 settembre 1886. E il testo che consacra ufficialmente il Simbolismo come corrente organizzata, con un programma estetico definito."),

    tf("si28","Poetica","Il verso libero nel Simbolismo e assenza totale di ritmo.",
      false,"Falso. Il verso libero non e assenza di ritmo: e un ritmo diverso, interno, personale, che segue il flusso del pensiero e dell'emozione. I simbolisti sono ossessionati dalla sonorità e dal ritmo — semplicemente li liberano dalle costrizioni metriche tradizionali."),

    tf("si29","Poetica","Rimbaud abbandona la poesia definitivamente a 19 anni per diventare commerciante in Africa.",
      true,"Vero. Arthur Rimbaud abbandona la letteratura intorno al 1874-1875, a 19-20 anni, e diventa commerciante e avventuriero in Africa (Etiopia, Somalia). Muore nel 1891 a 37 anni per un cancro alla gamba. La sua vita breve e radicale diventa mito dell'artista che brucia senza risparmiarsi."),

    tf("si30","Opere","Le Illuminazioni di Rimbaud vengono pubblicate con il suo consenso nel 1886.",
      false,"Falso. Le Illuminazioni vengono pubblicate da Verlaine nel 1886 senza il consenso di Rimbaud, che aveva gia abbandonato la poesia anni prima. Rimbaud non era interessato alla propria fama letteraria."),

    tf("si31","Confronti","Il Simbolismo influenza direttamente l'Ermetismo italiano del Novecento.",
      true,"Vero. La linea e diretta: Baudelaire/Mallarme → Simbolismo → Vociani (La Voce) → Ermetismo. Ungaretti e il tramite principale. La parola assoluta ermetica, l'oscurita come valore e l'analogia ardita sono eredita dirette del Simbolismo francese."),

    tf("si32","Poetica","Il concetto di 'suggestione' nel Simbolismo significa che la poesia deve essere sempre breve.",
      false,"Falso. La suggestione non e una questione di lunghezza: riguarda il rapporto tra la poesia e il suo significato. Una poesia suggestiva evoca senza dichiarare, indipendentemente dalla lunghezza. I poemi di Mallarme sono spesso piu lunghi di quanto sembri."),

    tf("si33","Testi","L'Arte poetica di Verlaine fu scritta nel 1874 ma pubblicata solo nel 1882.",
      true,"Vero. Arte poetica fu scritta nel 1874 ma pubblicata su una rivista solo nel 1882. E il manifesto implicito del Simbolismo: 'De la musique avant toute chose', il rifiuto dell'eloquenza retorica, la valorizzazione della vaghezza e dell'imprecisione."),

    tf("si34","Poetica","Mallarme sosteneva che il bianco della pagina fosse privo di significato.",
      false,"Falso. Per Mallarme (soprattutto in Un colpo di dadi) il bianco della pagina e silenzio significante: una presenza, non un'assenza. Il bianco amplifica le parole, le isola, crea pause cariche di senso. E uno dei gesti piu rivoluzionari della sua poetica."),

    tf("si35","Confronti","Il Simbolismo francese e il Verismo italiano sono correnti complementari che si influenzano a vicenda.",
      false,"Falso. Simbolismo e Verismo sono correnti opposte: il Verismo vuole la rappresentazione oggettiva della realta sociale (esteriore); il Simbolismo vuole la rivelazione del mistero interiore (spirituale). Nascono nello stesso periodo ma da presupposti radicalmente diversi."),

    open("si36","Poetica","Spiega la differenza tra 'suggerire' e 'nominare' nella poetica di Mallarme.",
      "Nominare un oggetto — 'rosa', 'notte', 'morte' — chiude il significato: l'oggetto e esaurito dalla parola. Suggerire, invece, evoca l'oggetto senza nominar­lo, lasciando al lettore lo spazio per costruire il significato. Il piacere della poesia sta in questo spazio vuoto tra il segno e la cosa. Mallarme scrive quindi poesie che evocano senza dichiarare: il fauno dell'Apres-midi non sa se ha sognato le ninfe o le ha viste — e questa incertezza e il centro del testo, non un difetto. La poesia diventa uno spazio di potenzialita multiple.",
      ["nominare","suggerire","spazio","piacere","Mallarme","potenzialita"]),

    open("si37","Confronti","Come si differenzia l'approccio di Verlaine da quello di Rimbaud nel Simbolismo?",
      "Verlaine: musicalita pura, vaghezza, impressionismo. La poesia come velo trasparente di emozione. Stile armonico e musicale. Punta alla suggestione attraverso la sonorità. Rimbaud: violenza visionaria, sregolamento dei sensi, programma del veggente, abbandono della poesia a 19 anni. Stile frammentato e allucinato. Punta alla visione attraverso la trasformazione di se stesso. Verlaine e il poeta della sfumatura; Rimbaud e il poeta dell'abisso. Entrambi contribuiscono a fondare il Simbolismo ma con temperamenti opposti.",
      ["Verlaine","Rimbaud","musicalita","visione","sfumatura","abisso"]),

    open("si38","Opere","Perche Un colpo di dadi di Mallarme (1897) e considerato rivoluzionario?",
      "Un colpo di dadi rivoluziona la poesia in modo radicale: le parole sono disposte sulla pagina in dimensioni e orientamenti diversi; il bianco e silenzio significante; il testo si legge in piu direzioni. Non c'e un verso tradizionale: la pagina intera e la forma del poema. Anticipa la poesia visiva, le avanguardie tipografiche del Novecento, il Futurismo (tavole parolibere), la poesia concreta degli anni '50. Mallarme spinge il Simbolismo fino al limite del silenzio: il massimo della sperimentazione formale prima che la poesia si dissolva nel bianco.",
      ["tipografia","bianco","disposizione","visivo","avanguardie","silenzio"]),

    open("si39","Confronti","In che modo il Simbolismo francese viene recepito in Italia rispetto all'Europa?",
      "In Francia il Simbolismo e diretto e radicale (Mallarme, Rimbaud). In Italia arriva filtrato e mediato: D'Annunzio lo usa per la sua poesia piu musicale e sensoriale (Alcyone); Pascoli lo trasforma in fonosimbolismo del quotidiano e delle piccole cose. Solo Campana legge i simbolisti francesi direttamente in lingua originale. Il resto del Simbolismo italiano e quindi piu estetizzante e meno radicale — la stessa differenza che esiste tra il Decadentismo europeo e quello italiano. La 'traduzione' culturale attenua sempre la radicalita del modello originale.",
      ["filtrato","D'Annunzio","Pascoli","Campana","diretto","estetizzante"]),

    open("si40","Poetica","Che cosa si intende per 'oscurita' come valore estetico nel Simbolismo?",
      "L'oscurita simbolista non e un difetto ma una scelta consapevole: se il significato fosse immediato, la poesia sarebbe banale e superficiale. L'oscurita crea uno spazio di partecipazione del lettore: deve fare un lavoro di interpretazione e questo lavoro e parte del piacere estetico. Mallarme: 'Non comprendere mio verso e segno di comprenderlo.' L'oscurita ha anche una funzione protettiva: preserva la profondita dal consumo immediato. E la poesia come iniziazione — non comunicazione aperta ma rivelazione riservata a chi e disposto a conquistarla.",
      ["oscurita","valore","partecipazione","lettore","iniziazione","rivelazione"])

  ];
})();
