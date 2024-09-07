let a  = 10
const b = 20
var c = 40

//console.log(a , b, c) // 10 20 40

if(true){
    let d = 50
    const e = 60
    var f = 70
}

// console.log(d) // ReferenceError: d is not defined
//console.log(e) // ReferenceError: e is not defined
console.log(f) // 70

// difference between var and let

// var
var a1 = 200

if(true){
    var a1 = 500
    console.log("Inner: ",a1) // 500
}

console.log(a1) // 500

// let 

let b1 = 600

if(true){
    let b1 = 800
    console.log("Inner: ",b1) // 800
}

console.log(b1) // 600

// Function

function one(){
    const username = "Ashish"

    function two(){
        const address = "Surat"
        console.log(username)
    }

    // console.log(address) this will not print bcoz of scope and address is present in function which is not accessible out of scope.
    two()
}
one()


// if condition

if (true){
    const username = "Ashish"
    if(username === "Ashish"){
        const website = "netflix"
        console.log(username + website); // Ashishnetflix
    }
     // console.log(website)  error not accessible out of scope.
}

// console.log(username) error not accessible out of scope.


// ------------- Intresting Concept ---------
//  Decleration of function

// first method

console.log(addone(20)) // 21
// calling before initialization

function addone(num){
    return num + 1;
} 

console.log(addone(18)) // 19
// calling after initialization.

// this function will work in both condition --- access before function initialization and after function initialization.



// Second Method



console.log(addTwo(19)) // error : Cannot access 'addTwo' before initialization


const addTwo =  function(num){
    return num + 2
}

console.log(addTwo(19)) // 21

