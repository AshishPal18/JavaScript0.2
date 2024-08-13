// there are 4 ways to declare objects.
// 1: Singleton 
// 2: Constructor 
// 3: Objects literals
// 4: 

// Object.create // constructor method

const mySym = Symbol("Key1")

const  JsUser = {
    name: "Ashish",
    "Full Name": "Ashish Pal",
    [mySym]: "MyKey1",
    age: 21,
    location: "Surat",
    email: "ashishpal@gmail.com",
    lastLoginDays: ["Monday", "Friday"]

}

console.log(JsUser.email) // ashishpal@gmail.com
console.log(JsUser["email"]) // best way to print object.
console.log(JsUser["Full Name"])
console.log(JsUser[mySym])

JsUser.email = "palashish@gmail.com" // syntax to change email.
console.log(JsUser["email"]) // palashish@gmail.com , 

//Object.freeze(JsUser) // now we can't change email.
//JsUser.email = "palashish@google.com"
//console.log(JsUser)

/*
Output : 
{
  name: 'Ashish',
  'Full Name': 'Ashish Pal',
  age: 21,
  location: 'Surat',
  email: 'palashish@gmail.com',
  lastLoginDays: [ 'Monday', 'Friday' ],
  [Symbol(Key1)]: 'MyKey1'
}

*/

JsUser.greeting = function(){
    console.log("Helloo JS user");
}


JsUser.greeting1 = function(){
    console.log(`hello JS User ,${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting1());

/*
Output : 
Helloo JS user
undefined
hello JS User ,Ashish
undefined 
*/




