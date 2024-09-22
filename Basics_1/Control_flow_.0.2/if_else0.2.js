// if 

// < , >, <=, >=, ==, !=, === , !==

const temp = 45;

if(temp < 50){
    console.log("Yes, temp is less than 50.")
}

// if else

const temp1 = 49;

if(temp1 < 50){
    console.log("Yes, temp is less than 50.")
}
else{
    console.log(`No, temp is more than 50`)
}


const userLoggedIn = true
const debitCard = true
const userLoggedInEmail = true
const userLoggedInGoogle = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course ");
}

if(userLoggedInEmail || userLoggedInGoogle){
    console.log("User logged in")
}

