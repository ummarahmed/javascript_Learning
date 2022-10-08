console.log("Welcome to Lecture 19");

let array_marks = [12,43,5,32,54,6,34];

// for(let i = 0; i < array_marks.length; i++){
//     console.log("Digit is: "+ array_marks[i]);
// };

// foreach loop and function
// array_marks.forEach((element)=>{
//     console.log(index+" : "+element);// add each number into itself
// });

// array_marks.forEach(mFunction);
array_marks.forEach(mFunction) 
/* 
foreach function has three callback parameters. 
i. value
ii. index
iii. array
*/

function mFunction(index, element, ar){
    console.log(index+" : "+element+ " : "+ar);
};
console.clear();// dont forget to remove this line to see above results

/*
----------------------------------------------------
Array.from = used to create array from any other object
array.from("Pakistan")
*/

// let name_to_array = Array.from("Pakistan");
// console.log(name_to_array);


/*
----------------------------------------------------
for....of
*/
// for(i of array_marks){ // i is value 
//     console.log(i);
// }


/*
----------------------------------------------------
for....in
*/
// for(i in array_marks){ // i is index in the array
//     console.log(array_marks[i]);
// }



