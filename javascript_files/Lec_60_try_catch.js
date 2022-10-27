console.log("Lec_60_try_catch.js");

setTimeout(() => {
    console.log("Hacking wifi... Please wait")
}, 1000);
// console.log(password) // this will through an error and will not let the next code to run

// only sybcronous code will be handled in try-catch block. the scheduled code will not handled in this block and will through an error. Then you will need to write the try-catch within [setTimeout(in this case only)] the code which is scheduling the code so that try-catch also get scheduled.
try{
    console.log(password)
}catch(error){
    console.log("Thora masla bn gya h boss!")
}
setTimeout(() => {
    console.log("Fetching username and password... Please wait")
}, 2000);

setTimeout(() => {
    console.log("username and password of Jack'a facebook id fetched... Congratss!")
}, 3000);

