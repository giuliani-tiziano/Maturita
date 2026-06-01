/* =========================================================================
   pavese-quiz-data.js — Banca domande per Cesare Pavese
   32 domande in formato compatibile con quiz-engine.js
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
  window.QUIZ_DATA.pavese = [

    /* ── VITA ── */
    mc("pv01", "Vita", "Dove e in che anno nacque Cesare Pavese?",
      ["1908 a Santo Stefano Belbo (Cuneo)", "1896 a Genova", "1922 a Bologna", "1885 a Marradi"],
      0, "Pavese nacque il 9 settembre 1908 a Santo Stefano Belbo, nelle Langhe, in provincia di Cuneo."),
    mc("pv02", "Vita", "Su quale autore americano Pavese scrisse la tesi di laurea?",
      ["Herman Melville", "Walt Whitman", "John Steinbeck", "Edgar Allan Poe"],
      1, "Pavese si laureò a Torino con una tesi su Walt Whitman, avviando la sua carriera di traduttore e mediatore della letteratura americana."),
    mc("pv03", "Vita", "Dove fu confinato Pavese nel 1935 per antifascismo?",
      ["Ventotene", "Lipari", "Brancaleone Calabro", "Ustica"],
      2, "Nel 1935 Pavese fu confinato a Brancaleone Calabro. Al ritorno cominciò a tenere il diario Il mestiere di vivere."),
    mc("pv04", "Vita", "Per quale casa editrice lavorò Pavese nel dopoguerra?",
      ["Mondadori", "Einaudi", "Bompiani", "Feltrinelli"],
      1, "Pavese fu una figura centrale della casa editrice Einaudi di Torino per tutta la sua vita."),
    mc("pv05", "Vita", "Come morì Pavese nel 1950?",
      ["Di malattia", "In un incidente", "Si suicidò a Torino", "In guerra"],
      2, "Pavese si suicidò il 27 agosto 1950 in una camera dell'albergo Roma di Torino, all'apice del successo letterario, pochi mesi dopo aver vinto il Premio Strega."),
    mc("pv06", "Vita", "Quale premio vinse Pavese nel 1950?",
      ["Premio Nobel", "Premio Strega", "Premio Viareggio", "Premio Campiello"],
      1, "Nel 1950 Pavese vinse il Premio Strega con La bella estate. Pochi mesi dopo si tolse la vita."),
    tf("pv07", "Vita", "Pavese perse il padre da bambino.",
      true, "Vero. Pavese perse il padre a sei anni (1914). La perdita precoce e una madre severa segnarono la sua psicologia improntata alla solitudine."),
    tf("pv08", "Vita", "Pavese, con Vittorini, fu uno dei principali traduttori della letteratura americana in Italia.",
      true, "Vero. Pavese tradusse Melville (Moby Dick), Dos Passos, Steinbeck e altri, facendo dell'America il mito della libertà contro il provincialismo fascista."),

    /* ── MITO ── */
    mc("pv09", "Mito", "Cosa rappresentano le Langhe nell'opera di Pavese?",
      ["Un semplice sfondo geografico", "Un paesaggio mitico, archetipico, eterno", "Un luogo da cui fuggire", "Una città industriale"],
      1, "Le Langhe e Santo Stefano Belbo diventano per Pavese paesaggi mitici, eterni, archetipici: non un luogo reale ma il mito assoluto dell'infanzia perduta."),
    mc("pv10", "Mito", "Quali pensatori influenzano la concezione pavesiana del mito?",
      ["Marx ed Engels", "Croce e Gentile", "Vico e Jung", "Kant e Hegel"],
      2, "La concezione del mito di Pavese nasce da Giambattista Vico (l'età «poetica» dell'umanità) e da Carl Gustav Jung (gli archetipi dell'inconscio collettivo)."),
    mc("pv11", "Mito", "Cosa significa il tema del «ritorno» in Pavese?",
      ["Che tornare a casa risolve i problemi", "Che si torna ai luoghi dell'origine ma non si trova ciò che si cerca: il passato è irrecuperabile", "Che il viaggio è sempre felice", "Che Pavese odiava la sua terra"],
      1, "Il ritorno è ossessivo ma impossibile: si torna ai luoghi dell'origine ma il passato è irrecuperabile. Il ritorno conferma la perdita invece di annullarla."),
    tf("pv12", "Mito", "Per Pavese solo nell'infanzia si conoscono le cose «per la prima volta»; da adulti si possono solo riconoscere.",
      true, "Vero. È il nucleo della concezione mitica: l'infanzia è il tempo della conoscenza originaria, irripetibile."),
    open("pv13", "Mito", "Spiega la differenza tra il mito di Pavese e la realtà sociale di Verga.",
      "Entrambi fanno della terra d'origine il centro dell'opera. Verga osserva il Sud come realtà sociale immutabile, con impersonalità e documentazione; Pavese trasfigura le Langhe in mito personale, archetipo sacro e interiore. Verga è sociologo, Pavese è mitografo.",
      ["mito", "realtà sociale", "Langhe", "archetipo", "impersonalità"]),

    /* ── POETICA ── */
    mc("pv14", "Poetica", "Cos'è il «verso-frase» di Pavese?",
      ["Un verso brevissimo come quello di Ungaretti", "Un verso lungo, narrativo e prosastico, opposto all'Ermetismo", "Un endecasillabo classico", "Una rima baciata"],
      1, "Il verso-frase, introdotto in Lavorare stanca (1936), è lungo, disteso, prosastico e narrativo: racconta invece di cantare. È l'opposto del verso essenziale ermetico."),
    mc("pv15", "Poetica", "Qual è la condizione esistenziale dei personaggi pavesiani?",
      ["La gioia di vivere", "La solitudine e l'incapacità di stabilire contatti autentici", "L'eroismo", "La fede religiosa"],
      1, "I personaggi pavesiani sono dominati dalla solitudine: incapaci di amare, di comunicare, di stabilire contatti autentici. L'amore è sempre fallimento."),
    mc("pv16", "Poetica", "Qual è il modello del verso-frase pavesiano?",
      ["La poesia ermetica italiana", "Il sonetto petrarchesco", "La poesia narrativa americana (Whitman, Lee Masters)", "La canzone leopardiana"],
      2, "Il modello del verso-frase è la poesia narrativa americana che Pavese traduceva: Walt Whitman ed Edgar Lee Masters."),
    tf("pv17", "Poetica", "La poetica di Pavese si oppone all'essenzialità della parola ermetica.",
      true, "Vero. Mentre gli ermetici riducono la parola all'essenziale, Pavese la distende nel racconto: il verso-frase è anti-ermetico."),
    mc("pv18", "Poetica", "Quale disciplina illumina la solitudine pavesiana e l'analisi di sé nel diario?",
      ["La sociologia", "La psicanalisi di Freud", "L'economia", "La teologia"],
      1, "La psicanalisi freudiana illumina la solitudine pavesiana, il rapporto difficile con le donne e l'analisi spietata di sé nel Mestiere di vivere."),

    /* ── OPERE ── */
    mc("pv19", "Opere", "Qual è il capolavoro-testamento di Pavese?",
      ["Paesi tuoi", "Lavorare stanca", "La luna e i falò (1950)", "La casa in collina"],
      2, "La luna e i falò (1950), pubblicato pochi mesi prima del suicidio, è il capolavoro-testamento e la sintesi di tutta la poetica di Pavese."),
    mc("pv20", "Opere", "Chi è il protagonista de La luna e i falò?",
      ["Corrado, intellettuale", "Anguilla, trovatello tornato dall'America", "Berto, meccanico", "Talino, contadino"],
      1, "Anguilla è un trovatello cresciuto nelle Langhe ed emigrato in America, che torna al paese in cerca delle proprie radici mitiche e trova solo morte."),
    mc("pv21", "Opere", "Cos'è Lavorare stanca (1936)?",
      ["Un romanzo", "Una raccolta di poesie col verso-frase", "Un diario", "Un saggio"],
      1, "Lavorare stanca (1936) è la raccolta di poesie in forma di poemetti narrativi, che inaugura il verso-frase in piena epoca ermetica."),
    mc("pv22", "Opere", "Cosa racconta La casa in collina (1949)?",
      ["La guerra partigiana vista da un intellettuale che non riesce a schierarsi", "L'emigrazione in America", "La vita di fabbrica", "Una storia d'amore felice"],
      0, "La casa in collina racconta la guerra partigiana vista da Corrado, intellettuale che si rifugia sulle colline e non riesce a prendere parte: «ogni guerra è una guerra civile»."),
    mc("pv23", "Opere", "Cos'è Il mestiere di vivere?",
      ["Un romanzo sulla fabbrica", "Il diario intimo (1935–1950), pubblicato postumo", "Una raccolta di miti greci", "Un manuale di scrittura"],
      1, "Il mestiere di vivere è il diario intimo tenuto da Pavese dal 1935 al 1950 e pubblicato postumo nel 1952: analisi lucidissima della propria psicologia."),
    tf("pv24", "Opere", "I Dialoghi con Leucò (1947) sono reinterpretazioni dei miti greci in forma di dialogo.",
      true, "Vero. Nei Dialoghi con Leucò Pavese sviluppa la sua concezione del mito attraverso dialoghi tra figure della mitologia classica."),
    mc("pv25", "Opere", "In Paesi tuoi (1941), come viene rappresentata la campagna?",
      ["Come idillio bucolico", "Come spazio arcaico e feroce, dominato dalla violenza", "Come luogo di villeggiatura", "Come fabbrica a cielo aperto"],
      1, "In Paesi tuoi la campagna delle Langhe non è idillio ma spazio arcaico e feroce: Talino uccide la sorella con un tridente. Il mito è anche forza oscura e violenta."),

    /* ── TESTI ── */
    mc("pv26", "Testi", "Perché Anguilla torna nelle Langhe?",
      ["Per rivedere la famiglia", "Per «vedere com'è, toccare» — verificare se il mito corrisponde alla realtà", "Per vendere la terra", "Per nascondersi"],
      1, "Anguilla torna per verificare: «non si torna per sentimentalismo, si torna perché si vuol vedere com'è, si vuol toccare». Ma il mito non coincide con la realtà."),
    mc("pv27", "Testi", "Cosa simboleggiano «la luna e i falò»?",
      ["Due personaggi", "La luna è il ciclo cosmico eterno/mito; i falò sono il rito contadino e l'identità del luogo", "Il giorno e la notte", "L'amore e l'odio"],
      1, "La luna rappresenta il ciclo cosmico eterno, il mito immutabile; i falò sono i fuochi rituali dei contadini, segno dell'identità sacra del luogo, ora perduta."),
    mc("pv28", "Testi", "In «Verrà la morte e avrà i tuoi occhi», cosa si fonde?",
      ["Campagna e città", "Amore e morte in un'unica immagine", "Passato e futuro", "Mito e storia"],
      1, "Nella poesia, la morte avrà gli occhi della donna amata: amore e morte si fondono. Scritta pochi mesi prima del suicidio, è quasi una profezia autobiografica."),
    tf("pv29", "Testi", "L'incipit de La luna e i falò rivela che Anguilla è un trovatello senza radici biologiche.",
      true, "Vero. Anguilla non sa dove sia nato, non ha casa né terra né tombe di famiglia: le sue radici sono psicologiche e mitiche, non di sangue."),

    /* ── CONFRONTI ── */
    mc("pv30", "Confronti", "In che rapporto è Pavese con il Neorealismo?",
      ["Lo rifiuta totalmente", "È dentro e oltre: usa i temi neorealisti ma li trasfigura nel mito", "Non lo conosce", "Ne è il fondatore unico"],
      1, "Pavese è dentro e oltre il Neorealismo: usa i temi (guerra, campagna, popolo) ma li trasfigura nel mito. La storia entra nel paesaggio sacro e lo profana."),
    mc("pv31", "Confronti", "Qual è la differenza tra l'inetto di Pavese e quello di Svevo?",
      ["Non c'è differenza", "L'inetto pavesiano è solitario e tragico; quello sveviano è ironico e autoconsapevole", "Pavese non ha personaggi inetti", "Svevo è più tragico"],
      1, "Entrambi raccontano l'uomo incapace di vivere pienamente, ma in Svevo è la nevrosi borghese analizzata con ironia; in Pavese è la solitudine tragica, senza riscatto."),
    open("pv32", "Confronti", "Spiega perché La luna e i falò è insieme realismo e mito.",
      "La luna e i falò usa i materiali del Neorealismo (la Resistenza, le fucilazioni, la campagna, il popolo) ma li trasfigura nel mito: le Langhe sono paesaggio sacro e archetipico. La storia (la guerra civile, la morte di Santa bruciata in un falò) irrompe nel mito e lo profana. Realtà e mito coesistono.",
      ["realismo", "mito", "Resistenza", "falò", "Langhe", "Anguilla"])

  ];
})();
