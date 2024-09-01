// About Object Destructure 

const course = {
    cousename: "JavaScript in Hindi",
    price: "9999",
    courseInstructure: "Ashish Pal"
}

const {courseInstructure} = course // Destructuring
console.log(courseInstructure) //  Ashish Pal

const {courseInstructure : Instructure} = course
console.log(Instructure) // Ashish Pal

// APIs in Json formate --- Synatx
/*{
    "name": "Ashish Pal",
    "coursename": "JavaScript"
    "price" : "Free"
}*/

// In array formate --  syntax
/*
[
    { },
    { },
    { }
]
*/