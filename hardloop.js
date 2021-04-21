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



// 02

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


// 03
console.log("Exo 03 a finir");




let entierTrois = entierAleatoireTrois(50, 200);


function entierAleatoireTrois(min, max) {

    let resultat = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultat;
};


for (let i = 0; i <= 50; i++) {
    hasard = entierAleatoireTrois(50, 200);
    numbers.push(hasard)
};

numbers.sort((a,b) => a - b)
console.log(numbers);



console.log(numbers[0])



// 04 Nested Loop

console.log("Exo 04");


let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let arrayWords =[];
let compte = 0;


for (let i = 0; i <= words.length - 1; i++) {

    arrayWords = words[i].split(" ").join("").split(""); 

    console.log(arrayWords);

    for (let j = 0; j <= arrayWords.length -1; j++) {

        if (arrayWords[j] == "o") {
            compte = compte + 1
        }
    }

};    

console.log("final result", compte);

console.log()