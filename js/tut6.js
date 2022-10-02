const myName = "Ummar";
const message = "A good teacher"
// console.log(myName + " " + message);

// String functions
//concatenation
let strings = "val 1 County";
strings = strings.concat(" TWO", " Countries involved - three");
console.log(strings);

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
console.log("Substring: ",strings.substring(-4));


// slice function
console.log(strings.slice(0, 19)); // will give from start to till 19th index

console.log(strings.slice(0,-19));// it mean give all the string character but do not give 19 from end

console.log(strings.slice(-20)); // will give the last 20 characters


