
//01 CALCULATOR //

/*let arguments = process.argv.slice(2);
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
console.log(resultat)*/


// 02 Table

let arguments = process.argv.slice(2);


function multiply(numEntier) {
    let limit = 10;
    let total = 0;
    for (var i = 1; i <= limit; i++) {
        total = i*numEntier;
        console.log(total + " = " + numEntier + " x " + i);
    }
    
    return total
   
}


/*if (process.argv.length === 3) {

    let numEntier = parseInt(arguments[0]);
    let total = multiply (numEntier);

} else  {

    console.log("error");


}*/

//console.log(multiply)

let numEntier = parseInt(arguments[0]);
let total = multiply (numEntier);


// 03  Table