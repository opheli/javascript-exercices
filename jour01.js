//01 Hello Word

console.log ("Hello Word !") 

//02 String

var test;

test = "My name is Ophélie";

console.log (test) 

//03 Concatennation
var name;

name = "Ophélie";

console.log ("Nice to meet you " + name)


//04 String Length

var test;

test = "I'm very long !";

console.log (test.length)



//05 Replace

var food = "croissant in meh";

newFood = food.replace("meh", "sogood");

console.log (newFood);
 

//06 Up and Down

var basic = "This is Cool"

var basicUpperCase = basic.toUpperCase();
var basicLowerCase = basic.toLowerCase();

console.log (basicUpperCase);
console.log (basicLowerCase);

//07 Split

var word = "banana"
var letters = word.split("")

console.log (letters)

//08 Template

var age = "33";

console.log(`I'm ${age} years old for a long time`);


//10 Includes


var phrase1 = "casse toi pov'con"; // pour cette phrase, vous devez écrire "false"
var phrase2 = "bisou mon chéri"; // pour cette phrase, vous devez écrire "true"

var bisou = "bisou";

var phrase1Includes = phrase1.includes(bisou);
var phrase2Includes = phrase2.includes(bisou);

console.log(phrase1Includes, phrase2Includes)

