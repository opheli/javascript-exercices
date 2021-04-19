// 01 Sommes des carrée

console.log("Exo 01");

let carre = 0;
let total = 0;
let limit = 10;

for (let i = 0; i <= limit; i++) {
    carre = i**2;
    total += carre;
    console.log(carre)
}

console.log("total " + total);

console.log();