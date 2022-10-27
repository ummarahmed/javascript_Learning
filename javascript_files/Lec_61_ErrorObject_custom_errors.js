console.log("Lec_61_ErrorObject.js");

try{
    let age = Number.parseInt(prompt("Your age?"));
    if(age>150){
        throw new ReferenceError("This is probably not true.")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("This script is still running.")
