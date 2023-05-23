function changeColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];// all possible values for hex color codes

    var hexcode = '';

    for(var i=0; i<6; i++){
        var random_index = Math.floor(Math.random()*hex_numbers.length);
        hexcode += hex_numbers[random_index]
    }// get the random hex-code
    
    // set the color code to text and as background color
    document.getElementById("hex-code").innerText = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#"+hexcode;

    var btn_hex = '';
    for(var i=0; i<6; i++){
        var btn_index = Math.floor(Math.random()*hex_numbers.length);
        btn_hex += hex_numbers[btn_index];
    }

    console.log("btn_hex: "+btn_hex);
    document.getElementById("change_btn").style.background = "#"+btn_hex;
}