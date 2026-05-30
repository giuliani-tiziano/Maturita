/* =========================================================================
   crepuscolarismo-quiz-data.js — Banca domande: Il Crepuscolarismo
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
  window.QUIZ_DATA.crepuscolarismo = [

    mc("cr01","Origini","Chi conia il termine 'crepuscolare' per descrivere questa tendenza poetica nel 1910?",
      ["Giovanni Pascoli","Benedetto Croce","Giuseppe Antonio Borgese","Luigi Russo"],
      2,"Il critico Giuseppe Antonio Borgese conia il termine 'crepuscolare' in un articolo del 1910. Non e un manifesto ne un'autoclassificazione: i poeti stessi non si riconoscevano necessariamente nell'etichetta."),

    mc("cr02","Origini","Il Crepuscolarismo nasce in reazione a quale poeta dominante dell'epoca?",
      ["Giovanni Verga","Giovanni Pascoli","Gabriele D'Annunzio","Umberto Saba"],
      2,"Il Crepuscolarismo nasce come reazione implicita al grandioso vitalismo di D'Annunzio. Mentre il poeta pescarese canta il superuomo, la natura magnifica, l'eros trionfante, i crepuscolari riducono la poesia alla dimensione del quotidiano grigio, provinciale, dimesso."),

    mc("cr03","Origini","In quale periodo si sviluppa il Crepuscolarismo?",
      ["1870-1890","1890-1910","1900-1915 circa","1920-1940"],
      2,"Il Crepuscolarismo si sviluppa nel primo quindicennio del Novecento (1900-1915 circa), in contemporanea con il Futurismo — di cui e il polo opposto — e con i Vociani."),

    mc("cr04","Origini","Il Crepuscolarismo e un movimento organizzato con manifesti e programma unitario?",
      ["Si, ha un manifesto pubblicato da Gozzano nel 1907","No: e un'etichetta critica che raggruppa tendenze simili senza un programma esplicito","Si, ha un manifesto pubblicato sulla rivista La Voce","No, ma ha un manifesto implicito nelle poesie di Corazzini"],
      1,"No: il Crepuscolarismo non e un movimento organizzato. E un'etichetta critica che raggruppa poeti diversi accomunati da uno stesso tono — la stanchezza, il ripiegamento, la rinuncia — senza un programma esplicito, una rivista comune o un manifesto condiviso."),

    mc("cr05","Origini","Quali sono le influenze principali del Crepuscolarismo?",
      ["Il Futurismo e il Dadaismo","Pascoli (piccoli temi quotidiani) e il Simbolismo francese (malinconia, Verlaine)","Zola e il Naturalismo","D'Annunzio e il Decadentismo"],
      1,"Le due radici principali: Pascoli — i piccoli temi quotidiani, la precisione delle cose minute — e il Simbolismo francese, in particolare Verlaine — la malinconia, la vaghezza impressionistica, la musicalita sottile. Ma i crepuscolari sono meno sistematici di entrambi."),

    mc("cr06","Poetica","Cosa significa 'tono dimesso' nella poetica crepuscolare?",
      ["Un tono malinconico e tragico","Un registro stilistico volutamente basso, prosastico, anti-eroico: rifiuto del sublime e del tragico in favore del piccolo e del quotidiano","Un tono violento e provocatorio","Un tono aulico e elevato"],
      1,"Il tono dimesso: registro stilistico volutamente basso, prosastico, privo di enfasi. Rifiuto programmatico del sublime (D'Annunzio) e del tragico in favore del piccolo, del marginale, del sentimentale quotidiano. Non e mancanza di tecnica: e una scelta estetica precisa."),

    mc("cr07","Poetica","Cosa sono le 'buone cose di pessimo gusto' nella poetica di Gozzano?",
      ["Gli oggetti di lusso comprati dalla borghesia","Gli oggetti kitch e sentimentali del passato, amati proprio per la loro meschinita estetica perche carichi di umanita autentica","I libri di cattiva qualita letteraria","Gli oggetti artigianali di scarso valore materiale"],
      1,"Le 'buone cose di pessimo gusto' (espressione di Gozzano da L'amica di nonna Speranza): oggetti kitch del passato — porcellane sbiadite, ricami, ritratti polverosi — 'buoni' perche carichi di vita vissuta e di memoria affettiva, di 'pessimo gusto' perche esteticamente brutti e sentimentali."),

    mc("cr08","Poetica","Cosa significa la metafora del 'crepuscolo' applicata alla poesia?",
      ["La poesia del tramonto e del paesaggio naturale","Il tramonto del ruolo sociale del poeta: la poesia non e piu ispirazione sublime ma piccola luce che si spegne senza clamore","La poesia scritta all'alba o al tramonto","Un tipo di poesia romantica notturna"],
      1,"Il crepuscolo come metafora: il tramonto del giorno e anche il tramonto del ruolo sociale del poeta. I crepuscolari non sono vati, non sono maledetti, non sono guerrieri futuristi: sono uomini comuni che non trovano nulla di abbastanza grande da cantare. La poesia si spegne piano, senza clamore."),

    mc("cr09","Poetica","Qual e la differenza tra il tono crepuscolare e la malinconia romantica?",
      ["Non c'e differenza","Il romanticismo ha una malinconia grandiosa e cosmica; il Crepuscolarismo ha una malinconia piccola, provinciale, ironica — sa di essere patetico e lo dichiara","Il romanticismo e piu dimesso del crepuscolarismo","Il crepuscolarismo non ha malinconia"],
      1,"Il romanticismo esalta la malinconia come sentimento sublime e cosmico (la notte stellata, il mare in tempesta). Il Crepuscolarismo ha una malinconia piccola e provinciale — il salotto, la domenica, gli oggetti di nonna. E soprattutto consapevole di se: Gozzano sa di essere patetico e lo dice, proteggendosi con l'ironia."),

    mc("cr10","Poetica","Cosa e la 'doppia coscienza' di Gozzano?",
      ["Un disturbo psicologico","La capacita di essere contemporaneamente malinconico e ironico: sa che il suo sentimentalismo e patetico e lo dice, senza pero smettere di essere malinconico","Una tecnica narrativa con doppio narratore","Il confronto tra presente e passato nella stessa poesia"],
      1,"La doppia coscienza di Gozzano: sa che il suo sentimentalismo e patetico — e lo dichiara esplicitamente attraverso l'ironia. Questa lucidita lo distingue dal romanticismo e dal crepuscolarismo puro di Corazzini. Non e cinismo: e la distanza che permette di essere sentimentali senza essere ridicoli."),

    mc("cr11","Poetica","Il poeta crepuscolare si identifica con quale figura?",
      ["Il vate profetico e eroico","Il poeta maledetto tormentato","Un uomo mediocre, malato o annoiato che non trova nulla di abbastanza importante da cantare","Un rivoluzionario culturale"],
      2,"Il poeta crepuscolare non e superiore agli altri: e spesso inferiore. Corazzini: 'Io non sono che un piccolo fanciullo che piange.' Non e un vate (D'Annunzio), non e un maledetto (Verlaine), non e un rivoluzionario (Marinetti): e un bambino fragile, un malato, un annoiato."),

    mc("cr12","Opere","Quale e la raccolta principale di Guido Gozzano?",
      ["Via del rifugio","Poesie sparse","I colloqui","Farfalle"],
      2,"I colloqui (1911) e la raccolta principale del Crepuscolarismo e il capolavoro di Gozzano. Contiene La signorina Felicita ovvero la Felicita e L'amica di nonna Speranza — i due testi piu analizzati del Crepuscolarismo."),

    mc("cr13","Opere","Chi e la signorina Felicita nella lirica omonima di Gozzano?",
      ["La fidanzata di Gozzano che lo abbandona","Una ragazza di provincia semplice e sana di cui il poeta si innamora in villeggiatura — ma preferisce sognare invece di possedere","La figlia di un nobile decaduto","Un personaggio inventato senza corrispondenza reale"],
      1,"La signorina Felicita: ragazza di provincia sana, semplice, senza pretese intellettuali. Il poeta la ama — ma con la sua tipica doppia coscienza: sa che non puo appartenerle (lui e malato, lei e sana), sceglie di sognare piuttosto che possedere, e alla fine parte lasciandola. La felicita e sempre altrove."),

    mc("cr14","Opere","In L'amica di nonna Speranza, cosa cataloga Gozzano con affettuosa ironia?",
      ["I libri della biblioteca di nonna Speranza","Gli oggetti kitch di una vecchia villa: 'buone cose di pessimo gusto', tracce di una vita vissuta","I ritratti degli antenati nobili","Le ricette di cucina della nonna"],
      1,"In L'amica di nonna Speranza Gozzano visita una vecchia villa e cataloga i suoi 'cimeli': porcellane, ricami, ritratti sbiaditi, album di fotografie — oggetti kitch sentimentali ('buone cose di pessimo gusto'). Il catalogo e insieme ironia (sono bruttini) e affetto (sono carichi di vita)."),

    mc("cr15","Opere","Quale raccolta di Sergio Corazzini (1906) e il documento piu importante del Crepuscolarismo nella sua versione piu disperata?",
      ["Le rime dell'angoscia","Piccolo libro inutile","Dolcezze","Poesie sparse"],
      1,"Piccolo libro inutile (1906): il titolo e gia un manifesto. Non si pretende di dire nulla di importante. Le poesie di Corazzini sono brevi, malinconiche, prive di ambizione — e il Crepuscolarismo nella sua forma piu pura: la rinuncia totale alla grandiosita."),

    mc("cr16","Opere","In quale anno muore Sergio Corazzini e quanti anni aveva?",
      ["1910, 28 anni","1907, 21 anni","1915, 30 anni","1920, 35 anni"],
      1,"Corazzini muore nel 1907 di tubercolosi a 21 anni. La sua morte prematura diventa quasi un'icona del Crepuscolarismo: il poeta che si spegne come un crepuscolo, senza clamore, lasciando pochi testi brevi e malinconici."),

    mc("cr17","Opere","Marino Moretti intitola la sua raccolta principale con una frase che e gia un manifesto poetico. Quale?",
      ["Lacrime e sorrisi","Poesie scritte col lapis","Piccoli quadri","Cose di ogni giorno"],
      1,"Poesie scritte col lapis (1910): il lapis (matita, non penna) suggerisce provvisorieta, facilita, informalita. La poesia come annotazione privata, come appunto, non come monumento. E il tono diaristico e dimesso portato al suo estremo."),

    mc("cr18","Confronti","Qual e la differenza fondamentale tra Crepuscolarismo e Futurismo?",
      ["Sono correnti identiche con nomi diversi","Il Futurismo esplode nell'urlo, nella velocita, nella macchina; il Crepuscolarismo si ritrae nel silenzio, nella lentezza, nel quotidiano provinciale. Entrambi reagiscono a D'Annunzio ma agli antipodi","Il Futurismo e piu malinconico del Crepuscolarismo","Il Crepuscolarismo e piu violento del Futurismo"],
      1,"Crepuscolarismo vs Futurismo: i due poli opposti della poesia italiana del primo Novecento. Il Futurismo: urlo, velocita, macchina, futuro, distruzione della tradizione. Il Crepuscolarismo: sussurro, lentezza, quotidiano, passato, stanchezza della tradizione. Entrambi reagiscono a D'Annunzio — ma agli antipodi."),

    mc("cr19","Confronti","Come si relaziona il Crepuscolarismo con la Linea Antinovecentista (Saba)?",
      ["Sono identici: Saba e un crepuscolare","Il Crepuscolarismo e un predecessore della Linea Antinovecentista: entrambi usano il quotidiano e il registro basso. Ma Corazzini e Gozzano hanno una malinconia rassegnata; Saba trasforma il quotidiano in conoscenza rivendicandolo con orgoglio","Il Crepuscolarismo rifiuta il quotidiano; Saba lo esalta","Non c'e relazione tra le due correnti"],
      1,"Il Crepuscolarismo anticipa la Linea Antinovecentista: stesso quotidiano, stesso registro basso. Ma la differenza e nell'atteggiamento: Gozzano si vergogna del proprio sentimentalismo (ironia difensiva); Saba rivendica il quotidiano come 'poesia onesta' con orgoglio programmatico."),

    mc("cr20","Confronti","Come si differenzia il Crepuscolarismo dal Simbolismo nel rapporto con la malinconia?",
      ["Non si differenziano: entrambi hanno la stessa malinconia","Il Simbolismo ha una malinconia cosmica ed esistenziale (spleen baudelairiano); il Crepuscolarismo ha una malinconia piccola, provinciale, quotidiana — piu vicina alla tristezza che allo spleen","Il Crepuscolarismo non ha malinconia","Il Simbolismo non ha malinconia"],
      1,"Il simbolismo di Baudelaire ha lo spleen — una noia esistenziale cosmica che opprime il poeta moderno nel suo confronto con l'infinito. Il Crepuscolarismo ha qualcosa di molto piu modesto: la tristezza di un pomeriggio domenicale di provincia, il rimpianto per un passato che non c'e mai stato. Non e meno autentico — e solo di scala diversa."),

    mc("cr21","Testi","Qual e la frase piu celebre della poesia Desolazione del povero poeta sentimentale di Corazzini?",
      ["'Ho percorso tutta la citta.'","'M'illumino d'immenso.'","'Perche tu mi dici: poeta? Io non sono che un piccolo fanciullo che piange.'","'Ciascuno sta solo sul cuor della terra.'"],
      2,"'Perche tu mi dici: poeta? / Io non sono che un piccolo fanciullo che piange.' E la dichiarazione programmatica del Crepuscolarismo nella sua forma piu pura: il rifiuto del titolo di poeta, la riduzione dell'io al minimo (bambino), il pianto come unica produzione possibile."),

    mc("cr22","Testi","In I colloqui di Gozzano, la signorina Felicita e descritta come…",
      ["Una donna colta e sofisticata della citta","Una ragazza di provincia semplice, sana, lontana dall'artificiosita del poeta","Una figura mitica e irraggiungibile come la Chimera","Una donna fatale decadente"],
      1,"La signorina Felicita e l'opposto dell'ideale femminile decadente: non sofisticata, non fatale, non intellettuale. E semplicemente sana, semplice, provinciale. Il poeta se ne innamora proprio perche lei e tutto cio che lui — malato, intellettuale, ironico — non potra mai essere."),

    mc("cr23","Testi","In L'amica di nonna Speranza, perche Gozzano usa il catalogo di oggetti kitch?",
      ["Per criticare il cattivo gusto borghese","Per tenere la malinconia a distanza attraverso l'ironia: nominare e catalogare gli oggetti e un modo di resistere alla nostalgia","Per dimostrare la sua erudizione artistica","Per imitare il metodo scientifico del Naturalismo"],
      1,"Il catalogo degli oggetti e una strategia difensiva: nominare, elencare, ironizzare sugli oggetti di pessimo gusto e un modo di tenere a distanza la malinconia pura. Se li descrivo con ironia, posso permettermi di amarli senza cedere all'autocompianto. E la doppia coscienza in azione."),

    mc("cr24","Glossario","Cosa e il 'crepuscolo' come metafora nella critica letteraria italiana?",
      ["Un tipo di poesia notturna","Il tramonto del ruolo sociale del poeta: la piccola luce che si spegne senza clamore, in contrasto con il vate danunziano o il maledetto baudelairiano","Una fase della produzione di ogni poeta","Il periodo di transizione tra il Naturalismo e il Futurismo"],
      1,"La metafora del crepuscolo: il tramonto del giorno come simbolo del tramonto della grande ambizione poetica. I crepuscolari non aspirano alla grandezza — sono consapevoli di essere poeti minori, e questa consapevolezza e il loro tema principale. La piccola luce del crepuscolo contro il sole abbagliante di D'Annunzio."),

    mc("cr25","Glossario","Cosa si intende per 'ironia crepuscolare'?",
      ["L'ironia feroce dei satirici come Parini","La doppia coscienza di Gozzano: sa che il suo sentimentalismo e patetico e lo dice, proteggendosi dall'autocompianto senza smettere pero di essere malinconico","Una tecnica narrativa con commento ironico del narratore","Il sarcasmo politico contro la societa borghese"],
      1,"L'ironia crepuscolare (tipicamente gozzaniana): protezione dall'autocompianto. Gozzano sa che i suoi temi sono provinciali e sentimentali — e lo ammette, ironizzando su se stesso. Questa metaconsapevolezza distingue il Crepuscolarismo dal romanticismo naif: e ironia come scudo, non come distanza fredda."),

    tf("cr26","Origini","Il termine 'crepuscolare' e stato coniato dagli stessi poeti per autodefinirsi.",
      false,"Falso. Il termine 'crepuscolare' viene coniato dal critico Giuseppe Antonio Borgese in un articolo del 1910. I poeti stessi non usano questa etichetta per definirsi — Gozzano e Corazzini si considerano semplicemente poeti, non 'crepuscolari'."),

    tf("cr27","Origini","Il Crepuscolarismo ha un manifesto scritto e firmato come il Futurismo.",
      false,"Falso. Il Crepuscolarismo non ha un manifesto: non e un movimento organizzato ma una tendenza diffusa, un'atmosfera comune tra poeti diversi. L'assenza di manifesto e coerente con il suo tono: un manifesto implica ambizione e programma — tutto cio che i crepuscolari rifiutano."),

    tf("cr28","Poetica","Il tono dimesso del Crepuscolarismo e conseguenza di una scarsa tecnica poetica.",
      false,"Falso. Il tono dimesso non e mancanza di tecnica: e una scelta estetica consapevole. Gozzano e tecnicamente raffinato — usa la metrica tradizionale con grande abilita, anche se con tono prosastico. La 'difficolta della semplicita' e il problema di ogni poeta crepuscolare."),

    tf("cr29","Poetica","I crepuscolari si definiscono poeti minori e questa e la loro forza.",
      true,"Vero, in un certo senso. I crepuscolari accettano esplicitamente di essere 'minori': Corazzini rifiuta il titolo di poeta, Gozzano ironizza sulla propria sentimentalita. Questa accettazione della propria limitatezza e autentica e produce una poesia genuina, non gonfiata di ambizioni impossibili."),

    tf("cr30","Opere","Sergio Corazzini muore giovanissimo di tubercolosi nel 1907.",
      true,"Vero. Corazzini muore di tubercolosi nel 1907 a 21 anni. La sua morte prematura diventa quasi un'icona del Crepuscolarismo: il poeta che si spegne come un crepuscolo, senza clamore, lasciando pochi testi ma di grande intensita."),

    tf("cr31","Confronti","Il Crepuscolarismo e il Futurismo condividono l'entusiasmo per la modernita industriale.",
      false,"Falso. E esattamente l'opposto: il Futurismo esalta la macchina, la velocita, la modernita industriale. Il Crepuscolarismo si rifugia nel quotidiano provinciale, negli oggetti del passato, lontano dalla modernita. Sono correnti diametralmente opposte nel rapporto con il moderno."),

    tf("cr32","Confronti","Il Crepuscolarismo nasce come reazione al vitalismo di D'Annunzio.",
      true,"Vero. Il Crepuscolarismo nasce come risposta silenziosa e involontaria al grandioso vitalismo di D'Annunzio. Mentre il poeta pescarese canta il superuomo e l'eros trionfante, i crepuscolari si ritirano nel piccolo, nel dimesso, nel provinciale. Non e polemica esplicita: e esaurimento."),

    tf("cr33","Poetica","Guido Gozzano usa l'ironia per proteggersi dalla malinconia, non per negarla.",
      true,"Vero. L'ironia gozzaniana non elimina la malinconia: la protegge. Gozzano sa di essere malinconico e sa che e patetico — lo dichiara con ironia. Questa consapevolezza metacritica gli permette di essere sentimentale senza cadere nell'autocompianto romantico."),

    tf("cr34","Opere","Marino Moretti usa un tono stilisticamente elevato e aulico nelle sue poesie.",
      false,"Falso. Moretti usa il tono piu basso e prosastico del Crepuscolarismo: le sue poesie sembrano note diaristiche scritte di fretta, annotazioni quotidiane. Il titolo 'Poesie scritte col lapis' suggerisce provvisorieta e informalita come scelta estetica."),

    tf("cr35","Origini","Il Crepuscolarismo e la Scapigliatura sono la stessa corrente letteraria.",
      false,"Falso. La Scapigliatura e un movimento degli anni '60-'80 dell'Ottocento (Milano, Praga, Tarchetti) che reagisce al moralismo romantico e borghese. Il Crepuscolarismo nasce nel primo Novecento con presupposti completamente diversi. L'unico punto di contatto e il tono anti-eroico e dimesso."),

    open("cr36","Poetica","Spiega la 'doppia coscienza' di Gozzano con un esempio dalle sue poesie.",
      "La doppia coscienza: Gozzano e contemporaneamente malinconico e consapevole di essere malinconico. Esempio: in L'amica di nonna Speranza descrive con amore gli oggetti kitch della vecchia villa ('buone cose di pessimo gusto') sapendo perfettamente che sono kitch e dichiarandolo nell'aggettivo stesso. Non nega la propria sentimentalita ma la osserva dall'esterno con ironia leggera. Altro esempio: nella Signorina Felicita sa di non poter avere la ragazza sana che ama — lui e malato, sofisticato, intellettuale — e preferisce sognare piuttosto che possedere. La consapevolezza del limite non elimina il desiderio: lo rende piu malinconico e piu vero.",
      ["doppia coscienza","ironia","malinconia","kitch","consapevolezza","limite"]),

    open("cr37","Confronti","Perche il Crepuscolarismo e il Futurismo sono descritti come i 'due poli opposti' della poesia italiana del primo Novecento?",
      "Entrambi nascono nello stesso periodo (1900-1915) e reagiscono allo stesso problema (il peso schiacciante di D'Annunzio sulla poesia italiana), ma in direzioni diametralmente opposte. Il Futurismo risponde con l'eccesso: piu urlo, piu velocita, piu distruzione, piu futuro. Il Crepuscolarismo risponde con il difetto: meno voce, meno ambizione, meno grandiosita, piu silenzio. Il Futurismo brucia; il Crepuscolarismo si spegne piano. Entrambi, a modo loro, rifiutano il magniloquente D'Annunzio — ma l'uno superandolo per eccesso di energia, l'altro abbandonandolo per mancanza di entusiasmo.",
      ["poli opposti","D'Annunzio","eccesso","difetto","energia","silenzio"]),

    open("cr38","Testi","Analizza la frase 'Perche tu mi dici: poeta? / Io non sono che un piccolo fanciullo che piange' di Corazzini.",
      "La frase e la dichiarazione programmatica del Crepuscolarismo nella sua forma piu pura. Tre elementi: (1) il rifiuto del titolo di 'poeta' — il poeta crepuscolare non e un vate, non e un maledetto, non e un profeta; (2) la riduzione dell'io al minimo: un 'piccolo fanciullo', bambino, fragile, incapace di stare nel mondo degli adulti; (3) il pianto come unica produzione possibile — non canto eroico, non lirica sublime, solo lacrime versate nell'indifferenza. E l'anti-D'Annunzio assoluto: mentre il vate pescarese esalta il proprio io eccezionale, Corazzini lo riduce a zero.",
      ["poeta","bambino","pianto","anti-D'Annunzio","zero","riduzione"]),

    open("cr39","Confronti","Come differisce l'uso del 'quotidiano' in Gozzano rispetto all'uso del 'quotidiano' in Saba?",
      "Gozzano usa il quotidiano con malinconia ironica e rassegnata: i suoi oggetti di nonna Speranza sono belli nella loro meschinita, ma lui sa di essere patetico e se ne scusa con l'ironia. Il quotidiano e un rifugio, non una rivendicazione. Saba usa il quotidiano con orgoglio programmatico: la 'poesia onesta' e la scelta di parole 'trite' perche il cuore del lettore le riconosca immediatamente. Non si scusa: rivendica. Il quotidiano non e un rifugio dalla grandiosita impossibile — e la materia nobile della verita poetica. La differenza e tra la resa malinconica (Gozzano) e la scelta orgogliosa (Saba).",
      ["quotidiano","Gozzano","Saba","ironia","orgoglio","resa"]),

    open("cr40","Origini","Perche il Crepuscolarismo non ha un manifesto e cosa ci dice questa assenza?",
      "L'assenza di manifesto e coerente con il tono crepuscolare. Un manifesto richiede ambizione, programma, entusiasmo — tutto cio che i crepuscolari rifiutano. Scrivere un manifesto sarebbe contraddire la propria poetica: significherebbe credere nella grandiosita della propria posizione, avere un messaggio da lanciare al mondo. I crepuscolari non hanno messaggi: hanno malinconia. Non hanno programmi: hanno stanchezza. L'assenza di manifesto e quindi essa stessa una forma di manifesto implicito — la rinuncia alla grandiosita come scelta estetica fondamentale.",
      ["assenza","manifesto","ambizione","stanchezza","rinuncia","implicito"])

  ];
})();
