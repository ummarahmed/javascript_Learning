console.log("Lecture 9 is on the go.");

/*
---------------------------------------------
LOOPS
---------------------------------------------
*/

// Foor loop
for(let i=0; i<10; i++){
    console.log(i);
}
console.clear(); // don't forget to remove this line to see the results of above code

// Program to add first n natural numbers
let sum = 0;
let n = 3; //Number.parseInt(prompt("Enter the value of n"));
for(i=0; i<n; i++){
    sum += i+1;
    console.log(sum)
}
console.log("Sum of first "+ n + "natural numbers is " + sum);
console.clear(); // don't forget to remove this line to see the results of above code

// for in loop
let marks = {
    ali: 90,
    ahmed: 78,
    raza: 65,
    shakeel: 43
};
for(let a in marks){
    console.log(marks[a]);
}
console.clear(); // don't forget to remove this line to see the results of above code

// foor-of loop
for(let b of "PAKISTAN"){
    console.log(b);
}
