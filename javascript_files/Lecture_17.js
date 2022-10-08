console.log("Welcome to lecture 17");

let numbers = [2,4,6,34,2];
let toStr = numbers.toString();// convert to string
console.log(typeof toStr);

let join = numbers.join("_");// join using given separator
console.log(join);

// r = numbers.pop();// last element will be removed
// console.log(numbers, r);

// r = numbers.push(98);// new element will be added
// console.log(numbers, r);


r = numbers.shift() // remove first element of array
console.log(numbers, r)

r = numbers.unshift(98) // add element in the start of array
console.log(numbers, r)
console.log(numbers)