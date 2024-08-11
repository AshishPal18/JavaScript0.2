// Shallow Copy : A shallow copy of an object is a copy whose properties share the same references.
// Deep Copy : A deep copy of an object is a copy whose properties do not share the same references.


const myArr = [0,1,2,3,4,1,4]
const myArr1 = new Array(1,2,3,4,5,7)
console.log(myArr1[5]);

myArr1.push(18)
myArr1.push(9,4,1,6)
myArr1.pop()  // it will delete last value in array.
myArr1.unshift(199) // [ 199, 1,  2, 3, 4,5, 7, 18, 9, 4,1]
myArr1.shift()  // [1,  2, 3, 4, 5, 7, 18, 9, 4, 1]
myArr1.shift()  // [2, 3, 4, 5, 7, 18, 9, 4, 1]
console.log(myArr1);

const newArr = myArr1.join()
console.log(newArr) // 2,3,4,5,7,18,9,4,1 this join method return an array as string .
console.log(typeof(newArr)) // string


// slice vs splice 

const spArr = [1,2,3,4,5,6,7]

console.log("A ",spArr) // [1,2,3,4,5,6,7]

const spArr1 = spArr.slice(1,3) // The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
console.log("B ",spArr1) // B  [ 2, 3 ]

const spArr2 = spArr.splice(1,3) // splice method manipulate original array (slice() method, the splice() method will change the contents of the original array.)
console.log("A ",spArr)  // A  [ 1, 5, 6, 7 ]
console.log("C ",spArr2) // C  [ 2, 3, 4 ]
console.log("A ",spArr) // A  [ 1, 5, 6, 7 ]

// https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/
// slice
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

const newCityArr = cities.slice(2);

console.log("Original: ", cities)
console.log("New: ", newCityArr)


const newCityArr1 = cities.slice(2,4);
console.log(newCityArr1)

// splice

// splice(start, optional delete count, optional items to add)

const food = ['pizza', 'cake', 'salad', 'cookie'];
food.splice(1,0,"burrito")
console.log(food) // [ 'pizza', 'burrito', 'cake', 'salad', 'cookie' ]

// we want to remove "salad" from the array.  We can use the start and delete parameters to accomplish this.

food.splice(2,1) 
console.log(food) // [ 'pizza', 'burrito', 'salad', 'cookie' ]





