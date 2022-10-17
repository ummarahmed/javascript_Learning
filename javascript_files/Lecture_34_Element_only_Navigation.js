
const changeBodyRed = ()=> {
    document.body.firstElementChild.style.background = "red";
};

let body = document.body;
console.log("First child of body is: ", body.firstChild);
console.log("First element child of body is: ",body.firstElementChild);

/*
Following all will deal with the elements only.
body.nextElementSibling
body.previousElementSibling
body.firstElementChild
body.lastElementChild
*/