/* =========================================================================
   antinovecentismo-quiz-data.js — Banca domande: Linea Antinovecentista
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
  window.QUIZ_DATA.antinovecentismo = [

    mc("an01","Origini","A cosa si oppone la 'linea antinovecentista'?",
      ["Al Futurismo e al Dadaismo","Al gruppo 'Novecento' di Massimo Bontempelli (classicismo modernista anni '20) e piu in generale alle avanguardie e all'oscurita ermetica","Al Naturalismo e al Verismo","Al Romanticismo ottocentesco"],
      1,"'Novecento' era il gruppo teorizzato da Bontempelli negli anni '20: classicismo modernista, tendenzialmente legato al fascismo. L'anti-novecentismo e la scelta di una strada diversa — piu legata alla tradizione poetica italiana classica usata con liberta moderna, e meno all'oscurita delle avanguardie."),

    mc("an02","Origini","Quali sono i tre protagonisti principali della Linea Antinovecentista?",
      ["Marinetti, Papini, Soffici","Saba, Caproni, Pavese","Rebora, Sbarbaro, Slataper","Quasimodo, Luzi, Gatto"],
      1,"I tre protagonisti principali: Umberto Saba (il canzoniere, la poesia onesta, Trieste), Giorgio Caproni (il viaggio senza meta, la metrica tradizionale rinnovata) e Cesare Pavese (la campagna piemontese, il verso-frase narrativo). Tre poeti diversi che condividono il rifiuto dell'oscurita come valore in se."),

    mc("an03","Origini","La 'linea antinovecentista' e un movimento organizzato con manifesto?",
      ["Si, con manifesto pubblicato da Saba nel 1930","No: e una tendenza critica che raggruppa poeti diversi accomunati dalla scelta della chiarezza contro l'oscurita ermetica","Si, con manifesto pubblicato su Solaria","No, e hanno categoricamente rifiutato qualsiasi etichetta"],
      1,"No: come il Crepuscolarismo, la Linea Antinovecentista non e un movimento organizzato. E una tendenza critica — una categoria retrospettiva della critica letteraria — che raggruppa poeti che condividono il rifiuto dell'oscurita come valore e la scelta della chiarezza."),

    mc("an04","Origini","Da quale citta italiana e legato in modo emblematico Umberto Saba?",
      ["Firenze","Roma","Trieste","Genova"],
      2,"Trieste e la citta-simbolo di Saba: la sua identita divisa (triestino, ebreo, italiano), il porto, la gente comune, i mercati, la donna amata Lina. Il Canzoniere e anche una mappa poetica di Trieste. 'Ho traversata tutta la citta' — l'apertura di Trieste e il verso piu famoso della poesia antinovecentista."),

    mc("an05","Origini","In quale anno Saba pubblica la prima edizione del Canzoniere?",
      ["1910","1921","1933","1945"],
      1,"La prima edizione del Canzoniere viene pubblicata a Trieste nel 1921. Saba continua ad ampliarla per trent'anni fino all'edizione definitiva del 1954. Il titolo richiama esplicitamente Petrarca e dichiara la scelta della tradizione italiana."),

    mc("an06","Poetica","Cosa significa 'poesia onesta' nella definizione di Saba?",
      ["Una poesia di contenuto morale e religioso","Una poesia chiara e diretta che non si nasconde dietro l'oscurita: rispetta il lettore, non lo inganna con false profondita; in polemica con l'Ermetismo","Una poesia senza figure retoriche","Una poesia autobiografica senza finzioni"],
      1,"'Poesia onesta' di Saba: non si nasconde dietro l'oscurita deliberata; rispetta il lettore parlandogli direttamente. Non e facilita — e 'difficile semplicita', conquista di anni di lavoro. In polemica implicita con l'Ermetismo: l'oscurita ermetica e per Saba una forma di comunicazione mancata."),

    mc("an07","Poetica","Cosa significa 'difficile semplicita' nella poetica di Saba?",
      ["La semplicita e facile per i grandi poeti","La semplicita non e un punto di partenza ma una conquista: sembrare naturali richiede un lavoro enorme; semplificare e piu difficile che complicare","Una tecnica metrica complessa ma con lessico semplice","La poesia scritta in dialetto triestino"],
      1,"La 'difficile semplicita' (da Storia e cronistoria del Canzoniere, 1948): la naturalezza apparente delle poesie di Saba richiede un lavoro enorme di revisione e scelta. Trovare la parola esatta, il verso perfetto, l'immagine che dice tutto senza aggiungere niente di inutile — e piu difficile dell'oscurita voluta."),

    mc("an08","Poetica","Cosa sono le 'trite parole' che Saba dice di usare?",
      ["Le parole rare tratte dai dizionari antichi","Le parole usuali e consumate dall'uso quotidiano: scelte deliberatamente perche il cuore del lettore le riconosca immediatamente","Le parole dialettali triestine","Le formule della tradizione poetica italiana"],
      1,"Le 'trite parole': parole usuali, consumate dall'uso quotidiano — non rare ne aulichetiche. Saba le sceglie perche vuole che il cuore del lettore le riconosca immediatamente come proprie. L'effetto poetico viene non dalla rarità della parola ma dalla precisione del suo uso nel contesto."),

    mc("an09","Poetica","Saba usa la metrica tradizionale (sonetto, endecasillabo) in modo…",
      ["Identico alla tradizione classica senza modifiche","Svuotato di enfasi retorica e reinventato con tono colloquiale e moderno: la forma tradizionale come risorsa, non come gabbia","Rifiutandola completamente a favore del verso libero","Imitando fedelmente Petrarca"],
      1,"La metrica tradizionale rinnovata: Saba usa sonetti, endecasillabi, terzine — ma con un tono colloquiale e moderno che svuota queste forme di ogni enfasi retorica. La tradizione non e un peso: e una risorsa che da al verso una densita sonora che il verso libero non ha automaticamente."),

    mc("an10","Poetica","Il Canzoniere di Saba e organizzato come…",
      ["Una raccolta casuale di poesie scritte nell'arco di vent'anni","Un progetto unitario che racconta tutta la vita del poeta attraverso i temi ricorrenti: Trieste, Lina, l'infanzia, la guerra, la psicoanalisi","Una serie di poemi narrativi","Una raccolta di traduzioni da Petrarca"],
      1,"Il Canzoniere e organizzato come un progetto unitario — la storia di una vita narrata in versi. I temi si intrecciano e si riprendono lungo trent'anni: Trieste come citta-specchio, Lina come donna amata, l'infanzia come radice e ferita, la guerra come catastrofe, la psicoanalisi come strumento di conoscenza."),

    mc("an11","Poetica","Quale strumento di conoscenza di se usa Saba nella tarda produzione?",
      ["La meditazione religiosa","La psicoanalisi freudiana: lo scandaglio dell'inconscio come chiave per capire l'identita poetica","L'analisi storica della tradizione letteraria","Il dialogo filosofico con altri poeti"],
      1,"Saba si sottopone alla psicoanalisi e ne fa una chiave di lettura della propria vita e della propria poesia. La sezione Piccolo Canzoniere del 1946 esplora il rapporto tra l'infanzia (la madre ebrea, il padre gentile assente) e la poesia. La psicoanalisi come strumento di autoconoscenza e originalissima nella poesia italiana."),

    mc("an12","Opere","Quale e il testo piu famoso di Saba, che inizia 'Ho traversata tutta la citta'?",
      ["Ulisse","Amai","Trieste","Il borgo"],
      2,"La lirica Trieste inizia con 'Ho traversata tutta la citta.' e contiene la formula piu celebre della poetica antinovecentista: 'Trieste ha una scontrosa grazia. Se piace, / e come un ragazzaccio aspro e vorace, / con gli occhi azzurri e mani troppo grandi / per regalare un fiore.' Un ritratto affettuoso e ironioc."),

    mc("an13","Opere","Quale raccolta di Giorgio Caproni (1956) e considerata la sua opera piu matura?",
      ["Come una allegoria","Il passaggio d'Enea","Il conte di Kevenhüller","Res amissa"],
      1,"Il passaggio d'Enea (1956) e la raccolta piu matura di Caproni. Il titolo allude all'Eneide: come Enea porta il padre Anchise in fuga da Troia, Caproni porta il peso della memoria. Ma il viaggio non porta a Roma: porta al vuoto, all'assenza, alla porta che non si apre."),

    mc("an14","Opere","Quale raccolta di Cesare Pavese (1936) usa un verso lungo di ispirazione americana?",
      ["Verra la morte e avra i tuoi occhi","Lavorare stanca","La luna e i falo","La bella estate"],
      1,"Lavorare stanca (1936) di Pavese: poemetti narrativi con il verso-frase lungo, mutuato da Edgar Lee Masters e Walt Whitman. La campagna piemontese, la solitudine come destino, il mito del Sud. Una poesia che racconta storie concrete — l'opposto dell'Ermetismo."),

    mc("an15","Opere","Storia e cronistoria del Canzoniere (1948) di Saba e un testo unico nel Novecento italiano perche…",
      ["E un romanzo autobiografico","E il solo libro di critica letteraria scritto da un poeta su se stesso: Saba analizza le proprie poesie spiegando la propria poetica","E un carteggio con altri poeti","E un saggio di psicoanalisi letteraria"],
      1,"Storia e cronistoria del Canzoniere (1948) e l'unico libro di critica letteraria scritto da un poeta su se stesso nella letteratura italiana. Saba spiega le proprie poesie, la propria poetica, le proprie influenze — con una lucidita e un'onesta che ne fanno un documento letterario insostituibile."),

    mc("an16","Confronti","Come si differenzia la Linea Antinovecentista dall'Ermetismo?",
      ["L'Ermetismo privilegia la chiarezza; la Linea Antinovecentista l'oscurita","La Linea Antinovecentista privilegia la chiarezza e la comunicazione diretta; l'Ermetismo privilegia l'oscurita come valore. Il dibattito fondamentale della poesia italiana del Novecento","Non c'e differenza sostanziale","La Linea Antinovecentista e piu sperimentale"],
      1,"La differenza fondamentale: Ermetismo (oscurita, parola assoluta, analogia ardita — il lettore conquista il senso) vs Linea Antinovecentista (chiarezza, trite parole, comunicazione diretta — il lettore riceve il senso come dono). Saba vs Ungaretti: il dibattito centrale della poesia italiana del Novecento."),

    mc("an17","Confronti","Come si differenzia Saba da Ungaretti come poeti?",
      ["Saba e piu oscuro di Ungaretti","Saba: trite parole, tradizione rinnovata, tono colloquiale, Trieste e il quotidiano. Ungaretti: parola assoluta, verso brevissimo, bianco della pagina, illuminazione. Due poetiche radicalmente diverse nello stesso periodo","Sono identici: entrambi Ermetici","Ungaretti e piu narrativo di Saba"],
      1,"Saba e Ungaretti sono i due poli della poesia italiana del Novecento. Saba: accumulo, racconto, colloquialita, trite parole, Canzoniere come storia di una vita. Ungaretti: riduzione, illuminazione, parola assoluta, verso brevissimo. L'uno espande; l'altro riduce. L'uno parla al cuore direttamente; l'altro parla all'anima attraverso il silenzio."),

    mc("an18","Confronti","Come si relaziona la Linea Antinovecentista con il Crepuscolarismo?",
      ["Sono la stessa corrente con nomi diversi","Il Crepuscolarismo anticipa la Linea Antinovecentista: entrambi usano il quotidiano e il registro basso. Ma il Crepuscolarismo ha malinconia rassegnata; Saba rivendica il quotidiano con orgoglio come 'poesia onesta'","Il Crepuscolarismo si oppone alla Linea Antinovecentista","Non c'e relazione tra le due correnti"],
      1,"Il Crepuscolarismo anticipa la Linea Antinovecentista: entrambi preferiscono il quotidiano al sublime. Ma la differenza e nell'atteggiamento: Gozzano si vergogna ironicamente del proprio sentimentalismo; Saba rivendica le proprie 'trite parole' con orgoglio. Resa malinconica vs scelta programmatica."),

    mc("an19","Confronti","Come si differenzia Caproni da Saba nella Linea Antinovecentista?",
      ["Non ci sono differenze rilevanti","Saba racconta la propria vita; Caproni tematizza il viaggio come metafora esistenziale dell'attesa e dell'assenza, con una vena ironica e metafisica","Caproni usa il verso libero; Saba la metrica tradizionale","Saba e piu ermetico di Caproni"],
      1,"Saba e Caproni condividono la scelta della chiarezza e della tradizione rinnovata, ma i loro temi e toni sono diversi. Saba racconta la propria vita (Trieste, Lina, l'infanzia). Caproni tematizza il viaggio senza meta — la stazione, il treno, la porta che non si apre — con una vena ironica e metafisica che lo avvicina al Novecento europeo."),

    mc("an20","Testi","La lirica 'Amai' di Saba e famosa per quale verso sulla tradizione poetica?",
      ["'Ho traversata tutta la citta'","'Amai trite parole che non uno / osava. M'incantai di quelle cose / che gli uomini dimenticano.'","'M'illumino d'immenso'","'Ognuno sta solo sul cuor della terra'"],
      1,"In 'Amai' Saba scrive: 'Amai trite parole che non uno / osava. M'incantai di quelle cose / che gli uomini dimenticano.' E la dichiarazione programmatica della sua poetica: le parole usuali che tutti gli altri poeti rifiutavano per ricercare l'originalita — Saba le usa deliberatamente perche sono le parole del cuore."),

    mc("an21","Testi","Qual e il tema del viaggio nella poesia di Caproni?",
      ["Il viaggio fisico nei paesi stranieri","Il viaggio come metafora dell'esistenza: un andare che non sa dove arriva, una ricerca senza oggetto, un'attesa alla stazione che non porta a nessun treno","Un viaggio storico nel passato della cultura italiana","Il viaggio della morte come tema macabro"],
      1,"In Caproni il viaggio non e eroico ne orientato: e un andare senza destinazione certa. La stazione, il treno, la porta chiusa — metafore dell'esistenza umana come ricerca di un senso che non si trova. C'e una malinconia metafisica leggera, ironica, che rende Caproni il poeta piu europeo della Linea Antinovecentista."),

    mc("an22","Testi","In Lavorare stanca di Pavese, perche la campagna piemontese e cosi centrale?",
      ["Pavese era agricoltore di professione","La campagna piemontese e per Pavese il luogo del mito personale e del destino: la terra natia come radice profonda e come condanna. Non e nostalgia romantica: e un mito oscuro e necessario","Pavese viveva in campagna quando scrisse la raccolta","La campagna serve solo come sfondo paesaggistico"],
      1,"La campagna piemontese in Pavese non e paesaggio descrittivo: e il luogo del mito personale, della radice oscura, del destino. Come Verga aveva il suo Sud immobile, Pavese ha le sue colline piemontesi — ma con una coscienza moderna e psicoanalitica che Verga non aveva."),

    mc("an23","Testi","La lirica 'Trieste' di Saba contiene la formula 'Trieste ha una scontrosa grazia'. Cosa significa 'scontrosa grazia'?",
      ["La citta e scontrosa e non ha grazia","Un ossimoro: la scontrosità (durezza, chiusura) e la grazia (bellezza, dolcezza) coesistono nella citta come nello stesso poeta","Una critica alla mancanza di eleganza della citta","Un complimento per l'architettura asburgica"],
      1,"'Scontrosa grazia': l'ossimoro e perfetto. Trieste e insieme scostante (porto di frontiera, citta di culture diverse in conflitto) e graziosa (bella, viva, umana). E anche il ritratto del poeta stesso: Saba e scostante e tenero, difficile e diretto. La citta come specchio del poeta."),

    mc("an24","Glossario","Cosa e il 'canzoniere' come forma letteraria e perche Saba sceglie questo titolo?",
      ["Una raccolta di canzoni popolari","Una raccolta organica di liriche che racconta la vita del poeta: il modello e Petrarca. Saba riprende il titolo per dichiarare la scelta della tradizione italiana come risorsa","Un genere musicale rinascimentale","Una raccolta di poesie amorose in forma di sonetto"],
      1,"Il Canzoniere come forma: raccolta organica che racconta la vita del poeta in versi. Il modello e Petrarca (Rerum vulgarium fragmenta, detto comunemente Canzoniere). Saba riprende il titolo dichiarando esplicitamente la scelta: sta dalla parte della tradizione italiana — non delle avanguardie europee."),

    mc("an25","Glossario","Cosa si intende per 'metro tradizionale rinnovato' nella Linea Antinovecentista?",
      ["L'uso del metro classico senza modifiche","Forme metriche classiche (endecasillabo, sonetto, terzina) usate con tono colloquiale e moderno: la forma come risorsa sonora, svuotata di enfasi retorica","Il verso libero con qualche rima occasionale","L'imitazione del verso di D'Annunzio"],
      1,"Metro tradizionale rinnovato: le forme metriche classiche (endecasillabo, sonetto, terzina) vengono usate da Saba e Caproni con un tono colloquiale e moderno che le svuota di enfasi retorica. La tradizione non e un peso: e una risorsa sonora che da al verso una densita che il verso libero non ha automaticamente."),

    tf("an26","Origini","La Linea Antinovecentista e un movimento organizzato con manifesto e rivista propria.",
      false,"Falso. La Linea Antinovecentista e una categoria critica retrospettiva, non un movimento organizzato. I suoi protagonisti — Saba, Caproni, Pavese — non si sono mai riuniti sotto questa etichetta. E una tendenza individuata dalla critica letteraria per raggruppare poeti che condividono la scelta della chiarezza."),

    tf("an27","Origini","Umberto Saba nasce e vive tutta la vita a Trieste.",
      false,"Parzialmente falso. Saba nasce a Trieste (1883) e vi torna spesso, ma vive anche a Firenze (durante il fascismo, nascosto in casa di amici perche ebreo) e in altri luoghi italiani. Trieste resta il centro simbolico della sua identita e della sua poesia anche quando non ci abita."),

    tf("an28","Poetica","Saba considera la propria poetica 'difficile semplicita' — sembrare semplici richiede un enorme lavoro.",
      true,"Vero. Nella Storia e cronistoria del Canzoniere (1948), Saba spiega che la sua semplicita apparente e il risultato di un lavoro enorme di revisione e scelta. Trovare la parola esatta, il verso naturale, l'immagine giusta e piu difficile che scrivere in modo oscuro o aulico."),

    tf("an29","Poetica","Saba usa la psicoanalisi freudiana come strumento di autoconoscenza nel Canzoniere.",
      true,"Vero. Saba si sottopone alla psicoanalisi e ne fa una chiave di lettura della propria vita e poesia. L'infanzia (la madre ebrea, il padre assente gentile), le scissioni dell'identita, il rapporto con il corpo e con Eros — temi freudiani che attraversano il Canzoniere soprattutto nella tarda produzione."),

    tf("an30","Confronti","Saba si oppone esplicitamente all'Ermetismo in scritti critici.",
      false,"Parzialmente vero. Saba non attacca gli ermetici in modo diretto e polemico, ma nella Storia e cronistoria del Canzoniere esprime chiaramente la propria posizione diversa: la 'poesia onesta' e la 'difficile semplicita' come alternative all'oscurita. La polemica e implicita, non dichiarata."),

    tf("an31","Opere","Il passaggio d'Enea di Caproni (1956) e ispirato al mito dell'Eneide di Virgilio.",
      true,"Vero. Il passaggio d'Enea riprende il mito virgiliano: come Enea porta sulle spalle il padre Anchise in fuga da Troia, Caproni porta il peso della memoria e del lutto (la madre morta). Ma il viaggio caproniano non porta a Roma — porta al vuoto, all'assenza, alla porta che non si apre."),

    tf("an32","Confronti","Pavese usa il verso breve di tipo ermetico in Lavorare stanca.",
      false,"Falso. Pavese usa il verso-frase lungo, narrativo, di ispirazione americana (Edgar Lee Masters, Walt Whitman): l'opposto del verso brevissimo ermetico. Il verso lungo permette di raccontare storie concrete e di costruire ritmi prosastici — scelta deliberatamente anti-ermetica."),

    tf("an33","Origini","Il Canzoniere di Saba e stato scritto interamente in un breve periodo di intensa creativita.",
      false,"Falso. Saba amplia il Canzoniere per trent'anni, dalla prima edizione (1921) all'edizione definitiva (1954). E il progetto di una vita: ogni fase biografica (la giovinezza, la guerra, il fascismo, la vecchiaia) lascia tracce nel libro."),

    tf("an34","Confronti","Caproni usa il verso libero nella maggior parte della sua produzione.",
      false,"Parzialmente falso. Caproni usa spesso la metrica tradizionale (endecasillabo, settenario, canzone) ma con un tono colloquiale che la trasforma. E uno dei poeti italiani del Novecento che usa piu abilmente la metrica tradizionale rinnov­ata — caratteristica che lo colloca nella Linea Antinovecentista."),

    tf("an35","Poetica","La 'difficile semplicita' di Saba significa che la sua poesia e accessibile a tutti i lettori senza sforzo.",
      false,"Falso. La semplicita apparente non e mancanza di profondita. La poesia di Saba e comprensibile nella superficie ma ha strati di significato che richiedono rileggere e pensare. E come la 'difficile semplicita' della buona cucina: sembra facile ma richiede anni di tecnica. Il contrario della facilita superficiale."),

    open("an36","Poetica","Spiega la differenza tra 'poesia onesta' di Saba e 'poesia oscura' dell'Ermetismo.",
      "La poesia onesta di Saba: non si nasconde dietro l'oscurita; parla direttamente al lettore con le 'trite parole' che tutti riconoscono; rispetta il lettore come interlocutore. La poesia oscura ermetica: valorizza il mistero e l'oscurita come misura della profondita; il lettore deve conquistare il senso attraverso un lavoro di interpretazione. Entrambe cercano la verita poetica — ma attraverso percorsi opposti. Saba: 'Amai trite parole che non uno osava.' Ungaretti: 'M'illumino / d'immenso.' L'una e apertura totale; l'altra e chiusura necessaria. Nessuna delle due e superiore: sono due modi diversi di essere fedeli alla propria visione del mondo.",
      ["poesia onesta","oscura","trite parole","conquista","apertura","chiusura"]),

    open("an37","Confronti","Perche la Linea Antinovecentista non e semplicemente 'poesia facile' al contrario dell'Ermetismo 'poesia difficile'?",
      "La semplicita di Saba e 'difficile' — e una conquista, non un punto di partenza. Trovare la parola esatta, il verso naturale, l'immagine che dice tutto senza aggiungere niente di inutile richiede anni di lavoro e di revisione. L'oscurita ermetica puo anche essere uno schermo dietro cui nascondersi. La semplicita non puo nascondersi: se e superficiale, si vede subito. Saba sa questo — e lo dichiara nella Storia e cronistoria. La differenza non e facile vs difficile: e due diversi ideali di comunicazione poetica. Uno valorizza il segreto e l'iniziazione; l'altro valorizza la condivisione e la riconoscibilita.",
      ["difficile semplicita","conquista","superficie","comunicazione","segreto","riconoscibilita"]),

    open("an38","Opere","Analizza il Canzoniere di Saba come opera organica.",
      "Il Canzoniere non e una raccolta casuale: e un progetto unitario che racconta la vita del poeta in versi. Come Petrarca (da cui prende il titolo) costruisce intorno alla figura di Laura il proprio canzoniere, Saba costruisce intorno a Trieste, Lina, l'infanzia e il tempo che passa il proprio. I temi si intrecciano lungo trent'anni: Trieste come citta-specchio dell'identita divisa; Lina come figura dell'amore e della quotidianita; l'infanzia come trauma e perdita (la madre ebrea, il padre assente); la psicoanalisi come strumento di conoscenza; la guerra come catastrofe. L'unita non e tematica ma musicale e biografica: la stessa voce, lo stesso tono colloquiale, la stessa onesta attraverso trent'anni di poesia.",
      ["Canzoniere","Trieste","Lina","infanzia","psicoanalisi","unita"]),

    open("an39","Confronti","Come si differenzia la concezione del 'quotidiano' in Saba rispetto a Gozzano?",
      "Entrambi usano il quotidiano come materia poetica — ma con atteggiamenti opposti. Gozzano: malinconia ironica e rassegnata. Sa di essere patetico (le 'buone cose di pessimo gusto') e se ne protegge con l'ironia. Il quotidiano e un rifugio dalla grandiosità impossibile, scelto per stanchezza. Saba: orgoglio programmatico. Le 'trite parole' non sono rifugio ma scelta positiva. Il quotidiano e la materia nobile della verita poetica — non le cose dimesse e provinciali di nonna Speranza ma le esperienze universali (l'amore per Lina, il dolore della guerra, la citta di Trieste) viste attraverso la lente del quotidiano. La differenza e tra la resa malinconica e la scelta orgogliosa.",
      ["Gozzano","Saba","quotidiano","orgoglio","ironia","scelta"]),

    open("an40","Poetica","Qual e l'eredita della Linea Antinovecentista nella poesia italiana del secondo Novecento?",
      "La Linea Antinovecentista prepara la svolta verso una poesia piu chiara e comunicativa nel secondo Novecento. Il 'realismo' poetico degli anni '50-'60 (Pasolini, Fortini, Sereni) si rifà implicitamente a questa tradizione: la chiarezza come scelta etica oltre che estetica, il quotidiano come materia nobile, la comunicazione diretta con il lettore. Saba in particolare diventa un riferimento per chi — dopo gli ermetici — vuole tornare a una poesia che 'parla' e non 'inizia'. La sua 'poesia onesta' e una delle nozioni-chiave della critica letteraria italiana del secondo Novecento: indica una poetica che non mente, che non si nasconde, che rispetta il lettore come interlocutore uguale.",
      ["eredita","secondo Novecento","Pasolini","chiarezza","comunicazione","onesta"])

  ];
})();
