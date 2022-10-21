console.log("HTML attributes and their methods");

let first = document.getElementById("first");
//get class of this element
console.log(first.getAttribute("class"));

// check attribute presence
console.log(first.hasAttribute("id"));

// set attribute of an element
// document.body.childNodes[3].hidden = true;// 3rd child node will be disappeared

// set attribute
first.setAttribute("class","hey newClass")

// remove attribute
document.getElementById("first").removeAttribute("align");

console.log("first.attributes.length: "+first.attributes.length)

// all attributes of first id element
for(let i=0; i<first.attributes.length; i++)
{
    console.log("i: "+i);
    console.log(first.attributes[i].textContent);
}

console.clear();// remove this line to see results of above code

// if you want to define your own attribute, always follow the rule to add "data-" before your attribute name e.g data-player, data-game etc
console.log(first.dataset);

