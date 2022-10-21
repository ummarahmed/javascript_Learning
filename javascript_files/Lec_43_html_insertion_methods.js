console.log("Lec_43_html_insertion_methods.js");


let allDivs = document.getElementsByTagName("div");
allDivs[allDivs.length-1].innerHTML += "<h1> Hy, I am Ummer here</h1>";

// create a new div and insert in the existing
let introDiv = document.createElement("div");
introDiv.innerHTML = "<h1>Mina nimi on Ummar. Mina pohon Englantia ja vähän suomen.</h1>"

// allDivs[0].append(introDiv);

// Enter records of 10 students whose names are given in an array
let students = ["Ali", "Ahmed", "Jameel", "Numan", "Shahbaz", "Rameez", "Rehan", "Jamshed", "Gohar", "Bilal"];

for(let i=0; i<students.length; i++){
    let std = document.createElement("div");
    std.innerHTML = `<h1>Roll No. ${i+1} ${students[i]}</h1>`;
    document.body.append(std);
    console.log("Std: "+std);
}

// this will add this new div in the beginning of this container
allDivs[0].prepend(introDiv);

// will add before the container start
allDivs[0].before(introDiv);

// it will add this just after the end of this container
allDivs[0].after(introDiv);

// replacewith()
// this method will replace the new div with another one.
allDivs[0].replaceWith(introDiv);