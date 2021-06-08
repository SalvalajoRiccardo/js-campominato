
var arrayCampo = []

while (arrayCampo.length < 16) {
    var numR = ramdomNum(1,100)
    if (!arrayCampo.includes(numR)) {
        arrayCampo.push(numR)
    }
}

console.log(arrayCampo);

// var inserito = prompt('inserisci un numero da 1 a 100');
var poolInserito = [];

var p = 0;

while (poolInserito.length < 5) {
    var inserito = prompt('inserisci un numero da 1 a 100');
    if (isNaN(inserito) && arrayCampo.includes(inserito))  {
        inserito = prompt("Attenzione! inserisci un numero da 1 a 100 che non hai già inserito");
    } else {
        poolInserito.push(inserito);
    }
    p++
}

console.log(poolInserito);

















// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}