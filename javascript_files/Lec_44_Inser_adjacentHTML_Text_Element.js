console.log("Lec_44_Inser_adjacentHTML_Text_Element.js");

let firstId = document.getElementById("first");
// console.log(firstId);

// beroreend - it will add the content before ending
firstId.insertAdjacentHTML("beforebegin", `<div class="test">beforebegin</div>`);
firstId.insertAdjacentHTML("beforeend", `<div class="test">beforeend</div>`);
firstId.insertAdjacentHTML("afterbegin",  `<div class="test">afterbegin</div>`)
firstId.insertAdjacentHTML("afterend", `<div class="test">afterend</div>`);

