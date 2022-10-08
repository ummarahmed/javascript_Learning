console.log("Lecture 20 is here");
/*
Map-Filter-Reduce
 */

/**
 * ------------------------------
 * Map also have three arguments.
 * i. value
 * ii. index
 * iii. array
 */

let marks = [23,52,35,653,23];
marks.map((value, index, arr)=>{
    console.log(value+" : "+index+" "+arr)
});
// unlike the foreach, map operate a specific operation on each element of array and create a new array
// foreach loop traverse the array and deal with every element and return a array in the result.

console.clear(); // don't forget to comment this line to see above results

let numArr = [3,5,2,1,6,4];

let result = numArr.map((value, index)=>{
    return index+" : "+value;
})
console.log(result);
console.clear();// clear screen till here

/**
 * ------------------------------
 * Array Filter
 * return an array
 */
// use numArr again
let less_than_ten = numArr.filter((value)=>{
    return value < 15;
});
console.log("Less than 10 numbers: ",less_than_ten);

/**
 * ------------------------------
 * Array Reduce method
 * Reduce function always return a single value which will be the result of function you passed in the function.
 */
 let nuArr = [1,6,4,7,3,9,12];
let numArReduce = nuArr.reduce((i,j)=>{
    return s = i > j ? i : j; // return biggest
});
console.log(numArReduce);





