console.log("tut3 files");

// Variables in Javascript

// variables can of following types:
// var, let , const
var myName = "Ummar"
console.log("Ummar");

console.log(`"Ummar's Computer"`);
city  = 'Lahore';
var channel;

console.log(myName, channel);// channel is just declared, not initialized with any value

/*
Rules for variable declaration
1. do not start with numbers
2. case sensitive
3. can start with _ or $
 */

const ownername = "Ali Raza";
// ownername = "New name" // this is an error causing statement because its changing a constant 
console.log(ownername); 
const fruit = 'Orange';

// block level concept - let
// local variable and global variable

{
    city = "Daska"
    city =  'Sialkot'
    console.log(city)
}

const arr1 = [23,34,2,45,6,34,3]
console.log(arr1)
arr1.push(43)
console.log(arr1)
// arr1 = [34,455,23,,35,4]  // we can not redeclare a const array but we can push value in it

/*
Most appropriate ways of declaring variables

1. camelCaseVariable
2. kabab-case-variable
3. snake_case_variable
4. PascalCaseVariable
 */


