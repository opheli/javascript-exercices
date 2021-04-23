//let arguments = process.argv.slice(2);

function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} =`, num * i)
    }
}

function addition(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} + ${i} =`, num + i)
    }
}

module.exports = {
    multiply,
    addition
}