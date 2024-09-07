const user = {
    username: "Ashish Pal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to javascript`);
        console.log(this);
    }
}

user.welcomeMessage() // Ashish Pal, Welcome to javascript

user.username = "Shreya❤️❤️ "

user.welcomeMessage() // Yash , Welcome to javascript


console.log(this) // {}



const chai =  function(){
    let username = "Ashish";
    console.log(this.username);
    console.log(this) // this will return some derived windows function.
}

chai() // undefined 


// arrow function 1st ways

const chai1 = () => {
    let username = "Yash"
    console.log(this.username)
    console.log(this)  // {}
}

chai1()  // undefined

// arrow function 2nd ways:
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(18,20)) // 38


// 3rd ways: implicit return

const addThree = (num1,num2,num3) => num1 + num2 + num3
console.log(addThree(12,13,14)) // 39

// return object with the help of implicit return 

const name = (name) => ({username: "Yash"})
console.log(name()) // { username: 'Yash' }




