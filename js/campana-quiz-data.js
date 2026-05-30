/* =========================================================================
   campana-quiz-data.js — Banca domande per Dino Campana
   35 domande in formato compatibile con quiz-engine.js
   NOTA: tutte le stringhe usano doppi apici per evitare problemi con
   gli apostrofi italiani nelle stringhe single-quoted.
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
  window.QUIZ_DATA.campana = [

    /* ── VITA ── */
    mc("ca01", "Vita", "In quale anno e luogo nacque Dino Campana?",
      ["1885 a Marradi (Firenze)", "1863 a Pescara", "1888 ad Alessandria d'Egitto", "1878 a Firenze"],
      0, "Campana nacque il 20 agosto 1885 a Marradi, piccolo paese sull'Appennino tosco-romagnolo in provincia di Firenze."),

    mc("ca02", "Vita", "Dove studia Campana prima di iscriversi all'universita?",
      ["Liceo classico di Firenze", "Scuole a Faenza e Torino", "Istituto tecnico di Bologna", "Seminario di Arezzo"],
      1, "Campana frequenta le scuole a Faenza e Torino, poi si iscrive alla Facolta di Chimica a Bologna e Firenze senza mai terminare gli studi."),

    mc("ca03", "Vita", "A quale rivista fiorentina si avvicina Campana attorno al 1905?",
      ["La Ronda", "Lacerba", "La Voce", "Il Leonardo"],
      2, "Campana entra in contatto con l'ambiente fiorentino della rivista La Voce (fondata da Prezzolini nel 1908), pur rimanendone un outsider inclassificabile."),

    mc("ca04", "Vita", "In quale anno Campana consegno il primo manoscritto a Soffici e Papini?",
      ["1905", "1910", "1913", "1918"],
      2, "Nel 1913 Campana consegna a Soffici e Papini il manoscritto Il piu lungo giorno, che va perduto. Lo riscrivera a memoria."),

    mc("ca05", "Vita", "Come si intitolava il primo manoscritto perduto di Campana?",
      ["I canti della notte", "Notturni toscani", "Il piu lungo giorno", "La tragedia orfica"],
      2, "Il primo manoscritto consegnato a Soffici e Papini nel 1913 si intitolava Il piu lungo giorno. Smarrito da questi, Campana lo riscrisse a memoria."),

    mc("ca06", "Vita", "In quale anno pubblica i Canti orfici e con quale modalita?",
      ["1910, tramite un grande editore milanese", "1914, a proprie spese", "1918, postumi", "1906, sulla rivista La Voce"],
      1, "I Canti orfici vengono pubblicati nel 1914 a proprie spese in 500 copie, dopo che il primo manoscritto era andato perduto."),

    mc("ca07", "Vita", "Con quale scrittrice Campana ebbe una relazione tormentata tra il 1916 e il 1917?",
      ["Ada Negri", "Grazia Deledda", "Sibilla Aleramo", "Matilde Serao"],
      2, "Tra il 1916 e il 1917 Campana ha una relazione intensa e tormentata con la scrittrice Sibilla Aleramo. Il loro carteggio e' uno dei piu intensi della letteratura italiana del Novecento."),

    mc("ca08", "Vita", "In quale ospedale psichiatrico fu internato Campana nel 1918?",
      ["Santa Maria della Pieta a Roma", "San Lazzaro di Reggio Emilia", "Castel Pulci, presso Firenze", "Mombello di Milano"],
      2, "Nel 1918 Campana viene internato nell'ospedale psichiatrico di Castel Pulci, vicino a Firenze, dove rimarra fino alla morte nel 1932."),

    tf("ca09", "Vita", "Campana conosceva il francese, il tedesco, l'inglese e lo spagnolo pur senza mai averli studiati formalmente.",
      true, "Vero. Campana e' un autodidatta straordinario: legge Baudelaire e Rimbaud in francese, Nietzsche in tedesco, Whitman in inglese, senza percorsi formali di studio delle lingue."),

    tf("ca10", "Vita", "Il manoscritto originale de Il piu lungo giorno e' andato definitivamente perduto.",
      false, "Falso. Nel 1971, quasi sessant'anni dopo la scomparsa, il manoscritto viene ritrovato negli archivi di Soffici, permettendo il confronto con i Canti orfici pubblicati."),

    /* ── POETICA ── */
    mc("ca11", "Poetica", "Cosa significa che la poesia di Campana e' «orfica»?",
      ["Usa la scala musicale dorica", "E' poesia come discesa agli Inferi, rivelazione, parola magica e misteriosa", "Imita la poesia greca antica", "E' ispirata al canto liturgico"],
      1, "La concezione orfica riprende il mito di Orfeo: il poeta scende nelle zone oscure del reale per riportarne una verita' intraducibile in linguaggio razionale. La poesia non comunica: rivela."),

    mc("ca12", "Poetica", "Quali autori francesi lesse Campana direttamente in lingua originale?",
      ["Hugo e Zola", "Flaubert e Maupassant", "Baudelaire e Rimbaud", "Verlaine e Mallarme"],
      2, "Campana legge Baudelaire e Rimbaud in francese, non attraverso traduzioni o mediazioni italiane. E' l'unico poeta italiano del primo Novecento a fare questo uso strutturale del Simbolismo francese."),

    mc("ca13", "Poetica", "La 'musicalita ossessiva' dei Canti orfici si basa su:",
      ["Rime baciate perfette e metro regolare", "Uso sistematico della ripetizione e della reiterazione di parole e immagini", "Citazioni di melodie musicali classiche", "Alternanza di rime e assonanze"],
      1, "La musicalita ossessiva e' costruita sulla ripetizione: la stessa immagine o le stesse parole ritornano variate fino a diventare un'incantazione. Non cerca armonia: costruisce ossessione."),

    mc("ca14", "Poetica", "Cosa distingue la lettura di Nietzsche in Campana da quella in D'Annunzio?",
      ["D'Annunzio non ha mai letto Nietzsche; Campana si", "D'Annunzio costruisce il superuomo mondano-estetizzante; Campana legge Nietzsche come sfida esistenziale abissale", "Entrambi hanno la stessa interpretazione", "Campana rifiuta Nietzsche; D'Annunzio lo accetta"],
      1, "D'Annunzio usa Nietzsche per costruire il personaggio del superuomo trionfante e mondano. Campana lo legge direttamente in tedesco come sfida esistenziale, senza filtri estetizzanti."),

    mc("ca15", "Poetica", "Quale poeta americano influenza il verso lungo di Campana?",
      ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Henry Wadsworth Longfellow"],
      2, "Whitman, letto in inglese da Campana, e' all'origine del verso lungo, catalogante, aperto all'esperienza totale del mondo — in netto contrasto con il frammento breve degli altri vociani."),

    mc("ca16", "Poetica", "Come si chiama la tecnica di montaggio visivo dei Canti orfici?",
      ["Impressionismo letterario", "Cinematografia sentimentale", "Flusso di coscienza", "Prosa d'arte"],
      1, "La 'cinematografia sentimentale' e' il montaggio ardito di immagini e temporalita' non lineare: le scene si sovrappongono, si interrompono, riprendono da punti imprevedibili — come in un sogno."),

    open("ca17", "Poetica", "Spiega perche Campana e' considerato un 'outsider inclassificabile' rispetto alla sua epoca.",
      "Campana gravita nell'orbita de La Voce ma non vi appartiene: i vociani preferiscono il frammento breve e la prosa d'arte; lui scrive un poema visionario e lungo. Non appartiene al Simbolismo, all'Espressionismo, al Futurismo, alla Scapigliatura. Legge le sue fonti in lingua originale senza mediazioni italiane. E' geneticamente singolo, senza scuola.",
      ["outsider", "La Voce", "inclassificabile", "poema visionario", "lingua originale"]),

    /* ── CANTI ORFICI ── */
    mc("ca18", "Opere", "Cosa e' il 'prosimetro'?",
      ["Un tipo di sonetto allungato", "Un genere che alterna prosa lirica e versi", "Un romanzo in versi liberi", "Un componimento teatrale in versi"],
      1, "Il prosimetro alterna prosa e versi. I Canti orfici sono un prosimetro: prosa lirica e versi si intrecciano in un flusso continuo dove le distinzioni di genere si dissolvono."),

    mc("ca19", "Opere", "Qual e' il sottotitolo in tedesco dei Canti orfici e cosa significa?",
      ["'La tragedia tedesca in Italia' — critica alla cultura italiana", "'Die Tragodie des letzten Germanen in Italien' — 'La tragedia dell'ultimo Germano in Italia', ideale di purezza morale", "'I canti dei Germani' — riferimento alla tradizione nordica", "'Musica e poesia' — dialogo tra le arti"],
      1, "Il sottotitolo tedesco Die Tragodie des letzten Germanen in Italien ('La tragedia dell'ultimo Germano in Italia') non e' una rivendicazione etnica: e' un ideale di purezza morale e spirituale contro la corruzione del presente italiano."),

    mc("ca20", "Opere", "In quante sezioni sono divisi i Canti orfici?",
      ["Due (poesie e prose)", "Tre (Notte, Giorno, Alba)", "Quattro (La Notte, Notturni, La Verna, Varie e frammenti)", "Cinque"],
      2, "I Canti orfici sono divisi in quattro sezioni: La Notte, Notturni, La Verna, Varie e frammenti. Ognuna ha un tono e un registro diverso ma tutte convergono nella matrice orfica."),

    mc("ca21", "Opere", "Cosa rappresenta la sezione La Verna nei Canti orfici?",
      ["Le poesie scritte durante il ricovero psichiatrico", "Il pellegrinaggio spirituale al santuario francescano di La Verna (Arezzo)", "La descrizione del viaggio in America del Sud", "Le poesie giovanili scritte a Marradi"],
      1, "La Verna e' il santuario francescano in Casentino (Arezzo) dove san Francesco ricevette le stimmate. Il pellegrinaggio di Campana e' allo stesso tempo fisico e spirituale: il viaggio come ascesi."),

    tf("ca22", "Opere", "I Canti orfici, nonostante l'apparenza frammentaria, sono un poema unitario retto da corrispondenze interne.",
      true, "Vero. L'apparente frammentarieta' e' ingannevole. Le quattro sezioni formano un percorso coerente retto da corrispondenze interne e dalla matrice orfica che attraversa tutta l'opera."),

    tf("ca23", "Opere", "I Canti orfici ebbero un grande successo di pubblico alla loro pubblicazione nel 1914.",
      false, "Falso. I Canti orfici (1914, 500 copie a spese dell'autore) ebbero scarso riscontro immediato. Il riconoscimento di Campana e' postumo."),

    /* ── L'INVETRIATA ── */
    mc("ca24", "Testi", "In quale sezione dei Canti orfici si trova L'invetriata?",
      ["La Notte", "Notturni", "La Verna", "Varie e frammenti"],
      3, "L'invetriata si trova nella sezione Varie e frammenti, l'ultima dei Canti orfici, che raccoglie testi di diverso registro."),

    mc("ca25", "Testi", "Cosa rappresenta la 'piaga rossa languente' ne L'invetriata?",
      ["Una ferita fisica del poeta", "Il tramonto rosso della sera estiva", "La condizione esistenziale di scissione e sofferenza — si estende dal cuore del poeta al cuore della sera stessa", "Un elemento decorativo del paesaggio notturno"],
      2, "La piaga rossa languente e' il simbolo centrale della lirica: ripetuta ai vv. 7 e 11, rappresenta il dolore esistenziale del poeta che si estende fino a invadere la sera stessa. E' il colore rosso del simbolismo cromatico campaniano."),

    mc("ca26", "Testi", "Cosa indica la 'Madonnina del Ponte' ne L'invetriata?",
      ["Una statua barocca di Roma", "Una cappella votiva sul fiume Lamone, vicino a Marradi", "Un affresco nella cattedrale di Firenze", "Un soprannome della donna amata"],
      1, "La Madonnina del Ponte e' una cappella votiva sul fiume Lamone nei pressi di Marradi (paese natale di Campana). E' uno dei rarissimi riferimenti geografici concreti nella sua poesia."),

    mc("ca27", "Testi", "Quale figura retorica e' presente in 'Le stelle sono bottoni di madreperla e la sera si veste di velluto'?",
      ["Metafora e personificazione della sera", "Similitudine e anastrofe", "Iperbole e anafora", "Metonimia e chiasmo"],
      0, "Il verso contiene una metafora (stelle = bottoni di madreperla) e una personificazione (la sera si veste di velluto). La sera e' trattata come una figura mondana e frivola."),

    mc("ca28", "Testi", "Quali sono i tre momenti temporali de L'invetriata?",
      ["Mattino, mezzogiorno, pomeriggio", "Tramonto (vv. 1-3), sera (vv. 4-9), notte (vv. 10-11)", "Passato, presente, futuro", "Infanzia, giovinezza, vecchiaia"],
      1, "La struttura temporale e' precisa: tramonto (le luci filtrano dall'invetriata, vv. 1-3), sera (la stanza con l'odore di putredine, vv. 4-9), notte (la piaga nel cuore della sera, vv. 10-11)."),

    open("ca29", "Testi", "Analizza la funzione della ripetizione ossessiva ne L'invetriata con almeno due esempi.",
      "La ripetizione costruisce ossessione e allucinazione, non musicalita' armoniosa. Esempio 1: 'piaga rossa languente' ripetuta ai vv. 7 e 11 — il dolore non si conclude ma si espande, invadendo prima la stanza poi il cuore della sera. Esempio 2: 'c'e / c'e / c'e' ripetuto tre volte — la presenza minacciosa si intensifica progressivamente. Esempio 3: 'fatua / fatua' e 'tremola / tremola' in un solo verso.",
      ["ripetizione", "piaga rossa languente", "ossessione", "allucinazione", "tre volte"]),

    /* ── CONFRONTI ── */
    mc("ca30", "Confronti", "In cosa differisce Campana da Pascoli nell'uso del paesaggio toscano?",
      ["Pascoli descrive il paesaggio realisticamente; Campana lo ignora", "Pascoli usa il paesaggio come luogo affettivo del nido; Campana lo trasfigura in visione visionaria del vagabondo sradicato", "Entrambi usano il paesaggio allo stesso modo", "Campana usa il paesaggio umbro; Pascoli quello toscano"],
      1, "Pascoli cerca il nido e la protezione nel paesaggio romagnolo; Campana fugge da Marradi e lo trasfigura. Il paesaggio e' intimita' in Pascoli, materia prima per la visione in Campana."),

    mc("ca31", "Confronti", "Come si differenzia l'uso della parola poetica in Campana rispetto a Ungaretti?",
      ["Campana usa rime, Ungaretti no", "Campana ha visione prolungata e ossessiva con verso lungo; Ungaretti ha l'illuminazione istantanea con il verso-parola brevissimo", "Non c'e' differenza rilevante", "Campana scrive in prosa; Ungaretti in versi"],
      1, "Campana (1914) precede Ungaretti (L'Allegria, 1919). Entrambi usano la parola come rivelazione. Ma Campana ha visione prolungata con verso lungo whitmaniano; Ungaretti ha il lampo istantaneo e il silenzio bianco."),

    tf("ca32", "Confronti", "Campana influenzera' Ungaretti e gli Ermetici nonostante il limitato successo contemporaneo dei Canti orfici.",
      true, "Vero. L'influenza di Campana su Ungaretti e sugli Ermetici (Quasimodo, Luzi, Gatto) e' riconosciuta dalla critica: la parola come rivelazione opaca, non comunicazione, e' un'eredita' campaniana."),

    mc("ca33", "Confronti", "Montale definisce la poesia di Campana…",
      ["'Poesia rigorosa e classica'", "'Poesia in fuga, che si disfa sempre sul punto di concludere'", "'Poesia politica e impegnata'", "'Poesia popolare e comprensibile'"],
      1, "La celebre definizione di Montale e' 'poesia in fuga, che si disfa sempre sul punto di concludere': la poesia di Campana sfugge alla conclusione, si autodistrugge nel momento in cui sembra realizzarsi."),

    /* ── MISTO ── */
    mc("ca34", "Misto", "Quale patologia fu diagnosticata a Campana durante l'internamento?",
      ["Epilessia", "Depressione cronica", "Schizofrenia", "Paranoia"],
      2, "A Campana fu diagnosticata la schizofrenia. Ma la sua condizione non esaurisce chi e' come intellettuale: e' un uomo coltissimo, poliglotta, capace di scrittura lucidissima anche durante il ricovero."),

    open("ca35", "Misto", "Perche i Canti orfici (1914) segnano un punto di non ritorno nella lirica italiana del primo Novecento?",
      "I Canti orfici sono l'unica opera di pura visionarieta' orfica nella tradizione italiana. Campana fonde Simbolismo francese (non mediato) ed Espressionismo, usa il prosimetro con una tensione unitaria inedita, sviluppa il verso lungo di respiro whitmaniano contro la tendenza al frammento breve. Nessun poeta italiano del suo tempo ha questa sintesi. Influenzera' Ungaretti e gli Ermetici.",
      ["visionarieta'", "orfica", "Simbolismo", "prosimetro", "Ungaretti", "Ermetici"]),

    /* ── VITA (aggiuntive) ── */
    mc("ca36", "Vita", "In quale paese del Sud America si reco' Campana durante i suoi viaggi giovanili?",
      ["Brasile", "Argentina", "Cile", "Uruguay"],
      1, "Campana si imbarca clandestinamente per l'Argentina, dove lavora come guardiano di notte e operaio. Questo viaggio, come quelli in Francia, Belgio e America del Nord, appartiene alla sua biografia erratica di vagabondo intellettuale."),

    mc("ca37", "Vita", "In quale anno fu ritrovato il manoscritto originale de 'Il piu lungo giorno', creduto perduto?",
      ["1945", "1958", "1971", "1985"],
      2, "Nel 1971, quasi sessant'anni dopo la consegna a Soffici, il manoscritto viene ritrovato negli archivi dello scrittore toscano. Il confronto con i Canti orfici pubblicati rivela varianti significative e la laboriosita' del lavoro di riscrittura di Campana."),

    tf("ca38", "Vita", "Campana mori nell'ospedale psichiatrico di Castel Pulci nel 1932, dopo quattordici anni di internamento.",
      true, "Vero. Campana viene internato nel 1918 e muore il 1 marzo 1932, dopo quattordici anni trascorsi a Castel Pulci. Durante il ricovero scrive ancora: alcune lettere e riflessioni dimostrano una lucidita' che smentisce la diagnosi di schizofrenia come condizione totale."),

    /* ── POETICA (aggiuntive) ── */
    mc("ca39", "Poetica", "Quale colore domina il simbolismo cromatico dei Canti orfici e cosa rappresenta?",
      ["Il blu, che rappresenta il cielo e la purezza", "Il bianco, che rappresenta l'innocenza e la morte", "Il rosso, che rappresenta la passione, la ferita esistenziale e la visione", "Il verde, che rappresenta la natura e la speranza"],
      2, "Il rosso e' il colore dominante dei Canti orfici: 'piaga rossa languente', i tramonti infuocati, il sangue. Rappresenta insieme la passione bruciante, la ferita esistenziale, l'intensita' della visione. Gli altri colori ricorrenti sono il viola (crepuscolare) e l'oro (della luce meridiana)."),

    mc("ca40", "Poetica", "Come viene rappresentata la figura femminile nella poetica di Campana?",
      ["Come madre protettiva e rassicurante sul modello pascoliano", "Come donna-angelo stilnovistica e spiritualizzata", "Come figura ambivalente tra la femme fatale che brucia e distrugge e la Chimera irraggiungibile che salva", "Come compagna quotidiana e domestica"],
      2, "La figura femminile in Campana oscilla tra due poli: la donna fatale che trascina nell'abisso (la Lena de La Notte, le figure orfiche perdute) e la Chimera irraggiungibile, creatura luminosa e impossibile, unica possibilita' di salvezza. Sibilla Aleramo appartiene al primo polo."),

    mc("ca41", "Poetica", "Perche' si dice che Campana legga le fonti simboliste 'senza mediazioni italiane'?",
      ["Perche' rifiuta esplicitamente la poesia italiana", "Perche' legge Baudelaire e Rimbaud direttamente in francese, non attraverso le traduzioni o interpretazioni degli altri vociani", "Perche' vive all'estero durante la sua formazione", "Perche' non ha mai letto Pascoli e D'Annunzio"],
      1, "Campana e' l'unico poeta del suo tempo che legge Baudelaire, Rimbaud, Mallarme' in lingua originale. Gli altri autori italiani — compresi Pascoli e D'Annunzio — ricevono il Simbolismo francese in modo filtrato e mediato. Campana lo assume direttamente, senza filtri nazionali."),

    /* ── OPERE (aggiuntive) ── */
    mc("ca42", "Opere", "Qual e' il contenuto della sezione 'La Notte', la prima dei Canti orfici?",
      ["Le poesie di tema politico e sociale", "Un lungo viaggio notturno tra Marradi e Faenza che diventa discesa agli Inferi, allucinazione e rivelazione", "Le prose descrittive dei paesaggi toscani", "Le poesie d'amore dedicate a Sibilla Aleramo"],
      1, "La Notte e' il pezzo piu' lungo e centrale dei Canti orfici: un resoconto in prosimetro di un viaggio notturno che si trasforma in discesa orfea agli Inferi. Il paesaggio reale (la strada tra Marradi e Faenza) diventa teatro di visioni e allucinazioni."),

    tf("ca43", "Opere", "Il titolo 'Canti orfici' allude al mito di Orfeo che scende nell'Ade per riportare Euridice alla luce.",
      true, "Vero. Il mito di Orfeo e' la metafora strutturale dell'intera raccolta: il poeta scende nelle zone oscure del reale (la notte, la malattia, il viaggio) per riportarne una verita'. Come Orfeo, rischia di perdere tutto al momento della risalita. La 'tradizione orfica' include anche i riti misterici dell'Orfismo antico."),

    mc("ca44", "Opere", "Cosa si intende per 'prosa lirica' in Campana?",
      ["Una poesia scritta senza punteggiatura", "Un testo in prosa che usa strutture ritmiche, immagini e densita' della poesia pur senza rispettare il verso", "Un romanzo in versi", "Una commistione di dialetto e italiano"],
      1, "La prosa lirica e' il genere ibrido che Campana usa nei Canti orfici: testi in prosa che hanno il ritmo interno, la densita' metaforica e la concentrazione emotiva della poesia. E' diversa sia dalla prosa narrativa tradizionale che dal verso libero: e' una terza via che i Vociani sviluppano e Campana porta all'estremo."),

    /* ── TESTI (aggiuntive) ── */
    mc("ca45", "Testi", "Chi e' 'La Chimera' nella lirica omonima dei Canti orfici?",
      ["Un mostro della mitologia greca usato come allegoria della guerra", "Una figura femminile irraggiungibile e luminosa, simbolo della bellezza impossibile e dell'ideale poetico", "La citta' di Firenze personificata", "La madre del poeta"],
      1, "La Chimera e' la figura femminile assoluta di Campana: non una donna reale ma un ideale luminoso e irraggiungibile. La 'bianca', la 'splendente', appare e scompare. E' al tempo stesso ispiratrice poetica e promessa di salvezza — l'opposto della donna fatale che brucia. L'ultima strofa della lirica e' tra i passi piu' memorabili della poesia italiana del Novecento."),

    mc("ca46", "Testi", "Come viene descritta Genova nei Canti orfici?",
      ["Come citta' industriale e grigia, simbolo della modernita' capitalistica", "Come 'la regina' dai 'palazzi di pietra e d'ardesia' che domina il mare: metropoli visionaria e femminile", "Come luogo di esilio e malinconia simile a Trieste per Saba", "Come sfondo indifferente dei viaggi del poeta"],
      1, "In Campana Genova e' la citta' per eccellenza: 'la superba', potente e visiva. La prosa su Genova e' uno dei momenti piu' alti dei Canti orfici: il porto, le navi, i vicoli, i palazzi di ardesia formano un affresco urbano visionario dove la citta' e' trattata come una figura femminile e regale."),

    /* ── CONFRONTI (aggiuntive) ── */
    mc("ca47", "Confronti", "Qual e' la differenza fondamentale tra Campana e D'Annunzio nel rapporto con la figura femminile?",
      ["D'Annunzio ignora la figura femminile; Campana la mette al centro", "D'Annunzio usa la donna come parte del trionfo del superuomo estetizzante; Campana la vive come abisso esistenziale, ossessione e impossibilita'", "Entrambi hanno la stessa concezione della donna", "Campana ignora la figura femminile; D'Annunzio no"],
      1, "In D'Annunzio la donna e' estetizzata, controllata, parte del trionfo sensoriale del superuomo. In Campana la donna (la Chimera, la donna fatale, Sibilla) e' qualcosa che il poeta non domina: lo travolge, lo brucia, gli sfugge. E' la differenza tra estetismo trionfante e esperienza esistenziale abissale."),

    tf("ca48", "Confronti", "Campana fu vicino al Futurismo e partecipo' alle serate futuriste di Marinetti.",
      false, "Falso. Campana non aderisce al Futurismo. Il Futurismo celebra la macchina, la velocita', il futuro; Campana e' radicato nel mito, nell'orfismo, nel paesaggio appenninico, nella tradizione simbolista. Sono mondi inconciliabili. Campana rimane sempre un solitario, inclassificabile in qualunque corrente."),

    /* ── MISTO (aggiuntive) ── */
    mc("ca49", "Misto", "Cosa rende straordinario il carteggio tra Campana e Sibilla Aleramo (1916-1917)?",
      ["E' scritto interamente in versi liberi", "E' uno dei carteggi piu' intensi della letteratura italiana: due vite marginali e tormentate che si cercano e si distruggono a vicenda attraverso lettere di straordinaria potenza espressiva", "E' la principale fonte biografica sulla famiglia di Campana", "E' scritto in parte in francese"],
      1, "Il carteggio Campana-Aleramo (pubblicato postumo nel 1958) e' un documento letterario e umano eccezionale: due artisti ai margini — lei scrittrice e femminista, lui poeta vagabondo e malato — si amano e si tormentano con una verita' bruciante. Le lettere di Campana sono tra i testi piu' intensi della prosa italiana del Novecento."),

    mc("ca50", "Misto", "Quale critico letterario contribui' decisivamente alla riscoperta di Campana nel secondo dopoguerra?",
      ["Benedetto Croce, che lo cito' nell'Estetica", "Carlo Bo, che lo associo' all'Ermetismo", "Enrico Falqui, che curo' le sue opere e ne studio' i manoscritti", "Luigi Russo, che pubblico' la prima monografia"],
      2, "Enrico Falqui e' il critico che, a partire dagli anni '40-'50, cura sistematicamente i testi di Campana, ne raccoglie le varianti, pubblica le lettere e avvia la riscoperta critica. Senza il suo lavoro filologico, Campana sarebbe rimasto molto piu' a lungo nell'ombra.")

  ];
})();
