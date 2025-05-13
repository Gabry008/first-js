// Calcolo del prezzo del biglietto del treno

// Obiettivo:

// Scrivere un programma in JavaScript che calcoli il prezzo di un biglietto del treno in base ai chilometri da percorrere e all’età del passeggero, applicando eventuali sconti.

// ⸻

// Regole del calcolo:
//     •    Il prezzo del viaggio è di € 0.21 al km.
//     •    Lo sconto varia in base all’età del passeggero:
//     •    Gli under 18 (fino a 18 anni inclusi) ricevono uno sconto del 20%.
//     •    Gli over 65 (65 anni compresi e oltre) ricevono uno sconto del 40%.
//     •    Per tutti gli altri non ci sono sconti.

// ⸻

// Richieste del programma:
    
// Chiedere all’utente di inserire:
// •    La propria età
// •    Il numero di chilometri da percorrere
// Calcolare il prezzo totale del biglietto:
// •    Applicare eventuali sconti
// •    Approssimare il prezzo per difetto
// Stampare in console il prezzo finale con un messaggio chiaro.

// ⸻

// Suggerimenti tecnici:
//     •    Usa prompt() per richiedere input all’utente
//     •    Ricorda che prompt() restituisce sempre una stringa → convertila in numero
//     •    Usa console.log() per mostrare il risultato


const eta = prompt("inserisci eta")

let km = prompt("inserisci Km")

const prezzoPerKm = 0.21

let prezzoTotale = km*prezzoPerKm

const sconto18 = 20 / 100

const sconto65 = 40 / 100

console.log(prezzoTotale)

if(eta <= 18) {
    prezzoTotale = prezzoTotale - (prezzoTotale*sconto18)
} else if(eta >= 65) {
    prezzoTotale = prezzoTotale - (prezzoTotale*sconto65)
}
console.log(prezzoTotale) 
