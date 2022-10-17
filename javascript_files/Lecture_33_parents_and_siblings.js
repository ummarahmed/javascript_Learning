console.log("Lecture 33 - Parents and Siblings");

// $0 , $1 etc are your last references which you have selected
console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode); // it will always return the node if there is any node in parent.
console.log(a.parentElement); // it will return parent element if the parent is valid HTML element. otherwise it will return null.


console.log(document.body.childNodes);