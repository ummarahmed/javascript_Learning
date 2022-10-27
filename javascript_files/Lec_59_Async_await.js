console.log("Lec_59_Async_await.js");


// async function always return a promise. other values raped in the promise.
async function hello(){
   
    let weather1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27")
        }, 3000);
    })
    
    let weather2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("25")
        }, 5000);
    })

    // weather1.then(alert)
    // weather2.then(alert)
    
    console.log("Fetching Weather 1. Please wait...")
    let w1 = await weather1
    console.log("Weather 1 is: ",w1)

    console.log("Fetching Weather 2. Please wait...")
    let w2 = await weather2
    console.log("Weather 2 is: ",w2)

    return [w1,w2]
}

let responses = hello()
responses.then((value)=>{
    console.log(value)
})
