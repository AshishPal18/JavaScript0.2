// Immediately Invoked Function Expression (IIFE)

// IIFE typically used to create a local scope for variables to prevent them from polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})
(); // DB CONNECTED

// Arrow function

( () => {
    console.log(`DB CONNECTED TWO`);
}) (); // DB CONNECTED TWO


// Arrow function with parameter 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Ashish') // DB CONNECTED TWO Ashish


// IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.