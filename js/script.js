// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 




// DATI

// prezzo 0.21 € al km
// -20% se < 18 anni 
// -40% se >= 65 anni 



// STRUTTURA LOGICA

// 1. chiedo all'utente quanti km deve percorrere
// 2. calcolo il prezzo del viaggio (n km * 0.21 euro)
// 3. chiedo all'utente quanti anni ha
// 4. se età < di 18 applico sconto 20% ((prezzo viaggio / 100)  * 20) prezzo del viaggio - risultato
// 5. se età >= di 65 applico sconto del 40% ((prezzo viaggio / 100)  * 40) prezzo del viaggio - risultato
// 6. stampo output


// DICHIARAZIONE DEL RISULTATO


const price = 0.21;

const kmNumber = parseInt(prompt("Inserisci quanti km devi percorrere"));
const ageUtent = parseInt(prompt("Inserisci la tua età"));

const kmPrice = kmNumber * price;

const discount20 = kmPrice * 0.2;
const discount40 = kmPrice * 0.4;



let totalPrice = "";
let result = "";


// SE MINORENNE
if (ageUtent < 18) {
    totalPrice = kmPrice - discount20;

    result = `Il costo del tuo viaggio è di ${totalPrice} €`;
}

// SE OVER 65
else if (ageUtent >= 65) {
    totalPrice = kmPrice - discount40;

    result = `Il costo del tuo viaggio è di ${totalPrice} €`;
}

// SE TRA 18 E 65 ANNI
else if (ageUtent >= 18 && ageUtent < 65)

    result = `Il costo del tuo viaggio è di ${kmPrice} €`;


console.log(result)

