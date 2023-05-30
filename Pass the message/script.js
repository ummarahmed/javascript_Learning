function send_message(){
    let message = document.getElementById("message_area").value;

    document.getElementsByClassName("message_show")[0].innerHTML = message;
}