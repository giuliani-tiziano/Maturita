/* =========================================================================
   verismo-quiz-data.js — Banca domande: Il Verismo
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
  window.QUIZ_DATA.verismo = [

    /* ── ORIGINI ── */
    mc("ve01","Origini","In quale regione italiana nasce e si sviluppa principalmente il Verismo?",
      ["Piemonte e Lombardia","Toscana e Umbria","Sicilia e Sud Italia","Veneto e Friuli"],
      2,"Il Verismo si sviluppa soprattutto in Sicilia e nel Sud Italia, con Giovanni Verga e Luigi Capuana come protagonisti principali. La realta meridionale arcaica e immobile e il suo terreno d'elezione."),

    mc("ve02","Origini","Chi e il teorico del Verismo italiano?",
      ["Giovanni Verga","Luigi Capuana","Federico De Roberto","Giovanni Bovio"],
      1,"Luigi Capuana e il teorico del Verismo italiano: nei suoi saggi Studi sulla letteratura contemporanea (1880) elabora i principi della corrente distinguendola dal Naturalismo francese. Verga ne e il massimo esponente pratico."),

    mc("ve03","Origini","In quale anno Verga pubblica Rosso Malpelo, la svolta definitiva verso il Verismo?",
      ["1874","1878","1880","1883"],
      1,"Rosso Malpelo viene pubblicato su rivista nel 1878: e la svolta definitiva di Verga dal romanzo mondano al Verismo. Abbandona la narrativa sentimentale e milanese per sempre."),

    mc("ve04","Origini","Qual e il primo romanzo verista italiano in senso stretto?",
      ["I Malavoglia di Verga","Giacinta di Capuana","Mastro-don Gesualdo di Verga","Rosso Malpelo di Verga"],
      1,"Giacinta di Luigi Capuana (1879) e il primo romanzo verista italiano, pubblicato due anni prima dei Malavoglia. La storia di una donna vittima dell'ereditarieta nervosa e dell'ambiente e il primo tentativo coerente di Verismo italiano."),

    mc("ve05","Origini","In quale contesto storico-politico nasce il Verismo?",
      ["Nel clima ottimista del boom economico post-unitario","Nella delusione post-risorgimentale: il Sud rimane arretrato e la questione meridionale e irrisolta","Nella crisi dell'Ancien Regime","Durante la Prima Guerra Mondiale"],
      1,"Il Verismo nasce nell'Italia post-unitaria: l'unificazione non ha risolto il problema del Sud. Il Mezzogiorno rimane arretrato, agricolo, feudale. La 'questione meridionale' e il terreno su cui germina una letteratura che guarda al mondo contadino e peschereccio senza idealizzarlo."),

    mc("ve06","Origini","Dove vive Verga durante la sua fase verista piu produttiva?",
      ["A Catania, nella sua citta natale","A Firenze, nei circoli letterari","A Milano, capitale culturale","A Palermo, vicino ai soggetti delle sue opere"],
      2,"Verga vive a Milano dal 1872 al 1893 durante la sua fase piu produttiva. Paradossalmente, e lontano dalla Sicilia che scrive le opere piu siciliane: la distanza gli permette di guardare il suo mondo d'origine con occhio straniante."),

    /* ── POETICA ── */
    mc("ve07","Poetica","Cosa si intende per 'regressione del narratore' nel Verismo verghiano?",
      ["Il narratore racconta gli eventi in ordine cronologico inverso","L'autore adotta il punto di vista culturale e linguistico del mondo narrato, rinunciando alla propria prospettiva di intellettuale","Il narratore e poco istruito e fa errori di grammatica","Il narratore scompare lasciando solo dialogo"],
      1,"La regressione e la tecnica cardine del Verismo di Verga: l'autore 'scende' al livello culturale, mentale e linguistico dei personaggi. Non li descrive dall'esterno: si immerge nella loro mentalita e ne adotta la logica, anche se e primitiva o superstiziosa."),

    mc("ve08","Poetica","In cosa consiste lo 'straniamento' verghiano?",
      ["La presentazione di cose strane come normali, ottenuta attraverso la regressione del narratore","Un tipo di enjambement poetico","La tecnica di descrivere i personaggi dall'esterno","L'uso di dialetto siciliano nel testo"],
      0,"Lo straniamento verghiano: comportamenti crudeli o assurdi vengono presentati come normali e ovvi perche il narratore regredito condivide la mentalita dei personaggi. Il lettore percepisce l'assurdita che i personaggi non vedono — senza che il narratore la denunci esplicitamente."),

    mc("ve09","Poetica","Il Discorso Indiretto Libero (DIL) in Verga consiste in…",
      ["Il dialogo tra due personaggi scritto senza virgolette","La fusione dei pensieri/parole dei personaggi con la voce del narratore senza virgolette ne verbi dichiarativi","Un tipo di monologo interiore freudiano","La narrazione in prima persona del protagonista"],
      1,"Il DIL fonde pensieri/parole dei personaggi con la narrazione senza segnali tipografici. Esempio di Rosso Malpelo: 'Malpelo era cattivo' — e la comunita che lo dice o il narratore? L'ambiguita e voluta ed e il veicolo principale della regressione."),

    mc("ve10","Poetica","Cosa simboleggia 'la fiumana del progresso' nella prefazione ai Malavoglia?",
      ["Il fiume Simeto in Sicilia","Il progresso storico moderno come forza cieca e distruttiva che non beneficia i deboli","Il flusso del racconto narrativo","Il progresso tecnico dell'industria tessile"],
      1,"La fiumana del progresso e la metafora centrale della prefazione ai Malavoglia: il progresso avanza come una piena fluviale. Grandioso visto da lontano, devastante per chi ci vive dentro. I 'vinti' sono i detriti lasciati sulla riva. La forza e indifferente — non buona ne cattiva."),

    mc("ve11","Poetica","Chi sono 'i vinti' nel progetto letterario di Verga?",
      ["I personaggi che muoiono nel romanzo","Coloro che la modernita travolge senza beneficiare: non solo i poveri ma tutti i ceti","Solo i contadini e i pescatori","I criminali condannati dalla giustizia"],
      1,"I vinti sono tutti coloro che la fiumana del progresso lascia sulla riva: i pescatori dei Malavoglia, l'arricchito Gesualdo, persino l'aristocratica Bianca Trao. Il Ciclo dei Vinti avrebbe dovuto mostrare come la sconfitta riguardi tutti i ceti sociali, dal basso verso l'alto."),

    mc("ve12","Poetica","Cosa rappresenta 'l'ideale dell'ostrica' formulato da Verga in Fantasticheria?",
      ["Il desiderio di libertà dei pescatori","L'unica strategia di sopravvivenza per i deboli: restare attaccati al proprio ambiente natale","La critica alla stagnazione del Sud","La nostalgia per il passato rurale"],
      1,"L'ideale dell'ostrica (da Fantasticheria, 1880): la sopravvivenza dei deboli dipende dal restare attaccati al proprio ambiente come un'ostrica allo scoglio. Chi si stacca — chi tenta di migliorare la propria condizione — viene divorato dalla forza del progresso."),

    mc("ve13","Poetica","Quale aspetto della lingua siciliana viene incorporato nella prosa di Verga?",
      ["Il dialetto puro incomprensibile","La struttura sintattica paratattica (coordinazione prevalente) e il lessico popolare siciliano","L'uso sistematico del passato remoto","Un italiano arcaico di stile manzoniano"],
      1,"Verga non usa il dialetto puro ma un italiano che 'pensa' in siciliano: struttura sintattica paratattica (proposizioni coordinate, non subordinate), ordine delle parole dialettale, proverbi, formule rituali. E una lingua che riproduce la logica del pensiero popolare."),

    mc("ve14","Poetica","Il pessimismo del Verismo e piu radicale di quello del Naturalismo perche…",
      ["Il Verismo descrive personaggi piu poveri","Il Verismo non crede che la denuncia letteraria possa cambiare la realta: la condizione dei vinti e immutabile come una legge naturale","Il Verismo non usa l'impersonalita","Il Verismo e nato prima del Naturalismo"],
      1,"La differenza fondamentale: il Naturalismo di Zola conserva una dimensione riformista (la denuncia puo contribuire al cambiamento). Il Verismo di Verga constata l'immutabilita delle leggi sociali come leggi naturali. Non c'e speranza di riforma ne Provvidenza che governi la storia."),

    /* ── OPERE ── */
    mc("ve15","Opere","Vita dei campi (1880) di Verga contiene quale novella fondamentale per la tecnica verista?",
      ["La roba","Liberta","Rosso Malpelo","Mastro-don Gesualdo"],
      2,"Vita dei campi (1880) contiene Rosso Malpelo, La lupa, Cavalleria rusticana e Fantasticheria. Rosso Malpelo e il testo piu analizzato: la prima riga e gia un esempio perfetto di regressione del narratore."),

    mc("ve16","Opere","I Malavoglia (1881) appartiene a quale progetto narrativo piu ampio?",
      ["Le Novelle rusticane","Il Ciclo dei Vinti","La Sicilia nella letteratura","Il Verismo meridionale"],
      1,"I Malavoglia e il primo romanzo del Ciclo dei Vinti, il progetto incompiuto di Verga che avrebbe dovuto seguire la sconfitta attraverso tutti i ceti sociali. Solo due romanzi verranno completati: I Malavoglia e Mastro-don Gesualdo."),

    mc("ve17","Opere","Cosa tenta di fare la famiglia Malavoglia che li porta alla rovina?",
      ["Vendere la casa del nespolo","Investire in un carico di lupini a credito per migliorare la propria condizione","Emigrare negli Stati Uniti","Comprare una barca nuova"],
      1,"Padron 'Ntoni decide di investire in un carico di lupini a credito: tenta di uscire dalla miseria con il commercio. La barca affronta la tempesta, Bastianazzo muore, il carico si perde. Il debito travolge la famiglia. Chi esce dal proprio posto nella catena sociale viene punito."),

    mc("ve18","Opere","Mastro-don Gesualdo (1889) e il secondo romanzo del Ciclo dei Vinti. Chi e Gesualdo?",
      ["Un nobile decaduto","Un pescatore che diventa contrabbandiere","Un muratore arricchito che tenta di entrare nell'aristocrazia","Un ecclesiastico che rinuncia alla fede"],
      2,"Gesualdo Motta e un muratore che attraverso il lavoro e la furbizia diventa ricchissimo. Sposa una nobile decaduta per entrare nell'aristocrazia. Ma la roba non compra l'accettazione sociale ne la felicita: muore solo, disprezzato dai nobili. E un vinto nella vittoria."),

    mc("ve19","Opere","In La roba (da Novelle rusticane, 1883) il protagonista Mazzaro al momento della morte…",
      ["Lascia tutto ai poveri del villaggio","Distribuisce la sua ricchezza ai figli","Inizia ad ammazzare i propri animali gridando 'Roba mia, vientene con me!'","Brucia le sue proprieta per non lasciarle agli eredi"],
      2,"Mazzaro, avvertendo la morte, inizia ad ammazzare a bastonate anitre, tacchini e galline urlando 'Roba mia, vientene con me!' E la scena piu emblematica del Verismo: l'ossessione per la roba come unico valore porta alla totale perdita di umanita."),

    mc("ve20","Opere","Liberta (da Novelle rusticane) e basata su un episodio storico realmente accaduto. Di quale?",
      ["La rivolta dei pescatori di Aci Trezza","L'insurrezione contadina di Bronte nel 1860 durante l'arrivo dei Mille","La rivolta delle solfatare siciliane del 1870","La guerra del '66"],
      1,"Liberta e basata sull'insurrezione di Bronte (Catania) del 1860: dopo l'arrivo dei Mille di Garibaldi, i contadini credono che 'liberta' significhi riprendere le terre usurpate dai galantuomini. Insorgono, uccidono, vengono massacrati dall'esercito. La liberta e un'illusione."),

    mc("ve21","Opere","La novella Cavalleria rusticana da' origine a quale famosa opera lirica?",
      ["La Traviata di Verdi","Il barbiere di Siviglia di Rossini","Cavalleria rusticana di Pietro Mascagni (1890)","Tosca di Puccini"],
      2,"Cavalleria rusticana di Verga (1880) diventa il libretto dell'opera lirica di Pietro Mascagni (1890), che vince il concorso Sonzogno e consacra il verismo in musica. E una delle opere piu rappresentate al mondo."),

    mc("ve22","Opere","Il ciclo dei Vinti di Verga rimane incompiuto. Quanti romanzi vengono effettivamente scritti?",
      ["Uno solo","Due","Tre","Quattro"],
      1,"Solo due romanzi del Ciclo dei Vinti vengono completati: I Malavoglia (1881) e Mastro-don Gesualdo (1889). Il terzo (La duchessa di Leyra) rimane allo stato di frammento. Dal 1893 Verga tace per quasi trent'anni."),

    /* ── CONFRONTI ── */
    mc("ve23","Confronti","Rispetto a Manzoni, Verga si distingue soprattutto per…",
      ["La scelta di protagonisti aristocratici","L'assenza totale di commento morale e di Provvidenza: il narratore regredisce nel mondo dei personaggi senza giudicarlo","L'uso del dialetto milanese invece del siciliano","La struttura del romanzo storico"],
      1,"Manzoni ha un narratore onnisciente che giudica, commenta, ironizza; la Provvidenza governa la storia. Verga ha un narratore regredito che adotta la mentalita dei personaggi senza commentare; non esiste Provvidenza. Stessa attenzione per le classi umili — opposte visioni del mondo."),

    mc("ve24","Confronti","Come si differenzia Verga da Zola nel rapporto tra autore e personaggi?",
      ["Verga osserva dall'esterno come uno scienziato; Zola si immerge nella mentalita dei personaggi","Zola osserva dall'esterno come uno scienziato; Verga si immerge nella mentalita dei personaggi attraverso la regressione","Non c'e differenza significativa","Verga usa il dialetto; Zola usa il francese standard"],
      1,"Zola mantiene la posizione dello scienziato: osserva dall'esterno, documenta, non si immerge nella mentalita popolare. Verga radicalizza: il narratore regredisce nella coscienza collettiva del villaggio, adottandone linguaggio, valori e pregiudizi. La regressione verghiana va oltre l'impersonalita zoliana."),

    mc("ve25","Confronti","Quale movimento letterario del Novecento si richiama direttamente al Verismo?",
      ["Il Futurismo","Il Decadentismo","Il Neorealismo (Pavese, Vittorini, Sciascia)","L'Ermetismo"],
      2,"Il Neorealismo italiano degli anni '40-'50 (Pavese, Vittorini, Sciascia) si richiama direttamente al Verismo: stesso interesse per le classi subalterne e il Sud. Pavese disse: 'Verga e il nostro Flaubert.' Ma il Neorealismo aggiunge un ottimismo politico che Verga non aveva."),

    /* ── TESTI ── */
    mc("ve26","Testi","In Rosso Malpelo, perche il ragazzo viene chiamato con questo soprannome?",
      ["Perche ha un carattere violento","Perche ha i capelli rossi: nella superstizione paesana, il rosso indica cattiveria","Perche viene trovato in una zona di rena rossa","Perche il padre si chiamava Malpelo"],
      1,"Il soprannome 'Malpelo' deriva dai capelli rossi: nella superstizione della comunita, il rosso indica cattiveria e malvagita. Verga presenta questo pregiudizio come verita oggettiva, senza correggerlo — ed e gia la regressione del narratore nella logica comunitaria."),

    mc("ve27","Testi","La prima frase di Rosso Malpelo e un esempio di quale tecnica narrativa?",
      ["La descrizione oggettiva di un fatto","La regressione del narratore nella mentalita comunitaria: il pregiudizio sui capelli rossi e presentato come verita","Il monologo interiore del protagonista","L'ironia esplicita dell'autore verso la comunita"],
      1,"'Rosso Malpelo si chiamava cosi perche aveva i capelli rossi; e aveva i capelli rossi perche era un ragazzo malizioso e cattivo.' E un sillogismo circolare e assurdo — ma presentato senza ironia. E la regressione totale: il narratore ha gia adottato la logica superstiziosa della comunita."),

    mc("ve28","Testi","In I Malavoglia, chi e 'Ntoni e qual e il suo ruolo nella storia?",
      ["Il nipote del capofamiglia che parte per cercare fortuna in citta e non riesce a tornare in pace","Il capo della famiglia Malavoglia","Il creditore della famiglia","Il sindaco di Aci Trezza"],
      0,"'Ntoni e il nipote di padron 'Ntoni. Si stacca dal paese, va a fare il militare, poi parte per la citta in cerca di fortuna. Non trova che miseria e galera. Quando torna, non appartiene piu al paese ne alla citta: e l'emblema del vinto che tenta di uscire dal proprio posto nella catena sociale."),

    mc("ve29","Testi","La casa del nespolo nei Malavoglia rappresenta…",
      ["La ricchezza della famiglia","Il nido familiare a cui restare attaccati come l'ostrica allo scoglio: la sua perdita e la rovina totale","Una proprieta da vendere per pagare i debiti","Il luogo dove Bastianazzo muore"],
      1,"La casa del nespolo e il nido dei Malavoglia: il luogo dell'identita, della famiglia, della tradizione. Perderla e perdere tutto — non solo un bene materiale ma se stessi. E l'ideale dell'ostrica in forma concreta: quando la famiglia si stacca dal nido, la rovina e inevitabile."),

    mc("ve30","Testi","In Mastro-don Gesualdo, perche Gesualdo e un 'vinto nella vittoria'?",
      ["Perde economicamente alla fine della storia","Conquista la ricchezza economica ma perde l'accettazione sociale, la felicita e persino il rispetto della figlia: muore solo","Muore in poverta come i Malavoglia","Viene condannato in tribunale"],
      1,"Gesualdo ha tutto economicamente: terre, denaro, palazzo. Ma la moglie nobile lo disprezza, la figlia lo abbandona, i nobili lo escludono, i contadini lo odiano. Muore solo in casa della figlia, circondato da servi estranei. E un vinto perche ha sacrificato tutto l'umano alla roba."),

    /* ── GLOSSARIO ── */
    mc("ve31","Glossario","Cosa si intende per 'narratore corale' nel Verismo?",
      ["Un narratore che usa molte voci diverse in prima persona","La voce narrante che appartiene alla comunita dei personaggi e ne condivide valori, linguaggio e pregiudizi","Un narratore onnisciente che conosce tutti i personaggi","Un narratore che cita documenti storici"],
      1,"Il narratore corale e la voce del paese: emerge dalla comunita stessa, ne condivide i valori e i pregiudizi, usa formule del parlato collettivo ('si diceva', 'era opinione comune'). E il risultato estremo della regressione: non un intellettuale che descrive il popolo, ma una voce che viene dal popolo."),

    mc("ve32","Glossario","Cosa e 'la roba' nell'universo narrativo di Verga?",
      ["Le vesti e i vestiti dei personaggi ricchi","I beni materiali come unica misura del valore di una persona: chi vive per la roba e vinto anche quando vince economicamente","La proprieta collettiva del villaggio","Il cibo e il sostentamento quotidiano"],
      1,"'La roba' sono i beni materiali (terre, bestiame, denaro) come unica ragione di vita. Chi li accumula ossessivamente (Mazzaro, Gesualdo) sacrifica tutti i valori umani — affetto, amicizia, amore. E un 'vinto' anche nella vittoria perche perde tutto il resto."),

    mc("ve33","Glossario","Qual e la differenza tra 'impersonalita' nel Naturalismo e nel Verismo?",
      ["Non c'e differenza","Nel Naturalismo l'impersonalita e metodo scientifico; nel Verismo e radicalizzata nella regressione totale del narratore nella mentalita popolare","Nel Naturalismo l'impersonalita e piu radicale","Nel Verismo non c'e impersonalita"],
      1,"Nel Naturalismo di Zola l'impersonalita e metodo scientifico: osservazione distaccata. Nel Verismo di Verga e piu radicale: il narratore non osserva dall'esterno ma si immerge nella mentalita dei personaggi (regressione), adottandone valori e pregiudizi."),

    /* ── VERO/FALSO ── */
    tf("ve34","Origini","Il Verismo e semplicemente il Naturalismo applicato all'Italia, senza differenze sostanziali.",
      false,"Falso. Il Verismo non e la copia italiana del Naturalismo: il pessimismo verghiano e piu radicale (nessuna speranza di riforma), la tecnica della regressione del narratore va oltre l'impersonalita zoliana, e il mondo rappresentato (il Sud arcaico) e diverso dall'operaio industriale del Naturalismo."),

    tf("ve35","Origini","Il soprannome 'Verismo' viene usato per la prima volta da Luigi Capuana.",
      false,"Falso. Il termine 'Verismo' non viene coniato da una persona specifica: si afferma gradualmente nella critica italiana degli anni 1870-1880 per indicare la corrente realista italiana ispirata al Naturalismo francese. Capuana e il teorico del movimento, non l'inventore del nome."),

    tf("ve36","Poetica","La tecnica del Discorso Indiretto Libero (DIL) e stata inventata da Verga.",
      false,"Falso. Il DIL e una tecnica narrativa preesistente, usata sistematicamente da Flaubert in Madame Bovary (1857). Verga la adotta e la porta alle estreme conseguenze come strumento di regressione: in Verga la fusione tra narratore e personaggio e talmente totale che e impossibile distinguere le due voci."),

    tf("ve37","Poetica","L'ideale dell'ostrica e un valore positivo che Verga propone come modello di vita.",
      false,"Falso. L'ideale dell'ostrica non e un valore positivo: e una constatazione biologica, quasi crudele. Verga non esalta la rassegnazione — constata con distacco scientifico che questa e l'unica legge di sopravvivenza per chi e nato in basso. E un destino, non un ideale."),

    tf("ve38","Opere","Il Ciclo dei Vinti di Verga e stato completato in cinque romanzi come programmato.",
      false,"Falso. Il Ciclo dei Vinti rimane incompiuto: solo I Malavoglia (1881) e Mastro-don Gesualdo (1889) vengono completati. Il terzo (La duchessa di Leyra) resta allo stato di frammento. Dopo il 1893 Verga tace quasi del tutto."),

    tf("ve39","Opere","Cavalleria rusticana di Verga divento' il libretto di un'opera lirica di Pietro Mascagni.",
      true,"Vero. La novella Cavalleria rusticana (1880) fu trasformata prima in dramma teatrale e poi nel libretto dell'opera di Pietro Mascagni (1890). L'opera vince il concorso Sonzogno e consacra il verismo in musica. E ancora oggi una delle opere piu rappresentate al mondo."),

    tf("ve40","Confronti","Il Neorealismo italiano degli anni '40 e '50 si oppone totalmente all'eredita del Verismo.",
      false,"Falso. Il Neorealismo si richiama direttamente al Verismo: stesso interesse per le classi subalterne e il Sud, stesso linguaggio popolare. Pavese disse: 'Verga e il nostro Flaubert.' La differenza e nell'ottimismo politico del Neorealismo, assente in Verga."),

    tf("ve41","Origini","Verga visse prevalentemente in Sicilia durante il periodo della sua produzione verista principale.",
      false,"Falso. Paradossalmente Verga scrive le sue opere piu siciliane a Milano (1872-1893), lontano dalla Sicilia. La distanza gli permette uno sguardo straniante sul suo mondo d'origine. Tornera definitivamente a Catania solo nel 1893, dopo la pubblicazione di Mastro-don Gesualdo."),

    tf("ve42","Testi","Rosso Malpelo muore in miniera come il padre, confermando la logica determinista dell'ereditarieta e dell'ambiente.",
      true,"Vero. Il padre di Malpelo muore nella cava; Malpelo stesso finisce per morire esplorando gallerie pericolose. Il destino si compie: l'ereditarieta (il padre morto in cava) e l'ambiente (la cava di rena rossa) determinano il destino del figlio. E il determinismo verista in azione."),

    tf("ve43","Opere","La novella Liberta di Verga e una storia di finzione senza basi storiche reali.",
      false,"Falso. Liberta e basata sull'insurrezione reale di Bronte (Catania) del 1860: durante l'avanzata dei Mille garibaldini, i contadini credono che 'liberta' significhi redistribuzione delle terre. L'insurrezione viene repressa nel sangue dall'esercito. Verga trasforma l'episodio storico in parabola sul fallimento della speranza."),

    /* ── DOMANDE APERTE ── */
    open("ve44","Poetica","Spiega la tecnica della 'regressione del narratore' in Verga con un esempio concreto da Rosso Malpelo.",
      "La regressione del narratore: l'autore adotta il punto di vista culturale e linguistico del mondo narrato. Esempio: la prima frase di Rosso Malpelo — 'si chiamava cosi perche aveva i capelli rossi; e aveva i capelli rossi perche era un ragazzo malizioso e cattivo' — presenta il pregiudizio comunitario come verita oggettiva, senza ironizzare ne correggere. Il narratore ha gia adottato la logica superstiziosa del paese. Anche la madre che ha 'quasi dimenticato il suo nome di battesimo' e presentata senza commento morale: e la regressione nella coscienza collettiva.",
      ["regressione","pregiudizio","comunita","prima frase","senza commento","mentalita"]),

    open("ve45","Confronti","Perche il pessimismo del Verismo e piu radicale di quello del Naturalismo?",
      "Il Naturalismo di Zola ha una dimensione riformista: denuncia la miseria operaia credendo che questa denuncia possa contribuire a cambiarla. Il titolo Germinal indica speranza. Il Verismo di Verga non crede in alcuna possibilita di riscatto: la 'fiumana del progresso' travolge i deboli come una forza naturale indifferente, e nessuna denuncia puo cambiarla. Non c'e Provvidenza, non c'e speranza, non c'e giustizia. Il pessimismo e biologico: e la legge della sopravvivenza del piu forte applicata alla societa.",
      ["pessimismo","Zola","Verga","fiumana","riscatto","forza naturale"]),

    open("ve46","Opere","Perche I Malavoglia (1881) e considerato il manifesto narrativo del Verismo?",
      "I Malavoglia realizzano tutti i principi del Verismo: la regressione del narratore nella voce corale del paese; il determinismo (la famiglia e sconfitta dall'intreccio di ereditarieta e ambiente); l'ideale dell'ostrica (distaccarsi dal nido porta alla rovina); l'impersonalita assoluta (Verga non commenta mai). La prefazione teorizza esplicitamente la 'fiumana del progresso' e il progetto del Ciclo dei Vinti. Nessun altro testo italiano applica i principi del Verismo in modo cosi coerente e totale.",
      ["Malavoglia","regressione","determinismo","ideale ostrica","impersonalita","prefazione"]),

    open("ve47","Glossario","Spiega il concetto di 'straniamento' in Verga e come si differenzia dall'ironia classica.",
      "Lo straniamento verghiano: comportamenti crudeli o assurdi vengono presentati come normali e ovvi perche il narratore regredito ne condivide la logica. Il lettore percepisce l'assurdita — ma il narratore non la segnala esplicitamente. Esempio: in Rosso Malpelo tutti picchiano il bambino senza motivo, e il narratore lo registra come un fatto normale. L'ironia classica (Manzoni) esplicita il distacco dell'autore dal mondo narrato con commenti o battute. Lo straniamento verghiano e piu radicale: il silenzio del narratore e piu devastante di qualunque commento esplicito.",
      ["straniamento","silenzio","normale","assurdo","ironia","narratore"]),

    open("ve48","Confronti","In cosa consistono le differenze tra Verga e D'Annunzio, i due grandi della narrativa italiana di fine Ottocento?",
      "Verga e D'Annunzio sono gli antipodi della narrativa italiana di fine Ottocento. Verga: narratore eclissato, protagonisti vinti e umili, linguaggio sintattico-dialettale, pessimismo radicale, Sicilia arcaica. D'Annunzio: il poeta-io al centro di tutto, protagonisti superuomini e dandy, linguaggio magnifico e musicale, estetismo trionfante, mondanita italiana e europea. Entrambi cercano una forma di impersonalita — ma D'Annunzio la esibisce (il superuomo parla e trionfalmente), Verga la pratica (il narratore tace e scompare). L'uno canta il trionfo; l'altro documenta la sconfitta.",
      ["Verga","D'Annunzio","narratore eclissato","superuomo","vinti","pessimismo"])

  ];
})();
