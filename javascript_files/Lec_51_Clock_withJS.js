console.log("Lec_51_Clock_withJS.js");





console.log(h, m, s, d);
let hours = document.getElementById("h");
let minutes = document.getElementById("m");
let seconds = document.getElementById("s");
let todate = document.getElementById("d");
let month = document.getElementById("mon");
let year = document.getElementById("y");

function startClock() {
    setInterval(() => {
        // console.log("Hello")
        //get Updated Time
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let d = date.getDate();
        let mon = date.getMonth();
        let y = date.getFullYear();


        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        todate.innerHTML = d;
        month.innerHTML = mon;
        year.innerHTML = y;
    }, 1000);
}

window.onload = function () {
    startClock();
};