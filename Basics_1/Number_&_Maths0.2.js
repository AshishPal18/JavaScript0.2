const score = 500
console.log(score) // 500

const balance = new Number(500)
console.log(balance) // [Number: 500]

console.log(balance.toString()) // converted to string 500
console.log(balance.toString().length) // length 3
console.log(balance.toFixed(3)) // 500.000


const otherNumber = 1123.987
console.log(otherNumber.toPrecision(3)) //1.12e+3


const thousand = 100000000
console.log(thousand.toLocaleString()) // 100,000,000
console.log(thousand.toLocaleString('en-IN'))  // 10,00,00,000 in this method given number is converted according to Indian Standard.


//+++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math)  // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.8)); // 5
console.log(Math.ceil(6.1));  // 7
console.log(Math.floor(6.1)); // 6
console.log(Math.floor(5.9)); // 5


console.log(Math.random()) // 0.2616196438134972 , 0.14026454440263558 --- result will be b/t 0 to 1.
console.log((Math.random()*10 ) + 1)  // 4.352912978573737 , 4.844341031841285
console.log(Math.floor(Math.random()*10 ) + 1) // 10

const min = 10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1))) // 3 , 5, 8, 2,.....
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // 13, 20 , 13, 15,....














