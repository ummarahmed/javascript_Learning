// Primitive data types

// String
let myName = "Ummar Ahmed";
console.log("My name is " + myName);


console.log("Data type is: ",(typeof myName)); // check data type


// Numbers
let marks = 54;
console.log("Data type is: " + (typeof marks));


// Boolean
let result = true
console.log("Result is: "+result);
console.log("Data type is: "+ (typeof result));

// null
let nullvar = null;
console.log("Data type is: ", (typeof nullvar)); // it tells its type as object but it is premitive data type not reference

// undefined
let undef = undefined
console.log("Data type is: ",(typeof undef));


// Reference Data Types
// array - object
let myMarks = [34,35,23,35, false, true, "string"]
console.log("Data type is: "+(typeof myMarks));

// Object Literals
let stMarks = {
    Ali: 89,
    Kabeer: 78,
    Muneeb: 72
}
console.log(stMarks);
console.table(stMarks);

// function
function findName() {
    
}
console.log("Data type is: "+(typeof findName));

// date
let myDate = new Date();
console.log("Date Data type is: ",(typeof myDate));