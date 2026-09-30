let seconds = 4;
function countdown() {
    seconds = seconds - 1;
    if (seconds < 0) {
       //relativo: volta para a pagina inicial do mesmo idioma (PT ou EN)
       window.location = "index.html";
       } else {
        document.getElementById("countdown").innerHTML = seconds;
        window.setTimeout(countdown, 1000);
   }
}

(function(){
    countdown();
}());

