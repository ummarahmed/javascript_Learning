console.log("Welcome to Lecture 11");

// FUNCTIONS
function findAverage(number1, number2){
    return (number1+number2)/2;
}

console.log(findAverage(12,13));

// another way to write function
let sum = (p,q) => {
    return p+q;
};
console.log(sum(9,7));

const sayHello = ()=>{
    console.log("Hello! Good morning");
}

sayHello();