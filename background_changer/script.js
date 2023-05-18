var index = 0;

function changeColors(){
  var bgcolors = ["red", "blue", "orange", "yellow", "green", "purple"]; // array for background colors

  var btncolors = ["purple", "green","yellow","orange","blue","red"]; // array for button colors

  document.getElementsByTagName("body")[0].style.background = bgcolors[index++]; // will change background color
  
  var btn = document.getElementById("color_btn")
  btn.style.background = btncolors[index]; // will change button color

  if(index > bgcolors.length - 1){
    index = 0;
  } // manage the counter

}