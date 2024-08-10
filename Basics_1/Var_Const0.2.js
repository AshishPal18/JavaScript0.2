const account_ID = 123456
let accountEmail = "ashishpal2023.geu@gmail.com"
var accountPass = "12345"
accountCity = "Surat"
let accountState;

// account_ID = 2 // not allowed


accountEmail = "palashish@gmail.com"
accountPass = "23455"
accountCity = "Gurugram"

/* Prefer not to use var
because of issue in block scope and functional scope. */

console.log(account_ID)
console.table([account_ID,accountEmail,accountPass,accountCity,accountState])