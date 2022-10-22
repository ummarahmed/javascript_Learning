console.log("Lec_48_Handling_event_listner.js");

let btn = document.getElementById("btn");
let func1 = function(e){
    alert("Func 1: Hello Developers")
};
let func2 = function(e){
    alert("Func 2: Hello People")
};
btn.addEventListener('click',func1);
btn.addEventListener('click',func2);

let opt = prompt("Which event you want to remove? (1,2)");
if(opt == "2"){
    btn.removeEventListener('click',func2);
} else {
    btn.removeEventListener('click',func1)
}
