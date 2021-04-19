// 01 Sommes des carrée

console.log("Exo 01");

let carre = 0;
let total = 0;
let limit = 10;

for (let i = 5; i <= limit; i++) {
    carre = i ** 2;
    total += carre;
    console.log(carre)
}

console.log("total " + total);

console.log();


// 02 Comptons

console.log("Exo 02");

let compte = 0;

for (let i = 100; i <= 1000; i++) {

    if (i % 7 == 0) {
        compte = compte + 1;
    }
};

console.log(compte);

console.log();


// 03 

console.log("Exo 03");

/* let randomNumber = Math.floor(Math.random() * 5)+1;*/

let entier = entierAleatoire(1, 6);
let lance = 0;

function entierAleatoire(min, max) {

    let resultat = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultat;
};




for (let i = 0; i <= 20; i++) {
    let sum = entierAleatoire(1, 6);
    if (sum >= 5) { 
    lance = lance + sum;
    };
};
console.log(entier);


console.log();




