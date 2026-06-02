/* =========================================================================
   dannunzio-quiz-data.js — Banca domande per Gabriele D'Annunzio
   30 domande in formato compatibile con quiz-engine.js
   Sezioni: Vita (10) · Poetica (10) · Opere (5) · Testi (5)
   ========================================================================= */

(function () {
  'use strict';

  function mc(id, topic, text, options, correct, explanation) {
    return { id: id, type: 'mc', topic: topic, text: text, options: options, correct: correct, explanation: explanation };
  }
  function tf(id, topic, text, correct, explanation) {
    return { id: id, type: 'tf', topic: topic, text: text, options: ['Vero', 'Falso'], correct: correct ? 0 : 1, explanation: explanation };
  }
  function open(id, topic, text, modelAnswer, keywords) {
    return { id: id, type: 'open', topic: topic, text: text, modelAnswer: modelAnswer, keywords: keywords };
  }

  window.QUIZ_DATA = window.QUIZ_DATA || {};
  window.QUIZ_DATA.dannunzio = [

    /* ── VITA ── */
    mc('da01', 'Vita', 'In quale città nacque Gabriele D\'Annunzio?',
      ['Pescara (allora Pescara di Chieti)', 'Napoli', 'Roma', 'Firenze'],
      0,
      'D\'Annunzio nacque il 12 marzo 1863 a Pescara, allora Pescara di Chieti (Abruzzo). La città era parte del Regno delle Due Sicilie fino all\'Unità d\'Italia.'
    ),

    mc('da02', 'Vita', 'Con quale opera D\'Annunzio debuttò precocemente in poesia, pubblicata a soli 16 anni?',
      ['Canto Novo', 'Primo vere', 'Le Laudi', 'Il Piacere'],
      1,
      'Primo vere (1879), pubblicato a soli 16 anni, è la raccolta poetica d\'esordio di D\'Annunzio: imita i classici latini (Ovidio, Catullo) con virtuosismo tecnico precoce.'
    ),

    mc('da03', 'Vita', 'In quale periodo D\'Annunzio visse a Roma frequentando i salotti e pubblicando i romanzi «mondani»?',
      ['1871–1880', '1881–1891', '1898–1910', '1910–1919'],
      1,
      'Dal 1881 D\'Annunzio si trasferisce a Roma dove entra nei salotti dell\'alta borghesia e della nobiltà, pubblica <em>Il piacere</em> (1889) e i grandi romanzi del periodo mondano.'
    ),

    tf('da04', 'Vita', 'D\'Annunzio si esiliò in Francia per sfuggire ai debiti, nel periodo noto come «esilio dorato».',
      true,
      'Vero. Tra il 1910 e il 1915 D\'Annunzio si rifugiò a Arcachon (Francia) per sfuggire ai creditori. L\'esilio fu però produttivo: scrisse opere importanti e tornò in Italia allo scoppio della Prima guerra mondiale.'
    ),

    mc('da05', 'Vita', 'Quale impresa militare e politica compì D\'Annunzio nel 1919?',
      ['Guidò le truppe italiane nella battaglia di Vittorio Veneto', 'Occupò Fiume (Rijeka) con i suoi legionari, rivendicandola all\'Italia', 'Partecipò allo sbarco di Anzio', 'Fondò il Partito Nazionale Fascista con Mussolini'],
      1,
      'Il 12 settembre 1919 D\'Annunzio guidò circa 2600 uomini armati (i «legionari») nell\'occupazione di Fiume, rivendicata dall\'Italia come «vittoria mutilata». L\'impresa durò 15 mesi, fino al «Natale di sangue» del dicembre 1920.'
    ),

    mc('da06', 'Vita', 'Come si chiama la residenza-museo di D\'Annunzio sul Lago di Garda?',
      ['La Capponcina', 'Il Vittoriale degli Italiani', 'Villa Aldini', 'Il Garda del Vate'],
      1,
      'Il Vittoriale degli Italiani (Gardone Riviera, Brescia) è la residenza-monumento che D\'Annunzio costruì e abitò dal 1921 fino alla morte (1938). È oggi museo nazionale.'
    ),

    tf('da07', 'Vita', 'D\'Annunzio sostenne entusiasticamente il fascismo e rimase alleato fedele di Mussolini fino alla morte.',
      false,
      'Falso. D\'Annunzio fu inizialmente vicino al fascismo, ma dopo l\'impresa di Fiume si distaccò progressivamente. Al Vittoriale visse in una sorta di esilio dorato, in rapporto ambiguo con il regime: onorato ufficialmente ma marginalizzato politicamente.'
    ),

    mc('da08', 'Vita', 'Quale fu la relazione artistica e sentimentale più celebre della vita di D\'Annunzio?',
      ['Con Eleonora Duse, attrice tragica', 'Con Matilde Serao, scrittrice', 'Con Sibilla Aleramo, poetessa', 'Con Ada Negri, poetessa'],
      0,
      'La relazione con Eleonora Duse (1895–1904) fu la più intensa e artistica: D\'Annunzio scrisse opere teatrali per lei, mentre Duse interpretava i suoi personaggi femminili sul palcoscenico internazionale.'
    ),

    mc('da09', 'Vita', 'In quale anno morì D\'Annunzio e dove?',
      ['1935, a Roma', '1938, al Vittoriale degli Italiani', '1940, a Milano', '1929, a Parigi'],
      1,
      'D\'Annunzio morì il 1° marzo 1938 al Vittoriale degli Italiani per un\'emorragia cerebrale, mentre lavorava al suo scrittoio. È sepolto al Vittoriale.'
    ),

    open('da10', 'Vita', 'Descrivi le tre fasi principali della vita e dell\'attività letteraria di D\'Annunzio.',
      'La prima fase (1880–1895 ca.) è quella dell\'estetismo e del dandy: D\'Annunzio come uomo di salotto, poeta mondano, autore de Il piacere. La seconda fase (1895–1910 ca.) è quella del superomismo nietzschiano: D\'Annunzio interpreta il Superuomo di Nietzsche nei romanzi (Le vergini delle rocce, Il fuoco) e nella poesia (Alcyone). La terza fase (1910–1938) è quella dell\'azione e del vate politico: l\'esilio francese, l\'interventismo, l\'impresa di Fiume, il Vittoriale.',
      ['estetismo', 'superomismo', 'vate', 'Nietzsche', 'Fiume', 'dandy']
    ),

    /* ── POETICA ── */
    mc('da11', 'Poetica', 'Cosa si intende per «panismo» nella poetica di D\'Annunzio?',
      ['La glorificazione della guerra e della violenza', 'La fusione mistica del poeta con la natura, che porta alla dissoluzione dell\'Io nel cosmo naturale', 'La critica della modernità industriale', 'La celebrazione del pane come simbolo di vita agreste'],
      1,
      'Il panismo (da Pan, dio della natura) è la fusione del poeta con gli elementi naturali. In Alcyone, D\'Annunzio descrive la metamorfosi del suo corpo in pioggia, foglie, vento: l\'Io si dissolve nella natura, superando i limiti del singolo.'
    ),

    mc('da12', 'Poetica', 'Come D\'Annunzio reinterpreta il concetto nietzschiano di «superuomo»?',
      ['In modo fedele a Nietzsche, come filosofia dell\'eterno ritorno', 'Come estetismo: il superuomo è chi trasforma la propria vita in opera d\'arte, un essere superiore per bellezza e sensibilità', 'Come rivoluzione politica democratica contro l\'aristocrazia', 'Come rinuncia al mondo per dedicarsi alla pura arte'],
      1,
      'D\'Annunzio legge Nietzsche in chiave estetistica: il superuomo non è il filosofo della volontà di potenza, ma l\'artista aristocratico che fa della vita un\'opera d\'arte, che domina gli inferiori con la bellezza, il coraggio e l\'intensità del vivere.'
    ),

    tf('da13', 'Poetica', 'D\'Annunzio elaborò una poetica dell\'impersonalità simile a quella di Verga: l\'autore deve scomparire dal testo.',
      false,
      'Falso. D\'Annunzio è il contrario: la sua poetica è ipersoggettiva. Il poeta-vate è protagonista assoluto, la sua personalità invade ogni testo. È l\'opposto dell\'impersonalità verghiana.'
    ),

    mc('da14', 'Poetica', 'Che cosa significa definire D\'Annunzio un «vate»?',
      ['Un poeta che scrive solo di guerra', 'Un poeta-profeta, voce della nazione, che guida il popolo con la parola come un sacerdote', 'Un poeta che usa prevalentemente il verso libero', 'Un poeta che vive in esilio per scelta artistica'],
      1,
      'Il vate (dal latino vates = profeta, poeta sacro) è la figura del poeta come guida spirituale e politica della nazione. D\'Annunzio costruì consapevolmente questa immagine pubblica di sé: poeta-guerriero, eroe nazionale, voce dell\'Italia.'
    ),

    mc('da15', 'Poetica', 'In quale raccolta D\'Annunzio raggiunge il vertice del panismo e della musicalità?',
      ['Primo vere', 'Canto Novo', 'Alcyone (Le Laudi, libro III)', 'Il poema paradisiaco'],
      2,
      'Alcyone (1903), terzo libro delle Laudi, è considerato il capolavoro assoluto di D\'Annunzio: l\'estate come metafora dell\'esaltazione vitale, il panismo, la sinestesia, la musicalità assoluta. «La pioggia nel pineto» ne è il testo simbolo.'
    ),

    mc('da16', 'Poetica', 'Come si distingue il Decadentismo di D\'Annunzio da quello di Pascoli?',
      ['D\'Annunzio è religioso e introverso; Pascoli è mondano ed estroverso', 'D\'Annunzio è estetismo muscolare, superuomo, panismo; Pascoli è il fanciullino, la dimensione del piccolo e del nido familiare', 'Non c\'è differenza: entrambi usano gli stessi temi e stili', 'D\'Annunzio è pessimista; Pascoli è ottimista'],
      1,
      'Il Decadentismo italiano si biforca: D\'Annunzio (estetismo, superuomo, panismo, sensualità, vita come arte) vs Pascoli (fanciullino, nido, fonosimbolismo, piccole cose, lutto). Entrambi decadenti ma opposti per sensibilità e poetica.'
    ),

    tf('da17', 'Poetica', 'D\'Annunzio fa un uso massiccio della sinestesia, mescolando sensazioni di sensi diversi in un\'unica immagine.',
      true,
      'Vero. La sinestesia è uno dei tratti stilistici più caratteristici di D\'Annunzio: «la pioggia crepitante» (tatto+udito), «verde odore di fronda» (vista+olfatto). Serve a evocare una percezione totale e sensuale della realtà.'
    ),

    mc('da18', 'Poetica', 'Che cosa intende D\'Annunzio con «estetismo»?',
      ['La critica estetica di opere letterarie e artistiche', 'La vita vissuta come opera d\'arte: ogni gesto, ogni oggetto, ogni relazione deve essere bello e raffinato', 'La preferenza per l\'arte figurativa rispetto alla letteratura', 'L\'imitazione dei modelli estetici greci e romani'],
      1,
      'L\'estetismo dannunziano — influenzato da Wilde e Huysmans — è il progetto di vita: il bello è il valore supremo, la vita va trasformata in un\'opera d\'arte. Andrea Sperelli ne è l\'incarnazione narrativa nel romanzo Il piacere.'
    ),

    open('da19', 'Poetica', 'Spiega la differenza tra l\'impersonalità di Verga e il vate-protagonista di D\'Annunzio.',
      'In Verga l\'autore si eclissa totalmente: la storia sembra raccontarsi da sola, senza mediazione. In D\'Annunzio è l\'opposto: il poeta è sempre al centro, è protagonista assoluto della propria opera. La sua biografia diventa mito, la sua vita è l\'opera d\'arte per eccellenza. Mentre Verga cancella il narratore, D\'Annunzio trasforma il narratore in eroe.',
      ['eclissi', 'vate', 'autobiografia', 'mito', 'impersonalità', 'protagonista']
    ),

    mc('da20', 'Poetica', 'Quale corrente europea influenzò maggiormente l\'estetismo di D\'Annunzio?',
      ['Il Naturalismo francese di Zola', 'Il Simbolismo di Mallarmé e l\'Estetismo inglese di Wilde', 'Il Romanticismo tedesco di Goethe', 'Il Realismo russo di Tolstoj'],
      1,
      'D\'Annunzio fu profondamente influenzato dal Decadentismo e dall\'Estetismo europeo: Baudelaire (Fiori del male, spleen, sinestesia), Huysmans (A rebours, dandy), Wilde (Il ritratto di Dorian Gray, vita come arte), Nietzsche (superuomo).'
    ),

    /* ── OPERE ── */
    mc('da21', 'Opere', 'Qual è il romanzo in cui D\'Annunzio introduce il personaggio di Andrea Sperelli, emblema del dandy estetista?',
      ['Il fuoco', 'Le vergini delle rocce', 'Il piacere', 'Trionfo della morte'],
      2,
      'Il piacere (1889) è il primo romanzo di D\'Annunzio: il protagonista Andrea Sperelli è l\'aristocratico romano che fa della propria vita un\'opera d\'arte. È il romanzo simbolo dell\'estetismo italiano.'
    ),

    mc('da22', 'Opere', 'Le Laudi del cielo, del mare, della terra e degli eroi è divisa in quanti libri?',
      ['3', '5', '7', '9'],
      2,
      'Le Laudi sono divise in sette libri, titolati con i nomi delle stelle delle Pleiadi: Maia, Elettra, Alcyone, Merope, Asterope, Taigete, Celeno. Solo i primi tre furono completati e pubblicati.'
    ),

    tf('da23', 'Opere', 'Il Notturno (1921) fu scritto su striscioline di carta mentre D\'Annunzio era costretto all\'immobilità per una ferita all\'occhio.',
      true,
      'Vero. Il Notturno fu composto durante la convalescenza per la perdita parziale della vista all\'occhio destro, dopo un incidente aereo (1916). D\'Annunzio scrisse su striscioline di carta, bendate le palpebre, sdraiato. Il testo riflette questa clausura sensoriale.'
    ),

    mc('da24', 'Opere', 'In quale romanzo D\'Annunzio tratta il tema della forza-vitale e della guerra come «igiene del mondo»?',
      ['L\'innocente', 'Trionfo della morte', 'Le vergini delle rocce', 'Il fuoco'],
      2,
      'Le vergini delle rocce (1896) è il romanzo del superomismo politico: il protagonista Claudio Cantelmo cerca la donna ideale per generare il futuro re d\'Italia. È il testo più programmaticamente nietzschiano di D\'Annunzio.'
    ),

    mc('da25', 'Opere', 'Quale opera teatrale di D\'Annunzio, scritta per Eleonora Duse, fu considerata rivoluzionaria nel teatro italiano?',
      ['La figlia di Iorio', 'La città morta', 'Fedra', 'Il ferro'],
      0,
      'La figlia di Iorio (1904) è considerata il capolavoro teatrale di D\'Annunzio: un dramma pastorale ambientato in Abruzzo, con protagonista Mila di Codra. Scritto per Eleonora Duse, mescolava mito, dialetto e simbolismo.'
    ),

    /* ── TESTI ── */
    mc('da26', 'Testi', 'Nella «Pioggia nel pineto», a chi si rivolge il poeta con la parola «Taci»?',
      ['A se stesso, per immergersi nel silenzio della natura', 'A Ermione (la donna amata), invitandola al silenzio per ascoltare la pioggia', 'Ai lettori', 'Ai legionari di Fiume'],
      1,
      'Il testo si apre con «Taci» rivolto a Ermione (Eleonora Duse). La donna deve tacere per lasciare spazio alla voce della natura: la pioggia nel pineto diventa una sinfonia che trasforma entrambi in elementi naturali (panismo).'
    ),

    mc('da27', 'Testi', 'Quale tematica principale esprime «La sera fiesolana»?',
      ['La guerra e il coraggio', 'Il tramonto e la fusione della sera con il paesaggio toscano, celebrazione della bellezza naturale', 'L\'amore tradito e la nostalgia', 'La morte come liberazione'],
      1,
      'La sera fiesolana (da Alcyone, 1903) celebra la sera sulle colline di Fiesole: la luce morente, le viti, il paesaggio toscano. Il ritornello «Laudata sii…» crea un effetto di litania, di preghiera pagana alla bellezza della natura.'
    ),

    tf('da28', 'Testi', 'In «O falce di luna calante» (da Canto Novo) la luna è un simbolo di morte e di fine imminente.',
      true,
      'Vero. La luna calante in «O falce di luna calante» è immagine della morte: la sua forma di falce evoca la fine, il taglio della vita. La poesia è un lamento serale, una meditazione sulla caducità della bellezza.'
    ),

    open('da29', 'Testi', 'Analizza brevemente il panismo in «La pioggia nel pineto»: come si trasforma il poeta?',
      'Il poeta descrive come lui ed Ermione si trasformino progressivamente in elementi naturali sotto la pioggia nel bosco: le loro voci diventano rumori del bosco, i capelli si fanno piante, le labbra corteccia. È il panismo in atto: l\'Io si scioglie nella natura, superando il confine tra umano e vegetale. La sinestesia (pioggia che «canta», suoni che «toccano») intensifica questa fusione sensoriale.',
      ['panismo', 'metamorfosi', 'fusione', 'sinestesia', 'natura', 'Ermione']
    ),

    mc('da30', 'Testi', 'Nel «Ritratto di Andrea Sperelli» (dal Piacere), quale frase riassume meglio la filosofia del protagonista?',
      ['«Bisogna uccidere la bellezza per liberarsi»', '«Bisogna fare della propria vita come si fa un\'opera d\'arte»', '«La volontà è l\'unica legge del mondo»', '«Chi non soffre non conosce la vera arte»'],
      1,
      '«Bisogna fare della propria vita come si fa un\'opera d\'arte» è la filosofia di Andrea Sperelli — e di D\'Annunzio stesso. È il manifesto dell\'estetismo: ogni gesto, ogni relazione, ogni oggetto deve essere bello, raffinato, unico.'
    )

  ];

})();
