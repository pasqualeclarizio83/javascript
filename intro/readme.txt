‘use strict’, può esserti capitato delle volte di averla vista in JavaScript e in questo articolo scopriamo a cosa serve e come funziona.


Partiamo dalle basi: la modalità Strict!
Strict Mode

È una nuova feature introdotta in ECMAScript 5 che permette di impostare la modalità operativa di un programma o di una funziona a livello “restrittivo”.

Sì, tutto molto bello, ma che vuol dire? a che cosa serve e come funziona?

La modalità “strict” permette di evitare che certe azioni vengano eseguite e si vada a limitare la generazione di eccezioni.

Non solo: può aiutarti a gestire non poche altre cose. Per esempio:

    Permette di catturare diversi blooper, così da genere eccezioni specifiche per gestirli.
    Previene la generazione di errori quando vengono eseguite azioni non del tutto sicure (per esempio ottenere l’accesso all’oggetto globale)

Ovviamente, se vuoi approfondire ancora di più l’argomento, ti invito a leggere qui un articolo molto interessante a riguardo.



-------------------------------------------------------------------------------------------------------------------------------------------------

JavaScript moderno supporta le “classi” e i “moduli” – delle strutture avanzate del linguaggio (a cui arriveremo più avanti), che abilitano use strict in automatico. 
Quindi non è necessario inserire la direttiva "use strict" se utilizziamo queste funzionalità.



------------------------------------------------------------------------------------------------------------------------------------------------

Tipologia:

Ci sono 7 tipi base in JavaScript.

    number per numeri di qualsiasi tipo: interi o in virgola mobile.
    bigint viene utilizzato per definire interi di lunghezza arbitraria.
    string per stringhe. Una stringa può contenere uno o più caratteri, non esiste nessun tipo character.
    boolean per true/false.
    null per valori sconosciuti – un valore a parte che contiene solo il valore null.
    undefined per valori non assegnati – un tipo a parte che ha il solo valore undefined.
    object per strutture dati più complesse.
    symbol per identificatori unici.

L’operatore typeof ci consente di vedere quale tipo è memorizzato nella variabile.

    Due forme: typeof x o typeof(x).
    Ritorna una stringa con il nome del tipo, come "string".
    Il valore null ritorna "object" – è un errore del linguaggio, infatti non è un oggetto.


------------------------------------------------------------------------------------------------------------


Funzione che permette di determinare la tipologia di Browser


-----------------------------------------------------------------------------------------------------------

Ci sono funzioni JS che cambiano in base al browser e quindi all'interprete



---------------------------------------------------------------------------------------------------------

IBAB ( In base al Browser in Uso)




