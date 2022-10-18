console.log("36 is here.");


const title = ()=>{
    document.getElementsByClassName("card-title")[0].innerText = "title";
}

function ch_title(){

    let title = document.getElementById("txarea").value;
    document.getElementsByClassName("card-title")[0].innerText = title;
}
function ch_title_color(){
    let color = document.getElementById("txarea").value;
    document.getElementsByClassName("card-title")[0].style.color = color;
}
// title("Ummar's card");
/*
let card = document.getElementsByClassName("card-title");
card[1].innerText = "Ummar Changed it"
console.log(card[0].innerText);
*/
// card.innerText = "Ummar's Card"
// console.log(card.innerText);


/*
x=document.getElementsByClassName("card-title");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Hello JavaScript!";    // Change the content
    }
*/


// 
// document.querySelectorAll(".card-title") // it can return many objects having this class
// document.querySelector(".card") // it will return only one element

console.log(document.getElementsByTagName("a")); // will return all anchor tags
console.log(document.body.getElementsByTagName("a"));// it will search in body only instead of whole document
console.log(document.querySelector(".card-title").getElementsByTagName("a"));//it will only search with in card-title area and return only its anchor tags
