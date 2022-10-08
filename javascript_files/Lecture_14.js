console.log("Welcome to lecture 14");

// STRING METHODS
let mName = "UmmarAhmed";
console.log(mName.length);// length of string(escape character will not be counted in this length function) 

console.log(mName.toUpperCase());
console.log(mName.toLowerCase());
console.log(mName.slice(4));

console.log(mName.replace("Ahmed"," Ahmed"));// replace. its case sensitive

let friend1 = "Ali";
let friend2 = "Raza";
console.log(friend1.concat(" is a friend of ",friend2));

let nameWithSpaces = "          Ummar          ";
console.log(nameWithSpaces.trim());// will remove extra spaces

/**
 * we can get a new string by using the string methods but we can never change the orignal string.
 */
