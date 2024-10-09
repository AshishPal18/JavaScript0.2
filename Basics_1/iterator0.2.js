// for 

for(let index = 0; index <= 10; index++){
    const element = index;
    

    if(element == 5){
        console.log("5 is best number");
    }

    console.log(element);
}


for(let i=1; i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(`Inner loop value ${j} and ineer loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray = ["Flash", "batman", "superman"]

for(let i = 0;i<myArray.length;i++){
    const element = myArray[i];
    console.log(element);
}


// while
let i = 0
while(i<=10){
    console.log(`Value of i is ${i}`);
    i=i+2;
}

let myArray1 = ['Ashish','Amit','Mohit','Jeetu']
let arr = 0;
while(arr < myArray1.length){
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

// do while 

let score = 1

do{
    console.log(`Score is ${score}`);
    score++

}while(score <= 10 )

// for of

const arr1 = [1,2,3,4,5,6,7,8,9,10]
for (const num of arr1) {
    console.log(num);
}

const greetings = "Hellow World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr',"France")

console.log(map)
/*
op : 
Map(3) {
  'IN' => 'India',
  'USA' => 'United states of America',
  'Fr' => 'France'
}
*/

for(const key of map){
    console.log(key)
}

/* 
OP: 
[ 'IN', 'India' ]
[ 'USA', 'United states of America' ]
[ 'Fr', 'France' ]
*/

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for(const key in myObject){
   // console.log(key);
   console.log(`${key} shortcut is for ${myObject[key]}`)
}


// for each loop

const lang = ["js","c++","python","java","ruby"]

lang.forEach( function (val){
    console.log(val);
})

// second method 

function printMe(item){
    console.log(item);
}

// lang.forEach(printMe)

lang.forEach((item, index,arr)=>{
    console.log(item,index,arr);
})

// Accessing object from an array

const MyLang = [
    {
        languageName:"Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

MyLang.forEach((item)=>{
    console.log(item.languageName)
})

// Javascript
//Python
//C++

// filter 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((items)=>{
//     return items>5
// })
//console.log(newNums)

// Accessing numbers for an array by using forEach.
const newNums = []
myNums.forEach((nums)=>{
    if(nums>5){
        newNums.push(nums)
    }
})

console.log(newNums)

// Map

const MyNums = [1,2,3,4,5,6,7,8,9,10]
const newNums1 = MyNums.map((num)=>{
    return num + 10
})
console.log(newNums1)


// reduce

const Nums = [1,2,3,4,5]
const MyTotal = Nums.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
},0)
console.log(MyTotal)

// USING REDUCE FUNCTION WITH ARROW FUNCTION

const mYTOTAL = Nums.reduce((acc,curr)=>acc+curr,0)
console.log(mYTOTAL)
