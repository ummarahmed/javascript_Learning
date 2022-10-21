console.log("Lecture 41 is here");

console.log(document.getElementsByTagName("span")[0]);// consol.log shows the element as DOM element

// console.dir(document.getElementsByTagName("span")[0]);// console.dir will show the element as an object with its properties

console.log(document.body.firstChild.nodeName);

console.log(document.body.firstElementChild.nodeName);
console.log(spanId.innerHTML);

let spanElement = document.getElementById("spanId");
// spanElement.innerHTML = `<marquee behavior="" direction="left">Hello How are you, I am here for you.</marquee>`;

console.log(spanElement.outerHTML);

// spanElement.outerHTML = `<div> Hello, I am working in html code in javscript file.</div>`

console.log(spanElement.outerHTML);
console.log(document.body.firstChild.data);// shows the data of first child
console.log(document.body.firstChild.nodeValue);// show the results same as above

// show all content of the html file(excluding tags)
console.log(document.body.textContent);

// again show the hidden content of html element
document.getElementById("spanId").hidden = false;


