var randomWords = require('random-words');
let prompt = require("prompt");

const NB_MAX_TENTATIVES = 10;
let nbTentative = 0;


prompt.start();


let mysteryWords = randomWords();
let numberLetters = mysteryWords.length;
//let numberUnderscore = numberLetters*"_";

console.log('Pendu ',  mysteryWords);
console.log(numberLetters);

let myArray = mysteryWords.split("");
console.log(myArray);


/*function play() {
    let properties = {
        nombreUnderscore = 
    },

    let callback = function (error, resultat) {

    }

    prompt.get(properties, callback);
}*/

//let numbers = [1, 2, 3, 4, 5];

let doubles = myArray.map(function (num) {
    return "_";
});

console.log(doubles);
