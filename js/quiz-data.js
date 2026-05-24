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
  }
]

}; // fine QUIZ_DATA
