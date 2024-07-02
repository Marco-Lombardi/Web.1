// console.log("Ciao")

// function capitalizeFirstLetter(string) 
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

const prompt = require('prompt-sync')()

// PRIMO ESERCIZIO

// const str = prompt('Enter a string: ');
// console.log("Hai inserito " + str);
// process.exit(0);

// SECONDO ESERCIZIO

// const sPrimoNumero = prompt("Inserisci primo numero ");
// const sPrimoNum = parseInt(sPrimoNumero);

// const sSecondoNumero = prompt("Inserisci secondo numero ");
// const sSecondoNum = parseInt(sSecondoNumero);

// var SSomma = sPrimoNum + sSecondoNum

// console.log("La somma vale " + SSomma);

//TERZO ESERCIZIO

function VerificaNumero(SNum) {


    for (i = 0; i < SNum.lenght; i++) 
    {
        if ((SNum.charAt(i)) < '0') ((SNum.charAt(i) > '9'))
        return false
    }

}

function parseIntMy(SNum) {

    bEsito = VerificaNumero(SNum)
    {
        if (bEsito == true)
            return parseInt(SNum);
        for (i = 0; i < 3; i++) {
            sNum1 = prompt("Numero errato")
            bEsito = VerificaNumero(sNum1);
            if (bEsito == true)
                return parseInt(SNum1)

        }
    }
}


var bEsito = VerificaNumero(38)

if (bEsito == true)
    console.log("Hai inserito un Numero")

else (bEsito == false)

console.log("Non mi hai passato un numero")

process.exit(0)





























