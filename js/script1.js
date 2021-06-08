
var arrayCampo = []

while (arrayCampo.length < (100 - 16)) {
    var NumR = ramdomNum(1,100)
    if (!arrayCampo.includes(NumR)) {
        arrayCampo.push(NumR)
    }
}

console.log(arrayCampo);
























// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}