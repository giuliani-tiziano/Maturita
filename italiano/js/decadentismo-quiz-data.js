/* =========================================================================
   decadentismo-quiz-data.js — Banca domande: Il Decadentismo
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
  window.QUIZ_DATA.decadentismo = [

    /* ── ORIGINI ── */
    mc("de01","Origini","Il Decadentismo nasce come reazione a quale corrente precedente?",
      ["Al Romanticismo tedesco","Al Naturalismo e al positivismo","Al Classicismo neoclassico","All'Illuminismo"],
      1,"Il Decadentismo nasce negli anni '80 dell'Ottocento come reazione al Naturalismo e al positivismo: rifiuta la scienza come strumento di conoscenza assoluta, il progresso come mito, la borghesia come guida. La realta profonda e irrazionale, non misurabile."),

    mc("de02","Origini","In quale paese nasce il Decadentismo come fenomeno letterario organizzato?",
      ["Italia","Germania","Francia","Inghilterra"],
      2,"Il Decadentismo nasce in Francia negli anni '80 dell'Ottocento. Le sue radici stanno in Baudelaire (I fiori del male, 1857), Verlaine (I poeti maledetti, 1884) e Huysmans (Controcorrente, 1884)."),

    mc("de03","Origini","Quale opera di Baudelaire del 1857 e il testo fondatore della modernita poetica decadente?",
      ["Le fleur bleue","I fiori del male","L'albatro","Lo spleen di Parigi"],
      1,"I fiori del male (Les Fleurs du Mal, 1857) e il testo fondatore: Baudelaire esplora il male, il peccato, la noia esistenziale (spleen), la bellezza artificiale, la citta moderna. Il sonetto Corrispondenze fonda la poetica delle corrispondenze sensoriali."),

    mc("de04","Origini","Come nasce il termine 'decadente'?",
      ["Come omaggio agli artisti del Rinascimento","Come insulto dei giornalisti conservatori, poi rivendicato con orgoglio dai poeti","Come titolo di una rivista letteraria","Come categoria critica di Benedetto Croce"],
      1,"Il termine nasce come insulto: i giornalisti conservatori chiamano decadents i poeti che si distaccano dalla tradizione classica. Verlaine e i suoi amici lo rivendicano: si, siamo in declino — ma il declino e la condizione della lucidita e dell'arte autentica."),

    mc("de05","Origini","Quale saggio di Verlaine del 1884 consacra la figura del 'poeta maledetto'?",
      ["Arte poetica","Romanze senza parole","I poeti maledetti","Feste galanti"],
      2,"I poeti maledetti (Les poetes maudits, 1884) di Verlaine: un saggio sui poeti Rimbaud, Mallarme e Corbiere che li consacra come 'maledetti' — artisti visionari incompresi dalla societa borghese, che pagano con la miseria il privilegio della visione."),

    mc("de06","Origini","Quale filosofo tedesco, con il concetto di 'volonta come dolore', influenza il Decadentismo?",
      ["Hegel","Nietzsche","Schopenhauer","Kant"],
      2,"Arthur Schopenhauer: il mondo e volonta cieca e dolore; solo l'arte dà una tregua. La visione schopenhaueriana della vita come sofferenza senza scopo e alla base dell'atmosfera decadente di spleen e disagio esistenziale."),

    mc("de07","Origini","Quale romanzo di Joris-Karl Huysmans (1884) viene definito 'breviario del Decadentismo'?",
      ["Le Jardin des supplices","La-Bas","Controcorrente (A rebours)","En Route"],
      2,"Controcorrente (A rebours, 1884) di Huysmans: Des Esseintes, aristocratico nevrotico, si ritira dalla societa e costruisce un universo artificiale totale. Il romanzo codifica l'estetismo: il bello artificiale e superiore al bello naturale."),

    /* ── POETICA ── */
    mc("de08","Poetica","Cosa sono le 'corrispondenze' secondo Baudelaire?",
      ["Le lettere scambiate tra poeti decadenti","I legami nascosti tra il mondo fisico e quello spirituale, e tra le diverse sfere sensoriali","Le rime interne di un sonetto","I rimandi intertestuali tra le poesie"],
      1,"Le corrispondenze baudelairiane: rete di richiami nascosti tra mondo fisico e spirituale e tra diverse sfere sensoriali. La Natura e un sistema di simboli ('foresta di simboli') dove tutto si risponde — i profumi, i colori e i suoni."),

    mc("de09","Poetica","Cosa e la 'sinestesia' nei Decadenti?",
      ["Una figura retorica che unisce sensazioni di sfere sensoriali diverse: 'profumi verdi', 'suono dorato'","Un tipo di rima alternata","La descrizione di un paesaggio attraverso tutti i sensi","Una tecnica di composizione musicale"],
      0,"La sinestesia unisce sensazioni di sfere sensoriali diverse. Nei Decadenti non e ornamento retorico: e strumento filosofico che rivela le corrispondenze profonde tra le cose. Esempio da Baudelaire: 'profumi freschi come carni di bambini, dolci come gli oboe, verdi come i prati.'"),

    mc("de10","Poetica","Cosa e lo 'spleen' baudelairiano?",
      ["Un organo fisico del corpo umano","Una noia esistenziale profonda e senza causa specifica che opprime il poeta moderno","La gioia intensa della creazione artistica","Un tipo di melodia musicale"],
      1,"Lo spleen (dall'inglese, usato in francese): noia esistenziale profonda, disgusto della vita, malinconia senza oggetto. Non e semplice tristezza: e la condizione permanente dell'artista che ha perso l'ideale. Baudelaire divide la sua raccolta tra Spleen e Ideale: i due poli della coscienza moderna."),

    mc("de11","Poetica","Quale principio estetico accomuna Decadentismo ed Estetismo in opposizione al Naturalismo?",
      ["La fedele rappresentazione della realta sociale","L'arte per l'arte: l'arte non ha obblighi morali ne sociali, la bellezza e l'unico valore assoluto","L'impersonalita del narratore","Il determinismo biologico"],
      1,"L'arte per l'arte (l'art pour l'art): sia i Decadenti che gli Estetisti rifiutano l'utilita dell'arte. L'arte non deve essere morale, didattica, riformatrice: deve essere bella. E l'opposto del Naturalismo (arte come strumento di conoscenza e riforma sociale)."),

    mc("de12","Poetica","Il 'simbolo' nel Decadentismo e…",
      ["Una metafora esplicita con un significato unico","Un elemento concreto che rimanda a una realta spirituale non esprimibile direttamente: polisemico e inesauribile","Un segno grafico usato nella tipografia decadente","Una figura retorica simile alla personificazione"],
      1,"Il simbolo decadente: un elemento concreto (un fiore, un colore, un oggetto) che rimanda a una realta spirituale profonda. E polisemico — ha piu significati possibili — e inesauribile: non si 'traduce' in un significato unico. La sua ricchezza sta nell'irriducibilita."),

    mc("de13","Poetica","Quale filosofo tedesco, con la teoria del superuomo e la morte di Dio, influenza il Decadentismo?",
      ["Schopenhauer","Hegel","Nietzsche","Marx"],
      2,"Friedrich Nietzsche: la morte di Dio crea il vuoto di valori; l'artista deve creare nuovi valori. Il concetto di superuomo viene recepito diversamente: D'Annunzio lo trasforma in superuomo mondano; Campana lo legge come sfida esistenziale abissale."),

    mc("de14","Poetica","Quale temi sono ricorrenti nel Decadentismo europeo?",
      ["La giustizia sociale, la solidarieta operaia, il progresso","La citta moderna come luogo di perdizione e bellezza, il male come forma estetica, l'eros e la morte, la donna fatale","La vita contadina e il paesaggio naturale","Il nazionalismo e il patriottismo"],
      1,"Temi ricorrenti: la citta moderna come luogo di perdizione e bellezza; il male come forma estetica; l'eros e la morte (Liebestod); la donna fatale; l'artificio contro la natura; la noia esistenziale (spleen); il sogno e l'allucinazione; l'arte come unica trascendenza in un mondo senza Dio."),

    /* ── DECADENTISMO ITALIANO ── */
    mc("de15","Decadentismo italiano","In cosa si differenzia il Decadentismo italiano dal Decadentismo europeo?",
      ["Il Decadentismo italiano e piu oscuro e sperimentale","Il Decadentismo italiano e piu estetizzante, piu legato alla tradizione metrica, meno radicale nell'oscurita","Il Decadentismo italiano non esiste","Il Decadentismo italiano e nato prima di quello francese"],
      1,"Il Decadentismo italiano e meno radicale di quello francese: tende a estetizzare la crisi in bellezza formale piuttosto che esplorarla nell'oscurita. D'Annunzio incarna la versione mondana e muscolare; Pascoli quella intimista e simbolica. Nessuno raggiunge la radicalita di Mallarme o Rimbaud."),

    mc("de16","Decadentismo italiano","Quale dei due — D'Annunzio o Pascoli — interpreta il Decadentismo in chiave piu simbolica e intimista?",
      ["D'Annunzio","Pascoli","Entrambi ugualmente","Nessuno dei due e decadente"],
      1,"Pascoli incarna il Decadentismo italiano in chiave intimista e simbolica: le piccole cose quotidiane diventano simboli di realta piu profonde, il fonosimbolismo rivela le corrispondenze sensoriali, il nido e luogo di rifugio simbolico. D'Annunzio e invece la versione mondana e trionfante."),

    mc("de17","Decadentismo italiano","Come si definisce la poetica di D'Annunzio rispetto al Decadentismo europeo?",
      ["Il Decadentismo come condanna morale della societa borghese","Il Decadentismo come stile di vita del superuomo estetizzante: la vita inimitabile, il panismo, il vitalismo","Il Decadentismo come ricerca del mistero attraverso l'oscurita","Il Decadentismo come ermetismo puro"],
      1,"D'Annunzio trasforma il Decadentismo in vitalismo estetizzante: la vita come opera d'arte, il superuomo che trionfa, il panismo (fusione con la natura), la sensazione come valore assoluto. E la versione piu mondana e meno tormentata del Decadentismo europeo."),

    /* ── OPERE ── */
    mc("de18","Opere","Il sonetto Corrispondenze di Baudelaire e il manifesto di quale poetica?",
      ["Il manifesto del Naturalismo","Il manifesto della poetica simbolista: la Natura come sistema di simboli, le corrispondenze tra i sensi","Il manifesto del Futurismo","Il manifesto del Verismo"],
      1,"Corrispondenze (1857) e il manifesto della poetica simbolista: la Natura non e realta meccanica ma un tempio di simboli dove tutto si risponde (profumi, colori, suoni). E il testo da cui nasce tutta la poetica simbolista europea."),

    mc("de19","Opere","In quale sezione de I fiori del male si trova il sonetto Corrispondenze?",
      ["Quadri parigini","Il vino","Spleen e Ideale","I fiori del male"],
      2,"Corrispondenze si trova nella sezione Spleen e Ideale, la prima e piu ampia de I fiori del male. La sezione esplora la tensione tra la noia (spleen) e la nostalgia dell'assoluto (ideale) — i due poli della coscienza moderna baudelairiana."),

    mc("de20","Opere","Quale opera di Verlaine del 1874 e considerata un manifesto implicito del Simbolismo?",
      ["Feste galanti","Romanze senza parole","Arte poetica","Sagesse"],
      2,"Arte poetica (scritta 1874, pubblicata 1882) di Verlaine: 'De la musique avant toute chose' — la musica prima di tutto. La vaghezza, l'imprecisione, il rifiuto dell'eloquenza: principi che diventano il manifesto del Simbolismo."),

    mc("de21","Opere","Il ritratto di Dorian Gray di Oscar Wilde (1890) e il romanzo estetista piu famoso. Qual e il suo tema centrale?",
      ["Il tema dell'eredita e della famiglia aristocratica","Il culto della bellezza come unica morale: Dorian vende l'anima per restare giovane e bello mentre il ritratto si corrompe al suo posto","La critica alla societa vittoriana attraverso la parodia","La vita degli artisti parigini"],
      1,"Dorian Gray firma un patto: il suo ritratto invecchiera e si degradera al suo posto. La giovinezza e la bellezza fisica sono i beni supremi; l'anima non conta. Ma il romanzo mostra anche le conseguenze devastanti di questo culto: Dorian muore distruggendo il ritratto."),

    mc("de22","Opere","A chi e dedicato il sottotitolo in tedesco dei Canti orfici di Campana?",
      ["A Marinetti e al Futurismo","Al 'tragico destino dell'ultimo Germano in Italia': un ideale di purezza morale contro la corruzione","A Verga e al Verismo siciliano","All'Imperatore Guglielmo II"],
      1,"Il sottotitolo Die Tragodie des letzten Germanen in Italien ('La tragedia dell'ultimo Germano in Italia') non e rivendicazione etnica: e un ideale di purezza morale e spirituale contro la corruzione del presente italiano. Il 'Germano' e la figura dell'artista integro in una societa corrotta."),

    mc("de23","Opere","Quale opera di Rimbaud (1873) e l'autobiografia poetica del suo viaggio nel disordine sensoriale?",
      ["Le illuminazioni","Arte poetica","Una stagione all'inferno","L'albatro"],
      2,"Una stagione all'inferno (1873) e l'unica opera pubblicata da Rimbaud da vivo: autobiografia allucinata del viaggio nell'irrazionale, del fallimento del programma del veggente, della rinuncia alla poesia. 'Bisogna essere assolutamente moderni' — poi il silenzio."),

    /* ── CONFRONTI ── */
    mc("de24","Confronti","Qual e la differenza fondamentale tra Decadentismo e Naturalismo?",
      ["Il Decadentismo usa il verso; il Naturalismo la prosa","Il Decadentismo rifiuta la scienza e il razionalismo; il Naturalismo li abbraccia. Opposta visione della realta: misterica vs misurabile","Non c'e differenza sostanziale","Il Decadentismo e italiano; il Naturalismo e francese"],
      1,"Decadentismo vs Naturalismo: il Decadentismo rifiuta la scienza come strumento di conoscenza (la realta profonda e irrazionale e misterica) e il progresso come mito. Il Naturalismo abbraccia la scienza e il metodo sperimentale, crede che la realta sia misurabile e comprensibile."),

    mc("de25","Confronti","Come si differenziano D'Annunzio e Pascoli nell'interpretare il Decadentismo italiano?",
      ["D'Annunzio e piu pessimista; Pascoli e piu ottimista","D'Annunzio incarna il Decadentismo come vitalismo del superuomo estetizzante; Pascoli lo incarna come apertura simbolica del quotidiano al mistero","Non si differenziano: entrambi seguono lo stesso modello","Pascoli e il vate; D'Annunzio e il poeta del nido"],
      1,"D'Annunzio: il poeta-vate al centro, superuomo trionfante, panismo, vita come opera d'arte, magniloquenza. Pascoli: il fanciullino ai margini, il nido come rifugio, le piccole cose come simboli del mistero, fonosimbolismo. Due interpretazioni radicamente diverse dello stesso orizzonte culturale."),

    /* ── TESTI ── */
    mc("de26","Testi","Nella prima quartina di Corrispondenze, cosa rappresenta la 'foresta di simboli'?",
      ["Una vera foresta dove il poeta passeggia","La Natura come sistema di segni che l'artista — a differenza dell'uomo comune — sa leggere e interpretare","Una metafora della confusione urbana moderna","I libri di una biblioteca"],
      1,"La 'foresta di simboli' della prima quartina di Corrispondenze: la Natura non e realta meccanica ma un tempio di segni che rimandano a realta piu profonde. L'artista e colui che sa leggere questi simboli — a differenza dell'uomo comune che li attraversa inconsapevolmente."),

    mc("de27","Testi","Nei versi 9-14 di Corrispondenze, la sinestesia 'profumi dolci come gli oboe' unisce quali sfere sensoriali?",
      ["Olfatto e udito","Vista e udito","Gusto e olfatto","Tatto e vista"],
      0,"'Dolci come gli oboe': dolce e un aggettivo gustativo, l'oboe e un suono. La sinestesia unisce olfatto (profumi), gusto (dolci) e udito (oboe) in una catena sensoriale. E il cuore della poetica delle corrispondenze: le sfere sensoriali si rispondono e si traducono l'una nell'altra."),

    mc("de28","Testi","In Controcorrente di Huysmans, cosa costruisce Des Esseintes nella sua villa?",
      ["Un laboratorio scientifico per esperimenti chimici","Un universo artificiale totale: colori calcolati, profumi rari, tartarughe ricoperte di gemme, libri proibiti","Una raccolta di opere d'arte moderna","Un orto botanico esotico"],
      1,"Des Esseintes costruisce un universo artificiale totale: sostituisce ogni elemento naturale con un artefatto piu raffinato. Le tartarughe ricoperte di gemme muoiono — il peso dell'oro le uccide. E il Decadentismo portato all'assurdo: il culto dell'artificio come rifiuto totale della natura."),

    mc("de29","Testi","Quale lirica di Baudelaire descrive il poeta come un uccello maestoso che cammina goffamente tra gli uomini?",
      ["Corrispondenze","L'albatro","Spleen IV","La strega"],
      1,"L'albatro (L'albatros): l'uccello del mare e maestoso in volo (come il poeta nell'ispirazione) ma goffo e ridicolo sul ponte della nave (come il poeta nella vita quotidiana). E la metafora piu celebre della figura del 'poeta maledetto' incompreso dalla societa."),

    /* ── GLOSSARIO ── */
    mc("de30","Glossario","Cos'e il 'poeta maledetto' (poete maudit)?",
      ["Un poeta condannato per reati penali","L'artista incompreso, ai margini della societa borghese, che paga con la miseria e la follia il privilegio della visione poetica","Un poeta che scrive di temi moralmente reprensibili","Un poeta che non ha mai pubblicato le sue opere"],
      1,"Il poeta maledetto (poete maudit, formula di Verlaine, 1884): l'artista incompreso dalla societa borghese che paga con la miseria, l'emarginazione e spesso la follia il privilegio della visione poetica superiore. Rimbaud, Verlaine, Mallarme, Corbiere sono i 'maledetti' per eccellenza."),

    mc("de31","Glossario","Cosa si intende per 'arte per l'arte' (l'art pour l'art)?",
      ["L'arte come strumento di propaganda politica","L'arte come fine a se stessa: non ha obblighi morali ne sociali; la bellezza e l'unico valore assoluto","L'arte come imitazione della natura","L'arte come strumento di educazione morale"],
      1,"L'arte per l'arte (l'art pour l'art): principio estetico per cui l'arte non ha scopi morali ne sociali. Fondato da Gautier (1835), teorizzato da Pater, incarnato da Wilde. E l'opposto del Naturalismo (arte come strumento di riforma sociale)."),

    mc("de32","Glossario","Cosa e l'analogia nel Decadentismo?",
      ["Una similitudine esplicita con 'come'","Un accostamento di immagini lontane senza termini di paragone espliciti, che produce rivelazioni improvvise","Un tipo di rime alternate","Un commento del narratore sui personaggi"],
      1,"L'analogia accosta immagini lontane senza il termine di paragone: 'La Natura e un tempio' (non 'come un tempio'). La mancanza del termine esplicito crea l'effetto di rivelazione improvvisa: il lettore deve fare un salto intuitivo. Nei Decadenti e poi negli Ermetici diventa sempre piu ardita e oscura."),

    /* ── VERO/FALSO ── */
    tf("de33","Origini","Il termine 'decadente' nacque come omaggio positivo rivolto ai nuovi poeti francesi.",
      false,"Falso. Il termine nasce come insulto dei giornalisti conservatori. Verlaine e i suoi amici lo rivendicano con orgoglio rovesciandone il significato: si, siamo in declino rispetto ai valori borghesi — ma questo declino e la condizione della vera arte."),

    tf("de34","Origini","I fiori del male di Baudelaire fu pubblicato senza problemi legali nel 1857.",
      false,"Falso. Baudelaire fu processato per 'oltraggi alla morale pubblica e religiosa' nel 1857 e condannato a rimuovere sei poesie dalla raccolta. Il processo rese il libro celebre in tutta Europa e lancio definitivamente la modernita poetica."),

    tf("de35","Poetica","La sinestesia nel Decadentismo e solo un ornamento stilistico, non ha un significato filosofico.",
      false,"Falso. Nei Decadenti la sinestesia non e ornamento: e uno strumento filosofico. L'unione di sfere sensoriali diverse (profumi verdi, suoni dorati) e la prova poetica delle 'corrispondenze' baudelairiane — l'unita profonda che lega tutte le cose."),

    tf("de36","Decadentismo italiano","Il Decadentismo italiano e piu radicale e sperimentale di quello francese.",
      false,"Falso. Il Decadentismo italiano e meno radicale di quello francese: D'Annunzio e piu estetizzante e mondano che tormentato; Pascoli e piu intimista che oscuro. Nessuno raggiunge la radicalita formale di Mallarme (Un colpo di dadi, 1897) o la violenza visionaria di Rimbaud."),

    tf("de37","Opere","Oscar Wilde e un esponente del Decadentismo inglese oltre che dell'Estetismo.",
      true,"Vero. Wilde e il massimo rappresentante sia del Decadentismo inglese che dell'Estetismo. Le due correnti si sovrappongono in Inghilterra: entrambe rifiutano i valori borghesi e valoriano il bello sopra la morale. Il ritratto di Dorian Gray (1890) e il manifesto di entrambe."),

    tf("de38","Poetica","Il Decadentismo esalta la scienza come strumento di conoscenza superiore.",
      false,"Falso. E vero il contrario: il Decadentismo nasce proprio come rifiuto della scienza e del positivismo. La realta profonda e irrazionale e misterica, non misurabile con metodi scientifici. L'intuizione, il sogno e il simbolo sostituiscono la ragione come strumenti conoscitivi."),

    tf("de39","Origini","Schopenhauer e Nietzsche sono i due filosofi tedeschi che influenzano maggiormente il Decadentismo.",
      true,"Vero. Schopenhauer (il mondo come dolore, l'arte come tregua) e Nietzsche (la morte di Dio, il superuomo come creatore di nuovi valori) sono i due filosofi di riferimento del Decadentismo europeo. Entrambi mettono in crisi i valori del positivismo borghese."),

    tf("de40","Opere","Controcorrente (A rebours) di Huysmans e stato un romanzo poco influente, ignorato dai contemporanei.",
      false,"Falso. Controcorrente e stato uno dei romanzi piu influenti del tardo Ottocento. Oscar Wilde era ossessionato da questo libro. Il protagonista Des Esseintes e il modello diretto di Dorian Gray. Zola lo defini 'un colpo di piccone nel Naturalismo'."),

    tf("de41","Poetica","Nel sonetto Corrispondenze di Baudelaire, le 'foreste di simboli' si riferiscono ai boschi della Normandia dove il poeta passeggiava.",
      false,"Falso. Le 'foreste di simboli' non sono boschi reali: sono la metafora della Natura come sistema di segni. La Natura intera e un tempio i cui 'pilastri' emettono messaggi simbolici che l'artista sa interpretare. E una visione cosmologica, non autobiografica."),

    tf("de42","Decadentismo italiano","D'Annunzio lesse direttamente Baudelaire e Rimbaud in francese, senza mediazioni.",
      false,"Falso. D'Annunzio riceve il Simbolismo francese attraverso mediazioni italiane, non direttamente in lingua originale come fa Campana. E questa differenza — leggere le fonti filtrate vs leggere le fonti dirette — che spiega la diversa radicalita dei due poeti."),

    /* ── DOMANDE APERTE ── */
    open("de43","Poetica","Analizza le due quartine del sonetto Corrispondenze di Baudelaire e spiega il concetto di 'corrispondenze'.",
      "Prima quartina (vv. 1-4): la Natura non e realta meccanica misurabile ma un tempio sacro. I suoi elementi emettono messaggi simbolici; l'uomo li attraversa come una foresta di segni che lo guardano e lo riconoscono. Seconda quartina (vv. 5-8): esiste un'unita profonda e segreta che collega tutte le cose. I profumi, i colori e i suoni non sono percezioni separate ma 'si rispondono' l'uno all'altro — la sinestesia e la prova poetica di questa unita. Le corrispondenze sono quindi di due tipi: verticali (tra mondo fisico e spirituale) e orizzontali (tra le diverse sfere sensoriali).",
      ["Natura","tempio","simboli","unita","sinestesia","verticali","orizzontali"]),

    open("de44","Confronti","Perche il Decadentismo italiano e considerato 'meno radicale' di quello francese?",
      "Il Decadentismo francese porta l'oscurita come valore all'estremo (Mallarme) e il programma visionario fino all'auto-distruzione (Rimbaud). In Italia, D'Annunzio trasforma la crisi in trionfo estetico del superuomo — piu mondano che tormentato — e Pascoli la filtra attraverso il simbolismo delle piccole cose. Nessuno dei due raggiunge la radicalita formale di Mallarme (Un colpo di dadi) ne la violenza psichica di Rimbaud (il veggente). Il Decadentismo italiano e piu legato alla tradizione metrica classica e alla bellezza formale.",
      ["Mallarme","Rimbaud","D'Annunzio","Pascoli","radicalita","tradizione"]),

    open("de45","Opere","Come Des Esseintes in Controcorrente incarna il principio dell'artificio superiore alla natura?",
      "Des Esseintes sostituisce ogni elemento naturale con un artefatto artificiale piu raffinato: il profumo sintetico invece dei fiori, la grotta artificiale invece del mare, la luce artificiale invece del sole. Ricopre le tartarughe di gemme preziose — e le uccide con il peso dell'oro. E il Decadentismo portato all'assurdo logico: se l'artificio e superiore alla natura, si puo costruire un universo interamente artificiale. La morte delle tartarughe e il punto in cui il principio rivela la sua assurdita — ma Huysmans la descrive senza ironia.",
      ["Des Esseintes","artificiale","natura","artificio","tartarughe","assurdo"]),

    open("de46","Confronti","In cosa differiscono D'Annunzio e Pascoli come interpreti del Decadentismo italiano?",
      "D'Annunzio: il poeta-vate al centro di tutto, il superuomo trionfante, il panismo (fusione gioiosa con la natura), la vita come opera d'arte, la magniloquenza formale. Il Decadentismo come celebrazione dell'io eccezionale. Pascoli: il fanciullino ai margini del mondo, le piccole cose quotidiane come simboli del mistero, il nido come rifugio, il fonosimbolismo come rivelazione sensoriale. Il Decadentismo come apertura del quotidiano al mistero. L'uno e esteriorita e trionfo; l'altro e interiorita e perdita.",
      ["D'Annunzio","Pascoli","vate","fanciullino","panismo","simbolo","nido"]),

    open("de47","Glossario","Spiega la differenza tra 'simbolo' e 'metafora' nella poetica decadente.",
      "La metafora classica ha un significato fisso e univoco: 'Achille e un leone' significa che Achille e coraggioso. Il simbolo decadente e polisemico e inesauribile: il fiore di Baudelaire (nato dal male) non ha un significato unico che si possa parafrasare completamente. Ogni lettore e ogni lettura trovano significati diversi. La ricchezza del simbolo sta nell'irriducibilita — nella sua resistenza alla traduzione in significato unico. E uno strumento conoscitivo, non decorativo: accede a cio che la ragione non puo raggiungere.",
      ["simbolo","metafora","polisemico","inesauribile","irriducibile","conoscitivo"])

  ];
})();
