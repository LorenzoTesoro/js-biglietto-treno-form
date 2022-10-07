/* Dati richiesti all'utente: */
// 1. Il numero di chilometri da percorrere
let kilometers = document.getElementById("km").value;

// 2. Età del passeggero 
let userAge = document.getElementById("age").value;

/* Calcolo del prezzo, secondo le seguenti regole: */
let price = (kilometers * 0.21);

document.querySelector("button").addEventListener("click", function() {
    console.log(kilometers);
})