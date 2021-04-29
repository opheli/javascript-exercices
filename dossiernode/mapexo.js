// 02 - Map Double

console.log("Exo 02");

let numbers = [1, 2, 3, 4, 5];

let doubles = numbers.map(function(num) {
  return num*2;
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

let shortNames  = longNames.map(
    function(element) {
        let total = element.firstName +" "+ element.lastName;
    return "name:" +" "+ total; 
   
});
console.log(shortNames);


//04 - Filter Numbers

console.log("Exo 04");

let array = [1, "toto", 34, "javascript", 8];
