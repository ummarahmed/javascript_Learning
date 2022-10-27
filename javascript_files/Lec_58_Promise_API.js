console.log("Lec_58_Promise_API.js");

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve("Promise 1 resolved")    
        reject("Promise 1 not resolved")
    }, 1000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise 2 resolved")    
        // reject("Promise 2 not resolved")
    }, 2000);
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise 3 resolved")
        // reject(new Error("Error"))
    }, 3000);
})
/*
p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
}, (error)=>{})
p3.then((value)=>{
    if(value){
        console.log(value)
    }
},(error)=>{
    console.log(error)
})*/

/*
// we want to see result when all the promises fulfilled. If any one of these promises get reject, then result will be error(due to rejection) and resolved ones will not be shown.
let promises_all = Promise.all([p1,p2,p3]);
promises_all.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error);
})
*/

/*
// "Promise.allSettled" will show all the promises on their fulfillment with their completion or rejection.
let settlePromise = Promise.allSettled([p1,p2,p3])
settlePromise.then((value)=>{
    console.log(value)
})
*/

/*
// it will only give the result whichever completed first, either resolved or rejected.
let settlePromise = Promise.race([p1,p2,p3])
settlePromise.then((value)=>{
    console.log(value)
})
*/

// it will give the value of first resolved promise. If first one get rejected then it will not give rejected value of first but resolved value to second. If no promise resolved then ultimately it will through an error(agregate error)
let settlePromise = Promise.any([p1,p2,p3])
settlePromise.then((value)=>{
    console.log(value)
})

