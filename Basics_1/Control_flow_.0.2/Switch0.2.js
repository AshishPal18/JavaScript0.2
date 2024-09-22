const month = 1

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Fab");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Default case match");
        break;                    
}


// falsy values
// false , 0, -0, BigInt 0n, "",null,undefined,NaN

// Truthy values
// "0",'false'," ",[],{}, function(){}


const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
 //val1 = 5 ?? 10

//console.log(val1); // 5

//val1 = null ?? 10
//console.log(val1) // 10

val1 = undefined ?? 15
console.log(val1) // 15

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("more than 80") // more than 80


