// with the help of Constructor 

const DatingUser = new Object()  // singleton object

const DatingUser1 = {} // non-singleton object
DatingUser1.id = "123hgc"
DatingUser1.name = "Ashish"
DatingUser1.isLoggedIn = false

console.log(DatingUser) // {}
console.log(DatingUser1)  // { id: '123hgc', name: 'Ashish', isLoggedIn: false }

const regularUser = {
    fullName: {
        userfullName: {
            firstName: "Ashish",
            LastName: "Pal"
        }
    }
}

console.log(regularUser.fullName) // { userfullName: { firstName: 'Ashish', LastName: 'Pal' } }
console.log(regularUser.fullName.userfullName) // { firstName: 'Ashish', LastName: 'Pal' }
console.log(regularUser.fullName.userfullName.firstName) // Ashish


// Combining two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1,...obj2} // most of the we'll use this way only.
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true



// Important Concept


console.log(DatingUser1); // { id: '123hgc', name: 'Ashish', isLoggedIn: false }
console.log(Object.keys(DatingUser1)) // in arrays form [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(DatingUser1))  // [ '123hgc', 'Ashish', false ]

console.log(DatingUser1.hasOwnProperty('isLoggedIn')) // true



