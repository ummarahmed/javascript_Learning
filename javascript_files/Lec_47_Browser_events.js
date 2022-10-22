console.log("Lec_47_Browser_events.js");

function HelloBoloBeta() {
    alert("Tervetula! Mina nimi on Ummar. Hauska Tutustua :)")
}
function bigText() {
    let text = document.getElementById("intro");
    text.style.color = "red";
    text.style.background = "cyan";
    text.style.fontSize = "2em";
    text.style.padding = "15px"
    
}
function normalText() {
    let text = document.getElementById("intro");
    text.style.color = "black";
    text.style.background = "white";
    text.style.fontSize = "1em";
    text.style.padding = "0px"
}
