console.log("Lec_57_Multiple_Handlers_to_Promise.js");


let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // alert("Hey I am resolved P1");
        console.log("Hey I am resolved P1");
        resolve(1);
    }, 2000);
});

// we can add multiple .then for one promise and all will work. they will not pass any data to other .then but will work independently
// this is different from promise chaining. In promise chaining, .then are bound with each other and also pass on the data to proceed the next.
p1.then((value)=>{
    console.log("Promise is now resolved.")
},(error)=>{})
p1.then((value)=>{
    console.log("Second then of P1")
})
p1.then((value)=>{
    console.log("Third then of P1")
})
p1.then((value)=>{
    console.log("Fourth then of P1")
})