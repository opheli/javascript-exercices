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
      
    if (resultat = num % 2 === 0 ) {
        console.log("even");
    
    } else {   
        console.log("odd");

    }
    return resultat;
};

console.log(checkIfEven(15))

console.log();