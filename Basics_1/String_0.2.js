let str = "Ashish"
let str2 = "Virat"

// string decleration 
const gameName = new String("Cricket")
console.log(gameName) // here string is object.
console.log(typeof(gameName)) // object
console.log(gameName.__proto__)

console.log(gameName.length) // 7
console.log(gameName.toUpperCase())  // CRICKET
console.log(gameName.toLowerCase())  // cricket
console.log(gameName.charAt(2)) // i
console.log(gameName.indexOf('k')) // 4

const newString = gameName.substring(0,4)
console.log(newString); // Cric

const sliString = gameName.slice(-8,2)
console.log(sliString) // Cr



console.log(str + " " + str2) // old faison

console.log(`Hello my name is ${str} and my fav Cricketer is ${str2}`)

const newStringOne = "    Ashish      "
console.table([newStringOne,newStringOne.trim(),newStringOne.trimStart(),newStringOne.trimEnd()])

/*
Output : 
─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ '    Ashish      ' │
│ 1       │ 'Ashish'           │
│ 2       │ 'Ashish      '     │
│ 3       │ '    Ashish'       │
└─────────┴────────────────────┘
*/


const url = "https://ashish.com/ashish18%surat"
console.log(url.replace('18%','%20')) // https://ashish.com/ashish%20surat

