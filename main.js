/* Scrivi un programma che stampi i numeri da 1 a 100,
 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz
. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/* strumenti da usare
* for (come ciclo di incremento)
* if, else if, else per verificare le condizioni da soddisfare
* console.log per stampare i vari risultati
*/

// Ciclo che va da 1 a 100 
for (let i = 1; i <= 100; i++) {
    // Verifico se i è un multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        // Se sì, stampa "FizzBuzz"
        console.log("FizzBuzz");
    }
    // Altrimenti, verifica se i è un multiplo di 3, stampa fizz
    else if (i % 3 === 0) {
        // Se sì, stampa "Fizz"
        console.log("Fizz");
    }
    // Altrimenti, verifica se i è un multiplo di 5, stampa buzz
    else if (i % 5 === 0) {
        // Se sì, stampa "Buzz"
        console.log("Buzz");
    } 

    // Se non è nessuno dei precedenti stampa i
    else {
        // Stampa il numero i
        console.log(i);
    }
}

