console.log("Lec_52_callback.js")

// Example of syncronous programming
/*
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favourite color?");
console.log(`${a} is ${b} years old and have ${c} as favorite color.`);
*/

// Example of asyncronous programming
/* commenting to avoid intruption for further code
console.log("Before set time out");
setTimeout(() => {
    console.log("Run after 2 sec")
}, 2000);
console.log("After set time out");
*/


// Example of call back
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;

    // if script will load successfully, then this code will run
    script.onload = function(){
        console.log(`Script is loaded: ${src}`)
        callback(null, src) // again call the given function with values
    }
    // if script encounters with any error, we can handle script error
    script.onerror = function(){
        console.log("error occured with script "+src)
        callback(new Error("Error occured"),src)
    }
    document.body.append(script)
}

let script = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js";


// call back functions in specific cases
function newsScriptCallBack(error, src){
    if(error == null){
    alert("Work done:\n"+src);
    } else {
        alert(error+" with "+src);
    }
}
function updatesScriptCallBack(error, src){
    if(error == null){
    alert("Work done:\n"+src);
    } else {
        alert(error+" with "+src);
    }
}
loadScript(script, updatesScriptCallBack)