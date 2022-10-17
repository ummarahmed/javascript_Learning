console.log("Welcome to Lecture 29");

/**
 * Q1: take a value from user using prompt and tell the user either he can drive or not
 */
/*
const canDrive = (age) => {
    return age > 18 ? "You can drive" : "Do not drive" 
}

let repeat = true;
do {
    let age = Number.parseInt(prompt("Enter Your Age: "));
    alert(canDrive(age));
    repeat = confirm("Do you want to play again?");
} while (repeat);
*/

/**
 * Q3: Show error if entered age in negative
 */

/*
let q3age = Number.parseInt(prompt("Enter your age: "));
if(q3age <= 0){
    console.error("Invalid age");
} else{
    console.log("Correct age.");
}


*/

/**
 * Q4: change page url to google.com if a user enters number greater than 4
 */

/*
let q4Num = Number.parseInt(prompt("Enter a number: "));
if(q4Num>4){
    location.href = "https://www.google.com.pk/"
} else{
    console.log("Number is less than 4");
}
*/

/**
 * Q5: Change the background of page base upon user input
 */

let usercolor = prompt("Color");
window.document.body.style.background = usercolor;

window.onload = () => {
    document.body.style.backgroundColor = "yellow";
}



// document.body.style.backgroundColor = "yellow";
// console.log("function called");
// function changeBodyBg(color){
    
    
// }