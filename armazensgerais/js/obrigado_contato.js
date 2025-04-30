let seconds = 4;
function countdown() {
    seconds = seconds - 1;
    if (seconds < 0) {
       window.location = "/armazensgerais";
       } else {
        document.getElementById("countdown").innerHTML = seconds;
        window.setTimeout("countdown()", 3000);
   }
}

(function(){
    countdown();
}());

