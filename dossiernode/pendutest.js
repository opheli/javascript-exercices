var randomWords = require('random-words');
let prompt = require("prompt");

const NB_MAX_TENTATIVES = 10;
let nbTentative = 0;


prompt.start();


let mysteryWords = randomWords();
//let numberLetters = mysteryWords.length;

//let numberUnderscore = numberLetters*"_";

//console.log('Pendu ', mysteryWords);
//console.log(numberLetters);
let arrayUser = [];
let myArray = mysteryWords.split("");
console.log(mysteryWords);

function restart() {
    let properties = {
        name: "restart",
        description: "Et MOULE À GAUFRES tu veux recommencer (y/n) ?"
    };


    nbTentative = 0;
    arrayUser = [];
    mysteryWords = randomWords();
    myArray = mysteryWords.split("");
    console.log(mysteryWords);
    //numberLetters = mysteryWords.length;


    prompt.get(properties, function (error, result) {
        let response = result.restart;

        if (response === "y") {
            return play();
        } else {
            console.log("bey bey ECTOPLASME")
        }
    });
}


function play() {
    let properties = {
        name: 'lettre',
        description: "quel est la lettre mystère ?"
    };



    let callback = function (error, result) {
        nbTentative++;
        console.log("c'est la tentative " + nbTentative + " / 10");
        arrayUser.push(result.lettre);
        console.log('voici les lettres ', arrayUser);
        if (nbTentative > NB_MAX_TENTATIVES - 1) {
            console.log("You lose");
            restart();
            return;
        }
        
      
        


        let rechercheLetter = myArray.map(function (element) {
            /*if (arrayUser) {
                console.log("Bravo !!!!!");
                restart()
                return;
            }*/
          

            if (arrayUser.indexOf(element) !== -1) {
                return element;

            } else {
                return '_';
            }


        });
        console.log(rechercheLetter);

        play();



    }


    prompt.get(properties, callback);
}

play();


