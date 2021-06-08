
var arrayCampo = []

while (arrayCampo.length < 7) {
    var numR = ramdomNum(1,20)
    if (!arrayCampo.includes(numR)) {
        arrayCampo.push(numR)
    }
}

console.log("campo " + arrayCampo);

// var inserito = prompt('inserisci un numero da 1 a 100');
var poolInserito = [];

var p = 0;
var risultato = true;

while (poolInserito.length < 5 && !arrayCampo.includes(inserito)) {
    var inserito = (prompt('inserisci un numero da 1 a 100'));
    while (isNaN(inserito) || poolInserito.includes(inserito))  {
        inserito = (prompt("Attenzione! inserisci un numero da 1 a 100 che non hai già inserito"));
    
    }
    
    p++
}

if (arrayCampo.includes(inserito)) {
    console.log("hai perso");

} else if (!arrayCampo.includes(inserito)) {
    poolInserito.push(inserito);
    console.log(poolInserito);

} else if(poolInserito.length == 5) {
    console.log("Hai Vinto");
}























// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}