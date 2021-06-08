
var arrayCampo = []

while (arrayCampo.length < (100 - 16)) {
    var numR = ramdomNum(1,100)
    if (!arrayCampo.includes(numR)) {
        arrayCampo.push(numR)
    }
}

console.log(arrayCampo);
























// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}