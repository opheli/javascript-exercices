/*let numbers = [1, 2, 3, 4, 5];

let doubles = numbers.map(function(num) {
  return num**2 + 'lol';
});

console.log(doubles); // retournera [2, 4, 6, 8, 10]*/


/*let collections = [
    {firstname: "Paul", age: 25},
    {firstname: "Pierre", age: 17},
    {firstname: "Jean", age: 30},
    {firstname: "Luc", age: 2},
];

let doubles = collections.map(
    function(element) {
    return element.age; 
   
});
console.log(doubles);*/

//function .filter


/*let numbers = [1, 2, 3, 4, 5];

let numbersFilt = numbers.filter(function(element) {
  
  return element >= 3;

});

console.log(numbersFilt); // retournera [2, 4, 6, 8, 10]*/

//suite

var people = [
    {name: "Claire", age: 45},
    {name: "Joachim", age: 9},
    {name: "Bob", age: null},
    {name: "Kira", age: undefined},
    {name: "James", age: 22},
    {name: undefined, age: 30}
  ];
  
  let adults = people.filter(function(person) {
    return (person.name && person.age > 18) // ici : si person.name existe, alors person.name === true
  });
  
  console.log(adults); // retournera [
  //   {name: "Claire", age: 45},
  //   {name: "Joachim", age: 19},
  //   {name: "James", age: 22}
  // ];

