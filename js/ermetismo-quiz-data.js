/* =========================================================================
   ermetismo-quiz-data.js — Banca domande: L'Ermetismo
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
  window.QUIZ_DATA.ermetismo = [

    mc("er01","Origini","Chi conia il termine 'ermetica' per descrivere questa poesia e in quale anno?",
      ["Carlo Bo, 1938","Francesco Flora, 1936","Giuseppe De Robertis, 1920","Salvatore Quasimodo, 1942"],
      1,"Francesco Flora pubblica il saggio La poesia ermetica nel 1936, coniando il termine come critica: questa poesia e incomprensibile come i testi ermetici dell'alchimia. Il nome viene poi rivendicato dai poeti stessi."),

    mc("er02","Origini","Da dove deriva il termine 'ermetico' applicato alla poesia?",
      ["Dal nome del poeta Ermete Trismegisto","Da Ermes/Mercurio, dio della comunicazione","Da Ermete Trismegisto, figura mistica custode dei segreti: la poesia e oscura come i testi esoterici dell'alchimia","Da un editore fiorentino di nome Ermete"],
      2,"'Ermetico' deriva da Ermete Trismegisto, la figura mitica della tradizione esoterica che custodisce i segreti del mondo. Nell'uso comune 'ermetico' significa 'incomprensibile' — e come critica che Flora usa il termine. I poeti lo rivendicano con orgoglio."),

    mc("er03","Origini","Quale saggio di Carlo Bo (1938) e il manifesto teorico dell'Ermetismo fiorentino?",
      ["La parola assoluta","Letteratura come vita","La poesia pura","Il frammento come forma"],
      1,"Letteratura come vita (1938) di Carlo Bo sulla rivista Campo di Marte: 'La letteratura e vita, cioè partecipazione assoluta, adesione piena all'esistenza.' La poesia non e esercizio formale ne trasmissione di messaggi: e esperienza esistenziale totale."),

    mc("er04","Origini","Intorno a quale citta e a quale rivista si sviluppa l'Ermetismo italiano?",
      ["Roma, La Ronda","Milano, Il Politecnico","Firenze, Solaria (poi Campo di Marte)","Trieste, La Voce"],
      2,"L'Ermetismo si sviluppa intorno a Firenze e alle riviste Solaria (poi Letteratura, poi Campo di Marte). E un movimento di prevalenza toscana — Luzi, Gatto, Bo sono fiorentini — sebbene i suoi riferimenti principali (Ungaretti, Quasimodo) vengano da altre regioni."),

    mc("er05","Origini","In quale contesto storico-politico si sviluppa l'Ermetismo?",
      ["Negli anni del boom economico postbellico","Durante il fascismo: la poesia oscura e anche una forma di resistenza silenziosa al regime","Nel periodo della Grande Guerra","Negli anni della Resistenza partigiana"],
      1,"L'Ermetismo nasce durante il fascismo (anni '20-'40). L'oscurita come valore non e solo estetica: ha anche una funzione protettiva. Non si puo censurare cio che non si capisce. La poesia ermetica si ritira nell'interiorita come risposta implicita alla violenza della storia."),

    mc("er06","Poetica","Cosa significa 'parola assoluta' nella poetica ermetica?",
      ["Una parola usata nel suo significato letterale","Una parola scelta per la massima densita semantica, usata come cosa non come segno, senza parole di raccordo","Una parola rara tratta dal vocabolario letterario antico","Una parola che ha un solo significato possibile"],
      1,"La parola assoluta: ogni parola e scelta per la massima densita di significato. Non ci sono parole di riempimento, congiunzioni inutili, aggettivi decorativi. La parola ermetica non designa: evoca. Non e segno che rimanda a un referente: e cosa in se — 'parola come cosa, non come segno' (Devoto)."),

    mc("er07","Poetica","Cosa e l'illuminazione nella poetica ermetica?",
      ["Un'immagine visiva elaborata nella mente del poeta","Il momento poetico in cui una parola o un'immagine rivelano improvvisamente il senso nascosto di un'esperienza: istantaneo come un lampo","Una visione religiosa di tipo mistico","Una tecnica tipografica che usa le maiuscole"],
      1,"L'illuminazione: non si costruisce un ragionamento, non si narra una storia. Si cattura un attimo di rivelazione improvvisa — come un lampo che illumina e poi scompare nel buio. Ungaretti costruisce tutta la sua poetica su questo principio: 'M'illumino / d'immenso' — due parole che contengono un universo."),

    mc("er08","Poetica","Cosa e l'analogia 'assoluta' nella poetica ermetica?",
      ["Una similitudine con il termine 'come' esplicito","Un accostamento di immagini lontanissime senza termini di paragone espliciti, che produce rivelazioni improvvise","Una figura retorica simile alla metafora","Un tipo di allegoria"],
      1,"L'analogia assoluta: accostamento di immagini lontanissime senza il termine di paragone esplicito. Ungaretti, Soldati: 'Si sta / come d'autunno / sugli alberi / le foglie' — quattro versi che contengono tutta la guerra attraverso un'immagine autunnale. La distanza tra i termini e talmente grande che il lettore deve fare un salto intuitivo."),

    mc("er09","Poetica","Cosa e il 'correlativo oggettivo' usato dagli ermetici (da T.S. Eliot)?",
      ["Un oggetto che il poeta possiede fisicamente","Un oggetto o una situazione concreta che evoca indirettamente uno stato emotivo senza nominar­lo","Un tipo di metafora visiva","La tecnica di descrivere oggetti in modo neutro"],
      1,"Il correlativo oggettivo (T.S. Eliot, ripreso da Montale): un oggetto o situazione concreta evoca indirettamente uno stato emotivo senza dichiararlo. Montale: il limone, la trottola, la muraglia marina non descrivono emozioni — le incarnano. Il lettore sente l'emozione attraverso l'oggetto, non attraverso la sua dichiarazione."),

    mc("er10","Poetica","Perche l'Ermetismo valorizza l'oscurita?",
      ["Per escludere i lettori non colti","Il lettore deve partecipare attivamente: il senso non e dato ma va conquistato; se tutto fosse chiaro la poesia sarebbe banale; l'oscurita e misura della profondita dell'esperienza","Per imitare i testi alchemici medievali","Per ragioni di censura politica"],
      1,"L'oscurita ermetica e consapevole e valorizzata: il senso non e dato ma va conquistato attraverso la rilettura e la riflessione. Se tutto fosse chiaro, la poesia sarebbe superficiale. L'oscurita misura la profondita dell'esperienza che la poesia vuole trasmettere — come i miti antichi che non si spiegano ma si vivono."),

    mc("er11","Poetica","Il bianco della pagina in Ungaretti ha quale funzione?",
      ["Un errore tipografico nei manoscritti originali","Spazio vuoto senza significato","Silenzio significante che amplifica le parole: ogni pausa e carica di senso e cambia il ritmo della lettura","Una scelta estetica del tipografo"],
      2,"Il bianco della pagina in Ungaretti non e vuoto: e silenzio. Ogni verso separato dal bianco risuona nel silenzio che lo segue — come una nota musicale che risuona dopo che la si e suonata. Il bianco e parte del testo: modifica il senso delle parole, rallenta il ritmo, amplifica ogni parola."),

    mc("er12","Poetica","Cosa significa 'letteratura come vita' secondo Carlo Bo?",
      ["La letteratura deve descrivere la vita quotidiana in modo realistico","La letteratura non e tecnica ma esperienza esistenziale totale: il poeta non scrive, vive; ogni parola vera e un atto esistenziale","La letteratura deve avere una funzione pratica nella vita delle persone","La letteratura e la vita del poeta trasformata in romanzo"],
      1,"'Letteratura come vita' di Bo: la poesia non e esercizio formale ne comunicazione di messaggi. E vita — partecipazione assoluta, adesione piena all'esistenza. Il poeta non scrive: vive con la massima intensita. Ogni parola vera e un atto esistenziale, non un atto linguistico."),

    mc("er13","Opere","Quale raccolta di Ungaretti (1931, gia Il porto sepolto 1916) e il testo fondatore dell'Ermetismo?",
      ["Sentimento del tempo","Il dolore","L'allegria (gia Il porto sepolto)","La terra promessa"],
      2,"L'allegria (1931) — prima pubblicata come Il porto sepolto (1916) — e il testo fondatore dell'Ermetismo. Liriche brevissime scritte nelle trincee del Carso: la parola nuda, il verso di una o due parole, il bianco della pagina come silenzio significante."),

    mc("er14","Opere","In quale raccolta Quasimodo pubblica la famosa lirica 'Ed e subito sera'?",
      ["Acque e terre","Oboe sommerso","Ed e subito sera (1942)","La vita non e sogno"],
      2,"La lirica 'Ed e subito sera' da' il titolo alla raccolta del 1942, considerata il momento piu alto della produzione ermetica di Quasimodo. Tre versi: 'Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed e subito sera.'"),

    mc("er15","Opere","Quale e la prima raccolta di Mario Luzi, il poeta ermetico piu longevo del Novecento?",
      ["Quaderno gotico","La barca (1935)","Un brindisi","Primizie del deserto"],
      1,"La barca (1935) e la prima raccolta di Mario Luzi. Lirica contemplativa, ricerca del senso, oscurita necessaria. Luzi continua a scrivere fino alla morte nel 2005 — attraversa tutto il Novecento italiano mantenendo una continuita con l'orizzonte ermetico."),

    mc("er16","Opere","Montale e considerato un punto di riferimento per gli ermetici pur non essendo ermetista. Perche?",
      ["Perche abita a Firenze come gli ermetici","Perche la sua poetica (correlativo oggettivo, oscurita non programmatica, essenzialita) anticipa e influenza l'Ermetismo pur mantenendo una posizione autonoma","Perche e stato il direttore della rivista Campo di Marte","Perche ha scritto il manifesto dell'Ermetismo"],
      1,"Montale rifiuta l'etichetta 'ermetico' ma e il punto di riferimento della generazione ermetica. Ossi di seppia (1925) anticipa l'Ermetismo: correlativo oggettivo, essenzialita, oscurita non programmatica, il 'male di vivere'. La sua autonomia intellettuale e la sua grandezza poetica ne fanno il maestro implicito del movimento."),

    mc("er17","Confronti","Come si differenzia l'Ermetismo dalla Linea Antinovecentista (Saba)?",
      ["Non c'e differenza: entrambi rifiutano il Futurismo","L'Ermetismo privilegia l'oscurita come valore e la parola assoluta; la Linea Antinovecentista privilegia la chiarezza e la comunicazione diretta. Il dibattito fondamentale della poesia italiana del Novecento","La Linea Antinovecentista e piu oscura dell'Ermetismo","Saba appartiene all'Ermetismo fiorentino"],
      1,"Il dibattito fondamentale: Ermetismo vs Linea Antinovecentista. Saba definisce la propria poesia come 'onesta' — in polemica implicita con l'oscurita ermetica. Entrambi cercano la verita poetica, ma l'uno attraverso il mistero (oscurita come valore), l'altro attraverso la chiarezza (comunicazione diretta)."),

    mc("er18","Confronti","Come si differenzia l'Ermetismo dal Simbolismo francese?",
      ["Sono identici","L'Ermetismo italiano e piu secco e essenziale del Simbolismo francese: ha attraversato la guerra (Ungaretti) e il fascismo, che hanno cambiato il senso di scrivere. Meno musicale, piu nudo","Il Simbolismo e piu essenziale dell'Ermetismo","L'Ermetismo rifiuta il Simbolismo"],
      1,"L'Ermetismo e il figlio italiano del Simbolismo: stessa oscurita come valore, stessa parola densa. Ma l'Ermetismo e piu secco e meno musicale — ha attraversato la guerra di trincea (Ungaretti scrive nelle trincee del Carso) e il fascismo. Il contesto storico ha eliminato ogni ornamento: resta solo l'essenziale."),

    mc("er19","Testi","Analizza 'Soldati' di Ungaretti: cosa rappresenta l'immagine delle 'foglie d'autunno'?",
      ["La bellezza della stagione autunnale","La caducita dei soldati in guerra: come le foglie restano sull'albero per poco prima di cadere, cosi i soldati restano vivi per poco","Il colore delle uniformi militari","La nostalgia per la vita civile"],
      1,"'Si sta / come d'autunno / sugli alberi / le foglie': le foglie d'autunno sono gia pronte a cadere — la loro permanenza e precaria. I soldati sono come le foglie: appesi alla vita con la stessa fragilita con cui la foglia e appesa al ramo in autunno. L'analogia dice tutto sulla precarita della vita in guerra senza descriverla."),

    mc("er20","Testi","'Ed e subito sera' di Quasimodo e composta di quanti versi?",
      ["Sette","Cinque","Tre","Uno"],
      2,"'Ed e subito sera' e composta di tre versi: 'Ognuno sta solo sul cuor della terra / trafitto da un raggio di sole: / ed e subito sera.' E uno dei testi piu brevi della poesia italiana — e uno dei piu densi. Tre versi che contengono tutta la condizione umana: solitudine, vita come istante, morte improvvisa."),

    mc("er21","Testi","Cosa significa 'ed e subito sera' in chiave ermetica?",
      ["La descrizione di un tramonto primaverile","La vita umana e breve come un raggio di sole in una giornata: subito e sera — la morte arriva improvvisa. La sera e anche la vecchiaia, la fine della giovinezza, la morte","Una formula poetica senza significato specifico","Il riferimento alla sera del Venerdì Santo"],
      1,"'Ed e subito sera': la 'sera' e la morte — ma anche la fine di qualunque intensita. Visto sub specie aeternitatis, la vita umana e un raggio di sole in un giorno cosmico: breve, intenso, e poi buio. L'analogia temporale (il giorno = la vita) concentra un'intera filosofia in tre versi."),

    mc("er22","Testi","La poesia 'Mattina' di Ungaretti ('M'illumino / d'immenso') ha quante parole?",
      ["Due","Tre","Quattro","Sei"],
      0,"'Mattina' consiste in due sole parole: 'M'illumino' e 'd'immenso'. Piu la didascalia 'Mattina'. E forse il testo piu estremo dell'Ermetismo: la massima densita di significato nella minima quantita di parole. Ogni parola porta un universo."),

    mc("er23","Testi","Cosa significa 'M'illumino d'immenso' di Ungaretti?",
      ["Il sole del mattino illumina il paesaggio","Il poeta riceve la luce del sole al risveglio","La luce del mattino provoca un'illuminazione — una rivelazione improvvisa dell'immenso (il tutto, l'infinito, il senso) attraverso una semplice percezione sensoriale","Il poeta si accende una lampada al buio"],
      2,"'M'illumino d'immenso': la luce del mattino produce un'illuminazione nel senso ermetico — una rivelazione improvvisa del senso nascosto, dell'immenso che si nasconde nel semplice atto di vedere il sole. L'esperienza sensoriale (la luce) diventa rivelazione esistenziale (l'immenso). Tutto in due parole."),

    mc("er24","Glossario","Cosa e la 'poesia pura' nell'ideale ermetico?",
      ["Una poesia senza contenuto politico o sociale","Una poesia liberata da ogni elemento narrativo, descrittivo o retorico: solo la parola che rivela, senza ornamento, senza commento","Una poesia religiosa","Una poesia scritta in forma metrica classica"],
      1,"La poesia pura (eredita mallarmeana, teorizzata da Bo): libera la poesia da qualunque elemento decorativo, narrativo, retorico. Solo l'essenziale: la parola assoluta che rivela. Non e purezza morale: e purezza formale — la riduzione al nucleo irriducibile."),

    mc("er25","Confronti","Come l'Ermetismo risponde alla storia concreta (fascismo, guerra)?",
      ["L'Ermetismo si impegna politicamente contro il fascismo","L'Ermetismo si ritira nell'interiorita pura come risposta implicita alla storia: l'oscurita come rifugio e come resistenza silenciosa","L'Ermetismo sostiene il fascismo","L'Ermetismo ignora la storia"],
      1,"L'Ermetismo risponde al fascismo ritirandosi nell'interiorita: la poesia oscura non si puo censurare perche non la si capisce. E una resistenza silenziosa — non dichiarata come quella degli antifascisti organizzati, ma reale. Dopo il 1945, alcuni ermetici (Quasimodo) passano a una poesia piu civile e impegnata."),

    tf("er26","Origini","Il termine 'ermetica' viene usato per la prima volta dagli stessi poeti per definire la propria corrente.",
      false,"Falso. Il termine viene coniato dal critico Francesco Flora nel saggio La poesia ermetica (1936) come critica: questa poesia e incomprensibile. Solo successivamente i poeti lo accettano e in parte lo rivendicano."),

    tf("er27","Origini","L'Ermetismo si sviluppa principalmente a Milano.",
      false,"Falso. L'Ermetismo si sviluppa principalmente a Firenze, intorno alle riviste Solaria, Letteratura, Campo di Marte. I suoi protagonisti principali (Luzi, Gatto, Bo) sono fiorentini o strettamente legati all'ambiente fiorentino."),

    tf("er28","Poetica","Nel'Ermetismo, la brevita del verso e conseguenza di una scarsa ispirazione.",
      false,"Falso. La brevita ermetica e scelta consapevole e tecnica raffinata: il verso brevissimo (anche una sola parola) concentra la massima densita di significato. Richiedere meno parole e piu difficile — non piu semplice. 'M'illumino / d'immenso' e due parole che contengono un universo."),

    tf("er29","Poetica","Il bianco della pagina nei testi ermetici (specialmente Ungaretti) e privo di significato.",
      false,"Falso. Il bianco della pagina e silenzio significante. In Ungaretti ogni spazio bianco tra i versi e una pausa che amplifica le parole, cambia il ritmo, aggiunge significato. Il bianco e parte integrante del testo — non vuoto ma presenza."),

    tf("er30","Origini","L'Ermetismo nasce in un periodo di relativa liberta politica in Italia.",
      false,"Falso. L'Ermetismo si sviluppa durante il fascismo (anni '20-'40), in un periodo di forte costrizione politica e culturale. L'oscurita come valore ha anche una funzione protettiva: non si puo censurare cio che non si capisce."),

    tf("er31","Confronti","Saba e Ungaretti hanno poetiche simili e appartengono alla stessa tendenza.",
      false,"Falso. Saba e Ungaretti rappresentano i due poli opposti della poesia italiana del Novecento. Saba: chiarezza, trite parole, tono colloquiale, tradizione metrica, 'poesia onesta'. Ungaretti: oscurita, parola assoluta, verso brevissimo, Ermetismo. Sono temperamenti e poetiche radicalmente diversi."),

    tf("er32","Opere","L'allegria di Ungaretti viene scritta nelle trincee del Carso durante la Prima Guerra Mondiale.",
      true,"Vero. Le liriche che compongono L'allegria (prima publicata come Il porto sepolto, 1916) vengono scritte nelle trincee del Carso. La guerra — l'esperienza della morte quotidiana — e il contesto che produce la parola nuda, il verso brevissimo, il bianco come silenzio."),

    tf("er33","Confronti","Il Simbolismo francese e l'Ermetismo italiano sono la stessa corrente in lingue diverse.",
      false,"Falso. Sono correnti diverse, anche se l'Ermetismo e il figlio del Simbolismo. Il Simbolismo (fine Ottocento) e piu musicale e atmosferico; l'Ermetismo (anni '20-'40) e piu secco e essenziale. Il contesto storico (guerra, fascismo) cambia radicalmente il tono e il senso dell'oscurita."),

    tf("er34","Poetica","Dopo il 1945, alcuni ermetici passano a una poesia piu civile e impegnata.",
      true,"Vero. Quasimodo e il caso piu emblematico: dopo la Seconda Guerra Mondiale passa dalla poesia ermetica e intimista a una poesia piu civile e impegnata (Giorno dopo giorno, 1947). Vince il Nobel nel 1959 come 'poeta della resistenza'. La storia irrompe nell'intimita ermetica."),

    tf("er35","Opere","Montale e classificato come poeta ermetico in senso stretto.",
      false,"Falso. Montale rifiuta esplicitamente l'etichetta 'ermetico' e mantiene una posizione autonoma. La sua poesia anticipa e influenza l'Ermetismo ma non ne e parte in senso stretto: e piu narrativa, piu concreta, meno programmaticamente oscura degli ermetici fiorentini."),

    open("er36","Poetica","Analizza le due poesie piu brevi di Ungaretti ('Mattina' e 'Soldati') come esempi di parola assoluta.",
      "Mattina ('M'illumino / d'immenso'): due parole che contengono un'intera filosofia — la luce del mattino come illuminazione dell'immenso, l'istante sensoriale come rivelazione esistenziale. Soldati ('Si sta / come d'autunno / sugli alberi / le foglie'): quattro versi che contengono tutta la guerra — la precarita della vita dei soldati attraverso l'analogia autunnale. In entrambi la parola e assoluta: senza ornamento, senza commento, senza connettivi inutili. Ogni parola porta il massimo peso semantico. Il bianco della pagina amplifica il silenzio intorno alle parole. E l'Ermetismo nella sua forma piu pura.",
      ["Mattina","Soldati","assoluta","ornamento","silenzio","analogia"]),

    open("er37","Confronti","Perche l'Ermetismo e il figlio del Simbolismo ma non e identico ad esso?",
      "L'Ermetismo eredita dal Simbolismo: la parola densa, l'oscurita come valore, l'analogia ardita. Ma differisce per contesto storico e conseguente tono. Il Simbolismo (fine Ottocento, Francia) e atmosferico e musicale — la vaghezza di Verlaine, la sofisticazione di Mallarme. L'Ermetismo (anni '20-'40, Italia fascista) e piu secco, piu nudo, piu essenziale — ha attraversato la guerra di trincea e il fascismo. La parola ermetica non e l'evocazione musicale di Verlaine: e il grido ridotto al silenzio dal contesto storico. Stessa oscurita, diversa radice.",
      ["Simbolismo","guerra","fascismo","secco","musicale","radice"]),

    open("er38","Opere","Spiega perche 'Ed e subito sera' di Quasimodo e un testo ermetico nonostante la sua relativa comprensibilita.",
      "La relativa comprensibilita di 'Ed e subito sera' non contraddice l'ermetismo del testo. La comprensione immediata ('si muore presto, si e soli') e solo la superficie. La densita ermetica sta nella compressione: tre versi contengono tutta la solitudine esistenziale moderna, il senso del tempo, la brevita della vita, l'isolamento dell'individuo nel cosmo. Ogni parola porta un peso enorme: 'solo' (la condizione dell'uomo moderno), 'cuor della terra' (centro cosmico dell'esistenza), 'raggio di sole' (la vita come istante luminoso), 'sera' (la morte come notte improvvisa). La brevita ermetica non e semplificazione: e concentrazione massima.",
      ["comprensibilita","superficie","compressione","densita","brevita","concentrazione"]),

    open("er39","Confronti","Perche l'Ermetismo e considerato inadeguato di fronte alla storia dopo il 1945?",
      "L'Ermetismo e la poesia dell'interiorita pura: si ritira nel segreto del linguaggio e nell'oscurita conoscitiva. Di fronte alla catastrofe della Seconda Guerra Mondiale (Shoah, bombardamenti, Resistenza), questa poesia sembra inadeguata — non perche sia brutta ma perche troppo intimista per rispondere all'enormita della storia. Quasimodo, il piu ermetico degli ermetici insieme a Luzi, sente questa inadeguatezza e cambia direzione: 'Alle fronde dei salici' (1946) e una poesia che non si puo piu permettere l'oscurita quando la storia grida. Il Neorealismo e la poesia civile rispondono all'Ermetismo rivendicando il ritorno alla storia concreta.",
      ["inadeguato","storia","Shoah","Quasimodo","intimista","Neorealismo"]),

    open("er40","Poetica","Cosa si intende per 'letteratura come vita' di Carlo Bo e come questo principio differenzia l'Ermetismo dall'Estetismo?",
      "Bo (1938): la letteratura non e esercizio formale (come nell'Estetismo di Wilde) ne trasmissione di messaggi (come nel Naturalismo). E vita — coincidenza totale con l'esistenza. Il poeta non scrive: vive con la massima intensita e questa vita diventa parola. La differenza con l'Estetismo e radicale: l'Estetismo estetizza la vita, trasformandola in opera d'arte bella. L'Ermetismo vive la letteratura come esperienza esistenziale vera — non come bella forma ma come verita bruciante. Un testo ermetico non e bello: e vero. Un testo estetista non e vero: e bello. E la differenza tra Dorian Gray (bellezza come unico valore) e 'M'illumino d'immenso' (verita dell'istante come unico valore).",
      ["vita","esercizio","Estetismo","verita","bellezza","coincidenza"])

  ];
})();
