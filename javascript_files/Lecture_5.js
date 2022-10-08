// Type conversion and type coercion

// convert a integer to a string
let mynum = 45;
// console.log(45, (typeof mynum));
mynum = String(mynum);
// console.log(mynum, (typeof mynum));

let i = 9;
// console.log("Value of i:", i.toString());

// convert a boolean to String
let knowDriving = true;
// console.log(knowDriving, (typeof knowDriving));
knowDriving = String(knowDriving);
// console.log(knowDriving, (typeof knowDriving));

let checkBool = true
// console.log("value of checkBool: ", checkBool.toString());

// convert date to String
let todate = new Date();
// console.log(todate, (typeof todate));
todate = String(todate);
// console.log(todate, typeof todate);

// convert integer array to String
let arr = [1,2,3,4,5];
// console.log(arr, (typeof arr));
arr = String(arr);
// console.log(arr.length, (typeof arr));

// array.length for and integer array means how many values are ther.

// array.length (array of integer converted to String) means how many total characters are there. it will count , with other  values.

// NUMBER FUNCTION

// String (a proper number) to Number
let strnum = Number("34242");
console.log(strnum, typeof strnum);

// boolean to Number
let result = true;
console.log("Result in integer is: ",Number(result));
 
// if you convert 334d4 or any array of numbers to number format, then it will give NaN error.


let marks = 34.89;
console.log("Marks parse to Int", parseInt(marks)); // 34

console.log("change to number", Number(marks));// 34.89

console.log("Parse float is: ",(parseFloat(marks)));

// use of .toFixed
console.log("use of .toFix()", parseFloat(marks).toFixed(4));//output: 34.8900 the number which you will give to the .toFixed() will show that number of decimals


// TYPE COERCION

let myStr = "abcdf";
let num = 23;

console.log(myStr + num, (typeof (myStr+num)));

