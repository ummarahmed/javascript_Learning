console.log("Lect_46_setInterval_setTimeout.js");
/*
alert("Hello");
let doTimeWork = prompt("Do you want setTimeout to work? (y/n)")
let timer = setTimeout(function(){
    alert("from inside the setTimeout");
},2000);// will run the code after 2000 milli second


if(doTimeWork === "n"){
    clearTimeout(timer); // timer will not work now
}
*/

const sum = () => {
    console.log("Answer is: " + (getRandom() + getRandom()));
}

let getRandom = () => {
    return Math.floor(Math.random() * 10);
}

// setInterval(sum, 3000); // uncomment this to get updated sum of random numbers in every 3 seconds



/*
for(let i=0; i<5; i++){
    setTimeout(() => {
        document.write("Love humanity. ")
    }, 2000);
}
*/


