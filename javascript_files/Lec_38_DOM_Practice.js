console.log("38 Lecture | Lec_38_DOM_Practice.js");

/**
 * ---------------------------------------------------
 * Q1: Create a navbar and change the color of first element to red.
 * ---------------------------------------------------
 */
let firstElement = document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
console.log(firstElement);


/**
 * ---------------------------------------------------
 * Q2: Create a table without tbody.Now use "View page source" to check whether there is tbody or not.
 * 
 * Ans: View page source shows actual our written code. so there will be no tbody. but, if we see at browser's code then there will be tbody because browser performs auto-correction and it will add tbody by itself.
 * ---------------------------------------------------
 */

/**
 * ---------------------------------------------------
 * Q3: Create an element with 3 children. Now change the color of first and last to green.
 * ---------------------------------------------------
 */
// again we will use navbar
let firstNavElement = document.getElementsByTagName("nav")[0].firstElementChild;
let lastNavElement = document.getElementsByTagName("nav")[0].lastElementChild;
changeColor(firstNavElement, "Blue");
changeColor(lastNavElement, "Orange");

console.log(lastNavElement);// just pass the element and color and color will be set
function changeColor(element, color){
    element.style.color = color
}
function changeBackgroundColor(element, color){
    element.style.background = color
}
/**
 * ---------------------------------------------------
 * Q4: Write a javascript code to change background of all <li> tags to cyan.
 * ---------------------------------------------------
 */

/*
let all_li_tags = Array.from(document.getElementsByTagName("li"));
console.log(all_li_tags);
for (let index = 0; index < all_li_tags.length; index++) {
    all_li_tags[index].style.background = "red";
}
*/

// above code is working. now we will do it using foreach loop
let all_li_elemets = Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    changeBackgroundColor(element, "cyan")
    changeColor(element, "brown")
})
