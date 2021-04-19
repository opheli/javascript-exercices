// 01 Objet

console.log("Exo 01");

let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};

console.log(cat["age"]);

console.log();


console.log("Exo 01-02");

let cat3 = {
    name: "Garfield",
    age: 3,
    isCute: true
};

if (cat3["isCute"] === true) {
    console.log("So cute !");
} else {
    console.log("Oups");
}


console.log();



// 02 Combine

console.log("Exo 02");

let cat2 = {
    name: "Garfield",
    age: 3,
    isCute: true
};

let cat4 = {
    name: "Lucifer",
    age: 5,
    isCute: false
};

let cats = [cat2, cat4];

console.log(cat2["isCute"]);
console.log(cat2.isCute);



console.log();

// 03 Even

console.log("Exo 03");

function checkIfEven(num) {

    let resultat = 0;

    if (resultat = num % 2 === 0) {
        console.log("even");

    } else {
        console.log("odd");

    }
    return resultat;
};

console.log(checkIfEven(15))

console.log();


// 04 Compare

console.log("Exo 04");



function compare(num1, num2) {


    if (num1 > num2) {
        console.log (num1 +" is bigger");

    } else if (num1 < num2) {

        console.log (num2 +" is bigger");

    } else {

        console.log("both are the same");

    }
}

        console.log (compare(15,15));



    console.log();



    // 05 - add Up

    console.log("Exo 05");

    var total = 0;
    var limit = 12;

    for (var i = 0; i <= limit; i++) {
    
    total += i;

    console.log("total partiel:", total);
    }

    console.log(total);

    console.log();