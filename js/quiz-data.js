/* =========================================================================
   quiz-data.js — Banca domande per i 5 autori
   - Saba       : 30 (riutilizzato da quiz_novecento.html)
   - Ungaretti  : 30
   - Montale    : 30
   - Svevo      : 30 (nuovo, dalla guida)
   - Pirandello : 30 (nuovo, dalla guida)
   ========================================================================= */

window.QUIZ_DATA = {

/* ════════════════════════════════════════════════════════════════════════
   SABA
   ════════════════════════════════════════════════════════════════════════ */
saba: [
  { id:1, type:'mc', topic:'Vita',
    text:'Perché Umberto Poli scelse lo pseudonimo «Saba»?',
    options:[
      'Per nascondere le sue origini triestine agli editori veneziani',
      'In omaggio alla balia slovena (Peppa Sabaz) o perché «saba» in ebraico significa pane/nonno — richiamo alle radici materne',
      'Era un soprannome dato dalla madre per evocare la nonviolenza',
      'Per imitare lo stile di un poeta ebraico medioevale chiamato Saba'
    ],
    correct:1,
    explanation:'Lo pseudonimo ha una valenza psicologica profonda: recupera il legame con la balia (Peppa Sabaz) e con l\'identità ebraica della famiglia materna.'
  },
  { id:2, type:'mc', topic:'Vita',
    text:'Qual è il trauma biografico di Saba legato alla figura paterna?',
    options:[
      'Il padre lo picchiava e impose il nome "Poli" contro la sua volontà',
      'Il padre abbandonò la famiglia prima della nascita del figlio',
      'Il padre fu arrestato per debiti',
      'Il padre voleva farlo studiare medicina'
    ],
    correct:1,
    explanation:'Ugo Edoardo Poli abbandonò la famiglia prima ancora della nascita del figlio. Uno dei traumi fondativi della poetica di Saba.'
  },
  { id:3, type:'tf', topic:'Vita',
    text:'Vero o falso: Saba iniziò la terapia psicoanalitica con Sigmund Freud a Vienna nel 1929.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Saba iniziò la terapia con Edoardo Weiss, il principale divulgatore della psicoanalisi in Italia, non con Freud direttamente. A Trieste nel 1929.'
  },
  { id:4, type:'mc', topic:'Vita',
    text:'Quale attività commerciale tenne Saba per gran parte della vita adulta?',
    options:[
      'Una tipografia che stampava le proprie raccolte',
      'Una libreria antiquaria a Trieste',
      'Una scuola privata di letteratura',
      'Un giornale letterario fondato con Svevo'
    ],
    correct:1,
    explanation:'La Libreria Antiquaria Saba a Trieste fu la sua occupazione principale.'
  },
  { id:5, type:'tf', topic:'Vita',
    text:'Vero o falso: Saba fu costretto a nascondersi durante la Seconda guerra mondiale a causa delle leggi razziali fasciste.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. In quanto ebreo, con le leggi razziali del 1938 Saba fu costretto a nascondersi. Si rifugiò a Roma e poi a Firenze.'
  },
  { id:6, type:'mc', topic:'Trieste',
    text:'Perché Trieste è definita «città di confine» nella formazione culturale di Saba?',
    options:[
      'Era luogo di incontro tra cultura italiana, tedesca, slava ed ebraica — ambiente che favorì il contatto con la psicoanalisi',
      'Perché era al confine tra modernità industriale e mondo rurale',
      'Era una città di porto ai margini della letteratura italiana',
      'Perché Saba si sentiva sempre straniero'
    ],
    correct:0,
    explanation:'Trieste città imperiale asburgica era a contatto diretto con Vienna, epicentro della psicoanalisi freudiana.'
  },
  { id:7, type:'open', topic:'Testi · Trieste',
    text:'Nella poesia «Trieste», Saba usa l\'espressione «scontrosa grazia». Spiega di quale figura retorica si tratta e quali significati porta nella lirica.',
    modelAnswer:'Si tratta di un ossimoro (due termini semanticamente opposti uniti in una sola espressione). "Scontrosa" evoca chiusura, ritrosia; "grazia" evoca bellezza e fascino. Insieme descrivono il carattere ambivalente di Trieste: una città riservata ma affascinante. L\'ossimoro funziona anche come autoritratto: Saba stesso è scontroso e appartato, eppure capace di poesia.',
    keywords:['ossimoro','ambivalenza','autoritratto','specchio dell\'anima','scontrosa','grazia']
  },
  { id:8, type:'mc', topic:'Poetica',
    text:'Cosa intende Saba con «poesia onesta» nel saggio del 1911?',
    options:[
      'Una poesia che rispetti la metrica classica',
      'Una poesia che dica la verità senza mascherarla né amplificarla — il poeta come ricercatore di verità',
      'Una poesia di contenuto morale',
      'Una poesia accessibile alle classi popolari'
    ],
    correct:1,
    explanation:'Dal saggio «Quello che resta da fare ai poeti» (1911): la poesia deve tendere a un tipo morale che si avvicini al ricercatore di verità, non al letterato di professione.'
  },
  { id:9, type:'tf', topic:'Poetica',
    text:'Vero o falso: la struttura tipica di una lirica di Saba prevede un frammento lirico aperto sulla scia del vocianesimo.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. La struttura tipica di Saba è tripartita: spunto narrativo → descrizione → riflessione conclusiva con valore di sentenza. Si oppone al frammentismo vociano.'
  },
  { id:10, type:'mc', topic:'Poetica',
    text:'Perché Saba in «Amai» scrive di aver amato «la più antica e difficile» delle rime — quella tra «fiore» e «amore»?',
    options:[
      'Perché erano le uniche rime che gli venivano spontanee',
      'Per ironia: deridere i poeti che usano rime banali',
      'Recuperarle consapevolmente, sapendo che il Novecento le rifiuta, è un atto di coraggio: sono "antiche" perché vere',
      'Per rifarsi esplicitamente al modello petrarchesco'
    ],
    correct:2,
    explanation:'Il gesto di Saba è anti-novecentesco: in un\'epoca che rifiuta le rime comuni, lui le recupera deliberatamente perché in esse riconosce la verità dell\'esperienza.'
  },
  { id:11, type:'open', topic:'Poetica',
    text:'Spiega cosa significa per Saba la metafora della poesia come «scandaglio». Come si collega alla psicoanalisi?',
    modelAnswer:'Lo scandaglio è uno strumento che si cala in mare per misurare la profondità. In Saba, la poesia è uno scandaglio dell\'interiorità: scende negli strati profondi dell\'io, raggiunge l\'inconscio, porta in superficie i traumi rimossi. In «Amai» Saba scrive «amai la verità che giace al fondo». Il collegamento con la psicoanalisi è esplicito: come Freud porta alla luce i conflitti inconsci, la poesia di Saba esplora gli strati nascosti dell\'anima.',
    keywords:['scandaglio','profondità','inconscio','Amai','verità al fondo','psicoanalisi','traumi']
  },
  { id:12, type:'mc', topic:'Psicoanalisi',
    text:'Cosa rappresenta la «scissione dell\'io» nella psicologia di Saba?',
    options:[
      'La separazione tra la sua identità di poeta e di libraio',
      'La divisione tra identità italiana e ebraica nella Trieste asburgica',
      'La frattura prodotta dai due modelli materni opposti: la balia allegra (madre di gioia) e la madre biologica severa (madre mesta)',
      'La rottura con la tradizione letteraria italiana'
    ],
    correct:2,
    explanation:'Saba stesso spiega ne «Il piccolo Berto» come la doppia figura materna abbia prodotto un io scisso: da un lato il ricordo gioioso della balia, dall\'altro il peso della madre biologica.'
  },
  { id:13, type:'tf', topic:'Psicoanalisi',
    text:'Vero o falso: Saba è definito «psicanalitico prima della psicanalisi» da Gianfranco Contini.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Contini riconobbe come Saba, ancor prima di conoscere la psicoanalisi freudiana, avesse intuito nella poesia una funzione di esplorazione dell\'inconscio.'
  },
  { id:14, type:'mc', topic:'Il Canzoniere',
    text:'Con quale espressione Saba definisce il Canzoniere?',
    options:[
      'Una «summa lirica» dell\'esperienza triestina',
      'Un «romanzo psicologico in versi» in cui ogni poesia è tassello di un\'unica storia interiore',
      'Una «confessione» in forma metrica',
      'Un «diario» poetico senza struttura predeterminata'
    ],
    correct:1,
    explanation:'La formula «romanzo psicologico in versi» chiarisce che il Canzoniere non è una raccolta di liriche indipendenti ma un\'opera unitaria.'
  },
  { id:15, type:'mc', topic:'Il Canzoniere',
    text:'In che anno esce la prima edizione del Canzoniere e quante volte viene riorganizzato?',
    options:[
      '1919 — una sola edizione definitiva',
      '1921 — riorganizzato fino all\'edizione definitiva del 1961',
      '1933 — rimaneggiato tre volte tra 1933 e 1945',
      '1945 — subito nella forma finale'
    ],
    correct:1,
    explanation:'Prima edizione parziale nel 1921; edizione definitiva del 1961 è quella che oggi si legge.'
  },
  { id:16, type:'tf', topic:'Il Canzoniere',
    text:'Vero o falso: nella sezione «Trieste e una donna» del Canzoniere, il titolo rivela che Trieste e Lina (la moglie) sono i due poli attorno a cui ruota l\'intera sezione.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La struttura binaria del titolo è significativa: la città e la donna sono i due amori fondamentali del giovane Saba.'
  },
  { id:17, type:'open', topic:'Testi · La capra',
    text:'Analizza i tre livelli di significato de «La capra» (narrativo, simbolico-universale, autobiografico-identitario) con riferimenti testuali.',
    modelAnswer:'Piano narrativo: il poeta cammina e incontra una capra sola, bagnata, legata in un prato che bela. Piano simbolico-universale: il belato "uguale" rivela che "il dolore è eterno, ha una voce e non varia" — una sola voce del dolore in tutti gli esseri viventi; il poeta se ne sente "fraternamente" coinvolto. Piano autobiografico-identitario: "viso semita" — la capra ha il muso che ricorda un viso ebreo; Saba si riconosce nella capra come ebreo marginale, e in essa sente querelarsi "ogni altra vita". La rima semita/vita sigla l\'identità ebraica come destino.',
    keywords:['dolore eterno','viso semita','fraternità','belato uguale','ogni altra vita','identità ebraica']
  },
  { id:18, type:'mc', topic:'Testi · A mia moglie',
    text:'In «A mia moglie», a quale struttura retorica è paragonabile l\'anafora «Tu sei come» ripetuta per sei strofe?',
    options:[
      'A una sequenza di metafore simboliste',
      'Al catalogo epico di matrice omerica',
      'A una preghiera di elogio o litania (Cantico delle Creature)',
      'A una serie di similitudini platoniche'
    ],
    correct:2,
    explanation:'Lorenzo Renzi ha osservato come la struttura ripetitiva «Tu sei come + animale» richiami la forma della preghiera di elogio. Il Cantico delle Creature è il riferimento immediato.'
  },
  { id:19, type:'tf', topic:'Testi · A mia moglie',
    text:'Vero o falso: secondo Saba, la moglie Lina è assimilata a femmine animali in segno di disprezzo.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. È il contrario: per Saba le femmine degli animali «avvicinano a Dio». Il paragone è un elogio altissimo.'
  },
  { id:20, type:'mc', topic:'Testi · Città vecchia',
    text:'In «Città vecchia», il verso «Tra il detrito…infinito» realizza un\'antitesi semantica. Qual è il suo significato profondo?',
    options:[
      'Il contrasto tra quartiere povero e Trieste borghese rivela l\'ingiustizia sociale',
      'Il "detrito" contiene l\'infinito: nelle creature emarginate si trova il sacro',
      'Il "detrito" è il passato di Trieste, l\'"infinito" il suo futuro',
      'È un riferimento leopardiano alla Ginestra'
    ],
    correct:1,
    explanation:'È la tesi centrale: il sacro e l\'infinito non stanno nel bello, ma nel marginale, nel scartato. Il divino si agita nei "perduti" quanto nel poeta.'
  },
  { id:21, type:'open', topic:'Testi · Mio padre',
    text:'Nel sonetto «Mio padre è stato per me l\'assassino», spiega cosa rappresentano le «due razze in antica tenzone».',
    modelAnswer:'Le «due razze» non indicano razze etniche ma due caratteri opposti ereditati dai genitori: la «leggerezza» del padre (cristiano, spensierato, nomade) vs. la «pesantezza» della madre (ebrea, severa, oppressa dai pesi della vita). Questo contrasto è la radice della nevrosi di Saba: egli porta entrambe le nature e non riesce a comporle. Il padre, dapprima «l\'assassino» per la madre, si rivela portatore del dono della leggerezza. La poesia nasce proprio da questa tensione irrisolta.',
    keywords:['due razze','leggerezza paterna','pesantezza materna','nevrosi','scissione','dono del padre']
  },
  { id:22, type:'mc', topic:'Stile',
    text:'Come evolve la metrica di Saba dal periodo giovanile alla maturità?',
    options:[
      'Passa dal verso libero alla metrica rigidamente classica',
      'Rimane fedele all\'endecasillabo con rima alternata',
      'Dal rigore delle forme tradizionali evolve verso metrica più irregolare e «versi spezzati» con influenza di Ungaretti',
      'Abbandona la rima dopo il 1930'
    ],
    correct:2,
    explanation:'A partire da «Il piccolo Berto» (1929-1931) la metrica si apre, anticipando la frammentazione di «Mediterranee» e «Uccelli».'
  },
  { id:23, type:'tf', topic:'Stile',
    text:'Vero o falso: l\'enjambement in Saba è un elemento puramente tecnico, senza relazione con il contenuto emotivo.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Gli enjambements di Saba hanno sempre una funzione espressiva: accentuano la tensione, il dolore, la sospensione emotiva.'
  },
  { id:24, type:'mc', topic:'Stile',
    text:'Quale critico definì Saba «moderno in modo quasi sconcertante» pur restando nella tradizione?',
    options:[
      'Benedetto Croce',
      'Sergio Solmi',
      'Giuseppe Ungaretti',
      'Pier Paolo Pasolini'
    ],
    correct:1,
    explanation:'Sergio Solmi osservò come il «conservatorismo» di Saba fosse paradossalmente originale: in un\'epoca di sperimentalismo, tornare alla tradizione era la scelta più anticonformista.'
  },
  { id:25, type:'open', topic:'Tradizione',
    text:'In che modo Saba si colloca rispetto alle principali correnti poetiche del Novecento italiano?',
    modelAnswer:'Saba si oppone a tutte le grandi correnti novecentesche: al futurismo contrappone la quotidianità; al crepuscolarismo l\'accettazione della vita; all\'ermetismo le «trite parole» accessibili; al vocianesimo la struttura tripartita con sentenza conclusiva. La sua è la «poesia onesta»: una terza via che non si identifica con nessuna avanguardia. È su una linea «antinovecentistica» che lo connette ai classici: Leopardi, Foscolo, Petrarca.',
    keywords:['poesia onesta','antinovecentistica','trite parole','tradizione','Leopardi','ermetismo']
  },
  { id:26, type:'mc', topic:'Tradizione',
    text:'Quale poeta italiano è il punto di riferimento principale nella formazione di Saba?',
    options:[
      'Gabriele D\'Annunzio',
      'Giacomo Leopardi — pessimismo cosmico e ricerca di verità nell\'umiltà del reale',
      'Giovanni Pascoli',
      'Ugo Foscolo'
    ],
    correct:1,
    explanation:'Leopardi è il principale referente: il pessimismo cosmico e la solidarietà tra esseri sofferenti (Ginestra) ritornano in Saba, specialmente ne «La capra».'
  },
  { id:27, type:'mc', topic:'Ernesto',
    text:'Perché il romanzo «Ernesto» rimase inedito fino al 1975?',
    options:[
      'Saba non lo considerava compiuto',
      'Trattava con onestà radicale la sessualità adolescenziale maschile, inclusa una relazione omosessuale — intollerabile per il clima dell\'epoca',
      'Conteneva critiche politiche al fascismo',
      'Era scritto in parte in dialetto triestino'
    ],
    correct:1,
    explanation:'Ernesto tratta il tema dell\'omosessualità adolescenziale con assoluta mancanza di giudizio morale. Impubblicabile nell\'Italia degli anni Cinquanta.'
  },
  { id:28, type:'tf', topic:'Ernesto',
    text:'Vero o falso: nel brano «La vera causa», Ernesto trova le parole giuste per confessare direttamente alla madre la propria esperienza omosessuale.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Ernesto non trova le parole dirette: la confessione avviene indirettamente, citando le parole dello zio Giovanni su uno «scandalo» del deputato.'
  },
  { id:29, type:'mc', topic:'Confronti',
    text:'Qual è la differenza fondamentale tra Saba e Montale verso il dolore?',
    options:[
      'Saba nega il dolore, Montale lo accetta rassegnato',
      'Saba sceglie l\'accettazione totale della vita; Montale diagnostica il «male di vivere» come ineluttabile',
      'Saba usa il dolore come strumento retorico, Montale come tema biografico',
      'Non c\'è differenza'
    ],
    correct:1,
    explanation:'In Saba il dolore è universale ma la vita resta degna di essere vissuta («ogni altra vita»); in Montale il male di vivere è strutturale e il «miracolo» è raro.'
  },
  { id:30, type:'open', topic:'Autobiografismo',
    text:'Saba è considerato un poeta profondamente autobiografico. Spiega il concetto di «autobiografismo» nella sua opera.',
    modelAnswer:'L\'autobiografismo di Saba non è semplice racconto di episodi personali, ma un progetto organico: il Canzoniere è definito «romanzo psicologico in versi», dove la vita diventa materia di un\'indagine interiore. A differenza della confessione lirica (che racconta per sfogo), Saba usa l\'autobiografia come scandaglio: ogni evento (l\'abbandono del padre, la balia, la moglie, Trieste) è riletto alla luce della psicanalisi per svelare i traumi profondi. Il risultato non è intimismo ma universalizzazione: la storia personale rivela la condizione umana.',
    keywords:['romanzo psicologico in versi','scandaglio','psicoanalisi','traumi','universalizzazione','Canzoniere']
  },
  { id:31, type:'mc', topic:'Vita',
    text:'In quale anno le leggi razziali fasciste costringono Saba a cedere le proprietà e fuggire da Trieste?',
    options:['1933','1935','1938','1942'],
    correct:2,
    explanation:'Le leggi razziali del 1938 colpiscono Saba in quanto ebreo. È costretto a cedere le proprietà e a rifugiarsi prima a Parigi, poi a Roma.'
  },
  { id:32, type:'mc', topic:'Vita',
    text:'Con l\'aiuto di quale poeta Saba visse nascosto a Firenze durante l\'occupazione tedesca del 1943?',
    options:['Giuseppe Ungaretti','Eugenio Montale','Benedetto Croce','Salvatore Quasimodo'],
    correct:1,
    explanation:'Nel 1943, durante l\'occupazione tedesca, Saba fugge a Firenze dove Montale lo accoglie e lo aiuta a nascondersi.'
  },
  { id:33, type:'tf', topic:'Vita',
    text:'Vero o falso: Saba gestì una libreria antiquaria a Trieste come occupazione principale per gran parte della vita adulta.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La Libreria Antiquaria Saba, acquistata nel 1909, fu la sua occupazione principale fino alla vecchiaia.'
  },
  { id:34, type:'mc', topic:'Poetica',
    text:'Nel saggio «Quello che resta da fare ai poeti» (1911), Saba definisce il tipo morale a cui il poeta deve tendere. Qual è?',
    options:['Il letterato di professione raffinato','Il ricercatore di verità, il più lontano possibile dal letterato di professione','Il vate che porta la parola alle masse','Il poeta simbolista che svela l\'assoluto'],
    correct:1,
    explanation:'Dal saggio: «Il poeta deve tendere ad un tipo morale il più remoto possibile da quello del letterato di professione, ed avvicinarsi invece a quello dei ricercatori di verità.»'
  },
  { id:35, type:'mc', topic:'Poetica',
    text:'Quale rivista rifiutò il saggio «Quello che resta da fare ai poeti» di Saba nel 1911?',
    options:['L\'Ambrosiano','La Voce','Lacerba','Il Frontespizio'],
    correct:1,
    explanation:'Il saggio fu rifiutato dalla rivista «La Voce». Paradossalmente, Saba si opponeva al frammentismo vociano.'
  },
  { id:36, type:'tf', topic:'Poetica',
    text:'Vero o falso: Saba si opponeva all\'oscurità degli Ermetici, al preziosismo di D\'Annunzio e allo sperimentalismo delle avanguardie.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Saba costruisce la sua posizione per differenza: contro D\'Annunzio (preziosismo), avanguardie (sperimentalismo), Voce (frammentismo), Ermetici (oscurità), Crepuscolari (prosaismo spoglio).'
  },
  { id:37, type:'mc', topic:'Poetica · Tre funzioni',
    text:'Quali sono le tre funzioni della poesia secondo la poetica di Saba?',
    options:['Estetica, politica, narrativa','Etico-conoscitiva (indagare la verità interiore), consolatoria (rimedio al malessere), terapeutica (elaborare i traumi)','Lirica, epica, didattica','Religiosa, sentimentale, satirica'],
    correct:1,
    explanation:'Le tre funzioni sabiane: etico-conoscitiva (indagine interiore tramite la verità), consolatoria (sollievo all\'esistenza), terapeutica (elaborare i traumi, funzione psicoanalitica).'
  },
  { id:38, type:'mc', topic:'Stile · Metrica',
    text:'Quale forma metrica usa prevalentemente Saba nel periodo giovanile e della maturità classica?',
    options:['Verso libero senza rima','Sonetto, canzone, endecasillabi e settenari — forme tradizionali','Solo quartine di novenari','Terzine dantesche'],
    correct:1,
    explanation:'Le forme tradizionali sono la scelta di Saba anche in epoca avanguardista: coerente con la sua poetica dell\'onestà contro lo sperimentalismo.'
  },
  { id:39, type:'tf', topic:'Stile · Metrica',
    text:'Vero o falso: a partire da «Il piccolo Berto» (1931) la metrica di Saba si fa più irregolare, con influenza di Ungaretti.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il passaggio è documentato: dal 1931 Saba apre la metrica verso forme più irregolari e «versi spezzati».'
  },
  { id:40, type:'mc', topic:'Stile · Lessico',
    text:'Come viene definito il lessico di Saba rispetto alle scelte novecentesche?',
    options:['Aulico e prezioso con neologismi futuristi','Composto di parole comuni e «trite» (amore, vita, cuore) — lessico inclusivo e antinovecentesco','Dialettale triestino con germanismi','Tecnico e scientifico'],
    correct:1,
    explanation:'Saba usa le parole più consumate della tradizione (amore, vita, fiore) deliberatamente: sono «trite» ma vere. La banalità è un atto di coraggio contro l\'oscurità ermetica.'
  },
  { id:41, type:'mc', topic:'Stile · Struttura',
    text:'Qual è la struttura tipica di una lirica di Saba, opposta al frammentismo vociano?',
    options:['Sonetto petrarchesco con 8+6 versi rigidi','Spunto narrativo → descrizione → riflessione conclusiva con valore di sentenza','Frammento lirico aperto senza conclusione','Serie di immagini giustapposte senza sintassi'],
    correct:1,
    explanation:'La struttura tripartita è caratteristica: si apre con uno spunto narrativo (un incontro, una camminata), si sviluppa in descrizione, e si conclude con una sentenza morale di valenza universale.'
  },
  { id:42, type:'tf', topic:'Stile · Struttura',
    text:'Vero o falso: l\'enjambement in Saba è privo di funzione espressiva — è solo un elemento tecnico.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Gli enjambements di Saba hanno sempre funzione espressiva: accentuano tensione, dolore e sospensione emotiva.'
  },
  { id:43, type:'mc', topic:'Il Canzoniere · Struttura',
    text:'In quanti volumi e quante sezioni è diviso il Canzoniere di Saba?',
    options:['Due volumi, 12 sezioni','Tre volumi, 25 sezioni','Un unico volume, 10 libri','Cinque parti autonome'],
    correct:1,
    explanation:'Tre volumi: primo (1900-1920, 8 sezioni), secondo (1921-1932, 8 sezioni), terzo (1933-1954, 9 sezioni). Totale: 25 sezioni.'
  },
  { id:44, type:'mc', topic:'Il Canzoniere · Edizioni',
    text:'Quante sono le edizioni principali del Canzoniere?',
    options:['Una sola (definitiva dal 1921)','Quattro edizioni: 1921, 1945, 1948, 1961','Due edizioni (1921 e 1945)','Cinque edizioni dal 1911 al 1961'],
    correct:1,
    explanation:'1921 (prima edizione, accolta con indifferenza), 1945 (Einaudi, inizio riconoscimento), 1948, 1961 (edizione definitiva postuma).'
  },
  { id:45, type:'tf', topic:'Il Canzoniere · Edizioni',
    text:'Vero o falso: la prima edizione del Canzoniere (1921) fu accolta con grande entusiasmo dalla critica italiana.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Fu accolta con indifferenza. Il riconoscimento arriva gradualmente, con la seconda edizione Einaudi del 1945.'
  },
  { id:46, type:'mc', topic:'Il Canzoniere · Volumi',
    text:'Quali temi dominano il primo volume del Canzoniere (1900-1920)?',
    options:['Temi psicoanalitici e infanzia','Esperienze giovanili, Trieste, amore per Lina, Prima guerra mondiale','Autoritratto anziano e temi politici','Sola riflessione sulla morte'],
    correct:1,
    explanation:'Il primo volume, «La vita della fanciullezza» a «Cose leggere e vaganti», condensa la poetica dell\'onestà giovanile.'
  },
  { id:47, type:'mc', topic:'Il Canzoniere · Volumi',
    text:'Quale sezione del secondo volume segna la svolta psicoanalitica?',
    options:['Trieste e una donna','Casa e campagna','Il piccolo Berto (1931) — con tema psicoanalitico esplicito','Cuor morituro'],
    correct:2,
    explanation:'«Il piccolo Berto» (1931) è la sezione della svolta: Saba, dopo la terapia con Weiss, affronta esplicitamente i traumi dell\'infanzia e la figura materna.'
  },
  { id:48, type:'open', topic:'Il Canzoniere',
    text:'Spiega perché Saba definisce il Canzoniere «romanzo psicologico in versi» e come si sviluppa da un\'edizione all\'altra.',
    modelAnswer:'La formula «romanzo psicologico in versi» indica che il Canzoniere non è una raccolta di liriche indipendenti ma un\'opera unitaria: ogni poesia è tassello di un\'unica storia interiore, come i capitoli di un romanzo. Il protagonista (il poeta stesso) cresce, soffre, riflette e arriva a una saggezza amara ma consapevole. La struttura in tre volumi rispecchia le fasi dell\'esistenza: giovinezza, maturità, vecchiaia. Da un\'edizione all\'altra (1921, 1945, 1948, 1961) il testo cresce nel numero di poesie, muta la struttura interna, e le poesie vengono revisionate. Esiste una fitta rete di rimandi tematici che crea armonia: i criteri non sono solo cronologici.',
    keywords:['romanzo psicologico in versi','opera unitaria','tre volumi','rimandi tematici','revisioni','storia interiore']
  },
  { id:49, type:'mc', topic:'Testi · Amai',
    text:'In «Amai», qual è la figura retorica dominante nelle prime tre parole dei tre movimenti della poesia («Amai trite parole… / Amai la verità… / Amo te»)?',
    options:['Ossimoro','Anafora — la ripetizione ribadisce la passione, passando dal passato al presente','Sinestesia','Apostrofe'],
    correct:1,
    explanation:'«Amai… Amai… Amo»: l\'anafora segna la progressione temporale — dal passato delle scelte stilistiche (trite parole), al passato della ricerca della verità, al presente del dialogo con il lettore.'
  },
  { id:50, type:'mc', topic:'Testi · Amai',
    text:'Nella poesia «Amai», cosa rappresenta la «buona carta lasciata al fine del mio gioco»?',
    options:['Un manoscritto inedito','L\'eredità poetica del Canzoniere lasciata al lettore come biglietto di congedo dalla vita','Una lettera alla moglie','La scheda anagrafica del poeta'],
    correct:1,
    explanation:'La metafora della carta lasciata: la vita è una partita (il «gioco»), e la poesia è la carta migliore che il poeta lascia al lettore come eredità. Coerente con la visione del Canzoniere come opera di tutta una vita.'
  },
  { id:51, type:'tf', topic:'Testi · Amai',
    text:'Vero o falso: in «Amai», la «verità che giace al fondo» è paragonata a un sogno dimenticato che il dolore riscopre come amica.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La verità non è alla superficie ma nel profondo — «quasi un sogno obliato, che il dolore / riscopre amica». La poesia è scandaglio dell\'inconscio.'
  },
  { id:52, type:'mc', topic:'Testi · A mia moglie',
    text:'Quante femmine animali compare Saba alla moglie Lina in «A mia moglie»?',
    options:['Tre','Cinque','Sette (gallina/pollastra, giovenca, cagna, coniglia, rondine, formica, ape)','Sei'],
    correct:2,
    explanation:'Sette paragoni animali, ciascuno in una strofa. La struttura ripetitiva «Tu sei come» richiama la preghiera di elogio, eco del Cantico delle Creature (Renzi).'
  },
  { id:53, type:'mc', topic:'Testi · A mia moglie',
    text:'Perché Lorenzo Renzi parla di «violazione del tabù» riguardo ad «A mia moglie»?',
    options:['Perché Saba parla dell\'adulterio','Perché gallina, vacca, cagna, coniglia evocano stupidità o sessualità — parole tabù nella poesia nobile — ma Saba le usa come elogio supremo','Perché il poema tratta argomenti politici proibiti','Perché è scritto in dialetto triestino'],
    correct:1,
    explanation:'I paragoni animali violano le norme della poesia amorosa tradizionale. La violazione è coerente con la poetica dell\'onestà: la poesia deve liberare dal malessere della civiltà.'
  },
  { id:54, type:'tf', topic:'Testi · A mia moglie',
    text:'Vero o falso: in «A mia moglie», Saba afferma che le femmine degli animali sereni «avvicinano a Dio», portando il paragone a una dimensione sacra.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La conclusione del poema generalizza: la moglie è presente in «tutte le femmine di tutti i sereni animali che avvicinano a Dio». Il paragone è un elogio altissimo, non un insulto.'
  },
  { id:55, type:'mc', topic:'Testi · La capra',
    text:'Nel verso «In una capra dal viso semita», a cosa allude «semita»?',
    options:['A una razza caprina specifica','Alla barbetta della capra che ricorda un viso ebreo — proiezione dell\'identità ebraica di Saba','A una capra importata dal Medio Oriente','All\'aspetto sofferente della capra'],
    correct:1,
    explanation:'«Viso semita» identifica la capra con l\'ebreo marginale, il diverso che porta in sé il dolore di «ogni altra vita». Saba si riconosce nella capra.'
  },
  { id:56, type:'tf', topic:'Testi · La capra',
    text:'Vero o falso: nella «La capra», la frase «il dolore è eterno, / ha una voce e non varia» esprime una visione ottimistica della vita.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. È una visione del dolore come condizione universale e immutabile: tutti gli esseri viventi condividono la stessa voce di sofferenza. È un pessimismo solidale (non nichilistico).'
  },
  { id:57, type:'mc', topic:'Testi · La capra',
    text:'In «La capra», qual è la figura retorica nel rapporto tra il belato della capra e il dolore del poeta?',
    options:['Metafora','Personificazione','Similitudine implicita (analogia): il belato è «fraterno al mio dolore» — lo stesso dolore in due esseri diversi','Ossimoro'],
    correct:2,
    explanation:'«Uguale belato era fraterno / al mio dolore»: l\'analogia/similitudine stabilisce un legame di fraternità tra il dolore animale e quello umano.'
  },
  { id:58, type:'mc', topic:'Testi · Trieste',
    text:'In «Trieste», il sintagma «scontrosa grazia» è un esempio di quale figura retorica?',
    options:['Metafora','Iperbole','Ossimoro: due aggettivi dal senso opposto («scontrosa» = chiusa, «grazia» = bellezza) uniti per descrivere l\'ambivalenza di Trieste','Sinestesia'],
    correct:2,
    explanation:'L\'ossimoro «scontrosa grazia» descrive il carattere ambivalente della città: riservata e chiusa ma affascinante. Funziona anche come autoritratto del poeta.'
  },
  { id:59, type:'mc', topic:'Testi · Trieste',
    text:'Nel poema «Trieste», come viene definita la città nella seconda strofa?',
    options:['Come un vecchio saggio','Come un ragazzaccio aspro e vorace, con gli occhi azzurri e le mani troppo grandi per regalare un fiore','Come una donna elegante','Come un porto silenzioso'],
    correct:1,
    explanation:'La similitudine umanizzante: Trieste è come un ragazzo ruvido ma con un fascino spontaneo — incapace di gesti raffinati ma pieno di vita.'
  },
  { id:60, type:'open', topic:'Testi · Trieste',
    text:'In «Trieste», il poeta passa dalla terza persona («Trieste ha una scontrosa / grazia») alla prima persona («La mia città»). Spiega il significato di questa progressione.',
    modelAnswer:'La progressione sintattica rispecchia un percorso affettivo: all\'inizio Trieste è osservata da lontano, quasi come un oggetto esterno («la città», «Trieste»). Nella seconda strofa il poeta la definisce con voce analitica usando la terza persona. Nella terza strofa, dal punto panoramico dell\'erta, Trieste diventa «La mia città» — il possessivo segnala l\'appropriazione, l\'identificazione totale. La città ha un cantuccio «fatto per me, alla mia vita / pensosa e schiva»: il luogo fisico diventa specchio dell\'identità interiore. L\'«aria natia» chiude il cerchio: è l\'aria della nascita, dell\'appartenenza irriducibile.',
    keywords:['terza persona / prima persona','La mia città','cantuccio','aria natia','specchio dell\'identità','appropriazione affettiva']
  },
  { id:61, type:'mc', topic:'Testi · Città vecchia',
    text:'In «Città vecchia», perché il poeta sceglie di percorrere un cammino più lungo attraverso i vicoli degradati?',
    options:['Per motivi di sicurezza','Perché lì ritrova la «perduta gente» in cui si sente fraternamente vicino — il sacro è presente anche nei margini','Per comprare libri usati','Per evitare il traffico'],
    correct:1,
    explanation:'Il cammino tra gli emarginati è una scelta esistenziale: Saba riconosce nei marginali la propria condizione di ebreo diverso e si sente fratello nel comune destino umano.'
  },
  { id:62, type:'mc', topic:'Testi · Città vecchia',
    text:'In «Città vecchia», quale antitesi centrale rivela la poetica di Saba sul sacro?',
    options:['Giorno/notte','Povero/ricco','«detrito» / «infinito» — il rifiuto e lo scarto contengono l\'infinito, il divino','Mare/terra'],
    correct:2,
    explanation:'L\'antitesi «detrito/infinito» è il nucleo teologico della poesia: là dove la società scarta, Saba trova l\'infinito. Il sacro non sta nel bello ma nell\'umile.'
  },
  { id:63, type:'tf', topic:'Testi · Città vecchia',
    text:'Vero o falso: in «Città vecchia», Saba esprime un giudizio morale negativo sulle prostitute e i marinai.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Il contrario: Saba si sente «fraternamente vicino» alla «perduta gente». Non giudica: riconosce la comune umanità. In esse «si agita, come in me, il Signore».'
  },
  { id:64, type:'mc', topic:'Testi · Mio padre',
    text:'Nella poesia «Mio padre è stato per me l\'assassino», perché la parola «assassino» è tra virgolette?',
    options:['Per indicare che è in dialetto','Perché è una citazione delle parole con cui la madre definiva il padre','Per ironia','Perché è un termine tecnico giuridico'],
    correct:1,
    explanation:'«Assassino» è la parola della madre: Saba la riporta in virgolette per indicare che è un giudizio altrui, non suo. Il poema è precisamente il capovolgimento di quel giudizio.'
  },
  { id:65, type:'open', topic:'Testi · Mio padre',
    text:'Spiega il «capovolgimento del giudizio» nella poesia «Mio padre è stato per me l\'assassino».',
    modelAnswer:'Il poema inizia con il giudizio condannatorio della madre: il padre è «l\'assassino» per aver abbandonato la famiglia. Ma l\'incontro a vent\'anni rivela qualcosa di inatteso: somiglianza fisica (lo sguardo azzurro), somiglianza spirituale (la leggerezza, lo spirito infantile). Il poeta scopre che il padre ha trasmesso un dono: «il dono ch\'io ho da lui l\'ho avuto». Il capovolgimento è completo: quello che la madre chiamava «assassino» è il portatore della leggerezza che permette a Saba di scrivere poesie. L\'ultima terzina — «due razze in antica tenzone» — non risolve il conflitto tra i due caratteri ereditati, ma lo riconosce come la radice della propria scissione interiore.',
    keywords:['assassino tra virgolette','capovolgimento','dono del padre','sguardo azzurro','leggerezza','due razze','scissione']
  },
  { id:66, type:'mc', topic:'Testi · La vera causa',
    text:'In «La vera causa» (da Ernesto), come avviene la confessione di Ernesto alla madre?',
    options:['Direttamente, con parole chiare e dirette','Indirettamente, citando le parole dello zio Giovanni su uno scandalo del deputato','Per lettera','Non avviene: Ernesto non riesce a confessare'],
    correct:1,
    explanation:'Ernesto non trova le parole dirette. La confessione avviene attraverso le parole degli altri — segno di quanto fosse impossibile trovare un linguaggio proprio per questi temi nell\'Italia del tempo.'
  },
  { id:67, type:'tf', topic:'Testi · La vera causa',
    text:'Vero o falso: nel brano «La vera causa», la madre di Ernesto capisce immediatamente la vera ragione del suo abbandono del lavoro.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. La madre ipotizza che Ernesto abbia rubato al signor Wilder — il peggiore crimine borghese immaginabile. Il malinteso rivela la distanza generazionale e i valori borghesi dell\'epoca.'
  },
  { id:68, type:'mc', topic:'Storia e cronistoria',
    text:'Sotto quale pseudonimo Saba scrisse «Storia e cronistoria del Canzoniere» (1948) parlando di sé in terza persona?',
    options:['Umberto Poli','Giuseppe Carimandrei','Italo Svevo','Ernesto Saba'],
    correct:1,
    explanation:'Saba scrive il commento al proprio Canzoniere sotto lo pseudonimo Giuseppe Carimandrei, parlando di sé in terza persona: effetto di straniamento e distanza critica da sé stesso.'
  },
  { id:69, type:'mc', topic:'Storia e cronistoria',
    text:'Quale «ritardo» analizza Saba nella «Storia e cronistoria del Canzoniere»?',
    options:['Il ritardo editoriale della seconda edizione','Il ritardato successo della propria opera, attribuito all\'arretratezza culturale di Trieste e al proprio «conservatorismo»','Il ritardo nell\'iniziare a scrivere poesie','Il ritardo nell\'incontrare la moglie Lina'],
    correct:1,
    explanation:'Saba analizza perché la critica ha impiegato tanto a riconoscerlo: arretratezza di Trieste (nascere a Trieste nel 1883 era come nascere altrove nel 1850), autobiografismo, «conservatorismo» nell\'uso dell\'endecasillabo.'
  },
  { id:70, type:'tf', topic:'Storia e cronistoria',
    text:'Vero o falso: «Storia e cronistoria del Canzoniere» è un testo rarissimo nella letteratura italiana perché un poeta commenta la propria opera.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. L\'autocommento sistematico di Saba alla propria opera è quasi unico nella tradizione letteraria italiana.'
  },
  { id:71, type:'mc', topic:'Ernesto',
    text:'In quale anno viene pubblicato postumo il romanzo «Ernesto»?',
    options:['1957 (anno della morte di Saba)','1961','1975','1980'],
    correct:2,
    explanation:'Ernesto fu scritto nel 1953 ma pubblicato postumo solo nel 1975, per il trattamento sincero e senza giudizio della sessualità adolescenziale omosessuale.'
  },
  { id:72, type:'mc', topic:'Ernesto',
    text:'Chi è Ilio nel romanzo «Ernesto» e cosa rappresenta?',
    options:['Il datore di lavoro del signor Wilder','Un giovane studente di musica, amico di Ernesto — simbolo dell\'innocenza e della leggerezza, possibilità di evasione','Il padre di Ernesto','Un insegnante di violino'],
    correct:1,
    explanation:'Ilio è l\'amico-opposto: giovane, luminoso, privo dei pesi che gravano su Ernesto. Rappresenta la leggerezza e la gioia della vita — lo stesso dono che Saba aveva ricevuto dal padre.'
  },
  { id:73, type:'mc', topic:'Altre opere',
    text:'In quale raccolta di prosa (1946) Saba scrive aforismi e apologhi brevi con influenza di Freud e Nietzsche?',
    options:['Ricordi-Racconti','Scorciatoie e raccontini','Storia e cronistoria','Canzoniere parziale'],
    correct:1,
    explanation:'«Scorciatoie e raccontini» (1946): prose brevissime, taglienti, ironiche. Temi: indagine interiore, attualità politica, natura dell\'arte. Un Saba «filosofo» per lampi.'
  },
  { id:74, type:'mc', topic:'Psicoanalisi',
    text:'Il critico Gianfranco Contini definì Saba «psicanalitico prima della psicanalisi». Cosa significa esattamente?',
    options:['Saba lesse Freud prima degli altri poeti','Ancor prima di conoscere la psicoanalisi freudiana, Saba aveva intuitivamente usato la poesia come esplorazione dell\'inconscio','Saba si laureò in psicologia','Saba era amico personale di Freud'],
    correct:1,
    explanation:'Contini riconobbe come Saba, ancora prima della terapia con Weiss (1929), avesse già praticato nella poesia quella funzione di scandalizzazione dei traumi profondi che Freud teorizzava.'
  },
  { id:75, type:'mc', topic:'Confronti · Saba vs Ungaretti',
    text:'Rispetto a Ungaretti, come differisce il rapporto di Saba con il lessico?',
    options:['Entrambi usano parole rarissime','Saba usa parole comuni e «trite»; Ungaretti riduce la parola all\'essenziale illuminato — parola luminosa, non parola ordinaria','Saba è più oscuro di Ungaretti','Non c\'è differenza',],
    correct:1,
    explanation:'Saba: lessico comune, accessibile, «trite parole» deliberatamente scelte. Ungaretti: parola luminosa, illuminante, ridotta all\'essenziale («M\'illumino d\'immenso»). Due diverse concezioni della parola «vera».'
  },
  { id:76, type:'mc', topic:'Confronti · Saba vs Montale',
    text:'Come differisce il rapporto di Saba con la vita rispetto a quello di Montale?',
    options:['Entrambi pessimisti senza speranza','Saba sceglie l\'accettazione totale della vita; Montale diagnostica il «male di vivere» come ineluttabile — il miracolo è raro','Montale è ottimista, Saba pessimista','Non c\'è differenza'],
    correct:1,
    explanation:'In Saba il dolore è universale ma la vita resta degna — «ogni altra vita». In Montale il male di vivere è strutturale: il «varco» si apre raramente e subito si richiude.'
  },
  { id:77, type:'mc', topic:'Confronti · Tradizione',
    text:'Quale tra i tre grandi poeti (Saba, Ungaretti, Montale) si ricollega più consapevolmente alla tradizione italiana?',
    options:['Ungaretti','Montale','Saba — che si autodidatta sui classici (Dante, Petrarca, Foscolo, Leopardi, Pascoli) e vede il «conservatorismo» come scelta di poetica','Tutti e tre ugualmente'],
    correct:2,
    explanation:'Saba è l\'unico che fa del ritorno alla tradizione un programma esplicito: riusa rime antiche, forme tradizionali, lessico classico. Solmi lo definisce «moderno in modo quasi sconcertante» proprio per questo.'
  },
  { id:78, type:'open', topic:'Confronti · Tre poeti',
    text:'Confronta Saba, Ungaretti e Montale sulla funzione della poesia secondo la loro poetica.',
    modelAnswer:'Tre risposte diverse. SABA: la poesia è etico-conoscitiva, consolatoria e terapeutica — uno scandaglio dell\'interiorità. La parola deve comunicare direttamente (lessico comune, rime antiche). UNGARETTI: la poesia è illuminazione — un lampo che fa apparire per un istante la verità nascosta. La parola è epifania (verso-parola, analogia). MONTALE: la poesia non illumina né consola — può solo dire «ciò che non siamo, ciò che non vogliamo». Verità negativa. La parola è «storta e secca come un ramo». Saba e Ungaretti credono nel potere della parola (l\'una comunicativa, l\'altra illuminante); Montale dichiara il fallimento della parola stessa.',
    keywords:['Saba = scandaglio','Ungaretti = illuminazione','Montale = verità negativa','tre funzioni della parola','Anti-Vate']
  },
  { id:79, type:'mc', topic:'Confronti · Metrica',
    text:'Come differiscono Saba e Ungaretti sul piano metrico?',
    options:['Entrambi usano il verso libero puro','Saba usa forme tradizionali (endecasillabo, canzone, sonetto); Ungaretti rivoluziona totalmente la metrica con il verso-parola','Entrambi rifiutano la rima','Saba usa la sestina, Ungaretti il sonetto'],
    correct:1,
    explanation:'Il contrasto è netto: Saba recupera le forme classiche deliberatamente; Ungaretti le spezza radicalmente nell\'Allegria. Poi Ungaretti torna alla tradizione nel Sentimento del tempo — ma Saba non ha mai rotto con essa.'
  },
  { id:80, type:'mc', topic:'Confronti · Realtà',
    text:'Come differisce il rapporto di Saba con la gente comune rispetto a Montale?',
    options:['Entrambi si allontanano dalla gente comune','Saba si avvicina alla gente umile (prostitute, marinai, emarginati) e si riconosce fratello; Montale osserva la realtà con la distanza dell\'Anti-Vate che descrive oggetti e paesaggi','Montale ama la gente; Saba la teme','Nessuna differenza'],
    correct:1,
    explanation:'Saba: «tra la perduta gente / mi so fraternamente vicino». Montale: il paesaggio ligure aspro come correlativo oggettivo — non partecipazione affettiva ma osservazione distaccata.'
  },
  { id:81, type:'mc', topic:'Scissione dell\'io',
    text:'Quali sono le due figure materne opposte nella biografia di Saba che producono la «scissione dell\'io»?',
    options:['La madre biologica e una zia','La balia slovena Gioseffa (madre di gioia) e la madre biologica severa (madre mesta)','Due nonne','La moglie Lina e la figlia Linuccia'],
    correct:1,
    explanation:'La balia slovena Gioseffa Gabrovich (i primi tre anni: gioia, amore, spensieratezza) e la madre biologica (poi: severità, peso). Il contrasto produce la scissione psicologica fondamentale.'
  },
  { id:82, type:'open', topic:'Scissione dell\'io',
    text:'Spiega il concetto di «scissione dell\'io» in Saba e come si manifesta nella sua poesia.',
    modelAnswer:'La scissione nasce dalla duplice figura materna: la balia slovena (madre di gioia, affettuosa, spensierata) e la madre biologica (fredda, severa, oppressa dai pesi della vita). Nei primi tre anni Saba viene allevato dalla balia — poi la madre lo riprende. Questo trauma produce un io diviso: da un lato il ricordo della gioia (dono anche del padre leggero), dall\'altro il peso della madre (ebraismo, senso tragico). La scissione si manifesta in tutta la poesia: la tensione tra leggerezza e dolore, tra accettazione e sofferenza, tra amore e senso di colpa. Il «Piccolo Berto» e «Mio padre è stato per me l\'assassino» esplorano esplicitamente questa radice psicologica.',
    keywords:['balia slovena','madre biologica','madre di gioia/madre mesta','divisione','Piccolo Berto','due razze','dono del padre']
  },
  { id:83, type:'tf', topic:'Scissione dell\'io',
    text:'Vero o falso: il «Piccolo Berto» è una sezione del secondo volume del Canzoniere dedicata ai ricordi dell\'infanzia e ai traumi psicologici profondi.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «Il piccolo Berto» (1931) è la sezione psicoanalitica per eccellenza del Canzoniere: Saba rilegge la propria infanzia alla luce della terapia con Weiss.'
  },
  { id:84, type:'mc', topic:'Trieste e letteratura',
    text:'Saba condivide la città di Trieste con quale altro grande scrittore del Novecento italiano?',
    options:['Eugenio Montale','Italo Svevo — entrambi triestini, entrambi interessati alla psicoanalisi, entrambi marginali rispetto al canone italiano dell\'epoca','Carlo Michelstaedter','Scipio Slataper'],
    correct:1,
    explanation:'Saba e Svevo sono i due grandi di Trieste. Entrambi ebrei, entrambi interagiscono con la psicoanalisi (Saba con Weiss, Svevo traduce Freud), entrambi ignorati per decenni dalla critica italiana.'
  },
  { id:85, type:'mc', topic:'Identità ebraica',
    text:'Come si manifesta l\'identità ebraica nella poesia di Saba?',
    options:['Solo nella scelta dello pseudonimo «Saba»','In modo pervasivo: lo pseudonimo, la «capra dal viso semita», il senso di diversità e marginalità, le «due razze in tenzone»','Solo nelle opere di guerra','Non è un tema rilevante nella sua poesia'],
    correct:1,
    explanation:'L\'identità ebraica non è un tema separato ma una prospettiva continua: la marginalità, il senso di diversità, la solidarietà con gli emarginati — tutto parte da questa radice.'
  },
  { id:86, type:'mc', topic:'Ernesto · chiave psicoanalitica',
    text:'Qual è la chiave psicoanalitica che giustifica la struttura del romanzo «Ernesto»?',
    options:['Il complesso di Edipo risolto','L\'assenza del padre → severità materna → Ernesto cerca affetto in figure maschili sostitutive — meccanismo autobiografico trasparente','Il trauma della guerra','La malattia del protagonista'],
    correct:1,
    explanation:'La chiave psicoanalitica è esplicitata nel romanzo: l\'assenza del padre costringe la madre a essere severa; Ernesto cerca affetto in figure maschili. Ernesto è una maschera di Saba. Autobiografismo totale.'
  },
  { id:87, type:'mc', topic:'Scorciatoie',
    text:'In che anno pubblica Saba la raccolta di prose brevi «Scorciatoie e raccontini»?',
    options:['1929','1946','1953','1961'],
    correct:1,
    explanation:'1946: lo stesso anno della seconda edizione definitiva del Canzoniere. «Scorciatoie e raccontini» rappresenta la prosa saggistica e aforistica di Saba.'
  },
  { id:88, type:'open', topic:'Posizione letteraria',
    text:'Perché il critico Sergio Solmi definisce Saba «moderno in modo quasi sconcertante» pur restando nella tradizione?',
    modelAnswer:'Solmi coglie il paradosso fondamentale di Saba: in un\'epoca dominata dallo sperimentalismo (futurismo, avanguardie), dall\'oscurità ermetica, e dal frammentismo vociano, il gesto più rivoluzionario è tornare alle forme tradizionali, alle rime «trite», al lessico comune. Saba è «conservatore» in un\'epoca in cui tutti rompono con la tradizione — e proprio per questo è originale: nessuno fa la sua scelta. La «modernità sconcertante» sta nell\'uso consapevole di strumenti antichi per dire verità moderne: la psicoanalisi, la scissione dell\'io, il trauma dell\'abbandono espresso in endecasillabi petrarcheschi. È la forma più radicale di anti-avanguardismo.',
    keywords:['Solmi','conservatorismo come scelta','anti-avanguardismo','originalità nella tradizione','forme antiche/contenuti moderni']
  },
  { id:89, type:'tf', topic:'Posizione letteraria',
    text:'Vero o falso: la posizione letteraria di Saba è assimilabile all\'ermetismo di Quasimodo e Ungaretti (nella seconda fase).',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Saba si oppone esplicitamente all\'obscurità degli Ermetici. Le sue parole sono comuni, accessibili, «trite». La chiarezza è un valore etico, non una limitazione.'
  },
  { id:90, type:'open', topic:'Sintesi',
    text:'Spiega perché Saba è un «poeta fuori moda» e perché proprio questa posizione lo rende originale.',
    modelAnswer:'Saba è «fuori moda» in ogni momento della sua carriera: quando scrive sonetti, il Novecento vuole il verso libero; quando usa parole comuni, la poesia colta vuole il preziosismo o l\'oscurità; quando racconta la propria vita con onestà, la poetica dominante richiede il frammentismo e l\'impersonalità. Eppure questa posizione lo rende unico: nessun altro fa le sue scelte. La «chiarezza come rivoluzione» — formula che riassume bene la sua poetica — è un gesto radicale in un\'epoca di avanguardie. Come osservò Solmi, il «conservatorismo» di Saba è «moderno in modo quasi sconcertante»: tornare alla tradizione, in quel contesto, è la scelta più originale di tutte. Questa è la sua grandezza: non è fuori moda, è su una frequenza diversa.',
    keywords:['fuori moda','chiarezza come rivoluzione','conservatorismo originale','Solmi','anti-avanguardismo','poetica dell\'onestà']
  },
  { id:91, type:'mc', topic:'Opere · Canzoniere',
    text:'Come Saba definisce il Canzoniere nel saggio «Storia e cronistoria del Canzoniere» (1948)?',
    options:['Una raccolta di sonetti senza ordine preciso','Un romanzo psicologico in versi: ogni sezione è un capitolo della storia interiore del poeta','Un diario di viaggio per l\'Italia','Una collezione di liriche senza tema unificante'],
    correct:1,
    explanation:'Nel saggio del 1948 Saba spiega il Canzoniere come «romanzo psicologico in versi»: le sezioni non sono antologie casuali ma capitoli di un\'unica storia interiore che va dall\'infanzia alla vecchiaia.'
  },
  { id:92, type:'mc', topic:'Vita · Lina',
    text:'Chi è Lina nel Canzoniere di Saba?',
    options:['La balia slovena che lo crebbe','Carolina Wölfler, la moglie, figura centrale di sezioni come A mia moglie','La madre biologica verso cui nutre risentimento','Una figura allegorica della patria triestina'],
    correct:1,
    explanation:'Lina è il nome affettuoso di Carolina Wölfler, la moglie con cui Saba visse a Trieste. È l\'opposto della madre: non oppressa e non giudicante. La sua presenza percorre sezioni intere come Casa e campagna.'
  },
  { id:93, type:'tf', topic:'Poetica',
    text:'Vero o falso: Saba è considerato parte del movimento crepuscolare per il suo lessico quotidiano.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Saba condivide con i Crepuscolari il lessico basso, ma la sua poetica è diversa: non c\'è la malinconia rassegnata e ironica crepuscolare. Saba è più vicino a Leopardi: il dolore è psicoanalitico e autobiografico, non crepuscolare.'
  },
  { id:94, type:'mc', topic:'Opere · Il piccolo Berto',
    text:'Cosa rappresenta il ciclo «Il piccolo Berto» nel Canzoniere?',
    options:['Una narrazione storica di Trieste','Il ritorno psicoanalitico all\'infanzia: il bambino Berto rielabora i traumi delle origini (la balia, la madre, il padre assente)','Una serie di poesie dedicate all\'amico Apollinaire','Il racconto della liberazione dal Fascismo'],
    correct:1,
    explanation:'Il ciclo «Il piccolo Berto» (nella sezione Autobiografia) è il lavoro poetico equivalente alla terapia: Saba/Berto rielabora la scissione dell\'io, da un lato la balia Peppa (gioia), dall\'altro la madre (severità).'
  },
  { id:95, type:'mc', topic:'Opere · Scorciatoie',
    text:'Qual è il tono dominante di «Scorciatoie e raccontini» (1946)?',
    options:['Epico e trionfale','Aforistico e saggistico: brevi prose che illuminano verità con fulminea concisione','Narrativo e romanzesco','Lirico-musicale come il Canzoniere'],
    correct:1,
    explanation:'Le Scorciatoie sono prose brevissime — aforismi e «raccontini» — in cui Saba esprime la sua saggezza con una concisione quasi fulminante. Il tono è aforistico: non narrativo, non lirico, ma diretto.'
  },
  { id:96, type:'open', topic:'Confronti · Leopardi',
    text:'Spiega in cosa Saba e Leopardi si avvicinano e in cosa divergono.',
    modelAnswer:'Vicinanza: entrambi vivono l\'«esclusione» culturale (Leopardi come provinciale pessimista; Saba come autodidatta ebreo «troppo semplice»). Entrambi fanno del dolore il tema centrale e si rifanno alla tradizione classica (Petrarca). Divergenza: Leopardi ha una visione cosmologica del dolore (natura matrigna); Saba una visione psicoanalitica e autobiografica (il dolore nasce da traumi infantili specifici, non da una legge cosmica).',
    keywords:['escluso','autodidatta','tradizione classica','dolore cosmico vs psicoanalitico','Petrarca','autobiografismo']
  },
  { id:97, type:'mc', topic:'Opere · Casa e campagna',
    text:'Quale sezione del Canzoniere raccoglie «A mia moglie» introducendo la centralità del rapporto coniugale?',
    options:['Trieste e una donna (1910–1912)','Casa e campagna (1909–1910)','Autobiografia (1924)','Cose leggere e vaganti (1920)'],
    correct:1,
    explanation:'Casa e campagna (1909–1910) apre al mondo coniugale e domestico. Comprende «A mia moglie», «La capra» e altri testi fondamentali. Il titolo esprime il doppio binario: la casa con Lina, la campagna come luogo di riflessione.'
  },
  { id:98, type:'mc', topic:'Vita · riconoscimento tardivo',
    text:'Quando Saba ottiene il suo primo grande riconoscimento ufficiale?',
    options:['Nel 1921 con la prima edizione del Canzoniere','Negli anni 40–50, tardivamente — con la critica e poi con il Premio Viareggio 1946','Subito dopo la Prima guerra mondiale','Solo dopo la morte nel 1957'],
    correct:1,
    explanation:'Il riconoscimento è tardivo: negli anni 40–50 la critica (Debenedetti, Solmi, Contini) rivaluta il Canzoniere. Il Premio Viareggio 1946 è il primo riconoscimento istituzionale.'
  },
  { id:99, type:'tf', topic:'Stile · metrica',
    text:'Vero o falso: nella fase più tarda del Canzoniere (dopo il 1931) la metrica di Saba diventa più irregolare, influenzata da Ungaretti.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Saba stesso lo ammette: dal ciclo Piccolo Berto in poi il verso diventa più spezzato, con enjambement più frequenti. L\'influenza di Ungaretti si sente — il verso libero entra nel territorio di Saba, pur senza abbandonare il senso di forma.'
  },
  { id:100, type:'open', topic:'Sintesi · linea antieloquente',
    text:'Perché Contini colloca Saba nella «linea antieloquente» contrapposta alla «linea aurea» di D\'Annunzio–Ungaretti?',
    modelAnswer:'Contini individua due linee stilistiche nella letteratura italiana moderna: la linea «aurea» (D\'Annunzio, Ungaretti nella prima fase) che privilegia musicalità e rarità lessicale; la linea «antieloquente» (Pascoli, Saba, Gadda) che cerca la verità nella quotidianità, nei dialetti, nelle forme tradizionali reinterpretate. Saba appartiene alla seconda: parole trite, metrica tradizionale, verità autobiografica contro ogni eleganza artificiale. Non è una linea minore: è una linea di diversa tensione estetica, che privilegia il vero sul bello.',
    keywords:['Contini','linea antieloquente','parole trite','verità autobiografica','Pascoli Saba Gadda','bellezza vs verità']
  }
],

/* ════════════════════════════════════════════════════════════════════════
   UNGARETTI
   ════════════════════════════════════════════════════════════════════════ */
ungaretti: [
  { id:'u1', type:'open', topic:'Poetica',
    text:'Spiega cosa intende Ungaretti quando afferma che la parola poetica è «illuminazione». A quale immagine ricorre?',
    modelAnswer:'Per Ungaretti la parola poetica non descrive il mondo: è un lampo, una folgorazione che fa apparire la verità nascosta delle cose. È come quando un lampo in una stanza buia illumina tutto per un istante. Per questo la poesia ha sempre un «inesauribile segreto»: il lampo non spiega, fa solo intuire. L\'immagine emblema è il «porto sepolto»: una leggenda di Alessandria d\'Egitto secondo cui sotto le acque del Nilo c\'era un antico porto sepolto. Il poeta è come un palombaro che si immerge nell\'abisso interiore, raggiunge la verità nascosta, e poi riemerge per portare agli uomini i suoi canti.',
    keywords:['illuminazione','lampo','verità nascosta','porto sepolto','palombaro','inesauribile segreto']
  },
  { id:'u2', type:'mc', topic:'Poetica',
    text:'Che cosa rappresentano gli spazi bianchi nelle poesie dell\'Allegria?',
    options:[
      'Pausa di respiro funzionale alla lettura ad alta voce',
      'Il silenzio da cui la parola emerge — idea derivata da Mallarmé',
      'Lo spazio della trincea riprodotto sulla pagina',
      'Un omaggio formale agli haiku giapponesi'
    ],
    correct:1,
    explanation:'Gli spazi bianchi sono il silenzio da cui la parola emerge. Eredità diretta di Mallarmé: la pagina bianca conta tanto quanto le parole.'
  },
  { id:'u3', type:'open', topic:'Poetica',
    text:'Che cos\'è l\'«unanimismo» in Ungaretti? Spiega il termine e fai un esempio testuale.',
    modelAnswer:'Unanimismo viene dal latino «unus + animus» = una sola anima. È l\'idea che il poeta, quando scrive, non parla solo per sé: parla per tutti gli uomini. Si manifesta in «Soldati»: «Si sta come d\'autunno / sugli alberi / le foglie». Il «si sta» impersonale è la chiave: non è «io sto» (esperienza individuale) ma «si sta» — vale per tutti. Non parla solo dei soldati in trincea: parla della condizione di tutta l\'umanità, sospesa e precaria come foglie d\'autunno pronte a cadere.',
    keywords:['unanimismo','una sola anima','si sta impersonale','Soldati','condizione universale']
  },
  { id:'u4', type:'tf', topic:'Poetica',
    text:'Vero o falso: l\'analogia è la figura retorica preferita da Ungaretti perché accosta due immagini lontanissime senza alcun legame logico evidente.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. L\'analogia è esplicitamente «la figura preferita da Ungaretti»: una forma di metafora ancora più ardita.'
  },
  { id:'u5', type:'open', topic:'Vita',
    text:'Quali sono i tre traumi biografici fondamentali da cui nasce tutta la poesia di Ungaretti?',
    modelAnswer:'(1) L\'esilio originario — Ungaretti nasce in Egitto da genitori lucchesi, è sempre «altrove», sempre nomade. Da qui nasce il tema dell\'identità multipla, sviluppato in «I Fiumi». (2) La guerra di trincea (1915-1918) sul Carso — è l\'evento centrale, da qui nasce tutto il primo stile dell\'Allegria: parole essenziali, versi brevissimi, fraternità di trincea. (3) La morte del figlio Antonietto nel 1939, a nove anni, in Brasile — il lutto privato che ispira «Il dolore» (1947), dove si fonde con il dolore della Seconda guerra mondiale.',
    keywords:['esilio','identità nomade','trincea','Carso','Antonietto','Il dolore','lutto']
  },
  { id:'u6', type:'mc', topic:'Vita',
    text:'Quale ambiente intellettuale frequenta Ungaretti a Parigi tra il 1912 e il 1914?',
    options:[
      'Surrealisti maturi attorno ad Apollinaire (Ãcriture automatique)',
      'Lezioni di Bergson alla Sorbona + simbolisti francesi + Apollinaire, Picasso, italiani Papini/Palazzeschi/Marinetti',
      'Studia con Valéry alla École Normale',
      'Lavora come giornalista per Le Figaro'
    ],
    correct:1,
    explanation:'A 24 anni Ungaretti studia alla Sorbona, segue Bergson, conosce i simbolisti, Apollinaire, Picasso, Breton, gli italiani.'
  },
  { id:'u7', type:'tf', topic:'Vita',
    text:'Vero o falso: Ungaretti fu arruolato d\'ufficio nell\'esercito italiano nel 1915.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Si arruolò volontario come fante: voleva «sentirsi finalmente italiano». L\'esperienza della trincea fu una scelta.'
  },
  { id:'u8', type:'mc', topic:'Vita',
    text:'In quale circostanza concreta nasce «Il porto sepolto» (1916)?',
    options:[
      'Scritto a Parigi prima della partenza per il fronte',
      'Nato a Roma negli anni \'20 dopo una rilettura dei taccuini di guerra',
      'Scritto in trincea su pezzettini di carta e cartine di sigarette, pubblicato a Udine in 80 copie grazie a Ettore Serra',
      'Composto dopo il congedo su commissione di Mussolini'
    ],
    correct:2,
    explanation:'Le prime poesie sono scritte in trincea su pezzettini di carta. È l\'ufficiale Ettore Serra a pubblicarle nel 1916 a Udine.'
  },
  { id:'u9', type:'open', topic:'Opere · L\'Allegria',
    text:'Spiega il significato del titolo «L\'Allegria» e dell\'espressione precedente «Allegria di naufragi». Perché è paradossale?',
    modelAnswer:'Il titolo definitivo «L\'Allegria» (1931) deriva dalla versione precedente «Allegria di naufragi» (1919). È un ossimoro: «allegria» e «naufragi» sono concetti opposti. L\'idea è quella della condizione del naufrago che, dopo aver rischiato di morire, prova un\'euforia improvvisa per essere sopravvissuto. Ungaretti si considera un naufrago della guerra: l\'allegria davanti alla morte è la sua forma di resistenza vitale, un\'affermazione del diritto alla vita proprio nel mezzo della distruzione.',
    keywords:['ossimoro','naufragi','allegria del naufrago sopravvissuto','resistenza vitale']
  },
  { id:'u10', type:'mc', topic:'Sentimento del tempo',
    text:'Quale tra queste caratteristiche è propria di «Sentimento del tempo» (1933) e NON dell\'Allegria?',
    options:[
      'Indicazione di luogo e data sotto ogni poesia',
      'Uso massiccio del verso-parola e abolizione di ogni nesso sintattico',
      'Ritorno della punteggiatura, lessico aulico, versi più lunghi (Petrarca, Leopardi, Dante, Góngora)',
      'Sezione iniziale dedicata ai compagni del Carso'
    ],
    correct:2,
    explanation:'In «Sentimento del tempo» torna la punteggiatura, i versi si allungano, lessico aulico. Modello dell\'Ermetismo.'
  },
  { id:'u11', type:'tf', topic:'Opere',
    text:'Vero o falso: i poeti dell\'Ermetismo si ispirano principalmente alla prima fase di Ungaretti, quella dei versi-parola dell\'Allegria.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Gli ermetici si ispirano alla seconda fase — quella di «Sentimento del tempo» (1933): poesia oscura, allusiva.'
  },
  { id:'u12', type:'open', topic:'Il dolore',
    text:'Da quali esperienze nasce la raccolta «Il dolore» (1947)? Come intreccia dolore privato e storico?',
    modelAnswer:'Nasce dalla fusione di due lutti. Il lutto privato: la morte del figlio Antonietto nel 1939, a 9 anni, mentre Ungaretti insegnava a San Paolo del Brasile; e prima ancora la morte del fratello Costantino (1937). Il lutto storico: la Seconda guerra mondiale, lo sterminio. Le due tragedie non si separano: il dolore individuale di un padre si fa specchio del dolore di un\'intera umanità ferita. Lo stile è coerente: tono elegiaco, meditativo, più disteso rispetto all\'Allegria; la poesia diventa testimonianza della sofferenza.',
    keywords:['Antonietto','Costantino','Seconda guerra','fusione privato/storico','tono elegiaco','testimonianza']
  },
  { id:'u13', type:'mc', topic:'Testi · Mattina',
    text:'In «Mattina» («M\'illumino / d\'immenso»), che cosa significa precisamente «immenso»?',
    options:[
      '«Grandissimo» nel senso quantitativo — un\'esperienza paesaggistica',
      '«Al di là dei sensi»',
      '«Ciò che non si può misurare» (dal latino in-mensus) — l\'infinito: fusione del poeta con l\'assoluto in un istante di grazia',
      '«Interiore» (messo dentro)'
    ],
    correct:2,
    explanation:'«Immenso» = letteralmente «ciò che non si può misurare» (in-mensus), l\'infinito. Il poeta si fonde con l\'assoluto.'
  },
  { id:'u14', type:'open', topic:'Testi · Soldati',
    text:'Analizza la struttura della similitudine in «Soldati». Perché è definita «inversa»?',
    modelAnswer:'La similitudine canonica funziona: A è come B. In «Soldati» Ungaretti rovescia l\'ordine: «Si sta / come / d\'autunno / sugli alberi / le foglie». Vediamo prima lo stato («si sta»), poi il «come» posticipato, infine il termine di paragone (le foglie). Il vero soggetto (i soldati) non viene mai nominato: resta implicito. L\'effetto è duplice: la similitudine viene scomposta nei suoi atomi minimi (un verso-parola per ogni nucleo), e l\'omissione del soggetto rinforza l\'unanimismo — il «si sta» vale per tutta l\'umanità.',
    keywords:['similitudine inversa','si sta impersonale','unanimismo','versi-parola','precarietà']
  },
  { id:'u15', type:'mc', topic:'Testi · Fratelli',
    text:'Nella poesia «Fratelli», a quale immagine viene paragonata la parola «fratelli» pronunciata in trincea?',
    options:[
      'A una scheggia di granata',
      'A una candela accesa',
      'A una foglia appena nata, perché è vitale ma delicatissima',
      'A una preghiera silenziosa'
    ],
    correct:2,
    explanation:'L\'analogia centrale è «parola fratelli = foglia appena nata»: qualcosa di vitale ma delicatissimo, esposto alla distruzione.'
  },
  { id:'u16', type:'tf', topic:'Testi · Fratelli',
    text:'Vero o falso: l\'espressione «aria spasimante» in «Fratelli» è un esempio di sinestesia.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «Aria spasimante» mescola la dimensione visiva/tattile dell\'aria con una sensazione di sofferenza corporea.'
  },
  { id:'u17', type:'open', topic:'Testi · Veglia',
    text:'Qual è il paradosso centrale di «Veglia»? Come la struttura serve a metterlo in evidenza?',
    modelAnswer:'Il paradosso centrale: la vicinanza estrema con la morte non spegne la vita, anzi la amplifica. Il poeta passa una notte accanto al cadavere di un compagno «massacrato», e proprio in quel contesto scrive «lettere piene d\'amore». La conclusione: «Non sono mai stato / tanto / attaccato alla vita». Strutturalmente, la prima parte accumula participi macabri (massacrato, digrignata, penetrata) isolati nel verso-parola: ogni partifico amplifica un dettaglio di orrore. Poi avviene il rovesciamento. Infine il celebre «tanto» isolato: una sola parola caricata di intensità assoluta.',
    keywords:['paradosso vita/morte','attaccamento alla vita','lettere d\'amore','participi isolati','tanto']
  },
  { id:'u18', type:'mc', topic:'Testi · Il porto sepolto',
    text:'Nell\'ultima strofa de «Il porto sepolto», cosa significa «quel nulla / d\'inesauribile segreto»?',
    options:[
      'La poesia ha rivelato la verità definitiva sull\'animo umano',
      'È un ossimoro: il «nulla» coesiste con il «segreto infinito» — la poesia sfiora la verità ma non la possiede mai',
      'È un\'iperbole sulla quantità di poesie da scrivere',
      'Il poeta non ha più nulla da dire'
    ],
    correct:1,
    explanation:'Ossimoro: «nulla» + «inesauribile segreto». La poesia tocca la verità ma il mistero resta — ed è proprio per questo «inesauribile».'
  },
  { id:'u19', type:'open', topic:'Testi · I Fiumi',
    text:'In «I Fiumi» Ungaretti elenca quattro fiumi. Quali sono e che cosa simboleggiano?',
    modelAnswer:'(1) Isonzo — il fiume del presente, della trincea sul Carso, in cui si sente «docile fibra dell\'universo»; (2) Serchio — il fiume della Toscana, terra degli avi contadini: rappresenta le radici familiari; (3) Nilo — il fiume dell\'Egitto, dove «arse di inconsapevolezza»: simbolo dell\'infanzia ad Alessandria; (4) Senna — il fiume di Parigi, dove «si è conosciuto»: simbolo della maturità intellettuale. I quattro fiumi sono i pezzi della sua identità nomade.',
    keywords:['Isonzo','Serchio','Nilo','Senna','identità nomade','docile fibra dell\'universo']
  },
  { id:'u20', type:'mc', topic:'Testi · I Fiumi',
    text:'Nell\'ultima strofa de «I Fiumi», la vita è paragonata a «una corolla di tenebre». Che figura retorica è?',
    options:[
      'Metafora pura: la vita = un fiore',
      'Similitudine zoologica',
      'Ossimoro: «corolla» (fiore) e «tenebre» (buio) sono opposti — la vita ha bellezza ma porta dentro l\'oscurità',
      'Personificazione'
    ],
    correct:2,
    explanation:'Ossimoro: il fiore (vita) e il buio (morte) uniti. Coerente con l\'estetica ossimorica di Ungaretti («Allegria di naufragi»).'
  },
  { id:'u21', type:'open', topic:'Testi · Non gridate più',
    text:'In «Non gridate più» Ungaretti scrive «Cessate d\'uccidere i morti». Che figura retorica è e che valore civile assume?',
    modelAnswer:'«Uccidere i morti» è un ossimoro e insieme un adynaton (figura che evoca qualcosa di impossibile per denunciare una realtà assurda): i morti sono già morti, come possono essere uccisi ancora? Il significato è etico: smettete di profanarli con i vostri schiamazzi, con la retorica di guerra. La poesia (1947, in chiusura del «Dolore») ha valore civile fortissimo: si rivolge ai sopravvissuti incapaci di rinunciare all\'odio post-bellico. Solo il silenzio permette di ascoltare i morti. È un Ungaretti maturo che mantiene l\'essenzialità ma assume un tono profetico.',
    keywords:['ossimoro','adynaton','poesia civile','profanazione','silenzio','memoria','tono profetico']
  },
  { id:'u22', type:'mc', topic:'Stile',
    text:'Quale caratteristica formale dell\'Allegria indica l\'aderenza all\'esperienza concreta del momento?',
    options:[
      'Dedica a Ettore Serra in apertura di ogni testo',
      'Rime baciate alla fine di ogni strofa',
      'Indicazione di luogo e data sotto ogni poesia (es. «Mariano, 15 luglio 1916»)',
      'Nota a margine che spiega l\'origine biografica'
    ],
    correct:2,
    explanation:'Sotto ogni poesia dell\'Allegria, luogo e data dal fronte. La poesia nasce qui e ora, non è elaborazione astratta.'
  },
  { id:'u23', type:'tf', topic:'Stile',
    text:'Vero o falso: in tutta la produzione di Ungaretti lo stile resta coerente: versi brevissimi, no punteggiatura.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Lo stile evolve in tre fasi: nell\'Allegria versi-parola; in «Sentimento del tempo» ritorno della punteggiatura e versi lunghi; ne «Il dolore» tono elegiaco.'
  },
  { id:'u24', type:'open', topic:'Confronti',
    text:'Mettendo a confronto Ungaretti, Saba e Montale sul tema della parola poetica, come si distingue la posizione di Ungaretti?',
    modelAnswer:'Per Ungaretti la parola è epifania, illuminazione: di qui il verso-parola, l\'analogia pura, l\'abolizione della punteggiatura. La parola «salva». Per Saba la parola è comunicazione diretta e onesta: stile colloquiale, metrica tradizionale. Per Montale la parola è insufficiente, «storta e secca come un ramo»: non illumina, può solo dire «ciò che non siamo» — l\'Anti-Vate. Sintesi: «Ungaretti cerca l\'illuminazione, Saba cerca l\'onestà, Montale dichiara l\'impossibilità del senso».',
    keywords:['illuminazione','epifania','parola salva','verso-parola','analogia','onestà','Anti-Vate']
  },
  { id:'u25', type:'mc', topic:'Confronti',
    text:'Come è il rapporto di Ungaretti con la tradizione poetica italiana?',
    options:[
      'Rottura definitiva: rifiuta ogni modello classico',
      'Fedeltà costante anche nei versi-parola',
      'Movimento doppio: rottura radicale nella prima fase (Allegria), poi recupero della tradizione (Petrarca, Leopardi) in «Sentimento del tempo»',
      'Indifferenza programmatica'
    ],
    correct:2,
    explanation:'Bifasico: si allontana nell\'Allegria, poi torna ai classici in «Sentimento del tempo».'
  },
  { id:'u26', type:'mc', topic:'Vita',
    text:'In quale paese insegnò Ungaretti come professore universitario tra il 1936 e il 1942, e quale lutto privato lo raggiunse lì?',
    options:[
      'In Francia, all\'Università della Sorbona — morte del fratello Costantino',
      'In Brasile (São Paulo) — morte del figlio Antonietto, 9 anni, nel 1939',
      'In Egitto, ad Alessandria — ritorno alle origini',
      'In Inghilterra, Oxford — perdita della moglie'
    ],
    correct:1,
    explanation:'Dal 1936 al 1942 Ungaretti è professore di Letteratura italiana all\'Università di São Paulo. A San Paolo, nel 1939, muore il figlio Antonietto a soli 9 anni. Il lutto diventa il nucleo de «Il dolore» (1947).'
  },
  { id:'u27', type:'open', topic:'Testi · San Martino del Carso',
    text:'Spiega la struttura e il messaggio di «San Martino del Carso». Perché il cuore del poeta viene paragonato al paese distrutto?',
    modelAnswer:'La poesia è costruita su un parallelismo in due movimenti. Primo movimento: San Martino del Carso è un villaggio raso al suolo dai bombardamenti — rimangono solo i muri. Secondo movimento: il cuore del poeta è anch\'esso ridotto a «un paese / straziato» — ma ancora più distrutto, perché nel cuore mancano «pezzi» che corrispondono ai nomi dei compagni morti. Il rovesciamento è il cuore della poesia: il paese fisico HA ancora qualcosa (i muri); il cuore del poeta È ancora più vuoto, perché i suoi «frammenti» erano persone, non pietre. Il lirismo si comprime in un silenzio di nomi — esemplifico dell\'unanimismo: ogni morto porta con sé un pezzo di umanità condivisa.',
    keywords:['San Martino del Carso','muri','cuore straziato','compagni morti','rovesciamento','unanimismo','frammenti']
  },
  { id:'u28', type:'mc', topic:'Figure retoriche',
    text:'In «Mattina» la costruzione «M\'illumino d\'immenso» è grammaticalmente insolita. Come funziona il verbo riflessivo «illuminarsi di»?',
    options:[
      'È un verbo passivo: «sono illuminato dall\'immenso»',
      'È un verbo riflessivo con complemento di materia insolito: il soggetto si fa luce di ciò che lo circonda — fusione attiva tra io e assoluto',
      'È una sinestesia: visivo + uditivo',
      'È un ossimoro: «immenso» è il buio della notte'
    ],
    correct:1,
    explanation:'«Illuminarsi di» (non «essere illuminato da») implica un\'azione attiva del soggetto: il poeta si fa materia di luce assoluta, si identifica con l\'immenso. Non ricezione passiva ma fusione mistica. La scelta grammaticale potenzia il significato epifanico.'
  },
  { id:'u29', type:'mc', topic:'Opere · La Terra Promessa',
    text:'Quale raccolta dell\'ultimo Ungaretti (iniziata nel 1935, pubblicata nel 1950) torna ai miti classici mediterranei?',
    options:[
      '«Un grido e paesaggi» (1952)',
      '«Il dolore» (1947)',
      '«La Terra Promessa» (1950) — frammenti di un poema su Enea, Didone, la Sibilla Cumana; il Mediterraneo come terra promessa per il poeta senza patria',
      '«Il taccuino del vecchio» (1960)'
    ],
    correct:2,
    explanation:'«La Terra Promessa» è il grande progetto incompiuto del tardo Ungaretti: frammenti di un poema classico su Enea e Didone. Stile aulico, verso lungo. Il Mediterraneo è la terra che il poeta nomade cerca da sempre — in continuità con «I Fiumi» ma con un registro lirico più disteso e classico.'
  },
  { id:'u30', type:'open', topic:'Stile · Verso-parola',
    text:'Spiega la funzione del verso-parola nell\'Allegria con almeno due esempi testuali. Perché Ungaretti riduce il verso a una sola parola?',
    modelAnswer:'Il verso-parola è la conquista formale più radicale dell\'Allegria: un verso coincide con una sola parola isolata sullo spazio bianco della pagina. Esempi: «M\'illumino / d\'immenso» — due versi, ciascuno con una parola chiave; in «Soldati», «come», «d\'autunno», «sugli alberi», «le foglie» sono quasi tutti versi-parola; «tanto» isolato in «Veglia» porta il peso emotivo massimo. Funzione: la parola senza punteggiatura, circondata dal silenzio, acquista il massimo peso semantico. Il bianco non è vuoto ma risonanza: il lettore è costretto a fermarsi, a «pesare» ogni termine. Eredità di Mallarmé: la pagina è partitura di suoni e silenzi. L\'effetto è di concentrazione totale — opposto dell\'eloquenza retorica.',
    keywords:['verso-parola','Mattina','Soldati','Veglia','tanto','silenzio bianco','Mallarmé','peso semantico','anti-eloquenza']
  },

  /* --- Vita --- */
  { id:'u31', type:'mc', topic:'Vita',
    text:'In quale città nasce Giuseppe Ungaretti e in quale anno?',
    options:['A Lucca, nel 1880','Ad Alessandria d\'Egitto, nel 1888','A Trieste, nel 1891','A Roma, nel 1885'],
    correct:1,
    explanation:'Nasce l\'8 febbraio 1888 ad Alessandria d\'Egitto da genitori lucchesi emigrati. Il padre lavorava al Canale di Suez.'
  },
  { id:'u32', type:'tf', topic:'Vita',
    text:'Vero o falso: il padre di Ungaretti muore quando Giuseppe era ancora bambino.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il padre muore quando Giuseppe è piccolo. Questo contribuisce al senso di sradicamento e di identità nomade che attraversa tutta la sua poesia.'
  },
  { id:'u33', type:'mc', topic:'Vita',
    text:'Quale filosofo segue Ungaretti alle lezioni della Sorbona a Parigi nel 1912?',
    options:['Friedrich Nietzsche','Henri Bergson','Sigmund Freud','Karl Marx'],
    correct:1,
    explanation:'A Parigi segue le lezioni di Bergson sul tempo come «durata interiore» — concetto che influenzerà la sua riflessione sulla memoria in «I Fiumi» e in «Sentimento del tempo».'
  },
  { id:'u34', type:'mc', topic:'Vita',
    text:'Quale anno e con quale opera debutta ufficialmente Ungaretti come poeta pubblicato?',
    options:['1912, con una plaquette parigina','1916, con «Il porto sepolto» stampato in 80 copie a Udine grazie a Ettore Serra','1919, con «Allegria di naufragi»','1931, con «L\'Allegria» definitiva'],
    correct:1,
    explanation:'Nel 1916, in trincea, Ettore Serra raccoglie i foglietti di Ungaretti e pubblica «Il porto sepolto» in 80 copie a Udine. È la prima pubblicazione.'
  },
  { id:'u35', type:'tf', topic:'Vita',
    text:'Vero o falso: Ungaretti si trasferisce a Roma dopo la guerra e la città barocca influenza la seconda fase della sua poesia.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Sposa Jeanne Dupoix nel 1920 e si trasferisce a Roma. La Roma eterna e barocca lo spinge verso versi più lunghi, lessico aulico e temi come il tempo e il mito — «Sentimento del tempo» (1933).'
  },
  { id:'u36', type:'mc', topic:'Vita',
    text:'Quale raccolta pubblica Ungaretti nel 1919, prima versione della sua opera prima?',
    options:['«Sentimento del tempo»','«Il dolore»','«Allegria di naufragi»','«La Terra Promessa»'],
    correct:2,
    explanation:'«Allegria di naufragi» (1919) è la seconda versione — dopo «Il porto sepolto» (1916) — che porta l\'ossimoro nel titolo. Nel 1931 diventerà «L\'Allegria».'
  },
  { id:'u37', type:'tf', topic:'Vita',
    text:'Vero o falso: Ungaretti ottiene la cattedra di Letteratura italiana all\'Università La Sapienza di Roma nel 1942, dopo il ritorno dal Brasile.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Rientra in Italia nel 1942 dal Brasile (dove era professore a São Paulo dal 1936) e ottiene la cattedra alla Sapienza di Roma.'
  },
  { id:'u38', type:'mc', topic:'Vita',
    text:'Quando e dove muore Ungaretti?',
    options:['A Roma nel 1962','A Milano il 1° giugno 1970, a 82 anni','A Firenze nel 1965','A São Paulo nel 1942'],
    correct:1,
    explanation:'Muore a Milano il 1° giugno 1970, a 82 anni. Nel 1969 Mondadori aveva pubblicato «Vita d\'un uomo», il corpus definitivo con autocommento.'
  },

  /* --- Glossario --- */
  { id:'u39', type:'mc', topic:'Glossario',
    text:'Qual è la differenza fondamentale tra similitudine e metafora?',
    options:[
      'La similitudine è più antica, la metafora più moderna',
      'Nella similitudine c\'è «come» (confronto esplicito); nella metafora il «come» è assente e si dice direttamente che una cosa è un\'altra',
      'La similitudine riguarda le persone, la metafora le cose',
      'Sono sinonimi perfetti'
    ],
    correct:1,
    explanation:'La similitudine confronta con «come»: «Si sta come foglie». La metafora dice direttamente: «La mia vita è una corolla di tenebre». La presenza o assenza di «come» è il discrimine.'
  },
  { id:'u40', type:'tf', topic:'Glossario',
    text:'Vero o falso: l\'analogia è una forma di metafora ancora più ardita che accosta immagini lontanissime senza legame logico evidente.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. L\'analogia è la figura preferita da Ungaretti: in «Fratelli», «parola tremante / nella notte / Foglia appena nata» accosta la parola «fratelli» a una foglia senza spiegazione logica.'
  },
  { id:'u41', type:'mc', topic:'Glossario',
    text:'Cosa è un ossimoro? Porta l\'esempio diretto dal testo del programma.',
    options:[
      'Ripetizione della stessa parola ad inizio verso',
      'Accostamento di due parole di significato opposto — es. «Allegria di naufragi» oppure «corolla di tenebre»',
      'Verso composto da una sola parola',
      'Continuazione della frase dal verso successivo'
    ],
    correct:1,
    explanation:'Ossimoro = due opposti uniti. Nel programma: «Allegria di naufragi» (gioia + naufragio), «corolla di tenebre» (fiore + buio), «inesauribile segreto» (nulla + infinito), «uccidere i morti».'
  },
  { id:'u42', type:'mc', topic:'Glossario',
    text:'Cosa distingue l\'enjambement dalla normale divisione in versi?',
    options:[
      'L\'enjambement è la pausa logica che coincide con la fine del verso',
      'Nell\'enjambement la frase continua nel verso successivo senza pausa logica — il senso «scavalca» il verso',
      'L\'enjambement è sinonimo di verso libero',
      'L\'enjambement si usa solo nella prosa poetica'
    ],
    correct:1,
    explanation:'In «Veglia»: «Un\'intera nottata / buttato vicino / a un compagno / massacrato» — la frase si spezza tra i versi, creando frammentazione. Il senso scavalca il verso: questo è enjambement.'
  },
  { id:'u43', type:'tf', topic:'Glossario',
    text:'Vero o falso: la sinestesia mescola sensazioni di sensi diversi in un\'unica immagine.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Esempio in «Fratelli»: «aria spasimante» — l\'aria (visivo/tattile) + «spasimante» (sensazione di dolore corporeo). Due sensi diversi in un\'unica immagine.'
  },

  /* --- Poetica --- */
  { id:'u44', type:'mc', topic:'Poetica',
    text:'Da quale leggenda di Alessandria d\'Egitto Ungaretti ricava l\'immagine del «porto sepolto»?',
    options:[
      'La leggenda della Biblioteca di Alessandria bruciata',
      'La leggenda secondo cui sotto le acque del Nilo c\'era un antichissimo porto sepolto da secoli',
      'Il mito del Faro di Alessandria, una delle sette meraviglie',
      'La storia del fondatore della città, Alessandro Magno'
    ],
    correct:1,
    explanation:'Ad Alessandria si diceva che sotto le acque del Nilo ci fosse un porto antico perduto. Ungaretti usa questa leggenda come metafora del fare poetico: il poeta scende nell\'abisso, tocca la verità nascosta, risale con i canti.'
  },
  { id:'u45', type:'tf', topic:'Poetica',
    text:'Vero o falso: Rimbaud con «Illuminations» è una delle fonti della metafora ungarettiana della «parola come illuminazione».',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Ungaretti a Parigi legge Rimbaud, che in «Illuminations» usa la poesia come folgorazione, lampo che illumina. Da qui nasce «M\'illumino d\'immenso».'
  },
  { id:'u46', type:'mc', topic:'Poetica',
    text:'Qual è il concetto di Bergson che influenza Ungaretti nella seconda fase poetica (Sentimento del tempo)?',
    options:[
      'La volontà di potenza',
      'Il tempo come «durata interiore»: solo la memoria può restituire alla parola la sua «prima immagine» mitica',
      'La teoria della relatività temporale',
      'Il concetto di inconscio'
    ],
    correct:1,
    explanation:'Da Bergson: il tempo non è cronologico ma «durata interiore» — il flusso della coscienza. La memoria riattiva la «prima immagine» mitica delle parole. Questo appare in «Sentimento del tempo» e in «I Fiumi».'
  },
  { id:'u47', type:'mc', topic:'Poetica',
    text:'Quale delle 5 caratteristiche stilistiche dell\'Allegria NON appartiene a questa prima fase?',
    options:[
      'Versi brevissimi, talvolta una sola parola',
      'Spazi bianchi intorno alle parole',
      'Ritorno della punteggiatura e versi lunghi alla maniera di Petrarca',
      'Indicazione di luogo e data sotto ogni poesia'
    ],
    correct:2,
    explanation:'Il ritorno della punteggiatura e i versi lunghi alla maniera di Petrarca caratterizzano «Sentimento del tempo» (1933), la seconda fase. Nell\'Allegria non c\'è punteggiatura.'
  },
  { id:'u48', type:'open', topic:'Poetica',
    text:'Spiega in che modo la trincea sul Carso ha prodotto lo stile dell\'Allegria. Quali costrizioni materiali hanno generato quale scelta formale?',
    modelAnswer:'In trincea, davanti al pericolo costante di morire, non c\'è tempo per le parole ornamentali: bisogna dire l\'essenziale. Le poesie vengono scritte su pezzettini di carta o cartine di sigarette — supporti minuscoli che impongono brevità. Il risultato è una poesia ridotta all\'osso: versi brevissimi (talvolta un\'unica parola), assenza di punteggiatura, analogie ardite senza mediazione logica. La guerra obbliga Ungaretti a eliminare tutto il superfluo: ogni parola deve valere la propria presenza.',
    keywords:['trincea','costrizioni materiali','pezzettini di carta','parole essenziali','versi brevissimi','no punteggiatura','analogie']
  },
  { id:'u49', type:'mc', topic:'Poetica',
    text:'Quali tre fasi corrispondono alle tre raccolte principali di Ungaretti?',
    options:[
      'Giovanile, matura, tarda — senza discontinuità stilistica',
      '1ª guerra (L\'Allegria): parola pura; 2ª Roma (Sentimento del tempo): mito e caducità; 3ª lutto (Il dolore): elaborazione del lutto',
      '1ª simbolista, 2ª realista, 3ª surrealista',
      '1ª ermetica, 2ª classicista, 3ª moderna'
    ],
    correct:1,
    explanation:'Tre fasi distinte per tema e stile: 1ª (Allegria) = parola pura davanti alla morte, stile essenziale; 2ª (Sentimento del tempo) = mito, tempo, caducità, stile classicista aulico; 3ª (Il dolore) = lutto privato e storico, tono elegiaco.'
  },
  { id:'u50', type:'open', topic:'Poetica',
    text:'In che senso la poesia per Ungaretti è «testimonianza e redenzione»? Spiega con riferimento ad almeno due testi.',
    modelAnswer:'Per Ungaretti la parola salva: è ancora di salvezza nel naufragio della storia. In «Veglia», accanto al cadavere di un compagno, scrive lettere d\'amore — la poesia come affermazione vitale nel caos. In «Non gridate più», la parola chiede silenzio perché solo nel silenzio i morti possono parlare: la poesia redime i morti dalla profanazione. Il canto è l\'unico strumento per restituire dignità agli scomparsi e senso all\'esistenza dei sopravvissuti.',
    keywords:['testimonianza','redenzione','Veglia','lettere d\'amore','Non gridate più','silenzio','salva']
  },

  /* --- Opere --- */
  { id:'u51', type:'mc', topic:'Opere · L\'Allegria',
    text:'In quante edizioni appare L\'Allegria e come si chiama ogni versione?',
    options:[
      'Due edizioni: «Il porto sepolto» (1916) e «L\'Allegria» (1931)',
      'Tre versioni: «Il porto sepolto» (1916) → «Allegria di naufragi» (1919) → «L\'Allegria» (1931); edizione definitiva 1942',
      'Una sola edizione del 1919',
      'Quattro edizioni, tutte con titoli diversi'
    ],
    correct:1,
    explanation:'Tre titoli in successione: «Il porto sepolto» (1916) → «Allegria di naufragi» (1919) con l\'ossimoro → «L\'Allegria» (1931) definitivo, poi edizione finale a 5 sezioni nel 1942.'
  },
  { id:'u52', type:'tf', topic:'Opere · L\'Allegria',
    text:'Vero o falso: l\'edizione definitiva del 1942 de L\'Allegria è strutturata in 5 sezioni chiamate: Ultime, Il porto sepolto, Naufragi, Girovago, Prime.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. L\'edizione definitiva del 1942 ha 5 sezioni: Ultime, Il porto sepolto, Naufragi, Girovago, Prime — ordine che rispecchia il senso complessivo di nomadismo e ricerca.'
  },
  { id:'u53', type:'mc', topic:'Opere · Sentimento del tempo',
    text:'Perché «Sentimento del tempo» (1933) diventa il modello per i poeti dell\'Ermetismo?',
    options:[
      'Per le indicazioni di luogo e data sotto ogni poesia',
      'Per lo stile oscuro e allusivo: versi lunghi, lessico aulico, ermetismo del senso — modello seguito da Quasimodo, Luzi, Gatto',
      'Per l\'assenza di punteggiatura',
      'Per il tema della guerra di trincea'
    ],
    correct:1,
    explanation:'I poeti ermetici si ispirano alla seconda fase: la poesia diventata oscura, allusiva, sganciata dal referente concreto. Quasimodo, Luzi, Gatto seguono questo Ungaretti, non quello dell\'Allegria.'
  },
  { id:'u54', type:'open', topic:'Opere · Sentimento del tempo',
    text:'Elenca almeno tre differenze stilistiche tra «L\'Allegria» e «Sentimento del tempo».',
    modelAnswer:'(1) Versi: nell\'Allegria brevissimi, verso-parola; nel Sentimento del tempo lunghi e articolati, endecasillabi. (2) Punteggiatura: assente nell\'Allegria, torna nel Sentimento del tempo. (3) Lessico: essenziale e quotidiano nell\'Allegria; aulico, letterario e prezioso nel Sentimento del tempo. (4) Modelli: nell\'Allegria i simbolisti francesi; nel Sentimento del tempo Petrarca, Leopardi, Dante, Góngora. (5) Temi: guerra, vita, identità nell\'Allegria; tempo, mito, caducità, Dio nel Sentimento del tempo.',
    keywords:['versi lunghi/corti','punteggiatura','lessico aulico','Petrarca','Leopardi','mito','caducità']
  },
  { id:'u55', type:'mc', topic:'Opere · Il dolore',
    text:'Quali due lutti personali genera la raccolta «Il dolore» (1947)?',
    options:[
      'La morte della moglie Jeanne e del cugino',
      'La morte del figlio Antonietto (1939, 9 anni) e del fratello Costantino (1937)',
      'La morte di Apollinaire e di Bergson',
      'La morte del padre e della madre'
    ],
    correct:1,
    explanation:'Due lutti privati: il fratello Costantino muore nel 1937; il figlio Antonietto nel 1939 a soli 9 anni, a São Paulo. A questi si fonde il dolore storico della Seconda guerra mondiale.'
  },
  { id:'u56', type:'tf', topic:'Opere · Il dolore',
    text:'Vero o falso: il tono de «Il dolore» è simile a quello dell\'Allegria — essenziale e senza punteggiatura.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Il dolore ha uno stile diverso: tono elegiaco, meditativo, più disteso. La sintassi è rigorosa. È la terza fase, non una replica della prima.'
  },

  /* --- Testi · Mattina --- */
  { id:'u57', type:'mc', topic:'Testi · Mattina',
    text:'Qual era il titolo originale della poesia «Mattina» prima che Ungaretti lo cambiasse?',
    options:['«Alba»','«Luce»','«Cielo e mare»','«Illuminazione»'],
    correct:2,
    explanation:'Il titolo originale era «Cielo e mare». Il cambiamento verso il titolo astratto «Mattina» accentua l\'indeterminatezza e l\'universalità: non un paesaggio specifico, ma un momento dell\'essere.'
  },
  { id:'u58', type:'tf', topic:'Testi · Mattina',
    text:'Vero o falso: in «Mattina» il verbo «m\'illumino» è un verbo riflessivo che implica una fusione attiva tra il poeta e l\'assoluto.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «M\'illumino di» (non «sono illuminato da») indica un\'azione attiva: il soggetto si fa materia di luce, non riceve passivamente. Questo potenzia il significato epifanico.'
  },
  { id:'u59', type:'mc', topic:'Testi · Mattina',
    text:'Quale tema accomuna «Mattina» («M\'illumino d\'immenso») e «I Fiumi» («docile fibra dell\'universo»)?',
    options:[
      'Il lutto per i compagni morti in trincea',
      'Il nomadismo e l\'identità multipla',
      'Il momento di illuminazione: fusione del poeta con l\'universo — la «rara felicità»',
      'La critica alla retorica di guerra'
    ],
    correct:2,
    explanation:'Entrambe esprimono l\'«illuminazione»: in Mattina «M\'illumino d\'immenso» e in I Fiumi «docile fibra dell\'universo». È la stessa «rara felicità» di sentirsi parte del tutto.'
  },

  /* --- Testi · Soldati --- */
  { id:'u60', type:'mc', topic:'Testi · Soldati',
    text:'In «Soldati», la similitudine con le foglie d\'autunno ha grandi antecedenti letterari. Quali autori precedenti usano la stessa immagine?',
    options:[
      'Solo Virgilio nell\'Eneide',
      'Omero nell\'Iliade, Virgilio nell\'Eneide, Dante nell\'Inferno',
      'Petrarca nel Canzoniere e Boccaccio nel Decameron',
      'Leopardi e Foscolo'
    ],
    correct:1,
    explanation:'L\'immagine degli uomini come foglie ha una lunga genealogia: Omero nell\'Iliade, Virgilio nell\'Eneide, Dante nell\'Inferno. Ungaretti la riduce all\'osso: quattro versi-parola contro intere similitudini epiche.'
  },
  { id:'u61', type:'tf', topic:'Testi · Soldati',
    text:'Vero o falso: il soggetto «soldati» viene esplicitamente nominato nella poesia «Soldati».',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Il soggetto resta implicito. Il «si sta» impersonale include tutti senza nominarli. L\'assenza del soggetto rafforza l\'unanimismo: vale per tutta l\'umanità, non solo per i soldati.'
  },

  /* --- Testi · Fratelli --- */
  { id:'u62', type:'mc', topic:'Testi · Fratelli',
    text:'In «Fratelli», perché la parola «fratelli» viene definita «rivolta involontaria»?',
    options:[
      'Perché è pronunciata da un ribelle politico',
      'Perché nasce dall\'istinto, non da una scelta razionale: è una ribellione spontanea contro la violenza della guerra',
      'Perché il soldato la grida in modo volontariamente provocatorio',
      'Perché è una parola straniera usata fuori contesto'
    ],
    correct:1,
    explanation:'«Rivolta involontaria»: la parola esce spontaneamente dall\'istinto di sopravvivenza e fraternità umana. Non è un atto razionale ma una reazione istintiva contro la violenza. È un\'apostrofe diventata grido dell\'umanità intera.'
  },
  { id:'u63', type:'open', topic:'Testi · Fratelli',
    text:'Analizza la trasformazione semantica della parola «fratelli» nel corso della poesia omonima.',
    modelAnswer:'La parola «fratelli» compare tre volte con significati diversi. (1) All\'inizio: «Di che reggimento siete / fratelli?» — senso militare specifico, si riferisce ai commilitoni dello stesso esercito. (2) Al centro: «parola tremante / nella notte» — la parola è già qualcosa di più: vitale ma fragile come una foglia appena nata, esposta alla distruzione. (3) Alla fine: «Fratelli» isolato, senza contesto militare — ha perso ogni riferimento specifico ed è diventato l\'appello universale di tutta l\'umanità davanti alla morte. La traiettoria è dalla specificità militare all\'universalità umana.',
    keywords:['rivolta involontaria','reggimento','foglia appena nata','fraternità universale','apostrofe grido universale']
  },

  /* --- Testi · Veglia --- */
  { id:'u64', type:'mc', topic:'Testi · Veglia',
    text:'In «Veglia», i participi passati «massacrato», «digrignata», «penetrata» sono isolati nel verso. Quale effetto ottengono?',
    options:[
      'Creano un effetto musicale di rima',
      'Ogni participio isolato amplifica un dettaglio di morte con peso autonomo, creando accumulo di orrore',
      'Sono usati per accelerare il ritmo',
      'Sostituiscono i verbi principali'
    ],
    correct:1,
    explanation:'I participi passati isolati nel verso-parola caricano ogni immagine di un peso enorme: «massacrato» (morto violentemente), «digrignata» (bocca con i denti stretti), «penetrata nel mio silenzio» (il morto entra nell\'animo). L\'accumulo porta all\'esplosione finale.'
  },
  { id:'u65', type:'tf', topic:'Testi · Veglia',
    text:'Vero o falso: in «Veglia», il verso isolato «tanto» esprime l\'intensità emotiva massima della conclusione.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «Non sono mai stato / tanto / attaccato alla vita»: «tanto» isolato nel verso-parola porta il peso emotivo massimo della poesia. Una sola parola contenente il paradosso intero: la morte che amplifica la vita.'
  },

  /* --- Testi · Il porto sepolto --- */
  { id:'u66', type:'mc', topic:'Testi · Il porto sepolto',
    text:'In «Il porto sepolto», il verbo «disperdere» («li disperse») ha una doppia valenza. Qual è?',
    options:[
      'Significa solo «diffondere» la poesia tra gli uomini',
      'Richiama sia la diffusione dei canti tra gli uomini sia i «soldati dispersi» in battaglia — il poeta come combattente che lancia la parola come schegge',
      'Indica la perdita della poesia nel tempo',
      'È un\'allusione biblica alla dispersione dei popoli'
    ],
    correct:1,
    explanation:'«Disperdere» ha doppia valenza: il poeta disperde i canti tra gli uomini (li diffonde), e il termine richiama i «soldati dispersi» in battaglia. Il poeta è un combattente che lancia la parola come schegge di granata.'
  },
  { id:'u67', type:'open', topic:'Testi · Il porto sepolto',
    text:'Identifica i due echi mitici presenti in «Il porto sepolto» e spiega come si collegano al contenuto.',
    modelAnswer:'Primo eco mitico: Orfeo agli Inferi — come Orfeo scende negli Inferi per recuperare Euridice e poi risale, il poeta si immerge nell\'abisso interiore per toccare la verità nascosta e poi riemerge. Secondo eco mitico: la Sibilla Cumana che disperde le profezie sulle foglie (il vento le sparpa, le rende inaccessibili) — il poeta «disperde» i canti ma l\'inesauribile segreto non si lascia mai possedere del tutto. Entrambi i miti sottolineano l\'incompletezza della rivelazione poetica: il mistero resta.',
    keywords:['Orfeo','Sibilla cumana','immersione','emersione','disperde','inesauribile segreto','incompleto']
  },

  /* --- Testi · I Fiumi --- */
  { id:'u68', type:'mc', topic:'Testi · I Fiumi',
    text:'In «I Fiumi», il bagno nell\'Isonzo è descritto con termini sacri: «urna d\'acqua» e «reliquia». Che funzione hanno?',
    options:[
      'Indicano che il poeta è morto e sepolto nell\'acqua',
      'Sono metafore ironiche sul culto della guerra',
      'Conferiscono al bagno il valore di purificazione religiosa, quasi un battesimo che lava il «sudiciume della guerra»',
      'Sono riferimenti alla liturgia cattolica di Ungaretti'
    ],
    correct:2,
    explanation:'«Urna d\'acqua» e «reliquia» trasformano il bagno in un rito sacro: il poeta si purifica dal «sudiciume della guerra», come in un battesimo. È la resistenza dell\'umanità contro la disumanizzazione del conflitto.'
  },
  { id:'u69', type:'tf', topic:'Testi · I Fiumi',
    text:'Vero o falso: in «I Fiumi», il Serchio rappresenta le radici della famiglia toscana di Ungaretti, anche se lui non ci è mai nato.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il Serchio è il fiume della Garfagnana, terra di origine della famiglia. Ungaretti scrive: «al quale hanno bevuto duemil\'anni forse di mia gente campagnola». Radici genetiche trasmesse per via parentale, non esperienza diretta.'
  },
  { id:'u70', type:'mc', topic:'Testi · I Fiumi',
    text:'Quale significato ha il Nilo tra i quattro fiumi de «I Fiumi»?',
    options:[
      'La maturità intellettuale conquistata a Parigi',
      'Il fiume del fronte, della guerra presente',
      'L\'infanzia spontanea ad Alessandria d\'Egitto — il poeta «ardeva di inconsapevolezza» nella pienezza sensoriale senza interrogativi',
      'Le radici familiari toscane'
    ],
    correct:2,
    explanation:'Il Nilo è il fiume dell\'Egitto, dell\'infanzia spontanea senza riflessione critica: «ardere d\'inconsapevolezza nelle distese pianure». La pienezza sensoriale dell\'infanzia, prima delle domande identitarie.'
  },
  { id:'u71', type:'mc', topic:'Testi · I Fiumi',
    text:'Cosa rappresenta la Senna tra i quattro fiumi?',
    options:[
      'Le radici contadine della famiglia',
      'L\'infanzia egiziana',
      'Il fiume del fronte',
      'La maturità parigina — «in quel suo torbido mi sono rimescolato e mi sono conosciuto»: la formazione intellettuale e l\'autocoscienza'
    ],
    correct:3,
    explanation:'La Senna è il fiume di Parigi, dove Ungaretti studia tra 1912-1914. «Mi sono conosciuto» = l\'autocoscienza intellettuale conquistata tra avanguardie, simbolisti e le lezioni di Bergson. L\'acqua «torbida» corrisponde alla tormentata ricerca di sé.'
  },

  /* --- Testi · Non gridate più --- */
  { id:'u72', type:'mc', topic:'Testi · Non gridate più',
    text:'A quale raccolta appartiene «Non gridate più» e che relazione ha con le poesie di trincea dell\'Allegria?',
    options:[
      'All\'Allegria — è una poesia della Prima guerra mondiale',
      'A «Sentimento del tempo» — è in chiave classicista',
      'A «Il dolore» (1947) — è l\'Ungaretti maturo che chiede silenzio invece di «dire» la guerra come nelle poesie di trincea',
      'A «La Terra Promessa» — riprende miti classici'
    ],
    correct:2,
    explanation:'Appartiene a «Il dolore» (1947). C\'è un ribaltamento rispetto all\'Allegria: lì il poeta scriveva per dire la guerra (lettere d\'amore in Veglia); qui scrive per chiedere il silenzio. La poesia matura chiede di onorare i morti con il silenzio.'
  },
  { id:'u73', type:'tf', topic:'Testi · Non gridate più',
    text:'Vero o falso: nell\'ultimo verso «lieta dove non passa l\'uomo», l\'erba è «lieta» perché è lontana dai cimiteri di guerra.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. «Lieta dove non passa l\'uomo» significa che la natura è lieta solo senza l\'uomo, che porta distruzione. È una constatazione amara sulla natura distruttiva dell\'uomo — non un riferimento ai cimiteri ma una critica morale.'
  },
  { id:'u74', type:'open', topic:'Testi · Non gridate più',
    text:'Analizza l\'anafora «non gridate più, non gridate» e il tono che crea.',
    modelAnswer:'La ripetizione anaforica di «non gridate» crea un tono imperativo e urgente, quasi profetico. Il poeta non descrive, comanda. La duplicazione («non gridate più, non gridate») aumenta l\'intensità emotiva: la prima volta è un monito civile, la seconda è quasi un grido disperato. Il tono richiama la voce del profeta biblico che ammonisce il suo popolo. In «Non gridate più» il silenzio non è assenza: è l\'unica condizione per ascoltare i morti — chi grida non può udire il loro «impercettibile sussurro».',
    keywords:['anafora','tono imperativo','profetico','silenzio','sussurro dei morti','comando','urgenza']
  },

  /* --- Confronti --- */
  { id:'u75', type:'mc', topic:'Confronti',
    text:'Come differiscono Ungaretti, Saba e Montale nel rapporto con la tradizione poetica?',
    options:[
      'Tutti e tre rompono con la tradizione in modo uniforme',
      'Ungaretti rompe e poi recupera (Allegria vs Sentimento del tempo); Saba non rompe mai (innovazione nei contenuti, forma tradizionale); Montale crea una terza via né con la tradizione né con l\'avanguardia',
      'Solo Montale rompe con la tradizione; gli altri due sono conservatori',
      'Tutti e tre usano la metrica classica senza eccezioni'
    ],
    correct:1,
    explanation:'Tre posizioni diverse: Ungaretti bifasico (rottura poi recupero); Saba conserva la forma ma modernizza i contenuti; Montale né D\'Annunzio né Ungaretti — crea una via autonoma con la metrica al servizio della tensione intellettuale.'
  },
  { id:'u76', type:'mc', topic:'Confronti',
    text:'Come risponde ciascuno dei tre poeti (Ungaretti, Saba, Montale) alla guerra e alla storia?',
    options:[
      'Tutti e tre la rifiutano e vivono in esilio',
      'Ungaretti: esperienza fondante (trincea, fraternità); Saba: persecuzione concreta come ebreo; Montale: conferma del male di vivere preesistente',
      'Ungaretti e Saba ignorano la guerra; Montale la affronta',
      'Solo Saba subisce conseguenze personali dalla guerra'
    ],
    correct:1,
    explanation:'Tre risposte diverse: Ungaretti (trincea = esperienza fondante, fraternità, speranza); Saba (guerra/fascismo = persecuzione concreta perché ebreo, trauma biografico); Montale (male storico si innesta su pessimismo metafisico preesistente).'
  },
  { id:'u77', type:'open', topic:'Confronti',
    text:'Confronta la funzione della poesia per Ungaretti, Saba e Montale: come si distinguono le tre concezioni?',
    modelAnswer:'Per Ungaretti la poesia è testimonianza e redenzione: la parola salva, dà senso anche nel caos della guerra (Veglia), onora i morti (Non gridate più). Per Saba la poesia è etico-conoscitiva e terapeutica: scandaglio dell\'io, confessione onesta, dialogo col lettore — consola senza ingannare. Per Montale la poesia è certificazione del negativo: registra il «male di vivere» e cerca i rari momenti di grazia, ma rifiuta ogni missione salvifica (Anti-Vate). Sintesi: Ungaretti cerca l\'illuminazione, Saba cerca l\'onestà, Montale dichiara l\'impossibilità del senso.',
    keywords:['testimonianza','redenzione','etico-conoscitiva','terapeutica','certificazione del negativo','Anti-Vate','impossibilità del senso']
  },
  { id:'u78', type:'mc', topic:'Confronti',
    text:'Cosa accomuna l\'Ungaretti dell\'Allegria e il Saba del Canzoniere nella concezione del dolore?',
    options:[
      'Entrambi trovano nella psicoanalisi una cura',
      'Entrambi descrivono il dolore come condizione cosmica inevitabile',
      'Entrambi trasformano il dolore personale in un\'esperienza che vale per tutti — universalizzazione dell\'individuale',
      'Entrambi adottano la metrica classica per raccontarlo'
    ],
    correct:2,
    explanation:'In Ungaretti (unanimismo: «si sta» vale per tutta l\'umanità) e in Saba (la verità psicologica intima tocca una verità universale) il dolore personale si universalizza. In Montale il dolore è già cosmico per definizione, non necessita di questo movimento.'
  },
  { id:'u79', type:'mc', topic:'Confronti',
    text:'Qual è il principale punto di distanza tra Ungaretti e Montale nel rapporto con la speranza?',
    options:[
      'Ungaretti è ateo, Montale è religioso',
      'Ungaretti non nega la speranza — la guerra genera paradossalmente allegria e attaccamento alla vita; Montale ha un pessimismo metafisico che esclude ogni salvezza definitiva',
      'Entrambi esprimono speranza nelle loro ultime raccolte',
      'Montale è più ottimista di Ungaretti'
    ],
    correct:1,
    explanation:'Differenza chiave: Ungaretti trova nel naufragio una forma di allegria — la guerra paradossalmente rivela il valore della vita. Montale ha un pessimismo cosmico preesistente: il male di vivere non si guarisce, solo si testimonia. L\'Anti-Vate non promette salvezza.'
  },
  { id:'u80', type:'open', topic:'Confronti',
    text:'Perché «Allegria di naufragi» vs «Ossi di seppia» sono due titoli che riassumono la distanza estetica tra Ungaretti e Montale?',
    modelAnswer:'«Allegria di naufragi» di Ungaretti: il titolo è un ossimoro ma contiene una risoluzione — il naufrago sopravvissuto prova allegria, c\'è una tensione verso la vita. Il titolo conserva energia vitale anche nel disastro. «Ossi di seppia» di Montale: immagine di residui bianchi sulla spiaggia, erosi dal mare — la materia della vita dopo che l\'acqua l\'ha consumata. Non c\'è sopravvivenza gioiosa, solo il resto, il residuo, la forma svuotata. Ungaretti suggerisce resistenza; Montale denuncia erosione. Il confronto dei titoli anticipa la distanza di poetica tra i due.',
    keywords:['ossimoro','naufrago sopravvissuto','energia vitale','ossi di seppia','residuo','erosione','resistenza vs denuncia']
  },

  /* --- Stile avanzato --- */
  { id:'u81', type:'mc', topic:'Stile',
    text:'Quale figura retorica usa Ungaretti nell\'apertura de «I Fiumi» con l\'immagine dell\'«albero mutilato»?',
    options:['Analogia','Similitudine','Personificazione — «mutilato» è un termine umano applicato a un albero','Ossimoro'],
    correct:2,
    explanation:'«Albero mutilato»: «mutilato» è un termine usato per le persone (perde un arto in guerra) qui applicato a un albero. È una personificazione: l\'albero spezzato dai cannoni diventa specchio dell\'uomo ferito dalla guerra.'
  },
  { id:'u82', type:'tf', topic:'Stile',
    text:'Vero o falso: l\'anafora «Questo è l\'Isonzo… Questo è… Questi sono i miei fiumi» in «I Fiumi» crea un ritmo quasi sacrale.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La ripetizione anaforica di «Questo è…» crea ritmo e solennità, quasi un rito di riconoscimento identitario — il poeta elenca i propri fiumi come si elencano le tappe di una vita.'
  },
  { id:'u83', type:'mc', topic:'Stile',
    text:'Perché Ungaretti elimina la punteggiatura nell\'Allegria?',
    options:[
      'Per imitare lo stile del futurismo italiano',
      'Perché la punteggiatura è la grammatica della logica, e la trincea ha rotto la logica — il ritmo lo crea il poeta con la disposizione dei versi, non la grammatica',
      'Per risparmiare spazio sulle cartine di sigarette',
      'Per ubbidire a una moda simbolista francese senza particolare significato'
    ],
    correct:1,
    explanation:'L\'assenza di punteggiatura è una scelta semantica: il ritmo non è imposto dalla grammatica ma dal poeta stesso, attraverso la disposizione dei versi. In trincea, la logica grammaticale è spezzata dall\'orrore — la poesia rispecchia questa rottura.'
  },
  { id:'u84', type:'open', topic:'Stile',
    text:'Spiega perché Ungaretti inserisce luogo e data sotto ogni poesia dell\'Allegria.',
    modelAnswer:'Le indicazioni di luogo e data (es. «Mariano, 15 luglio 1916»; «Santa Maria La Longa, 26 gennaio 1917»; «Cotici, 16 agosto 1916») servono ad ancorare la poesia all\'esperienza concreta del momento. Non è elaborazione astratta: la poesia nasce qui e ora, in questo posto preciso, in questa data precisa. È il contrario della poesia come costruzione intellettuale a distanza. L\'indicazione ha anche una funzione testimoniale: ogni poesia è una data del Carso, un documento vivo di ciò che si è vissuto quella sera in trincea.',
    keywords:['luogo e data','ancoraggio concreto','anti-astrazione','testimonianza','Carso','documento vivo']
  },
  { id:'u85', type:'mc', topic:'Stile',
    text:'In «Fratelli», «aria spasimante» è una sinestesia. Che sensi mescola?',
    options:[
      'Vista e olfatto',
      'Udito e gusto',
      'Dimensione visiva/tattile dell\'aria + dolore corporeo (spasimo): due sensi diversi fusi in un\'unica immagine',
      'Tatto e vista in senso strettamente fisico'
    ],
    correct:2,
    explanation:'«Aria» è percepita visivamente e tattilmente (si vede, si sente sul corpo); «spasimante» appartiene al dolore corporeo somatico. La sinestesia fonde due sfere sensoriali diverse in una sola immagine: l\'aria stessa soffre come un corpo in agonia.'
  },

  /* --- Sintesi e orale --- */
  { id:'u86', type:'open', topic:'Sintesi',
    text:'Costruisci la risposta orale al quesito: «Chi è Ungaretti e quale posto occupa nella poesia italiana del Novecento?».',
    modelAnswer:'Giuseppe Ungaretti (1888-1970) è uno dei tre poeti cardine del Novecento italiano insieme a Saba e Montale. Nasce ad Alessandria d\'Egitto, si forma a Parigi a contatto con i simbolisti francesi e Bergson, e trova il suo stile definitivo in trincea sul Carso (1915-1918). La sua grande innovazione è la «parola come illuminazione»: non descrive, rivela. Stile: versi brevissimi (verso-parola), assenza di punteggiatura, spazi bianchi come silenzio, analogie ardite. L\'opera si divide in tre fasi: l\'Allegria (guerra, vita), il Sentimento del tempo (mito, tempo), Il dolore (lutto). L\'Allegria diventa il modello del primo Novecento; il Sentimento del tempo ispira l\'Ermetismo. La sua posizione: voce della fraternità umana di fronte alla morte.',
    keywords:['Alessandria d\'Egitto','Parigi','trincea','parola come illuminazione','verso-parola','tre fasi','Ermetismo','fraternità']
  },
  { id:'u87', type:'mc', topic:'Sintesi',
    text:'Qual è la frase-sintesi da ricordare per l\'orale sulla poetica di Ungaretti?',
    options:[
      '«La parola poetica è uno strumento di descrizione accurata della realtà»',
      '«Per Ungaretti la parola poetica è un\'illuminazione: un lampo che fa apparire la verità nascosta. Il poeta è come un palombaro che si immerge nell\'abisso interiore e risale con i suoi canti. Ma resta sempre un inesauribile segreto»',
      '«La poesia è l\'arte di dire le cose come stanno, senza mascherarle né amplificarle»',
      '«La parola poetica può solo certificare il negativo»'
    ],
    correct:1,
    explanation:'La frase-sintesi del programma: «Per Ungaretti la parola poetica è un\'illuminazione: un lampo che fa apparire la verità nascosta. Il poeta — come dice nella poesia "Il porto sepolto" — si immerge nell\'abisso interiore, tocca la verità, e poi riemerge per portarla agli uomini con il canto. Ma di questa esperienza resta sempre un "inesauribile segreto".»'
  },
  { id:'u88', type:'mc', topic:'Confronti',
    text:'Quale sintesi riassume le tre risposte diverse alla crisi del Novecento da parte di Ungaretti, Saba e Montale?',
    options:[
      '«Ungaretti scrive in prosa, Saba in versi, Montale in entrambe»',
      '«Ungaretti cerca l\'illuminazione, Saba cerca l\'onestà, Montale dichiara l\'impossibilità del senso»',
      '«Ungaretti è classico, Saba è romantico, Montale è moderno»',
      '«Tutti e tre rispondono con il silenzio alla crisi»'
    ],
    correct:1,
    explanation:'La box-quote del confronto: «Tre risposte diverse alla crisi del Novecento: Ungaretti cerca l\'illuminazione, Saba cerca l\'onestà, Montale dichiara l\'impossibilità del senso.»'
  },
  { id:'u89', type:'open', topic:'Confronti',
    text:'Confronta il tema della precarietà della vita in Ungaretti («Soldati») e in Saba («Trieste»). Come i due poeti declinano diversamente lo stesso tema?',
    modelAnswer:'In «Soldati» Ungaretti esprime la precarietà con la similitudine delle foglie d\'autunno: vita sospesa, pronta a cadere, universale (unanimismo). Il tono è essenziale, rarefatto; la brevità del testo amplifca il senso di fragilità. In Saba la precarietà è intima e psicologica: la sua «scontrosa grazia» descrive la sua stessa ambivalenza, il senso di non appartenere del tutto. Ungaretti universalizza la fragilità in senso cosmico; Saba la personalizza e la intima come carattere dell\'io. Stile: in Ungaretti il verso-parola crea sospensione; in Saba la metrica tradizionale la incornicia con un senso di controllo malinconico.',
    keywords:['Soldati','foglie d\'autunno','precarietà universale','scontrosa grazia','Trieste','intimità','universalizzazione vs personalizzazione']
  },
  { id:'u90', type:'mc', topic:'Sintesi',
    text:'Quale opera pubblica Mondadori nel 1969, raccogliendo l\'intera produzione di Ungaretti con autocommento?',
    options:['«Il taccuino del vecchio»','«La Terra Promessa»','«Vita d\'un uomo»','«Un grido e paesaggi»'],
    correct:2,
    explanation:'«Vita d\'un uomo» (1969, Mondadori) è il corpus definitivo dell\'intera opera di Ungaretti, con autocommento. È il titolo che dà nome al progetto poetico di tutta la sua vita: ogni raccolta è un capitolo della vita di un uomo.'
  },
  { id:'u91', type:'mc', topic:'Testi · Fratelli',
    text:'In «Fratelli» (1916), cosa risveglia la fraternità universale tra i soldati?',
    options:['Il ricordo della patria','La parola «fratelli» che diventa «foglie appena nate» — la vita nella sua fragilità assoluta','La vittoria in battaglia','L\'arrivo di una lettera da casa'],
    correct:1,
    explanation:'«Fratelli» nasce sul fronte carsico. La parola «fratelli» sveglia nei soldati la coscienza della vita condivisa: «foglie appena nate». La fragilità è universale — nemici inclusi. Ungaretti trasforma il fronte in luogo di rivelazione dell\'umanità.'
  },
  { id:'u92', type:'mc', topic:'Testi · Veglia',
    text:'In «Veglia» (1915), qual è il paradosso centrale del testo?',
    options:['Dormire accanto a un cadavere e sentire pace assoluta','Non riuscire ad addormentarsi davanti al compagno massacrato e scrivere lettere d\'amore — l\'intensità della vita si esalta di fronte alla morte','Rifiutarsi di combattere dopo aver visto la morte','Trovare un libro di poesia accanto al cadavere'],
    correct:1,
    explanation:'Il paradosso di «Veglia»: trascorrere una notte accanto al compagno massacrato rafforza l\'attaccamento alla vita — il poeta scrive «lettere piene d\'amore». La morte del vicino amplifica la coscienza dell\'esistenza. È l\'intuizione di fondo dell\'Allegria: la vita è preziosa proprio perché fragile.'
  },
  { id:'u93', type:'mc', topic:'Opere · titoli',
    text:'Come si è chiamata nel tempo la raccolta della Prima guerra mondiale, prima di diventare «L\'Allegria»?',
    options:['Sempre «L\'Allegria» dal 1916','Prima «Il porto sepolto» (1916), poi «Allegria di naufragi» (1919), poi «L\'Allegria» (1931)','Prima «Sentimento del tempo», poi «L\'Allegria»','Prima «Il dolore», poi «L\'Allegria»'],
    correct:1,
    explanation:'Il percorso editoriale: «Il porto sepolto» (1916, 16 poesie); «Allegria di naufragi» (1919, prima versione completa); «L\'Allegria» (1931, versione definitiva con revisione radicale). Questo percorso mostra l\'ossessione di Ungaretti per la riscrittura.'
  },
  { id:'u94', type:'mc', topic:'Opere · Sentimento del tempo',
    text:'Cosa segnala «Sentimento del tempo» (1933) rispetto all\'Allegria?',
    options:['È una riedizione dell\'Allegria con titolo nuovo','Segna il ritorno alla tradizione metrica italiana (endecasillabo, Petrarca, Barocco) e l\'abbandono del verso-parola','È la raccolta più politica di Ungaretti','Introduce il verso libero per la prima volta'],
    correct:1,
    explanation:'«Sentimento del tempo» (1933) segna la svolta: Ungaretti abbandona la concentrazione assoluta del verso-parola e torna alle forme tradizionali italiane. Il tempo — storico e cosmico — entra nella poesia. È la fase della maturità, più elaborata e meno immediata.'
  },
  { id:'u95', type:'mc', topic:'Vita · Parigi e avanguardie',
    text:'Quale ambiente poetico incontra Ungaretti a Parigi (1912–1914) che influenza la sua rivoluzione metrica?',
    options:['Il Parnassianesimo di Leconte de Lisle','Apollinaire e le avanguardie parigine — la rivoluzione del verso libero, l\'eliminazione della punteggiatura, l\'analogia pura','Il Naturalismo di Zola','Il Romanticismo di Hugo'],
    correct:1,
    explanation:'A Parigi Ungaretti frequenta Apollinaire (Alcools, 1913) e le avanguardie: eliminazione della punteggiatura, verso libero spinto, immagine come struttura. Questo contatto fornisce la grammatica del verso-parola e dell\'analogia pura.'
  },
  { id:'u96', type:'open', topic:'Testi · Non gridate più',
    text:'Analizza «Non gridate più» da «Il dolore» (1947) e spiega il legame con la morte del figlio Antonietto.',
    modelAnswer:'«Non gridate più» è tra le ultime poesie de «Il dolore», scritta dopo la morte del figlio Antonietto nel 1939. Il poeta chiede silenzio: «Non gridate più, / non gridate / Se lo volete ancora ascoltare». L\'apostrofe è universale ma nasce da dolore privatissimo. Il silenzio è necessario per «ascoltare» i morti — mantenerli vivi nel ricordo. La tecnica è distante dall\'Allegria: nessun verso-parola, ma melodia dolente. Il dolore privato si trasforma in appello alla pace collettiva.',
    keywords:['Non gridate più','Il dolore','Antonietto','silenzio','apostrofe','dolore privato → universale','memoria dei morti']
  },
  { id:'u97', type:'tf', topic:'Vita · insegnamento',
    text:'Vero o falso: Ungaretti insegna letteratura italiana moderna e contemporanea all\'Università di Roma La Sapienza dopo il 1942.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Ungaretti rientra definitivamente in Italia nel 1942 e ottiene la cattedra alla Sapienza di Roma — posizione che conserva fino al 1958. Il suo insegnamento è fondamentale per l\'influenza sulla cultura italiana del dopoguerra.'
  },
  { id:'u98', type:'mc', topic:'Opere · La Terra Promessa',
    text:'Cosa rappresenta la «Terra Promessa» nell\'omonima raccolta incompiuta (1950)?',
    options:['La Palestina dei padri biblici','La morte come approdo finale — Palinuro, il nocchiero di Enea, muore a un passo dalla meta','L\'America come terra di emigrazione','Il Paradiso di Dante reinterpretato in chiave moderna'],
    correct:1,
    explanation:'In «La Terra Promessa» (1950) la figura centrale è Palinuro, il nocchiero di Enea che cade in mare poco prima di raggiungere l\'Italia. La Terra Promessa non si raggiunge mai. È la metafora della speranza sempre prossima e sempre elusa.'
  },
  { id:'u99', type:'mc', topic:'Stile · silenzio bianco',
    text:'Cosa rappresenta il «silenzio bianco» (lo spazio sulla pagina) nelle poesie di Ungaretti?',
    options:['Un errore tipografico della prima edizione','Una pausa significativa: lo spazio non-scritto ha lo stesso peso poetico del verso — è silenzio come parte del ritmo','La censura fascista che eliminava alcune parole','Un omaggio al pittore Mondrian'],
    correct:1,
    explanation:'Il silenzio bianco è concettualmente essenziale: il verso non si misura solo per ciò che dice, ma anche per il silenzio che lo circonda. «M\'illumino / d\'immenso» — i due versi-parola non bastano senza lo spazio bianco che li amplifica. La parola e il silenzio hanno uguale dignità poetica.'
  },
  { id:'u100', type:'open', topic:'Sintesi',
    text:'Spiega perché «Vita d\'un uomo» è il progetto poetico più ambizioso del Novecento italiano.',
    modelAnswer:'«Vita d\'un uomo» (Mondadori, 1969) è il titolo che Ungaretti dà all\'intera raccolta definitiva. L\'ambizione è totale: ogni raccolta (Allegria, Sentimento del tempo, Il dolore, La Terra Promessa, Il taccuino del vecchio) è concepita come capitolo di un\'unica storia — la vita di un uomo che nasce ad Alessandria, combatte sul Carso, perde il figlio, insegna in Brasile. Non è un\'antologia: è un romanzo in versi. L\'autocommento rafforza questo carattere narrativo. È il progetto opposto a Saba (canzoniere psicologico) e a Montale (che non costruisce un\'opera unica): Ungaretti costruisce un\'epica del singolo uomo.',
    keywords:['Vita d\'un uomo','romanzo in versi','epica del singolo','autocommento','raccolta definitiva','1969 Mondadori']
  }
],

/* ════════════════════════════════════════════════════════════════════════
   MONTALE
   ════════════════════════════════════════════════════════════════════════ */
montale: [
  { id:'m1', type:'open', topic:'Poetica',
    text:'Spiega che cos\'è il «correlativo oggettivo» in Montale: da chi lo deriva, come funziona, e in cosa si distingue dall\'uso simbolico dell\'oggetto in Pascoli e in D\'Annunzio.',
    modelAnswer:'Il correlativo oggettivo è la tecnica principale di Montale, mutuata da T.S. Eliot. Invece di esprimere direttamente un\'emozione astratta, il poeta presenta un oggetto fisico concreto che «contiene» quell\'emozione senza nominarla. Esempio: invece di «sento il male di vivere», Montale scrive «era il rivo strozzato che gorgoglia, era l\'incartocciarsi della foglia riarsa, era il cavallo stramazzato». In Pascoli l\'oggetto è proiezione soggettiva (pathetic fallacy); in D\'Annunzio è porta su una bellezza assoluta; in Montale mantiene la sua brutale densità fisica — un emblema concreto e provvisorio, non simbolo magico.',
    keywords:['T.S. Eliot','oggetto concreto','rivo strozzato','no pathetic fallacy','emblema provvisorio']
  },
  { id:'m2', type:'mc', topic:'Poetica',
    text:'Che cosa indica «divina Indifferenza» in Montale?',
    options:[
      'L\'indifferenza di Dio verso le preghiere',
      'La natura che non partecipa al dolore umano: rovesciamento della pathetic fallacy — statua, nuvola, falco non soffrono',
      'La distanza del poeta dalla politica',
      'L\'atteggiamento di Clizia lontana'
    ],
    correct:1,
    explanation:'In «Spesso il male di vivere», statua/nuvola/falco non soffrono con noi: semplicemente non soffrono. Rovesciamento della pathetic fallacy romantica.'
  },
  { id:'m3', type:'open', topic:'Poetica',
    text:'Che cos\'è il «varco» nella poetica di Montale? Fai almeno due esempi.',
    modelAnswer:'Il varco è la ricerca ossessiva — e quasi sempre fallita — di una via di fuga o di un senso nascosto dietro le cose. È l\'opposto del muro. Nei testi del programma appare in: (1) la figura di Clizia in «Non recidere, forbice, quel volto»; (2) la carrucola in «Cigola la carrucola nel pozzo», che riporta dal fondo un\'immagine amata. Il varco è sempre precario: quasi sempre si chiude. Lo «scacco» (la sconfitta) è la condizione normale.',
    keywords:['varco','opposto del muro','Cigola la carrucola','Clizia','scacco','precario']
  },
  { id:'m4', type:'tf', topic:'Poetica',
    text:'Vero o falso: il «male di vivere» nasce dal trauma del fascismo e della guerra.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Montale stesso (1951) dice che il male di vivere è «connaturato all\'esistenza». Il fascismo aggrava, non crea.'
  },
  { id:'m5', type:'open', topic:'Poetica',
    text:'Spiega cosa significa essere il poeta «Anti-Vate». Contro quali tre modelli prende posizione?',
    modelAnswer:'Montale è l\'Anti-Vate per eccellenza: rifiuta la figura del poeta-profeta dannunziano, la pretesa di una parola magica. La sua poesia può solo dire «ciò che non siamo, ciò che non vogliamo». I tre modelli: (1) D\'Annunzio — rifiuta l\'eloquenza retorica, preferisce i limoni alle piante ornamentali; (2) Pascoli — rifiuta l\'oggetto come proiezione soggettiva (pathetic fallacy); (3) Simbolismo francese — rifiuta la parola magica che apre sulla Verità assoluta. La frase-manifesto: «volevo torcere il collo all\'eloquenza».',
    keywords:['Anti-Vate','D\'Annunzio','Pascoli','simbolismo francese','controeloquenza']
  },
  { id:'m6', type:'mc', topic:'Vita',
    text:'Per quale motivo Montale fu licenziato dal Gabinetto Vieusseux nel 1938?',
    options:[
      'Per aver pubblicato un libro vietato',
      'Per non essersi iscritto al PNF',
      'Per aver rifiutato di ospitare intellettuali ebrei',
      'Per assenze ingiustificate'
    ],
    correct:1,
    explanation:'Licenziato nel 1938 per il rifiuto di iscriversi al PNF. Stesso anno: Clizia (Irma Brandeis) costretta a tornare in USA per le leggi razziali.'
  },
  { id:'m7', type:'open', topic:'Vita',
    text:'Quali sono le tre figure femminili principali nell\'opera di Montale? A chi corrispondono e cosa rappresentano?',
    modelAnswer:'(1) CLIZIA — Irma Brandeis, studiosa americana di Dante, ebrea, conosciuta a Firenze nel 1933. Donna-angelo sul modello dantesco; nella Bufera figura cristologica, messaggera di speranza. Il nome riprende la ninfa trasformata in girasole. (2) VOLPE — Maria Luisa Spaziani: l\'anti-Clizia, sensualità terrena contro la purezza intellettuale. (3) MOSCA — Drusilla Tanzi, convivente dal 1939 e moglie dal 1962. Il soprannome viene dagli occhiali spessi per la miopia. Guida quotidiana, «radar spirituale». Dopo la sua morte (1963), gli Xenia in Satura.',
    keywords:['Clizia / Irma Brandeis','donna-angelo','girasole','Volpe','Mosca / Drusilla Tanzi','miopia','Xenia']
  },
  { id:'m8', type:'tf', topic:'Vita',
    text:'Vero o falso: durante la Seconda guerra mondiale Montale rimase a Firenze, ospitò intellettuali ebrei (tra cui Saba) e fu attivo nel CLN.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Negli anni 1943-1945 Montale ospita e protegge intellettuali ebrei, fra cui Saba, ed è attivo nel CLN.'
  },
  { id:'m9', type:'mc', topic:'Vita',
    text:'Quale evento biografico genera la stagione di Satura?',
    options:[
      'Il Nobel del 1975',
      'La nomina a senatore a vita nel 1967',
      'La morte di Drusilla Tanzi (Mosca) nel 1963 — sblocca la scrittura degli Xenia',
      'Il trasferimento a Milano nel 1948'
    ],
    correct:2,
    explanation:'Dopo «La bufera» (1956) Montale entra in un lungo silenzio. La morte di Mosca (1963) lo sblocca: nascono gli Xenia.'
  },
  { id:'m10', type:'open', topic:'Opere · Ossi di seppia',
    text:'Spiega il titolo «Ossi di seppia». Che cosa sono materialmente e perché diventano metafora dell\'uomo?',
    modelAnswer:'Gli «ossi di seppia» sono i residui calcarei dei molluschi abbandonati sulla spiaggia. Ciò che resta quando la vita è ridotta all\'essenziale: l\'osso, lo scheletro spogliato di ogni ornamento. Diventano metafora dell\'uomo moderno spogliato di illusioni. La doppia valenza: gli ossi possono galleggiare sul mare (armonia) o essere relitti arenati (esilio, aridità). Ambivalenza che rispecchia tutta la raccolta: il paesaggio ligure brullo come correlativo oggettivo dell\'aridità interiore, ma anche il mare come unico elemento positivo.',
    keywords:['residui calcarei','essenziale','aridità','mare','paesaggio ligure','antiretorico']
  },
  { id:'m11', type:'mc', topic:'Le occasioni',
    text:'Che cosa sono le «occasioni» da cui prende nome la seconda raccolta?',
    options:[
      'Opportunità mancate con Clizia',
      'Occasioni storiche di intervento civile',
      'Lampi di vita vissuta, flash improvvisi che aprono un varco di senso — come le madeleine di Proust',
      'Occasioni mondane fiorentine'
    ],
    correct:2,
    explanation:'«Occasioni» = lampi di vita vissuta. Come le madeleine: l\'istante in cui sembra possibile afferrare un significato.'
  },
  { id:'m12', type:'open', topic:'La bufera',
    text:'Cosa rappresenta «la bufera» nel titolo e cosa indica «e altro»? Come cambia Clizia in questa raccolta?',
    modelAnswer:'«La bufera» è la Seconda guerra mondiale — e insieme la guerra cosmica di sempre: il male assoluto nella storia ma anche oltre. «E altro»: lutti privati, eventi del dopoguerra, disillusione politica. Include il nucleo di «Finisterre» (1943-45). Clizia: nelle Occasioni era donna-angelo; nella Bufera si trasforma in figura quasi cristologica, messaggera di speranza cosmica, «il girasole che si sacrifica per tutti». Compare Volpe come antitesi corporea. Stile: plurilinguismo (quotidiano + biblico-religioso), allegorismo denso. Testo chiave: «Piccolo testamento».',
    keywords:['Seconda guerra mondiale','Finisterre','Clizia cristologica','girasole','Volpe','plurilinguismo']
  },
  { id:'m13', type:'mc', topic:'Satura',
    text:'Quali sono i tre significati che convergono nel titolo «Satura» (1971)?',
    options:[
      'Saturnia, Saturno, saturare',
      'Satura lanx (piatto di primizie, varietà), satira (tono sarcastico), sazietà (averne abbastanza della società dei consumi)',
      'Saturazione cromatica, satira politica, saggezza tarda',
      'Saturare il mercato, satira giornalistica, saggezza'
    ],
    correct:1,
    explanation:'Tre significati convergenti. Segna rottura totale con l\'allegorismo: stile prosastico, colloquiale, autoparodico.'
  },
  { id:'m14', type:'open', topic:'Xenia',
    text:'Che cosa sono gli «Xenia» di Satura? Etimologia, numero, destinatario, tono.',
    modelAnswer:'«Xenia» dal greco xénos = ospite, e dal latino xenium = dono fatto a un ospite. 28 poesie in totale (Xenia I e II, 1964-1966) raccolte in Satura. Dedicate alla moglie Mosca, morta nel 1963: una sorta di «canzoniere in morte» domestico. Biglietti poetici alla moglie morta — memorie di vita quotidiana, la miopia di Mosca, le scale della loro vita comune. Il tono è radicalmente diverso: rottura totale con l\'allegorismo; stile prosastico, colloquiale, ironico. La poesia «scende dall\'olimpo nelle cose quotidiane». La grandezza è nella prosaicità.',
    keywords:['xénos / xenium','28 poesie','Mosca','canzoniere in morte','stile prosastico','rottura allegorismo']
  },
  { id:'m15', type:'mc', topic:'Testi · Non chiederci la parola',
    text:'In «Non chiederci la parola», che cosa significa l\'espressione finale «ciò che non siamo, ciò che non vogliamo»?',
    options:[
      'La poesia rifiuta risposte politiche',
      'Il poeta evita nomi per timore della censura',
      'La poesia può solo dire una verità negativa: non dà certezze, non offre formule — poetica della negazione contro il poeta-vate',
      'L\'opera è incompleta'
    ],
    correct:2,
    explanation:'Versi-manifesto della poetica. L\'unica certezza è negativa. Anti-Vate radicalmente agnostico.'
  },
  { id:'m16', type:'tf', topic:'Testi · Non chiederci la parola',
    text:'Vero o falso: la «storta sillaba e secca come un ramo» è una metafora positiva di vita.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. È una metafora negativa: la poesia è ridotta a legno morto, senza musicalità. Dichiarazione dell\'Anti-Vate.'
  },
  { id:'m17', type:'open', topic:'Testi · Spesso il male di vivere',
    text:'Analizza la struttura simmetrica di «Spesso il male di vivere ho incontrato»: correlativi del male e della «divina Indifferenza».',
    modelAnswer:'Costruita su due quartine perfettamente simmetriche. Prima quartina: tre correlativi del male di vivere — (1) «rivo strozzato che gorgoglia» (acqua bloccata, vita bloccata); (2) «incartocciarsi della foglia riarsa» (vita che si inaridisce); (3) «cavallo stramazzato» (morte improvvisa). Seconda quartina: tre correlativi della «divina Indifferenza» — (1) «statua nella sonnolenza del meriggio» (immobilità, non-sofferenza); (2) «nuvola» (indifferenza); (3) «falco alto levato» (distanza, estraneità). La «divina Indifferenza» non è beatitudine: è semplice assenza di dolore. Rovesciamento della pathetic fallacy.',
    keywords:['rivo strozzato','foglia riarsa','cavallo stramazzato','statua','nuvola','falco','pathetic fallacy','simmetria']
  },
  { id:'m18', type:'mc', topic:'Testi · Meriggiare',
    text:'In «Meriggiare pallido e assorto», cosa simboleggia la «muraglia che ha in cima cocci aguzzi di bottiglia»?',
    options:[
      'Un ricordo concreto di Monterosso',
      'La separazione fisica da Clizia',
      'L\'esistenza umana come prigione invalicabile: il varco non esiste',
      'La società borghese fiorentina'
    ],
    correct:2,
    explanation:'Simbolo centrale della poetica: la muraglia con cocci è invalicabile. Il varco non esiste. La vita è tutta nel «seguitare» il muro.'
  },
  { id:'m19', type:'tf', topic:'Testi · Meriggiare',
    text:'Vero o falso: in «Meriggiare», le file di formiche sono un correlativo oggettivo del vano affaccendarsi degli uomini.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Le formiche «ora si rompono ed ora s\'intrecciano» senza meta — correlativo oggettivo puro del vano affaccendarsi.'
  },
  { id:'m20', type:'open', topic:'Testi · Cigola la carrucola',
    text:'Spiega il tema centrale di «Cigola la carrucola nel pozzo». Cosa simboleggiano pozzo e carrucola?',
    modelAnswer:'Tema centrale: il «varco della memoria» che fallisce. Il pozzo = profondità dell\'inconscio e della memoria. La carrucola = meccanismo della memoria che attinge dal profondo. L\'acqua nel secchio = ricordo liquido, tremante. Sul «puro cerchio» appare un volto amato che «ride»: per un istante è il varco. Ma quando il poeta accosta il volto, l\'immagine si deforma, «si fa vecchio», sfuma. La ruota si ferma, il pozzo «torna ad esser muto». È lo scacco: il varco si apre un istante e subito si chiude. Il passato non può essere recuperato.',
    keywords:['varco della memoria','scacco','pozzo = inconscio','carrucola = meccanismo','immagine si deforma']
  },
  { id:'m21', type:'mc', topic:'Testi · Non recidere, forbice',
    text:'In «Non recidere, forbice, quel volto», cosa rappresenta il «guscio di cicala» che cade?',
    options:[
      'Un dettaglio paesaggistico realistico',
      'Il correlativo oggettivo del ricordo che si svuota: la cicala cantava (ricordo vivo), il guscio vuoto cade nel fango (oblio)',
      'Il simbolo del fascismo che cade',
      'Una citazione da Saffo'
    ],
    correct:1,
    explanation:'Correlativo oggettivo perfetto: la cicala cantava (ricordo vivo), il guscio vuoto cade nel fango d\'autunno (oblio).'
  },
  { id:'m22', type:'open', topic:'Testi · Non recidere, forbice',
    text:'Ricostruisci il parallelismo tra le due strofe di «Non recidere, forbice, quel volto».',
    modelAnswer:'(1) La «forbice» del tempo (str. 1) ↔ il potatore che «duro colpo svetta» (str. 2): entrambi recidono. (2) La «memoria che si sfolla» ↔ l\'acacia che «scrolla»: entrambe perdono qualcosa. (3) Il «volto in ascolto» di Clizia ↔ il «guscio di cicala» vuoto: entrambi sono presenze che si svuotano. (4) La «nebbia di sempre» dell\'oblio ↔ la «belletta di Novembre»: entrambe sono fango/nebbia. Strofe specularmente costruite: la prima dichiara l\'emozione, la seconda la traduce in immagini fisiche — correlativo oggettivo al massimo. L\'emozione viene «taciuta».',
    keywords:['forbice / potatore','memoria / acacia','volto / guscio','nebbia / belletta','correlativo oggettivo']
  },
  { id:'m23', type:'mc', topic:'Testi · Ho sceso',
    text:'In «Ho sceso, dandoti il braccio», qual è il paradosso centrale costruito sulla figura di Mosca?',
    options:[
      'Mosca era forte ma fragile',
      'Le scale erano poche ma il viaggio sembrava lungo',
      'Mosca era miope ma proprio i suoi occhi «offuscati» erano «le sole vere pupille» — vedeva la realtà che conta',
      'Mosca scendeva lentamente'
    ],
    correct:2,
    explanation:'Nucleo della poesia: la miopia fisica diventa sguardo spirituale più acuto.'
  },
  { id:'m24', type:'open', topic:'Testi · Ho sceso',
    text:'Confronta Mosca in «Ho sceso, dandoti il braccio» con Clizia delle raccolte precedenti.',
    modelAnswer:'Clizia era donna-angelo: icona intellettuale, allegoria, figura quasi cristologica, modello dantesco. Presenza salvifica «alta», sublime, lontana. Lo stile a lei dedicato era oscuro, allegorico, allusivo. Mosca è l\'esatto opposto: figura pratica e quotidiana, fisicamente difettosa (miopia), guida non per elezione ma per saggezza istintiva. La poesia non ha nulla di sublime: biglietto d\'amore in forma di paradosso, stile prosastico — «le coincidenze, le prenotazioni, le trappole», nessuna metafora elevata. La grandezza è nella prosaicità. Coerente con la svolta di Satura.',
    keywords:['Clizia donna-angelo','Mosca quotidiana','miopia / radar','no allegoria','stile prosastico','paradosso']
  },
  { id:'m25', type:'tf', topic:'Stile',
    text:'Vero o falso: lo stile di Montale resta sostanzialmente costante dagli «Ossi di seppia» a «Satura».',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Lo stile evolve nelle quattro raccolte: Ossi (aspra musicalità), Occasioni (oscuro, ermetico), Bufera (plurilinguismo, allegorismo), Satura (prosastico, ironico).'
  },
  { id:'m26', type:'open', topic:'Confronti',
    text:'Confronta il rapporto con la natura in Montale e in Ungaretti.',
    modelAnswer:'In Ungaretti la natura è sfondo sacrale e cosmico: il fiume, il deserto, la luce egiziana sono spazi della rivelazione. La natura partecipa all\'epifania (l\'Isonzo de I Fiumi, dove il poeta si scopre «docile fibra dell\'universo»). In Montale la natura è «divinamente indifferente»: non rispecchia l\'animo, non soffre con il poeta. È aspra, bruciata, arida — correlativo oggettivo dell\'esistenza, non epifania. Il paesaggio ligure è la prova fisica del male di vivere. Montale rovescia la pathetic fallacy romantica.',
    keywords:['Ungaretti natura sacrale','epifania','docile fibra','Montale natura indifferente','no pathetic fallacy','paesaggio ligure']
  },
  { id:'m27', type:'mc', topic:'Testi · I limoni',
    text:'In «I limoni» (poesia programmatica degli Ossi di seppia), contro quale figura di poeta si posiziona Montale?',
    options:[
      'Contro Leopardi e la sua visione pessimistica della natura',
      'Contro i «poeti laureati» che cantano piante nobili e monumenti — implicita polemica contro l\'eloquenza dannunziana — e contro l\'uso soggettivistico della natura alla Pascoli',
      'Contro Carducci e il classicismo ottocentesco',
      'Contro l\'ermetismo di Quasimodo'
    ],
    correct:1,
    explanation:'«I limoni» è il manifesto anti-retorico: non i lauri né i mirti degli «ufficiali» della poesia, ma i limoni selvatici dei viottoli. Polemica implicita contro D\'Annunzio (eloquenza), contro Pascoli (pathetic fallacy) e contro il simbolismo. Il poeta «discreto» che va dove il volgo poetico non si abbassa.'
  },
  { id:'m28', type:'mc', topic:'Figure retoriche',
    text:'La «carrucola arrugginita» di «Cigola la carrucola» e il «rivo strozzato» di «Spesso il male di vivere» condividono la stessa tecnica. Quale?',
    options:[
      'Similitudine esplicita (come in Pascoli)',
      'Personificazione del paesaggio ligure',
      'Correlativo oggettivo: un oggetto fisico concreto che «contiene» l\'emozione senza nominarla astrattamente — tecnica derivata da T.S. Eliot',
      'Metafora simbolista con trasparente chiave allegorica'
    ],
    correct:2,
    explanation:'Entrambi sono correlativi oggettivi perfetti: nessuna dichiarazione diretta di emozione — è l\'oggetto fisico a «portarla» per intero. La carrucola arrugginita = meccanismo della memoria; il rivo strozzato = l\'esistenza bloccata. Il lettore deve fare il collegamento: non c\'è didascalia emotiva.'
  },
  { id:'m29', type:'open', topic:'Confronti',
    text:'Saba, Ungaretti e Montale rispondono in modo radicalmente diverso alla domanda: «a cosa serve la poesia?». Sintetizza le tre posizioni.',
    modelAnswer:'Tre risposte incompatibili. SABA: la poesia serve a dire la verità su sé stessi — è «scandaglio» dell\'interiorità, indagine onesta dei traumi. La parola deve comunicare direttamente, le rime «antiche» sono più oneste di quelle preziose. UNGARETTI: la poesia serve a «illuminare» — è un lampo che fa apparire per un istante la verità nascosta delle cose. Non descrive: svela. La parola è epifania, il verso-parola è il mezzo. MONTALE: la poesia non rivela né illumina — può solo dire «ciò che non siamo, ciò che non vogliamo». Verità negativa. La parola è «storta e secca come un ramo». La differenza di fondo: Saba e Ungaretti credono nel potere della parola (l\'una comunicativa, l\'altra illuminante); Montale dichiara il fallimento strutturale della parola stessa.',
    keywords:['Saba scandaglio','onestà','Ungaretti illuminazione','lampo','Montale verità negativa','ciò che non siamo','tre funzioni della parola']
  },
  { id:'m30', type:'tf', topic:'Vita',
    text:'Vero o falso: Montale ottenne il Premio Nobel per la Letteratura nel 1975, motivato dall\'«interpretazione dell\'esistenza umana sotto il segno di una visione della vita priva di illusioni».',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Nobel 1975. La motivazione svedese («senza illusioni») rispecchia perfettamente la poetica montaliana: Anti-Vate, male di vivere, verità negativa. Fu il primo Nobel italiano dopo Quasimodo (1959).'
  },

  /* --- Glossario avanzato --- */
  { id:'m31', type:'mc', topic:'Glossario',
    text:'Qual è la differenza fondamentale tra «simbolo» ed «emblema» in Montale?',
    options:[
      'Non c\'è differenza: sono sinonimi',
      'Il simbolo apre alla Verità universale assoluta (come in Baudelaire/D\'Annunzio); l\'emblema esprime una condizione concreta e provvisoria, senza pretese di verità universale',
      'Il simbolo è religioso, l\'emblema è laico',
      'L\'emblema è un oggetto inventato, il simbolo è reale'
    ],
    correct:1,
    explanation:'Per Baudelaire la natura è «foreste di simboli» che aprono sull\'Assoluto. Per Montale il poeta è in crisi: può solo registrare oggetti concreti («emblemi») che incarnano una condizione senza riscatto trascendente.'
  },
  { id:'m32', type:'tf', topic:'Glossario',
    text:'Vero o falso: il termine «correlativo oggettivo» fu inventato da Montale.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Il termine viene da T.S. Eliot, poeta angloamericano autore della Terra desolata. Montale disse di non averlo preso da lui, ma il legame è evidente: nelle Occasioni (1939) diventa la tecnica dominante.'
  },
  { id:'m33', type:'mc', topic:'Glossario',
    text:'Cosa sono gli «Xenia» (plurale di xenion)?',
    options:[
      'Poesie satiriche sulla società di massa',
      'Poesie ermetiche oscure',
      'Dal greco: dono offerto agli ospiti e ai morti. Titolo di due cicli in Satura dedicati alla moglie Mosca morta nel 1963',
      'Termini tecnici del simbolismo francese'
    ],
    correct:2,
    explanation:'Xenia (gr. xénos = ospite): dono votivo per i morti. Montale dà questo titolo ai due cicli di 14 poesie (totale 28) in Satura dedicati alla moglie Drusilla Tanzi (Mosca). Sono il «canzoniere in morte» di Montale.'
  },
  { id:'m34', type:'mc', topic:'Glossario',
    text:'Cosa significa per Montale «attraversare D\'Annunzio»?',
    options:[
      'Rifiutare completamente ogni influenza dannunziana',
      'Copiare D\'Annunzio nelle prime poesie',
      'La sua poesia passa attraverso il linguaggio dannunziano per poi rovesciarlo: D\'Annunzio cantava il panismo, Montale canta la disarmonia con la natura',
      'Pubblicare un\'antologia critica di D\'Annunzio'
    ],
    correct:2,
    explanation:'«Ho dovuto attraversare D\'Annunzio» — nelle prime poesie degli Ossi risuona il paesaggio ligure in stile quasi dannunziano, ma poi Montale lo rovescia: D\'Annunzio amplifica e celebra, Montale «torce il collo all\'eloquenza» e canta la disarmonia.'
  },
  { id:'m35', type:'tf', topic:'Glossario',
    text:'Vero o falso: il «classicismo problematico» di Montale è un classicismo restauratore che recupera la tradizione senza romperla.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. È «problematico»: Montale recupera la metrica classica (endecasillabi, rime) ma la frantuma, rompe il ritmo, inserisce termini bassi e quotidiani. Non è restaurazione, è un classicismo in crisi.'
  },
  { id:'m36', type:'mc', topic:'Glossario',
    text:'Cosa rappresenta il «varco» nella poetica di Montale?',
    options:[
      'La morte come liberazione definitiva',
      'La possibilità di evasione dal male di vivere: fragile, momentanea, mai garantita',
      'Il passaggio dalla giovinezza alla maturità',
      'La porta verso la verità assoluta'
    ],
    correct:1,
    explanation:'Il varco è la breccia nel muro dell\'esistenza: un\'epifania, un istante di senso. Ma è sempre precario e mai garantito: quasi sempre si chiude. Lo scacco (la sconfitta) è la condizione normale dell\'uomo.'
  },
  { id:'m37', type:'mc', topic:'Glossario',
    text:'Qual è il parallelo tra «occasione» in Montale e «madeleine» in Proust?',
    options:[
      'Entrambi si riferiscono a dolci francesi',
      'Entrambi sono eventi minuti che riattivano la memoria involontaria e aprono un varco di senso',
      'Entrambi indicano la nostalgia del passato perduto',
      'Non c\'è alcun parallelo tra i due'
    ],
    correct:1,
    explanation:'L\'occasione montaliana è un evento minimo — un volto, un oggetto, un profumo — che improvvisamente riapre un varco di senso come la madeleine proustiana attiva la memoria involontaria. Le Occasioni (1939) sono costruite su questo meccanismo.'
  },

  /* --- Vita --- */
  { id:'m38', type:'mc', topic:'Vita',
    text:'In quale città e anno nasce Montale?',
    options:['A Firenze nel 1902','A Genova nel 1896','A Milano nel 1891','A La Spezia nel 1898'],
    correct:1,
    explanation:'Nasce a Genova nel 1896, ultimo di cinque figli di famiglia borghese di commercianti. Formazione autodidatta: diploma da ragioniere.'
  },
  { id:'m39', type:'mc', topic:'Vita',
    text:'Quali letture caratterizzano la formazione intellettuale del giovane Montale?',
    options:[
      'Nietzsche, Freud e Marx',
      'Schopenhauer, Nietzsche e la lirica italiana; appassionato di canto lirico',
      'Simbolisti francesi e Verga',
      'Sola lettura della letteratura italiana del Settecento'
    ],
    correct:1,
    explanation:'Montale è autodidatta: lettore vorace di Schopenhauer e Nietzsche, appassionato di canto lirico. Queste letture forgiano il pessimismo cosmico e il gusto per la musicalità aspra.'
  },
  { id:'m40', type:'tf', topic:'Vita',
    text:'Vero o falso: le estati a Monterosso al Mare (Cinque Terre, Liguria) forniscono il paesaggio che diventa correlativo oggettivo dell\'aridità interiore.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il paesaggio ligure bruciato dal sole meridiano — muri scalcinati, prati polverosi, roccia e mare — è il correlativo oggettivo dell\'aridità interiore che permea tutta la prima raccolta.'
  },
  { id:'m41', type:'mc', topic:'Vita',
    text:'Quale atto antifascista compie Montale nel 1925, anno di pubblicazione di «Ossi di seppia»?',
    options:[
      'Si iscrive al Partito Comunista',
      'Pubblica una poesia esplicitamente contro Mussolini',
      'Firma il Manifesto degli intellettuali antifascisti di Benedetto Croce; il libro è pubblicato dall\'editore antifascista Gobetti (ucciso dai fascisti poco dopo)',
      'Si rifugia in Svizzera'
    ],
    correct:2,
    explanation:'Nel 1925 «Ossi di seppia» è pubblicato da Gobetti, editore antifascista assassinato dai fascisti nel 1926. Montale firma il Manifesto di Croce. Gesto coraggioso in un anno di svolta del regime.'
  },
  { id:'m42', type:'tf', topic:'Vita',
    text:'Vero o falso: Montale conosce Irma Brandeis (Clizia) a Firenze nel 1933, mentre è direttore del Gabinetto Vieusseux.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Dal 1929 al 1938 Montale è direttore del Gabinetto Vieusseux. Nel 1933 incontra Irma Brandeis (studiosa americana di Dante, ebrea) che diventerà la figura di Clizia nell\'opera poetica.'
  },
  { id:'m43', type:'mc', topic:'Vita',
    text:'Perché nel 1938 Irma Brandeis deve tornare negli USA?',
    options:[
      'Per la fine del suo contratto universitario',
      'Per le leggi razziali fasciste che la colpiscono in quanto ebrea — lo stesso anno Montale viene licenziato dal Vieusseux per non aver aderito al PNF',
      'Per una lite personale con Montale',
      'Per un incarico diplomatico del governo americano'
    ],
    correct:1,
    explanation:'1938: doppia tragedia. Montale viene licenziato dal Vieusseux per rifiuto di iscriversi al PNF. Irma Brandeis (Clizia), ebrea, è costretta a rientrare in USA per le leggi razziali fasciste. La sua assenza forzata la trasforma in figura salvifica delle Occasioni.'
  },
  { id:'m44', type:'mc', topic:'Vita',
    text:'Chi è Drusilla Tanzi e perché viene chiamata «Mosca»?',
    options:[
      'È la prima fidanzata di Montale; soprannome per la vivacità',
      'È la moglie dal 1962 (convivente dal 1939); chiamata Mosca per gli occhiali spessi dovuti alla forte miopia, che ricordavano gli occhi di una mosca',
      'È una poetessa amica; soprannome per il carattere irrequieto',
      'È la madre di Montale; soprannome dato in famiglia'
    ],
    correct:1,
    explanation:'Drusilla Tanzi: convivente dal 1939, moglie dal 1962. Fisicamente miope — gli occhiali spessi come occhi di mosca — ma dotata di un radar spirituale infallibile. La sua morte nel 1963 genera le poesie degli Xenia.'
  },
  { id:'m45', type:'tf', topic:'Vita',
    text:'Vero o falso: durante la Resistenza (1943-45) Montale rimase a Firenze e ospitò intellettuali ebrei tra cui Umberto Saba.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Durante la Resistenza Montale è a Firenze, ospita e protegge intellettuali ebrei (tra cui Saba), ed è attivo nel CLN. Scrive le poesie di Finisterre (incluse poi nella Bufera).'
  },
  { id:'m46', type:'mc', topic:'Vita',
    text:'Quale ruolo svolge Montale al Corriere della Sera a partire dal 1948?',
    options:[
      'Direttore del quotidiano',
      'Redattore e critico letterario, musicale, teatrale — ruolo di moralista laico della cultura italiana per oltre trent\'anni',
      'Corrispondente straniero da Parigi',
      'Editorialista politico'
    ],
    correct:1,
    explanation:'Dal 1948 al 1981 Montale è il principale critico letterario e culturale del Corriere della Sera. Il ruolo di moralista laico è il pendant della sua poesia: rigore e distanza, pochi ma precisi giudizi.'
  },
  { id:'m47', type:'mc', topic:'Vita',
    text:'Chi è Anna degli Uberti (Arletta) e che ruolo svolge nell\'opera di Montale?',
    options:[
      'È la moglie Mosca in giovinezza',
      'Ragazza incontrata adolescente a Monterosso, morta prematuramente: figura evanescente della giovinezza perduta, prefigurazione di Clizia',
      'È Irma Brandeis nei suoi anni giovanili',
      'È una figura inventata senza riferimento biografico'
    ],
    correct:1,
    explanation:'Arletta/Anna degli Uberti: ragazza conosciuta da Montale adolescente a Monterosso. Morì prematuramente — la sua scomparsa la cristallizza come figura di pura luce e assenza. È la prefigurazione di Clizia: la prima figura femminile assente che incarna il desiderio di un bene irraggiungibile.'
  },
  { id:'m48', type:'mc', topic:'Vita',
    text:'Chi è la «Volpe» nell\'opera di Montale?',
    options:[
      'Drusilla Tanzi in giovinezza',
      'Maria Luisa Spaziani, poetessa piemontese: l\'anti-Clizia, corporeità e sensualità terrena contro la purezza intellettuale',
      'Irma Brandeis nella fase finale',
      'Un personaggio simbolico inventato'
    ],
    correct:1,
    explanation:'Volpe = Maria Luisa Spaziani, poetessa piemontese. Rappresenta l\'antitesi di Clizia: corporeità, sensualità, istinto terreno contro la purezza intellettuale. Compare nella Bufera come alternativa quando l\'allegorismo non basta più.'
  },
  { id:'m49', type:'mc', topic:'Vita',
    text:'Chi è Dora Markus e perché Montale le dedica una poesia?',
    options:[
      'È Irma Brandeis con un altro nome',
      'Donna ebrea della Carinzia, vista in fotografia attraverso Umberto Saba: simbolo dei valori culturali europei minacciati dal nazifascismo',
      'È una poetessa tedesca',
      'È la sorella di Mosca'
    ],
    correct:1,
    explanation:'Dora Markus: donna ebrea della Carinzia (Austria). Montale non la conobbe mai direttamente ma la vide in fotografia mostrata da Saba. È il simbolo dei valori culturali europei (civiltà ebraica, cultura mitteleuropea) minacciati dal nazifascismo.'
  },

  /* --- Poetica --- */
  { id:'m50', type:'open', topic:'Poetica',
    text:'Spiega con un esempio testuale cosa si intende per «pathetic fallacy» e come Montale la rovescia.',
    modelAnswer:'La pathetic fallacy (errore patetico) è il procedimento romantico per cui il poeta proietta il proprio stato d\'animo nella natura: Leopardi, Pascoli, D\'Annunzio usano la natura come specchio dell\'animo. Montale la rovescia nella «divina Indifferenza»: in Spesso il male di vivere, la statua, la nuvola e il falco non soffrono con noi — semplicemente non soffrono. La natura non rispecchia l\'animo del poeta: ne è indifferente. Questo è il rovesciamento completo della tradizione romantica.',
    keywords:['pathetic fallacy','divina Indifferenza','statua','nuvola','falco','non soffrono','rovesciamento']
  },
  { id:'m51', type:'mc', topic:'Poetica',
    text:'Cosa dice esplicitamente Montale nel 1951 sull\'origine del male di vivere?',
    options:[
      'Nasce dalla guerra e dal fascismo',
      'Nasce dalla perdita di Clizia',
      'È «connaturato all\'esistenza»: il fascismo e la guerra aggravano ma non creano il problema',
      'Nasce dall\'incapacità di credere in Dio'
    ],
    correct:2,
    explanation:'Montale lo dice esplicitamente nel 1951: il male di vivere è «connaturato all\'esistenza». Non è un prodotto della storia. Il fascismo e la guerra aggravano una condizione preesistente e strutturale dell\'essere umano. Questo lo distingue da Ungaretti e Saba.'
  },
  { id:'m52', type:'tf', topic:'Poetica',
    text:'Vero o falso: la frase-manifesto di Montale «ciò che non siamo, ciò che non vogliamo» esprime una poetica della negazione: la poesia può solo definire l\'uomo per esclusione.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La poesia non illumina, non salva, non rivela — dice solo la negazione. Unica certezza: «ciò che non siamo, ciò che non vogliamo». Questa è la poetica dell\'Anti-Vate: rifiuto di ogni missione salvifica per la parola poetica.'
  },
  { id:'m53', type:'mc', topic:'Stile',
    text:'Quale caratteristica stilistica accomuna tutte le raccolte di Montale tranne Satura?',
    options:[
      'Versi brevissimi di una sola parola',
      'Assenza di punteggiatura',
      'Endecasillabo classico e musicalità aspra e antimelodica',
      'Tono satirico e ironico'
    ],
    correct:2,
    explanation:'Dagli Ossi di seppia alla Bufera: recupero dell\'endecasillabo, musicalità aspra e antimelodica, lessico che mescola quotidiano e tecnico. In Satura la svolta è verso il prosastico e il colloquiale.'
  },
  { id:'m54', type:'open', topic:'Stile',
    text:'Spiega l\'evoluzione delle quattro raccolte di Montale: quale filo logico le unisce?',
    modelAnswer:'(1) Ossi di seppia (1925): registrazione del male, ricerca del varco nel paesaggio ligure. (2) Le occasioni (1939): la donna-angelo Clizia come varco umano; il correlativo oggettivo oscura il testo; stile più aristocratico, vicino all\'ermetismo. (3) La bufera (1956): la guerra come male assoluto; Clizia diventa allegoria cosmica; lo scacco è totale; allegorismo apocalittico. (4) Satura (1971): crollo dell\'allegorismo; ironia sarcastica sulla società di massa; solo il ricordo privato di Mosca salva qualcosa; stile prosastico e diaristico.',
    keywords:['Ossi di seppia','Le occasioni','Clizia','La bufera','allegorismo','Satura','crollo','prosastico']
  },

  /* --- Opere --- */
  { id:'m55', type:'mc', topic:'Opere · Ossi di seppia',
    text:'Cosa sono gli «ossi di seppia» del titolo?',
    options:[
      'Frammenti di roccia ligure trovati in riva al mare',
      'I residui calcarei dei molluschi abbandonati sulla spiaggia — ciò che resta quando la vita è ridotta all\'essenziale. Metafora dell\'uomo spogliato di ogni ornamento',
      'Un tipo di pesce tipico del Mediterraneo',
      'Una forma poetica medievale'
    ],
    correct:1,
    explanation:'Gli ossi di seppia sono ciò che la vita ha lasciato: residui bianchi sulla spiaggia, erosi e vuoti. Sono l\'emblema dell\'uomo spogliato di ogni illusione. Ambivalenza: galleggiano (armonia) o sono relitti arenati (esilio, aridità).'
  },
  { id:'m56', type:'mc', topic:'Opere · Ossi di seppia',
    text:'Qual è la struttura di «Ossi di seppia»?',
    options:[
      'Una sola sezione di 61 liriche',
      '61 liriche in 4 sezioni + apertura (In limine) e chiusura (Riviere): Movimenti, Ossi di seppia, Mediterraneo, Meriggi e ombre',
      '3 capitoli simmetrici di 20 poesie ciascuno',
      'Un\'unica poesia suddivisa in canti'
    ],
    correct:1,
    explanation:'Struttura articolata: 61 liriche in 4 sezioni principali (Movimenti, Ossi di seppia, Mediterraneo, Meriggi e ombre) con apertura (In limine) e chiusura (Riviere). L\'insieme ha una logica architettonica.'
  },
  { id:'m57', type:'mc', topic:'Opere · Le occasioni',
    text:'Cos\'è la sezione «Mottetti» nelle «Occasioni»?',
    options:[
      'Poesie satiriche sulla borghesia',
      '20 brevi poesie — il nucleo della raccolta: canzoniere d\'amore per Clizia assente',
      'Una traduzione di mottetti musicali medievali',
      'Poesie di argomento paesaggistico ligure'
    ],
    correct:1,
    explanation:'I Mottetti sono 20 brevi poesie al centro delle Occasioni: il canzoniere d\'amore per Clizia (Irma Brandeis) assente. Il correlativo oggettivo è sviluppato al massimo: l\'emozione è «taciuta», restano solo gli oggetti (forbice, acacia, guscio di cicala).'
  },
  { id:'m58', type:'mc', topic:'Opere · La bufera',
    text:'Cosa significa «bufera» nel titolo della terza raccolta?',
    options:[
      'Una tempesta marina delle Cinque Terre',
      'La Seconda guerra mondiale — e anche la guerra cosmica e metafisica di sempre. «E altro» = lutti privati, eventi post-bellici',
      'Una crisi sentimentale con Clizia',
      'Il nazifascismo come movimento politico specifico'
    ],
    correct:1,
    explanation:'«La bufera» è la Seconda guerra mondiale — ma anche la guerra metafisica, di sempre. «E altro» allude ai lutti privati e alla disillusione post-bellica. Clizia diventa figura quasi cristologica, messaggera cosmica.'
  },
  { id:'m59', type:'tf', topic:'Opere · Satura',
    text:'Vero o falso: il titolo «Satura» ha tre significati sovrapposti: varietà (satura lanx), tono satirico e sazietà.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Satura lanx = piatto di primizie offerto agli dèi, quindi varietà di forme. Satira = tono sarcastico. Sazietà = averne abbastanza della volgarità della società di massa. Tre valenze in un solo titolo.'
  },
  { id:'m60', type:'mc', topic:'Opere · Satura',
    text:'In cosa consiste la «svolta radicale» di Satura rispetto alle raccolte precedenti?',
    options:[
      'Ritorno all\'endecasillabo e all\'ermetismo',
      'Rottura totale con l\'allegorismo: stile prosastico, colloquiale, ironico, autoparodico — la poesia scende dall\'olimpo nelle cose quotidiane',
      'Abbandono della figura femminile nella poesia',
      'Recupero del simbolismo romantico'
    ],
    correct:1,
    explanation:'Satura rompe con tutto: niente più allegorismo, niente più oscurità ermetica. Stile prosastico, ironico, diaristico. La battuta conclusiva con effetto sorpresa. Montale autoparodia i propri temi precedenti.'
  },

  /* --- Testi · Non chiederci la parola --- */
  { id:'m61', type:'mc', topic:'Testi · Non chiederci la parola',
    text:'Cosa chiede il poeta di NON chiedergli in «Non chiederci la parola»?',
    options:[
      'Una formula magica che riveli la Verità assoluta',
      'Poesie di argomento politico',
      'Una poesia accessibile al grande pubblico',
      'La traduzione di testi stranieri'
    ],
    correct:0,
    explanation:'«Non chiederci la parola che squadri da ogni lato l\'animo nostro… Non domandarci la formula che mondi possa aprirti». Montale rifiuta la funzione magica/salvifica della parola: non si può né descrivere l\'animo con precisione né dare formule di salvezza.'
  },
  { id:'m62', type:'open', topic:'Testi · Non chiederci la parola',
    text:'Spiega cosa intende Montale con l\'espressione «storta sillaba e secca come un ramo» in «Non chiederci la parola».',
    modelAnswer:'La «storta sillaba e secca come un ramo» è la metafora di ciò che la poesia di Montale può offrire. Una sillaba «storta» non è armoniosa né musicale: è spezzata, aspra, antimelodica — il contrario dell\'eloquenza dannunziana. «Secca come un ramo» = senza vita ornamentale, senza fiori retorici. La poesia è un legno morto, non un fiore. Ma questa è la sua autenticità: la parola vera è bruciata dall\'onestà, non abbellita. È la definizione del classicismo problematico e dell\'Anti-Vate.',
    keywords:['storta','antimelodica','secca come un ramo','Anti-Vate','legno morto','no ornamenti','autenticità']
  },
  { id:'m63', type:'mc', topic:'Testi · Non chiederci la parola',
    text:'Qual è la struttura metrica di «Non chiederci la parola»?',
    options:[
      'Terzine dantesche regolari',
      'Tre quartine con schema sonettistico libero (ABBA CDDC EFEF), prevalenza di endecasillabi e doppi settenari',
      'Un\'unica strofa di 12 versi liberi',
      'Cinque terzetti irregolari'
    ],
    correct:1,
    explanation:'Tre quartine con schema sonettistico libero. Prevalenza di endecasillabi e doppi settenari. Tono argomentativo e antiretorico: la struttura rispecchia la posizione di rifiuto etico.'
  },

  /* --- Testi · Spesso il male di vivere --- */
  { id:'m64', type:'mc', topic:'Testi · Spesso il male di vivere',
    text:'Quali sono i tre correlativi oggettivi del «male di vivere» nella prima quartina?',
    options:[
      'La statua, la nuvola, il falco',
      'Il mare, il sole, il vento',
      'Il rivo strozzato, la foglia riarsa, il cavallo stramazzato',
      'La muraglia, i cocci di bottiglia, le formiche'
    ],
    correct:2,
    explanation:'Prima quartina: tre oggetti fisici = il male di vivere. Rivo strozzato = vita bloccata. Foglia riarsa = vita che si inaridisce. Cavallo stramazzato = morte improvvisa, brutalità. Nessuna spiegazione: sono il male di vivere.'
  },
  { id:'m65', type:'tf', topic:'Testi · Spesso il male di vivere',
    text:'Vero o falso: in «Spesso il male di vivere», la seconda quartina presenta tre correlativi oggettivi della «divina Indifferenza» in opposizione perfetta ai tre del male.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Struttura perfettamente simmetrica: prima quartina = tre correlativi del male (rivo, foglia, cavallo); seconda quartina = tre correlativi della divina Indifferenza (statua, nuvola, falco). Due gruppi di tre oggetti in opposizione.'
  },
  { id:'m66', type:'mc', topic:'Testi · Spesso il male di vivere',
    text:'Perché la «divina Indifferenza» in Montale non è la stessa cosa della beatitudine o della salvezza?',
    options:[
      'Perché è solo un\'ironia letteraria',
      'Perché riguarda solo gli dèi e non gli uomini',
      'Perché la grazia non è beatitudine: è semplicemente l\'essere al di fuori del dolore — non salva ma non soffre. La «divinità» è quasi ironica: solo gli dèi possono essere veramente indifferenti',
      'Perché si raggiunge solo con la meditazione'
    ],
    correct:2,
    explanation:'La divina Indifferenza non è la soluzione del problema del male: è la capacità di non essere toccati. La statua, la nuvola, il falco non soffrono — e questo è il massimo «bene» a disposizione. Non è redenzione, è non-dolore.'
  },

  /* --- Testi · Meriggiare --- */
  { id:'m67', type:'mc', topic:'Testi · Meriggiare',
    text:'Cosa rappresenta la «muraglia con i cocci aguzzi di bottiglia» in «Meriggiare»?',
    options:[
      'Un vero muro visto da Montale a Monterosso',
      'La separazione tra Italia e Francia',
      'L\'esistenza umana come prigione invalicabile: il varco non esiste',
      'La divisione tra fascisti e antifascisti'
    ],
    correct:2,
    explanation:'Il muro con i cocci è il simbolo centrale di tutta la poetica di Montale: l\'esistenza come muraglia invalicabile. I cocci rendono impossibile scavalcarla. Il varco non esiste — o è solo un barlume lontano come il mare intravisto tra le fronde.'
  },
  { id:'m68', type:'mc', topic:'Testi · Meriggiare',
    text:'Che funzione ha l\'immagine delle formiche in «Meriggiare»?',
    options:[
      'È una descrizione naturalistica del paesaggio ligure',
      'È un correlativo oggettivo del vano affaccendarsi umano senza meta',
      'È un riferimento alle truppe fasciste',
      'È un\'analogia con la poesia come lavoro instancabile'
    ],
    correct:1,
    explanation:'Le formiche che «si rompono ed ora s\'intrecciano» senza meta rappresentano il vano affaccendarsi degli uomini. È un correlativo oggettivo puro: il lettore deve fare il collegamento senza che il testo lo dichiari esplicitamente.'
  },
  { id:'m69', type:'tf', topic:'Testi · Meriggiare',
    text:'Vero o falso: «Meriggiare» contiene onomatopee come «schiocchi di merli», «frusci di serpi», «tremuli scricchi di cicale» che creano suoni aspri e antimelodici.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il testo è costruito anche sonicamente: suoni aspri e antimelodici che incarnano il disagio esistenziale. «Schiocchi», «frusci», «scricchi» sono onomatopee che amplificano l\'aridità dell\'ambiente e dell\'animo.'
  },

  /* --- Testi · Cigola la carrucola --- */
  { id:'m70', type:'mc', topic:'Testi · Cigola la carrucola',
    text:'Qual è la struttura simbolica di «Cigola la carrucola nel pozzo»?',
    options:[
      'Il pozzo = la guerra; la carrucola = la memoria; l\'acqua = il lutto',
      'Il pozzo = l\'inconscio e la memoria; la carrucola = il meccanismo della memoria; l\'acqua = il ricordo liquido e deformante; il volto nel cerchio d\'acqua = l\'immagine amata',
      'Il pozzo = la società borghese; la carrucola = il lavoro; l\'acqua = il tempo',
      'Il pozzo = la morte; la carrucola = la vita; l\'acqua = le lacrime'
    ],
    correct:1,
    explanation:'Il simbolismo del pozzo: pozzo = profondità dell\'inconscio; carrucola = meccanismo della memoria; acqua = ricordo liquido e deformante; volto nel cerchio d\'acqua = l\'immagine amata. Tutti elementi che funzionano come correlativi oggettivi.'
  },
  { id:'m71', type:'open', topic:'Testi · Cigola la carrucola',
    text:'In «Cigola la carrucola nel pozzo», come funziona il «varco» e perché fallisce?',
    modelAnswer:'La carrucola attinge dal profondo del pozzo (l\'inconscio) un\'immagine del passato: il varco si apre. Per un istante l\'immagine amata sorride nel «puro cerchio» dell\'acqua. Ma subito si deforma, appartiene a un altro tempo. Il profilo sfuma nel vuoto, il pozzo torna muto, la ruota si ferma. Lo scacco è inevitabile: il passato non può essere recuperato. Il varco si apre e subito si chiude — questa è la condizione normale dell\'uomo in Montale. Non c\'è redenzione della memoria.',
    keywords:['varco','scacco','immagine amata','deforma','profilo sfuma','passato irrecuperabile','pozzo torna muto']
  },

  /* --- Testi · Non recidere forbice --- */
  { id:'m72', type:'mc', topic:'Testi · Non recidere forbice',
    text:'A quale sezione delle «Occasioni» appartiene «Non recidere, forbice, quel volto»?',
    options:['Finisterre','Mottetti — 20 brevi poesie d\'amore per Clizia assente','Mediterraneo','Silvae'],
    correct:1,
    explanation:'Appartiene ai Mottetti: 20 brevi poesie che formano il nucleo del canzoniere d\'amore per Clizia assente. Il correlativo oggettivo è al massimo: la prima strofa esprime l\'emozione (timore dell\'oblio), la seconda la sostituisce completamente con l\'immagine fisica.'
  },
  { id:'m73', type:'mc', topic:'Testi · Non recidere forbice',
    text:'Qual è il parallelismo tra le due strofe di «Non recidere, forbice, quel volto»?',
    options:[
      'Prima strofa = paesaggio ligure; seconda strofa = paesaggio nordico',
      'Prima strofa: forbice del tempo / memoria che si sfolla / volto di Clizia; seconda strofa: potatore che svetta / acacia che scrolla / guscio di cicala che cade nella belletta',
      'Prima strofa = tono lirico; seconda strofa = tono satirico',
      'Non c\'è parallelismo: sono due immagini indipendenti'
    ],
    correct:1,
    explanation:'Parallelismo perfetto: forbice del tempo = potatore; memoria che si sfolla = acacia che scrolla; volto di Clizia che rischia l\'oblio = guscio vuoto di cicala; nebbia dell\'oblio = belletta di novembre. Il correlativo oggettivo sostituisce completamente l\'emozione.'
  },
  { id:'m74', type:'open', topic:'Testi · Non recidere forbice',
    text:'Spiega perché il guscio vuoto della cicala è definito «correlativo oggettivo perfetto».',
    modelAnswer:'Il guscio vuoto di cicala è emblema perfetto del correlativo oggettivo. La cicala cantava (il ricordo era vivo, la cicala produceva musica come il ricordo produce emozione). Ora è solo un involucro vuoto — il guscio abbandonato dopo la metamorfosi, senza vita dentro. Il ricordo di Clizia si è svuotato così: l\'emozione era presente, ora è una forma vuota che cade nel fango d\'autunno. Tutto in un\'immagine fisica, senza commento o spiegazione: il lettore deve fare il collegamento. Questa è l\'essenza del correlativo oggettivo.',
    keywords:['cicala cantava','guscio vuoto','ricordo svuotato','cade nel fango','oblio','immagine fisica','senza commento']
  },

  /* --- Testi · Ho sceso dandoti il braccio --- */
  { id:'m75', type:'mc', topic:'Testi · Ho sceso dandoti il braccio',
    text:'Qual è il paradosso centrale di «Ho sceso, dandoti il braccio»?',
    options:[
      'Che il poeta accompagnava Mosca fisicamente ma era lei la più forte',
      'Che la vita è lunga ma alla fine sembra breve',
      'Che Mosca era fisicamente miope (pupille offuscate) ma aveva gli unici «veri occhi» — vedeva la realtà che conta, mentre lui che vedeva bene non vedeva nulla',
      'Che scendere le scale è più difficile che salirle'
    ],
    correct:2,
    explanation:'Il rovesciamento ironico: Mosca è fisicamente miope («pupille tanto offuscate»). Eppure «le sole vere pupille erano le tue». Lui vedeva bene fisicamente ma non vedeva ciò che conta. La miopia fisica è sguardo spirituale più acuto. Paradosso consapevole e costruito.'
  },
  { id:'m76', type:'tf', topic:'Testi · Ho sceso dandoti il braccio',
    text:'Vero o falso: lo stile di «Ho sceso, dandoti il braccio» è prosastico e colloquiale, con lessico ordinario.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «Le coincidenze, le prenotazioni, le trappole, gli scorni» — lessico del tutto ordinario. Nessuna metafora elevata, nessun allegorismo. La grandezza è nella prosaicità. È l\'emblema dello stile di Satura: colloquiale, ironico, diaristico.'
  },
  { id:'m77', type:'mc', topic:'Testi · Ho sceso dandoti il braccio',
    text:'Come si distingue la figura di Mosca da quella di Clizia nella poesia montaliana?',
    options:[
      'Mosca è intellectuale come Clizia, solo in una raccolta diversa',
      'Clizia è donna-angelo, allegoria dei valori umanistici, quasi cristologica; Mosca è guida pratica e quotidiana, fisicamente difettosa, con saggezza istintiva',
      'Sono la stessa persona con due nomi diversi',
      'Mosca è più giovane di Clizia'
    ],
    correct:1,
    explanation:'Differenza fondamentale: Clizia è donna-angelo intellettuale, allegoria dei valori civili contro il fascismo, quasi cristologica. Mosca è l\'opposto: concreta, quotidiana, fisicamente imperfetta. Non è sublime ma più vera. La poesia per lei non ha nulla di elevato: è un biglietto d\'amore.'
  },

  /* --- Confronti avanzati --- */
  { id:'m78', type:'mc', topic:'Confronti',
    text:'Come si distingue il rapporto con la natura tra Ungaretti, Montale e Saba?',
    options:[
      'Tutti e tre usano la natura come sfondo neutro',
      'Ungaretti: natura sacrale e cosmica (spazio di rivelazione); Montale: natura divinamente indifferente al dolore umano, aspra (correlativo oggettivo); Saba: natura biografica intimamente legata alla vita (Trieste, porto)',
      'Solo Montale usa il paesaggio; gli altri due lo evitano',
      'Tutti e tre rovesciano la pathetic fallacy'
    ],
    correct:1,
    explanation:'Tre rapporti diversi: Ungaretti (natura = spazio sacrale di illuminazione, paesaggi dell\'anima); Montale (natura indifferente = correlativo oggettivo dell\'aridità esistenziale, rovescia la pathetic fallacy); Saba (natura = sfondo biografico concreto, non allegoria).'
  },
  { id:'m79', type:'mc', topic:'Confronti',
    text:'Come si distinguono i tre poeti per il rapporto con la forma poetica?',
    options:[
      'Tutti e tre usano il verso libero',
      'Ungaretti: verso-parola, no punteggiatura; Montale: endecasillabo classico ma aspro e problematico; Saba: metrica tradizionale come scelta etica consapevole',
      'Solo Saba usa la metrica classica',
      'Tutti e tre rompono con la tradizione in modo uguale'
    ],
    correct:1,
    explanation:'Tre posizioni sulla forma: Ungaretti (verso-parola, no punteggiatura, massima concentrazione); Montale (endecasillabo e metrica classica, ma aspra e antimelodica — classicismo problematico); Saba (metrica tradizionale come scelta etica, non ingenuità).'
  },
  { id:'m80', type:'open', topic:'Confronti',
    text:'Spiega perché «Ossi di seppia» vs «Allegria di naufragi» sono due titoli che sintetizzano due poetiche opposte.',
    modelAnswer:'«Allegria di naufragi» di Ungaretti: ossimoro energico — il naufrago sopravvissuto prova allegria. C\'è movimento, sopravvivenza, resistenza vitale. Il titolo suggerisce che anche nel naufragio si può trovare un senso. «Ossi di seppia» di Montale: immagine di residui calcarei sulla spiaggia — ciò che resta quando la vita è ridotta all\'essenziale. Non c\'è sopravvivenza gioiosa: solo il relitto, il resto, la forma svuotata. Ungaretti suggerisce energia e slancio; Montale denuncia la riduzione, l\'erosione. I due titoli anticipano la distanza di fondo tra le due poetiche.',
    keywords:['ossimoro','naufrago sopravvissuto','resistenza vitale','ossi di seppia','residui','erosione','relitto','confronto poetiche']
  },

  /* --- Sintesi --- */
  { id:'m81', type:'mc', topic:'Sintesi',
    text:'Quale «unico elemento distintivo» si deve saper dire all\'orale per Montale?',
    options:[
      'Il poeta della parola-illuminazione',
      'Il poeta del correlativo oggettivo e del male di vivere',
      'Il poeta della confessione onesta',
      'Il poeta della tradizione classica recuperata'
    ],
    correct:1,
    explanation:'Dalla sintesi del confronto: «Montale è il poeta del correlativo oggettivo e del male di vivere; Ungaretti è il poeta della parola-illuminazione; Saba è il poeta della confessione onesta».'
  },
  { id:'m82', type:'mc', topic:'Sintesi',
    text:'Cosa afferma Montale nel discorso del Nobel del 1975?',
    options:[
      '«La poesia può ancora salvare il mondo»',
      '«È ancora possibile la poesia?» — la domanda stessa sintetizza tutta la sua poetica del dubbio e dell\'Anti-Vate',
      '«La poesia è il linguaggio di Dio»',
      '«Il correlativo oggettivo è la tecnica del futuro»'
    ],
    correct:1,
    explanation:'Il titolo del discorso Nobel 1975: «È ancora possibile la poesia?». Non una risposta ma una domanda. Questa incertezza strutturale è coerente con tutta la poetica: la poesia non dà certezze, non salva, può solo chiedersi se è ancora possibile.'
  },
  { id:'m83', type:'open', topic:'Sintesi',
    text:'Costruisci la risposta orale al quesito: «Chi è Montale e quale posto occupa nella poesia italiana del Novecento?».',
    modelAnswer:'Eugenio Montale (1896-1981) è uno dei tre grandi poeti del Novecento italiano. Nasce a Genova, si forma nel paesaggio ligure bruciato dal sole, e costruisce una poetica radicalmente anti-retorica. I concetti-chiave sono il correlativo oggettivo (l\'oggetto fisico che sostituisce l\'emozione) e il male di vivere (condizione esistenziale connaturata all\'uomo, non prodotta dalla storia). Si oppone a D\'Annunzio e al simbolismo: è l\'Anti-Vate. Le quattro raccolte principali (Ossi di seppia, Le occasioni, La bufera, Satura) seguono un filo logico dal muro al diario. Nobel 1975 con motivazione «interpretazione dell\'esistenza umana priva di illusioni». Posizione nella letteratura: né con la tradizione né con l\'avanguardia — una terza via lirica autonoma.',
    keywords:['Genova','correlativo oggettivo','male di vivere','Anti-Vate','tre vie lirica','Nobel 1975','quattro raccolte','classicismo problematico']
  },
  { id:'m84', type:'mc', topic:'Confronti',
    text:'In quale modo la figura femminile struttura l\'opera di Montale diversamente da Saba?',
    options:[
      'In Montale le figure femminili sono biografiche e concrete; in Saba sono allegoriche',
      'In Montale le figure femminili (Clizia, Mosca, Arletta, Volpe, Dora Markus) strutturano tutta l\'opera come allegorie che cambiano con ogni raccolta; in Saba la moglie Lina è figura concreta e biografica, non allegoria',
      'Non c\'è differenza: entrambi usano figure femminili allegoriche',
      'Solo Montale ha figure femminili rilevanti'
    ],
    correct:1,
    explanation:'Distinzione fondamentale: in Montale le figure femminili sono allegoriche e cambiano funzione con ogni raccolta (Clizia = donna-angelo → allegoria cristologica; Mosca = guida quotidiana). In Saba Lina/Carolina è concreta, autobiografica, onesta — coerente con la poetica dell\'onestà.'
  },
  { id:'m85', type:'tf', topic:'Vita',
    text:'Vero o falso: dopo la morte di Mosca nel 1963, Montale entra in un lungo silenzio che si interrompe solo con Satura nel 1971.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Dopo La bufera (1956), Montale ha un lungo silenzio poetico di circa 15 anni. La morte di Mosca nel 1963 sblocca la scrittura: nascono le poesie degli Xenia (1964-1966), poi le Satura (1968-1970), raccolti nel volume Satura nel 1971.'
  },
  { id:'m86', type:'mc', topic:'Stile',
    text:'Quale figura retorica struttura la poesia «Non chiederci la parola» attraverso le ripetizioni «Non chiederci» e «Non domandarci»?',
    options:['Similitudine','Anafora — ripetizione della stessa struttura negativa ad inizio verso/periodo','Ossimoro','Correlativo oggettivo'],
    correct:1,
    explanation:'L\'anafora «Non chiederci la parola» (v. 1) e «Non domandarci la formula» (v. 9) crea struttura circolare e ritmica. La ripetizione della negazione sottolinea la poetica del rifiuto: niente formule magiche, niente salvezza verbale.'
  },
  { id:'m87', type:'mc', topic:'Testi · Meriggiare',
    text:'Nella struttura di «Meriggiare», come procede la progressione narrativa?',
    options:[
      'Dal passato al presente',
      'Dalla percezione sensoriale concreta (suoni, immagini del paesaggio) alla conclusione esistenziale (il muro)',
      'Dal generale al particolare',
      'Dal politico al personale'
    ],
    correct:1,
    explanation:'La progressione è dalla percezione sensoriale (tre strofe: suoni aspri, formiche, mare lontano — tutto concreto e fisico) alla conclusione esistenziale (la muraglia con i cocci). Il paesaggio ligure porta verso la verità del muro.'
  },
  { id:'m88', type:'open', topic:'Poetica',
    text:'Spiega il concetto di «allegorismo» in Montale e come si manifesta in Clizia nella «Bufera».',
    modelAnswer:'L\'allegorismo è diverso dal simbolismo: nell\'allegoria un personaggio o oggetto «sta per» qualcos\'altro in modo programmato e razionale. Clizia, nelle Occasioni, è già allegoria dei valori umanistici contro il fascismo, costruita sul modello di Beatrice di Dante. Nella Bufera l\'allegorismo si intensifica: Clizia diventa figura quasi cristologica — intermediaria tra umano e divino, messaggera cosmica di speranza contro il nazifascismo. È il girasole (il suo nome riprende la ninfa innamorata di Apollo che si trasformò in girasole) che si sacrifica per tutti. L\'allegorismo apocalittico della Bufera porta questa costruzione all\'estremo, segnalando che la salvezza non arriva: solo la tensione verso di essa.',
    keywords:['allegorismo','Clizia','Beatrice','cristologica','girasole','nazifascismo','salvezza mancata','Bufera']
  },
  { id:'m89', type:'mc', topic:'Confronti',
    text:'Come si manifesta l\'antifascismo di Ungaretti, Saba e Montale?',
    options:[
      'Tutti e tre aderiscono a partiti antifascisti',
      'Ungaretti: posizione controversa (aderisce inizialmente al regime); Saba: persecuzione concreta in quanto ebreo; Montale: rifiuta l\'iscrizione al PNF, firma Manifesto Croce, protegge ebrei durante la Resistenza',
      'Solo Montale è esplicitamente antifascista',
      'Tutti e tre fuggono dall\'Italia'
    ],
    correct:1,
    explanation:'Tre posizioni diverse: Ungaretti (posizione controversa — adesione iniziale al fascismo); Saba (persecuzione diretta come ebreo con le leggi razziali 1938); Montale (antifascismo etico: licenziato dal Vieusseux, firma Manifesto, protegge ebrei durante la Resistenza).'
  },
  { id:'m90', type:'mc', topic:'Sintesi',
    text:'Quale frase del testo riassume meglio «il filo rosso di tutta l\'opera di Montale»?',
    options:[
      '«M\'illumino d\'immenso»',
      '«Ciò che non siamo, ciò che non vogliamo. La poesia di Montale parte dalla negazione — dal muro — e cerca sempre, invano, il varco»',
      '«Spiega cosa intende Ungaretti con illuminazione»',
      '«L\'uomo è felice perché sa che c\'è il varco»'
    ],
    correct:1,
    explanation:'La box-quote del programma: «Ciò che non siamo, ciò che non vogliamo. La poesia di Montale parte dalla negazione — dal muro — e cerca sempre, invano, il varco.» Negazione + ricerca impossibile del varco = il filo rosso di tutta l\'opera.'
  },
  { id:'m91', type:'mc', topic:'Opere · Satura',
    text:'Cosa segnala «Satura» (1971) rispetto alle raccolte precedenti di Montale?',
    options:['È una raccolta di sonetti tradizionali','Segna una svolta verso la prosa poetica ironica e prosastica: verso lungo, tono colloquiale, satira della modernità','È l\'ultima raccolta in cui compare Clizia','Rappresenta un ritorno all\'ermetismo'],
    correct:1,
    explanation:'Satura (1971) è una rottura radicale: abbandona il verso breve e la tensione delle raccolte precedenti. Il tono diventa ironico e prosastico. Montale riflette sulle vanità del mondo contemporaneo e sul dolore privato per la moglie morta (Xenia).'
  },
  { id:'m92', type:'mc', topic:'Opere · Xenia',
    text:'A chi è dedicato il ciclo «Xenia» in «Satura»?',
    options:['A Clizia/Irma Brandeis','Alla moglie Drusilla Tanzi (Mosca) morta nel 1963','Al padre di Montale','Alla città di Genova'],
    correct:1,
    explanation:'Xenia I e II (in Satura, 1971) sono dedicati a Drusilla Tanzi, la moglie soprannominata «Mosca». Mosca muore nel 1963. Gli Xenia sono il canzoniere in morte — tono affettuoso, ironico, domestico. È il Montale più umano.'
  },
  { id:'m93', type:'open', topic:'Testi · Ho sceso dandoti il braccio',
    text:'Analizza «Ho sceso, dandoti il braccio, almeno un milione di scale» da Xenia II: tono, figura retorica centrale, tema.',
    modelAnswer:'Il tono è colloquiale: Montale parla alla moglie morta come se fosse ancora presente, calcolando «almeno un milione di scale» (Mosca era quasi cieca). La figura retorica è l\'iperbole affettuosa che diventa gesto d\'amore enorme. Il tema è la presenza-assenza della morte: la moglie viene apostrofata come se camminasse ancora accanto. Il tono è il più lontano dall\'intellettualismo montaliano — è pura tenerezza domestica.',
    keywords:['Ho sceso dandoti il braccio','Mosca','Xenia','iperbole','dialogo con morta','tenerezza domestica','apostrofe']
  },
  { id:'m94', type:'mc', topic:'Testi · Piove',
    text:'In quale modo la poesia «Piove» (Satura, 1971) parodia la «Pioggia nel pineto» di D\'Annunzio?',
    options:['Riprende la stessa ambientazione boschiva con personaggi diversi','Riprende l\'anafora «piove su...» ma svuota il panismo: piove sul nulla, sulla tomba della moglie, sulla burocrazia — il vitalismo panico è sostituito dall\'ironia del negativo','È una traduzione in dialetto genovese','Cita D\'Annunzio per criticarne la metrica'],
    correct:1,
    explanation:'«Piove» riprende l\'anafora di D\'Annunzio ma la svuota: piove sulla Gazzetta Ufficiale, sulla tomba di Mosca, sul traffico. È il gesto critico esplicito: stessa forma, opposta direzione — nessun vitalismo panico, solo assenza e perdita.'
  },
  { id:'m95', type:'mc', topic:'Vita · Nobel',
    text:'In quale anno Montale riceve il Nobel per la letteratura?',
    options:['1969','1972','1975','1981'],
    correct:2,
    explanation:'Montale riceve il Nobel nel 1975. La motivazione: «per la sua grande poesia che ha interpretato i valori umani sotto il simbolo di una visione della vita priva di illusioni».'
  },
  { id:'m96', type:'mc', topic:'Opere · Ossi di seppia · titolo',
    text:'Qual è il significato simbolico del titolo «Ossi di seppia» (1925)?',
    options:['È un termine della cucina ligure senza significato simbolico','L\'osso di seppia è il residuo dell\'animale che le onde depositano sulle spiagge — metafora di ciò che resta quando la vita se ne va, del male di vivere','Si riferisce ai colori del paesaggio ligure in autunno','È il soprannome dato a Montale dai critici'],
    correct:1,
    explanation:'L\'osso di seppia è il guscio interno che le onde depositano sulle spiagge: residuo, seccume, testimonianza di una vita già finita. Montale ne fa la metafora della propria poesia: essenziale, dura, arida — e vera come ciò che resta. Il titolo è già un manifesto contro il vitalismo panico.'
  },
  { id:'m97', type:'tf', topic:'Testi · La casa dei doganieri',
    text:'Vero o falso: «La casa dei doganieri» (1930, nelle Occasioni) ha come tema centrale il ritorno impossibile al passato e la separazione.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. «Tu non ricordi la casa dei doganieri / sul rialzo a strapiombo sulla scogliera». Il ritorno al passato è impossibile: il luogo c\'è ma la relazione è perduta. La «bussola che gira» indica un tempo circolare senza uscita.'
  },
  { id:'m98', type:'mc', topic:'Poetica · Occasioni',
    text:'Cosa sono le «Occasioni» nell\'omonima raccolta (1939)?',
    options:['Le occasioni di incontro tra Montale e la critica','Situazioni minime e oggetti che improvvisamente aprono un varco di senso — equivalente italiano della madeleine proustiana','Le occasioni mancate della vita politica italiana','I titoli dei capitoli del libro'],
    correct:1,
    explanation:'Le Occasioni sono eventi minimi (un volto intravisto, un oggetto, un profumo) che improvvisamente riattivano un senso. Ma in Montale il senso non si conquista: scatta e scompare. Le Occasioni sono anche la raccolta in cui Clizia prende il suo nome definitivo.'
  },
  { id:'m99', type:'mc', topic:'Stile · antirettorica',
    text:'Come si manifesta la posizione antiretorica di Montale nella scelta lessicale?',
    options:['Usa il dialetto genovese per rifiutare l\'italiano letterario','Sceglie termini duri e anti-aulici — «ciottolo», «muro», «vetriolo» — contro il lessico ornato di D\'Annunzio','Rifiuta completamente il lessico italiano classico','Usa solo parole straniere per modernizzare la lingua'],
    correct:1,
    explanation:'Il «torcer il collo all\'eloquenza» si manifesta in un lessico duro, aspro, talvolta tecnico: «ossi», «ciottoli», «ferraglia». È il lessico opposto a D\'Annunzio. Questa scelta non è un difetto ma un programma estetico deliberato.'
  },
  { id:'m100', type:'open', topic:'Sintesi · quattro fasi',
    text:'Descrivi le quattro fasi del percorso poetico di Montale attraverso le quattro raccolte principali.',
    modelAnswer:'(1) Ossi di seppia (1925): paesaggio ligure come correlativo del male di vivere. Il muro è l\'ostacolo; il varco è il miracolo impossibile. Lessico duro, tono secco. (2) Le Occasioni (1939): il correlativo oggettivo si perfeziona. Clizia (Irma Brandeis) porta i valori umanistici contro il fascismo. (3) La bufera e altro (1956): la guerra come apocalisse storica. Clizia diventa figura allegorica quasi cristologica. (4) Satura (1971): rottura del tono solenne. Verso lungo, tono ironico e prosastico. Xenia dedica tenerezza alla moglie morta. Percorso: dall\'essenzialità degli Ossi alla prosa ironica di Satura.',
    keywords:['Ossi di seppia','Occasioni Clizia','Bufera apocalisse','Satura ironia','quattro fasi','correlativo oggettivo','varco']
  }
],

/* ════════════════════════════════════════════════════════════════════════
   SVEVO — 30 domande (NUOVE)
   ════════════════════════════════════════════════════════════════════════ */
svevo: [
  { id:'sv1', type:'mc', topic:'Vita',
    text:'Qual è il vero nome di Italo Svevo?',
    options:[
      'Aron Hector Schmitz (poi Ettore Schmitz)',
      'Ettore Veneziani',
      'Italo Poli',
      'Aron Schwartz'
    ],
    correct:0,
    explanation:'Vero nome: Aron Hector Schmitz (italianizzato in Ettore). Lo pseudonimo «Italo Svevo» unisce italianità (Italo) e cultura germanica (Svevo, dagli Svevi).'
  },
  { id:'sv2', type:'open', topic:'Vita',
    text:'Spiega il significato programmatico dello pseudonimo «Italo Svevo».',
    modelAnswer:'Lo pseudonimo è un programma in due parole. «Italo» richiama l\'italianità culturale, la lingua che Svevo sceglie di scrivere nonostante sia cresciuto in ambiente multilingue. «Svevo» rimanda agli Svevi, popolazione germanica da cui ebbe origine la dinastia del Sacro Romano Impero (1138-1254). Lo pseudonimo cristallizza la sua duplice formazione — italiana e tedesca — e dichiara apertamente la sua identità di cittadino mitteleuropeo che scrive in italiano. Coerente con la sua biografia: Trieste asburgica, studi commerciali in Germania, letture di Schopenhauer e Goethe in originale.',
    keywords:['italianità','cultura germanica','Svevi','duplice formazione','Trieste asburgica','mitteleuropeo']
  },
  { id:'sv3', type:'mc', topic:'Vita',
    text:'In quale ambiente cittadino nasce e si forma Svevo?',
    options:[
      'Milano cosmopolita di fine Ottocento',
      'Trieste mitteleuropea, crocevia di cultura italiana, tedesca, slava ed ebraica',
      'Vienna, capitale dell\'Impero',
      'Genova portuale'
    ],
    correct:1,
    explanation:'Trieste — città di confine: italiana per lingua, asburgica per governo, mitteleuropea per mentalità. Componente ebraica, cultura tedesca, ambiente mercantile.'
  },
  { id:'sv4', type:'tf', topic:'Vita',
    text:'Vero o falso: Svevo era un autodidatta che lavorò per quasi vent\'anni come impiegato bancario presso la filiale triestina della Union Bank di Vienna.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Dal 1878 al 1899 lavora alla Union Bank. Continua a scrivere di nascosto. Nel 1899 viene assunto nell\'industria del suocero Veneziani.'
  },
  { id:'sv5', type:'mc', topic:'Vita',
    text:'Quale incontro decisivo avviene a Trieste nel 1907?',
    options:[
      'L\'incontro con Eugenio Montale',
      'L\'incontro con James Joyce, che diventa suo allievo di italiano e poi promotore della sua opera in Francia',
      'L\'incontro con Sigmund Freud',
      'L\'incontro con Marcel Proust'
    ],
    correct:1,
    explanation:'Joyce arriva a Trieste come insegnante di inglese; Svevo è suo allievo. Joyce sarà il tramite per il riconoscimento internazionale dopo «La coscienza di Zeno».'
  },
  { id:'sv6', type:'mc', topic:'Vita',
    text:'In che modo muore Svevo nel 1928?',
    options:[
      'Per malattia, dopo lunga degenza',
      'In un incidente stradale in provincia di Treviso, lasciando incompiuto il quarto romanzo «Il vecchione»',
      'Suicida, come Zeno',
      'Per arresto cardiaco a Trieste'
    ],
    correct:1,
    explanation:'Muore il 13 settembre 1928 in un incidente stradale. Stava lavorando a «Il vecchione» (o «Le confessioni del vegliardo»), rimasto in cinque frammenti.'
  },
  { id:'sv7', type:'open', topic:'Poetica',
    text:'Che cos\'è l\'«inetto» nella poetica di Svevo? Perché paradossalmente è anche lucido?',
    modelAnswer:'L\'inetto sveviano è un uomo debole, immaturo, incapace di agire con decisione. Ma non è semplicemente uno sconfitto dalla vita: la sua inadeguatezza pratica si accompagna a una percezione più acuta della realtà rispetto ai personaggi «sani». Questa è la grande intuizione di Svevo: la malattia come forma di lucidità. L\'inetto percepisce le contraddizioni del reale perché non riesce ad anestetizzarsi con l\'azione come fanno gli uomini forti e integrati nella società. L\'uomo ordinario, sano, è spesso superficiale: il suo successo nel mondo borghese è pagato con una cecità esistenziale che l\'inetto non può permettersi.',
    keywords:['inetto','debole','incapace di agire','lucidità','malattia come luciditÃ','sano superficiale','cecità del sano']
  },
  { id:'sv8', type:'mc', topic:'Poetica · Influenze',
    text:'Quale filosofo è considerato il principale modello ispiratore di Svevo per la divisione dell\'umanità in «lottatori» e «contemplatori»?',
    options:[
      'Friedrich Nietzsche',
      'Arthur Schopenhauer',
      'Henri Bergson',
      'Karl Marx'
    ],
    correct:1,
    explanation:'Da Schopenhauer Svevo deriva la divisione dell\'umanità in «lottatori» (forti) e «contemplatori» (inetti), oltre alla tendenza all\'autoinganno e all\'immutabilità del carattere.'
  },
  { id:'sv9', type:'open', topic:'Poetica · Freud',
    text:'Qual è il rapporto di Svevo con la psicanalisi di Freud? Perché la rifiuta come terapia?',
    modelAnswer:'Svevo fu tra i primi in Italia a conoscere le teorie psicanalitiche di Freud. Ne lesse le opere e tradusse in italiano «Il sogno» (1901). Entrò in contatto con Edoardo Weiss, psicanalista triestino formato alla scuola di Freud. Ma rifiuta la psicanalisi come terapia perché — secondo lui — intende «guarire» l\'uomo proprio da ciò che di più caratteristico egli ha: la malattia come elemento distintivo nella società borghese moderna. Per Svevo la malattia non è una deviazione dalla norma, è la norma. Paradosso: usa il lessico freudiano (autoinganno, atti mancati, lapsus, complesso edipico) per smontarlo dall\'interno attraverso l\'ironia di Zeno.',
    keywords:['Freud','primo in Italia','Edoardo Weiss','rifiuto come terapia','malattia come norma','ironia di Zeno']
  },
  { id:'sv10', type:'mc', topic:'Poetica · Bergson',
    text:'Quale concetto bergsoniano è decisivo per la struttura narrativa della «Coscienza di Zeno»?',
    options:[
      'L\'élan vital',
      'Il tempo come «durata» — la coscienza che fonde passato e presente in modo non lineare',
      'L\'intuizione vs. l\'intelletto',
      'Il riso come fenomeno sociale'
    ],
    correct:1,
    explanation:'Bergson distingue il tempo scientifico (lineare) dal tempo interiore della coscienza — la «durata». In Svevo si traduce nel «tempo misto»: il presente di Zeno-narratore e il passato di Zeno-protagonista coesistono.'
  },
  { id:'sv11', type:'tf', topic:'Poetica',
    text:'Vero o falso: per Svevo la scrittura ha funzione terapeutica e prende il posto della psicanalisi.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La scrittura è autoanalisi: cura il «male di vivere» e diventa strumento di conoscenza di sé. La psicanalisi non guarisce; la scrittura sì — almeno permette di convivere con la malattia.'
  },
  { id:'sv12', type:'mc', topic:'Una vita',
    text:'Qual era il titolo originale del primo romanzo di Svevo (1893)?',
    options:[
      'Il romanzo di un inetto',
      'Un inetto',
      'Una vita perduta',
      'Il giovane Alfonso'
    ],
    correct:1,
    explanation:'Titolo originale: «Un inetto». L\'editore lo cambia in «Una vita» perché ritiene il primo troppo esplicito sulla tesi del romanzo.'
  },
  { id:'sv13', type:'open', topic:'Una vita',
    text:'Riassumi la trama di «Una vita» (1893) e spiega che tipo di inetto è Alfonso Nitti.',
    modelAnswer:'Alfonso Nitti, giovane intellettuale di provincia, si trasferisce a Trieste per lavorare in banca. Tenta la scalata sociale attraverso una relazione con Annetta, figlia del datore di lavoro. Ma fugge al paese natale quando la madre è morente, e al ritorno trova Annetta fidanzata con Macario. Incapace di reagire, si suicida. Alfonso è l\'inetto inconsapevole: non capisce la propria inadeguatezza, si autoinganna fino alla fine. Il suo contrario è Macario — forte, deciso, sicuro di sé. Contini definisce il romanzo «psicoanalitico prima della psicanalisi».',
    keywords:['Alfonso Nitti','Trieste','Annetta','Macario','inetto inconsapevole','suicidio','psicanalitico prima della psicanalisi']
  },
  { id:'sv14', type:'mc', topic:'Senilità',
    text:'Quale è il significato del titolo «Senilità» (1898), e qual è la sua originalità rispetto a «Una vita»?',
    options:[
      'Indica letteralmente la vecchiaia anagrafica del protagonista Emilio',
      'Indica una senilità psicologica: incapacità di vivere il presente, immobilismo affettivo nonostante la giovane età',
      'Indica la decadenza della borghesia triestina',
      'È un riferimento alla vecchiaia di Trieste'
    ],
    correct:1,
    explanation:'Emilio Brentani ha 35 anni ma è «senile» psicologicamente: incapace di reagire, fissato in una vita grigia. Il titolo originario era «Il carnevale di Emilio» — l\'editore lo cambia.'
  },
  { id:'sv15', type:'open', topic:'Senilità',
    text:'In «Senilità», quali sono le coppie di personaggi e cosa rappresentano simbolicamente?',
    modelAnswer:'Quattro personaggi in due coppie speculari. Coppia perdente/malata: Emilio Brentani (scrittore fallito, inetto consapevole) e la sorella Amalia (vita grigia, rifugio nell\'etere, morte). Coppia vittoriosa/sana: Angiolina (giovane spregiudicata, tradisce Emilio) e Stefano Balli (artista brillante, sicuro di sé, conquista Amalia). Emilio distorce la realtà: trasforma Angiolina in creatura angelica per non vedere ciò che è davvero. È l\'inetto consapevole ma immobile: sa di essere inadatto ma non riesce a cambiare. La struttura segue Schopenhauer: lottatori vs contemplatori.',
    keywords:['Emilio Brentani','Amalia','Angiolina','Stefano Balli','perdenti/vittoriosi','visione distorta','inetto consapevole']
  },
  { id:'sv16', type:'tf', topic:'Senilità',
    text:'Vero o falso: dopo «Senilità» (1898), accolto con indifferenza, Svevo abbandona la pubblicazione per 25 anni.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. La delusione è profonda. Continua a scrivere in privato ma non pubblica nulla fino a «La coscienza di Zeno» (1923).'
  },
  { id:'sv17', type:'mc', topic:'La coscienza di Zeno',
    text:'Qual è la struttura narrativa innovativa de «La coscienza di Zeno»?',
    options:[
      'Diario lineare in ordine cronologico',
      'Prefazione (del Dottor S.) + Preambolo + 6 capitoli tematici (Fumo, Padre, Matrimonio, Amante, Associazione, Psicanalisi) — destrutturazione temporale',
      'Lettere alla moglie Augusta',
      'Romanzo in tre parti speculari'
    ],
    correct:1,
    explanation:'Struttura unica: Prefazione del Dottor S. (l\'unico testo non scritto da Zeno) + Preambolo + 6 capitoli tematici, non cronologici. Tempo frammentato come la coscienza.'
  },
  { id:'sv18', type:'open', topic:'La coscienza di Zeno',
    text:'Spiega la differenza tra «io narrante» e «io narrato» nella «Coscienza di Zeno» e perché è un\'innovazione centrale.',
    modelAnswer:'Il «tempo misto» della Coscienza consente un duplice punto di vista. L\'IO NARRANTE è Zeno a 57 anni, che scrive e giudica dal presente con ironia. L\'IO NARRATO è il giovane/adulto Zeno, che agisce nel passato. I capitoli 2-7 si immaginano scritti tra il 1913-1914, ma raccontano fatti dal 1870 in poi. L\'ultimo capitolo reca le date 1915-1916: quando matura l\'avversione per la psicanalisi e arriva la visione apocalittica della guerra, il punto di vista del narratore coincide con quello del protagonista — la distanza ironica scompare. Innovazione centrale: il narratore è inattendibile, lo dichiara lui stesso. Il lettore è privato della voce attendibile che correggeva la visione distorta in «Una vita» e «Senilità».',
    keywords:['io narrante','io narrato','tempo misto','Bergson','narratore inattendibile','distanza ironica','1915-1916']
  },
  { id:'sv19', type:'mc', topic:'Coscienza · Cap. I',
    text:'Cosa simboleggiano le «ultime sigarette» nel capitolo «Il fumo»?',
    options:[
      'Il vero amore di Zeno per il tabacco',
      'Il simbolo della malattia della volontà: Zeno non vuole davvero smettere ma ha bisogno di crederci — autoinganno, razionalizzazione, volontà debole',
      'Una metafora politica',
      'Il rapporto con il padre'
    ],
    correct:1,
    explanation:'L\'«ultima sigaretta» è il luogo in cui la volontà si illude di sé stessa. Ogni promessa solenne viene rotta, ma Zeno deve ricominciare a crederci. Meccanismo freudiano di razionalizzazione usato con consapevolezza ironica.'
  },
  { id:'sv20', type:'open', topic:'Coscienza · Cap. II',
    text:'Spiega il significato dello «schiaffo del padre» nel capitolo «La morte di mio padre». Perché manca l\'ironia in questo capitolo?',
    modelAnswer:'Il padre di Zeno è in agonia per una demenza cerebrale. Zeno tenta di tenerlo a letto seguendo i consigli del medico. Con un ultimo sforzo, alzando il braccio, il padre lo lascia cadere sulla guancia del figlio. Poi muore. Zeno non saprà mai il significato del gesto: punizione intenzionale per la sua inettitudine? O reazione inconsulta dell\'agonia? Il testo non risolve l\'ambiguità: questa irrisolvibilità È il punto. Nasce qui il complesso edipico di Zeno: conflitto irrisolto con la figura paterna. In questo capitolo manca la tipica ironia di Svevo: di fronte alla tragicità del gesto e della morte, la prospettiva ironica non potrebbe alleviare il senso di colpa. Il presente del narratore e il passato del protagonista si fondono dolorosamente — nessuna distanza comica è possibile.',
    keywords:['schiaffo','ambiguità','punizione vs agonia','complesso edipico','senso di colpa','manca l\'ironia','tragicità']
  },
  { id:'sv21', type:'mc', topic:'Coscienza · Cap. III',
    text:'In «La storia del mio matrimonio», cosa rappresenta Augusta, la moglie di Zeno?',
    options:[
      'La sua passione più grande, scelta tra le sorelle Malfenti',
      'La «salute» personificata: ottusa, ordinata, incapace di interrogarsi sulla vita — un ripiego che si rivela essere la scelta più sana',
      'Il vero motore della crisi di Zeno',
      'Una donna profondamente intellettuale'
    ],
    correct:1,
    explanation:'Zeno voleva Ada (rifiutato), poi Alberta (rifiutato), e per ripiego sposa la «brutta» Augusta. Scopre di amarla. Augusta incarna la «salute» borghese: regole semplici, ordine, abitudini. Sana è chi non si interroga.'
  },
  { id:'sv22', type:'tf', topic:'Coscienza · Cap. V',
    text:'Vero o falso: nel capitolo «Storia di un\'associazione commerciale», il forte Guido (cognato di Zeno) muore in un finto suicidio divenuto reale, mentre Zeno l\'inetto sopravvive e salva i conti — ribaltamento darwiniano completo.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Guido — il sano, il brillante — muore stupidamente. Zeno l\'inetto sopravvive e ha persino successo economico durante la guerra. Darwin è rovesciato: il debole vince.'
  },
  { id:'sv23', type:'open', topic:'Coscienza · Cap. VIII',
    text:'Analizza l\'apocalisse finale della «Coscienza di Zeno»: «La vita è inquinata alle radici». Come avviene il passaggio dall\'individuale al collettivo?',
    modelAnswer:'Nelle ultime pagine, scritte durante la Prima guerra mondiale, Zeno passa dal piano individuale a quello collettivo: non è lui il malato, è la civiltà intera. L\'uomo moderno ha costruito strumenti, macchine, armi, che ha messo nelle mani di chi non è abbastanza evoluto per usarli. La selezione naturale è saltata: prospereranno malati e malattie. La conclusione è apocalittica: un giorno un uomo, più malato degli altri, costruirà un ordigno capace di distruggere la Terra. E quella sarà l\'unica vera guarigione — la fine di tutto. La terra tornerà nebulosa. È un riso amaro: la malattia non è deviazione dalla norma, è la norma stessa della civiltà moderna. La guerra è la manifestazione massima di questa malattia collettiva.',
    keywords:['inquinata alle radici','dall\'individuale al collettivo','ordigno','apocalisse','malattia universale','selezione rovesciata','riso amaro']
  },
  { id:'sv24', type:'mc', topic:'Stile',
    text:'Come è definita la lingua di Svevo dalla critica?',
    options:[
      'Aulica e raffinata, modello di stile alto',
      'Vicina alla lingua quotidiana, con irregolarità e disarmonie sintattiche derivanti dalla pluralità linguistica triestina (italiano, tedesco, dialetto)',
      'Puramente dialettale',
      'Petrarchesca'
    ],
    correct:1,
    explanation:'Croce la definì «grigia e monotona». Ma l\'«irregolarità» è funzionale: mima la frammentazione psicologica dei personaggi. L\'«errore» diventa stile.'
  },
  { id:'sv25', type:'tf', topic:'Stile',
    text:'Vero o falso: ne «La coscienza di Zeno» Svevo usa il flusso di coscienza puro alla Joyce, con annullamento dei legami sintattici.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. In Svevo le associazioni di idee sono distinguibili, concluse, ordinate. È un monologo ragionante, non un flusso di coscienza joyciano puro. I tempi verbali segnalano il passaggio io narrante / io narrato.'
  },
  { id:'sv26', type:'mc', topic:'Confronti',
    text:'Quale formula riassume meglio la differenza tra Svevo e Pirandello sulla crisi dell\'io?',
    options:[
      'Sono identici nella diagnosi e nella soluzione',
      'Stessa diagnosi (l\'io non è un\'unità stabile) ma soluzioni diverse: Svevo trova nell\'ironia e nella scrittura un modo per convivere con la malattia; Pirandello dichiara la frammentazione insuperabile',
      'Pirandello è ottimista, Svevo pessimista',
      'Svevo si occupa solo di letteratura, Pirandello solo di teatro'
    ],
    correct:1,
    explanation:'Punto di contatto: la «visione distorta» di Emilio in Senilità è comparabile alle «maschere» pirandelliane. Ma le soluzioni divergono.'
  },
  { id:'sv27', type:'open', topic:'Confronti',
    text:'Confronta Zeno (Svevo) con un eroe romanzesco tradizionale dell\'Ottocento. Cosa cambia radicalmente?',
    modelAnswer:'L\'eroe ottocentesco (Manzoni, Balzac, Stendhal) è un personaggio coerente, con identità stabile, motivazioni chiare, evoluzione lineare; il narratore esterno è onnisciente e affidabile, fornisce la chiave morale. Zeno è l\'opposto: identità frammentata, autoinganno costante, racconta in prima persona ammettendo la propria inattendibilità. Non c\'è narratore esterno che corregga — il lettore è solo con un narratore che mente, soprattutto a sé stesso. La struttura non è lineare ma frammentata (tempo bergsoniano). Non c\'è una morale finale: la conclusione apocalittica nega ogni possibilità di redenzione individuale. Zeno è il personaggio della modernità: ironico, paradossale, contemporaneo della crisi novecentesca.',
    keywords:['narratore inattendibile','autoinganno','identità frammentata','no morale finale','tempo bergsoniano','crisi novecentesca']
  },
  { id:'sv28', type:'mc', topic:'Ultime opere',
    text:'Da quale novella tarda di Svevo viene rappresentato il tema dell\'autoinganno applicato alla vecchiaia e all\'eros?',
    options:[
      'Vino generoso (1926)',
      'La novella del buon vecchio e della bella fanciulla (1926)',
      'La rigenerazione (commedia)',
      'Il vecchione (1928, incompiuto)'
    ],
    correct:1,
    explanation:'«La novella del buon vecchio e della bella fanciulla»: un vecchio si dice che la sua relazione con una ragazza sarà solo amicizia, poi diventa amante, poi idealizza il desiderio come sentimento paterno. Meccanismo dell\'autoinganno applicato alla vecchiaia.'
  },
  { id:'sv29', type:'open', topic:'Sintesi',
    text:'Spiega come evolve la figura dell\'inetto attraverso i tre romanzi di Svevo: Alfonso, Emilio, Zeno.',
    modelAnswer:'L\'inetto si trasforma in tre tappe di consapevolezza crescente. (1) ALFONSO (Una vita, 1893) è l\'inetto inconsapevole: non capisce la propria inadeguatezza, si autoinganna fino al suicidio. Narratore in terza persona corregge la sua visione distorta. (2) EMILIO (Senilità, 1898) è l\'inetto consapevole ma immobile: sa di essere inadatto, distorce la realtà (Angiolina-angelo), ma non riesce a cambiare. Narratore in terza persona con focalizzazione interna. (3) ZENO (Coscienza, 1923) è l\'inetto che si racconta e che ironizza su se stesso: la consapevolezza diventa ironia. Narratore in prima persona inattendibile. Zeno paradossalmente vince — sopravvive, ha successo economico, mentre il forte Guido muore. Il darwinismo è rovesciato: la fortuna premia l\'inetto.',
    keywords:['Alfonso inconsapevole','Emilio consapevole immobile','Zeno ironico','3a vs 1a persona','narratore inattendibile','darwinismo rovesciato']
  },
  { id:'sv30', type:'tf', topic:'Sintesi',
    text:'Vero o falso: Svevo stesso affermò di aver scritto «un solo romanzo» in tutta la vita.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. In una lettera del 1927: «Forse s\'accorgerà che io non ho mai scritto che un romanzo solo in tutta la mia vita». I tre romanzi sono variazioni della stessa indagine sull\'inettitudine.'
  },

  /* --- Vita --- */
  { id:'sv31', type:'mc', topic:'Vita',
    text:'In quale città nasce Italo Svevo e in quale anno?',
    options:['A Milano nel 1870','A Trieste nel 1861','A Vienna nel 1858','A Venezia nel 1865'],
    correct:1,
    explanation:'Nasce Ettore Schmitz a Trieste nel 1861, in un ambiente multiculturale: italiano, tedesco, dialetto triestino. La famiglia è ebraica, in stretto contatto con la cultura mitteleuropea.'
  },
  { id:'sv32', type:'mc', topic:'Vita',
    text:'Dove si trasferisce Svevo nel 1873 per studiare e cosa vi legge?',
    options:[
      'A Parigi, dove legge i simbolisti francesi',
      'A Vienna, dove studia medicina',
      'In Germania, per un istituto commerciale riservato a studenti ebrei; vi legge Goethe, Schiller, Jean Paul, Shakespeare',
      'A Roma, per frequentare la Scuola Normale'
    ],
    correct:2,
    explanation:'Nel 1873 si trasferisce in Germania (istituto commerciale per studenti ebrei). Legge in lingua originale Goethe, Schiller, Jean Paul; in traduzione Shakespeare. La vocazione letteraria nasce in Germania.'
  },
  { id:'sv33', type:'tf', topic:'Vita',
    text:'Vero o falso: Svevo lavora come impiegato bancario per quasi vent\'anni dopo il fallimento dell\'attività paterna.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il padre si oppone alla vocazione letteraria; il fallimento dell\'attività paterna costringe Svevo a lavorare come impiegato presso la filiale triestina della Union Bank di Vienna per quasi vent\'anni. Continua a scrivere di nascosto.'
  },
  { id:'sv34', type:'mc', topic:'Vita',
    text:'In quale anno Svevo pubblica «Una vita» e con quale pseudonimo?',
    options:['1890, con il nome Ettore Schmitz','1893, con lo pseudonimo Italo Svevo','1898, con lo pseudonimo Emilio Brentani','1900, anonimo'],
    correct:1,
    explanation:'Nel 1893 pubblica «Una vita» con lo pseudonimo Italo Svevo. Il romanzo, pagato di tasca propria, non riscuote successo. Il nome è un programma che cristallizza la sua duplice formazione italiana e tedesca.'
  },
  { id:'sv35', type:'mc', topic:'Vita',
    text:'Cosa fa Svevo nel 1899 che cambia radicalmente la sua vita?',
    options:[
      'Pubblica La coscienza di Zeno',
      'Parte per Parigi',
      'Viene assunto nella fabbrica del suocero Veneziani e avvia una carriera commerciale',
      'Incontra Joyce per la prima volta'
    ],
    correct:2,
    explanation:'Nel 1899 viene assunto nella fabbrica di vernici del suocero Veneziani. Diventa industriale di successo — una carriera commerciale che lo porterà a viaggiare in tutta Europa. Continua a scrivere ma smette di pubblicare.'
  },
  { id:'sv36', type:'tf', topic:'Vita',
    text:'Vero o falso: dopo il fallimento di «Senilità» (1898) Svevo smette di scrivere completamente per 25 anni.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Smette di PUBBLICARE per 25 anni, ma continua a scrivere in privato. È durante questo «silenzio» che matura le idee che sfocieranno nella Coscienza di Zeno (1923).'
  },
  { id:'sv37', type:'mc', topic:'Vita',
    text:'Come si conclude la vita di Svevo nel 1928?',
    options:[
      'Muore a Trieste di vecchiaia nel proprio letto',
      'Muore il 13 settembre in un incidente stradale in provincia di Treviso, mentre lavorava al quarto romanzo incompiuto Il vecchione',
      'Muore a Vienna durante un\'operazione',
      'Scompare durante un viaggio in treno verso Parigi'
    ],
    correct:1,
    explanation:'Muore il 13 settembre 1928 in un incidente stradale in provincia di Treviso. Stava lavorando al quarto romanzo, Il vecchione/Il vegliardo. Restano solo cinque frammenti.'
  },

  /* --- Glossario / Poetica --- */
  { id:'sv38', type:'mc', topic:'Poetica',
    text:'Come definisce Svevo l\'inetto nel contesto della logica darwiniana?',
    options:[
      'L\'inetto è semplicemente un fallito privo di intelligenza',
      'L\'inetto perde nella vita pratica ma percepisce più profondamente: la sua malattia è anche una forma di lucidità',
      'L\'inetto è un superuomo nietzschiano che rifiuta la società',
      'L\'inetto è l\'eroe della lotta di classe marxista'
    ],
    correct:1,
    explanation:'L\'inetto sveviano è un uomo debole nell\'azione ma dotato di percezione più acuta. La sua inadeguatezza pratica si accompagna a una lucidità che i personaggi «sani» non possiedono. La malattia come forma di conoscenza.'
  },
  { id:'sv39', type:'mc', topic:'Poetica',
    text:'Da quale filosofo Svevo deriva la tendenza dei personaggi all\'autoinganno e l\'immutabilità del carattere?',
    options:['Nietzsche','Marx','Schopenhauer','Bergson'],
    correct:2,
    explanation:'Schopenhauer è il principale ispiratore. Da lui: la volontà cieca che supera la ragione, l\'autoinganno come costruzione di narrative rassicuranti, l\'immutabilità del carattere. I personaggi di Svevo non cambiano nonostante le esperienze.'
  },
  { id:'sv40', type:'tf', topic:'Poetica',
    text:'Vero o falso: Svevo usa le categorie di Freud per costruire un romanzo che demolisce la fiducia nella psicanalisi come terapia.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il paradosso fondamentale: Svevo usa il lessico freudiano (autoinganno, rimozione, atti mancati, lapsus, complesso edipico) per smontarlo dall\'interno attraverso l\'ironia di Zeno. La psicanalisi non può curare — può solo essere materiale letterario.'
  },
  { id:'sv41', type:'mc', topic:'Poetica',
    text:'Cosa intende Svevo con la formula «La vita sarà letteraturizzata» (Il vecchione)?',
    options:[
      'Che la letteratura deve descrivere la vita con realismo',
      'Che la scrittura è la terapia alternativa alla psicanalisi: dà valore esistenziale a situazioni che altrimenti finirebbero nell\'oblio',
      'Che tutti gli uomini dovranno diventare scrittori',
      'Che la vita quotidiana è già di per sé un romanzo'
    ],
    correct:1,
    explanation:'«Non colui che visse ma colui che descrissi. La vita sarà letteraturizzata.» La scrittura dà valore esistenziale a situazioni altrimenti obliabili. È la terapia alternativa alla psicanalisi: non guarisce ma permette di convivere consapevolmente con la malattia.'
  },
  { id:'sv42', type:'mc', topic:'Poetica',
    text:'Come Svevo applica il concetto bergsoniano di «tempo come durata» alla Coscienza di Zeno?',
    options:[
      'Usando un orologio come simbolo ricorrente nel romanzo',
      'Descrivendo il tempo in modo scientifico e lineare',
      'Traducendolo in un tempo misto: il presente di Zeno-narratore e il passato di Zeno-protagonista coesistono senza gerarchie, seguendo la coscienza non il calendario',
      'Eliminando completamente le date dal romanzo'
    ],
    correct:2,
    explanation:'Bergson: il tempo interiore (durata) non è lineare. In Zeno: il presente del narratore (57 anni, 1916) e il passato del protagonista (giovinezza/maturità) coesistono. Il racconto segue la coscienza, non il calendario — nessun ordine cronologico lineare.'
  },
  { id:'sv43', type:'open', topic:'Poetica',
    text:'Spiega il ribaltamento darwiniano nella Coscienza di Zeno.',
    modelAnswer:'Darwin divide il mondo in forti (lottatori) e deboli (sconfitti). Svevo eredita questa opposizione e la traduce in sani/malati. I personaggi «sani» (Macario in Una vita, Stefano Balli in Senilità, Guido in Zeno) vincono nella realtà pratica. Ma il narratore li guarda con ironia: la loro salute è spesso superficialità, la loro forza è ottusità. Nella Coscienza di Zeno il ribaltamento è completo: Zeno (l\'inetto) sopravvive, ha successo economico e familiare; Guido (il forte e brillante) si suicida per i debiti. Darwin è ribaltato: l\'inetto vince paradossalmente.',
    keywords:['Darwin','forti e deboli','sani e malati','Guido muore','Zeno sopravvive','ribaltamento paradossale','ironia']
  },

  /* --- Stile --- */
  { id:'sv44', type:'mc', topic:'Stile',
    text:'Perché la prosa di Svevo contiene irregolarità e disarmonie sintattiche?',
    options:[
      'Perché non conosce bene l\'italiano',
      'Per imitare lo stile di Zola',
      'La prosa quotidiana con irregolarità mima la frammentazione psicologica dei personaggi — l\'«errore» è diventato stile',
      'Per raggiungere un pubblico popolare'
    ],
    correct:2,
    explanation:'Svevo cresce tra parlate diverse (triestino, italiano, tedesco) — autodidatta con formazione eterogenea. La sua prosa irregolare non è un difetto: è la traduzione stilistica della frammentazione psicologica. L\'irregolarità della lingua mima l\'irregolarità dell\'io.'
  },
  { id:'sv45', type:'tf', topic:'Stile',
    text:'Vero o falso: nelle opere narrate in terza persona (Una vita, Senilità) Svevo usa il discorso indiretto libero per calarsi nella coscienza dei personaggi.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Il discorso indiretto libero lascia spazio ai pensieri e alla coscienza dei personaggi senza le virgolette del discorso diretto: fusione fluida tra voce narrante e coscienza del personaggio.'
  },
  { id:'sv46', type:'mc', topic:'Stile',
    text:'Qual è la differenza narrativa principale tra Una vita/Senilità e La coscienza di Zeno?',
    options:[
      'Una vita e Senilità sono più lunghe di Zeno',
      'Nelle prime due il narratore in terza persona corregge la visione distorta del protagonista; in Zeno la funzione correttiva scompare — il lettore è lasciato solo con l\'autoinganno del narratore inattendibile',
      'Zeno è scritto in dialetto triestino',
      'Nelle prime due è usata la prima persona; in Zeno la terza'
    ],
    correct:1,
    explanation:'Nelle prime due opere: narratore terza persona distaccato che può smentire la visione distorta del protagonista, fornendo al lettore una chiave interpretativa diversa. In Zeno: narratore in prima persona inattendibile — il lettore è disorientato senza guida superiore.'
  },

  /* --- Opere --- */
  { id:'sv47', type:'mc', topic:'Opere · Una vita',
    text:'Come si conclude la vicenda di Alfonso Nitti in «Una vita»?',
    options:[
      'Trova un nuovo amore e ricomincia la vita',
      'Riesce a coronare il sogno di sposare Annetta',
      'Incapace di reagire al ritorno in banca dopo il viaggio al paese, si suicida',
      'Emigra in America con una nuova identità'
    ],
    correct:2,
    explanation:'Alfonso torna al paese natale quando la madre è morente; al ritorno trova Annetta fidanzata con Macario. Incapace di reagire, si suicida. Alfonso è l\'inetto inconsapevole: non capisce la propria inadeguatezza, si autoinganna fino alla fine.'
  },
  { id:'sv48', type:'mc', topic:'Opere · Senilità',
    text:'Qual era il titolo originale di «Senilità» e cosa indica?',
    options:[
      '«Il romanzo di Emilio» — riferimento al protagonista',
      '«Il carnevale di Emilio» — indica la natura illusoria del rapporto con Angiolina',
      '«L\'inetto consapevole» — sintesi tematica',
      '«La vita grigia» — il paesaggio triestino come simbolo'
    ],
    correct:1,
    explanation:'Titolo originale: «Il carnevale di Emilio». Il titolo «Senilità» è rivelatore: Emilio è psicologicamente senile nonostante l\'età — incapace di crescita, bloccato nella stessa immaturità. La senilità non è età anagrafica ma stato psicologico.'
  },
  { id:'sv49', type:'mc', topic:'Opere · Senilità',
    text:'Chi sono i «sani» e i «malati» in «Senilità»?',
    options:[
      'Malati: tutti; sani: nessuno',
      'Perdenti/malati: Emilio e Amalia; vittoriosi/sani: Angiolina e Stefano Balli',
      'Sano: solo Emilio alla fine; malati: tutti gli altri',
      'Non c\'è distinzione sani/malati in Senilità'
    ],
    correct:1,
    explanation:'Senilità: perdenti/malati sono Emilio (inetto consapevole ma immobile) e Amalia (che muore). Vittoriosi/sani sono Angiolina (spregiudicata, tradisce Emilio continuamente) e Stefano Balli (forte, conquista anche Amalia). Schema sano/malato chiaro e non ribaltato come in Zeno.'
  },
  { id:'sv50', type:'mc', topic:'Opere · La coscienza di Zeno',
    text:'Chi scrive la Prefazione della Coscienza di Zeno e perché la pubblica?',
    options:[
      'Zeno la scrive da vecchio per lasciare un testamento',
      'Il Dottor S. (lo psicanalista), che pubblica le memorie di Zeno per vendetta dopo che Zeno ha interrotto la terapia',
      'La moglie Augusta, per onorare la memoria del marito',
      'James Joyce, per far conoscere il capolavoro di Svevo in Italia'
    ],
    correct:1,
    explanation:'La Prefazione è scritta dal Dottor S. (psicanalista): è l\'unico testo non scritto da Zeno. Il dottore, dopo che Zeno ha interrotto la terapia, pubblica le memorie per vendetta. Questo dispositivo narrativo è il meccanismo che mette in moto tutto il romanzo.'
  },
  { id:'sv51', type:'mc', topic:'Opere · La coscienza di Zeno',
    text:'Cosa dimostra il capitolo sul matrimonio (Cap. 3) nella struttura della Coscienza di Zeno?',
    options:[
      'Che Zeno è un marito innamorato e fedele',
      'Il paradosso che la fortuna premia l\'inetto: Zeno sposa per caso Augusta (la meno attraente delle sorelle Malfenti) e la scelta si rivela la migliore',
      'Che i matrimoni borghesi sono sempre basati sull\'interesse',
      'Che Zeno è deliberatamente crudele con le donne'
    ],
    correct:1,
    explanation:'Cap. 3 — Il matrimonio: Zeno vuole una delle sorelle Malfenti (non Augusta), ma per una serie di circostanze fortuite sposa Augusta. La scelta casuale si rivela la più felice. «La fortuna premia l\'inetto»: schema del ribaltamento darwiniano già in azione.'
  },
  { id:'sv52', type:'mc', topic:'Opere · La coscienza di Zeno',
    text:'Cosa accade a Guido nel capitolo 5 (L\'associazione commerciale)?',
    options:[
      'Vince in borsa e diventa ricchissimo',
      'Si suicida per i debiti commerciali, e Zeno (l\'inetto) salva i conti e sopravvive',
      'Scappa con i soldi della società',
      'Emigra in America dopo il fallimento'
    ],
    correct:1,
    explanation:'Cap. 5: Guido (brillante e forte, cognato di Zeno) gestisce male gli affari e accumula debiti. Si suicida. Zeno (l\'inetto) salva i conti. Darwin definitivamente ribaltato: il forte muore, l\'inetto sopravvive e vince.'
  },
  { id:'sv53', type:'tf', topic:'Opere · La coscienza di Zeno',
    text:'Vero o falso: nell\'ultimo capitolo (Cap. 6) della Coscienza di Zeno, l\'io narrante e l\'io narrato coincidono, scomparendo la distanza ironica.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Nei capitoli precedenti c\'è distanza ironica: Zeno-narratore (a 57 anni) guarda dall\'alto il giovane Zeno. Nell\'ultimo capitolo (1915-1916, Prima Guerra Mondiale) i due punti di vista coincidono — la distanza ironica scompare di fronte all\'apocalisse.'
  },

  /* --- Testi --- */
  { id:'sv54', type:'mc', topic:'Testi · Il vizio del fumo',
    text:'Cosa simboleggia la struttura circolare del capitolo «Il fumo» nella Coscienza di Zeno?',
    options:[
      'Il progressivo miglioramento della salute di Zeno',
      'La struttura circolare e contraddittoria come la mente di Zeno: il capitolo mima la psicologia che descrive',
      'La struttura del vizio fisico del fumo',
      'Il ciclo delle stagioni a Trieste'
    ],
    correct:1,
    explanation:'Il capitolo non è lineare ma circolare e contraddittorio — come la mente del protagonista. La struttura è contenuto: il testo mima la psicologia che descrive. Ogni «ultima sigaretta» riporta al punto di partenza.'
  },
  { id:'sv55', type:'mc', topic:'Testi · Il vizio del fumo',
    text:'Cosa dimostra il meccanismo delle «ultime sigarette»?',
    options:[
      'La forza di volontà di Zeno di fronte alla dipendenza',
      'La malattia della volontà: Zeno sa di non voler smettere ma ha bisogno di crederlo. La sigaretta è il simbolo della volontà che si illude di sé stessa',
      'Il potere curativo della psicanalisi',
      'L\'influenza negativa della famiglia di Zeno'
    ],
    correct:1,
    explanation:'L\'«ultima sigaretta» è il simbolo dell\'autoinganno: Zeno sa perfettamente di non voler smettere ma si racconta una storia diversa. La volontà è malata — né libera né pienamente compromessa. È la «malattia della volontà» schopenhaueriana tradotta in gesto quotidiano.'
  },
  { id:'sv56', type:'mc', topic:'Testi · Lo schiaffo del padre',
    text:'Perché «Lo schiaffo del padre» è il capitolo più tragico senza ironia?',
    options:[
      'Perché è il capitolo più lungo e difficile tecnicamente',
      'Perché il present del narratore e il passato del protagonista si fondono dolorosamente: Zeno non potrà mai sapere se lo schiaffo fu intenzionale o solo l\'agonia del moribondo',
      'Perché descrive la morte del padre in modo naturalistico',
      'Perché è l\'unico capitolo scritto con la punteggiatura regolare'
    ],
    correct:1,
    explanation:'Lo schiaffo è irrisolvibile: fu punizione intenzionale o reazione inconsulta dell\'agonia? Il testo non risolve. Il presente del narratore e il passato del protagonista si fondono dolorosamente — la tipica ironia di Svevo scompare. «Egli era morto ed io non potevo più provargli la mia innocenza!»'
  },
  { id:'sv57', type:'mc', topic:'Testi · La salute di Augusta',
    text:'Cosa dimostra il paradosso di Augusta nella Coscienza di Zeno?',
    options:[
      'Che la salute fisica è la vera condizione della felicità',
      'Che la «salute» di chi non si interroga è una forma di cecità — il malato (Zeno) percepisce più del sano (Augusta)',
      'Che le donne borghesi sono più sagge degli uomini',
      'Che il matrimonio è la terapia più efficace'
    ],
    correct:1,
    explanation:'Augusta è la salute personificata: regole semplici, vivere nel presente senza interrogarsi. Ma la sua salute è mancanza di consapevolezza. Zeno la analizza: «m\'accorgo che, analizzandola, la converto in malattia». Il malato percepisce più del sano — schema di tutto il romanzo.'
  },
  { id:'sv58', type:'mc', topic:'Testi · La vita inquinata',
    text:'Qual è la «profezia apocalittica» dell\'ultimo capitolo della Coscienza di Zeno?',
    options:[
      'Che la guerra finirà presto e tornerà la pace',
      'Che la psicanalisi guarirà l\'umanità',
      'Un giorno un uomo, più malato degli altri, costruirà un ordigno capace di distruggere la Terra — e quella sarà l\'unica vera guarigione: la fine di tutto',
      'Che Zeno diventerà il più sano di tutti'
    ],
    correct:2,
    explanation:'Nell\'ultimo capitolo Zeno giunge alla conclusione radicale: la malattia non è sua ma della civiltà intera. La profezia: un uomo, più malato degli altri, costruirà l\'ordigno definitivo che distruggerà la Terra. È l\'unica «guarigione» possibile. Zeno ride amaro.'
  },
  { id:'sv59', type:'open', topic:'Testi · La vita inquinata',
    text:'Spiega il ribaltamento di prospettiva che compie Svevo nel finale della Coscienza di Zeno.',
    modelAnswer:'Nel corso del romanzo il problema sembra essere Zeno: è lui l\'inetto, lui il malato. Nel finale Svevo compie un definitivo ribaltamento: non è Zeno il problema, è la civiltà intera. L\'uomo moderno ha costruito strumenti, macchine, armi che ha messo nelle mani di chi non è abbastanza evoluto per usarli. La malattia non è una deviazione dalla norma — è la norma stessa della civiltà moderna. L\'inetto non è più l\'eccezione ma il rappresentante più lucido di una condizione universale. La conclusione è apocalittica: la sola guarigione possibile è la fine di tutto.',
    keywords:['civiltà intera malata','ribaltamento','ordigno','unica guarigione','norma','modernità','apocalisse']
  },

  /* --- Confronti --- */
  { id:'sv60', type:'mc', topic:'Confronti · Joyce',
    text:'In cosa convergono tecnicamente Svevo e Joyce nella loro opera maggiore?',
    options:[
      'Entrambi usano il verso libero in testi poetici',
      'Entrambi sperimentano il flusso di coscienza, la destrutturazione del tempo narrativo, il narratore inattendibile — L\'Ulisse e la Coscienza di Zeno escono in anni paralleli (1922-1923)',
      'Entrambi ambientano le opere a Parigi',
      'Entrambi usano il dialetto locale come lingua principale'
    ],
    correct:1,
    explanation:'Convergenza modernista: Joyce (Ulisse, 1922) e Svevo (Coscienza di Zeno, 1923) — capolavori paralleli del modernismo europeo. Entrambi sperimentano flusso di coscienza, destrutturazione del tempo, narratore inattendibile. Joyce fu il tramite per la fama internazionale di Svevo.'
  },
  { id:'sv61', type:'mc', topic:'Confronti · Proust',
    text:'Qual è la differenza fondamentale tra Svevo e Proust sul tema della memoria?',
    options:[
      'Proust non usa la memoria; Svevo la usa sempre',
      'In Proust la memoria involontaria salva (tempo ritrovato); in Svevo la memoria è strutturalmente ingannevole e distorta — un\'altra forma di autoinganno',
      'Svevo ha memoria più vasta di Proust',
      'Non c\'è differenza: entrambi credono nella memoria come salvezza'
    ],
    correct:1,
    explanation:'Differenza fondamentale: in Proust la madeleine attiva la memoria involontaria e permette un recupero autentico del tempo perduto — la memoria salva. In Svevo la memoria è strutturalmente inattendibile: ogni ricordo è già una rielaborazione distorta, un\'altra forma di autoinganno.'
  },
  { id:'sv62', type:'mc', topic:'Confronti · Pirandello',
    text:'Svevo e Pirandello condividono la stessa diagnosi della modernità ma offrono risposte diverse. Qual è?',
    options:[
      'Entrambi vedono il teatro come soluzione',
      'Svevo trova soluzione ironica (scrittura come convivenza con la malattia); Pirandello non trova soluzione (la frammentazione dell\'io è insuperabile)',
      'Pirandello trova pace; Svevo non trova soluzione',
      'Entrambi trovano la soluzione nella fuga dalla società'
    ],
    correct:1,
    explanation:'Stessa diagnosi (l\'io non è unità stabile) ma risposte diverse. Svevo: l\'io è frammentato dalla incapacità di agire e dalla memoria ingannevole; soluzione ironica: la scrittura come convivenza. Pirandello: l\'io è frammentato dalle maschere sociali; nessuna soluzione: la frammentazione è insuperabile.'
  },
  { id:'sv63', type:'mc', topic:'Confronti · Schopenhauer',
    text:'Come si manifesta l\'influenza di Schopenhauer nella volontà malata di Zeno?',
    options:[
      'Zeno usa la volontà per raggiungere i propri obiettivi con determinazione',
      'La volontà razionale di Zeno (smettere di fumare, agire nella vita) è continuamente sconfitta da pulsioni più profonde — esattamente come la volontà cieca schopenhaueriana supera la ragione',
      'Zeno rifiuta ogni forma di volontà e vive passivamente',
      'La volontà di Zeno è assente — egli è puro caso'
    ],
    correct:1,
    explanation:'Schopenhauer: l\'uomo è dominato da una volontà irrazionale che supera la ragione. In Zeno: la volontà razionale (smettere di fumare, fare buoni propositi) è continuamente sconfitta da pulsioni più profonde. Le «ultime sigarette» sono la perfetta traduzione narrativa della volontà cieca schopenhaueriana.'
  },
  { id:'sv64', type:'open', topic:'Confronti · Svevo e Pirandello',
    text:'Confronta la visione dell\'io in Svevo e in Pirandello in almeno tre aspetti.',
    modelAnswer:'(1) Concezione: Svevo — l\'io è inetto, diviso tra volontà e incapacità di agire; Pirandello — l\'io è frammentato, molteplice, senza un «originale» dietro le maschere. (2) Relazione con Freud: Svevo vicino ma critico (usa Freud per smontarlo dall\'interno); Pirandello distante (nessun inconscio, nessuna terapia). (3) Soluzione della crisi: Svevo ironica (la scrittura come convivenza con la malattia); Pirandello nessuna (la frammentazione è insuperabile). (4) Forma narrativa: Svevo il diario inattendibile e il narratore inaffidabile; Pirandello il monologo ragionante e il dialogo ossessivo.',
    keywords:['inetto','volontà','maschere sociali','Freud critica','scrittura','nessuna soluzione','narratore inattendibile','monologo']
  },

  /* --- Sintesi --- */
  { id:'sv65', type:'mc', topic:'Sintesi',
    text:'Come descrive Svevo il contesto triestino come elemento della sua formazione?',
    options:[
      'Trieste è una città culturalmente isolata e provinciale',
      'Trieste è una città di confine: italiana per lingua e cultura, asburgica per governo, mitteleuropea per mentalità — questa posizione di margine gli dà la distanza ironica per analizzare la borghesia',
      'Trieste è una città solo italiana, senza contaminazioni straniere',
      'Trieste è la capitale dell\'Impero Austro-Ungarico'
    ],
    correct:1,
    explanation:'Trieste è una città di confine: italiana + asburgica + mitteleuropea. Componente ebraica, cultura tedesca, ambiente mercantile. Questa posizione di «margine» offre a Svevo la distanza ironica necessaria per analizzare la borghesia senza farne parte in modo acritico.'
  },
  { id:'sv66', type:'open', topic:'Sintesi',
    text:'Costruisci la risposta orale: «Chi è Svevo e quale posto occupa nella narrativa italiana del Novecento?».',
    modelAnswer:'Italo Svevo (Ettore Schmitz, 1861-1928) è il più grande narratore italiano del primo Novecento, scoperto tardi ma fondamentale. Nasce a Trieste, cresce in un ambiente multiculturale (italiano, tedesco, ebraico), lavora come impiegato bancario e poi industriale. La sua opera si articola in tre romanzi (Una vita 1893, Senilità 1898, La coscienza di Zeno 1923) che esplorano il personaggio dell\'inetto — uomo debole ma lucido. Il capolavoro è La coscienza di Zeno: narratore inattendibile, tempo frammentato, dialogo critico con Freud. Influenze: Schopenhauer, Bergson, Darwin, Joyce, Proust. Converge con il modernismo europeo. Il riconoscimento arriva tardi (grazie a Joyce) ma è definitivo. Posizione nella letteratura: innovatore radicale che rompe con il verismo e anticipa la narrativa del Novecento.',
    keywords:['Trieste','inetto','trilogia','narratore inattendibile','Schopenhauer','Bergson','Joyce','modernismo','La coscienza di Zeno']
  },

  /* --- Extra (u67-sv90 se serve completare fino a 90) --- */
  { id:'sv67', type:'mc', topic:'Opere',
    text:'Qual è la struttura dei sei capitoli tematici della Coscienza di Zeno?',
    options:[
      'Sei capitoli in ordine cronologico dalla nascita alla vecchiaia di Zeno',
      'Prefazione + Preambolo + 6 capitoli tematici: Il fumo, La morte di mio padre, Il matrimonio, La moglie e l\'amante, L\'associazione commerciale, Psico-analisi',
      'Tre parti di due capitoli ciascuna, in ordine alfabetico',
      'Sei sezioni senza titolo in ordine casuale'
    ],
    correct:1,
    explanation:'Struttura: Prefazione (Dottor S.) + Preambolo (Zeno) + 6 capitoli tematici: Il fumo / La morte di mio padre / Il matrimonio / La moglie e l\'amante / L\'associazione commerciale / Psico-analisi. I capitoli sono tematici, non cronologici.'
  },
  { id:'sv68', type:'tf', topic:'Vita',
    text:'Vero o falso: Svevo legge Freud e traduce in italiano «Il sogno» nel 1908.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Nel 1908 inizia a leggere Freud — evento epocale per Svevo scrittore. Traduce in italiano Il sogno (1901). Poi entra in contatto con lo psicanalista triestino Edoardo Weiss, formatosi alla scuola di Freud.'
  },
  { id:'sv69', type:'mc', topic:'Opere',
    text:'Cos\'è «Vino generoso» (1926) e che temi svolge?',
    options:[
      'Una descrizione dei vini triestini di fine Ottocento',
      'Un racconto in cui un uomo trasgredisce la dieta, beve molto vino, segue una notte di incubi rivelatori dell\'inconscio — il sogno come strumento freudiano di conoscenza',
      'Un romanzo breve sulla produzione vinicola',
      'Un articolo giornalistico sul commercio del vino'
    ],
    correct:1,
    explanation:'Vino generoso (racconto, 1926): un uomo trasgredisce la dieta e beve. Segue una notte di incubi rivelatori dell\'inconscio. Il sogno come strumento freudiano di conoscenza di sé. Meccanismo dell\'autoinganno applicato al cibo e all\'alcol.'
  },
  { id:'sv70', type:'mc', topic:'Testi',
    text:'Cosa dimostra la novella «Il buon vecchio e la bella fanciulla» (1926)?',
    options:[
      'Che i vecchi hanno più saggezza dei giovani',
      'Che le relazioni tra anziani e giovani sono sempre paterne',
      'Il meccanismo dell\'autoinganno applicato alla vecchiaia e all\'eros: un vecchio si dice che la sua relazione sarà solo amicizia, poi diventa amante, infine idealizza il desiderio come sentimento paterno',
      'Che l\'amore vero supera la distanza anagrafica'
    ],
    correct:2,
    explanation:'Il racconto applica il meccanismo dell\'autoinganno alla vecchiaia e all\'eros. Il vecchio costruisce narrative rassicuranti su sé stesso (amicizia → amante → sentimento paterno) man mano che il fisico non regge più. Il tipico autoinganno sveviano in un nuovo contesto.'
  },
  { id:'sv71', type:'mc', topic:'Poetica',
    text:'Come usa Svevo Nietzsche nella costruzione dei personaggi?',
    options:[
      'Come modello positivo del superuomo da imitare',
      'Come critico della borghesia e dei falsi miti: per Svevo Nietzsche è strumento di critica, non teorizzatore del superuomo',
      'Come fonte del pessimismo cosmico',
      'Come base della teoria del tempo come durata'
    ],
    correct:1,
    explanation:'Svevo usa Nietzsche come critico dei falsi miti borghesi e della pluralità dell\'io — non come teorizzatore del superuomo (categoria che Svevo considera inapplicabile). La critica dei valori borghesi è il contributo nietzschiano alla sua narrativa.'
  },
  { id:'sv72', type:'mc', topic:'Poetica',
    text:'Come Svevo applica Marx alla propria visione del mondo?',
    options:[
      'Come strumento di analisi della crisi dell\'uomo nella società capitalistica, ma elaborando un socialismo umanitario che rifiuta la fiducia marxiana nell\'azione organizzata delle masse',
      'Come base per la rivoluzione operaia dei personaggi',
      'Come fonte del materialismo storico che spiega i romanzi',
      'Svevo non usa Marx in alcun modo'
    ],
    correct:0,
    explanation:'Svevo usa Marx per analizzare la crisi nella società capitalistica, ma elabora un socialismo umanitario — rifiuta la fiducia marxiana nell\'azione organizzata delle masse. La critica della borghesia è marxiana; la diffidenza verso le soluzioni collettive è sveviana.'
  },
  { id:'sv73', type:'mc', topic:'Stile',
    text:'Con quale corrente del modernismo europeo converge La coscienza di Zeno?',
    options:[
      'Con il futurismo italiano di Marinetti',
      'Con il naturalismo di Zola',
      'Con Joyce (Ulisse) e Proust (Alla ricerca del tempo perduto) — flusso di coscienza, tempo frammentato, narratore inattendibile',
      'Con il simbolismo francese di Baudelaire'
    ],
    correct:2,
    explanation:'La coscienza di Zeno converge con il modernismo europeo: Joyce (Ulisse, 1922) e Proust (Alla ricerca, iniziata 1913). Elementi comuni: flusso di coscienza, tempo frammentato e non lineare, narratore inattendibile. Svevo anticipa e partecipa al modernismo senza averne la consapevolezza teorica di Joyce.'
  },
  { id:'sv74', type:'open', topic:'Glossario',
    text:'Spiega il concetto di «io narrante / io narrato» nella Coscienza di Zeno e perché nell\'ultimo capitolo la distanza scompare.',
    modelAnswer:'L\'io narrante è Zeno a 57 anni (1916) che scrive dal presente; l\'io narrato è il giovane/adulto Zeno che agisce nel passato. Tra i due c\'è una distanza ironica: il Zeno-narratore guarda il Zeno-protagonista con distacco critico e autoironia, smascherandone gli autoinganni. Questa distanza è il motore del romanzo. Nell\'ultimo capitolo (1915-1916, Prima Guerra Mondiale) i due punti di vista coincidono: il presente del narratore raggiunge il presente degli eventi narrati, e la distanza ironica scompare di fronte all\'apocalisse. La voce di Zeno perde la leggerezza ironica e diventa diretta e angosciata.',
    keywords:['io narrante','io narrato','57 anni','distanza ironica','motore del romanzo','ultimo capitolo','coincidono','apocalisse']
  },
  { id:'sv75', type:'mc', topic:'Glossario',
    text:'Cosa intende Svevo con «autoinganno» come meccanismo psicologico?',
    options:[
      'Un errore accidentale di valutazione',
      'Il meccanismo per cui i personaggi costruiscono narrazioni rassicuranti su sé stessi pur conoscendo la propria realtà — razionalizzazione e rimozione à la Freud ma usati ironicamente',
      'Una forma di amnesia psicogena',
      'Il rifiuto cosciente della realtà'
    ],
    correct:1,
    explanation:'L\'autoinganno è il meccanismo centrale: i personaggi sanno la verità ma costruiscono storie alternative per non doverla affrontare. In Zeno: sa di non voler smettere di fumare ma si racconta di volerlo fare. Usa il lessico freudiano (razionalizzazione, rimozione) ma ironicamente — per smontarlo dall\'interno.'
  },
  { id:'sv76', type:'mc', topic:'Poetica',
    text:'Cosa distingue la visione di Svevo sulla letteratura rispetto al verismo e all\'estetismo?',
    options:[
      'Svevo condivide l\'oggettività verista e l\'estetismo dannunziano',
      'Svevo non crede nel letterato profeta di valori assoluti, non condivide l\'oggettività verista né l\'estetismo; la letteratura è strumento di analisi interiore con funzione terapeutica',
      'Svevo segue il naturalismo di Zola senza variazioni',
      'Svevo considera la letteratura solo un intrattenimento'
    ],
    correct:1,
    explanation:'Svevo si distanzia dal verismo (nessuna oggettività) e dall\'estetismo (nessun culto della forma): per lui la letteratura è strumento di analisi interiore, ricerca privata con funzione terapeutica. È l\'alternativa alla psicanalisi — non guarisce ma permette di convivere con la malattia.'
  },
  { id:'sv77', type:'mc', topic:'Opere',
    text:'Come definisce Svevo l\'inetto nella trilogia — tre varianti?',
    options:[
      'Alfonso = inetto consapevole; Emilio = inetto narrante; Zeno = inetto inconsapevole',
      'Alfonso = inetto inconsapevole; Emilio = inetto consapevole ma immobile; Zeno = inetto ironico e narrante',
      'Tutti e tre sono inetti allo stesso modo',
      'Alfonso = inetto giovane; Emilio = inetto maturo; Zeno = inetto anziano'
    ],
    correct:1,
    explanation:'Trilogia a tre varianti: Alfonso (Una vita) = inetto inconsapevole, non capisce la propria inadeguatezza fino alla morte. Emilio (Senilità) = inetto consapevole ma immobile, sa ma non cambia. Zeno (Coscienza di Zeno) = inetto ironico e narrante, si racconta con distanza critica e autoironia.'
  },
  { id:'sv78', type:'tf', topic:'Vita',
    text:'Vero o falso: James Joyce incontra Svevo a Trieste nel 1907 come insegnante di inglese e promuove le sue opere in Francia.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Joyce arriva a Trieste nel 1907 come insegnante di inglese. Svevo è tra i suoi allievi. Joyce rimane colpito dalle capacità letterarie e promuove le opere di Svevo in Francia, dove la Coscienza di Zeno viene recensita favorevolmente prima che in Italia.'
  },
  { id:'sv79', type:'mc', topic:'Confronti',
    text:'Come si differenziano le relazioni di Svevo e Pirandello con il proprio contesto geografico?',
    options:[
      'Entrambi sono romani di nascita e formazione',
      'Svevo: Trieste — margine della civiltà asburgica, crocevia culturale che dà distanza ironica; Pirandello: Sicilia e Roma — Italia borghese e provinciale',
      'Solo Svevo ha una dimensione geografica significativa',
      'Pirandello è triestino e Svevo è siciliano'
    ],
    correct:1,
    explanation:'Svevo: Trieste — margine della civiltà asburgica, crocevia tra cultura italiana, tedesca, ebraica. La posizione di confine dà distanza ironica. Pirandello: Sicilia e poi Roma — Italia borghese e provinciale. Il contesto geografico è centrale per comprendere la diversa prospettiva dei due.'
  },
  { id:'sv80', type:'mc', topic:'Sintesi',
    text:'Qual è il significato della frase «L\'inetto vince, paradossalmente, alla fine. La malattia non è una deviazione dalla norma: è la norma»?',
    options:[
      'Che alla fine la salute è impossibile per tutti',
      'Che Zeno (inetto) sopravvive, ha successo, mentre il forte Guido muore; e che la malattia moderna non è l\'eccezione — è la condizione normale dell\'uomo contemporaneo',
      'Che la medicina non funziona mai',
      'Che i personaggi deboli sono sempre i protagonisti dei romanzi'
    ],
    correct:1,
    explanation:'La sintesi della poetica sveviana: Zeno sopravvive e vince (ribaltamento darwiniano). E nell\'ultimo capitolo Svevo generalizza: la malattia non è una deviazione individuale ma la norma della civiltà moderna. L\'inetto non è l\'eccezione — è il rappresentante più lucido di una condizione universale.'
  },
  { id:'sv81', type:'open', topic:'Opere · La coscienza di Zeno',
    text:'Spiega come si collega il meccanismo del «complesso edipico» nello schiaffo del padre.',
    modelAnswer:'La nevrosi di Zeno ha origine edipica: il conflitto irrisolto con la figura paterna. Il padre è in agonia per demenza cerebrale. Con un gesto supremo alza il braccio e lo lascia cadere sulla guancia del figlio. Poi muore. Zeno non saprà mai il significato autentico del gesto — fu punizione intenzionale o reazione inconsulta dell\'agonia? Il testo non risolve: questa irrisolvibilità è il punto. Lo schiaffo cristallizza tutto il conflitto irrisolto in un gesto che non potrà mai essere chiarito. Zeno porta questa ambiguità per sempre: «Egli era morto ed io non potevo più provargli la mia innocenza!»',
    keywords:['complesso edipico','conflitto irrisolto','schiaffo ambiguo','punizione o agonia','irrisolvibilità','innocenza','padre']
  },
  { id:'sv82', type:'mc', topic:'Glossario',
    text:'Qual è la differenza tra l\'inetto di Senilità (Emilio) e quello di Una vita (Alfonso)?',
    options:[
      'Non c\'è differenza sostanziale',
      'Alfonso è fisicamente malato; Emilio è mentalmente sano',
      'Alfonso è inetto inconsapevole (non capisce la propria inadeguatezza); Emilio è inetto consapevole ma immobile (sa di essere inadatto ma non riesce a cambiare)',
      'Alfonso è un lavoratore; Emilio è un aristocratico'
    ],
    correct:2,
    explanation:'Distinzione fondamentale: Alfonso (Una vita) non capisce la propria inadeguatezza — autoinganna sé stesso fino al suicidio. Emilio (Senilità) sa di essere inadatto, vede chiaramente la realtà di Angiolina — ma non riesce a cambiare. La consapevolezza non porta alla trasformazione. Questo approfondisce l\'inettitudine rispetto ad Alfonso.'
  },
  { id:'sv83', type:'tf', topic:'Poetica',
    text:'Vero o falso: per Svevo l\'irregolarità sintattica della prosa è un difetto derivato dalla formazione plurilingue.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. È l\'opposto: l\'irregolarità sintattica è una scelta stilistica coerente — traduce la frammentazione psicologica dei personaggi. L\'«errore» diventa stile. La prosa irregolare mima l\'irregolarità dell\'io. Non è difetto ma tecnica.'
  },
  { id:'sv84', type:'mc', topic:'Confronti',
    text:'Come influisce la lettura di Flaubert e Zola sulla prima produzione di Svevo?',
    options:[
      'Flaubert gli insegna la scrittura autobiografica; Zola il romanticismo',
      'Flaubert: il disprezzo ironico del narratore per i personaggi (osservazione fredda); Zola: descrizioni dell\'ambiente di lavoro d\'ufficio e della vita borghese (influenza su Una vita)',
      'Entrambi lo spingono verso il naturalismo italiano di Verga',
      'Non c\'è influenza diretta di Flaubert e Zola su Svevo'
    ],
    correct:1,
    explanation:'Flaubert: il disprezzo ironico del narratore per i propri personaggi — osservazione fredda e ironica. Zola: le descrizioni dell\'ambiente di lavoro d\'ufficio e della vita borghese influenzano Una vita (1893). Sono i modelli della «Fase 1» della produzione sveviana.'
  },
  { id:'sv85', type:'mc', topic:'Opere',
    text:'Perché Il vecchione/Il vegliardo è importante nonostante sia incompiuto?',
    options:[
      'Perché è il romanzo più lungo di Svevo',
      'Perché contiene la grande dichiarazione di poetica: «Non colui che visse ma colui che descrissi. La vita sarà letteraturizzata»',
      'Perché è l\'unico romanzo con un finale felice',
      'Perché Svevo vi descrive la propria morte'
    ],
    correct:1,
    explanation:'Il vecchione (incompiuto, 5 frammenti) è importante per la grande dichiarazione di poetica: «Non colui che visse ma colui che descrissi. La vita sarà letteraturizzata.» Questa frase sintetizza tutta la poetica sveviana: la scrittura non è racconto del vissuto ma creazione di sé.'
  },
  { id:'sv86', type:'mc', topic:'Vita',
    text:'Quale evento nel 1923 segna il definitivo riconoscimento letterario di Svevo?',
    options:[
      'Vincita di un premio letterario a Roma',
      'La pubblicazione della Coscienza di Zeno, promossa da Joyce in Francia dove viene recensita favorevolmente prima che in Italia — il successo arriva a 62 anni',
      'L\'incontro con Benedetto Croce a Napoli',
      'La traduzione in tedesco di Una vita'
    ],
    correct:1,
    explanation:'Nel 1923 pubblica La coscienza di Zeno. Joyce ne promuove la lettura in Francia, dove viene recensita favorevolmente. La critica italiana lo scopre finalmente. Il successo arriva a 62 anni — tardivo ma definitivo.'
  },
  { id:'sv87', type:'mc', topic:'Glossario',
    text:'Cosa intende Svevo con «malattia della volontà»?',
    options:[
      'Una malattia fisica che colpisce il sistema nervoso',
      'La condizione di chi ha la volontà paralizzata: né libera né pienamente compromessa. La volontà vuole agire ma non agisce, vuole cambiare ma non cambia',
      'L\'assenza totale di volontà',
      'La volontà eccessiva che porta all\'arroganza'
    ],
    correct:1,
    explanation:'La malattia della volontà: la volontà è né libera né pienamente compromessa. Zeno sa cosa dovrebbe fare (smettere di fumare, essere fedele) ma non riesce. I buoni propositi vengono continuamente rinviati. È la traduzione narrativa della volontà cieca schopenhaueriana che supera la ragione cosciente.'
  },
  { id:'sv88', type:'tf', topic:'Vita',
    text:'Vero o falso: Svevo è autodidatta letterario e questa libertà dai modelli accademici si traduce in innovazione.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Non avendo ricevuto una vera formazione letteraria accademica, Svevo si sente meno legato ai modelli precedenti. Questa libertà si traduce in una prosa anomala — irregolare, sintattica — che però corrisponde perfettamente alla frammentazione psicologica dei personaggi. L\'«errore» diventa stile.'
  },
  { id:'sv89', type:'mc', topic:'Poetica',
    text:'Perché Svevo rifiuta la psicanalisi come terapia ma ne usa il lessico?',
    options:[
      'Perché non conosce abbastanza la psicanalisi',
      'La psicanalisi mira a «guarire» l\'uomo proprio da ciò che di più caratteristico ha: la malattia come elemento distintivo. Ma il lessico freudiano è utile per smontarla dall\'interno con l\'ironia di Zeno',
      'Perché la psicanalisi è troppo costosa per i suoi personaggi',
      'Perché Freud rifiuta di incontrare Svevo personalmente'
    ],
    correct:1,
    explanation:'Paradosso fondamentale: Svevo usa il lessico e le categorie di Freud (autoinganno, rimozione, associazione libera, complesso edipico) per costruire un romanzo che demolisce la fiducia nella psicanalisi come terapia. La psicanalisi vuole guarire l\'uomo da ciò che lo rende unico — la sua «malattia». Svevo non accetta questa premessa.'
  },
  { id:'sv90', type:'open', topic:'Confronti · Darwin',
    text:'Spiega l\'ironia darwiniana nella trilogia sveviana con riferimento specifico ai tre romanzi.',
    modelAnswer:'Svevo eredita da Darwin la lotta tra forti e deboli ma la trasla ironicamente nell\'opposizione sani/malati. In Una vita: il forte è Macario (vince); il debole è Alfonso (si suicida). Schema darwiniano rispettato, ma il narratore guarda Macario con ironia — la sua forza è superficialità. In Senilità: i forti vincono (Angiolina, Stefano Balli) ma sono descritti come ottusi. I deboli (Emilio, Amalia) percepiscono di più. In La coscienza di Zeno: il ribaltamento è completo — Zeno (inetto) sopravvive, ha successo; Guido (brillante e forte) si suicida per i debiti. Darwin è definitivamente rovesciato: l\'inetto vince paradossalmente.',
    keywords:['Darwin ribaltato','Macario','Alfonso','Guido muore','Zeno sopravvive','forti ottusi','inetto lucido','paradosso']
  },
  { id:'sv91', type:'mc', topic:'Vita',
    text:'Qual è il vero nome di Italo Svevo?',
    options:['Ettore Schmitz','Aron Hector Schmitz','Josef Kafka','Ernesto Svevo'],
    correct:1,
    explanation:'Il vero nome è Aron Hector Schmitz. Lo pseudonimo «Italo Svevo» unisce «Italo» (identità italiana) e «Svevo» (dalla Svevia, Germania) — è già un programma di identità doppia, la stessa del triestino austro-ungarico.'
  },
  { id:'sv92', type:'mc', topic:'Opere · Una vita',
    text:'Come termina «Una vita» (1892)?',
    options:['Alfonso fugge in America per ricominciare','Alfonso si suicida — non riesce a trovare un posto né nell\'amore né nella società borghese','Alfonso sposa Annetta e diventa direttore della banca','Alfonso diventa scrittore di successo'],
    correct:1,
    explanation:'Il finale di Una vita è il suicidio di Alfonso: non riesce a esistere né nella relazione con Annetta né nel lavoro in banca. Il titolo ironico — «Una vita» — riassume l\'esistenza fallimentare dell\'inetto che non trova posto. Lo schema darwiniano è rispettato: il debole soccombe.'
  },
  { id:'sv93', type:'mc', topic:'Vita · lingua',
    text:'Perché lo stile italiano di Svevo è stato criticato come «irregolare»?',
    options:['Perché non aveva frequentato le scuole italiane','Perché era triestino e l\'italiano era la sua seconda lingua — influenzato dal dialetto triestino e dal tedesco. Questa «imperfezione» però corrisponde alla psicologia frammentata dei personaggi','Perché usava volutamente il dialetto siciliano','Perché scriveva come un bambino'],
    correct:1,
    explanation:'Il problema linguistico di Svevo è reale: cresciuto a Trieste austro-ungarica, il suo italiano era di secondo impianto. Contini e Debenedetti hanno dimostrato che questa prosa sintattica irregolare è funzionale: corrisponde perfettamente alla psicologia tortuosa di Zeno. L\'«errore» è diventato stile.'
  },
  { id:'sv94', type:'mc', topic:'Opere · Coscienza di Zeno · matrimonio',
    text:'Quale ironia contiene il capitolo «Il matrimonio» nella Coscienza di Zeno?',
    options:['Zeno decide di non sposarsi più','Zeno, innamorato di Ada, viene respinto e «per caso» sposa Augusta — la sorella meno bella — trovandoci infine felicità','Il Dottor S. scopre il tradimento di Zeno','Zeno e Guido si sfidano per conquistare la stessa donna'],
    correct:1,
    explanation:'Il matrimonio «sbagliato» è il matrimonio giusto. Zeno ama Ada (bella, ambiziosa), viene respinto, finisce per sposare Augusta (pratica, seria). E Augusta si rivela la moglie perfetta. L\'inettitudine porta al risultato migliore: è una delle ironie più belle del romanzo.'
  },
  { id:'sv95', type:'open', topic:'Testi · capitolo finale',
    text:'Spiega il significato del capitolo finale della Coscienza di Zeno con il ribaltamento finale e la visione apocalittica.',
    modelAnswer:'Nel capitolo finale (1916) l\'io narrante si avvicina al presente della narrazione. Il Dottor S. pubblica il manoscritto contro la volontà di Zeno. Il ribaltamento è duplice: la cura ha «funzionato» — Zeno ha guadagnato in borsa durante la guerra — ma non per ragioni psicanalitiche: è stato il caso della guerra. La visione apocalittica finale rovescia tutto: l\'uomo non è guaribile, la malattia è la condizione generale della specie. Solo una catastrofe cosmica potrebbe liberare la Terra dall\'uomo malato. Il finale abbandona il romanzo psicologico per la profezia.',
    keywords:['capitolo finale 1916','Dottor S.','guarito per caso','apocalisse cosmica','malattia universale','antirealistico','ribaltamento']
  },
  { id:'sv96', type:'mc', topic:'Vita · morte',
    text:'Come muore Svevo nel 1928?',
    options:['In un campo di concentramento fascista','Di polmonite a Trieste','In un incidente automobilistico vicino a Motta di Livenza, tornando da Venezia','Di infarto nella libreria di Trieste'],
    correct:2,
    explanation:'Svevo muore il 13 settembre 1928 in un incidente automobilistico vicino a Motta di Livenza. Aveva 66 anni e il suo riconoscimento letterario era appena iniziato. La morte quasi pirandelliana avviene mentre tornava da Venezia per ragioni di salute.'
  },
  { id:'sv97', type:'mc', topic:'Confronti · Proust',
    text:'Qual è la differenza fondamentale tra memoria in Proust e in Svevo?',
    options:['Proust crede nella memoria involontaria che restituisce il tempo perduto; Svevo crede che la memoria distorca sempre il passato a uso del presente','Proust usa la memoria per critica sociale; Svevo per nostalgia','La memoria in Proust è più dolorosa che in Svevo','Non c\'è differenza sostanziale'],
    correct:0,
    explanation:'La differenza è radicale. In Proust la mémoire involontaire (la madeleine) permette di ritrovare autenticamente il tempo perduto — è salvifica. In Svevo la memoria di Zeno è strutturalmente inattendibile: riscrive continuamente il passato in chiave favorevole a sé stesso. La memoria proustiana recupera; quella sveviana distorce.'
  },
  { id:'sv98', type:'tf', topic:'Vita · Trieste',
    text:'Vero o falso: il contesto di Trieste facilita l\'incontro di Svevo con la psicoanalisi freudiana prima che in qualsiasi altra città italiana.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Trieste era parte dell\'Impero austro-ungarico fino al 1918 con legami diretti con Vienna, dove Freud operava. Le idee freudiane circolano a Trieste molto prima che nel resto d\'Italia. Svevo le incontra tramite amici intellettuali triestini prima che Freud diventasse famoso in Italia.'
  },
  { id:'sv99', type:'mc', topic:'Opere · Senilità',
    text:'Perché il titolo «Senilità» (1898) è paradossale rispetto all\'età del protagonista Emilio?',
    options:['Emilio ha 35 anni ma è moralmente invecchiato prematuramente — vive nella rassegnazione e nell\'autoinganno come un vecchio','Svevo stesso era vecchio quando scrisse il romanzo','Il titolo si riferisce a un personaggio anziano secondario','Senilità indica il genere letterario del romanzo tardivo'],
    correct:0,
    explanation:'Il paradosso del titolo: Emilio ha 35 anni, ma è già «vecchio» nell\'anima. Vive nell\'autoinganno sistematico (si dice amante raffinato mentre è succube di Angiolina), nell\'incapacità di agire, nella paura del futuro. La senilità è psicologica, non anagrafica.'
  },
  { id:'sv100', type:'open', topic:'Sintesi',
    text:'Spiega perché Svevo è considerato uno dei padri del romanzo moderno europeo.',
    modelAnswer:'Svevo è padre del romanzo moderno europeo per tre innovazioni. Prima: il narratore inattendibile — prima di Svevo, la narrativa garantisce al lettore un punto di vista superiore. Zeno è il primo narratore sistematicamente inattendibile: mente a sé stesso. Seconda: la struttura psicologica del tempo — Svevo rompe il tempo lineare con la narrazione retrospettiva e la memoria infedele, anticipando il romanzo modernista. Terza: l\'ironia come visione del mondo — Svevo non giudica, non moralizza, non consola. Mostra l\'inettitudine con affetto e ironia. Queste tre innovazioni (narratore inattendibile + tempo psicologico + ironia) fanno di lui un riferimento per la narrativa del Novecento europeo.',
    keywords:['narratore inattendibile','tempo psicologico','ironia','romanzo moderno europeo','tre innovazioni','Zeno']
  }
],

/* ════════════════════════════════════════════════════════════════════════
   PIRANDELLO — 30 domande (NUOVE)
   ════════════════════════════════════════════════════════════════════════ */
pirandello: [
  { id:'pi1', type:'mc', topic:'Vita',
    text:'Dove e in che anno nasce Luigi Pirandello?',
    options:[
      'A Palermo nel 1860',
      'A Caos (contrada vicino Girgenti/Agrigento) nel 1867 — luogo simbolicamente significativo',
      'A Roma nel 1870',
      'A Milano nel 1872'
    ],
    correct:1,
    explanation:'Nasce il 28 giugno 1867 nella contrada Caos, presso Agrigento. Si autodefinirà «figlio del Caos», alludendo sia al luogo sia alla natura caotica dell\'esistenza.'
  },
  { id:'pi2', type:'open', topic:'Vita',
    text:'Perché Pirandello si autodefinisce «figlio del Caos»? Spiega il valore simbolico.',
    modelAnswer:'L\'autodefinizione ha valore biografico e filosofico. Pirandello nasce letteralmente nella contrada Caos, vicino Agrigento — quindi il «Caos» è il suo luogo di nascita reale. Ma il termine assume immediatamente un valore simbolico: il Caos è la natura disordinata, contraddittoria, irriducibile della realtà che Pirandello passerà tutta la vita a indagare. Non c\'è un ordine sottostante da scoprire (come per i positivisti) né una verità unitaria da rivelare. La realtà È caos. Da qui nasce il relativismo conoscitivo, la pluralità dell\'io, la dissoluzione dell\'identità unica. L\'autodefinizione cristallizza la sua poetica.',
    keywords:['Caos','contrada','figlio del Caos','relativismo','realtà disordinata','pluralità dell\'io']
  },
  { id:'pi3', type:'mc', topic:'Vita',
    text:'Quale evento biografico è considerato fondamentale per il relativismo conoscitivo pirandelliano?',
    options:[
      'L\'incontro con Capuana',
      'La laurea a Bonn nel 1891',
      'La convivenza con la moglie Antonietta Portolano, affetta da paranoia, internata nel 1919 — esperienza vivente di una realtà alternativa che gli dimostra l\'impossibilità di una verità univoca',
      'L\'iscrizione al PNF nel 1924'
    ],
    correct:2,
    explanation:'Antonietta vedeva tradimenti inesistenti e costruiva un mondo parallelo. Pirandello sperimenta ogni giorno l\'incomunicabilità tra due realtà soggettive. Dimostrazione vivente del relativismo.'
  },
  { id:'pi4', type:'tf', topic:'Vita',
    text:'Vero o falso: Pirandello vince il Premio Nobel per la Letteratura nel 1934.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Nobel 1934. Riconoscimento internazionale della sua capacità di dare forma artistica alle inquietudini della modernità.'
  },
  { id:'pi5', type:'mc', topic:'Vita',
    text:'Quale opera lascia incompiuta alla morte (1936)?',
    options:[
      'Sei personaggi in cerca d\'autore',
      'Enrico IV',
      'Uno, nessuno e centomila',
      'I giganti della montagna — testamento simbolico sulla sorte dell\'arte nel mondo moderno'
    ],
    correct:3,
    explanation:'«I giganti della montagna», ultima opera. I Giganti rappresentano la forza bruta e il potere tecnologico della modernità. Messaggio: l\'arte non può sopravvivere nel mondo dei Giganti.'
  },
  { id:'pi6', type:'open', topic:'Poetica · Vita e Forma',
    text:'Spiega il nucleo fondamentale della poetica pirandelliana: la dialettica tra Vita e Forma.',
    modelAnswer:'Con «Vita» Pirandello intende la natura continua e fluida dell\'esistenza: pensieri, emozioni, desideri non stanno mai fermi. Non siamo mai esattamente la stessa persona di ieri. La Vita è come un fiume: scorre sempre. Con «Forma» intende tutto ciò che cerca di fermare questo flusso e dargli un\'etichetta: il nostro nome, mestiere, ruolo familiare, le aspettative altrui. Quando dici «sono un medico» o «sono il figlio di…», stai dando una Forma. Il paradosso: non puoi fare a meno di una Forma (senza ruolo non esisti per la società), ma accettare una Forma significa tradire la natura mobile della Vita. I personaggi pirandelliani sono intrappolati qui: chi crede di avere un\'identità stabile si inganna; chi cerca di liberarsi rischia di dissolversi.',
    keywords:['Vita = flusso','Forma = etichetta','fiume','nessuna forma contiene la vita','paradosso','identità stabile è inganno']
  },
  { id:'pi7', type:'mc', topic:'Poetica · Identità',
    text:'Cosa significa la formula «uno, nessuno e centomila»?',
    options:[
      'Una metafora numerica per la popolazione di Agrigento',
      'Ogni individuo è «uno» (come crede di essere), «nessuno» (perché non esiste un sé autentico e fisso), e «centomila» (perché ogni persona che lo conosce lo vede diversamente)',
      'Tre identità religiose in conflitto',
      'Una metafora della folla moderna'
    ],
    correct:1,
    explanation:'Formula triplice: uno (illusione di unità), nessuno (assenza di sé autentico), centomila (pluralità di percezioni altrui). Sotto la maschera non c\'è un «vero io», solo altri strati di maschere.'
  },
  { id:'pi8', type:'open', topic:'Poetica · Umorismo',
    text:'Spiega la distinzione tra «comicità» e «umorismo» nel saggio del 1908. Cosa sono «avvertimento» e «sentimento del contrario»?',
    modelAnswer:'Distinzione fondamentale. La comicità è la reazione immediata e istintiva alla percezione di qualcosa di incongruo: ridiamo di una cosa fuori norma. È l\'AVVERTIMENTO DEL CONTRARIO. L\'umorismo nasce quando alla reazione istintiva subentra la riflessione: ci chiediamo il PERCHÉ di quella incongruità, immaginiamo la storia e la sofferenza che si nasconde dietro l\'apparenza comica. Il riso si mescola con la pietà e la comprensione: è il SENTIMENTO DEL CONTRARIO. Esempio classico: vediamo una vecchia signora imbellettata e vestita da giovane — ridiamo (avvertimento). Ma poi riflettiamo: forse si veste così per piacere al marito che la tradisce, o per non sentirsi abbandonata dai figli. Il riso si stempera in tenerezza e malinconia. L\'umorismo richiede empatia.',
    keywords:['avvertimento del contrario','sentimento del contrario','riso vs pietà','vecchia imbellettata','empatia','riflessione']
  },
  { id:'pi9', type:'mc', topic:'Poetica · Maschera',
    text:'Cosa rappresenta la «maschera» in Pirandello? È possibile toglierla per trovare il «vero io»?',
    options:[
      'La maschera è il falso che nasconde un vero io autentico da liberare',
      'La maschera è il ruolo sociale; sotto di essa NON c\'è un «vero io», ci sono solo altri strati di maschere in una regressione senza fondo. L\'identità non è una sostanza, è un processo',
      'La maschera è un travestimento teatrale puramente esterno',
      'La maschera è un sintomo di malattia psichica'
    ],
    correct:1,
    explanation:'Pirandello va più radicale dello smascheramento: sotto la maschera non c\'è un sé autentico. L\'identità è un processo, non una sostanza.'
  },
  { id:'pi10', type:'tf', topic:'Poetica · Follia',
    text:'Vero o falso: in Pirandello la follia è soltanto una condizione tragica, l\'esito disperato di chi non regge il peso delle maschere sociali.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. La follia è ambivalente: tragica MA anche forma paradossale di libertà. Chi è dichiarato pazzo è escluso dalle convenzioni e quindi non è più obbligato a portarle (cfr. Enrico IV).'
  },
  { id:'pi11', type:'open', topic:'Poetica · Relativismo',
    text:'Cos\'è il «relativismo conoscitivo» pirandelliano? Quali sono i suoi riferimenti culturali?',
    modelAnswer:'Il relativismo di Pirandello non è solo morale o psicologico: è anzitutto conoscitivo. Non esiste un punto di vista neutro e assoluto da cui giudicare la realtà: ogni conoscenza è sempre parziale, prospettica, condizionata dalla posizione di chi osserva. Nessuno può uscire da sé stesso per vedere la realtà «come è davvero». Riferimenti: Alfred Binet (molteplicità della personalità), Einstein (relatività: nessun punto di osservazione assoluto), pragmatismo di William James, prospettivismo di Nietzsche. La «verità» è sempre «la vostra» o «la mia», mai semplicemente «la verità». Il dramma «Così è (se vi pare)» dichiara nel titolo stesso questa irrisolvibilità.',
    keywords:['relativismo conoscitivo','parziale e prospettico','Binet','Einstein','Nietzsche','Così è (se vi pare)','la mia verità']
  },
  { id:'pi12', type:'mc', topic:'Il fu Mattia Pascal',
    text:'Qual è la trama del romanzo «Il fu Mattia Pascal» (1904)?',
    options:[
      'Un uomo si scopre figlio illegittimo e fugge in Sud America',
      'Mattia finge la propria morte e si reinventa come Adriano Meis, ma scopre che vivere senza identità legale è impossibile; inscena un suicidio nel Tevere, torna al paese e trova la moglie risposata, va a visitare la propria tomba',
      'Un giovane studente uccide il padre',
      'Un viaggio nella memoria di un anziano professore'
    ],
    correct:1,
    explanation:'Romanzo dello sdoppiamento e della fragilità delle maschere sociali. Contiene le celebri metafore della «lanterninosofia» e dello «strappo nel cielo di carta».'
  },
  { id:'pi13', type:'open', topic:'Il fu Mattia Pascal',
    text:'Spiega le metafore della «lanterninosofia» e dello «strappo nel cielo di carta» nel «Fu Mattia Pascal».',
    modelAnswer:'LANTERNINOSOFIA: il teosofo Anselmo Paleari paragona ogni essere umano a un piccolo lanternino che cammina nel buio portando la propria luce: minuscola, relativa, che illumina solo il cerchio ristretto intorno a sé. Quando due lanternini si incontrano, le luci si sovrappongono e creano l\'illusione di una verità condivisa; quando si separano, ciascuno torna nella propria oscurità. Significato: ogni conoscenza è prospettica e limitata. L\'uomo senza Dio è solo con il suo piccolo lanternino. STRAPPO NEL CIELO DI CARTA: il burattino che interpreta Oreste — nel momento più drammatico — alza la testa e vede uno strappo nel fondale dipinto. Vede il buio vero al di là della finzione. L\'uomo moderno sa che il «cielo» che lo sovrasta è solo carta dipinta, una convenzione. Il dramma non è più possibile — solo l\'angoscia e l\'ironia.',
    keywords:['lanternino','luce relativa','prospettiva limitata','strappo nel cielo di carta','Oreste burattino','convenzione','no dramma possibile']
  },
  { id:'pi14', type:'mc', topic:'Uno, nessuno e centomila',
    text:'Qual è l\'episodio scatenante del romanzo «Uno, nessuno e centomila» (1926)?',
    options:[
      'Vitangelo Moscarda eredita una grossa somma',
      'La moglie Dida fa notare a Vitangelo che il suo naso «pende un pochino verso destra» — banalissima osservazione che scatena una crisi esistenziale totale',
      'Vitangelo perde il lavoro in banca',
      'Vitangelo viene tradito dalla moglie'
    ],
    correct:1,
    explanation:'L\'osservazione del naso. Vitangelo per la prima volta vede il proprio naso come lo vedono gli altri: estraneo. Scoperta: non possiamo conoscerci come ci conoscono gli altri.'
  },
  { id:'pi15', type:'open', topic:'Uno, nessuno e centomila',
    text:'Come si conclude «Uno, nessuno e centomila»? Cosa rappresenta la scelta finale di Vitangelo Moscarda?',
    modelAnswer:'Per ogni persona che lo conosce, Vitangelo è qualcuno di diverso. La gente lo crede pazzo; viene internato. Alla fine sceglie di essere «nessuno»: rinuncia a ogni proprietà, ruolo e nome. Si ritira in un ospizio, vive in mezzo alla natura, accetta di non essere più nessuno in particolare. La scelta rappresenta la formulazione più estrema del relativismo pirandelliano: l\'identità individuale non esiste come sostanza, è solo la somma delle percezioni altrui. Vitangelo sceglie la dissoluzione del sé. È una sorta di liberazione ma anche di morte sociale: essere «nessuno» è l\'unica forma di libertà ma equivale a non esistere per gli altri. Il finale è ambivalente: nichilismo o liberazione mistica?',
    keywords:['nessuno','rinuncia all\'identità','ospizio','dissoluzione del sé','liberazione/nichilismo','identità = percezioni altrui']
  },
  { id:'pi16', type:'mc', topic:'Sei personaggi',
    text:'Qual è l\'idea innovativa di «Sei personaggi in cerca d\'autore» (1921)?',
    options:[
      'È un dramma storico ambientato nel Settecento',
      'Sei Personaggi abbandonati dal loro autore irrompono in una prova teatrale chiedendo di essere rappresentati; gli attori non riescono a coglierne la verità — la quarta parete scompare, il teatro mostra i propri meccanismi',
      'È un monologo lungo di un solo personaggio',
      'È una commedia musicale'
    ],
    correct:1,
    explanation:'Rivoluzione del teatro novecentesco. Premiere a Roma 1921 con fischi e applausi. Diventa presto opera rappresentata in tutto il mondo. Il teatro nel teatro.'
  },
  { id:'pi17', type:'open', topic:'Sei personaggi',
    text:'Spiega il concetto di «autonomia del personaggio» nei «Sei personaggi» e perché è un\'innovazione metateatrale.',
    modelAnswer:'L\'idea centrale: una volta creato dall\'autore, il personaggio esiste indipendentemente dall\'autore e dall\'attore. Il Personaggio è «più reale» dell\'attore, perché l\'attore cambia sera dopo sera, mentre il Personaggio è fisso nella sua essenza. Paradossale «immortalità del personaggio». I sei Personaggi pirandelliani sono stati abbandonati dal loro autore (Pirandello stesso) ma rifiutano di morire: irrompono sul palcoscenico esigendo di essere rappresentati. Gli attori cercano di interpretarli ma il Padre protesta: gli attori possono solo imitare dall\'esterno ciò che i Personaggi vivono dall\'interno. La distanza tra vita autentica e finzione teatrale è incolmabile. Pirandello rompe la «quarta parete» — il teatro smette di fingere di non essere teatro. Lo spettacolo diventa riflessione su sé stesso. Anticipa Brecht, Beckett, Ionesco.',
    keywords:['autonomia del personaggio','immortalità del personaggio','quarta parete','metateatro','distanza vita/finzione','no rappresentazione vera']
  },
  { id:'pi18', type:'mc', topic:'Enrico IV',
    text:'Qual è il nucleo tragico di «Enrico IV» (1922)?',
    options:[
      'Un imperatore medievale ritorna in vita',
      'Un uomo cade durante una cavalcata in costume e crede di essere Enrico IV di Germania; dopo 12 anni riacquista la ragione ma sceglie di continuare a fingersi pazzo — la maschera della follia gli offre libertà e potere; uccide il rivale Belcredi: ora la follia è reale, non può più togliersi la maschera',
      'È un dramma puramente storico sull\'imperatore germanico',
      'Una satira politica contro Mussolini'
    ],
    correct:1,
    explanation:'La tragedia pirandelliana: la scelta libera (fingere la follia) si rovescia in prigione (la follia fittizia diventa reale con l\'omicidio).'
  },
  { id:'pi19', type:'open', topic:'Enrico IV',
    text:'Perché «Enrico IV» è l\'esempio massimo della concezione pirandelliana della follia come libertà paradossale?',
    modelAnswer:'In «Enrico IV» il protagonista ha la possibilità di uscire dalla follia — ha riacquistato la ragione dopo 12 anni — ma sceglie consapevolmente di rimanere nel personaggio del folle imperatore medievale. Perché? Perché quella maschera gli offre una libertà che la vita «normale» non darebbe. Chi è dichiarato pazzo è escluso dalle convenzioni sociali e quindi non è obbligato a portarle. La follia diventa così non la perdita della ragione, ma il suo esercizio più lucido: scegliere di restare folle È un atto di ragione. Paradosso conclusivo: quando uccide Belcredi (l\'antico rivale), la follia fittizia diventa la sua prigione reale. Non può più dichiararsi sano senza pagare il conto dell\'omicidio. La maschera che era libertà si chiude per sempre. È la tragedia della libertà che si rovescia in necessità.',
    keywords:['follia scelta','maschera libertà','esercizio lucido','omicidio Belcredi','maschera diventa prigione','libertà rovesciata in necessità']
  },
  { id:'pi20', type:'mc', topic:'Novelle',
    text:'Quale tema è centrale in «Il treno ha fischiato» (Novelle per un anno)?',
    options:[
      'Una vacanza in montagna',
      'Belluca, piccolo impiegato schiacciato da una vita di miseria, una notte sente un treno fischiare: il fischio gli ricorda che il mondo esiste oltre il suo ruolo sociale — la follia come risveglio della vita soffocata dalla forma',
      'La storia di un macchinista delle ferrovie',
      'Una storia d\'amore in stazione'
    ],
    correct:1,
    explanation:'Il fischio del treno (suono concreto, improvviso) riattiva la coscienza di esistere oltre il ruolo. Doppia prospettiva: i colleghi lo credono pazzo (avvertimento del contrario), il narratore capisce la verità (sentimento del contrario).'
  },
  { id:'pi21', type:'open', topic:'Novelle',
    text:'Spiega la trama e il paradosso centrale di «La patente» (Novelle per un anno).',
    modelAnswer:'Rosario Chiàrchiaro è convinto di essere iettatore, e tale viene considerato da tutto il paese. Tutti lo evitano, la sua vita è rovinata dalla diceria. Esasperato, ha un\'idea paradossale: si presenta in tribunale chiedendo che il giudice gli riconosca UFFICIALMENTE la qualifica di iettatore — una «patente» di jettatura — per poter sfruttare economicamente la paura altrui. Invece di cercare di liberarsi dall\'immagine che gli altri hanno di lui, Chiàrchiaro sceglie di appropriarsene, di farne strumento di sopravvivenza. La maschera imposta dalla società viene accettata, anzi rivendicata. È l\'umorismo pirandelliano nella sua forma più amara: né vittoria né sconfitta, solo paradosso grottesco. La maschera diventa anche fonte di reddito — sopravvivere accettando ciò che gli altri fanno di te.',
    keywords:['Chiàrchiaro','iettatore','patente','maschera accettata','paradosso grottesco','umorismo amaro','sfruttare la fama']
  },
  { id:'pi22', type:'mc', topic:'Novelle',
    text:'In «La carriola», qual è il gesto segreto del protagonista?',
    options:[
      'Beve di nascosto in cantina',
      'Un avvocato affermato prende la cagnolina di famiglia e la fa fare «la carriola» (la mette in posizione verticale tenendola per le zampe posteriori) — gesto assurdo, infantile, l\'unico in cui si sente davvero «lui»',
      'Suona il violino in soffitta',
      'Rilegge le lettere d\'amore della giovinezza'
    ],
    correct:1,
    explanation:'Paradosso: la «vita autentica» non si trova nei ruoli sociali brillanti, ma in un gesto insensato e privato che nessuno vede. Forse non esiste una vera libertà, solo la parentesi di un gesto inutile.'
  },
  { id:'pi23', type:'tf', topic:'Novelle',
    text:'Vero o falso: la novella «La signora Frola e il signor Ponza» (poi dramma «Così è (se vi pare)») presenta un enigma che alla fine viene risolto definitivamente.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. L\'irrisolvibilità è la tesi. Alla fine la signora Ponza compare e afferma di essere sia la figlia della Frola sia la seconda moglie di Ponza: è «nessuna», è solo ciò che ciascuno ha bisogno che sia. Non c\'è una verità unica.'
  },
  { id:'pi24', type:'mc', topic:'Quaderni di Serafino Gubbio',
    text:'Cosa anticipa il romanzo «Quaderni di Serafino Gubbio operatore» (1916)?',
    options:[
      'La fine del cinema muto',
      'Le riflessioni di Walter Benjamin (1936) sulla perdita dell\'aura nell\'epoca della riproducibilità tecnica e Guy Debord sulla società dello spettacolo (1967): l\'alienazione tecnologica, l\'uomo ridotto a funzione meccanica',
      'Il neorealismo cinematografico',
      'La nascita della televisione'
    ],
    correct:1,
    explanation:'Serafino, operatore cinematografico, assiste impassibile a una scena di violenza — è il suo mestiere — e diventa muto per lo shock. Anticipa Benjamin, Debord, la riflessione sulla società dell\'immagine.'
  },
  { id:'pi25', type:'open', topic:'Teatro · Trilogia metateatrale',
    text:'Quali sono le opere della trilogia metateatrale di Pirandello e qual è il filo che le unisce?',
    modelAnswer:'La trilogia metateatrale comprende: «Sei personaggi in cerca d\'autore» (1921), «Ciascuno a suo modo» (1924), «Questa sera si recita a soggetto» (1930). Il filo che le unisce è la riflessione del teatro su sé stesso. La «quarta parete» — la convenzione per cui gli attori fingono che il pubblico non esista — scompare: il teatro si denuda, mostrando i propri meccanismi. In «Sei personaggi» i Personaggi irrompono nella prova chiedendo di essere rappresentati. In «Ciascuno a suo modo» l\'azione drammatica viene continuamente interrotta da reazioni del pubblico in sala (che fa parte dello spettacolo). In «Questa sera si recita a soggetto» gli attori sembrano improvvisare. Il teatro non è più una finta realtà ma una riflessione esplicita sulla rappresentazione. Anticipa Brecht, Beckett, Ionesco e tutta la drammaturgia novecentesca.',
    keywords:['Sei personaggi','Ciascuno a suo modo','Questa sera si recita a soggetto','quarta parete','teatro nel teatro','Brecht/Beckett']
  },
  { id:'pi26', type:'mc', topic:'Confronti',
    text:'Quale autore del Novecento è considerato il «padre non riconosciuto» di Beckett, Kafka e Ionesco?',
    options:[
      'D\'Annunzio',
      'Pirandello — per il personaggio intrappolato in situazioni assurde che le analizza con rigore burocratico (Kafka), per il teatro che mostra il proprio meccanismo (Beckett), per l\'identità come ruolo vuoto (Ionesco)',
      'Svevo',
      'Verga'
    ],
    correct:1,
    explanation:'Aspettando Godot è impensabile senza i Sei personaggi. Il ragionatore pirandelliano anticipa il personaggio kafkiano. Ionesco eredita il linguaggio come non-comunicazione.'
  },
  { id:'pi27', type:'open', topic:'Confronti',
    text:'Confronta Pirandello e Svevo sulla crisi dell\'io: punti di contatto e differenze.',
    modelAnswer:'Stessa diagnosi: l\'io non è un\'unità stabile, la modernità ha frammentato l\'identità ottocentesca. Ma le risposte sono diverse. PIRANDELLO: la frammentazione è insuperabile, non esiste un «vero io» dietro le maschere; il rimedio è assente, al massimo la follia come libertà paradossale. La scrittura mostra l\'impossibilità di un\'identità stabile. SVEVO: la frammentazione è il dato di fatto, ma c\'è una soluzione ironica — la scrittura come autoanalisi, l\'inetto che convive con la propria malattia. Zeno paradossalmente vince. Punto di contatto: la «visione distorta» di Emilio in Senilità è comparabile alle «maschere» pirandelliane (Svevo stesso lo notò). Pirandello eredita il problema dell\'io frammentato; Svevo trova una via d\'uscita ironica e narrativa. Pirandello fa teatro, Svevo fa romanzo. Pirandello è siciliano-borghese, Svevo triestino-mitteleuropeo.',
    keywords:['stessa diagnosi','frammentazione insuperabile','no rimedio Pirandello','soluzione ironica Svevo','visione distorta = maschera','teatro vs romanzo']
  },
  { id:'pi28', type:'tf', topic:'Stile',
    text:'Vero o falso: la lingua di Pirandello è considerata aulica e raffinata, modello di stile alto.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Croce la definì «grigia e monotona». È deliberatamente funzionale, non estetica. Ma diventa vivace nei testi siciliani e si converte in «furore retorico» nei monologhi dei ragionatori. L\'irregolarità mima la frammentazione dell\'io.'
  },
  { id:'pi29', type:'mc', topic:'Stile',
    text:'Cosa caratterizza i dialoghi e i monologhi dei protagonisti pirandelliani?',
    options:[
      'Brevità e concisione lirica',
      'Un «furore retorico»: parlano troppo, spiegano e rispiegano, si perdono in analisi sempre più sottili — il dialogo non scambia informazioni ma esplora la coscienza. Autopsia verbale del sé',
      'Solo dialetto siciliano',
      'Citazioni continue da Dante'
    ],
    correct:1,
    explanation:'I ragionatori parlano troppo. È la manifestazione diretta del loro stato interiore. Funzione quasi psicanalitica: pensano parlando, si smontano nel parlare.'
  },
  { id:'pi30', type:'open', topic:'Attualità',
    text:'Perché Pirandello è considerato sorprendentemente attuale nell\'epoca dei social network?',
    modelAnswer:'Pirandello aveva diagnosticato un secolo fa quella che oggi viviamo come esperienza quotidiana: l\'identità come costruzione plurale di immagini per gli altri. Nell\'epoca dei social network tutti costruiamo la nostra immagine pubblica — su Instagram, LinkedIn, in chat, al lavoro, in famiglia. Siamo tutti «centomila»: per il collega, per il follower, per il partner, per il vecchio compagno di scuola, siamo persone diverse. La domanda «chi sono io per gli altri?» ha una concretezza inedita. L\'autoanalisi ossessiva di Vitangelo Moscarda davanti allo specchio (il naso che pende) anticipa la nostra fissazione con la propria immagine. La «maschera» è diventata profilo. L\'autoinganno di Mattia Pascal che pensa di poter ricominciare da capo trova eco nelle identità multiple online. Pirandello aveva anticipato la postmodernità: nessuna verità unica, identità come performance, ruolo come finzione.',
    keywords:['social network','centomila identità','profilo come maschera','autoanalisi','identità come performance','postmodernità','Moscarda anticipa']
  },
  { id:'pi31', type:'mc', topic:'Vita',
    text:'Quale pensatore, citato nel file, sosteneva la teoria della molteplicità della personalità che influenzò il relativismo pirandelliano?',
    options:['Sigmund Freud, con la teoria del sogno','Alfred Binet, con la riflessione sulla personalità multipla','Henri Bergson, con la teoria della durata','Friedrich Nietzsche, con la critica alla morale'],
    correct:1,
    explanation:'Alfred Binet e la sua riflessione sulla molteplicità della personalità — un\'identità non unitaria ma frammentata in tanti «centri» autonomi — è il riferimento esplicito per il relativismo conoscitivo pirandelliano.'
  },
  { id:'pi32', type:'mc', topic:'Vita',
    text:'Per quale motivo Pirandello si iscrisse al Partito Nazionale Fascista nel 1924?',
    options:['Per convinta adesione agli ideali nazionalisti del regime','Per delusione verso il fallimento del liberalismo, percependo il fascismo come «forza vitale e irrazionale»','Per ottenere il finanziamento statale al suo Teatro d\'Arte di Roma','Per sfuggire alle persecuzioni degli intellettuali di sinistra'],
    correct:1,
    explanation:'L\'iscrizione al PNF (1924) nasce da delusione per il fallimento liberale, non da convinzione ideologica. Il fascismo è percepito come «forza vitale e irrazionale» — quasi un\'incarnazione dell\'energia caotica della realtà.'
  },
  { id:'pi33', type:'mc', topic:'Vita',
    text:'In che modo la convivenza con la moglie Antonietta Portolano contribuì alla formazione del relativismo conoscitivo di Pirandello?',
    options:['Isolandolo dalla vita sociale e costringendolo a rifugiarsi nell\'immaginazione','Dimostrandogli in modo vivente l\'impossibilità di una verità univoca: lei vedeva tradimenti inesistenti costruendo un mondo parallelo','Ispirandogli direttamente la trama del Fu Mattia Pascal','Spingendolo a studiare la psicologia clinica di Freud per capirne la malattia'],
    correct:1,
    explanation:'Convivere per anni con Antonietta, che vedeva tradimenti inesistenti e costruiva un mondo parallelo, offre a Pirandello una dimostrazione vivente dell\'impossibilità di una verità univoca. «Se la moglie è convinta di una realtà diversa da quella che percepisco, chi dei due ha torto?»'
  },
  { id:'pi34', type:'tf', topic:'Vita',
    text:'Pirandello ricevette il Premio Nobel per la Letteratura nel 1934.',
    correct:true,
    explanation:'Sì. Nel 1934 Pirandello riceve il Premio Nobel per la Letteratura, riconoscimento del suo contributo al teatro e alla narrativa moderni.'
  },
  { id:'pi35', type:'mc', topic:'Vita',
    text:'Quale fu l\'ultima volontà di Pirandello riguardo ai suoi funerali, in conformità con la sua filosofia?',
    options:['Volle essere sepolto nella contrada Caos di Agrigento dove era nato','Chiese una cerimonia funebre solenne con attori del suo Teatro d\'Arte','Chiese di essere cremato senza cerimonie — per «spogliare» l\'esistenza di ogni apparenza','Volle che il suo corpo fosse esposto nel teatro più famoso d\'Italia'],
    correct:2,
    explanation:'Pirandello aveva chiesto di essere cremato senza cerimonie — in conformità con la sua filosofia di «spogliare» l\'esistenza di ogni apparenza. Morì nel 1936 a Roma, lasciando incompiuta I giganti della montagna.'
  },
  { id:'pi36', type:'mc', topic:'Vita',
    text:'Quale opera rimase incompiuta alla morte di Pirandello nel 1936?',
    options:['Questa sera si recita a soggetto','Uno, nessuno e centomila','I giganti della montagna','I quaderni di Serafino Gubbio operatore'],
    correct:2,
    explanation:'Pirandello lascia incompiuta I giganti della montagna (opera della fase del «teatro dei miti», 1930-1936). Morì a Roma nel 1936.'
  },
  { id:'pi37', type:'tf', topic:'Vita',
    text:'Secondo il file, l\'iscrizione al PNF di Pirandello nasce da una profonda convinzione ideologica nei valori del nazionalismo fascista.',
    correct:false,
    explanation:'Falso. L\'iscrizione al PNF (1924) nasce da delusione per il fallimento liberale, non da convinzione ideologica. Il fascismo è percepito come «forza vitale e irrazionale».'
  },
  { id:'pi38', type:'mc', topic:'Vita',
    text:'Quale autore influenzò le prime prove narrative siciliane di Pirandello nella sua Fase 1 (Verismo siciliano)?',
    options:['Giovanni Verga, che lo introdusse alla tradizione realistica','Luigi Capuana, sotto la cui influenza si sviluppa il verismo siciliano di Pirandello','Gabriele D\'Annunzio, che lo spinse verso la scrittura di teatro','Benedetto Croce, che finanziò le prime pubblicazioni'],
    correct:1,
    explanation:'Nella Fase 1 (Verismo siciliano), Pirandello è sotto l\'influenza di Capuana. Le prime prove narrative — L\'esclusa, Il turno — mostrano ambientazione siciliana e osservazione diretta della realtà sociale.'
  },
  { id:'pi39', type:'mc', topic:'Vita',
    text:'Quali rivolgimenti culturali e scientifici caratterizzano il contesto in cui si forma Pirandello?',
    options:['La certezza positivista del progresso e la stabilità dei valori borghesi','La crisi del positivismo, le scoperte di Freud, Nietzsche, Einstein, Bergson, Binet','La Seconda Rivoluzione Industriale e l\'entusiasmo per la tecnologia moderna','L\'affermarsi del Simbolismo francese in Italia'],
    correct:1,
    explanation:'Pirandello si forma nella crisi di fine Ottocento: il positivismo vacilla. Freud (L\'interpretazione dei sogni, 1900), Nietzsche (Morte di Dio), Einstein (Relatività), Bergson (percezione del tempo in discussione), Binet (molteplicità della personalità). In Italia: crisi degli ideali risorgimentali, divario Nord/Sud, corruzione politica.'
  },
  { id:'pi40', type:'open', topic:'Vita',
    text:'Spiega come la crisi familiare con la moglie Antonietta diventò per Pirandello una «dimostrazione vivente» del relativismo conoscitivo.',
    modelAnswer:'Antonietta Portolano sviluppò una paranoia che la portava a vedere tradimenti inesistenti e a costruire un mondo parallelo. Pirandello si trovò di fronte a un problema filosofico quotidiano: se la moglie era convinta di una realtà diversa, chi dei due aveva torto? La risposta pirandelliana è che non esiste un punto di osservazione neutro e assoluto. La realtà è sempre filtrata dalla soggettività. La crisi familiare divenne il laboratorio filosofico da cui nacque il relativismo conoscitivo: non esiste una verità univoca, ogni individuo vive nella propria versione della realtà.',
    keywords:['Antonietta paranoia','tradimenti inesistenti','mondo parallelo','punto di osservazione neutro','verità univoca','realtà filtrata dalla soggettività','relativismo conoscitivo']
  },
  { id:'pi41', type:'mc', topic:'Poetica',
    text:'Qual è il paradosso centrale del rapporto tra «Vita» e «Forma» nella poetica pirandelliana?',
    options:['La Vita è stabile e la Forma è mobile: i personaggi cercano di stabilizzare la propria forma','Non puoi fare a meno di una Forma — senza di essa non esisti per la società — ma accettarla tradisce la tua vera natura mobile e contraddittoria','La Forma è oppressiva ma alla fine libera l\'individuo: chi la accetta trova pace','La Vita è un concetto astratto mentre la Forma è concreta e misurabile'],
    correct:1,
    explanation:'Il paradosso centrale: non puoi fare a meno di una Forma — senza un nome, senza un ruolo, non esisti per la società — ma accettare una Forma significa tradire la tua vera natura, che è mobile, contraddittoria, non riducibile. I personaggi pirandelliani sono intrappolati esattamente qui.'
  },
  { id:'pi42', type:'mc', topic:'Poetica',
    text:'Cosa significa la formula «Uno, nessuno e centomila» nella poetica pirandelliana?',
    options:['L\'individuo ha un solo vero io, che si smaschera progressivamente','Ogni individuo è «uno» come crede di essere, «nessuno» perché non esiste un sé autentico fisso, e «centomila» perché ogni persona che lo conosce lo vede diversamente','Il protagonista ha avuto tre vite separate, ciascuna con la propria identità','L\'anima umana è composta da tre parti: l\'io conscio, il sé sociale e il sé nascosto'],
    correct:1,
    explanation:'Formula: Uno, nessuno e centomila — ogni individuo è «uno» (come crede di essere), «nessuno» (perché non esiste un sé autentico e fisso), e «centomila» (perché ogni persona che lo conosce lo vede diversamente). L\'identità non è una sostanza, è un processo.'
  },
  { id:'pi43', type:'mc', topic:'Poetica',
    text:'Il relativismo conoscitivo pirandelliano anticipa quali correnti filosofiche?',
    options:['Il materialismo dialettico marxista e il realismo socialista','La fenomenologia, l\'ermeneutica e il prospettivismo nietzscheano','Il neoidealismo crociano e l\'estetica della forma','Il naturalismo e il positivismo evoluzionistico'],
    correct:1,
    explanation:'Dal punto di vista epistemologico, il relativismo di Pirandello anticipa la fenomenologia, l\'ermeneutica e il prospettivismo nietzscheano. La «verità» è sempre «la vostra» o «la mia», mai semplicemente «la verità».'
  },
  { id:'pi44', type:'mc', topic:'Poetica',
    text:'Nell\'Umorismo (1908), qual è la differenza tra «avvertimento del contrario» e «sentimento del contrario»?',
    options:['L\'avvertimento è la risposta intellettuale; il sentimento è quella viscerale e irrazionale','L\'avvertimento è la reazione istintiva e il riso immediato; il sentimento è quando la riflessione subentra e mescola riso e pietà','L\'avvertimento riguarda le cose fisiche; il sentimento riguarda le emozioni interiori','L\'avvertimento è tipico della commedia; il sentimento è tipico della tragedia'],
    correct:1,
    explanation:'Avvertimento del contrario: la reazione immediata e istintiva — ridiamo. Sentimento del contrario: quando subentra la riflessione — ci chiediamo il perché, immaginiamo la sofferenza nascosta. Il riso si mescola con la pietà e la comprensione. Implicazione etica: l\'umorismo è una forma di conoscenza empatica.'
  },
  { id:'pi45', type:'mc', topic:'Poetica',
    text:'Quale ruolo svolge la follia nell\'universo pirandelliano?',
    options:['È solo una condizione tragica e irrecuperabile, simbolo del fallimento della ragione borghese','È esclusivamente un pretesto narrativo per giustificare comportamenti irrazionali','È ambivalente: da un lato condizione tragica, dall\'altro forma paradossale di libertà — l\'unico spazio per sfuggire alle maschere','È una malattia curabile: i personaggi che la attraversano alla fine guariscono'],
    correct:2,
    explanation:'In Pirandello la follia è ambivalente. Da un lato è condizione tragica; dall\'altro è una forma paradossale di libertà, l\'unico spazio per sfuggire alle gabbie della normalità. Chi viene dichiarato «pazzo» non è più obbligato a portare le maschere sociali.'
  },
  { id:'pi46', type:'mc', topic:'Poetica',
    text:'Quali tre opere compongono la trilogia metateatrale di Pirandello?',
    options:['Il fu Mattia Pascal (1904), Enrico IV (1922), Novelle per un anno (1922–1937)','Sei personaggi in cerca d\'autore (1921), Ciascuno a suo modo (1924), Questa sera si recita a soggetto (1930)','L\'umorismo (1908), Così è (se vi pare) (1917), Enrico IV (1922)','I giganti della montagna, La vita che ti diedi, La nuova colonia'],
    correct:1,
    explanation:'La formula del «teatro nel teatro» è sviluppata nella trilogia: Sei personaggi in cerca d\'autore (1921), Ciascuno a suo modo (1924) e Questa sera si recita a soggetto (1930).'
  },
  { id:'pi47', type:'tf', topic:'Poetica',
    text:'Secondo Pirandello, sotto la maschera sociale si nasconde un «vero io» autentico che il personaggio può liberare.',
    correct:false,
    explanation:'Falso. Sotto la maschera non c\'è un «vero io» da liberare. Ci sono solo altri strati di maschere, in una regressione senza fondo. L\'identità non è una sostanza, è un processo.'
  },
  { id:'pi48', type:'mc', topic:'Poetica',
    text:'Cosa caratterizza il «furore retorico» dei personaggi pirandelliani?',
    options:['Usano un linguaggio poetico e figurato, ricco di metafore e allegorie','Esprimono le proprie posizioni politiche con eloquenza nei discorsi pubblici','Parlano ossessivamente, analizzano e smontano le certezze proprie e altrui, pensano parlando — il dialogo come autopsia verbale del sé','Usano il dialetto siciliano per esprimere autenticità popolare'],
    correct:2,
    explanation:'I protagonisti parlano con un «furore retorico» che li distingue dagli altri personaggi. I ragionatori parlano troppo, si perdono in analisi sempre più sottili. I personaggi pensano parlando, si smontano nel parlare. Funzione quasi psicanalitica: autopsia verbale del sé.'
  },
  { id:'pi49', type:'mc', topic:'Poetica',
    text:'Come definisce Benedetto Croce la prosa di Pirandello, e cosa si cela dietro questa definizione secondo il file?',
    options:['«Brillante e ironica» — giudizio positivo che Pirandello condivideva','«Oscura e incomprensibile» — giudizio negativo che portò al rifiuto delle sue opere','«Grigia e monotona» — coglie un elemento reale ma lo interpreta negativamente: è una scelta deliberata per mimare la vacuità borghese','«Sublime e classica» — il massimo elogio del critico crociano'],
    correct:2,
    explanation:'Croce definisce la prosa di Pirandello «grigia e monotona» — coglie un elemento reale ma lo interpreta negativamente. In realtà è funzionale: nei testi borghesi diventa convenzionale e mediocre deliberatamente, per mimarne dall\'interno la vacuità.'
  },
  { id:'pi50', type:'tf', topic:'Poetica',
    text:'Il dramma Così è (se vi pare) nasce dalla trasformazione della novella La signora Frola e il signor Ponza.',
    correct:true,
    explanation:'Sì. È un esempio dell\'osmosi tra le opere: la novella La signora Frola e il signor Ponza viene trasformata nel dramma Così è (se vi pare), che già nel titolo dichiara l\'irrisolvibilità della verità.'
  },
  { id:'pi51', type:'mc', topic:'Poetica',
    text:'Quale delle seguenti descrive correttamente la «Fase 4» della produzione pirandelliana?',
    options:['Verismo siciliano: influenza di Capuana, ambientazione siciliana, L\'esclusa e Il turno','Teatro della crisi: Sei personaggi (1921), Enrico IV (1922), trionfo internazionale','Teatro dei miti (1930–1936): temi simbolici e mitologici, I giganti della montagna (incompiuto)','La crisi dell\'io: Il fu Mattia Pascal (1904), L\'umorismo (1908), Novelle per un anno'],
    correct:2,
    explanation:'Fase 4 — Teatro dei miti (1930–1936): temi simbolici e mitologici, riflessione sulla sopravvivenza dell\'arte nella modernità. Include I giganti della montagna (incompiuto). Fase 1: Verismo siciliano. Fase 2: Crisi dell\'io. Fase 3: Teatro della crisi.'
  },
  { id:'pi52', type:'mc', topic:'Poetica',
    text:'Nell\'osmosi tra le opere pirandelliane, quale novella viene trasformata nell\'opera teatrale L\'uomo dal fiore in bocca?',
    options:['La patente','La carriola','La morte addosso','Il treno ha fischiato'],
    correct:2,
    explanation:'La novella La morte addosso diventa il dramma L\'uomo dal fiore in bocca. È un esempio dell\'unico grande corpus pirandelliano: situazioni, personaggi e testi interi passano da un\'opera all\'altra in un continuo processo di riscrittura.'
  },
  { id:'pi53', type:'open', topic:'Poetica',
    text:'Usando la metafora del fiume, spiega la distinzione pirandelliana tra Vita e Forma.',
    modelAnswer:'La metafora del fiume illustra la distinzione: la Vita è come un fiume — ha una natura continua e fluida, i nostri pensieri e desideri non stanno mai fermi, non siamo mai esattamente la stessa persona di ieri. La Forma è tutto ciò che cerca di fermare questo flusso e dargli un\'etichetta: il nostro nome, il nostro mestiere, il ruolo in famiglia. È come voler fotografare un fiume: nel momento in cui scatti, l\'acqua è già altrove. Il paradosso è che non puoi fare a meno di una Forma — senza nome e ruolo non esisti per la società — ma accettarla tradisce la tua vera natura mobile. Chi crede di avere un\'identità stabile si inganna; chi cerca di liberarsi da tutte le forme rischia di dissolversi, di essere nessuno.',
    keywords:['fiume fluido','fotografare il fiume','Forma etichetta','paradosso','non puoi farne a meno','tradisce la natura','dissolversi nessuno']
  },
  { id:'pi54', type:'mc', topic:'Poetica',
    text:'Come si differenzia lo sdoppiamento pirandelliano dalla tradizione del Doppelgänger romantico?',
    options:['Nessuna differenza: Pirandello si ispira direttamente al doppio romantico senza modificarlo','Lo sdoppiamento pirandelliano è meno angoscioso e più ottimista','Non si tratta dello scontro tra due identità speculari, ma della scoperta che l\'identità stessa è una finzione — non esiste un «originale» da contrapporre a una «copia»','Lo sdoppiamento pirandelliano riguarda solo la dimensione fisica, quello romantico la dimensione psichica'],
    correct:2,
    explanation:'Pirandello è connesso alla tradizione del Doppelgänger romantico, ma lo porta a conseguenze più radicali: non si tratta dello scontro tra due identità speculari, ma della scoperta che l\'identità stessa è una finzione — non esiste un «originale» da contrapporre a una «copia».'
  },
  { id:'pi55', type:'tf', topic:'Poetica',
    text:'Pirandello ritiene che la psicoanalisi freudiana possa risolvere la frammentazione dell\'io moderno.',
    correct:false,
    explanation:'Falso. Pirandello non crede nell\'unità del sé e non cerca terapia. La frammentazione dell\'io non è per lui una malattia da curare, ma la condizione normale e insuperabile dell\'essere umano moderno.'
  },
  { id:'pi56', type:'mc', topic:'Poetica',
    text:'Cosa significa nel teatro pirandelliano che la «quarta parete scompare»?',
    options:['Il palcoscenico perde il soffitto per fare entrare la luce naturale','Il teatro smette di fingere di non essere teatro: mostra i propri meccanismi, il pubblico è coinvolto nella riflessione sulla finzione','Il regista elimina fisicamente una delle pareti dello spazio scenico','Gli attori recitano senza scenografia per risparmiare sui costi'],
    correct:1,
    explanation:'La «quarta parete» è la convenzione per cui gli attori fingono che il pubblico non esista. Nel teatro pirandelliano questa scompare: il teatro si denuda, mostrando i propri meccanismi. Lo spettacolo diventa riflessione su sé stesso.'
  },
  { id:'pi57', type:'mc', topic:'Poetica',
    text:'Perché i Personaggi dei Sei personaggi sono considerati «più reali» degli attori?',
    options:['Perché gli attori sono pagati per recitare, mentre i Personaggi vivono la loro storia autenticamente','Perché l\'attore cambia sera dopo sera, mentre il Personaggio è fisso nella sua essenza — ha una paradossale «immortalità»','Perché i Personaggi sono ispirati a persone realmente esistite','Perché parlano in dialetto siciliano autentico'],
    correct:1,
    explanation:'L\'attore cambia sera dopo sera, mentre il Personaggio è fisso nella sua essenza. Questa è la paradossale «immortalità del personaggio»: la forma fissa la vita, la vita sfugge alla forma. Il Personaggio ha una vita propria che nessun attore può pienamente incarnare.'
  },
  { id:'pi58', type:'open', topic:'Poetica',
    text:'Spiega perché il «sentimento del contrario» dell\'Umorismo è definito nel file una forma di conoscenza empatica, usando l\'esempio della vecchia imbellettata.',
    modelAnswer:'Il sentimento del contrario è la fase in cui alla reazione istintiva del riso subentra la riflessione. Nell\'esempio della vecchia signora imbellettata e vestita da giovane, la prima reazione è il riso: percepiamo l\'incongruità. Ma poi la riflessione interviene: perché si veste così? Forse per trattenere il marito che la tradisce, o per non sentirsi abbandonata dai figli. Il riso si mescola con la pietà e la comprensione. Questo processo richiede empatia: immaginare la sofferenza nascosta dietro l\'apparenza comica. Pirandello chiama questo sentimento del contrario e lo definisce una forma di conoscenza empatica — non ci si ferma all\'apparenza grottesca, si tenta di capire la persona nella sua interezza. L\'umorismo non condanna, ma cerca di comprendere.',
    keywords:['avvertimento riso','sentimento pietà','vecchia imbellettata','riflessione','empatia','marito che tradisce','comprensione','conoscenza empatica','umorismo non condanna']
  },
  { id:'pi59', type:'mc', topic:'Poetica',
    text:'Come si differenziano l\'ironia e il grottesco nell\'universo stilistico pirandelliano?',
    options:['L\'ironia riguarda la dimensione visiva e il grottesco quella sonora nelle opere teatrali','L\'ironia è lo strumento che presenta simultaneamente lato comico e doloroso; il grottesco è la distorsione/esagerazione in cui la pressione Vita-Forma ha prodotto una rottura visibile','L\'ironia è tipica delle novelle siciliane; il grottesco è tipico del teatro romano','L\'ironia è usata solo nelle opere teoriche; il grottesco nelle opere narrative'],
    correct:1,
    explanation:'L\'ironia è lo strumento per presentare simultaneamente il lato comico e quello doloroso. Il grottesco è la distorsione, l\'esagerazione: i personaggi grotteschi sono individui in cui la pressione tra vita e forma ha prodotto una rottura visibile, quasi esteriore.'
  },
  { id:'pi60', type:'mc', topic:'Poetica',
    text:'In Enrico IV, perché il protagonista sceglie di continuare a fingersi pazzo dopo aver riacquistato la ragione?',
    options:['Perché ha paura di non essere più amato dalla donna per cui si era vestito da imperatore','Perché la follia fittizia è diventata un\'abitudine impossibile da abbandonare dopo 12 anni','Perché quella maschera della follia gli offre una libertà e un potere che la vita «normale» non darebbe','Perché vuole vendicarsi di chi lo ha fatto credere pazzo'],
    correct:2,
    explanation:'Il protagonista ha la possibilità di uscire dalla follia ma sceglie consapevolmente di rimanere nel personaggio del folle imperatore, perché quella maschera gli offre una libertà che la vita «normale» non darebbe. La follia diventa così il suo esercizio più lucido della ragione.'
  },
  { id:'pi61', type:'mc', topic:'Opere',
    text:'Nel Fu Mattia Pascal, perché il protagonista non può vivere come Adriano Meis?',
    options:['Perché è riconosciuto dalla moglie che lo ha cercato per anni','Perché senza identità legale non può compiere nemmeno azioni quotidiane: non può denunciare un furto senza rischiare di essere scoperto','Perché Adriano Meis viene arrestato per frode e costretto a rivelare la vera identità','Perché si innamora della figlia del padrone di casa e non può sposarla senza nome legale'],
    correct:1,
    explanation:'Mattia finge la propria morte, si reinventa come Adriano Meis, poi scopre che vivere senza identità legale è impossibile: non può denunciare un furto senza rischiare di essere scoperto. Inscena un suicidio nel Tevere, torna al paese: la moglie si è risposata. Va a visitare la propria tomba.'
  },
  { id:'pi62', type:'mc', topic:'Opere',
    text:'Quale osservazione della moglie Dida scatena la crisi esistenziale totale di Vitangelo Moscarda?',
    options:['Gli dice che non la ama veramente e che è sempre stato un marito assente','Gli fa notare che il suo naso «pende un pochino verso destra»','Gli rivela che gli amici lo considerano un po\' sciocco','Gli dice che ha perso i capelli e sembra invecchiato di molto'],
    correct:1,
    explanation:'La moglie Dida fa notare a Vitangelo che il suo naso «pende un pochino verso destra». Osservazione banale — quasi comica. Vitangelo si guarda allo specchio e vede per la prima volta il proprio naso come lo vedono gli altri: estraneo. Da qui parte la crisi esistenziale totale.'
  },
  { id:'pi63', type:'mc', topic:'Opere',
    text:'Come fu accolta la première dei Sei personaggi in cerca d\'autore a Roma nel 1921?',
    options:['Fu accolta con entusiasmo immediato dal pubblico e dalla critica','Scandalizzò Roma; divenne presto un\'opera rappresentata in tutto il mondo, fondamentale per la nascita del teatro moderno','Passò quasi inosservata fino alla traduzione in francese','Fu censurata dal governo e la rappresentazione interrotta'],
    correct:1,
    explanation:'La première del 1921 scandalizza Roma; diventa presto un\'opera rappresentata in tutto il mondo. Fondamentale per la nascita del teatro moderno. La trilogia metateatrale comprende anche Ciascuno a suo modo (1924) e Questa sera si recita a soggetto (1930).'
  },
  { id:'pi64', type:'tf', topic:'Opere',
    text:'L\'umorismo (1908) è un romanzo in cui Pirandello applica la sua teoria alla vita di un personaggio.',
    correct:false,
    explanation:'Falso. L\'umorismo (1908) è un saggio teorico — il manifesto della poetica pirandelliana. Prima parte: storico-filologica. Seconda parte: la distinzione avvertimento/sentimento del contrario. È anche una risposta ai crociani.'
  },
  { id:'pi65', type:'mc', topic:'Opere',
    text:'Quante novelle furono realizzate per il progetto Novelle per un anno (1922–1937)?',
    options:['Tutte e 365 come previsto','Circa 100, meno di un terzo','250 novelle su 365 previste','Solo 288 novelle nei 24 volumi completati'],
    correct:2,
    explanation:'Progetto ambizioso: 365 novelle in 24 volumi. Realizzate: 250 novelle su 365. Oscillano tra la Sicilia (personaggi grotteschi, lessico dialettale, forza plastica) e Roma (mondo piccolo-borghese, occhio freddo e distaccato).'
  },
  { id:'pi66', type:'mc', topic:'Opere',
    text:'In Enrico IV, per quanti anni il protagonista rimane nella follia prima di riacquistare la ragione?',
    options:['5 anni','12 anni','20 anni','Solo pochi mesi, poi la mantiene consapevolmente'],
    correct:1,
    explanation:'Durante una cavalcata in costume, un giovane cade e crede di essere Enrico IV di Germania. Dopo 12 anni riacquista la ragione, ma ha perso tutto. Sceglie di continuare a fingersi pazzo.'
  },
  { id:'pi67', type:'mc', topic:'Opere',
    text:'Quale delle seguenti non è una delle novelle fondamentali citate nel file tra le Novelle per un anno?',
    options:['Il treno ha fischiato','La patente','Il fu Mattia Pascal','La carriola'],
    correct:2,
    explanation:'Il fu Mattia Pascal è un romanzo (1904), non una novella delle Novelle per un anno. Le novelle fondamentali citate sono: Il treno ha fischiato, La patente, La carriola, La signora Frola e il signor Ponza, La morte addosso.'
  },
  { id:'pi68', type:'tf', topic:'Opere',
    text:'Il romanzo Uno, nessuno e centomila fu iniziato a scrivere nel 1908, anche se pubblicato solo nel 1926.',
    correct:true,
    explanation:'Sì. Uno, nessuno e centomila (1926, iniziato 1908) è la formulazione più estrema del relativismo pirandelliano. La lunghissima stesura spiega perché materiali del romanzo vengano usati altrove nel frattempo.'
  },
  { id:'pi69', type:'mc', topic:'Opere',
    text:'Nel Fu Mattia Pascal, quale personaggio introduce le metafore della lanterninosofia e dello strappo nel cielo di carta?',
    options:['Mattia Pascal stesso, durante la riflessione sulla propria finta morte','Il teosofo Anselmo Paleari, padrone di casa di Adriano Meis a Roma','La moglie di Mattia, che riflette sul marito scomparso','Il notaio che gestisce il lascito della famiglia Pascal'],
    correct:1,
    explanation:'Il teosofo Anselmo Paleari — padrone di casa di Adriano Meis a Roma — fornisce le due metafore più celebri: la lanterninosofia (ogni essere umano porta un piccolo lanternino nel buio) e lo strappo nel cielo di carta.'
  },
  { id:'pi70', type:'open', topic:'Opere',
    text:'Descrivi la struttura e il significato della trilogia metateatrale di Pirandello, spiegando il concetto di «teatro nel teatro».',
    modelAnswer:'La trilogia metateatrale è composta da Sei personaggi in cerca d\'autore (1921), Ciascuno a suo modo (1924) e Questa sera si recita a soggetto (1930). La formula del teatro nel teatro porta la riflessione sulla rappresentazione alle conseguenze più radicali: lo spettacolo diventa riflessione su sé stesso. In Sei personaggi, personaggi abbandonati dall\'autore irrompono in una prova teatrale chiedendo di essere rappresentati; ma gli attori non riescono a cogliere la loro vita autentica. La quarta parete scompare: il teatro si denuda, mostrando i propri meccanismi. Il Personaggio, una volta creato, esiste indipendentemente dall\'autore ed è «più reale» dell\'attore perché è fisso nella sua essenza mentre l\'attore cambia sera dopo sera. Il teatro nel teatro riflette il tema centrale di tutta la poetica: il rapporto tra vita autentica e forma.',
    keywords:['trilogia','Sei personaggi 1921','Ciascuno a suo modo 1924','Questa sera si recita 1930','quarta parete','teatro si denuda','Personaggio più reale','autonomia del personaggio','vita vs forma']
  },
  { id:'pi71', type:'mc', topic:'Opere',
    text:'Quale scelta finale fa Vitangelo Moscarda alla fine di Uno, nessuno e centomila?',
    options:['Si suicida, incapace di sopportare la perdita dell\'identità','Ritorna dalla moglie Dida, riconciliandosi con la propria vita borghese','Rinuncia a ogni proprietà, ruolo e nome — sceglie di essere «nessuno» e si ritira in un ospizio','Emigra all\'estero per ricominciare con una nuova identità'],
    correct:2,
    explanation:'La gente lo crede pazzo; viene internato. Sceglie di essere «nessuno»: rinuncia a ogni proprietà, ruolo e nome. Si ritira in un ospizio. L\'identità individuale non esiste come sostanza: è solo la somma delle percezioni altrui.'
  },
  { id:'pi72', type:'mc', topic:'Opere',
    text:'Come è strutturato il saggio L\'umorismo (1908)?',
    options:['Tre parti: storia, teoria e applicazione alle opere di Pirandello','Prima parte storico-filologica (etimologia, umorismo come tradizione letteraria); seconda parte: la distinzione fondamentale avvertimento/sentimento del contrario','Prima parte: analisi delle commedie di Shakespeare; seconda parte: la teoria del riso applicata alla letteratura italiana','È una raccolta di saggi brevi senza struttura organica'],
    correct:1,
    explanation:'Il saggio L\'umorismo (1908): Prima parte storico-filologica, etimologia del termine, l\'umorismo come tradizione letteraria. Seconda parte: la distinzione fondamentale tra avvertimento del contrario (reazione istintiva, riso) e sentimento del contrario (riflessione + pietà).'
  },
  { id:'pi73', type:'mc', topic:'Opere',
    text:'Di quale trilogia fanno parte Ciascuno a suo modo (1924) e Questa sera si recita a soggetto (1930)?',
    options:['La trilogia dell\'identità, insieme a Uno, nessuno e centomila','La trilogia metateatrale del «teatro nel teatro», insieme a Sei personaggi in cerca d\'autore (1921)','La trilogia siciliana, insieme a L\'esclusa','La trilogia della crisi, insieme al Fu Mattia Pascal'],
    correct:1,
    explanation:'Ciascuno a suo modo (1924) e Questa sera si recita a soggetto (1930) fanno parte della trilogia metateatrale del «teatro nel teatro», insieme a Sei personaggi in cerca d\'autore (1921).'
  },
  { id:'pi74', type:'tf', topic:'Opere',
    text:'Nel Fu Mattia Pascal, dopo aver finto la morte, Mattia si reinventa sotto il nome di Adriano Meis.',
    correct:true,
    explanation:'Sì. Mattia finge la propria morte, si reinventa come Adriano Meis, poi scopre che vivere senza identità legale è impossibile. Inscena un suicidio nel Tevere, torna al paese: la moglie si è risposata. Va a visitare la propria tomba.'
  },
  { id:'pi75', type:'mc', topic:'Opere',
    text:'Le Novelle per un anno oscillano tra due ambientazioni principali. Quali sono le loro caratteristiche stilistiche rispettive?',
    options:['Nord Italia (stile realistico lombardo) vs. Sud Italia (stile neorealista pugliese)','Sicilia (personaggi grotteschi, lessico dialettale, forza plastica) vs. Roma (mondo piccolo-borghese, occhio freddo e distaccato)','Milano (stile industriale moderno) vs. Napoli (commedia dell\'arte e tradizione popolare)','Parigi (stile decadente e simbolista) vs. Palermo (verismo di matrice verghiana)'],
    correct:1,
    explanation:'Le novelle oscillano tra la Sicilia (personaggi grotteschi, lessico dialettale, forza plastica) e Roma (mondo piccolo-borghese, occhio freddo e distaccato). Nelle novelle siciliane la scrittura acquista vivacità; in quelle borghesi romane diventa convenzionale e mediocre — deliberatamente.'
  },
  { id:'pi76', type:'mc', topic:'Testi',
    text:'Chi è Belluca, protagonista de Il treno ha fischiato, e cosa gli succede?',
    options:['Un contadino siciliano che sogna di fuggire in città','Un piccolo impiegato schiacciato da una vita di miseria totale che «impazzisce» quando il fischio di un treno lontano riattiva in lui la coscienza che il mondo esiste','Un ferroviere che perde il lavoro, simbolo della disoccupazione industriale','Un professore che ha perso la memoria e si rifà una vita lontano dalla famiglia'],
    correct:1,
    explanation:'Belluca è un piccolo impiegato schiacciato da una vita di miseria: lavora fino allo sfinimento, mantiene una famiglia enorme, non ha un istante per sé. Un collega narratore capisce: stanotte Belluca ha sentito fischiare un treno lontano — e ha ricordato che il mondo esiste. La cornice narrativa mette in pratica il principio dell\'umorismo: primo punto di vista il riso, secondo il sentimento del contrario.'
  },
  { id:'pi77', type:'mc', topic:'Testi',
    text:'Cosa simboleggia il gesto di far fare la carriola alla cagnolina ne La carriola?',
    options:['La crudeltà inconscia della borghesia verso i più deboli','L\'unico momento in cui l\'avvocato si sente davvero libero e sé stesso — al di là di tutti i ruoli imposti; gesto assurdo che è l\'unica autenticità possibile','Il desiderio infantile che sopravvive sotto la maschera del professionista rispettato','La metafora del capovolgimento dei valori tradizionali nella modernità'],
    correct:1,
    explanation:'L\'avvocato affermato scopre che la sua vita non gli appartiene: è una serie di ruoli imposti. In un momento solitario, prende la cagnolina e la fa fare la carriola. Gesto assurdo, infantile, privo di senso razionale. È l\'unico momento in cui si sente davvero libero. La libertà si riduce a qualcosa di grottesco — il che suggerisce che forse non esiste una vera libertà.'
  },
  { id:'pi78', type:'mc', topic:'Testi',
    text:'Perché Rosario Chiàrchiaro de La patente si presenta in tribunale chiedendo il riconoscimento ufficiale di iettatore?',
    options:['Perché vuole dimostrare scientificamente che la iettatura esiste','Per sfruttare economicamente la paura altrui — appropriarsi della maschera imposta e farne strumento di sopravvivenza','Per vendicarsi dei compaesani che lo hanno escluso dalla vita sociale','Per ottenere una pensione statale come persona emarginata'],
    correct:1,
    explanation:'Chiàrchiaro, esasperato dall\'immagine di iettatore impostagli, ha un\'idea paradossale: chiedere al giudice il riconoscimento ufficiale per sfruttare economicamente la paura altrui. Invece di liberarsi dall\'immagine, sceglie di appropriarsela e farne strumento di sopravvivenza. Umorismo pirandelliano nella sua forma più amara.'
  },
  { id:'pi79', type:'mc', topic:'Testi',
    text:'Nella novella La signora Frola e il signor Ponza, cosa afferma la signora Ponza quando viene finalmente chiamata a testimoniare?',
    options:['Conferma la versione di Ponza: è la seconda moglie, non la figlia della Frola','Conferma la versione della Frola: è davvero sua figlia, tenuta segregata','Afferma di essere «nessuna» — sia la figlia della Frola sia la seconda moglie di Ponza — solo ciò che ciascuno ha bisogno che sia','Dichiara di non ricordare nulla'],
    correct:2,
    explanation:'La signora Ponza afferma di essere sia la figlia della Frola sia la seconda moglie di Ponza: è «nessuna», è solo ciò che ciascuno ha bisogno che sia. L\'irrisolvibilità dell\'enigma è la tesi: non esiste una versione «vera» della storia.'
  },
  { id:'pi80', type:'tf', topic:'Testi',
    text:'La metafora della lanterninosofia si trova nel romanzo Uno, nessuno e centomila.',
    correct:false,
    explanation:'Falso. La lanterninosofia si trova nel Fu Mattia Pascal (capitoli centrali), introdotta dal teosofo Anselmo Paleari — padrone di casa di Adriano Meis a Roma. Non è in Uno, nessuno e centomila.'
  },
  { id:'pi81', type:'mc', topic:'Testi',
    text:'Nello strappo nel cielo di carta (introdotto nel Fu Mattia Pascal da Paleari), cosa vede il burattino?',
    options:['Vede il pubblico in platea che ride di lui','Il burattino che interpreta Oreste, nel momento più drammatico, alza la testa e vede uno strappo nel fondale dipinto — il buio vero al di là della finzione','Vede il burattinaio che lo muove e realizza di non avere libero arbitrio','Vede riflessa la propria immagine in un vetro rotto'],
    correct:1,
    explanation:'Lo strappo nel cielo di carta: il burattino che interpreta Oreste alza la testa e vede uno strappo nel fondale dipinto. Vede il buio vero al di là della finzione. L\'uomo moderno sa che il «cielo» che lo sovrasta è solo carta dipinta, una convenzione. Il dramma non è più possibile — solo l\'angoscia e l\'ironia.'
  },
  { id:'pi82', type:'mc', topic:'Testi',
    text:'Qual è la struttura argomentativa del passo sulla vecchia imbellettata nell\'Umorismo?',
    options:['Prima la critica morale alla vanità, poi l\'analisi sociologica della condizione femminile','Una strategia in due tempi: prima la reazione immediata (riso), poi la smonta con la riflessione che porta pietà e comprensione','Un\'unica analisi filosofica astratta, senza esempi concreti','Prima il contesto storico, poi l\'applicazione della teoria estetica'],
    correct:1,
    explanation:'Strategia argomentativa in due tempi: prima la reazione immediata (avvertimento del contrario = riso), poi la smonta con la riflessione (sentimento del contrario = pietà + comprensione). La struttura è didattica ma il tono non è freddo — incarna già il «sentimento del contrario».'
  },
  { id:'pi83', type:'open', topic:'Testi',
    text:'Analizza come la strategia di Chiàrchiaro ne La patente illustri il tema pirandelliano della maschera rivendicata.',
    modelAnswer:'Chiàrchiaro porta una maschera che tutta la comunità gli ha imposto: quella di iettatore. La reazione attesa sarebbe combatterla. Chiàrchiaro fa l\'opposto: invece di negare la maschera, sceglie di appropriarsela, di farla propria e di sfruttarla come fonte di reddito — chiedendo al giudice il riconoscimento ufficiale. Questo è l\'umorismo pirandelliano nella sua forma più amara: la risposta al paradosso della maschera non è la sua negazione ma la sua radicalizzazione. Né vittoria né sconfitta, solo un paradosso grottesco — la sopravvivenza all\'interno delle convenzioni sociali attraverso il loro rovesciamento. La maschera imposta dalla società viene accettata, anzi rivendicata.',
    keywords:['maschera imposta','appropriarsi','rivendicare','riconoscimento ufficiale','sfruttare economicamente','paradosso grottesco','umorismo amaro','rovesciamento','sopravvivenza']
  },
  { id:'pi84', type:'mc', topic:'Confronti',
    text:'Qual è il punto di tangenza tra Freud e Pirandello, nonostante le loro profonde differenze?',
    options:['Il riferimento ad Alfred Binet e alla sua teoria della personalità multipla — un soggetto non unitario ma un aggregato di «stati» diversi e contraddittori','L\'uso del sogno come chiave interpretativa dei comportamenti inconsci','La critica alla famiglia borghese come istituzione repressiva','La fiducia nella scienza come strumento di guarigione dell\'io'],
    correct:0,
    explanation:'Il punto di tangenza tra Freud e Pirandello è Alfred Binet e la sua teoria della personalità multipla. Ma le risposte sono opposte: Freud crede nella terapia che ricostituisce l\'unità; Pirandello ritiene la frammentazione condizione normale e insuperabile.'
  },
  { id:'pi85', type:'mc', topic:'Confronti',
    text:'Quale opera di Samuel Beckett è considerata impensabile senza i Sei personaggi di Pirandello?',
    options:['Finale di partita','Aspettando Godot','Molloy','Murphy'],
    correct:1,
    explanation:'Samuel Beckett: Aspettando Godot è impensabile senza i Sei personaggi. Il personaggio intrappolato in un\'attesa senza senso, il teatro che mostra il meccanismo del proprio funzionamento — temi fondamentali che Pirandello aveva già esplorato.'
  },
  { id:'pi86', type:'mc', topic:'Confronti',
    text:'Nella tabella comparativa Pirandello–Svevo, come si differenzia il loro rapporto con Freud?',
    options:['Entrambi sono ugualmente distanti dalla psicoanalisi freudiana','Pirandello è distante da Freud (nessun inconscio, nessuna terapia); Svevo è vicino (la coscienza di Zeno è esplicitamente psicoanalitica)','Svevo è distante da Freud; Pirandello usa l\'inconscio come motore narrativo','Entrambi sono influenzati da Freud, ma in modo diverso'],
    correct:1,
    explanation:'Tabella comparativa — Relazione con Freud: Pirandello = Distante (nessun inconscio, nessuna terapia). Svevo = Vicina (la coscienza di Zeno è esplicitamente psicoanalitica). È una delle differenze fondamentali tra i due autori.'
  },
  { id:'pi87', type:'mc', topic:'Confronti',
    text:'Quale opera di Pirandello anticipa le riflessioni di Walter Benjamin sulla perdita dell\'«aura» dell\'opera d\'arte nel cinema?',
    options:['Il fu Mattia Pascal (1904)','Sei personaggi in cerca d\'autore (1921)','I quaderni di Serafino Gubbio operatore (1915–1916)','Enrico IV (1922)'],
    correct:2,
    explanation:'I Quaderni di Serafino Gubbio operatore (1915–1916) anticipano le riflessioni di Benjamin (L\'opera d\'arte nell\'epoca della sua riproducibilità tecnica, 1936): la perdita dell\'«aura» dell\'opera d\'arte nel cinema. Pirandello aveva già intuito questo nel 1915. Serafino Gubbio, ridotto a funzione della macchina da presa, è il primo personaggio della «società dello spettacolo» di Debord.'
  },
  { id:'pi88', type:'tf', topic:'Confronti',
    text:'Pirandello condivide con Čechov la riflessione metateatrale che ha portato alla scomparsa della «quarta parete».',
    correct:false,
    explanation:'Falso. Con Čechov Pirandello condivide l\'attenzione alle piccole miserie quotidiane, non la riflessione metateatrale. Anzi, il file precisa che «Pirandello va oltre: porta la riflessione metateatrale a un livello che nessuno di questi autori [Ibsen, Strindberg, Čechov] aveva raggiunto».'
  },
  { id:'pi89', type:'mc', topic:'Confronti',
    text:'Quale elemento del teatro di Eugène Ionesco è direttamente collegato all\'eredità pirandelliana?',
    options:['L\'uso del dialetto regionale come strumento di critica sociale','Il naturalismo psicologico e la profondità dei personaggi','L\'identità come ruolo vuoto, il linguaggio come non-comunicazione, il teatro dell\'assurdo come smontaggio delle convenzioni','La critica alla borghesia attraverso il melodramma tradizionale'],
    correct:2,
    explanation:'Eugène Ionesco: l\'identità come ruolo vuoto, il linguaggio come non-comunicazione, il teatro dell\'assurdo come smontaggio delle convenzioni — tutti temi che Pirandello aveva già esplorato. È considerato erede diretto di Pirandello.'
  },
  { id:'pi90', type:'open', topic:'Confronti',
    text:'Confronta la visione dell\'io in Pirandello e in Svevo, usando la tabella comparativa presente nel file.',
    modelAnswer:'La tabella comparativa mostra differenze profonde. In Pirandello l\'io è frammentato, molteplice, senza un «originale» — formula: Uno, nessuno e centomila. In Svevo l\'io è inetto, diviso tra volontà e incapacità di agire. Rispetto a Freud: Pirandello è distante (nessun inconscio, nessuna terapia), Svevo è vicino (la coscienza di Zeno è esplicitamente psicoanalitica). Soluzione della crisi: in Pirandello non esiste (la frammentazione è insuperabile); in Svevo è ironica (Zeno «guarisce» ma la guarigione è fittizia). Forma narrativa: Pirandello usa il monologo ragionante e il dialogo ossessivo; Svevo usa il diario inattendibile e il narratore inaffidabile. Teatro: centrale e innovativo per Pirandello; secondario per Svevo. Contesto geografico: Sicilia e Roma per Pirandello; Trieste per Svevo (margine della civiltà asburgica, crocevia culturale).',
    keywords:['frammentato molteplice','inetto diviso','Freud distante','Freud vicino','nessuna soluzione','guarigione fittizia','monologo ragionante','diario inattendibile','teatro centrale','Sicilia Roma','Trieste asburgica']
  },
  { id:'pi91', type:'mc', topic:'Vita · Nobel',
    text:'In quale anno Pirandello riceve il Nobel per la letteratura?',
    options:['1929','1931','1934','1936'],
    correct:2,
    explanation:'Pirandello riceve il Nobel nel 1934. La motivazione parla di «audace e brillante rinnovamento dell\'arte drammatica e teatrale». Il riconoscimento internazionale consacra il teatro pirandelliano come rivoluzione mondiale.'
  },
  { id:'pi92', type:'mc', topic:'Teatro · Enrico IV',
    text:'Cosa rende «Enrico IV» (1922) una delle opere più ambigue di Pirandello?',
    options:['Il protagonista è davvero pazzo e non sa di non esserlo','Il protagonista ha finto la follia per vent\'anni dopo un incidente — ora è guarito ma sceglie consapevolmente di continuare a fare il pazzo come protezione dalla realtà','La pièce non ha una struttura narrativa fissa','Il re non esiste e la pièce è metafisicamente priva di soggetto'],
    correct:1,
    explanation:'L\'ambiguità fondamentale: il protagonista è caduto da cavallo vent\'anni prima, ha vissuto nella «follia» come Enrico IV, poi è guarito — ma la guarigione è segreta. Continua a fare il pazzo deliberatamente perché offre protezione che la sanità non dà. Quando uccide Belcredi alla fine, è un atto di follia o di lucidità? Pirandello non risponde.'
  },
  { id:'pi93', type:'mc', topic:'Teatro · Così è (se vi pare)',
    text:'Quale irrisolubilità è al centro di «Così è (se vi pare)» (1917)?',
    options:['Chi è l\'assassino nel giallo pirandelliano','La signora Frola e il signor Ponza danno versioni incompatibili sull\'identità della Signora Ponza — e lei stessa alla fine dichiara di essere chiunque gli altri vogliano che sia','Quale dei personaggi stia davvero recitando','Il significato del titolo'],
    correct:1,
    explanation:'Il signor Ponza e la signora Frola danno versioni incompatibili sulla vera identità della Signora Ponza. Quando la misteriosa donna appare di persona e dichiara «io sono colei che mi si crede», l\'identità definitiva non esiste. È la messa in scena del relativismo pirandelliano: la verità dipende dal punto di vista di chi guarda.'
  },
  { id:'pi94', type:'mc', topic:'Prose · Novelle per un anno',
    text:'Qual era il progetto di «Novelle per un anno»?',
    options:['Un romanzo a episodi giornalieri','Una raccolta di 365 novelle (una per ogni giorno dell\'anno) rimasta incompiuta: Pirandello ne scrisse circa 246','Una serie di diari in forma di novella','Il titolo di una singola raccolta di 12 novelle mensili'],
    correct:1,
    explanation:'Il progetto era monumentale: 365 novelle. Pirandello non lo completò mai: alla morte (1936) ne aveva scritte circa 246. Le novelle affrontano temi simili al teatro: crisi dell\'identità, relativismo, trappole sociali, dolore senza sbocco.'
  },
  { id:'pi95', type:'mc', topic:'Vita · Fascismo',
    text:'Come si caratterizza il rapporto di Pirandello con il Fascismo?',
    options:['Si oppose sempre al Fascismo per ragioni etiche','Aderisce al PNF nel 1924, probabilmente per opportunismo e nazionalismo; poi si allontana progressivamente. Il Teatro d\'Arte è finanziato dal regime','Fu tra i firmatari del Manifesto degli intellettuali antifascisti','Non aveva alcun interesse politico'],
    correct:1,
    explanation:'Pirandello aderisce al PNF nel 1924 — nell\'anno del delitto Matteotti. Motivazioni: nazionalismo, opportunismo, speranza di finanziamenti per il teatro. Il Teatro d\'Arte di Roma (1925–1928) è finanziato dal regime. Negli ultimi anni si allontana, deluso.'
  },
  { id:'pi96', type:'mc', topic:'Vita · morte',
    text:'Come muore Pirandello e cosa chiede per i suoi funerali?',
    options:['Muore in un incidente e chiede una tomba monumentale','Muore di polmonite nel 1936 e chiede funerali semplicissimi — niente cerimonia, niente discorsi, bara semplice — coerente con il rifiuto pirandelliano di ogni forma fissa','Viene ucciso da un attentato fascista','Muore in esilio a Parigi e chiede di essere sepolto in Sicilia'],
    correct:1,
    explanation:'Pirandello muore il 10 dicembre 1936 di polmonite a Roma. Le sue ultime volontà: funerali semplicissimi (bara nuda, niente cerimonie, niente discorsi), ceneri anonime o sparse in Sicilia. Il rifiuto di qualsiasi «forma» per la propria morte è l\'ultimo atto di fedeltà alla sua poetica.'
  },
  { id:'pi97', type:'open', topic:'Teatro · rivoluzione',
    text:'Spiega perché «Sei personaggi in cerca d\'autore» (1921) rivoluziona il teatro europeo.',
    modelAnswer:'I Sei personaggi rivoluzionano il teatro in tre modi. Primo: distruggono la finzione della finzione. Il teatro tradizionale finge che quello che avviene sul palco sia vero. I Sei personaggi mostrano il meccanismo: la quarta parete scompare completamente. Secondo: creano la metafora dell\'esistenza come rappresentazione. Se anche i personaggi di finzione cercano un\'identità stabile, anche gli esseri umani reali sono personaggi senza autore. Terzo: anticipano il teatro dell\'assurdo. Beckett, Ionesco ereditano da Pirandello il personaggio intrappolato e la crisi del linguaggio.',
    keywords:['quarta parete','finzione della finzione','metafora della vita','teatro dell\'assurdo','Beckett Ionesco','identità instabile']
  },
  { id:'pi98', type:'mc', topic:'Testi · Il fu Mattia Pascal',
    text:'Qual è la condizione finale paradossale di Mattia Pascal nel romanzo?',
    options:['Riesce a tornare alla sua vita originaria e vive felicemente','Muore in manicomio','È «morto» civilmente (la sua morte fu registrata ufficialmente) ma esiste ancora fisicamente: vive tra i due estremi, «nessuno» di nome ma «uno» in corpo — porta fiori alla propria tomba','Si trasferisce all\'estero con l\'identità di Adriano Meis'],
    correct:2,
    explanation:'Mattia finge di suicidarsi, diventa Adriano Meis, poi «uccide» anche Adriano Meis. Tornato a casa, trova la moglie risposata: la sua morte è stata ufficialmente riconosciuta. Non può reclamare nessuna identità: è il «Fu Mattia Pascal» — un morto che cammina. È la messa in scena più compiuta dell\'identità come finzione.'
  },
  { id:'pi99', type:'tf', topic:'Confronti · Ibsen',
    text:'Vero o falso: Pirandello condivide con Ibsen la critica alle convenzioni borghesi, ma va oltre portando la riflessione al piano filosofico del relativismo cognitivo.',
    options:['Vero','Falso'],
    correct:0,
    explanation:'Vero. Ibsen critica la borghesia attraverso figure che scoprono le ipocrisie sociali. Pirandello va oltre: non critica solo le convenzioni ma l\'idea stessa di identità stabile. La maschera non è solo un prodotto borghese — è la condizione ontologica dell\'essere umano. Il relativismo pirandelliano è più radicale di qualsiasi critica sociale.'
  },
  { id:'pi100', type:'open', topic:'Sintesi',
    text:'Descrivi la concezione pirandelliana di Vita e Forma usando esempi dalle opere.',
    modelAnswer:'Per Pirandello Vita e Forma sono in conflitto irriducibile. La Vita è il flusso continuo dell\'esistenza — mai uguale, sempre contraddittoria. La Forma è ciò che tenta di fermarla: un nome, un ruolo, una maschera sociale. Il paradosso: non si può vivere senza Forma, ma accettarla significa tradire la Vita. Esempi: Il fu Mattia Pascal mostra l\'impossibilità di costruire una nuova identità fuori dalle convenzioni. I Sei personaggi mostrano che anche i personaggi di finzione cercano una Forma che non trovano. Uno, nessuno e centomila (1926) è il punto di arrivo: Vitangelo Moscarda, scoprendo che ognuno lo vede diverso, sceglie di essere «nessuno», dissolto nel flusso della Vita pura.',
    keywords:['Vita flusso','Forma maschera','Mattia Pascal identità impossibile','Sei personaggi','Uno nessuno centomila','dissoluzione dell\'io']
  }
],

/* ===================================================================
   GABRIELE D'ANNUNZIO — 90 domande
   Sezioni: Vita · Poetica · Opere · Testi · Confronti
   =================================================================== */
dannunzio: [
  /* ──────────────  VITA  ────────────── */
  { id:'da01', type:'mc', topic:'Vita',
    text:'In quale città nacque Gabriele D\'Annunzio nel 1863?',
    options:['Roma','Napoli','Pescara','Firenze'],
    correct:2,
    explanation:'D\'Annunzio nacque a Pescara (allora Pescara di Abruzzo) il 12 marzo 1863. La città abruzzese è centrale nella sua produzione giovanile e nelle prime raccolte poetiche.'
  },
  { id:'da02', type:'mc', topic:'Vita',
    text:'Come si chiama il protagonista-alter ego di D\'Annunzio nel romanzo Il piacere (1889)?',
    options:['Giorgio Aurispa','Stelio Èffrena','Andrea Sperelli','Claudio Cantelmo'],
    correct:2,
    explanation:'Andrea Sperelli è il protagonista de Il piacere (1889), dandy romano che vuole «fare la propria vita come si fa un\'opera d\'arte». È il primo alter ego romanzesco di D\'Annunzio e il prototipo del dandy italiano.'
  },
  { id:'da03', type:'mc', topic:'Vita',
    text:'Cos\'era «La Capponcina»?',
    options:['Il teatro romano dove D\'Annunzio debuttò come drammaturgo','La tenuta presso Settignano (Firenze) dove D\'Annunzio visse tra 1898 e 1910 conducendo una vita lussuosa','Il nome del biplano con cui D\'Annunzio sorvolò Vienna nel 1918','La casa editrice fondata da D\'Annunzio a Milano'],
    correct:1,
    explanation:'La Capponcina era la villa nei pressi di Settignano (Firenze) dove D\'Annunzio abitò dal 1898 al 1910 con Eleonora Duse, conducendo una vita di lusso sfrenato che lo portò a contrarre enormi debiti. È il simbolo del suo «estetismo vissuto».'
  },
  { id:'da04', type:'tf', topic:'Vita',
    text:'Eleonora Duse, la grande attrice con cui D\'Annunzio ebbe una relazione, è la fonte di ispirazione per il personaggio di Foscarina Perdita nel romanzo Il fuoco (1900).',
    correct:true,
    explanation:'Vero. Nel Fuoco, Stelio Èffrena (alter ego di D\'Annunzio) ha una relazione con Foscarina Perdita (alter ego di Eleonora Duse). Il romanzo, pubblicato mentre la relazione era ancora in corso, causò enorme scandalo per la crudezza con cui D\'Annunzio descrisse il declino fisico della Duse.'
  },
  { id:'da05', type:'mc', topic:'Vita',
    text:'Il Vittoriale degli Italiani è:',
    options:['Il nome della nave con cui D\'Annunzio salpò per Fiume','Il complesso monumentale sul lago di Garda dove D\'Annunzio visse dal 1921 alla morte (1938)','Il palazzo romano in cui D\'Annunzio scrisse le Laudi','Il nome della tenuta abruzzese della famiglia D\'Annunzio'],
    correct:1,
    explanation:'Il Vittoriale degli Italiani è il complesso monumentale di Gardone Riviera (lago di Garda) dove D\'Annunzio si ritirò dal 1921 fino alla morte nel 1938. Vi costruì una sorta di museo di se stesso: la nave Puglia incagliata nel giardino, mausolei, stanze cerimoniose. Oggi è museo statale.'
  },
  { id:'da06', type:'mc', topic:'Vita',
    text:'Cosa fu l\'«Impresa di Fiume» (1919–1920)?',
    options:['La costruzione del canale idroelettrico sul Tagliamento finanziata da D\'Annunzio','L\'occupazione militare della città di Fiume (oggi Rijeka) guidata da D\'Annunzio con un esercito di volontari, in contrasto con i trattati di pace post-bellici','Il tentativo di golpe monarchico orchestrato da D\'Annunzio a Roma nel 1919','Una manovra diplomatica di D\'Annunzio per ottenere la Dalmazia per l\'Italia'],
    correct:1,
    explanation:'Nel settembre 1919 D\'Annunzio guidò un esercito di volontari («i legionari») nell\'occupazione di Fiume, città a maggioranza italiana assegnata alla Jugoslavia dai trattati di pace. La cosiddetta «città di vita» durò fino al «Natale di sangue» (dicembre 1920), quando il governo Giolitti la sgomberò militarmente. Storicamente è considerata un preludio al fascismo.'
  },
  { id:'da07', type:'mc', topic:'Vita',
    text:'Quale fu il ruolo di D\'Annunzio nell\'interventismo italiano del 1915?',
    options:['D\'Annunzio era neutralista e si oppose all\'entrata in guerra dell\'Italia','Con i discorsi del «Maggio Radioso» D\'Annunzio fu la principale voce interventista, arringando le folle per l\'entrata in guerra al fianco dell\'Intesa','D\'Annunzio sostenne l\'alleanza con gli Imperi Centrali (Germania e Austria)','D\'Annunzio si rifiutò di pronunciarsi sulla guerra per non compromettere la sua immagine di artista'],
    correct:1,
    explanation:'Il «Maggio Radioso» del 1915: D\'Annunzio tenne una serie di discorsi infuocati che incitarono la folla all\'intervento in guerra. Il suo verbo trascinante contribuì significativamente alla decisione dell\'Italia di entrare in guerra. È uno degli esempi più nitidi di come D\'Annunzio usasse la parola come arma politica, conformemente al suo ruolo di «vate».'
  },
  { id:'da08', type:'tf', topic:'Vita',
    text:'D\'Annunzio fu il primo scrittore italiano a usare la radio come mezzo di comunicazione di massa per diffondere i propri testi poetici.',
    correct:false,
    explanation:'Falso. D\'Annunzio non usò sistematicamente la radio per diffondere la sua poesia. La sua azione di comunicazione di massa avvenne attraverso i giornali (collaboratore de Il Mattino, Il Corriere della Sera), i discorsi pubblici, e il teatro. La radio come mezzo letterario fu sperimentata da altri autori, non è una caratteristica dannunziana documentata nei contenuti del sito.'
  },
  { id:'da09', type:'mc', topic:'Vita',
    text:'In quale città D\'Annunzio trascorse gran parte degli anni \'80 e \'90 conducendo una vita mondana che ispirò Il piacere?',
    options:['Venezia','Roma','Milano','Napoli'],
    correct:1,
    explanation:'D\'Annunzio visse a Roma dal 1881 al 1891, frequentando i salotti aristocratici, le avventure amorose e il giornalismo mondano. Quest\'esperienza romana è la materia narrativa de Il piacere (1889): i saloni, i palazzi nobiliari, le due figure femminili (Elena Muti e Maria Ferres) rispecchiano la vita del giovane D\'Annunzio nella capitale.'
  },
  { id:'da10', type:'mc', topic:'Vita',
    text:'Come definì Carducci nel suo percorso poetico?',
    options:['Il «maestro definitivo» da cui non si distaccò mai','Prima «la scossa rivelatrice», poi il «maestro avverso» da cui prese le distanze','Il suo opposto assoluto, che non lo influenzò in alcun modo','Il poeta che lo spinse verso il Simbolismo francese'],
    correct:1,
    explanation:'D\'Annunzio descrisse il suo rapporto con Carducci in due fasi: prima «la scossa rivelatrice» — Carducci fu il punto di partenza (Primo vere, 1879, usa i metri barbari carducciani); poi il «maestro avverso» — D\'Annunzio se ne distaccò per elaborare la propria poetica sensoriale e decadente, profondamente diversa dall\'etica civile e classica di Carducci.'
  },

  /* ──────────────  POETICA  ────────────── */
  { id:'da11', type:'mc', topic:'Poetica',
    text:'Dal nome di quale divinità greca deriva il termine «panismo»?',
    options:['Apollo, dio della poesia e della luce','Pan, dio dei boschi e della natura selvaggia','Poseidone, dio del mare','Dioniso, dio dell\'ebbrezza'],
    correct:1,
    explanation:'Panismo deriva da Pan, il dio greco dei boschi, delle greggi e della natura. Indica la tendenza di D\'Annunzio a fondersi totalmente con la natura fino alla metamorfosi: il poeta non contempla la natura, diventa natura. L\'io si dissolve nell\'elemento naturale (albero, foglia, onda) perdendo i confini dell\'individuo.'
  },
  { id:'da12', type:'mc', topic:'Poetica',
    text:'Quali sono i due movimenti simultanei del panismo?',
    options:['Sublimazione del reale e recupero del mito classico','Umanizzazione della natura (la natura acquista tratti umani) e naturalizzazione dell\'uomo (il poeta diventa elemento naturale)','Descrizione oggettiva e soggettiva della natura','Metafora e metonimia applicate al paesaggio'],
    correct:1,
    explanation:'Il panismo ha due movimenti: (1) umanizzazione della natura — la natura acquista tratti umani (la Sera ha «un viso di perla e grandi occhi umidi»); (2) naturalizzazione dell\'uomo — il poeta diventa elemento naturale (Ermione «quasi fatta virente» — quasi diventata verde). I due movimenti sono simultanei e reciproci.'
  },
  { id:'da13', type:'mc', topic:'Poetica',
    text:'Cosa intende D\'Annunzio con il termine «imaginifico» con cui si autodefiniva?',
    options:['La tendenza a inventare storie fantastiche e mitologiche','La capacità di creare immagini attraverso il valore fonico delle parole, prima ancora del loro significato semantico','Il ricorso frequente a immagini visive nelle sue poesie','La sua fama come creatore di personaggi letterari memorabili'],
    correct:1,
    explanation:'«Imaginifico» indica la capacità di creare immagini attraverso la magia dei suoni: le parole vengono scelte per il loro valore fonico ed evocativo prima di quello semantico. In La pioggia nel pineto, l\'anafora «piove su tamerici, piove su pini, piove su mirti» non descrive la pioggia: crea musica. La parola si dissolve di immagine in immagine, di suggestione in suggestione.'
  },
  { id:'da14', type:'mc', topic:'Poetica',
    text:'Cosa significa «vate» nella poetica di D\'Annunzio?',
    options:['Il poeta-profeta che guida spiritualmente e politicamente la nazione, plasma la realtà con la parola','Il nome latino di un tipo di metro classico usato in Alcyone','Il narratore onnisciente che conosce il destino dei personaggi','Il protagonista autobiografico dei romanzi del superuomo'],
    correct:0,
    explanation:'Il vate è il poeta-profeta: nell\'antichità era insieme poeta e sacerdote, interprete della volontà degli dèi. D\'Annunzio riprende questa figura per il ruolo dell\'artista-superuomo: guida spirituale e politica della nazione. Il vate non descrive la realtà: la plasma con la parola. La funzione pubblica si concretizza nella vita stessa di D\'Annunzio: il «Maggio Radioso», la marcia di Ronchi, il Vittoriale.'
  },
  { id:'da15', type:'mc', topic:'Poetica',
    text:'Il superuomo di D\'Annunzio deriva dalla teoria di Nietzsche. Come D\'Annunzio ne modifica la portata?',
    options:['D\'Annunzio approfondisce la dimensione filosofica dell\'Übermensch nietzscheano','D\'Annunzio ne impoverisce la portata filosofica ma ne divulga il pensiero in Italia, trasformando il superuomo in artista-vate che rifiuta il liberalismo democratico','D\'Annunzio trasforma il superuomo in un personaggio popolare e democratico','D\'Annunzio ignora Nietzsche e costruisce il superuomo su basi puramente estetiche'],
    correct:1,
    explanation:'D\'Annunzio attinge a Nietzsche (Così parlò Zarathustra, 1883–85) ma ne semplifica la portata filosofica. Il superuomo nietzscheano è una complessa proposta morale e ontologica; quello dannunziano è l\'artista-vate che indica nuove strade, rifiuta il liberalismo democratico in nome di un\'élite privilegiata, e incarna la volontà di potenza nella vita vissuta come opera d\'arte.'
  },
  { id:'da16', type:'mc', topic:'Poetica',
    text:'Cosa distingue l\'analogia simbolista (Baudelaire, Verlaine, Mallarmé) dalla similitudine tradizionale?',
    options:['L\'analogia usa più termini di paragone della similitudine','L\'analogia elimina il termine comparativo e suggerisce senza spiegare, accostando oggetti apparentemente lontani sulla base di una corrispondenza segreta','L\'analogia si applica solo alla natura, la similitudine solo ai sentimenti umani','L\'analogia è una figura retorica del Rinascimento, non dei Simbolisti'],
    correct:1,
    explanation:'La similitudine tradizionale esplicita il termine di paragone («come», «simile a»). L\'analogia simbolista lo elimina: accosta oggetti, sensazioni e stati d\'animo apparentemente lontani sulla base di una corrispondenza segreta, suggerendo senza spiegare. Esempio: «le colline s\'incurvino come labbra che un divieto chiuda» (La sera fiesolana) — le colline sono labbra sigillate che custodiscono un segreto.'
  },
  { id:'da17', type:'tf', topic:'Poetica',
    text:'La «poetica della bontà» di D\'Annunzio (fase napoletana 1891–1894) rappresenta un avvicinamento a sentimenti più intimi e al dolore dei deboli, sotto l\'influenza di Dostoevskij e Tolstoj.',
    correct:true,
    explanation:'Vero. La fase napoletana (1891–1894) vede D\'Annunzio distaccarsi dall\'estetismo mondano romano per avvicinarsi a sentimenti delicati e intimistici: il dolore dei deboli e degli umili diventa materia poetica. Le opere chiave sono Giovanni Episcopo, L\'innocente, e il Poema paradisiaco. L\'influenza è quella dei grandi romanzieri russi (Dostoevskij, Tolstoj).'
  },
  { id:'da18', type:'mc', topic:'Poetica',
    text:'Qual è la caratteristica principale del lessico di D\'Annunzio?',
    options:['Parole comuni e trite, scelte per la loro onestà semantica','Termini dialettali e tecnico-scientifici, come in Pascoli','Lessico aulico, arcaico e musicale: le parole sono scelte prima per il valore fonico che semantico','Sintassi nominale e parola isolata, come in Ungaretti'],
    correct:2,
    explanation:'Il lessico di D\'Annunzio è aulico (latineggiante, arcaico), musicale (assonanze, allitterazioni, parole rare per il suono), e «imaginifico»: la parola è scelta prima per il suo valore fonico ed evocativo che per quello semantico. Saba si opporrà esplicitamente a questa scelta con la sua «poesia onesta» delle «parole trite», cioè comuni.'
  },
  { id:'da19', type:'open', topic:'Poetica',
    text:'Spiega il concetto di panismo in D\'Annunzio, indicando i due movimenti che lo compongono e un\'opera esemplare.',
    modelAnswer:'Il panismo (da Pan, dio greco dei boschi) è la tendenza di D\'Annunzio a fondersi totalmente con la natura fino alla metamorfosi: il poeta non contempla la natura ma la diventa. Ha due movimenti simultanei: (1) umanizzazione della natura — la natura acquista tratti umani (es. la Sera ha un viso di perla); (2) naturalizzazione dell\'uomo — il poeta diventa elemento naturale (Ermione «quasi fatta virente»). L\'opera esemplare è Alcyone (1903), in particolare La pioggia nel pineto: il poeta e Ermione si trasformano gradualmente in esseri vegetali nel corso della poesia, attraverso tre tappe: contiguità metonimica, similitudine, vera metamorfosi.',
    keywords:['Pan','fusione totale','umanizzazione della natura','naturalizzazione dell\'uomo','Alcyone','metamorfosi','tre tappe']
  },
  { id:'da20', type:'mc', topic:'Poetica',
    text:'Quale movimento culturale europeo di fine Ottocento si oppone al positivismo e al Naturalismo, privilegiando l\'intuizione, il simbolo e la musica?',
    options:['Romanticismo','Realismo','Decadentismo','Futurismo'],
    correct:2,
    explanation:'Il Decadentismo è il movimento culturale europeo di fine Ottocento che reagisce al positivismo e al Naturalismo: privilegia l\'intuizione sul ragionamento, il simbolo sulla descrizione, la musica sul significato logico. L\'artista decadente è «maledetto», superiore per sensibilità. In Italia i massimi esponenti sono D\'Annunzio (estroversione e potenza) e Pascoli (introversione e fanciullino), con poetiche opposte.'
  },

  /* ──────────────  OPERE  ────────────── */
  { id:'da21', type:'mc', topic:'Opere',
    text:'Quale libro delle Laudi del cielo, del mare, della terra e degli eroi è considerato il capolavoro assoluto di D\'Annunzio?',
    options:['Maia — per la lunghezza e il superomismo','Elettra — per il nazionalismo civile','Alcyone — per il panismo e la sperimentazione musicale','Merope — per la celebrazione della guerra libica'],
    correct:2,
    explanation:'Alcyone (1903) è il terzo libro delle Laudi ed è il capolavoro riconosciuto di D\'Annunzio: 88 componimenti in 5 sezioni che seguono un ciclo stagionale dalla primavera all\'autunno. Qui il panismo raggiunge la perfezione nella Pioggia nel pineto e nella Sera fiesolana. La musicalità è totale e la sperimentazione metrica si spinge fino al trisillabo.'
  },
  { id:'da22', type:'mc', topic:'Opere',
    text:'In quanti libri era concepito il progetto delle Laudi, dedicati alle stelle delle Pleiadi? Quanti ne vennero effettivamente pubblicati?',
    options:['Progetto: 9 libri; pubblicati: 4','Progetto: 7 libri; pubblicati: 5','Progetto: 5 libri; pubblicati: 5','Progetto: 12 libri; pubblicati: 3'],
    correct:1,
    explanation:'Il progetto delle Laudi prevedeva 7 libri dedicati alle stelle delle Pleiadi (Maia, Elettra, Alcyone, Merope, Asterope, Taigete, Celeno). Ne vennero pubblicati effettivamente 5: Maia, Elettra, Alcyone (1903), e poi Merope (1912) e Asterope (1949, postumo). Il cuore del progetto è Alcyone.'
  },
  { id:'da23', type:'mc', topic:'Opere',
    text:'Cosa rappresenta Andrea Sperelli nel romanzo Il piacere (1889)?',
    options:['Il trionfo del superuomo nietzscheano','Il fallimento dell\'estetismo: senza forza morale, l\'arte diventa forza distruttiva, e il dandy perde entrambe le donne che ama','Il modello positivo del dandy perfetto, esempi da imitare','L\'inetto sveviano traslato in un contesto aristocratico romano'],
    correct:1,
    explanation:'Sperelli rappresenta il fallimento dell\'estetismo: vuole «fare la propria vita come si fa un\'opera d\'arte», ma la sua debolezza di volontà lo porta a perdere entrambe le donne amate (Elena Muti, la donna sensuale, e Maria Ferres, l\'angelo). Il romanzo è la critica implicita dell\'estetismo senza fondamento morale. Anticipa la figura novecentesca dell\'inetto.'
  },
  { id:'da24', type:'mc', topic:'Opere',
    text:'Come nacque Il Notturno (1921)?',
    options:['Durante l\'esilio parigino (1910–1915), come riflessione sull\'Europa in guerra','Durante la convalescenza del 1916 con l\'occhio bendato per mesi: D\'Annunzio scriveva su strisce di carta («cartigli») al buio','Come commento letterario al V canto dell\'Inferno dantesco','Dopo l\'impresa di Fiume, come resoconto politico in stile autobiografico'],
    correct:1,
    explanation:'Il Notturno nasce durante la convalescenza del 1916: D\'Annunzio aveva subito un incidente aereo che gli aveva ferito un occhio, costringendolo a mesi di immobilità con l\'occhio bendato. Scriveva su migliaia di strisce di carta («cartigli») che la figlia Renata ritagliava. Il risultato è un testo autobiografico e introspettivo con stile impressionistico e ruptura totale rispetto allo stile magnificente precedente.'
  },
  { id:'da25', type:'mc', topic:'Opere',
    text:'Quale romanzo segna la transizione dal mito dell\'esteta al superuomo e ha come protagonista Giorgio Aurispa, ossessionato dalla morte?',
    options:['Il piacere (1889)','Le vergini delle rocce (1895)','Trionfo della morte (1894)','Il fuoco (1900)'],
    correct:2,
    explanation:'Trionfo della morte (1894) segna la transizione dall\'esteta al superuomo: Giorgio Aurispa è ossessionato dalla morte, in una relazione tormentata con Ippolita Sanzio che lo seduce e lo svuota spiritualmente. Trova risposta nella musica di Wagner e nel superuomo di Nietzsche, ma le forze distruttive prevalgono: trascina Ippolita su una scogliera e precipita con lei nel vuoto.'
  },
  { id:'da26', type:'tf', topic:'Opere',
    text:'La figlia di Iorio (1904) è una commedia borghese ambientata in un salotto romano aristocratico.',
    correct:false,
    explanation:'Falso. La figlia di Iorio è una tragedia pastorale ambientata in un Abruzzo arcaico e mescola realtà popolare, superstizione, religione e passioni violente. Non ha nulla del salotto borghese: è il mondo contadino e rurale, con linguaggio ricco di termini dialettali. Mila di Codra, accusata di essere una strega, fugge con Aligi e alla fine si sacrifica per salvarlo dalla condanna.'
  },
  { id:'da27', type:'mc', topic:'Opere',
    text:'Qual è la caratteristica principale dello stile del Notturno rispetto alla produzione precedente di D\'Annunzio?',
    options:['Torna al verso libero delle Laudi, con musicalità ancora più intensa','Prosa semplice e impressionistica, periodi brevi e incalzanti: una rottura totale con lo stile magnificente precedente','Usa per la prima volta il dialetto abruzzese come lingua letteraria','Adotta il flusso di coscienza integrale, senza punteggiatura e senza divisione in capitoli'],
    correct:1,
    explanation:'Il Notturno rompe totalmente con lo stile magnificente e aulico della produzione precedente: la prosa è semplice, impressionistica, i periodi brevi e incalzanti. D\'Annunzio definì il libro «commentario delle tenebre». C\'è un\'influenza freudiana (profondità dell\'Es) e un intreccio di piani temporali. «Taccio. Ascolto. Non sento se non il silenzio stesso.» — questo è il nuovo stile.'
  },

  /* ──────────────  TESTI  ────────────── */
  { id:'da28', type:'mc', topic:'Testi',
    text:'Nella Pioggia nel pineto, quali sono le tre tappe della metamorfosi del poeta e di Ermione?',
    options:['Visione, ascolto, trasformazione','Contiguità metonimica → similitudine → vera metamorfosi','Metafora → metonimia → sinestesia','Anafora → epifora → climax'],
    correct:1,
    explanation:'La metamorfosi panica nella Pioggia nel pineto avviene in tre tappe progressive: (1) contiguità metonimica — il poeta e Ermione sono accanto alla natura, gli elementi naturali sono nominati in sequenza; (2) similitudine — iniziano le comparazioni tra parti del corpo e parti delle piante; (3) vera metamorfosi — il poeta diventa albero, Ermione diventa foglia verde. Le tre tappe erano già presenti nell\'analisi del testo.'
  },
  { id:'da29', type:'mc', topic:'Testi',
    text:'Chi è Ermione nella mitologia, e perché D\'Annunzio sceglie questo nome?',
    options:['Una ninfa dei boschi trasformata in quercia da Zeus','La figlia di Elena di Troia, personaggio mitico che nella Pioggia nel pineto conferisce alla donna una dimensione atemporale e mitica','Una delle Muse, protettrice della poesia lirica','La moglie di Pan, che nella mitologia si trasforma in flauto'],
    correct:1,
    explanation:'Ermione è la figlia di Elena di Troia nella mitologia greca. D\'Annunzio sceglie questo nome mitologico per togliere la donna dalla dimensione quotidiana e collocarla in un tempo mitico eterno. Il critico Gibellini sottolinea come il refrain invertito («che ieri t\'illuse, che oggi m\'illude» → «che ieri m\'illuse, che oggi t\'illude») crei un\'atemporalità mitica: nel mito il tempo lineare non esiste.'
  },
  { id:'da30', type:'mc', topic:'Testi',
    text:'Cosa significa l\'inversione dei pronomi nel refrain finale della Pioggia nel pineto, secondo il critico Gibellini?',
    options:['È un errore di copia mai corretto nelle edizioni successive','Indica che il poeta e la donna hanno scambiato la loro identità durante la metamorfosi','Crea il senso di atemporalità mitica: nel mito il tempo lineare non esiste, il passato e il presente sono intercambiabili','Serve a rispettare la metrica del verso'],
    correct:2,
    explanation:'Il critico Gibellini ha interpretato l\'inversione «che ieri t\'illuse, che oggi m\'illude» → «che ieri m\'illuse, che oggi t\'illude» come creazione di atemporalità mitica: nel mito, il tempo lineare non esiste. I due piani temporali (ieri/oggi) e i due soggetti (io/tu) diventano intercambiabili, come in un eterno presente mitico. Ermione, personaggio mitologico (figlia di Elena), rivive nel presente.'
  },
  { id:'da31', type:'mc', topic:'Testi',
    text:'Qual è la funzione dell\'anafora «piove su tamerici, piove su pini, piove su mirti» nella Pioggia nel pineto?',
    options:['Descrivere con precisione botanica le piante del pineto della Versilia','Creare un effetto di lentezza narrativa','Creare musica attraverso la ripetizione del suono, non descrivere la pioggia: è la tecnica dell\'«imaginifico»','Imitare il ritmo dello stilnovo dantesco'],
    correct:2,
    explanation:'L\'anafora della Pioggia non serve a descrivere: serve a creare musica. È la tecnica dell\'«imaginifico»: le parole vengono scelte per il loro valore fonico (tamerici, pini, mirti — suoni liquidi e nasali) prima di quello semantico. Il «piove» ripetuto ossessivamente è come il ticchettio della pioggia stessa, un effetto mimetico-musicale. È uno degli esempi più citati di come D\'Annunzio usi la parola come strumento sonoro.'
  },
  { id:'da32', type:'mc', topic:'Testi',
    text:'Nella Sera fiesolana, le colline che «s\'incurvino come labbra che un divieto chiuda» sono un esempio di:',
    options:['Metafora semplice','Analogia simbolista: accostamento tra elementi apparentemente lontani sulla base di una corrispondenza segreta, senza termine comparativo esplicito','Similitudine con «come» — quindi non è un\'analogia','Personificazione: le colline hanno un\'identità umana permanente'],
    correct:1,
    explanation:'«Le colline s\'incurvino come labbra che un divieto chiuda» è un\'analogia simbolista: il termine «come» è presente ma il collegamento non è ovvio (le colline = labbra sigillate da un divieto). La natura custodisce un segreto indicibile, come una bocca che non può parlare. L\'analogia suggerisce la presenza di un mistero nella natura senza spiegarlo: tecnica tipica del Simbolismo francese (Baudelaire, Verlaine, Mallarmé).'
  },
  { id:'da33', type:'open', topic:'Testi',
    text:'Analizza la struttura della Pioggia nel pineto: metro, tecnica della metamorfosi e significato del refrain.',
    modelAnswer:'La Pioggia nel pineto ha una struttura metrica sperimentale: verso libero fino al trisillabo, strofe regolari ma senza rime canoniche, sostituite da assonanze e rime interne che creano musicalità continua. La tecnica della metamorfosi segue tre tappe: (1) contiguità metonimica — poeta ed Ermione stanno tra gli elementi naturali; (2) similitudine — il corpo umano inizia a essere paragonato alle piante (Ermione ha «capelli» che «profumano come ginestre»); (3) vera metamorfosi — Ermione è «quasi fatta virente», il poeta diventa «albero». Il refrain è ripetuto quattro volte con variazioni progressive. Il critico Gibellini ha analizzato l\'inversione finale dei pronomi («che ieri t\'illuse, che oggi m\'illude» → «che ieri m\'illuse, che oggi t\'illude») come creazione di atemporalità mitica: nel mito il tempo lineare scompare, il passato e il presente diventano intercambiabili.',
    keywords:['verso libero trisillabo','tre tappe','contiguità metonimica','similitudine','vera metamorfosi','refrain','inversione pronomi','atemporalità mitica','Gibellini']
  },
  { id:'da34', type:'mc', topic:'Testi',
    text:'Nel Ritratto di Andrea Sperelli (Il piacere), D\'Annunzio descrive Sperelli come «un tipo assai raro di giovine uomo di lettere italiano». Cosa simbolizza la «debolezza di volontà» del personaggio nel sistema tematico del romanzo?',
    options:['Un difetto psicologico irrilevante rispetto alla sua genialità artistica','Il fallimento dell\'estetismo: la bellezza senza forza morale diventa autodistruttiva, e il dandy perde tutto ciò che ama','Un omaggio all\'inettitudine sveviana, che D\'Annunzio ammirava','La critica al sistema educativo italiano dell\'Ottocento'],
    correct:1,
    explanation:'La debolezza di volontà di Sperelli è il nodo tematico centrale de Il piacere: incarna il fallimento dell\'estetismo. Sperelli vuole «fare la propria vita come si fa un\'opera d\'arte», ma non ha la forza morale per realizzare questo progetto. Per questo perde Elena Muti (che lo abbandona per un matrimonio conveniente) e poi Maria Ferres (che offende sovrapponendo mentalmente le due donne). L\'arte senza etica diventa forza distruttiva.'
  },
  { id:'da35', type:'tf', topic:'Testi',
    text:'La Sera fiesolana è inclusa in Alcyone e descrive un paesaggio toscano primaverile (le colline di Fiesole, intorno a Firenze).',
    correct:true,
    explanation:'Vero. La Sera fiesolana appartiene ad Alcyone (1903) ed è ambientata sulle colline di Fiesole, a nord-est di Firenze, dove D\'Annunzio abitò tra 1898 e 1910 alla Capponcina. La poesia descrive una sera di primavera: il paesaggio collinare toscano, i cipressi, le luci della pianura. È considerata un\'altra opera emblematica del panismo dannunziano insieme alla Pioggia nel pineto.'
  },

  /* ──────────────  CONFRONTI  ────────────── */
  { id:'da36', type:'mc', topic:'Confronti',
    text:'Come si differenziano D\'Annunzio e Pascoli nel loro rapporto con la natura?',
    options:['D\'Annunzio contempla la natura; Pascoli si fonde con essa attraverso la metamorfosi','D\'Annunzio si fonde con la natura (panismo, metamorfosi); Pascoli la contempla come rifugio del fanciullino, con simbolismo degli oggetti minuti','Entrambi hanno lo stesso approccio panico alla natura, ma con stili diversi','Pascoli ignora la natura e D\'Annunzio ne fa il centro assoluto della propria poetica'],
    correct:1,
    explanation:'D\'Annunzio: panismo — fusione totale, metamorfosi. La natura è l\'essenza segreta che il superuomo penetra. Tre tappe: contiguità → similitudine → metamorfosi. Pascoli: la natura come rifugio del fanciullino — simbolismo, oggetti minuti che parlano un linguaggio segreto. Contemplazione, non fusione. Pascoli non si trasforma in natura: la osserva con gli occhi stupiti del bambino che «vede» ciò che l\'adulto non vede.'
  },
  { id:'da37', type:'mc', topic:'Confronti',
    text:'Cos\'è la «poesia onesta» di Saba e come si oppone a D\'Annunzio?',
    options:['La poesia onesta usa le stesse forme di D\'Annunzio ma con contenuti meno provocatori','Saba contrappone alle «parole aulicate» di D\'Annunzio le parole «trite» e comuni: dire la verità senza mascherarla è per lui un atto di coraggio estetico','La poesia onesta è il termine con cui Saba indica la poesia dialettale triestina','Saba usa il termine «onesta» nel senso latino di «decorosa», in contrapposizione all\'erotismo dannunziano'],
    correct:1,
    explanation:'Saba oppone alla poesia di D\'Annunzio la sua «poesia onesta»: mentre D\'Annunzio sceglie un lessico aulico mettendosi al centro come superuomo, Saba sceglie le parole comuni e trite, dice la verità senza mascherarla. Per Saba la poesia di D\'Annunzio è «disonesta»: preziosismo formale che copre la mancanza di vera verità interiore. Due visioni opposte: D\'Annunzio trasforma la vita in opera d\'arte (verso il bello); Saba porta l\'arte nella vita quotidiana (verso il vero).'
  },
  { id:'da38', type:'mc', topic:'Confronti',
    text:'Come risponde Montale a D\'Annunzio nella lirica Piove (1971)?',
    options:['Riprende l\'anafora di «piove» della Pioggia nel pineto, ma la svuota di ogni vitalismo: la pioggia cade sul nulla, sulla tomba della moglie, sulla Gazzetta Ufficiale','Scrive una parodia comica che smonta il panismo attraverso l\'ironia borghese','Dedica Piove alla memoria di D\'Annunzio come omaggio alla sua grandezza poetica','Usa la pioggia come simbolo di speranza e rinnovamento, ribaltando il senso negativo della Pioggia nel pineto'],
    correct:0,
    explanation:'Nella lirica Piove (1971), Montale riprende l\'anafora ossessiva della Pioggia nel pineto ma la svuota di ogni vitalismo: piove sul nulla, sulla tomba della moglie Mosca, sulla Gazzetta Ufficiale. L\'assenza di Ermione è universale. La pioggia non è più metamorfosi panica ma metafora negativa di immobilità e impotenza. È un esempio nitido di come il Novecento «risponde» a D\'Annunzio: stesso gesto stilistico, senso opposto.'
  },
  { id:'da39', type:'mc', topic:'Confronti',
    text:'Come si differenzia il rapporto di D\'Annunzio, Ungaretti e Montale con la parola poetica?',
    options:['D\'Annunzio riduce la parola all\'essenziale; Ungaretti la moltiplica; Montale usa il correlativo oggettivo','D\'Annunzio moltiplica le parole saturdandole di musica; Ungaretti le riduce all\'essenziale isolandole nel silenzio; Montale usa un lessico duro e aspro, il correlativo oggettivo come distanza dall\'io','Tutti e tre privilegiano il silenzio come forma suprema di espressione','D\'Annunzio e Montale usano lo stesso tipo di lessico aulico; Ungaretti si distingue con il verso-parola'],
    correct:1,
    explanation:'Il confronto tripartito: D\'Annunzio moltiplica le parole, le satura di musica e sensazione, non lascia mai spazio al silenzio (lessico sempre pieno, sonoro, «imaginifico»). Ungaretti riduce la parola all\'essenziale, la isola nel silenzio bianco della pagina: «Mattina» è un solo verso di due parole. Montale usa un lessico duro e aspro, anti-aulico: gli oggetti portano il peso emotivo che l\'io non può esprimere (correlativo oggettivo).'
  },
  { id:'da40', type:'open', topic:'Confronti',
    text:'Confronta D\'Annunzio e Saba usando il concetto di «poesia onesta» di Saba. Quali scelte stilistiche li oppongono e quali visioni del ruolo della poesia incarnano?',
    modelAnswer:'Saba contrappone esplicitamente la sua «poesia onesta» alla poetica di D\'Annunzio. Le differenze sono radicali. Lessico: D\'Annunzio usa parole aulicizzate, arcaiche, musicali, scelte per il valore fonico prima che semantico (tecnica dell\'«imaginifico»); Saba sceglie parole «trite» e comuni, le parole della vita quotidiana, come atto di coraggio estetico. Visione del poeta: D\'Annunzio è il vate, superuomo-guida che si mette al centro trasformando la vita in opera d\'arte («vivere inimitabile»); Saba è il poeta-testimone che porta l\'arte nella vita quotidiana, cercando la verità anche dolorosa (psicanalisi, scissione interiore). Funzione della poesia: per D\'Annunzio è strumento di potenza e bellezza; per Saba è scandaglio dell\'anima, ricerca di verità. Metrica: D\'Annunzio sperimenta radicalmente (verso libero fino al trisillabo); Saba recupera forme tradizionali (sonetto, canzone) consapevolmente. La formula per l\'orale: «D\'Annunzio verso il bello; Saba verso il vero.»',
    keywords:['poesia onesta','parole trite','aulico','imaginifico','vate superuomo','testimone','verso il bello','verso il vero','metrica tradizionale','sperimentazione']
  },
  { id:'da41', type:'mc', topic:'Confronti',
    text:'Come D\'Annunzio affronta la «crisi del soggetto moderno», rispetto a Ungaretti e Montale?',
    options:['D\'Annunzio la nega e si ritira nell\'arte pura; Ungaretti e Montale l\'affrontano direttamente','D\'Annunzio la affronta con la potenza e la bellezza: il superuomo sovrasta la crisi con la forza della volontà; Ungaretti con la luce istantanea della parola; Montale con l\'ostacolo e il negativo','D\'Annunzio, Ungaretti e Montale condividono la stessa risposta: il silenzio come unica forma possibile','D\'Annunzio è il solo che offre una risposta positiva alla crisi; Ungaretti e Montale la subiscono passivamente'],
    correct:1,
    explanation:'Tre risposte diverse alla stessa crisi: D\'Annunzio affronta la crisi con potenza e bellezza — il superuomo la sovrasta, la vince con la forza della volontà e dell\'arte. Ungaretti affronta con la luce istantanea: la parola illumina la crisi nel momento presente («M\'illumino d\'immenso»). Montale affronta con l\'ostacolo e il negativo: «ciò che non siamo, ciò che non vogliamo» — il correlativo oggettivo come distanza dall\'io che non riesce ad affermarsi.'
  },
  { id:'da42', type:'tf', topic:'Confronti',
    text:'D\'Annunzio e Pascoli condividono la stessa visione del ruolo del poeta: entrambi credono che il poeta debba essere guida politica della nazione.',
    correct:false,
    explanation:'Falso. Le visioni del ruolo del poeta sono diametralmente opposte. D\'Annunzio è il vate — guida spirituale e politica della nazione, superuomo che plasma la realtà con la parola; la sua vita stessa è un atto politico («Maggio Radioso», Fiume, Vittoriale). Pascoli è il «fanciullino» — il poeta rivela l\'ineffabile nei piccoli oggetti quotidiani, con vita appartata e introversione. Pascoli non ha ambizioni politiche; D\'Annunzio fa della politica un\'arte.'
  },
  { id:'da43', type:'mc', topic:'Confronti',
    text:'In quale aspetto D\'Annunzio è definito il «massimo esponente» dell\'Estetismo in Italia?',
    options:['Perché fu il primo ad adottare il verso libero nella letteratura italiana','Perché incarnò l\'Estetismo non solo nella scrittura ma nella vita stessa: il «vivere inimitabile» trasformò ogni sua azione in opera d\'arte, dal lusso della Capponcina all\'impresa di Fiume','Perché tradusse in italiano i testi fondamentali dell\'Estetismo inglese e francese','Perché fu il fondatore della rivista «Il Convito» che divulgò l\'Estetismo in Italia'],
    correct:1,
    explanation:'D\'Annunzio è il massimo esponente italiano dell\'Estetismo perché incarnò la poetica nella vita stessa: il «vivere inimitabile» trasformò ogni azione in opera d\'arte. Non basta scrivere opere estetiste (come Oscar Wilde o Huysmans in altri contesti): D\'Annunzio visse l\'estetismo — la Capponcina come palazzo del gusto assoluto, i debiti folli per mantenere uno stile di vita magnificente, l\'impresa di Fiume come azione estetica. L\'arte e la vita si fondono totalmente.'
  },
  { id:'da44', type:'mc', topic:'Confronti',
    text:'Quali sono le radici europee dell\'Estetismo che influenzano D\'Annunzio?',
    options:['I romanzi di Emile Zola e il Naturalismo francese','Oscar Wilde e Joris-Karl Huysmans (À rebours, 1884): il culto della bellezza come valore supremo, la vita come opera d\'arte, il dandy come prototipo dell\'artista moderno','Friedrich Nietzsche e Arthur Schopenhauer: filosofia della volontà di potenza','Charles Baudelaire e Arthur Rimbaud: la parola come sortilegio e la ribellione bohémienne'],
    correct:1,
    explanation:'Le radici europee dell\'Estetismo di D\'Annunzio sono principalmente Oscar Wilde (il dandy inglese, la vita come opera d\'arte) e Joris-Karl Huysmans (À rebours, 1884 — il romanzo cult dell\'estetismo: il protagonista Des Esseintes si ritira dal mondo per creare una realtà artificiale perfetta). D\'Annunzio è il massimo rappresentante italiano di questo filone. Baudelaire e Nietzsche influenzano altri aspetti della sua poetica.'
  },
  { id:'da45', type:'open', topic:'Confronti',
    text:'Confronta la metrica di D\'Annunzio con quella di Pascoli e Saba, indicando le scelte specifiche di ciascuno e la loro relazione con la poetica.',
    modelAnswer:'D\'Annunzio compie una sperimentazione metrica radicale: in Alcyone usa il verso libero fino al trisillabo (La pioggia nel pineto), adotta strofe saffiche e alcaiche, sostituisce la rima con assonanze e rime interne. La musicalità è il fine: ogni scelta metrica serve a creare un effetto sonoro («imaginifico»). È il primo grande poeta italiano a usare sistematicamente il verso libero come scelta estetica. Pascoli usa la tradizione con innovazione simbolica: mantiene rime e versi tradizionali ma li carica di valori simbolici; la metrica è al servizio del suono e del simbolo, non della norma. Saba recupera consapevolmente le forme tradizionali (sonetto, canzone, rime facili) come scelta «onesta» contro l\'oscurità novecentesca; dal 1931 introduce il verso libero spezzato sotto l\'influenza di Ungaretti. In sintesi: D\'Annunzio sperimenta verso il musicale; Pascoli conserva con fini simbolici; Saba recupera il tradizionale come atto etico.',
    keywords:['verso libero trisillabo','assonanze rime interne','musicalità','sperimentazione','Pascoli tradizione simbolica','Saba forme tradizionali sonetto','scelta onesta','verso libero spezzato']
  },

  /* ──────────────  VITA (approfondimento)  ────────────── */
  { id:'da46', type:'mc', topic:'Vita',
    text:'Qual è il significato del termine «estetismo» come programma di vita in D\'Annunzio?',
    options:['Il rifiuto di qualsiasi forma di estetica borghese a favore di uno stile popolare','Il culto della bellezza come valore supremo a cui tutti gli altri valori sono subordinati: la vita deve diventare opera d\'arte («vivere inimitabile»)','L\'interesse per le arti figurative come complemento alla scrittura','La ricerca di uno stile sobrio e classico contro il decorativismo romantici'],
    correct:1,
    explanation:'L\'estetismo è il culto della bellezza come valore supremo a cui tutti gli altri valori (compresi quelli morali) sono subordinati. L\'arte vive in una sfera autonoma, lontana dalle dinamiche sociali. La vita stessa deve diventare opera d\'arte: è il programma del «vivere inimitabile» che D\'Annunzio realizzò concretamente nella sua esistenza. Radici europee: Oscar Wilde e Huysmans (À rebours, 1884).'
  },
  { id:'da47', type:'tf', topic:'Vita',
    text:'D\'Annunzio si trasferì in Francia nel 1910 per sfuggire ai creditori italiani e vi rimase fino al 1915, anno del suo ritorno per i discorsi interventisti.',
    correct:true,
    explanation:'Vero. D\'Annunzio fuggì in Francia nel 1910 (a Arcachon, poi a Parigi) per evitare i creditori che reclamavano i debiti accumulati durante la vita lussuosa alla Capponcina. Tornò in Italia nel maggio 1915, proprio per pronunciare i discorsi del «Maggio Radioso» a favore dell\'interventismo. L\'esilio francese lo aprì alla cultura francese e al Simbolismo.'
  },
  { id:'da48', type:'mc', topic:'Vita',
    text:'Quale epiteto politico-culturale nasce dall\'impresa di Fiume di D\'Annunzio e prelude al fascismo?',
    options:['Il «poeta soldato»','La «città di vita» — con la Carta del Carnaro, la prima costituzione italiana con norme sul lavoro e la libertà di espressione','L\'«esercito dei poeti» — i legionari come incarnazione dell\'élite culturale armata','Il «profeta armato» — D\'Annunzio come Savonarola del Novecento'],
    correct:1,
    explanation:'L\'impresa di Fiume (1919–1920) produsse la «città di vita» e la Carta del Carnaro: una delle prime costituzioni italiane moderne, che includeva norme sul lavoro, libertà di espressione e di culto. L\'esperienza fiume è storicamente considerata un laboratorio politico-estetico che anticipò alcune forme del fascismo (il culto del capo, i rituali di piazza, la retorica guerriera), anche se D\'Annunzio non aderì mai formalmente al Partito Nazionale Fascista.'
  },
  { id:'da49', type:'mc', topic:'Opere',
    text:'Quale opera teatrale di D\'Annunzio fu scritta in collaborazione con il musicista Claude Debussy?',
    options:['La figlia di Iorio (1904)','Francesca da Rimini (1901)','Il martirio di san Sebastiano (1911)','La città morta (1898)'],
    correct:2,
    explanation:'Il martirio di san Sebastiano (1911) è l\'opera per musica scritta in francese con musiche di Claude Debussy. Fonde il mito cristiano e quello pagano nella figura di Sebastiano, martire romano che è anche atleta solare. L\'opera fu eseguita a Parigi con la danzatrice Ida Rubinstein nel ruolo del titolo, ed ebbe una grande eco internazionale.'
  },
  { id:'da50', type:'mc', topic:'Poetica',
    text:'Il verso libero in D\'Annunzio (specialmente in Alcyone) è una scelta:',
    options:['Casuale, dovuta alla difficoltà di mantenere schemi metrici fissi in una produzione così ampia','Estetica sistematica: D\'Annunzio è il primo grande poeta italiano a usarlo non come improvvisazione ma come programma musicale','Derivata dal Futurismo di Marinetti che D\'Annunzio seguì da vicino','Tradizionale, perché il verso libero era già usato sistematicamente dai poeti del Seicento'],
    correct:1,
    explanation:'D\'Annunzio è il primo grande poeta italiano a usare sistematicamente il verso libero come scelta estetica, non come improvvisazione. In Alcyone si spinge fino al trisillabo (La pioggia nel pineto). La rima è sostituita da assonanze e rime interne; il ritmo serve la musicalità, non la tradizione metrica. Questa è la differenza fondamentale rispetto agli usi precedenti: è un programma, non un\'eccezione.'
  },

  /* ──────────────  OPERE (approfondimento)  ────────────── */
  { id:'da51', type:'mc', topic:'Opere',
    text:'Qual è il tema centrale del libro Maia (1903) delle Laudi?',
    options:['Il superuomo che rifiuta la mediocrità del presente e abbraccia l\'eroismo del passato, con Ulisse come incarnazione del superuomo libero da ogni legge morale','La celebrazione dei santi della patria italiana (Dante, Verdi, Garibaldi)','La fusione panica con la natura marina della Versilia','La guerra in Libia come campo d\'azione del superuomo'],
    correct:0,
    explanation:'Maia (1903) è un lungo poema autobiografico (8400 versi liberi) in cui il superuomo rifiuta la mediocrità del presente per abbracciare l\'eroismo del passato. La figura centrale è Ulisse come incarnazione del superuomo libero da ogni legge morale: l\'eroe omerico che non si ferma mai, sempre alla ricerca di nuove esperienze, diventa il modello della vita inimitabile.'
  },
  { id:'da52', type:'mc', topic:'Testi',
    text:'In quale sezione di Alcyone sono concentrate le due poesie più studiate, La pioggia nel pineto e La sera fiesolana?',
    options:['Prima sezione, «Primavera»','Seconda sezione, «L\'Estate»','Terza sezione, «La mietitura»','Quarta sezione, «L\'Autunno»'],
    correct:1,
    explanation:'La sera fiesolana e La pioggia nel pineto appartengono entrambe alla seconda sezione di Alcyone, dedicata all\'estate — la stagione della fusione panica per eccellenza. Il ciclo di Alcyone va dalla primavera (arrivo sulle colline di Fiesole) all\'autunno (nella Versilia). Il panismo raggiunge il suo apice nell\'estate della seconda sezione.'
  },
  { id:'da53', type:'mc', topic:'Confronti',
    text:'Quale definizione sintetizza meglio il confronto D\'Annunzio–Pascoli sul piano della visione del poeta?',
    options:['D\'Annunzio: introversione e fanciullino; Pascoli: estroversione e potenza','D\'Annunzio: estroversione e potenza (il vate); Pascoli: introversione e fanciullino (il poeta che rivela l\'ineffabile nei piccoli oggetti)','D\'Annunzio e Pascoli condividono la visione decadente del poeta come «maledetto»','D\'Annunzio è il poeta politico; Pascoli è il poeta civile e garibaldino'],
    correct:1,
    explanation:'La formula canonica del manuale: in Italia i massimi esponenti del Decadentismo sono D\'Annunzio e Pascoli con poetiche opposte. D\'Annunzio: estroversione e potenza — il vate che guida la nazione, il superuomo che conquista la natura con la metamorfosi. Pascoli: introversione e fanciullino — il poeta che rivela l\'ineffabile nei piccoli oggetti quotidiani, vita appartata, regressione verso l\'infanzia e l\'intuizione pre-logica.'
  },
  { id:'da54', type:'open', topic:'Vita',
    text:'Descrivi il percorso biografico di D\'Annunzio dall\'estetismo romano alla funzione pubblica di vate, indicando le tappe fondamentali.',
    modelAnswer:'Il percorso di D\'Annunzio ha tre grandi fasi. Prima fase (anni \'80–\'90, Roma): giornalismo mondano, vita nel salotto aristocratico romano, nascita dell\'estetismo incarnato in Andrea Sperelli (Il piacere, 1889). La vita è già opera d\'arte. Seconda fase (1898–1910, La Capponcina): convivenza con Eleonora Duse, scrittura delle Laudi (Alcyone, 1903), trasformazione da dandy in vate-superuomo. I debiti lo costringono a fuggire in Francia (1910). Terza fase (1915 in poi, la «funzione pubblica»): ritorno in Italia per il «Maggio Radioso» (1915), partecipazione attiva alla guerra (volo su Vienna, battaglia del Carso, perdíta dell\'occhio 1916), impresa di Fiume (1919–1920), ritiro al Vittoriale degli Italiani (1921–1938). In ogni fase il confine tra arte e vita si dissolve: D\'Annunzio non scrive del superuomo, è il superuomo.',
    keywords:['Roma estetismo','Andrea Sperelli','Capponcina Duse','Alcyone vate','Maggio Radioso interventismo','volo su Vienna','Fiume','Vittoriale','vita come opera d\'arte']
  },
  { id:'da55', type:'mc', topic:'Poetica',
    text:'Cosa si intende con «dandismo» in D\'Annunzio?',
    options:['Un genere letterario di romanzi brevi di argomento galante','Un fenomeno culturale di fine Ottocento: il dandy fa dell\'eleganza e dell\'ostentazione la propria ragione d\'esistenza, unendo trasgressione morale e culto del bello contro la «volgarità» della borghesia','Un movimento letterario che valorizza il folklore e le tradizioni popolari','Il termine con cui D\'Annunzio indicava i suoi rivali letterari romani'],
    correct:1,
    explanation:'Il dandismo è un fenomeno culturale di fine Ottocento: il dandy fa dell\'eleganza e dell\'ostentazione la propria ragione d\'esistenza — contaminazione tra vita e letteratura, trasgressione della morale borghese, culto del bello come reazione alla «volgarità» della borghesia. D\'Annunzio è il prototipo del dandy italiano: vita mondana romana, avventure amorose, debiti, La Capponcina come palazzo del gusto assoluto.'
  },
  { id:'da56', type:'mc', topic:'Testi',
    text:'Nella Pioggia nel pineto, come D\'Annunzio crea il «tappeto sonoro» che mima il suono della pioggia nella pineta?',
    options:['Attraverso rime baciate (AABB) a ogni verso','Con frequenti onomatopee dirette (tic-tac, sciabordio) e pause ritmiche','Attraverso anafore («piove su…»), assonanze, allitterazioni di liquide e sibilanti, e verso libero breve che mima il ritmo della pioggia','Con la struttura del sonetto petrarchesco, che crea un ritmo naturale e regolare'],
    correct:2,
    explanation:'Il tappeto sonoro della Pioggia nel pineto è creato attraverso: (1) anafore («piove su tamerici, piove su pini…») che mimano la caduta ritmica delle gocce; (2) assonanze e allitterazioni di suoni liquidi (l, r) e sibilanti (s, sc) che evocano il fruscio della pioggia tra le fronde; (3) verso libero breve — il trisillabo e il quadrisillabo danno un ritmo ternario simile alle gocce che cadono. Tutto serve la musicalità prima della descrizione.'
  },
  { id:'da57', type:'tf', topic:'Confronti',
    text:'Ungaretti considera D\'Annunzio il suo maestro e in Vita d\'un uomo ne riprende lo stile musicale e imaginifico.',
    correct:false,
    explanation:'Falso. Ungaretti non considera D\'Annunzio un maestro: la sua poetica è l\'esatto opposto. D\'Annunzio moltiplica le parole, le satura di musica e non lascia mai spazio al silenzio. Ungaretti riduce la parola all\'essenziale, la isola nel silenzio bianco della pagina (verso-parola: «Mattina» è un verso di due parole). Le radici di Ungaretti sono nei Simbolisti francesi (Mallarmé, Apollinaire) e nella sua esperienza della guerra, non in D\'Annunzio.'
  },
  { id:'da58', type:'mc', topic:'Testi',
    text:'Quale elemento geografico-paesaggistico è centrale nella Pioggia nel pineto?',
    options:['Il Garda, con i cipressi e le vigne della riva bresciana','La pineta della Versilia (costa toscana tra Viareggio e Forte dei Marmi)','I boschi di lecci dell\'Abruzzo natale di D\'Annunzio','Le campagne di Fiesole e le vigne intorno a Firenze'],
    correct:1,
    explanation:'La Pioggia nel pineto è ambientata nella pineta della Versilia, sulla costa toscana tra Viareggio e Forte dei Marmi, dove D\'Annunzio trascorreva le estati. Le tamerici, i pini, i mirti, i ginepri sono le piante tipiche della macchia mediterranea costiera versiliese. D\'Annunzio soggiornava in questa zona mentre scriveva Alcyone (1903).'
  },
  { id:'da59', type:'mc', topic:'Opere',
    text:'Il romanzo Le vergini delle rocce (1895) è il «primo romanzo del superuomo» di D\'Annunzio. Quale è il progetto del protagonista Claudio Cantelmo?',
    options:['Ricostruire il sistema politico italiano su basi aristocratiche, scalzando il parlamento democratico','Generare, attraverso l\'unione con una delle tre sorelle aristocratiche, il futuro re di Roma destinato a guidare l\'Italia verso un nuovo Impero','Scrivere un\'opera letteraria definitiva che sostituisca la Commedia di Dante','Fondare un convento artistico sul modello di Bayreuth di Wagner'],
    correct:1,
    explanation:'Claudio Cantelmo è convinto di essere il superuomo destinato a generare il futuro re di Roma. Cerca tra tre sorelle aristocratiche (una pazza, una malata, una sana) la madre dell\'erede destinato a rifondare Roma e l\'Impero. Disprezza la democrazia e il liberalismo. Il progetto fallisce — è il tema del superuomo che non riesce a tradurre la volontà in azione, anticipando il motivo dell\'inetto.'
  },
  { id:'da60', type:'open', topic:'Testi',
    text:'Analizza il ruolo della musicalità nella Pioggia nel pineto, individuando almeno tre tecniche specifiche e spiegando come contribuiscono al panismo.',
    modelAnswer:'La musicalità della Pioggia nel pineto è il veicolo del panismo: la parola non descrive la fusione tra poeta e natura, la crea sonicamente. Tre tecniche fondamentali: (1) Anafora — «piove su tamerici, piove su pini, piove su mirti» ripete il verbo come un ticchettio, abolendo la sintassi narrativa a favore di un ritmo puramente musicale. (2) Allitterazione e assonanza — sequenze di suoni liquidi (r, l) e sibilanti (s, sc) evocano il fruscio della pioggia nelle fronde. Esempio: «il tuo volto ebbrO» (v e b), «i capelli chiari come / are chiome» (ch). (3) Verso libero breve — il trisillabo e il quadrisillabo creano un ritmo ternario che mima la caduta delle gocce, molto diverso dall\'endecasillabo tradizionale. Insieme, queste tecniche creano un tappeto sonoro in cui la distinzione tra il linguaggio poetico e i suoni della natura si dissolve: il poema è la pioggia, non la descrive. Questo è il panismo a livello formale: la forma e il contenuto si fondono.',
    keywords:['anafora','allitterazione assonanza','verso libero breve trisillabo','tappeto sonoro','forma e contenuto','panismo formale','musicalità']
  },

  /* ──────────────  LE FASI DELLA POETICA (approfondimento)  ────────────── */
  { id:'da61', type:'mc', topic:'Poetica',
    text:'Quali sono le cinque fasi principali della poetica di D\'Annunzio in ordine cronologico?',
    options:[
      'Futurismo → Simbolismo → Estetismo → Superuomo → Notturno',
      'Giovanile-carducciana → Estetismo → Poetica della bontà → Superuomo → Notturno',
      'Verismo siciliano → Estetismo → Superuomo → Teatro → Notturno',
      'Romantismo → Estetismo → Decadentismo → Superuomo → Futurismo'
    ],
    correct:1,
    explanation:'Le cinque fasi di D\'Annunzio: (1) Giovanile-carducciana (Primo vere, 1879): imitazione dei metri barbari di Carducci; (2) Estetismo (Il piacere, 1889): culto della bellezza, dandy romano; (3) Poetica della bontà (1891–94): fase napoletana, Dostoevskij, intimismo; (4) Superuomo (Laudi, 1903): Nietzsche, vate, panismo; (5) Notturno (1921): prosa franta, introspezione.'
  },
  { id:'da62', type:'mc', topic:'Poetica',
    text:'La «poetica della bontà» di D\'Annunzio (fase napoletana, 1891–1894) si distingue dall\'estetismo romano per:',
    options:[
      'Il rifiuto della narrativa a favore della sola poesia lirica',
      'L\'avvicinamento ai temi dell\'umiltà, del dolore dei deboli e dell\'introspezione intima, sotto l\'influenza dei romanzieri russi',
      'L\'adozione del dialetto napoletano come lingua letteraria',
      'La scelta del teatro musicale come forma espressiva principale'
    ],
    correct:1,
    explanation:'Nella fase napoletana D\'Annunzio si distacca dal mondanismo romano per avvicinarsi a tematiche più intime: il dolore, la pietà, l\'umiltà. L\'influenza è quella di Dostoevskij e Tolstoj. Le opere chiave sono Giovanni Episcopo (1891), L\'innocente (1892) e il Poema paradisiaco (1893), con toni melanconici e sentimentali lontani dal superuomo.'
  },
  { id:'da63', type:'mc', topic:'Poetica',
    text:'Quale elemento accomuna le fasi poetiche dell\'estetismo e del superuomo in D\'Annunzio, distinguendole dalla fase della poetica della bontà?',
    options:[
      'Entrambe usano il verso libero mentre la fase della bontà usa la metrica tradizionale',
      'Entrambe sono incentrate su una figura d\'eccellenza (il dandy / il superuomo) che si pone al di sopra della mediocrità borghese, mentre la poetica della bontà si avvicina agli umili',
      'Entrambe sono ispirate alla musica di Wagner, mentre la poetica della bontà è ispirata a Verdi',
      'Entrambe sono scritte in prosa, mentre la poetica della bontà usa la poesia'
    ],
    correct:1,
    explanation:'Estetismo e superuomo condividono l\'aristocratismo: il dandy (estetismo) si distingue dalla borghesia per il culto della bellezza; il superuomo (Nietzsche) si distingue per la volontà di potenza. La fase della bontà inverte la prospettiva: il poeta si avvicina agli ultimi, ai sofferenti, agli esclusi, sotto l\'influenza etica di Dostoevskij e Tolstoj.'
  },
  { id:'da64', type:'tf', topic:'Poetica',
    text:'Il Notturno (1921) segna un ritorno allo stile magnificente delle Laudi, con versi lunghi e lessico aulico.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso. Il Notturno rappresenta una rottura totale con lo stile magnificente precedente: prosa semplice, periodi brevissimi e incalzanti scritti su strisce di carta («cartigli») durante la convalescenza del 1916. Il lessico è sobrio, quasi giornalistico. D\'Annunzio definì il libro «commentario delle tenebre». È il momento di massima introspezione della sua produzione.'
  },

  /* ──────────────  OPERE NARRATIVE  ────────────── */
  { id:'da65', type:'mc', topic:'Opere',
    text:'Giovanni Episcopo (1891) è il romanzo che segna l\'inizio della «poetica della bontà». Chi è il protagonista e quale tema centrale affronta?',
    options:[
      'Un nobile romano che fallisce nel tentativo di diventare vate della nazione',
      'Un uomo debole e sottomesso che racconta in prima persona la propria vita di sconfitte e umiliazioni, dominata da un amico violento',
      'Un aviatore che scopre la vertigine del volo come metafora della superiorità dell\'artista',
      'Un sacerdote che perde la fede di fronte alle atrocità della guerra'
    ],
    correct:1,
    explanation:'Giovanni Episcopo è un personaggio debole, sottomesso, vittima di un amico violento (Wanzer) che gli distrugge la vita. Racconta in prima persona le proprie umiliazioni. Il romanzo è costruito sul modello dostoevskijano (Il sosia, Povera gente): l\'uomo mite e incapace di ribellarsi. È l\'opposto del superuomo: la pietà per i vinti, gli umili, i dominati.'
  },
  { id:'da66', type:'mc', topic:'Opere',
    text:'Il romanzo L\'innocente (1892) di D\'Annunzio affronta quale tema centrale?',
    options:[
      'La storia di un soldato che torna dalla guerra e non riesce a reintegrarsi nella società civile',
      'Un marito che uccide il figlio illegittimo della moglie, convinto di essere nel giusto: il tema è la crudeltà mascherata da innocenza morale',
      'Un bambino orfano nella Napoli di fine Ottocento alla ricerca delle proprie origini aristocratiche',
      'Un artista che sacrifica la propria vita alla creazione dell\'opera perfetta'
    ],
    correct:1,
    explanation:'L\'innocente (1892) è la storia di Tullio Hermil, uomo raffinato che uccide il figlio che la moglie ha avuto da un altro, convinto di agire in nome di una giustizia superiore. Il titolo è profondamente ironico: Tullio si considera «innocente» proprio nell\'atto più colpevole. D\'Annunzio studia la psicologia di un personaggio capace di autoingannamento totale. Influenza di Dostoevskij e Tolstoj.'
  },
  { id:'da67', type:'mc', topic:'Opere',
    text:'Il romanzo Il fuoco (1900) scandalizzò il pubblico italiano perché:',
    options:[
      'Descriveva in modo esplicito la brutalità della guerra coloniale in Africa',
      'Ritraeva Eleonora Duse (Foscarina Perdita) in maniera crudele, mentre la relazione era ancora in corso, mettendo in luce il suo declino fisico',
      'Proponeva apertamente idee anarchiche e antimonarchiche',
      'Raccontava in dettaglio le malversazioni finanziarie della nobiltà veneziana'
    ],
    correct:1,
    explanation:'Il fuoco (1900) narra la storia d\'amore tra Stelio Èffrena (alter ego di D\'Annunzio) e Foscarina Perdita (alter ego di Eleonora Duse). D\'Annunzio descrive con crudezza il declino fisico di lei e la crescente insofferenza di lui. Il libro fu pubblicato mentre la relazione era ancora in corso: Duse, che aveva letto le bozze, fu ferita profondamente. Lo scandalo fu enorme in tutta Europa.'
  },
  { id:'da68', type:'mc', topic:'Opere',
    text:'Forse che sì forse che no (1910) è l\'ultimo romanzo di D\'Annunzio. Quale elemento tematico nuovo introduce rispetto ai romanzi precedenti?',
    options:[
      'Il tema del socialismo come alternativa al capitalismo borghese',
      'Il tema dell\'aviazione come metafora della superiorità del superuomo: il protagonista Paolo Tarsis è un aviatore che vola come atto di potenza contro la mediocrità',
      'Il ritorno al verismo siciliano con ambientazione rurale',
      'Il tema del misticismo cristiano come riscatto dal peccato'
    ],
    correct:1,
    explanation:'Forse che sì forse che no (1910) introduce il tema dell\'aviazione come metafora moderna della superiorità dell\'uomo eccezionale. Paolo Tarsis è un aviatore: il volo è l\'atto supremo del superuomo che sfida la gravità e la morte. D\'Annunzio stesso pilotava aeroplani e aveva vissuto il volo come esperienza mistica. Il titolo richiama la scritta in un labirinto mediceo: l\'ambiguità come cifra esistenziale.'
  },
  { id:'da69', type:'mc', topic:'Opere',
    text:'Il Poema paradisiaco (1893) appartiene alla fase della poetica della bontà. Quale caratteristica stilistica lo distingue dalle Laudi successive?',
    options:[
      'Usa il dialetto abruzzese per evocare la terra natale',
      'Tono melanconico e intimista, immagini di quiete e rimpianto, influenza del Simbolismo francese (Verlaine): è l\'opposto della sontuosità delle Laudi',
      'Struttura teatrale con dialoghi e didascalie',
      'Versi brevissimi a monosillabi, anticipando il verso-parola di Ungaretti'
    ],
    correct:1,
    explanation:'Il Poema paradisiaco (1893) è la raccolta più intimista e malinconica di D\'Annunzio: toni crepuscolari, immagini di case silenziose, giardini autunnali, rimpianto per l\'innocenza perduta. L\'influenza è quella di Verlaine (musicalità della parola, stati d\'animo imprecisi). È il momento più «soft» della poetica dannunziana, lontanissimo dalla pompa delle Laudi.'
  },

  /* ──────────────  LE LAUDI — struttura  ────────────── */
  { id:'da70', type:'mc', topic:'Opere',
    text:'Il libro Elettra delle Laudi (1903) è dedicato principalmente a quale tema?',
    options:[
      'La fusione panica con la natura estiva della Versilia',
      'La celebrazione dei grandi italiani (Dante, Garibaldi, Verdi) e del nazionalismo imperialista',
      'Il superuomo che cerca la donna fatale nelle città europee',
      'La meditazione sulla morte durante la guerra in Libia'
    ],
    correct:1,
    explanation:'Elettra (1903) è il secondo libro delle Laudi ed è il libro del nazionalismo civile: celebra i grandi italiani (Dante, Michelangelo, Garibaldi, Verdi) e invoca una nuova grandezza imperiale per l\'Italia. È il libro più «politico» di D\'Annunzio. Non ha la bellezza musicale di Alcyone ma ha una potente carica retorica e patriottica che anticiperà i discorsi interventisti del 1915.'
  },
  { id:'da71', type:'mc', topic:'Opere',
    text:'Merope (1912), quarto libro delle Laudi, è dedicato a quale evento storico?',
    options:[
      'La Prima guerra mondiale e il sacrificio dei soldati italiani',
      'La guerra di Libia (1911–1912): celebrazione dell\'impresa coloniale italiana in Africa settentrionale',
      'L\'Impresa di Fiume e la fondazione della città di vita',
      'Il volo di D\'Annunzio su Vienna del 1918'
    ],
    correct:1,
    explanation:'Merope o Canzoni delle gesta d\'oltremare (1912) è dedicato alla guerra di Libia (1911–12): la conquista italiana della Libia ottomana. D\'Annunzio canta l\'impresa come gesta eroica della nazione, in linea con il suo nazionalismo imperialista. È il libro più propagandistico delle Laudi e il più lontano dall\'ideale artistico di Alcyone.'
  },
  { id:'da72', type:'mc', topic:'Opere',
    text:'Quale libro delle Laudi rimase incompiuto e fu pubblicato postumo nel 1949?',
    options:['Maia','Elettra','Merope','Asterope'],
    correct:3,
    explanation:'Asterope, il quinto libro delle Laudi, rimase incompiuto e fu pubblicato postumo nel 1949. I libri effettivamente completati in vita da D\'Annunzio furono: Maia (1903), Elettra (1903), Alcyone (1903) e Merope (1912). Taigete e Celeno, gli ultimi due libri del progetto originale dedicato alle Pleiadi, non furono mai scritti.'
  },

  /* ──────────────  O FALCE DI LUNA CALANTE  ────────────── */
  { id:'da73', type:'mc', topic:'Testi',
    text:'«O falce di luna calante» appartiene a quale raccolta e quale periodo della produzione di D\'Annunzio?',
    options:[
      'Alle Laudi (Alcyone, 1903): fase del superuomo e del panismo',
      'Al Canto novo (1882): la prima raccolta poetica giovanile, fase carducciana',
      'Al Poema paradisiaco (1893): fase della poetica della bontà',
      'All\'Elettra (1903): fase del nazionalismo civile'
    ],
    correct:1,
    explanation:'«O falce di luna calante» è inclusa nel Canto novo (1882), la prima raccolta poetica di D\'Annunzio scritta a soli diciannove anni. Risente dell\'influenza di Carducci (uso delle odi barbare) ma già si distingue per la sensorialità del paesaggio notturno. È il testo che apre la tradizione dannunziana del paesaggio-simbolo e della luna come presenza femminile.'
  },
  { id:'da74', type:'mc', topic:'Testi',
    text:'Qual è la struttura metrica di «O falce di luna calante»?',
    options:[
      'Endecasillabi sciolti con cesura fissa al quinto piede',
      'Una strofa di apertura con apostrofe alla luna, segue un dialogo tra il poeta e la natura in quartine di ottonari',
      'Tre strofe di cinque versi con schema metrico misto (endecasillabi e settenari), con ritornello sul «silenzio»',
      'Sonetto shakespeariano con tre quartine e una coppia finale'
    ],
    correct:2,
    explanation:'«O falce di luna calante» è composta da tre strofe di cinque versi ciascuna, con mix di endecasillabi e settenari. L\'elemento strutturale fondamentale è il ritornello «taci» (o variante) che invita al silenzio: la natura silenziosa diventa il correlativo del desiderio e dell\'attesa. La luna calante è apostrofata come presenza femminile luminosa che veglia sull\'incontro amoroso.'
  },
  { id:'da75', type:'mc', topic:'Testi',
    text:'Quale tema centrale unisce «O falce di luna calante» alla successiva poetica di Alcyone?',
    options:[
      'Il tema della morte come liberazione dall\'angoscia esistenziale',
      'La fusione tra il paesaggio notturno e il desiderio amoroso: la natura partecipa emotivamente alla scena umana, anticipando il panismo',
      'La critica alla classe borghese incapace di cogliere la bellezza',
      'Il motivo del viaggio come fuga dalla mediocrità'
    ],
    correct:1,
    explanation:'«O falce di luna calante» anticipa il panismo di Alcyone: la luna, il silenzio, la notte non fanno da sfondo all\'esperienza amorosa ma vi partecipano attivamente. La natura e l\'emozione umana sono un tutt\'uno. Questo collegamento — natura come specchio amplificatore delle emozioni — diventerà il principio strutturale dell\'Alcyone, dove il processo arriva fino alla vera metamorfosi.'
  },
  { id:'da76', type:'open', topic:'Testi',
    text:'Analizza «O falce di luna calante» come testo di raccordo tra la fase giovanile carducciana e la futura poetica di Alcyone. Quali elementi anticipano il panismo?',
    modelAnswer:'«O falce di luna calante» (Canto novo, 1882) è il testo che testimonia il primo incontro di D\'Annunzio con la fusione tra paesaggio e sentimento, anticipando il panismo maturo di Alcyone. Quattro elementi profetici: (1) La luna apostrofata come presenza quasi femminile e viva — non è un oggetto astronomico ma un\'entità che partecipa alla scena. (2) Il silenzio come condizione della fusione — il «taci» rivolto all\'amante crea lo spazio per ascoltare la voce della natura. (3) Il paesaggio notturno come amplificatore dell\'emozione — mare, luna, silenzio non fanno da cornice ma da vettore del desiderio. (4) La mistura di endecasillabi e settenari — anticipa la sperimentazione metrica che culminerà nel trisillabo di Alcyone. La differenza dalla fase carducciana (Primo vere) è già marcata: Carducci usa il paesaggio in funzione civile e storica; D\'Annunzio lo usa per esprimere stati d\'animo sensuali.',
    keywords:['luna apostrofata','silenzio taci','paesaggio-emozione','anticipazione panismo','sperimentazione metrica','differenza da Carducci','sensorialità']
  },

  /* ──────────────  ANDREA SPERELLI E VITA COME OPERA D'ARTE  ────────────── */
  { id:'da77', type:'mc', topic:'Testi',
    text:'Nel Ritratto di Andrea Sperelli (Il piacere, cap. II), D\'Annunzio descrive il padre di Andrea che gli insegna la massima «Bisogna fare la propria vita come si fa un\'opera d\'arte». Quale paradosso emerge subito dopo?',
    options:[
      'Andrea la rifiuta e sceglie una vita di povertà ascetica',
      'Andrea la interiorizza ma non ha la forza morale per realizzarla: le massime cadono in una «natura involontaria», cioè in un carattere debole',
      'La massima porta Andrea al successo mondano assoluto, senza contraddizioni',
      'Il padre muore subito dopo averla pronunciata, privando Andrea del modello necessario'
    ],
    correct:1,
    explanation:'Il paradosso fondamentale del personaggio: Andrea riceve dal padre una massima estetica sublime («fare la propria vita come un\'opera d\'arte»), ma queste massime cadono in una «natura involontaria» — un carattere debole e oscillante. Andrea vuole realizzare l\'ideale estetico ma non ha la volontà per farlo. È il fallimento strutturale dell\'estetismo senza fondamento morale: la bellezza senza forza distrugge chi la insegue.'
  },
  { id:'da78', type:'mc', topic:'Testi',
    text:'Perché il critico De Sanctis definisce Sperelli come «inetto» prima che il termine acquistasse il significato sveviano?',
    options:[
      'Perché è fisicamente debole e incapace di partecipare alla vita mondana romana',
      'Perché la sua incapacità di scegliere tra le due donne (Elena e Maria) rivela un\'inadeguatezza della volontà: come Svevo\'s inetto, non traduce l\'intenzione in azione',
      'Perché è incapace di produrre opere d\'arte di qualità nonostante le sue aspirazioni',
      'Perché rifiuta di impegnarsi politicamente quando l\'Italia ne avrebbe bisogno'
    ],
    correct:1,
    explanation:'Sperelli anticipa la figura dell\'inetto novecentesco: come i protagonisti di Svevo (Alfonso Nitti, Emilio Brentani, Zeno), non riesce a tradurre l\'intenzione in azione concreta. La sua «debolezza di volontà» si manifesta nella sovrapposizione mentale delle due donne amate (confonde Elena con Maria) — incapacità di decidere, di scegliere, di agire. La differenza con l\'inetto sveviano è che Sperelli è consapevole della propria debolezza e la vive come colpa estetica, non come condizione psicologica.'
  },

  /* ──────────────  VITA: DUSE, FIUME, VITTORIALE  ────────────── */
  { id:'da79', type:'mc', topic:'Vita',
    text:'In che modo la relazione con Eleonora Duse influenzò la produzione letteraria di D\'Annunzio?',
    options:[
      'Duse lo spinse verso il teatro e le opere drammatiche; senza di lei D\'Annunzio avrebbe scritto solo poesia',
      'La relazione fu l\'ambiente in cui nacquero le Laudi, il teatro e le prose del periodo della Capponcina; Duse fu ispiratrice di opere e protagonista scandalosa de Il fuoco',
      'Duse finanziò le edizioni delle Laudi grazie ai proventi dei suoi tournée internazionali',
      'Duse convinse D\'Annunzio ad abbandonare l\'estetismo e ad abbracciare il nazionalismo socialista'
    ],
    correct:1,
    explanation:'La relazione con Eleonora Duse (1895–1910) coincide con il periodo più fecondo di D\'Annunzio: La Capponcina a Settignano, le Laudi (Alcyone, 1903), il teatro (La figlia di Iorio, Francesca da Rimini). Duse interpretò molte delle sue opere teatrali. Il culmine scandaloso fu Il fuoco (1900), dove D\'Annunzio ritrasse il declino fisico di lei in maniera crudele, scatenando polemiche in tutta Europa.'
  },
  { id:'da80', type:'mc', topic:'Vita',
    text:'Quale fu il lascito politico-culturale dell\'Impresa di Fiume (1919–1920) nella storia italiana?',
    options:[
      'Portò alla firma del Trattato di Rapallo che assegnò Fiume all\'Italia nel 1921',
      'Fu un laboratorio politico-estetico che anticipò alcune forme del fascismo: il culto del capo, i rituali di piazza, la retorica guerriera, il coinvolgimento delle masse attraverso la parola',
      'Portò D\'Annunzio a fondare un partito politico nazionalista che concorse alle elezioni del 1921',
      'Fu condannato dal re Vittorio Emanuele III che ordinò immediatamente lo sgombero militare'
    ],
    correct:1,
    explanation:'L\'impresa di Fiume è storicamente considerata un laboratorio del fascismo: D\'Annunzio inventò o anticipò il saluto romano, i discorsi dal balcone alla folla, le camicie nere, i rituali di piazza (il «dialogo» tra il capo e la folla). Mussolini osservò attentamente e replicò questi modelli. La Carta del Carnaro (de Ambris / D\'Annunzio) fu la prima costituzione italiana moderna. Il «Natale di sangue» del 1920 (sgombero da parte del governo Giolitti) portò D\'Annunzio al ritiro al Vittoriale.'
  },
  { id:'da81', type:'mc', topic:'Vita',
    text:'Il Vittoriale degli Italiani fu costruito da D\'Annunzio come:',
    options:[
      'Un museo privato delle sue opere letterarie donato allo Stato come archivio',
      'Un complesso monumentale sul lago di Garda che è insieme dimora, museo di sé stesso e monumento alla nazione italiana: ogni oggetto ha valore simbolico',
      'Un convento artistico laico per giovani poeti, sul modello della colonia di Bayreuth di Wagner',
      'Un palazzo veneziano acquistato e trasformato in simbolo della resistenza all\'occupazione austriaca'
    ],
    correct:1,
    explanation:'Il Vittoriale è la realizzazione finale del «vivere inimitabile»: D\'Annunzio lo costruisce come monumento vivente a sé stesso e alla nazione. Vi sono: la nave Puglia incagliata nel giardino, l\'aereo del volo di Vienna, stanze cerimoniose con migliaia di oggetti simbolici, il mausoleo. Nel 1923 lo dona all\'Italia. Ogni oggetto è scelto secondo criteri estetici e politici: è la vita trasformata in opera d\'arte totale.'
  },

  /* ──────────────  LA SERA FIESOLANA — analisi approfondita  ────────────── */
  { id:'da82', type:'mc', topic:'Testi',
    text:'Nella Sera fiesolana, la Sera è descritta come «viso di perla» e ha «grandi umidi occhi». Qual è la figura retorica dominante e quale effetto crea?',
    options:[
      'Metafora semplice che trasforma la Sera in donna per pura ornamentazione stilistica',
      'Personificazione totale: la Sera diventa una donna viva con tratti fisici concreti, creando un\'umanizzazione della natura che è già un primo grado del panismo',
      'Sinestesia: il visivo (viso) si fonde con il tattile (perla) per evocare la morbidezza crepuscolare',
      'Ossimoro: la luce del tramonto (viso di perla) si scontra con il buio imminente (umidi occhi)'
    ],
    correct:1,
    explanation:'La personificazione della Sera è totale e sistematica: non è solo un\'immagine decorativa ma l\'umanizzazione strutturale della natura. La Sera ha un viso, occhi, gesti: è una donna che muore dissolvendosi nella notte («pura morte»). Questo è il primo grado del panismo: la natura acquista tratti umani (umanizzazione). Nella Pioggia nel pineto si compirà il passo inverso: l\'uomo diventerà natura (naturalizzazione). I due movimenti sono complementari.'
  },
  { id:'da83', type:'mc', topic:'Testi',
    text:'Il ritornello «Fresche le mie parole ne la sera / ti sien come il fruscio che fan le foglie / del gelso ne la man di chi le coglie» nella Sera fiesolana svolge quale funzione strutturale?',
    options:[
      'È una semplice ripetizione musicale senza funzione semantica',
      'È la preghiera del poeta alla Sera affinché le sue parole abbiano la stessa freschezza sensoriale della natura: il ritornello lega la poetica (parole fresche) all\'ambiente naturale (foglie del gelso)',
      'È un riferimento alla tradizione della lauda medievale francescana: D\'Annunzio cita Jacopone da Todi',
      'È una variazione sul tema della similitudine inversa ungarettiana'
    ],
    correct:1,
    explanation:'Il ritornello della Sera fiesolana è una poetica dichiarata: il poeta chiede che le sue «parole fresche» abbiano la stessa concretezza sensoriale della natura (il fruscio delle foglie di gelso tra le dita di chi le coglie). Il ritornello collega esplicitamente l\'atto del poetare all\'atto naturale: la parola poetica deve essere fisica, sensoriale, viva come la natura. È una riflessione metalinguistica incastonata nel paesaggio.'
  },

  /* ──────────────  CONFRONTO CON PASCOLI (approfondimento)  ────────────── */
  { id:'da84', type:'mc', topic:'Confronti',
    text:'Come si differenziano D\'Annunzio e Pascoli nel loro rapporto con il nazionalismo?',
    options:[
      'D\'Annunzio è internazionalista; Pascoli è nazionalista',
      'D\'Annunzio ha un nazionalismo imperialista e bellicoso (vate che guida la nazione alla gloria); Pascoli ha un nazionalismo umanitario e difensivo (la Grande Proletaria che si è mossa)',
      'Entrambi hanno lo stesso nazionalismo imperialista, differendo solo nello stile',
      'Pascoli non ha posizioni nazionaliste; è puramente un poeta della natura e dell\'infanzia'
    ],
    correct:1,
    explanation:'Il nazionalismo è uno dei punti di massima divergenza. D\'Annunzio: nazionalismo imperialista e bellicoso — l\'Italia deve espandersi, conquistare, dominare; il poeta-vate guida la nazione verso la gloria. Pascoli: nel discorso La grande proletaria si è mossa (1911) giustifica la guerra di Libia in termini umanitari e difensivi — l\'Italia povera ha diritto a uno spazio; il tono è compassionevole, non guerrafondaio. Due nazionalismi contrapposti.'
  },
  { id:'da85', type:'mc', topic:'Confronti',
    text:'Come usano il simbolo della notte e del buio D\'Annunzio e Pascoli?',
    options:[
      'D\'Annunzio usa il buio come metafora della morte; Pascoli lo usa come spazio dell\'illuminazione',
      'D\'Annunzio usa la notte come scenario sensuale del panismo (la Sera fiesolana) o come spazio di introspezione (Notturno); Pascoli usa il buio come spazio del mysterium: le stelle, i morti, il linguaggio pre-logico',
      'Entrambi usano la notte come sfondo neutro senza valenza simbolica specifica',
      'D\'Annunzio evita la notte perché la notte è associata alla debolezza; Pascoli la esalta'
    ],
    correct:1,
    explanation:'Notte e buio hanno valenze opposte nei due poeti. D\'Annunzio: la notte è sensuale (Sera fiesolana — la sera muore come donna) o introspettiva (Notturno — il buio delle bende sull\'occhio come spazio di memoria). Pascoli: la notte è il luogo del mysterium — le stelle (X Agosto), i morti che comunicano con i vivi, la voce dell\'aldilà, il fanciullino che percepisce ciò che l\'adulto non vede. Per Pascoli il buio è ricco di presenze; per D\'Annunzio è uno spazio sensoriale da dominare.'
  },
  { id:'da86', type:'mc', topic:'Confronti',
    text:'In quale romanzo di D\'Annunzio e in quale opera di Pascoli emerge con più chiarezza la visione opposta del rapporto tra poeta e storia?',
    options:[
      'D\'Annunzio: Le vergini delle rocce (il superuomo che rifiuta la democrazia); Pascoli: Myricae (poesia dei piccoli oggetti senza impegno storico)',
      'D\'Annunzio: Il piacere (il dandy che ignora la storia); Pascoli: I Poemetti (poesia epica del lavoro contadino)',
      'D\'Annunzio: Elettra (celebrazione dei grandi italiani come guida per la nazione); Pascoli: La grande proletaria si è mossa (il poeta come voce pacifica e difensiva della nazione)',
      'D\'Annunzio: Il Notturno (introspezione bellica); Pascoli: Il fanciullino (rifiuto totale dell\'impegno politico)'
    ],
    correct:2,
    explanation:'Il confronto più diretto: Elettra di D\'Annunzio celebra i grandi italiani come eroi da emulare per costruire un nuovo Impero — visione attiva, guerriera, elitaria della storia. La grande proletaria si è mossa di Pascoli giustifica la guerra di Libia in tono difensivo e compassionevole — la nazione come «proletaria» che cerca spazio, non come potenza imperiale. Due poeti che leggono lo stesso momento storico (l\'espansionismo italiano) con strumenti poetici opposti.'
  },
  { id:'da87', type:'open', topic:'Confronti',
    text:'Confronta la figura del «poeta-vate» in D\'Annunzio con quella del «fanciullino» in Pascoli: quali visioni del ruolo del poeta nella società incarnano?',
    modelAnswer:'Le due figure sono le più celebri metafore del ruolo del poeta nel Decadentismo italiano e sono antitetiche. Il vate di D\'Annunzio (Laudi, discorsi pubblici): il poeta è il profeta della nazione, guida spirituale e politica, superuomo che plasma la realtà con la parola. È una figura eroica, estroversa, mondana, che parla alle folle e le trascina. La vita stessa diventa azione poetica («Maggio Radioso», Fiume). Il fanciullino di Pascoli (saggio Il fanciullino, 1897): in ogni essere umano vive un bambino che percepisce la realtà con occhi stupiti, prima della razionalizzazione adulta. Il poeta è colui che conserva intatta questa capacità di meraviglia. È una figura introvertita, solitaria, rifugiata nel «nido» familiare. Non guida le folle: rivela l\'indicibile. In sintesi: D\'Annunzio verso l\'alto (il poeta sale sul podio della storia); Pascoli verso l\'interno (il poeta scende nella profondità dell\'animo). Entrambi reagiscono alla crisi di fine Ottocento, ma con risposte opposte.',
    keywords:['vate profeta nazione','guida politica','folle Maggio Radioso','fanciullino meraviglia','introversione nido','rivelazione ineffabile','crisi fine Ottocento','verso alto vs verso interno']
  },

  /* ──────────────  SINTESI GENERALE  ────────────── */
  { id:'da88', type:'mc', topic:'Poetica',
    text:'Quale tra le seguenti affermazioni descrive correttamente il rapporto di D\'Annunzio con il Simbolismo francese?',
    options:[
      'D\'Annunzio ignora il Simbolismo francese e costruisce la sua poetica esclusivamente su fonti latine e rinascimentali',
      'D\'Annunzio eredita dal Simbolismo (Baudelaire, Mallarmé, Verlaine) la centralità del suono e dell\'evocazione, ma ne trasforma la dimensione crepuscolare in potenza vitalistica',
      'D\'Annunzio è il traduttore italiano di Baudelaire: le Laudi sono una versione italiana dei Fiori del male',
      'D\'Annunzio rifiuta esplicitamente il Simbolismo nel saggio Come io vivo perché lo considera troppo individualistico'
    ],
    correct:1,
    explanation:'D\'Annunzio eredita dal Simbolismo la concezione musicale della parola (Mallarmé: «la musica prima di ogni cosa»), la centralità della suggestione su quella del significato logico, l\'uso dell\'analogia. Ma trasforma la dimensione crepuscolare e malinconica del Simbolismo (Verlaine: «Je suis l\'empire à la fin de la décadence») in potenza vitalistica: il panismo è espansione energetica, non rassegnazione. Il Simbolismo è la radice; il superuomo è la trasformazione italiana.'
  },
  { id:'da89', type:'mc', topic:'Confronti',
    text:'Quale fra questi è il confronto D\'Annunzio-Montale più utile per l\'orale?',
    options:[
      'Entrambi celebrano la natura mediterranea come luogo di pace: D\'Annunzio con la Versilia, Montale con le Cinque Terre',
      'D\'Annunzio usa la parola per amplificare e traboccare (imaginifico); Montale usa la parola per negare ed escludere (ciò che non siamo, ciò che non vogliamo): Anti-Vate radicale che parodia la Pioggia nel pineto',
      'D\'Annunzio e Montale hanno lo stesso approccio al correlativo oggettivo: la natura come specchio dell\'anima',
      'Montale ammira D\'Annunzio come maestro e ne riprende il panismo nelle Occasioni'
    ],
    correct:1,
    explanation:'Il confronto canonico: D\'Annunzio moltiplica la parola (imaginifico, tutto pieno, tutto sonoro), amplifica il sé fino alla fusione con la natura. Montale riduce e nega (il «ciò che non siamo» di Non chiederci la parola è il manifesto dell\'anti-vate), usa un lessico duro e aspro, il correlativo oggettivo come distanza dall\'io. La parodia di Montale a Piove (1971) è il gesto critico esplicito: stessa anafora, opposta direzione.'
  },
  { id:'da90', type:'open', topic:'Confronti',
    text:'Sintetizza il percorso di D\'Annunzio dalle cinque fasi della poetica al confronto con i grandi del Novecento, identificando la sua posizione nel panorama letterario italiano.',
    modelAnswer:'D\'Annunzio attraversa cinque fasi: (1) Giovanile-carducciana (metri barbari, classicismo civile); (2) Estetismo romano (Il piacere, 1889 — vita come opera d\'arte, Andrea Sperelli); (3) Poetica della bontà (Giovanni Episcopo, L\'innocente, 1891–93 — influenza russa, pietà per gli umili); (4) Superuomo-vate (Laudi 1903, Alcyone — panismo, fusione con la natura, nazionalismo imperialista); (5) Notturno (1921 — prosa franta, introspezione). Nel panorama novecentesco D\'Annunzio occupa la posizione del «maestro avverso» che tutti i poeti successivi devono confrontare: Saba gli oppone la poesia onesta delle parole trite; Ungaretti gli oppone il verso-parola e il silenzio (opposto al traboccare sonoro); Montale lo parodia in Piove (1971) svuotando il panismo. D\'Annunzio è il punto di riferimento negativo del Novecento italiano: la sua grandezza è così ingombrante che ogni poeta si definisce anche per differenza da lui. È il massimo esponente italiano del Decadentismo e dell\'Estetismo, il vate che fuse letteratura e politica in modo irripetibile.',
    keywords:['cinque fasi','estetismo','poetica bontà','superuomo panismo','Notturno','maestro avverso','Saba parole trite','Ungaretti verso-parola','Montale anti-vate','decadentismo italiano']
  },
  { id:'da91', type:'mc', topic:'Vita · Fiume',
    text:'Che cosa è la «Reggenza italiana del Carnaro» (1919–1920)?',
    options:['Un romanzo incompiuto di D\'Annunzio','Lo stato fondato da D\'Annunzio a Fiume con miliziani irregolari — uno spettacolo politico-teatrale che anticipa il fascismo nei rituali (saluto dal balcone, adunate, demagogia)','Il titolo di una raccolta poetica sull\'Adriatico','Il nome del teatro principale di Venezia che D\'Annunzio diresse'],
    correct:1,
    explanation:'La «Reggenza italiana del Carnaro» è lo stato fondato a Fiume nel 1919–1920. D\'Annunzio inventa rituali (il saluto dal balcone, i discorsi al popolo, il grido «Eia eia alalà») che il fascismo riprenderà quasi integralmente. Mussolini lo osserva con attenzione — e lo marginalizza alla prima occasione.'
  },
  { id:'da92', type:'mc', topic:'Vita · Vittoriale',
    text:'Cosa è il «Vittoriale degli italiani»?',
    options:['Il manifesto politico di D\'Annunzio del 1918','La residenza-monumento di Gardone Riviera, dove D\'Annunzio vive dal 1922 alla morte (1938), trasformandola in una scenografia autobiografica di cimeli, eccessi e monumenti a sé stesso','Un\'opera teatrale sulla vittoria italiana nella Prima guerra mondiale','Una raccolta di discorsi patriottici della guerra di Libia'],
    correct:1,
    explanation:'Il Vittoriale è la residenza che D\'Annunzio trasforma in monumento a sé stesso. La arricchisce di cimeli bellici (inclusa la prua di una nave da guerra), stanze tematiche, reliquie. È l\'ultima espressione del suo «vivere inimitabile»: la vita come opera d\'arte totale, il «mausoleo da vivo».'
  },
  { id:'da93', type:'mc', topic:'Testi · La sera fiesolana',
    text:'In «La sera fiesolana» (Alcyone), quale processo si manifesta tra paesaggio e figura femminile?',
    options:['La donna si trasforma in albero di ulivo','Il paesaggio toscano acquista tratti antropomorfi (visi, labbra) mentre la donna diventa elemento paesaggistico — fusione totale come in un rituale panistico','La donna canta e il suo canto trasforma la notte in giorno','È una descrizione puramente realistica del tramonto di Fiesole'],
    correct:1,
    explanation:'In La sera fiesolana il paesaggio di Fiesole acquista caratteri umani («le colline s\'incurvano come labbra») mentre la figura femminile si dissolve nella natura. È il panismo in azione: umanizzazione della natura + naturalizzazione dell\'umano. Il refrain «Laudata sii...» cristallizza la metamorfosi.'
  },
  { id:'da94', type:'mc', topic:'Opere · Il Notturno',
    text:'In che circostanze nasce «Il Notturno» (1921) e quale forma espressiva usa?',
    options:['Nasce durante il ritiro politico a Fiume, scritto come diario politico','Nasce durante la convalescenza per una lesione all\'occhio (1916): D\'Annunzio scrive su strisce di carta al buio — prosa franta, intermittente, visionaria','Nasce durante l\'esilio parigino in forma di saggio critico','Nasce dopo il 1922 nel Vittoriale in dialetto di Gardone'],
    correct:1,
    explanation:'Il Notturno (1921) nasce da un\'esperienza biografica estrema: D\'Annunzio si ferisce a un occhio durante un volo del 1916 e deve tenere entrambi gli occhi bendati per mesi. Scrive al buio su strisce di carta («striscioline»). La forma è frammentata, visionaria — anticipatrice della prosa della coscienza novecentesca.'
  },
  { id:'da95', type:'mc', topic:'Opere · Laudi · struttura',
    text:'Come è strutturato il progetto delle «Laudi del cielo del mare della terra e degli eroi»?',
    options:['Due libri: Maia e Alcyone','Quattro libri: Maia (1903), Elettra (1903), Alcyone (1904), Merope (1912) — il quinto, Asterope, resta incompiuto','Tre libri corrispondenti ai tre anni della Prima guerra mondiale','Un unico libro in cinque sezioni'],
    correct:1,
    explanation:'Le Laudi sono concepite come progetto unitario: Maia (l\'azione superomistica), Elettra (celebrazione dei grandi italiani), Alcyone (fusione con la natura — il capolavoro), Merope (guerra di Libia), Asterope (Prima guerra mondiale — incompiuto). Alcyone è di gran lunga il volume più riuscito.'
  },
  { id:'da96', type:'mc', topic:'Opere · La figlia di Iorio',
    text:'Cosa è «La figlia di Iorio» (1904) nell\'opera di D\'Annunzio?',
    options:['Un romanzo storico sull\'Abruzzo medievale','Una tragedia pastorale ambientata in Abruzzo: il più alto esempio di teatro poetico di D\'Annunzio, con elementi di mito, folklore e sacrificio — la storia di Mila di Codra e Aligi','Il titolo di una raccolta di poesie sui pastori','Un dramma simbolista ispirato a Ibsen'],
    correct:1,
    explanation:'La figlia di Iorio (1904) è il capolavoro teatrale di D\'Annunzio: una tragedia ambientata in un Abruzzo arcaico e mitico. Mila di Codra è perseguitata dagli uomini ubriachi; il pastore Aligi la salva. D\'Annunzio usa il dialetto abruzzese in modo evocativo. È il suo teatro più riuscito.'
  },
  { id:'da97', type:'tf', topic:'Vita · Guerra',
    text:'Vero o falso: D\'Annunzio nel 1918 vola su Vienna lanciando bombe.',
    options:['Vero','Falso'],
    correct:1,
    explanation:'Falso — ma quasi. Nel volo su Vienna (9 agosto 1918) D\'Annunzio lancia non bombe ma volantini propagandistici. Il gesto è teatrale, non militare: è un\'azione psicologica. D\'Annunzio non bombarda Vienna, ma il volo diventa leggenda del suo patriottismo e audacia. Più teatro che guerra.'
  },
  { id:'da98', type:'mc', topic:'Poetica · Decadentismo',
    text:'Come D\'Annunzio incarna la risposta italiana alla «crisi del Positivismo» che genera il Decadentismo?',
    options:['La crisi del positivismo porta D\'Annunzio verso il realismo verista','D\'Annunzio incarna la risposta elitaria: il poeta-superuomo accede alla verità attraverso la bellezza e l\'erotismo, non la scienza. La vita come opera d\'arte è la soluzione aristocratica alla crisi dei valori','D\'Annunzio risponde alla crisi con l\'umorismo pirandelliano','Il decadentismo in Italia non ha radici nella crisi del positivismo'],
    correct:1,
    explanation:'La crisi del positivismo genera il Decadentismo: il poeta accede alla verità attraverso simbolo, intuizione, sensi e bellezza — non attraverso la ragione scientifica. In Italia D\'Annunzio incarna la risposta «alta» e aristocratica: la vita come opera d\'arte, il superuomo come soluzione elitaria.'
  },
  { id:'da99', type:'mc', topic:'Testi · Pioggia nel pineto · refrain',
    text:'Il refrain finale de «La pioggia nel pineto» inverte i pronomi rispetto al testo principale. Cosa significa questa inversione?',
    options:['È un errore di stampa della prima edizione','L\'inversione «che ieri t\'illuse, che oggi m\'illude» → «che ieri m\'illuse, che oggi t\'illude» crea un senso di atemporalità mitica: passato e presente si scambiano — la metamorfosi è totale e bidirezionale','Indica che il poeta si è annoiato della foresta','Suggerisce che la donna non ha ascoltato il poeta'],
    correct:1,
    explanation:'Il refrain conclusivo rovescia i pronomi creando «atemporalità mitica» (Gibellini): nel mito, il tempo lineare scompare. Ermione (personaggio mitologico) rivive nel presente; il poeta diventa eroe antico. La metamorfosi è completa quando il tempo si inverte: questo è il culmine del panismo.'
  },
  { id:'da100', type:'open', topic:'Sintesi · maestro avverso',
    text:'Spiega perché D\'Annunzio è definito «il maestro avverso» del Novecento italiano, citando almeno tre poeti che si definiscono per differenza da lui.',
    modelAnswer:'D\'Annunzio è «il maestro avverso» perché è così ingombrante che ogni poeta novecentesco deve posizionarsi rispetto a lui. Tre esempi: (1) Saba oppone la «poesia onesta» delle parole trite al preziosismo aulico di D\'Annunzio: «disonesta» è la poesia che gonfia tutto e mette il poeta-superuomo al centro. (2) Ungaretti oppone il verso-parola e il silenzio bianco al traboccare sonoro e ornamentale. (3) Montale parodia D\'Annunzio in «Piove» (1971): stessa anafora, opposta direzione — piove sul vuoto, non sulla metamorfosi panica. D\'Annunzio è necessario al Novecento italiano come il maestro che si deve superare.',
    keywords:['maestro avverso','Saba poesia onesta','Ungaretti verso-parola','Montale parodia','dialogo critico','punto di riferimento negativo']
  }
]

}; // fine QUIZ_DATA
