console.log("Lectuer 12 - Assignment");

/**
 * ---------------------------------------------
 * Q1: write a program to print the marks of a student in an object using for-in loop
 * obj = {ali: 98, ahmed: 70, kamal: 59}
 * ---------------------------------------------
 */

let stdMarks = {
    ali: 98,
    ahmed: 70,
    kamal: 59
}

for(a in stdMarks)
{
    if(a == "kamal"){
        console.log(a, stdMarks[a]);
    }
}
console.clear();// remove this line to see above rsults
/*
* ---------------------------------------------
 * Q2: write a program to print the marks of a student in an object using for loop
 * obj = {ali: 98, ahmed: 70, kamal: 59}
 * ---------------------------------------------
 */
for(let stdmark=0; stdmark<Object.keys(stdMarks).length; stdmark++){
console.log("The marks of "+Object.keys(stdMarks)[stdmark]+" is "+ stdMarks[Object.keys(stdMarks)[stdmark]])
}

/*
* ---------------------------------------------
 * Q3: Write a program that print "try again" until the user enter a correct number.
 * ---------------------------------------------
 */

let correctNum = 4;
let val = 0;
do{
     val = 4; //Number.parseInt(prompt("Enter correct number between 1-5"));
     console.log("Try again!");
}while(val != correctNum)
console.log("You have entered the correct number.");

console.clear();// remove this to see above results

/*
* ---------------------------------------------
 * Q4: Write a function to find mean of  5 numbers.
 * ---------------------------------------------
 */
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log(mean(4,23,45,23,43,75));

let findMean = (a,b,c,d,e) => {
    return (a,b,c,d,e)/5
}
console.log(findMean(34,23,43,32,56));