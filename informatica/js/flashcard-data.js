/* =========================================================================
   flashcard-data.js — Flashcard Informatica · 6 moduli · 15 carte ciascuno
   ========================================================================= */

window.flashcardData = {

  /* ──────────────────────────────────────────────────────────
     MODULO 1 — Basi di Dati e Algebra Relazionale
  ────────────────────────────────────────────────────────── */
  "basi-di-dati": [
    { fronte: "Cos'è un DBMS?",
      retro: "Database Management System: sistema software per creare, organizzare e interrogare basi di dati. Funzioni principali: definizione dati, manipolazione, controllo accessi, garanzia integrità, gestione transazioni." },
    { fronte: "Differenza tra sistema informatico e sistema informativo",
      retro: "Sistema informativo: insieme di risorse (umane, tecnologiche, organizzative) per gestire informazioni. Sistema informatico: la componente tecnologica (HW + SW) del sistema informativo." },
    { fronte: "Architettura ANSI/SPARC — i tre livelli",
      retro: "1. Livello esterno (viste utente). 2. Livello logico/concettuale (schema globale). 3. Livello fisico/interno (memorizzazione effettiva su disco)." },
    { fronte: "Cos'è una superchiave?",
      retro: "Insieme di uno o più attributi che identifica univocamente ogni tupla di una relazione. Ogni chiave primaria è superchiave, ma non viceversa." },
    { fronte: "Differenza tra chiave candidata e chiave primaria",
      retro: "Chiave candidata: superchiave minimale (non contiene attributi in eccesso). Chiave primaria: la chiave candidata scelta come identificatore principale — non può essere NULL." },
    { fronte: "Cos'è una chiave esterna (foreign key)?",
      retro: "Attributo (o insieme di attributi) che referenzia la chiave primaria di un'altra relazione, garantendo l'integrità referenziale tra tabelle." },
    { fronte: "Vincolo di integrità referenziale",
      retro: "I valori di una chiave esterna devono essere presenti come chiave primaria nella tabella referenziata, oppure essere NULL (se ammesso)." },
    { fronte: "Cosa rappresenta NULL in un database?",
      retro: "Valore speciale che indica assenza di informazione o valore sconosciuto. NON è zero, né stringa vuota. Trattato in modo speciale nelle query (IS NULL / IS NOT NULL)." },
    { fronte: "Grado e cardinalità di una relazione",
      retro: "Grado = numero di attributi (colonne). Cardinalità = numero di tuple (righe). Lo schema è fisso, l'istanza (cardinalità) cambia nel tempo." },
    { fronte: "Differenza tra selezione e proiezione (algebra relazionale)",
      retro: "Selezione (σ): filtra le righe secondo una condizione — riduzione orizzontale. Proiezione (π): seleziona le colonne — riduzione verticale." },
    { fronte: "Operatori insiemistici dell'algebra relazionale",
      retro: "Unione (∪), Intersezione (∩), Differenza (−), Prodotto cartesiano (×). Le relazioni devono essere compatibili (stesso schema) per ∪, ∩, −." },
    { fronte: "Cos'è il join naturale?",
      retro: "Combina due relazioni sugli attributi con lo stesso nome e stesso dominio, eliminando le copie duplicate degli attributi di giunzione." },
    { fronte: "Vincolo di dominio",
      retro: "Specifica i valori ammissibili per un attributo: tipo di dato (INT, VARCHAR…), range, CHECK constraint. Prima linea di difesa dell'integrità dei dati." },
    { fronte: "Regola CASCADE nelle foreign key",
      retro: "Quando si elimina/modifica un record padre, le modifiche si propagano automaticamente ai record figli. Alternativa: RESTRICT (blocca), SET NULL, SET DEFAULT." },
    { fronte: "Schema vs istanza di una relazione",
      retro: "Schema: struttura fissa — nome della relazione + lista attributi + domini. È invariante nel tempo. Istanza: il contenuto attuale (insieme di tuple). Cambia con INSERT, UPDATE, DELETE." }
  ],

  /* ──────────────────────────────────────────────────────────
     MODULO 2 — PHP lato server
  ────────────────────────────────────────────────────────── */
  "php": [
    { fronte: "Differenza GET e POST in PHP",
      retro: "GET: dati nell'URL, visibili, max ~2 KB, idempotente — per lettura. POST: dati nel body HTTP, invisibili nell'URL — per invio/modifica di dati sensibili o grandi." },
    { fronte: "Cos'è una sessione PHP?",
      retro: "Meccanismo per mantenere dati tra richieste HTTP successive. I dati sono sul server, identificati da un session_id inviato al client tramite cookie. Si avvia con session_start()." },
    { fronte: "Differenza tra cookie e sessione",
      retro: "Cookie: dati memorizzati sul client, possono essere persistenti, max ~4 KB. Sessione: dati sul server, temporanei (scadono alla chiusura del browser o per timeout)." },
    { fronte: "Variabili superglobali PHP — principali",
      retro: "$_GET, $_POST, $_SESSION, $_COOKIE, $_FILES, $_SERVER, $GLOBALS, $_REQUEST, $_ENV. Accessibili in qualsiasi scope senza dichiarare global." },
    { fronte: "password_hash() e password_verify()",
      retro: "password_hash($pwd, PASSWORD_BCRYPT): genera hash sicuro con salt automatico. password_verify($pwd, $hash): confronta una password con il suo hash in modo sicuro contro timing attack." },
    { fronte: "Array associativi in PHP",
      retro: "Array con chiavi stringa invece di indici numerici: $user = ['nome' => 'Mario', 'eta' => 20]. Si accede con $user['nome']. Si itera con foreach ($arr as $key => $value)." },
    { fronte: "Ciclo foreach in PHP",
      retro: "foreach ($array as $value) — itera sui valori. foreach ($array as $key => $value) — itera su chiave e valore. Ideale per array indicizzati e associativi." },
    { fronte: "include vs require in PHP",
      retro: "include: include il file, genera WARNING se non trovato (script continua). require: genera FATAL ERROR se non trovato (script si blocca). Le versioni _once evitano inclusioni duplicate." },
    { fronte: "Connessione a MySQL con MySQLi in PHP",
      retro: "mysqli_connect($host, $user, $pwd, $db) oppure new mysqli(). Poi mysqli_query() per le query, mysqli_fetch_assoc() per leggere i risultati, mysqli_close() per chiudere." },
    { fronte: "json_encode() e json_decode() in PHP",
      retro: "json_encode($array): converte array/oggetto PHP in stringa JSON. json_decode($str, true): converte JSON in array associativo PHP (false → oggetto stdClass)." },
    { fronte: "Scope delle variabili in PHP",
      retro: "Le variabili dentro le funzioni sono locali. Per usare una variabile globale dentro una funzione: dichiarare global $var oppure usare $GLOBALS['var']." },
    { fronte: "Gestione file in PHP",
      retro: "fopen(), fread()/fgets(), fwrite(), fclose() per accesso sequenziale. file_get_contents() e file_put_contents() per operazioni semplici su intero file." },
    { fronte: "Espressioni regolari in PHP",
      retro: "preg_match('/pattern/', $str): verifica corrispondenza. preg_replace(): sostituisce. preg_split(): divide stringa. Usa sintassi PCRE con delimitatori (es. /^\\d{3}$/)." },
    { fronte: "Operatore ternario in PHP",
      retro: "$result = ($condizione) ? $valoreSe : $valoreAltrimenti; Forma breve (Elvis): $a ?: $b — restituisce $a se truthy, altrimenti $b." },
    { fronte: "Funzione header() in PHP",
      retro: "Invia un header HTTP prima dell'output. Usi comuni: header('Location: pagina.php') per redirect, header('Content-Type: application/json') per risposte JSON." }
  ],

  /* ──────────────────────────────────────────────────────────
     MODULO 3 — JavaScript lato client
  ────────────────────────────────────────────────────────── */
  "javascript": [
    { fronte: "Cos'è il DOM?",
      retro: "Document Object Model: rappresentazione ad albero della pagina HTML manipolabile via JavaScript. Ogni elemento HTML è un nodo. Modificare il DOM cambia la pagina in tempo reale." },
    { fronte: "JSON.parse() vs JSON.stringify()",
      retro: "JSON.parse(str): converte stringa JSON → oggetto/array JavaScript. JSON.stringify(obj): converte oggetto/array JavaScript → stringa JSON. Usati per scambiare dati con il server." },
    { fronte: "Cos'è XMLHttpRequest?",
      retro: "Oggetto JavaScript per fare richieste HTTP asincrone al server senza ricaricare la pagina. Base tecnica di AJAX. Oggi spesso sostituito dalla Fetch API." },
    { fronte: "Differenza tra var, let e const",
      retro: "var: scope di funzione, hoisting. let: scope di blocco ({}), no hoisting — preferito per variabili che cambiano. const: scope di blocco, non riassegnabile — preferito per costanti." },
    { fronte: "Event bubbling in JavaScript",
      retro: "Quando un evento si verifica su un elemento, si propaga (bubble) verso i genitori nel DOM. Si ferma con event.stopPropagation(). Utile per la delegazione degli eventi." },
    { fronte: "Metodi di selezione DOM — principali",
      retro: "getElementById('id'): un elemento per ID. querySelector('selettore CSS'): primo elemento. querySelectorAll(): NodeList di tutti. getElementsByClassName(), getElementsByTagName()." },
    { fronte: "innerHTML vs textContent",
      retro: "innerHTML: imposta/legge HTML (interpreta tag, rischio XSS se contiene input utente). textContent: solo testo, più sicuro, non interpreta HTML." },
    { fronte: "addEventListener",
      retro: "elemento.addEventListener('evento', funzione, useCapture). Permette più handler per lo stesso evento. Preferito a onclick= perché non sovrascrive handler esistenti." },
    { fronte: "DOMContentLoaded vs window.onload",
      retro: "DOMContentLoaded: DOM completamente costruito (senza immagini/CSS). window.onload: tutto caricato incluse risorse esterne. Usare DOMContentLoaded per la maggior parte dei casi." },
    { fronte: "createElement e appendChild",
      retro: "createElement('tag') crea un nodo HTML. appendChild(nodo) lo aggiunge al DOM come ultimo figlio. removeChild(nodo) lo rimuove. insertBefore() per inserzioni precise." },
    { fronte: "Cos'è una closure?",
      retro: "Funzione che mantiene accesso alle variabili dello scope esterno anche dopo che la funzione esterna è terminata. Usata per dati privati e factory functions." },
    { fronte: "Cos'è AJAX?",
      retro: "Asynchronous JavaScript And XML: tecnica per aggiornare parti di una pagina senza ricaricarla, tramite richieste HTTP asincrone. Oggi si usa JSON invece di XML." },
    { fronte: "Validazione form lato client",
      retro: "Controllo degli input prima dell'invio con JavaScript (required, pattern, min/max, custom logic). Migliora UX ma NON garantisce sicurezza — serve sempre validazione server-side." },
    { fronte: "Costruzione dinamica tabella HTML",
      retro: "Creare table > tbody con createElement. Iterare i dati con for/forEach, creare tr e td per ogni riga, inserire dati con textContent, appendChild la riga al tbody." },
    { fronte: "Funzioni freccia (arrow functions)",
      retro: "Sintassi breve: const fn = (param) => espressione. Non hanno il proprio this — lo ereditano dallo scope esterno. Ideale per callback brevi." }
  ],

  /* ──────────────────────────────────────────────────────────
     MODULO 4 — SQL
  ────────────────────────────────────────────────────────── */
  "sql": [
    { fronte: "Differenza DDL e DML in SQL",
      retro: "DDL (Data Definition Language): definisce la struttura — CREATE, ALTER, DROP, TRUNCATE. DML (Data Manipulation Language): manipola i dati — SELECT, INSERT, UPDATE, DELETE." },
    { fronte: "Differenza WHERE e HAVING",
      retro: "WHERE filtra le singole righe PRIMA del raggruppamento (GROUP BY). HAVING filtra i gruppi DOPO il raggruppamento. WHERE non può usare funzioni di aggregazione, HAVING sì." },
    { fronte: "INNER JOIN vs LEFT JOIN",
      retro: "INNER JOIN: restituisce solo le righe con corrispondenza in entrambe le tabelle. LEFT JOIN: tutte le righe della tabella sinistra + NULL dove non c'è corrispondenza a destra." },
    { fronte: "Funzioni di aggregazione SQL",
      retro: "COUNT(*): conta righe. SUM(col): somma. AVG(col): media. MAX(col)/MIN(col): massimo/minimo. Si usano con SELECT e opzionalmente GROUP BY." },
    { fronte: "Subquery correlata",
      retro: "Subquery che fa riferimento a colonne della query esterna. Viene eseguita una volta per ogni riga della query esterna — più lenta ma più flessibile." },
    { fronte: "DISTINCT in SQL",
      retro: "Elimina le righe duplicate dal risultato: SELECT DISTINCT colonna FROM tabella. Utile per ottenere valori unici. Lavora sull'intera riga selezionata." },
    { fronte: "Cos'è una VIEW?",
      retro: "Tabella virtuale definita da una query SQL salvata. Non contiene dati fisici: li calcola ogni volta che viene interrogata. Semplifica query complesse e aumenta la sicurezza." },
    { fronte: "Cos'è un trigger?",
      retro: "Procedura automatica eseguita BEFORE o AFTER un evento DML (INSERT, UPDATE, DELETE) su una tabella. Usata per audit, validazione dati o mantenimento di coerenza." },
    { fronte: "TRUNCATE vs DELETE",
      retro: "DELETE: rimuove righe una per una (con WHERE possibile, loggabile, può fare ROLLBACK). TRUNCATE: svuota tutta la tabella, più veloce, non loggabile riga per riga, azzera AUTO_INCREMENT." },
    { fronte: "ON DUPLICATE KEY UPDATE",
      retro: "Istruzione MySQL: se INSERT viola una chiave univoca, esegue UPDATE al posto dell'errore. Utile per operazioni 'upsert' (insert OR update)." },
    { fronte: "UNION vs UNION ALL",
      retro: "UNION: combina risultati di due SELECT eliminando i duplicati (più lento). UNION ALL: combina tutti i risultati inclusi i duplicati (più veloce). Le SELECT devono avere stesso numero e tipo di colonne." },
    { fronte: "GROUP BY in SQL",
      retro: "Raggruppa le righe con lo stesso valore nelle colonne specificate. Ogni gruppo produce una sola riga nel risultato. Usato con funzioni di aggregazione come COUNT, SUM, AVG." },
    { fronte: "DATE_FORMAT() in MySQL",
      retro: "DATE_FORMAT(data, formato): formatta una data. Esempi: DATE_FORMAT(NOW(), '%d/%m/%Y') → '01/06/2026'. Formati: %Y anno, %m mese, %d giorno, %H ora, %i minuti." },
    { fronte: "Cos'è una stored procedure?",
      retro: "Blocco di istruzioni SQL salvato sul server con un nome. Eseguibile con CALL nomeProcedura(). Accetta parametri IN/OUT. Migliora performance (precompilata) e sicurezza." },
    { fronte: "Indici in MySQL",
      retro: "Strutture che velocizzano la ricerca di dati (come l'indice di un libro). Creati automaticamente su PRIMARY KEY e FOREIGN KEY. Manualmente con CREATE INDEX. Rallentano INSERT/UPDATE." }
  ],

  /* ──────────────────────────────────────────────────────────
     MODULO 5 — Applicazioni Web Integrate
  ────────────────────────────────────────────────────────── */
  "applicazioni-web": [
    { fronte: "Stack tecnologico app web dinamiche",
      retro: "HTML/CSS (presentazione) + JavaScript (logica client) + PHP (logica server) + MySQL (database). Comunicazione tra client e server via AJAX, dati in formato JSON." },
    { fronte: "Ciclo di vita di una richiesta AJAX",
      retro: "1. JS crea XMLHttpRequest o fetch(). 2. Invia richiesta HTTP al server (GET o POST). 3. PHP elabora e risponde con JSON. 4. JS riceve risposta. 5. Aggiorna il DOM senza ricaricare." },
    { fronte: "SQL Injection — cos'è e come prevenirla",
      retro: "Attacco che inserisce codice SQL malevolo nei parametri di una query. Prevenzione: PREPARED STATEMENTS in MySQLi (bind_param) o PDO. Mai concatenare input utente in SQL." },
    { fronte: "Cross-Site Scripting (XSS)",
      retro: "Attacco che inietta JavaScript malevolo nella pagina vista da altri utenti. Prevenzione PHP: htmlspecialchars() prima di stampare input utente. Lato JS: textContent invece di innerHTML." },
    { fronte: "Come PHP risponde con JSON",
      retro: "header('Content-Type: application/json'); echo json_encode($array); exit; — Imposta il tipo di risposta, serializza l'array PHP in JSON e termina lo script." },
    { fronte: "Cos'è il CRUD?",
      retro: "Create, Read, Update, Delete — le quattro operazioni fondamentali su qualsiasi risorsa. Mappano su: INSERT, SELECT, UPDATE, DELETE in SQL e POST, GET, PUT/PATCH, DELETE in REST." },
    { fronte: "Vantaggi dell'uso di viste SQL in un'app web",
      retro: "Semplificano le query PHP (SELECT su vista invece di JOIN complessi), nascondono la struttura interna, migliorano sicurezza (esponi solo dati necessari) e manutenibilità." },
    { fronte: "Session hijacking — cos'è e prevenzione",
      retro: "Furto del session_id per impersonare un utente. Prevenzione: HTTPS, session_regenerate_id() dopo login, timeout breve di sessione, HttpOnly e Secure sui cookie." },
    { fronte: "Differenza tra elaborazione client-side e server-side",
      retro: "Client-side (JavaScript): elaborazione nel browser, visibile all'utente, veloce ma non sicura. Server-side (PHP): elaborazione sul server, non visibile, sicura, accesso al database." },
    { fronte: "Fasi di sviluppo di un'applicazione web",
      retro: "1. Analisi requisiti. 2. Progettazione (DB, interfaccia, architettura). 3. Sviluppo (PHP + JS + SQL). 4. Test e debug. 5. Deploy. 6. Manutenzione." }
  ],

  /* ──────────────────────────────────────────────────────────
     MODULO 6 — Progettazione concettuale, logica e fisica del DB
  ────────────────────────────────────────────────────────── */
  "progettazione-db": [
    { fronte: "Le tre fasi della progettazione di un DB",
      retro: "1. Concettuale: analisi requisiti + diagramma E/R. 2. Logica: traduzione E/R → schema relazionale (tabelle + chiavi). 3. Fisica: implementazione SQL su MySQL con tipi di dato e indici." },
    { fronte: "Cos'è un'entità debole?",
      retro: "Entità senza attributi sufficienti per identificarsi da sola. Dipende da un'entità forte tramite una relazione identificante. La sua chiave primaria include la PK dell'entità forte." },
    { fronte: "Come si traduce N:N nel modello relazionale",
      retro: "Si crea una tabella di associazione (tabella ponte) con le PK di entrambe le entità come FK. La PK della tabella ponte è la combinazione delle due FK (PK composta)." },
    { fronte: "Prima Forma Normale (1NF)",
      retro: "Ogni attributo deve essere atomico (valore singolo, non divisibile). Nessun gruppo ripetuto. La tabella ha una chiave primaria definita." },
    { fronte: "Seconda Forma Normale (2NF)",
      retro: "Soddisfa 1NF + ogni attributo non-chiave dipende funzionalmente dall'INTERA chiave primaria (nessuna dipendenza parziale). Si applica quando la PK è composta." },
    { fronte: "Terza Forma Normale (3NF)",
      retro: "Soddisfa 2NF + nessun attributo non-chiave dipende transitivamente da un altro attributo non-chiave (nessuna dipendenza transitiva). Elimina ridondanze." },
    { fronte: "Cos'è una dipendenza funzionale?",
      retro: "A → B: il valore di A determina univocamente il valore di B. Se conosco A, conosco B. Fondamentale per identificare le anomalie e normalizzare il database." },
    { fronte: "Generalizzazione ISA",
      retro: "Relazione tra un'entità padre e entità figlie: le figlie 'sono un tipo di' padre (es. Persona ISA Studente/Professore). Le figlie ereditano gli attributi del padre." },
    { fronte: "Anomalie nei database non normalizzati",
      retro: "Inserimento: impossibile inserire dati senza informazioni non pertinenti. Cancellazione: perdita accidentale di dati correlati. Aggiornamento: necessità di modificare righe multiple rischiando inconsistenza." },
    { fronte: "Come si traduce la cardinalità 1:N",
      retro: "La PK dell'entità 'uno' diventa FK (chiave esterna) nell'entità 'molti'. Non si crea tabella aggiuntiva. La FK può avere vincoli NOT NULL o essere nullable (partecipazione opzionale)." },
    { fronte: "Ristrutturazione del diagramma E/R",
      retro: "Passi: 1. Eliminare attributi multivalore (→ nuova entità). 2. Eliminare generalizzazioni (3 strategie: unica tabella, tabella padre+figlie, solo tabelle figlie). 3. Semplificare associazioni complesse." },
    { fronte: "Gerarchia subset vs gerarchia totale",
      retro: "Subset (parziale): non ogni istanza padre ha un'istanza figlia. Totale: ogni istanza padre DEVE essere in almeno una figlia. Esclusiva: ogni istanza è al massimo in una figlia." },
    { fronte: "Cos'è la progettazione fisica?",
      retro: "Traduzione dello schema logico in SQL concreto: scelta tipi di dato (INT vs BIGINT, VARCHAR(n)), vincoli SQL (NOT NULL, UNIQUE, CHECK), CREATE TABLE con FK, indici per ottimizzare le query." },
    { fronte: "Differenza tra schema E/R e schema relazionale",
      retro: "E/R: rappresentazione visuale e concettuale — entità, attributi, associazioni con simboli grafici. Relazionale: tabelle con colonne, tipi di dato, chiavi primarie ed esterne — pronto per SQL." },
    { fronte: "Partecipazione obbligatoria vs opzionale",
      retro: "Obbligatoria: ogni istanza DEVE partecipare all'associazione (FK NOT NULL). Opzionale: può non partecipare (FK ammette NULL). Nel modello E/R si indica con linea doppia (obbligatoria)." }
  ]
};
