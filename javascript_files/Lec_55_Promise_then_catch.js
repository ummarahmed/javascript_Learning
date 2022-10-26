console.log("Lec_55_Promise_then_catch.js");

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise 1 is pending.")
    setTimeout(() => {
        console.log("I am an alert promise 1 and i am resolved.");
        // resolve(true)
        reject(new Error("Error occured"));
    }, 5000);
});
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise 2 is pending.")
    setTimeout(() => {
        console.log("I am an alert promise 2 and i am rejected.");
        // resolve(true)
        // reject(new Error("Error occured"));
    }, 5000);
});

// console.log(p1,p2)

// we can handle success and fail case in same then clause
p1.then((value) => {
    console.log(`printed in 1 then: ${value}`);
},(error)=>{
    console.log(`Error in p1 ${error}`)
})

// this code will not run because p2 is throughing error
p2.then((value) => {
    console.log(`printed in 2 then: ${value}`);
})

p2.catch((error) => {
    console.log("Error is: "+error)
})

// it will simply return the resolved method with "done" status
let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("done");
    }, 1000);
})
promise.then(alert);