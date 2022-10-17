console.log("Change background on click");

let colors = ["red", "green", "blue", "orange", "cyan"];

window.onclick = () => {
    let num = Number.parseInt((Math.random() * 5));
    document.body.style.background = colors[num];
};
