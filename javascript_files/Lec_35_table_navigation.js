console.log("35 Lecture is here");

let table = document.body.firstElementChild.firstElementChild
console.log(table);// first element of first element
console.log(table.rows);// as first element is table, so here are all the rows of the table

console.log(table.caption); 
console.log(table.tHead);
console.log(table.tFoot);
console.log(typeof table.tBodies);

console.log(table.tBodies[0].rows);
console.log(table.tBodies[0].rows[0].cells);
console.log(table.tBodies[0].rows[0].cells[1].textContent);
