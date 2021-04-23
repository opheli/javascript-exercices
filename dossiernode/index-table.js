let tableUtils = require("./table-utils.js")

let  multiplyFunc = tableUtils.multiply;
let addtionFunc = tableUtils.addition;

/

if (process.argv.length === 3) {
    let num = parseInt(process.argv[2]);

    // multiplyFunc(num)

    addtionFunc(num)
} else {
    console.log("Error")
}