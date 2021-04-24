let prompt = require("prompt");
const NB_MAX_TENTATIVES = 8;
let nbTentative = 0;
let mysteryNum = 0;

prompt.start();  // démarre le prompt


function generateRamdomNumber() {
    return Math.floor(Math.random() * 100 + 1);
};

mysteryNum = generateRamdomNumber();
//console.log("Mystery=", mysteryNum);

function restart() {
    let properties = {
        name: "restart",
        description: "Et MOULE À GAUFRES tu veux recommencer (y/n) ?"
    };

    nbTentative = 0;
    mysteryNum = generateRamdomNumber();

    



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
            name: "nombre",
            description: "Quel est le nombre mystère ?"
        };

    let callback = function (error, result) {
        nbTentative++;
        console.log("c'est la tentative " + nbTentative + " / 8");

        let tentative = parseInt(result.nombre);

        if (isNaN(tentative)) {
            console.log("error not a number ^^");
            play();
        }

        if (nbTentative > NB_MAX_TENTATIVES - 1) {
            console.log("MOULE À GAUFRES ECTOPLASME CATACHRÈSE");
            restart();
            return;
        }

        if (tentative === mysteryNum) {
            console.log("Bravo !!!!!");
            restart()
            return;
        }

        if (tentative < mysteryNum) {
            console.log("C'est plus !");
            play();
        }

        if (tentative > mysteryNum) {
            console.log("C'est moins !")
            play();
        }

    }

    prompt.get(properties, callback);
}

play();




/*function play() {

    prompt.get(

        {
            name: "numUser",
            description: "Quel est le nombre mystère ?",
            // validator: /^[1-9][0-9]?$|^100$/g // pattern regex number from 1 to 100
        },

        function (err, res) {


            if (res.numUser.search(/^[1-9][0-9]?$|^100$/g) === -1) {
                err = "The value is not a number between 1 and 100";
            }

            // encore une validation, si ça marche pas j'enregistre dans err le message

            if (err) {
                console.log("Error in the input: ", err);

                // console.log(1)

                play();

                return;
            }

            if (res.numUser < mysteryNum) {
                console.log("C'est plus !")
                play();
            } else if (res.numUser > mysteryNum) {
                console.log("C'est moins !")
                play();
            // } else if (res.numUser== mysteryNum) {
            } else {
                // console.log(3)

                console.log("Bravo!!!!")
            }

        }
    )

}*/