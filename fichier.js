// 01 Alphabet

console.log("Exo 01");



function sortLetters (phrase) {
    let tri =phrase.split('');
    console.log(tri);
    tri= tri.sort().join('');
    return tri;
}
console.log(sortLetters("konexio"));