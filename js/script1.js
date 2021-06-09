document.getElementById('cominciamo').addEventListener('click', function(){
    var difficolta = parseInt(prompt("inserisci la difficoltà, da 1 a 3"));
    while (isNaN(difficolta) || difficolta <= 0 || difficolta > 3)  {
        difficolta = parseInt(prompt("Attenzione! inserisci la difficoltà, da 1 a 3 "));

    }


    var arrayCampo = []

    if (difficolta == 1) {
        document.getElementById('diffic').innerHTML = 'difficolà scelta: FACILE'
        arrayCampo = diff(1,100)
    } else if (difficolta == 2) {
        document.getElementById('diffic').innerHTML = 'difficolà scelta: MEDIA'
        arrayCampo = diff(1,80)
    } else {
        document.getElementById('diffic').innerHTML = 'difficolà scelta: DIFFICILE'
        arrayCampo = diff(1,50)
    }


    console.log(arrayCampo);


    var poolInserito = [];



    var p = 0;
    var semaforo = true;

    while (poolInserito.length < 84 && semaforo == true) {
        var inserito = parseInt(prompt('inserisci un numero da 1 a 100'));
        while (isNaN(inserito) || poolInserito.includes(inserito) || inserito <= 0 ||inserito > 100)  {
            inserito = parseInt(prompt("Attenzione! inserisci un numero da 1 a 100 che non hai già inserito"));
        
        }
        
        if (arrayCampo.includes(inserito)) {
            document.getElementById('finale').innerHTML ='HAI PERSO';
            semaforo = false;
        } else {
            poolInserito.push(inserito);
            document.getElementById('poolnumutente').innerHTML = 'NUMERI VINCENTI: '+ poolInserito + '';
        
        } 
        p++
    }

    if (poolInserito.length == 84) {
        document.getElementById('finale').innerHTML ='HAI VINTO';
    }

    document.getElementById('punteggio').innerHTML ="Punteggio: " + poolInserito.length;


// Funzioni
function ramdomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}

function diff(x,y) {
    while (arrayCampo.length < 16) {
        var numR = ramdomNum(x,y)
        if (!arrayCampo.includes(numR)) {
            arrayCampo.push(numR)
        }
    }
    return arrayCampo;
}

});
