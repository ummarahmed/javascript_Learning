let promise = new Promise(function(resolve, reject){
    alert("I am an alert in Promise");
    resolve(60);//
})

console.log("Lec_54_intro_primises.js");

console.log("Hello from a student");

setTimeout(() => {
    console.log("Time out function is working.")
}, 1000);
console.log("After time out function");

console.log(promise)
// if promise completes successfully, then resove will call with values, otherwise reject will call with error