# JavaScript - Basi Complete

```javascript
// 1. Hello World
// Stampa "Hello, World!" sullo schermo
console.log("Hello, World!");

// 2. Variabili e Tipi di Dati
// Assegna un valore intero alla variabile x
let x = 10;        // Intero (Number)
// Assegna un valore decimale alla variabile y
let y = 3.14;      // Numero con decimali (Number)
// Assegna una stringa alla variabile z
let z = "Ciao";    // Stringa di testo (String)
// Assegna un valore booleano alla variabile flag
let flag = true;   // Valore booleano (Boolean)

// Stampa tutte le variabili
console.log(x, y, z, flag);


// 3. Operatori
// Operazione di somma tra due numeri
let a = 10;
let b = 3;
console.log(a + b);  // Somma (10 + 3)

// Sottrazione di due numeri
console.log(a - b);  // Sottrazione (10 - 3)

// Moltiplicazione tra due numeri
console.log(a * b);  // Moltiplicazione (10 * 3)

// Divisione tra due numeri
console.log(a / b);  // Divisione (10 / 3)

// Modulo (resto della divisione tra a e b)
console.log(a % b);  // Modulo (resto della divisione)

// Potenza: elevamento di un numero a una potenza
console.log(a ** b); // Potenza (10 elevato a 3)


// 4. Condizioni
// Verifica se x è maggiore di 5, uguale a 5 o minore di 5
let x = 10;
if (x > 5) {  // Se x è maggiore di 5
    console.log("Maggiore di 5");
} else if (x === 5) {  // Se x è uguale a 5
    console.log("Uguale a 5");
} else {  // Se x è minore di 5
    console.log("Minore di 5");
}


// 5. Ciclo For
// Esegue un ciclo da 0 a 4 (range crea una sequenza di numeri)
for (let i = 0; i < 5; i++) {  // Esegui il ciclo 5 volte
    console.log(i);  // Stampa il valore di i (da 0 a 4)
}


// 6. Ciclo While
// Esegue un ciclo finché x è maggiore di 0
let x = 5;
while (x > 0) {  // Finché x è maggiore di 0
    console.log(x);  // Stampa il valore di x
    x--;  // Diminuisce x di 1 ogni volta
}



// 7. Funzioni
// Definisce una funzione che saluta una persona
function saluta(nome) {  // La funzione prende un parametro "nome"
    return `Ciao, ${nome}!`;  // Restituisce un saluto formattato con il nome
}

// Chiamata alla funzione passando "JavaScript" come argomento
console.log(saluta("JavaScript"));


// 8. Oggetti
// Definisce un oggetto con proprietà e metodi
let persona = {
    nome: "Mario",  // Proprietà "nome"
    eta: 30,        // Proprietà "eta"
    descrizione: function() {  // Metodo che restituisce una descrizione della persona
        return `${this.nome} ha ${this.eta} anni.`;
    }
};

// Chiamata al metodo descrizione dell'oggetto persona
console.log(persona.descrizione());


// 9. Gestione degli Errori
// Gestisce un errore di divisione per zero
try {
    // Prova a fare una divisione per zero
    let risultato = 10 / 0;
} catch (error) {  // Se si verifica un errore
    console.log("Errore: divisione per zero!");  // Gestisce l'errore con un messaggio
}


// 10. Leggere e Scrivere File (in Node.js)
// In ambiente browser, JavaScript non può leggere/scrivere file direttamente,
// ma in ambiente Node.js è possibile fare questo tramite il modulo fs.
const fs = require('fs');

// Scrive nel file esempio.txt
fs.writeFileSync("esempio.txt", "Ciao, file!");  // Scrive il testo nel file

// Legge dal file esempio.txt
const data = fs.readFileSync("esempio.txt", "utf8");  // Legge il contenuto del file
console.log(data);  // Stampa il contenuto del file


