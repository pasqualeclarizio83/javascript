# JavaScript - Basi Complete

#### Comprendere bene Javascript
#### E' un linguaggio di programmazione. E' utile per rendere la tua pagina web interattiva

#### Un esempio di pagina web HTML

```python

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>
<body>
    
</body>
</html>

```

[Pagina web](https://github.com/pasqualeclarizio83/javascript/blob/master/index.html)

#### Senza questa pagina HTML, Javascript non ha senso!

#### E' importante anche che il codice Javascript venga inserito in <script> </script>


```python

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imparare JavaScript</title>
</head>
<body>

    <h1>Un esempio</h1>
    <p id="myText">Premi il pulsante per cambiare questo testo.</p>
    <button id="myButton">Clicca qui</button>

    <script>
        // Trova gli elementi nel documento
        const button = document.getElementById("myButton");
        const text = document.getElementById("myText");

        // Aggiungi un evento al pulsante
        button.addEventListener("click", () => {
            text.innerText = "Hai cambiato il testo! 🎉";
        });
    </script>

</body>
</html>

```

#### Un paragrafo (<p>) con un id="myText". L'id è un modo per identificare un elemento univocamente, così possiamo accedervi con JavaScript.

#### Un pulsante (<button>) con un id="myButton". Quando l’utente preme questo pulsante, accade qualcosa.

#### Per fare qualcosa su una pagina HTML con JavaScript, dobbiamo prima trovare gli elementi che ci interessano. In questo caso:

#### const button = document.getElementById("myButton");
#### const text = document.getElementById("myText");

#### document.getElementById("myButton"): Trova l'elemento HTML con l'id "myButton" (il pulsante).
#### document.getElementById("myText"): Trova l'elemento HTML con l'id "myText" (il paragrafo).

#### Aggiungere un evento a un pulsante?

```python
button.addEventListener("click", () => {
    text.innerText = "Hai cambiato il testo! 🎉";
});
```

#### button.addEventListener("click", ...): Aggiunge un ascoltatore di eventi al pulsante. Significa che stiamo dicendo al browser: "Quando questo pulsante viene cliccato, esegui questa funzione".

#### La funzione che viene eseguita è questa:


```python
() => {
    text.innerText = "Hai cambiato il testo! 🎉";
}
```

#### Se fin qui forse non è chiaro. Lo capiremo meglio, in seguito

### JavaScript Basi complete - From A to Z

#### HTML con JAVASCRIPT. E' importante nel Body, inserire <script> </script>

#### Nell'esempio sottostante <script src="script.js"><script>

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>
<body>
    <h1>Guarda la console!</h1>

    <!-- Collega il file JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

[Esempio](https://github.com/pasqualeclarizio83/javascript/blob/master/esempio.html)

#### è importante capire il file "script.js"
#### il file HTML e il file Javascript devono essere collocate nella stessa directory

```python
// Scrive "Hello World" nella console del browser
console.log("Hello World");
```

[Script JS](https://github.com/pasqualeclarizio83/javascript/blob/master/script.js)

#### Nello stesso file, come già descritto e accennato

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>
<body>
	console.log("Ciao Mondo");
</body>
</html>
```

[Esempio 2](https://github.com/pasqualeclarizio83/javascript/blob/master/esempio2.html)

#### Un esempio senza interazione che permette di effettuare dei calcoli
#### Capire e comprendere la funzione.
#### E' implementata la funzione

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imparare JavaScript</title>
</head>
<body>

    <script>
        // Definiamo una funzione chiamata "calcolaDoppio"
        function calcolaDoppio(numero) {
            // Calcola il doppio del numero ricevuto
            let risultato = numero * 2;

            // Ritorna il risultato
            return risultato;
        }

        // Usiamo la funzione
        let numero = 5; // Numero che vogliamo raddoppiare
        let doppio = calcolaDoppio(numero); // Chiamiamo la funzione con il numero 5

        // Mostriamo il risultato nella console
        console.log("Il doppio di " + numero + " è: " + doppio);

    </script>

</body>
</html>
```

#### al posto di console.log
#### possiamo anche mettere ALERT


```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imparare JavaScript</title>
</head>
<body>

    <script>
        // Definiamo una funzione chiamata "calcolaDoppio"
        function calcolaDoppio(numero) {
            // Calcola il doppio del numero ricevuto
            let risultato = numero * 2;

            // Ritorna il risultato
            return risultato;
        }

        // Usiamo la funzione
        let numero = 5; // Numero che vogliamo raddoppiare
        let doppio = calcolaDoppio(numero); // Chiamiamo la funzione con il numero 5

        // Mostriamo il risultato nella console
        alert("Il doppio di " + numero + " è: " + doppio);

    </script>

</body>
</html>
```