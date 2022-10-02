console.log("Practice Excercise of Chapter 1 - Javascript");

// Q1: Create a string variable and add an intergerin it
let str = "str";
let num = 15;
console.log(str+num);

// Q2: Find the type of operator and find the type of question 1's type
console.log( typeof (str+num));

// Q3: create a constant object in javascript and can you change it to a any other number later.

const constNum = {
    name: "Ali",
    class: "6th",
    marks: "45"
};
// constNum = 12; // it will give an error

// Q3: try to add a new key in the constant object in Q3. were you able to do it?

constNum['address'] = "Helsinki";

// Q4: add a new key
constNum['name'] = "Ahmed"
console.log(constNum);

// Q5: create a dictionary of 5 words
const dict = {
    apple: "Saib",
    car: "Gari",
    go: "Jao",
    in: "main",
    you: "tum"
};
console.log(dict.go);
console.log(dict['go']);
