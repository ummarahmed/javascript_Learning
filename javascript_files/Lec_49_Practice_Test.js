console.log("Lec_49_Practice_Test.js");

// normalClick
// promptBox
// confirmBox

function normalClick(btnId){
    let btnTitle = document.getElementById(btnId).textContent;
    alert(`${btnTitle} Button is pressed.`);
}

function promptBox(btnId){
    let btnTitle = document.getElementById(btnId).textContent;
    console.log(prompt(`${btnTitle} Button is tapped.`));
}

function confirmBox(btnId){
    // console.log(btnId)
    let btnTitle = document.getElementById(btnId).textContent;
    // console.log(btnTitle)
    confirm(`${btnTitle} Button is tapped.`);
}

document.getElementById("google").addEventListener("click",function(){
    var url = "https://www.google.com/";
    var win = window.open(url);
    window.focus();
})

document.getElementById("youtube").addEventListener("click", function(){
    var url = "https://www.youtube.com/";
    var win = window.open(url);
  }) 

  function fb(){
    let url = "https://www.facebook.com/";
    let win = window.open(url);
  }
  document.getElementById("facebook").addEventListener("click", fb);

  document.getElementById("refresh").addEventListener("click",refresh);
  
  async function getData(url){
    let con = await fetch(url);
    let data = await con.json();
    return data;
  }

  async function refresh(){
//    setInterval(() => {
//     console.log(Date());
//    }, 3000);
    // it will keep working for every 3 seconds

    // get data from weather API
    let url = "https://jsonplaceholder.typicode.com/todos/1";

    // following code is also correct
    // fetch(url).then((response) => response.json()).then((data) => (console.log(data)))

    // we will call a function to get data
    console.log(await getData(url));
  }


  setInterval(() => {
    document.getElementById("bulb").classList.toggle("bulbOn");
  }, 200);


  /*
  Following function will toggle the on and off effect of the box like bulb
  */
//   function bulbOnOff(){
//     let bulb = document.getElementsByClassName("bulb")[0];
//     console.log(bulb);
//     if(bulb.style.background == "yellow"){
//         bulb.style.background = "aliceblue"
//     } else {
//         bulb.style.background = "yellow"
//     }
    
//   }