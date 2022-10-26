console.log("Lec_53_callbackHell_Pyramid_of_Doom.js");



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