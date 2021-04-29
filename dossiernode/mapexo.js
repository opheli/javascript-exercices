// 02 - Map Double

console.log("Exo 02");

let numbers = [1, 2, 3, 4, 5];

let doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);



// 03 - Map Names

console.log("Exo 03");



let longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];

let shortNames = longNames.map(
    function (element) {
        let total = element.firstName + " " + element.lastName;
        return { name: total };

    });
console.log(shortNames);



//04 - Filter Numbers

console.log('Exo 04');

let array = [1, 'toto', 34, 'javascript', 8];


//let num = [1, 2, 3, 4, 5];

let numbersFilt = array.filter(function (element) {

    return element >= 0 || element <= 0;

});

console.log(numbersFilt);



//05 - Filter Even

console.log('Exo 05');



let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];

let numbersEven = numbersTwo.filter(function (element) {

    return element % 2 === 0;

});

console.log(numbersEven);




//06 - Filter Even

console.log('Exo 06');


let cakes = 
[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];



let chocolateCakes = cakes.filter(function (element) {

    return element.flavor === "chocolate";

});

console.log(chocolateCakes);

let chocolateCakesTwo = chocolateCakes.map(function (element) {
   //let status = 'sold out !';
    //let name = element.name;
    //let flavor = element.flavor;
    //return {name, flavor, status} ;
    element.status = "sold out!";
    console.log("element après modif de status", element);

    return element
});

console.log(chocolateCakesTwo);


/*console.log("Exo 03");



let longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
];

let shortNames = longNames.map(
    function (element) {
        let total = element.firstName + " " + element.lastName;
        return { name: total, };

    });
console.log(shortNames);*/