// 01 Arrays

console.log("Exo 01");

var fruits = ["mango", "lemon", "blueberry"];

console.log(fruits);
console.table(fruits);

console.log();


// 02 Access

console.log("Exo 02");

var ingredients = ["eggs", "milk", "butter"];

console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

console.log();

// 03 Add and Remove

console.log("Exo 03");

var objects = ["pen", "book", "lamp"];

console.table(objects);
console.log();


console.log("chair");

var objects = ["pen", "book", "lamp"];
objects.unshift("chair")
console.table(objects);
console.log();


console.log("lamp");

var objects = ["pen", "book", "lamp"];
objects.unshift("chair")
objects.pop()
console.table(objects);
console.log();


console.log("laptop");

var objects = ["pen", "book", "lamp"];
objects.unshift("chair")
objects.pop()
objects.push("laptop")
console.table(objects);
console.log();


console.log("chair2");

var objects = ["pen", "book", "lamp"];
objects.unshift("chair")
objects.pop()
objects.push("laptop")
objects.shift()
console.table(objects);
console.log();


// 04 Reverse & Sort

console.log("Exo 04");

var numbers = [4, 10, 8, 12, 6];
console.table(numbers);
console.log();


console.log("inverser");

var numbers = [4, 10, 8, 12, 6];
numbers.reverse()
console.table(numbers);
console.log();


console.log("tri alphanum");

var numbers = [4, 10, 8, 12, 6];
numbers.sort()
console.table(numbers);
console.log();


console.log("tri croissant");

var numbers = [4, 10, 8, 12, 6];
numbers.sort((a, b) => a - b)
console.table(numbers);
console.log();


// 05 Boucle

console.log("Exo 05");

var total = 0;
var limit = 10;

for (var i = 0; i <= limit; i++) {
    total = total + i;

}

console.log(total);

console.log();



// 06 Reverse

console.log("Exo 06");

var sentence = "hello Konexio !";
var result = ''

for (var i = sentence.length - 1; i !== -1; i--) {
    result += sentence.charAt(i)
}

console.log(result)

var result2 = ''

for (var i = 0; i < sentence.length; i++) {
    result2 += sentence.charAt(sentence.length - i - 1)
}

console.log(result2)


// 07 Fizzbuzz

console.log("Exo 07");

var limit = 100;

var three = i / 3;


for (var i = 0; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {

        console.log("fizzbuzz");
    
    } else if (i % 3 === 0 ) {
    
        console.log("fizz")

    } else if (i % 5 === 0 ) {
    
        console.log("buzz")

    } else if (i % 7 === 0 ) {
    
        console.log("")
    
    } else {
    
        console.log(i)
    
    }
    
}

