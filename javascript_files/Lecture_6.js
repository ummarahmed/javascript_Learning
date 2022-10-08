// String functions + expressins and operators

const myName = "Ummar";
const message = "A good teacher"
// console.log(myName + " " + message);

// String functions
//concatenation
let strings = "val 1 County";
strings = strings.concat(" TWO", " Countries involved - three");
// console.log(strings);

// length
// console.log(strings.length);

// to lower case/ upper case
/*
console.log(strings.toLocaleLowerCase());
console.log(strings.toLocaleUpperCase());
*/

// array indexing
// console.log(strings[4])

// indexOf - last index of
// console.log(strings.indexOf("TWO"));
// console.log(strings.lastIndexOf("C"));

// charAt
// console.log(strings.charAt(17))

//endsWith, includes, substring
/*
console.log(strings.endsWith("ree"));
console.log(strings.includes("ries"));
console.log(strings.substring(1,10));
*/
// console.log("Substring: ",strings.substring(-4));


// slice function
// console.log(strings.slice(0, 19)); // will give from start to till 19th index

// console.log(strings.slice(0,-19));// it mean give all the string character but do not give 19 from end

// console.log(strings.slice(-20)); // will give the last 20 characters


// OPERATORS IN JAVASCRIPT
let num1 = 10;
let num2 = 3;

// Arithmetic Operators
console.log("Number 1 + Number 2 = ",num1+num2);
console.log("Number 1 - Number 2 = ",num1-num2);
console.log("Number 1 * Number 2 = ",num1*num2);
console.log("Number 1 / Number 2 = ",num1/num2);

console.log("Number 1 ** Number 2 = ",num1 ** num2);// nummber1 raise to the power of number2. like 2nd nnumber will become the power of first one.

console.log("Number 1 % Number 2 = ",num1%num2);

// console.log("num1++ = ",num1++);// it will first print the number then increment the value
// console.log("++num1 = ",++num1);// it will first increment the value then print the number

console.log("1. ++num1 = ",++num1);//11
console.log("2. num1++ = ",num1++);// 11----12
console.log("3. --num1 = ",--num1);// 11--- 11
console.log("4. num1-- = ",num1--);// 11---- 10
console.log("5. num1 = ",num1);// 10
console.log("6. num1-- = ",num1--);// 10---9

console.clear();
let a  = 5;
let y = 3;
// Assignment operators
a += 5; // its same as a = a + 5
a -= 5; // its same as a = a - 5
a *= 5; // its same as a = a * 5
a /= 5; // its same as a = a / 5

a **= y; // same as a = a ** y;

console.log(a);

console.clear();

// COMPARISON OPERATORS
let comp1 = 5;
let comp2 = "5";
// these will check equality
console.log("Comp1 == comp2 is ",comp1 == comp2);
console.log("Comp1 != comp2 is ",comp1 != comp2);
// these will check equality + type check
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is ",comp1 !== comp2);
console.clear();

// LOGICAL OPERATORS
// && ||   !
let logi1 = 3;
let logi2 = 5;
console.log(logi1<logi2 && logi1==3);
console.log(logi1>logi2 || logi1==3);

// COMMENTS
// single line comment
/*
this is 
multiline 
comment
*/






