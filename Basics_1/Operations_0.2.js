let number = 50
let number1 = 40

let add , sub , multi , div , mod , pow

add = number + number1 // 90
sub = number - number1  // 10
multi = number * number1  // 200
div = number / number1 // 1.25
mod = number % number1 // 10
pow = number ** number1 // 9.094947017729282e+67

console.table([add,sub,multi,div,mod,pow])


// Important 

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + "2") // 12
console.log("1" + 2 + 3) //123
console.log("1" + (2 + 3)) //15
console.log(2 + 3 + "1") //51


let gameCounter = 100
gameCounter++ // postfix
++gameCounter // prefix
console.log(gameCounter)

