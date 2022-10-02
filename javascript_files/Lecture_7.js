console.log("Conditional Expressions")

// let a = Number(prompt("Hey! What is your age?"));
let a = 5; // prompt("Hey! What is your age?");
a = Number.parseInt(a); // converting a string to number
/*
console.log(a);
console.log(typeof a);
if(a>20){
    console.log("This is true statement.");
} else {
    console.log("This is an invalid statement.");
}
*/
let age = a;
if (age < 9){
    console.log("You are a kid. Do not even think about driving.")
} else if (age>9 && age<18){
    console.log("You are a kid but you can think about driving");
} else {
    console.log("You are mature. You can drive");
}
console.clear();

// SWITCH STATEMENT
let fruit = "apple";
switch (fruit) {
    case "mango":
        console.log("Mango block executed");
        break;
    case "apricot":
        console.log("Apricot block executed");
        break;
    case "banana":
        console.log("Banana block executed");
        break;
    case "apple":
        console.log("Apple block executed");
        break;
    default:
        console.log("No case matched");
        break;
}

// TERNARY OPERATOR
let drive_age = 72;
console.log("You can ", drive_age>18? "drive" : "not drive");








