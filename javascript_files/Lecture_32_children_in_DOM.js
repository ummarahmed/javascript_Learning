console.log("Children in DOM - 32 Lec");
/**
 * Chidren are the sub nodes of the parents tags
 * 
 * like head and body are direct children of html tag because they come just after the html tag
 * 
 * Children: sub elements of head and body are also children of html but not direct children
 * 
 * Descendent Nodes: all the node elements, their children and their children and so on...
 */

console.log("First child:");
 console.log(document.body.firstChild);
 console.log("Last child:");
 console.log(document.body.lastChild);
 console.log("Child nodes:");
 console.log(document.body.childNodes);
 console.log(typeof document.body.hasChildNodes());
console.log(document.body.hasChildNodes());

// make array of child nodes
let array = Array.from(document.body.childNodes);
console.log(array);

// we can not perform array functions on childNodes elements before converting it to an array. bacause initially its a collection.
 
