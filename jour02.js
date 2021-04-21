// 01 Number

console.log("exo01");

var integer = 102;
var float = 13.9;

console.log(integer);
console.log(float);


// 02 Convert

console.log("exo02");

var basic = 34;
var stringified = "34";

console.log(stringified);


// 03 Round

console.log("exo03");

var num = 1.5;
var rounded = Math.round(1.5);

console.log(rounded);



// 04 Arithmétique

console.log("exo04");

var test = 12;
var bis = 5;

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);
console.log((test + bis)-bis); // pour voir



// 05 Comparaison

console.log("exo05");

var test = 143;
var bis = 219;

console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test >= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);


// 06 Condition

console.log("exo06");

var limit = 50;
var score = 64;

if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}


console.log("exo06score40");

var limit = 50;
var score = 40;

if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}


// 07 Condition II

console.log("exo07");

var password = "azerty";
var passewordLength = password.length

if (passewordLength > 5) {
    console.log("The password is secure");
} else {
    console.log();
}

// 08 Condition III

console.log("exo08");

var password = "azerty";
var passwordLength = password.length;
var limit = 50;
var score = 64;
var phrase;

if (passwordLength > 5 && score >= limit) {
    phrase = "Everything is good";
} else if (passwordLength > 5 || score >= limit) {
    phrase = "Something is good";
} else {
    phrase = "Nothing is good";
} 

console.log(phrase);

// Bonus

console.log("Bonus");

var random = Math.random;
var restultat = Math.round(random*10)

if (resultat === 10) {
    console.log("Yes I win");
} else {
    console.log("So close");
}

// Bonus II

console.log("Bonus II");

var month = "january";

switch (month) {
	case "january" || "february" || "march": 
		console.log("Winter");
		break;
	case "april" || "may" || "june": 
		console.log("Spring");
		break;
	case "july" ||"august" || "september": 
		console.log("Summer");
		break;
	default: 
		console.log("Fall");
}

// Bonus III

console.log("Bonus III");

var roundedNumber = 12.4;
var floorNumber = Math.floor(roundedNumber)
var ceilNumber = Math.ceil(roundedNumber)
var roundNumber = Math.round(roundedNumber)


if (floorNumber === roundNumber) {
    console.log(floorNumber);
} else {
    console.log(ceilNumber);
}

