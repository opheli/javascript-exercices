var total = 0;
var limit = 10;
for (var i = 0; i <= limit; i++) {
  // total = total + i; // Pareil que la ligne en dessous
  total += i;
  console.log("total partiel:", total);
}
console.log(total);