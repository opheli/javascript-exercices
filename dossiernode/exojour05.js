
//01 CALCULATOR //

let arguments = process.argv.slice(2);
console.table(arguments);

function calculate(num1, num2, operateur) {
    let total = 0
    if (operateur === "+") {
       total = num1 + num2 ;
    }
    else if (operateur === "-") {
       total = num1 - num2 ;
    }
    else if (operateur === "/") {
        total = num1 / num2 ;
    }
    else if (operateur === "x") {
        total = num1*num2;
    }
    return total;
}
let chiffre1 = parseInt(arguments[0])
let chiffre2 = parseInt(arguments[1])
let operateur = arguments[2]
let resultat = calculate(chiffre1, chiffre2, operateur);
console.log(resultat)