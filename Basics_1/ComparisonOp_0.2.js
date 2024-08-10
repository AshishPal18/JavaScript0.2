// Simple and Basics

console.log(2 > 1)  // true
console.log(2 >= 1) // true
console.log(2 < 1)  // false
console.log(2 == 1) // false
console.log(2 != 1) // ture


// Important form interview point of view.

console.log(null > 0) // fasle
console.log(null == 0) // fasle
console.log(null >= 0) // true

// this reson is that an equality check == and comparison > <>= <= work diffrently.
// Comparisons covert null to a number , treating it as 0.
// That's why (3) null>= 0 is true and (1) is false.

console.log("2" == 2) // true because "2" is automatically converted to a number.
console.log("2" === 2) // fasle because in this comparison it will check data type also where "2" is string type and 2 is number that's why its result is false.

