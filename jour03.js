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


console.log("chair");

var objects = ["pen", "book", "lamp"];
objects.unshift ("chair")
console.table(objects);
console.log();


console.log("lamp");

var objects = ["pen", "book", "lamp"];
objects.unshift ("chair")
objects.pop ()
console.table(objects);
console.log();


console.log("laptop");

var objects = ["pen", "book", "lamp"];
objects.unshift ("chair")
objects.pop ()
objects.push ("laptop")
console.table(objects);
console.log();


console.log("chair2");

var objects = ["pen", "book", "lamp"];
objects.unshift ("chair")
objects.pop ()
objects.push ("laptop")
objects.shift ()
console.table(objects);
console.log();