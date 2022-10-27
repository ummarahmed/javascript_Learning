console.log("Lec_56_chaining_then_calls.js");

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 sec")
        // reject("Failure! task not completed.")
        resolve(56)
        
    }, 2000);
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000);
    });
    return p2;
}, (error)=>{
    console.log(error)
}).then((value)=>{
    console.log("We are done.")
    let p3 = new Promise((resolve, reject) => {
        // resolve("p3")
        return 3; // it will automatically marked as resolved promise.
    });
}).then((value)=>{
    console.log("P3 then resolved call")
})

const loadScript = (src)=> {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.append(script)
    script.onload = ()=>{
        resolve("Script loading done.")
    }
    script.onerror = ()=>{
        reject(0)
    }
    });
}

let promise_load = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
promise_load.then((value)=>{
    console.log("Promise done successfuly. "+value)
},(error)=>{
    console.log("Oops! Promise done caught error. "+error)
})