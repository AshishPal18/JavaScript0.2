function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}

addTwoNumber(18,21) // 39
addTwoNumber(18,null) // 18

const result = addTwoNumber(18,20) // 38

console.log("Result: ",result) // undefined


function addThreeNumber(numb1, numb2, numb3){
    let result = numb1 + numb2 + numb3
    return result;
}

const  result1 = addThreeNumber(2,3,4)

console.log("Result: ",result1); // 9


function loginUserName(username){
    return `${username} Welcome back to Js point.`
}

console.log(loginUserName("Ashish Pal")) // Ashish Pal Welcome back to Js point.


function loginUserMessage(userName){
    if(!userName) {
        console.log("Please enter user name");
        return
    }
    return `${userName} just logged in.`
}
console.log(loginUserMessage()) // Please enter user name , undefined

// Spread syntax (...)

/*
function calculateHomePrice(...num1){
    return num1
} 

console.log(calculateHomePrice(200,300,400,500,600)) // [ 200, 300, 400, 500, 600 ]
*/

function calculatePrice(val1,val2,...num1){
    return num1
}

console.log(calculatePrice(200,300,400,500,600)) // [ 400, 500, 600 ]


// function with objects

const user = {
    username : "Ashish Pal",
    price : 199,
    address : "Suart"
}

function handelObject(anyobject){
    console.log(`User is ${anyobject.username} and proce is ${anyobject.price}`);
}

// handelObject(user) // User is Ashish Pal and proce is 199 
 

// we can directly pass object also

handelObject({
    username: "Yash Pal",
    price: 499
})
 // output : User is Yash Pal and proce is 499

 // function with array

 const myNewArray = [18,19,20,21,22,23,24,25]

 function returnSecondValue(getArray){
    return getArray[3]
 }
 console.log(returnSecondValue(myNewArray))  // 21
