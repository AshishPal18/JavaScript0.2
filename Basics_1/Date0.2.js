let myDate = new Date()

console.log(myDate)  // 2024-08-11T12:19:43.725Z which is not readable.
console.log(typeof(myDate)) // object

console.log(myDate.toString()) // Sun Aug 11 2024 12:21:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getDate()) // 11
console.log(myDate.getDay()) // 0
console.log(myDate.toJSON()) // 2024-08-11T12:24:20.295Z
console.log(myDate.toDateString()) // Sun Aug 11 2024
console.log(myDate.toLocaleString()) // 8/11/2024, 12:25:37 PM
console.log(myDate.toLocaleDateString()) // 8/11/2024

let myCreatedDate = new Date(2024,7,11)
console.log(myCreatedDate.toDateString()); // Sun Aug 11 2024

let myCreatedDate1 = new Date("2024-08-11")
console.log(myCreatedDate1.toDateString()); // Sun Aug 11 2024
console.log(myCreatedDate1.toLocaleString())  // 8/11/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1723379857135
console.log(myCreatedDate1.getTime()); // 1723334400000
console.log(Math.floor(Date.now()/1000)); // 1723379950








