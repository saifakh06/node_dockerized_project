const fs = require('fs');
const ps = require("prompt-sync")();

let num1 = Number(ps("Enter the first number: "));
let num2 = Number(ps("Enter the second number: "));

let total = num1 + num2;

console.log(`the sum of ${num1} and ${num2} ==> ${total}`);
fs.writeFileSync('./data/result.txt', `The sum of ${num1} and ${num2} ==> ${total}\n`);