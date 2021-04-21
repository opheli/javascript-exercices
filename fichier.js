// 01 Alphabet

console.log("Exo 01");



function sortLetters(phrase) {
    let tri = phrase.split('');
    console.log(tri);
    tri = tri.sort().join('');
    return tri;
}
console.log(sortLetters("konexio"));

console.log();

// 02 - XOXO

console.log("Exo 02");

function countEach(mot) {
    console.log("La valeur de mon parametre est " + mot);
    let countO = 0;
    let countX = 0;

    let decoupage = mot.split("");

    for (let i = 0; i < decoupage.length; i++) {
        if (decoupage[i] === "x") {
            countX += 1;
        } else {
            countO += 1;
            // count0++; est équivalent;
        }
    }

    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

console.log(countEach("xoxoxoxo"));

let retour = countEach("xoxoxoxoooo");
console.log(retour);
let retour2 = countEach("xoxoxoxoxxx");
console.log(retour2);
retour2 = countEach("xoxoxoxoxxxxxoxoxoox");
console.log(retour2);



// 03 - Palindrome

console.log("Exo 03 pas la bonne facon");


function checkPal(palindrome) {

    let cut = palindrome.split("").reverse();

    let colle = cut.join();

    return colle;
}

console.log(checkPal("racecar"))
console.log(checkPal("laptop"))



console.log("Exo 03-02");

function checkPalDeux(palindromeDeux) {

    let result = '';

    for (let i = palindromeDeux.length - 1; i !== -1; i--) {
        result += palindromeDeux.charAt(i)
    }
    return result;
}

console.log(checkPalDeux("racecar"))
console.log(checkPalDeux("laptop"))



// Bonus

console.log("Exo Bonus");


function makeItSpongeBob(string) {

    let decoupage = string.split("");
    let upperLower = ""
    //upperLower = upperLower + "s" 
    for (let i = 0; i < decoupage.length; i++) {
        if (i % 2 === 0) {
            upperLower = upperLower + decoupage[i].toUpperCase();
        
        } else {
            upperLower = upperLower + decoupage[i].toLowerCase();

        }
    }
    return upperLower;

}

console.log(makeItSpongeBob("Javascript is easy"));

console.log();




// Bonus II

console.log("Exo Bonus II");

function countEachBonus(mot) {
    console.log("La valeur de mon parametre est " + mot);
    let countO = 0;
    let countX = 0;

    let decoupage = mot.split("");

    for (let i = 0; i < decoupage.length; i++) {
        if (decoupage[i] === "x" || decoupage[i] === "X") {
            countX += 1;
        } else {
            countO += 1;
            // count0++; est équivalent;
        }
    }

    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

console.log(countEachBonus("XoxOxOxo"));











