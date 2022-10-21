console.log("Lec_45_className_ClassList.js");

let first = document.getElementById("first");
console.log(first);
first.className = "red text-dark";

console.log(first.classList); // show all classes of "first" element

first.classList.remove("text-dark"); // will remove only mentioned class from the class list
first.classList.add("text-dark"); // will add the mentioned class

first.classList.toggle("text-dark"); // if class is not added, it will add. if class is added then it will remove.