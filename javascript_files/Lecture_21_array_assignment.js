console.log("Lecture 21 - Assignment!");


/**
 * ----------------------------------
 * Q1: create an array and take inputs from user to add numbers in the array.
 * ----------------------------------
 */
/*
let arr = [1,23,5,2,4,3];
let val = Number.parseInt(prompt("Enter a number: "));
arr.push(val);
console.log(arr);
*/

/**
 * ----------------------------------
 * Q2: Keep adding number to the array until number is 0.
 * ----------------------------------
 */

let arr = [2,32,4,3,2,3];
let num = 1;
/*while(num != 0){
 num = Number.parseInt(prompt("Enter number"));
arr.push(num);
};*/
/*
while(true){
num = Number.parseInt(prompt("Enter a non zero"));
if(num != 0){
    arr.push(num);
} else{
    break;
}

//arr.push(num != 0 ? num : break );
}*/
console.log(arr);

console.clear();
/**
 * ----------------------------------
 * Q3: Filter the numbers divisible by 10 from the given array.
 * ----------------------------------
 */

let q3Arr = [23,80,35,50,20,40];
let filtered = q3Arr.filter((element)=>{
    return element%10 == 0
});
console.log(filtered);
console.clear();
/**
 * ----------------------------------
 * Q4: Create an array of given numbers.
 * ----------------------------------
 */

let q4arr = [2,4,7,3,6,9,4];
console.log(q4arr);
let squears = [];
// for (i of q4arr){
//     squears.push(i*i);
// };
squears = q4arr.map((x)=>{
    return x*x;
});
console.log(squears);
console.clear();
/**
 * ----------------------------------
 * Q5: Use reduce funtion to calculate factorial of a given array
 * ----------------------------------
 */
let q5arr = [1,2,3,4,5,6,7,8];
let fac = q5arr.reduce((x1,x2)=>{
    return x1*x2;
});
console.log(fac);


