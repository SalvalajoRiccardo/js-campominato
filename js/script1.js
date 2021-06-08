
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
var semaforo =true
while (poolInserito.length < 84 && semaforo == true) {
    var inserito = parseInt((prompt('inserisci un numero da 1 a 100')));
    while (isNaN(inserito) || poolInserito.includes(inserito))  {
        inserito = parseInt((prompt("Attenzione! inserisci un numero da 1 a 100 che non hai già inserito")));
    
    }
    
    if (arrayCampo.includes(inserito)) {
        console.log("hai perso");
        semaforo = false
    } else {
        poolInserito.push(inserito);
        console.log(poolInserito);
    
    } 
    p++
}

if (poolInserito.length == 84) {
    console.log("hai vinto");
}























// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}