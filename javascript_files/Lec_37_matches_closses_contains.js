console.log("Lecture 37 || Lec_37_matches_closses_contains.js");
// matches, closest and containes

let id1 = document.getElementById("id1");
console.log( id1);

console.log(id1.matches(".class")); // will return false there is no class having name .class
console.log(id1.matches(".box")); // will return true because there is class with box name

let sp1 = document.getElementById("sp1");
console.log(sp1);
console.log(sp1.closest(".box"));// it will search mentioned id from its own element, then from parent then from parent's parent and so on...

console.log(sp1.closest("#sp1")); // it will return it self
console.log(sp1.contains(id1));
console.log(id1.contains(sp1));
