// 01 Sum

console.log("Exo 01");


let numbers = [];
let entier = entierAleatoire(0, 100);
let hasard = 0;

function entierAleatoire(min, max) {

    let resultat = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultat;
};


for (let i = 0; i <= 50; i++) {
    hasard = entierAleatoire(0, 100);
    numbers.push(hasard)
  
};

console.log(numbers);


console.log();





console.log("Exo 02");




let entierDeux = entierAleatoireDeux(50, 200);


function entierAleatoireDeux(min, max) {

    let resultat = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultat;
};


for (let i = 0; i <= 50; i++) {
    hasard = entierAleatoireDeux(50, 200);
    numbers.push(hasard)
  
};

console.log(numbers);

numbers.sort((a,b) => b - a)

console.log(numbers[0])