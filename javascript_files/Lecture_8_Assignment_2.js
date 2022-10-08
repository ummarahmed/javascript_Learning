console.log("Assignment 2 - Solution");


/*
-------------------------------------------------
 Q1: try to find using logical operators that the age is between 10 and 20.
 -------------------------------------------------
 */
/*
let age = Number.parseInt(prompt("What is your age?"));

if (age>10 && age <20){
    console.log("Age is between 10 and 20.");
} else{
    console.log("Age is not between 10 and 20.");
}
*/
/*
-------------------------------------------------
 Q2: Demonstrate the use of switch case statement in Javascript.
 -------------------------------------------------
 */

 let switch_fruit = "apple";
 switch (switch_fruit) {
    case "banana":
        console.log("banana case active");
        break;
    case "apple":
        console.log("apple case active");
        break;
    default:
        console.log("No case matched");
        break;
 }
 console.clear();// dont forget to remove this line if you want to see above results

/*
-------------------------------------------------
 Q3: Write a program to see if a number is completely divisible by 2 or 3.
 -------------------------------------------------
 */

 let check_number = 6;
 if((check_number%2 == 0) && (check_number%3 == 0)){
    console.log("Number is comlpletely divisible by 2 and 3.");
 } else {
    console.log("Number is not completely divisible by 2 and 3.");
 }
 console.clear();// dont forget to remove this line if you want to see above results
/*
-------------------------------------------------
 Q4: Write a program to see if a number is completely divisible  by either 2 or 3.
 -------------------------------------------------
 */

 let check_number1 = 18;
 if((check_number1%2 == 0) || (check_number1%3 == 0))
    {
    if ((check_number1%2 == 0) && (check_number1%3 == 0))
        {
            console.log("Number is completely divisible by 2 and 3.");
        }else if (check_number1%2 == 0)
            {
                console.log("Number is comlpletely divisible by 2");
            } else 
                {
                    console.log("Number is comlpletely divisible by 3.");
                }
    } else {
    console.log("Number is not completely divisible by 2 or 3.");
 }
 console.clear();// dont forget to remove this line if you want to see above results

 /*
-------------------------------------------------
 Q5: Print "You can drive" based on ternary operator if the age is greater than 18.
 -------------------------------------------------
 */

let drive_age = 19;
let message = drive_age>18? "You can drive" : "You can not drive";
console.log(message);

