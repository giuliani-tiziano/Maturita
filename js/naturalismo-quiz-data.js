/* =========================================================================
   naturalismo-quiz-data.js — Banca domande: Il Naturalismo
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
  window.QUIZ_DATA.naturalismo = [

    /* ── ORIGINI ── */
    mc("na01","Origini","In quale paese nasce il Naturalismo letterario?",
      ["Italia","Germania","Francia","Inghilterra"],
      2,"Il Naturalismo nasce in Francia nella seconda meta dell'Ottocento, come evoluzione del Realismo sotto la forte influenza del positivismo scientifico."),

    mc("na02","Origini","In quale decennio si afferma il Naturalismo come corrente riconoscibile?",
      ["1830-1840","1850-1860","1860-1870","1880-1890"],
      2,"Il Naturalismo si afferma come corrente coerente negli anni 1860-1870, con i fratelli Goncourt come precursori e Zola come teorico e capofila."),

    mc("na03","Origini","Quale corrente filosofica fornisce le basi del Naturalismo?",
      ["L'idealismo hegeliano","Il positivismo di Comte e Spencer","Il romanticismo tedesco","L'esistenzialismo di Kierkegaard"],
      1,"Il positivismo — che considera la scienza empirica come unica forma valida di conoscenza — e la base filosofica del Naturalismo. Auguste Comte e Herbert Spencer sono i principali riferimenti filosofici."),

    mc("na04","Origini","Quale scienziato con il suo metodo sperimentale influenza direttamente Zola?",
      ["Charles Darwin","Louis Pasteur","Claude Bernard","Pierre Curie"],
      2,"Claude Bernard, con la sua Introduction a la medecine experimentale (1865), e il modello diretto del saggio di Zola Il romanzo sperimentale (1880)."),

    mc("na05","Origini","Quale opera di Darwin (1859) influenza il pensiero naturalista sull'ereditarieta?",
      ["La struttura delle barriere coralline","L'origine delle specie","Il viaggio del Beagle","L'espressione delle emozioni"],
      1,"L'origine delle specie (1859) di Darwin introduce la selezione naturale e il ruolo dell'ambiente nella formazione degli organismi, concetti che i naturalisti applicano alla narrativa."),

    mc("na06","Origini","Chi e il teorico e massimo esponente del Naturalismo?",
      ["Gustave Flaubert","Guy de Maupassant","Emile Zola","Edmond de Goncourt"],
      2,"Emile Zola e il teorico e capofila del Naturalismo: il saggio Il romanzo sperimentale (1880) e il manifesto della corrente; il ciclo dei Rougon-Macquart (20 romanzi) ne e la realizzazione piu ambiziosa."),

    mc("na07","Origini","Quale romanzo di Flaubert (1857) e considerato il precursore diretto del Naturalismo?",
      ["L'educazione sentimentale","Salambo","Bouvard e Pecuchet","Madame Bovary"],
      3,"Madame Bovary (1857) introduce l'impersonalita assoluta e il discorso indiretto libero. Flaubert non e un naturalista ma apre la strada al metodo che Zola sistematizzera."),

    mc("na08","Origini","In quale anno i fratelli Goncourt pubblicano Germinie Lacerteux, primo manifesto ante-litteram del Naturalismo?",
      ["1857","1861","1865","1870"],
      2,"Germinie Lacerteux dei fratelli Goncourt esce nel 1865. La prefazione e il primo manifesto del romanzo naturalista: rivendica il diritto della narrativa di occuparsi delle classi basse con metodo scientifico."),

    /* ── POETICA E STILE ── */
    mc("na09","Poetica","Cosa significa 'impersonalita' nella narrativa naturalista?",
      ["Lo scrittore usa uno pseudonimo","L'autore non giudica, non commenta, non esprime sentimenti: la realta parla da sola","Il romanzo non ha protagonisti","La narrazione e in terza persona"],
      1,"L'impersonalita e il principio cardine del Naturalismo: l'autore scompare dal testo, non esprime opinioni ne emozioni. La realta deve sembrare raccontarsi da sola, come un fenomeno osservato in laboratorio."),

    mc("na10","Poetica","Cosa si intende per 'determinismo' nella visione naturalista?",
      ["Il caso governa tutte le azioni umane","Il destino e scritto nelle stelle","Le azioni umane sono il risultato necessario di ereditarieta biologica e ambiente sociale","Solo la volonta individuale determina il destino"],
      2,"Il determinismo naturalista sostiene che il comportamento umano e determinato da due forze: l'ereditarieta biologica (trasmessa dai genitori) e l'ambiente sociale (classe, luogo, condizioni). Non esiste vera liberta."),

    mc("na11","Poetica","Come chiama Zola la tecnica narrativa del Naturalismo nel suo saggio del 1880?",
      ["Il romanzo storico","Il romanzo sperimentale","Il romanzo sociale","Il romanzo impersonale"],
      1,"Nel saggio Il romanzo sperimentale (1880) Zola chiama la sua tecnica 'romanzo sperimentale': il romanziere osserva, formula un'ipotesi su come ereditarieta e ambiente agiscano, poi costruisce il romanzo come verifica."),

    mc("na12","Poetica","Quale classe sociale e il soggetto privilegiato del Naturalismo?",
      ["L'aristocrazia e la nobiltà","La borghesia agiata","Le classi lavoratrici: operai, minatori, contadini poveri","Il clero e le professioni liberali"],
      2,"I naturalisti scelgono le classi basse come soggetto privilegiato perche li il determinismo agisce in modo piu visibile e dimostrabile. La miseria e il campo di studio per eccellenza."),

    mc("na13","Poetica","Cosa e il 'milieu' nel Naturalismo?",
      ["Un tipo di romanzo breve","Il contesto sociale, geografico e fisico che condiziona i personaggi","Un genere letterario","Il narratore onnisciente"],
      1,"Milieu e il termine francese per 'ambiente': il contesto sociale, geografico e fisico in cui vivono i personaggi. Nel Naturalismo, insieme all'ereditarieta, e la forza determinante principale del comportamento umano."),

    mc("na14","Poetica","Cosa e l'argot nei romanzi naturalisti?",
      ["Un tipo di metafora","Il gergo popolare parigino inserito per autenticita documentaria","Una struttura narrativa circolare","Un sottogenere del romanzo naturalista"],
      1,"L'argot e il gergo popolare parigino usato dalle classi lavoratrici. Zola lo inserisce in L'Assommoir per autenticita documentaria, scandalizzando i lettori borghesi abituati al francese letterario elevato."),

    mc("na15","Poetica","Qual e la struttura narrativa tipica del Naturalismo?",
      ["Il racconto breve (novella)","Il poema in prosa","Il ciclo romanzesco ampio e corale","Il romanzo epistolare"],
      2,"Il Naturalismo privilegia il ciclo romanzesco: non un singolo protagonista ma famiglie, comunita, classi intere attraverso piu generazioni. Il modello sono i venti romanzi dei Rougon-Macquart di Zola."),

    mc("na16","Poetica","Rispetto al Verismo italiano, il Naturalismo francese e…",
      ["Piu pessimista e senza speranza","Piu ottimista: crede che la denuncia letteraria possa contribuire al cambiamento sociale","Identico nella visione del mondo","Meno interessato alle classi basse"],
      1,"A differenza del Verismo italiano di Verga — radicalmente pessimista — il Naturalismo francese di Zola conserva una fiducia nella scienza e nella possibilita di miglioramento sociale attraverso la denuncia letteraria."),

    mc("na17","Poetica","Il discorso indiretto libero usato da Flaubert viene poi adottato dai naturalisti. Cosa e?",
      ["Un dialogo tra due personaggi senza virgolette","La tecnica in cui pensieri e parole dei personaggi si fondono con la narrazione senza segnali tipografici","Un tipo di monologo interiore","La voce del narratore onnisciente"],
      1,"Il discorso indiretto libero fonde i pensieri/parole dei personaggi con la voce del narratore senza virgolette ne verbi dichiarativi ('disse che', 'penso che'). Flaubert lo perfeziona in Madame Bovary; i naturalisti lo ereditano."),

    /* ── OPERE ── */
    mc("na18","Opere","Quanti romanzi compone il ciclo dei Rougon-Macquart di Zola?",
      ["10","15","20","25"],
      2,"Il ciclo dei Rougon-Macquart di Zola e composto da 20 romanzi (1871-1893), ciascuno autonomo ma parte di un affresco corale sulla storia di una famiglia attraverso cinque generazioni sotto il Secondo Impero."),

    mc("na19","Opere","Qual e il tema centrale di Germinal (1885)?",
      ["La vita nei quartieri della borghesia parigina","La miseria dei minatori del Nord della Francia e uno sciopero","Il degrado morale di un'aristocratica","La vita nelle campagne normanne"],
      1,"Germinal (1885) racconta la vita dei minatori del Nord della Francia: miseria, lavoro disumano, solidarieta operaia, sciopero, sconfitta. E il capolavoro del Naturalismo e della letteratura sociale europea dell'Ottocento."),

    mc("na20","Opere","L'Assommoir (L'Ammazzatoio) di Zola del 1877 e famoso per aver introdotto…",
      ["Il tema della guerra","La prima grande rappresentazione della classe operaia urbana nella letteratura francese","Il ciclo familiare dei Rougon","Il genere del romanzo psicologico"],
      1,"L'Assommoir (1877) e il primo grande romanzo sulla classe operaia urbana: la degradazione di Gervaise attraverso l'alcolismo del marito. Scandalo e successo immediato: il Naturalismo entra nella coscienza pubblica europea."),

    mc("na21","Opere","Cosa racconta Germinie Lacerteux (1865) dei fratelli Goncourt?",
      ["La storia di una duchessa parigina","La vita di una domestica degradata attraverso alcol e vita sentimentale caotica","Le avventure di un commerciante arricchito","La storia di una famiglia di minatori"],
      1,"Germinie Lacerteux racconta la storia della domestica reale dei Goncourt, scoperta dopo la morte: nascondeva una doppia vita fatta di alcol, dipendenze e amori venali. E il romanzo naturalista ante-litteram."),

    mc("na22","Opere","Qual e il sottotitolo programmatico del ciclo dei Rougon-Macquart di Zola?",
      ["'Cronache dell'Impero'","'Storia naturale e sociale di una famiglia sotto il Secondo Impero'","'Anatomia della societa francese'","'La Francia del progresso'"],
      1,"Il sottotitolo completo e 'Storia naturale e sociale di una famiglia sotto il Secondo Impero'. 'Naturale' indica l'ereditarieta biologica; 'sociale' indica l'ambiente. Il ciclo vuole dimostrare come entrambi determinino il destino."),

    mc("na23","Opere","In quale romanzo del ciclo Zola affronta il tema dei grandi magazzini parigini?",
      ["Nana","Au Bonheur des Dames (Al paradiso delle signore)","La bete humaine","L'argent"],
      1,"Au Bonheur des Dames (Al paradiso delle signore, 1883) e il romanzo del grande magazzino parigino: la modernita capitalista, il consumo di massa, la rovina dei piccoli commercianti. Un ritratto della societa borghese in trasformazione."),

    mc("na24","Opere","Il titolo Germinal rimanda al calendario rivoluzionario francese. Cosa significa?",
      ["Il mese della neve (inverno)","Il mese della germogliazione (primavera)","Il mese del raccolto (autunno)","Il mese della tempesta (estate)"],
      1,"Germinal e il settimo mese del calendario rivoluzionario francese, corrispondente a marzo-aprile: il mese in cui i germogli crescono. Il titolo suggerisce che, nonostante la sconfitta dello sciopero, qualcosa crescera."),

    /* ── CONFRONTI ── */
    mc("na25","Confronti","Quale corrente letteraria nasce in Italia come adattamento del Naturalismo francese?",
      ["Il Futurismo","Il Decadentismo","Il Verismo","Il Crepuscolarismo"],
      2,"Il Verismo e la declinazione italiana del Naturalismo, sviluppatasi tra gli anni '70 e '90 dell'Ottocento soprattutto in Sicilia con Verga e Capuana. Riprende l'impersonalita e il determinismo ma con un pessimismo piu radicale."),

    mc("na26","Confronti","Cosa distingue fondamentalmente il Naturalismo dal Romanticismo che lo precede?",
      ["Il Naturalismo usa piu rime e metafore","Il Naturalismo rifiuta il soggettivismo romantico per una rappresentazione oggettiva e scientifica della realta","Il Naturalismo si interessa solo ai personaggi aristocratici","Il Naturalismo e una corrente poetica, non narrativa"],
      1,"Il Romanticismo mette l'io al centro, esalta le emozioni soggettive, idealizza la realta. Il Naturalismo rifiuta tutto questo: l'autore scompare, le emozioni non contano, la realta va descritta obiettivamente come uno scienziato descrive un fenomeno."),

    mc("na27","Confronti","Rispetto al Realismo di Balzac, il Naturalismo di Zola si distingue per…",
      ["La scelta di protagonisti aristocratici","La radicalizzazione dell'impersonalita e l'applicazione esplicita del metodo scientifico","L'attenzione al sentimento romantico","La struttura del romanzo storico"],
      1,"Balzac e un realista: ha un narratore commentante e opinionato. Zola radicalizza: l'autore deve scomparire totalmente, il metodo deve essere quello della scienza. Il Naturalismo e il Realismo portato alle estreme conseguenze."),

    mc("na28","Confronti","Quale corrente nasce in reazione al Naturalismo, rifiutandone la fiducia nella scienza?",
      ["Il Futurismo","Il Verismo","Il Decadentismo","Il Neorealismo"],
      2,"Il Decadentismo nasce anche come reazione al Naturalismo: rifiuta la scienza come strumento di conoscenza, il progresso come mito, la borghesia come guida. La realta profonda e irrazionale e misterica, non misurabile."),

    /* ── TESTI ── */
    mc("na29","Testi","In Germinal, cosa simboleggia la discesa dei minatori nelle gallerie?",
      ["La liberta e l'avventura","La discesa agli inferi della condizione operaia: buio, rischio, estraniazione","La ricerca dell'oro","Il rifiuto del progresso industriale"],
      1,"La discesa nelle gallerie di Germinal ha una dimensione quasi orfea: il buio, il pericolo, l'estraniazione dall'umanita. Zola aveva visitato le miniere di persona; le sue descrizioni sono di precisione documentaria e di potenza letteraria straordinaria."),

    mc("na30","Testi","Nella prefazione di Germinie Lacerteux, i Goncourt dichiarano che…",
      ["Il romanzo deve essere divertente prima di tutto","Il romanzo ha il diritto e il dovere di occuparsi anche delle classi piu basse","Il romanzo deve imitare i classici greci","Il romanzo e solo per i lettori borghesi colti"],
      1,"La prefazione di Germinie Lacerteux e il primo manifesto naturalista: 'Oggi che il Romanzo si allarga e si ingrandisce [...] ci siamo chiesti se quelle classi basse avessero il diritto al Romanzo.' La risposta e si."),

    mc("na31","Testi","In L'Assommoir, qual e il destino di Gervaise?",
      ["Sposa un uomo ricco e cambia vita","Emigra in un altro paese","Decade progressivamente nell'alcolismo e nella miseria dopo i guai del marito","Diventa una famosa modista parigina"],
      2,"Gervaise, lavandaia parigina, tenta di costruirsi una vita dignitosa. Ma il marito Coupeau precipita nell'alcolismo dopo un incidente. L'ambiente operaio e l'ereditarieta (suo padre era alcolista) la trascinano verso il basso. La rovina e totale."),

    mc("na32","Testi","Qual e la funzione narrativa della 'macchina del bere' (l'alambicco) in L'Assommoir?",
      ["Un oggetto decorativo del romanzo","Il simbolo concreto della forza distruttrice dell'alcol nella comunita operaia: e personificata quasi come un mostro","Un dispositivo scientifico dei laboratori Rougon","Un elemento del paesaggio industriale senza valore simbolico"],
      1,"L'alambicco di L'Assommoir e un vero e proprio personaggio del romanzo: enorme, fumante, dalle viscere metalliche, diffonde il liquore-veleno in tutta la comunita. Zola lo descrive con un realismo quasi fantastico che lo trasforma in simbolo della rovina operaia."),

    /* ── GLOSSARIO ── */
    mc("na33","Glossario","Cosa si intende per 'ereditarieta' nel sistema naturalista?",
      ["La trasmissione di beni materiali","La trasmissione di caratteristiche fisiche e psicologiche (inclusi vizi e malattie) dai genitori ai figli","Il rispetto per la tradizione letteraria","La struttura familiare del racconto"],
      1,"Nel Naturalismo, l'ereditarieta e la trasmissione biologica di caratteristiche — inclusi vizi, malattie, tendenze — dai genitori ai figli. Nel ciclo dei Rougon-Macquart Zola costruisce un intero albero genealogico con vizi ereditari che si trasmettono di generazione in generazione."),

    mc("na34","Glossario","Cosa e il 'ciclo romanzesco' nel Naturalismo?",
      ["Un singolo romanzo con molti capitoli","Una serie di romanzi legati da personaggi comuni o da un progetto unitario","Un romanzo con flashback","Un'antologia di racconti"],
      1,"Il ciclo romanzesco e una serie di romanzi collegati: i venti Rougon-Macquart di Zola seguono i rami di una famiglia attraverso cinque generazioni. Ogni romanzo e autonomo ma parte di un affresco corale che dimostra il funzionamento del determinismo."),

    mc("na35","Glossario","La formula 'romanzo sperimentale' di Zola indica un romanzo che…",
      ["E scritto in laboratorio da piu autori","E costruito come verifica di un'ipotesi su come ereditarieta e ambiente agiscano su un personaggio","E basato su fatti storici verificati","Ha una struttura scientifica con note a pie di pagina"],
      1,"Il romanzo sperimentale di Zola: il romanziere formula un'ipotesi (come agisce l'ereditarieta su questo tipo umano in questo ambiente?), poi costruisce il romanzo come verifica di quell'ipotesi. La metafora scientifica e parzialmente forzata ma e anche un manifesto anti-romantico."),

    /* ── VERO/FALSO ── */
    tf("na36","Origini","Il Naturalismo nasce in Italia come prima corrente, poi si diffonde in Francia.",
      false,"Falso. Il Naturalismo nasce in Francia nella seconda meta dell'Ottocento. La corrente italiana che si ispira al Naturalismo francese e il Verismo, sviluppatosi tra gli anni '70 e '90 soprattutto in Sicilia."),

    tf("na37","Origini","Emile Zola scrisse un saggio teorico intitolato 'Il romanzo sperimentale' nel 1880.",
      true,"Vero. Il romanzo sperimentale (1880) e il manifesto teorico di Zola: applica il metodo della medicina sperimentale di Claude Bernard alla letteratura, teorizzando che il romanziere deve 'sperimentare' come uno scienziato."),

    tf("na38","Poetica","L'impersonalita del Naturalismo significa che i romanzi naturalisti non hanno narratore.",
      false,"Falso. I romanzi naturalisti hanno un narratore, ma e un narratore 'invisibile' che non si manifesta, non giudica, non commenta. L'impersonalita e la scomparsa dell'autore dal testo, non l'assenza di narratore."),

    tf("na39","Poetica","Il Naturalismo crede che la letteratura possa contribuire a riformare la societa denunciandone le ingiustizie.",
      true,"Vero. A differenza del Verismo italiano di Verga — che non crede in alcun riscatto — il Naturalismo di Zola conserva una dimensione riformista: denunciare la miseria operaia e il primo passo per cambiarla. Questa e una delle differenze fondamentali tra le due correnti."),

    tf("na40","Opere","Il ciclo dei Rougon-Macquart di Zola e composto da dodici romanzi.",
      false,"Falso. Il ciclo e composto da venti romanzi (1871-1893): ciascuno autonomo ma parte di un progetto unitario che segue i rami di una famiglia attraverso cinque generazioni sotto il Secondo Impero francese."),

    tf("na41","Opere","Germinal fu scritto da Zola dopo una ricerca documentaria in cui scese nelle miniere e intervisto i minatori.",
      true,"Vero. Zola preparo Germinal con mesi di ricerche sul campo: scese nelle miniere del Nord della Francia, intervisto i minatori, studio i documenti economici e sindacali. Questo metodo documentaristico e caratteristico del Naturalismo."),

    tf("na42","Confronti","Il Verismo italiano accetta pienamente la fiducia nel progresso del Naturalismo francese.",
      false,"Falso. Il Verismo italiano — con Verga in testa — e molto piu pessimista: non crede che la denuncia letteraria possa cambiare la realta. La condizione dei 'vinti' e immutabile come una legge naturale. Questa e la differenza fondamentale con il Naturalismo di Zola."),

    tf("na43","Poetica","Gustave Flaubert e considerato un naturalista nel senso pieno del termine, come Zola.",
      false,"Falso. Flaubert e un precursore del Naturalismo, non un naturalista in senso stretto. Il suo metodo dell'impersonalita e del discorso indiretto libero anticipa il Naturalismo, ma Flaubert non applica il determinismo biologico ne costruisce il romanzo come esperimento scientifico."),

    tf("na44","Opere","Madame Bovary di Flaubert fu processata per oscenita dopo la pubblicazione nel 1857.",
      true,"Vero. Flaubert fu processato nel 1857 per 'oltraggi alla morale pubblica e religiosa'. Fu assolto, ma il processo rese Madame Bovary celebre in tutta Europa e lancio definitivamente il romanzo moderno."),

    tf("na45","Poetica","Nel Naturalismo, l'ambiente sociale e meno importante dell'ereditarieta biologica nel determinare il destino.",
      false,"Falso. Nel Naturalismo entrambi hanno uguale importanza: ereditarieta biologica e ambiente sociale sono le due forze determinanti. Nessuna ha preminenza sull'altra: e la loro combinazione che produce il destino del personaggio."),

    /* ── DOMANDE APERTE ── */
    open("na46","Poetica","Spiega la differenza tra il concetto di 'impersonalita' nel Naturalismo francese e nel Verismo italiano.",
      "Nel Naturalismo di Zola l'impersonalita e un metodo scientifico: il romanziere scompare per applicare il metodo sperimentale con obiettivita, come uno scienziato osserva un fenomeno. Nel Verismo di Verga l'impersonalita e radicalizzata nella 'regressione del narratore': non solo l'autore scompare, ma cede la voce alla comunita dei personaggi, adottandone la mentalita e il linguaggio. In Verga l'impersonalita ha anche una conseguenza filosofica: poiche la realta non e modificabile, giudicarla e inutile.",
      ["impersonalita","metodo scientifico","regressione","Zola","Verga","obiettivita"]),

    open("na47","Opere","Perche Germinal (1885) e considerato il capolavoro del Naturalismo?",
      "Germinal unisce la precisione documentaria (Zola visito le miniere di persona) con la forza simbolica e narrativa. Il romanzo dimostra il determinismo in azione (i minatori sono schiacciati da ereditarieta e ambiente), ma senza rinunciare alla speranza: il finale con il seme della rivolta e l'opposto del pessimismo assoluto di Verga. E un affresco corale sulla classe operaia che non ha precedenti nella letteratura europea.",
      ["Germinal","documentaria","determinismo","classe operaia","speranza","capolavoro"]),

    open("na48","Confronti","In cosa differisce il rapporto del Naturalismo con il progresso rispetto al Verismo?",
      "Il Naturalismo di Zola e ambivalente ma non disperato: denuncia la miseria del proletariato, ma crede che questa denuncia possa contribuire a cambiarla. Il titolo Germinal — il mese della germogliazione — indica speranza nel futuro. Il Verismo di Verga e radicalmente pessimista: la fiumana del progresso travolge i deboli senza beneficarli, e nessuna denuncia puo cambiare questa legge naturale. E la divergenza piu profonda tra le due correnti.",
      ["progresso","Zola","Verga","pessimismo","Germinal","fiumana"]),

    open("na49","Poetica","Cosa significa che Zola 'prepara' i suoi romanzi con la documentazione sul campo?",
      "Prima di scrivere ogni romanzo, Zola conduceva mesi di ricerche documentarie: visitava i luoghi (le miniere per Germinal, i mercati per Il ventre di Parigi, i grandi magazzini per Au Bonheur des Dames), intervistava i lavoratori, studiava documenti economici e sociali. Questa 'fase osservativa' precede la 'fase sperimentale' della scrittura. E il metodo dello scienziato applicato al romanzo: prima si osserva, poi si sperimenta (si scrive).",
      ["documentazione","ricerca","osservazione","esperimento","metodo","scienziato"]),

    open("na50","Glossario","Spiega perche la metafora del 'romanzo sperimentale' di Zola e 'parzialmente forzata' pur essendo importante.",
      "Un esperimento scientifico e replicabile: due laboratori che ripetono lo stesso esperimento ottengono gli stessi risultati. Un romanzo non lo e: nessun altro scrittore potrebbe 'replicare' Germinal. Inoltre il romanziere sceglie i personaggi, inventa le situazioni, decide l'esito — un vero scienziato non puo farlo. Zola lo sa: il saggio e prima di tutto un manifesto polemico contro il romanticismo soggettivo, un modo per rivendicare la dignita scientifica della letteratura. Come programma estetico e piu efficace di quanto sia come descrizione del metodo reale.",
      ["romanzo sperimentale","replicabile","manifesto","anti-romantico","metafora","Zola"])

  ];
})();
