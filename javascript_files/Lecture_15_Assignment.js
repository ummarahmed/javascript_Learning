console.log("Welcome to lecture 15.");

// ASSIGNMENT
/**
 * ---------------------------------------------
 * Q1: what will the following line will print in output.
 * consol.log(mar\"".length);
 * ---------------------------------------------
 */

console.log("mar\"".length);

/**
 * ---------------------------------------------
 * Q2: Explore the followings:
 * startwith, endswith, includes functions
 * ---------------------------------------------
 */

// startwith, endswith, includes functions
let statement = "Finland is a country of universities and lakes";
console.log(statement.startsWith("Finl"));
console.log(statement.endsWith("kes"));
console.log(statement.includes("nd i"));


/**
 * ---------------------------------------------
 * Q3: Write a string a convert it to lower case
 * ---------------------------------------------
 */
let normalStr = "I am in Finland."
console.log(normalStr.toLowerCase());
console.log(normalStr.toUpperCase());

/**
 * ---------------------------------------------
 * Q4: Extract the amount from this sentence.
 * "Please give him rupees 1000."
 * ---------------------------------------------
 */
let givenSentence = "Please give him rupees 1000.";
let amount = givenSentence.replace( /^\D+/g, '');
console.log(amount);
// we can also use .slice() to get the number from string

/**
 * ---------------------------------------------
 * Q5: Try to change 5th character of a string. Can you do this?
 * ---------------------------------------------
 */

let str = "Ummar";
str[2] = "s";
console.log(str); // string is not changes because string is immutable.