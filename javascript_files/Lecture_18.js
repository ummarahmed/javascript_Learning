console.log("Lecture 18 - Welcome");

let numbers = [1,2,3,4,5,6,7,8,9];
let numbers2 = [11,22,33,44,55,66,77,88,99]
console.log(numbers);

// use delete operator
delete numbers[0]; // it will only delete the number but index will be there. it will not effect the length of array
console.log(numbers);

// concatenation of arrays
let newarr = numbers.concat(numbers2);
console.log(newarr);

console.clear();

let unsortArr = [4,5675,23,45,3,435,5343]
console.log(unsortArr.sort());// it sort like the sorting of text happens. it will no sort the numbers according to their value. i.e it will show first al 1s then 2s then 3s and so on.

// sort acsending order

let compare = (a,b)=>{
    return a-b
}
unsortArr.sort(compare);
console.log(unsortArr);

console.log(unsortArr.reverse())
console.clear()// remove this line to see above output


// splice and slice functions
let values = [2,23,4,3423,432, 42,21,2];
values.splice(3,4,444,555,666,777);
console.log(values);// will return the deleted items and modifies the orignal array

// slice
console.log(values);
console.log(values.slice(3,6));// it do not modifies the new array



