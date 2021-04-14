// correction jour01
/ 01 - Hello World

console.log("Hello World !");

// 02 - String

var test = "My name is Jane";
console.log(test);

// 03 - Concatenation

var name = "Jane";
console.log('Nice to meet you ' + name);

// 04 - String Length

var test = "I'm very long !";
console.log(test.length);

var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

// 06 - Up and Down

var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLocaleLowerCase();

console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 - Split

var word = "banana";
var letters = word.split("");
console.log(letters);

// 08 - Template

var age = "10";
var template = `I'm ${age} years old`;
console.log(template);

// 10 - Includes
var bisou = "bisou";
var phrase1 = "casse toi pov'con"; // pour cette phrase, vous devez écrire "false"
var phrase2 = "bisou mon chérie"; // pour cette phrase, vous devez écrire "true"
var doesPhrase1IncludesBisou = phrase1.includes(bisou);
var doesPhrase2IncludesBisou = phrase2.includes(bisou);

console.log(doesPhrase1IncludesBisou, doesPhrase2IncludesBisou);

// 11 - PadEnd , PadStart
var nombre1 = 11; // Afficher 0011
console.log(nombre1.toString().padStart(4, "0"));
var nombre2 = 999; // Afficher 0999
console.log(nombre2.toString().padStart(4, "0"));
var nombre3 = 2.2; // Afficher 2.20
console.log(nombre3.toString().padEnd(4, "0"));
var nombre4 = 10.9; // Afficher 10.90
console.log(nombre4.toString().padEnd(5, "0"));

// 12 - Cryptographie

// Bonus

var complexString = 'Citation d\aujourd\'hui: \"Le js c\'est cool !\"';
console.log(complexString);

var bonjour = "Bonjour";
console.log(bonjour.replace(/o/g, "a));
```