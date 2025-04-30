(function(){
  
  //parallax
  $(".parallax").parallax(), 
  
  //rolapbaixo
  $("body").animatescroll()

  //definelocalizacao
  let userLang = navigator.language || navigator.userLanguage
  if (typeof(Storage) !== "undefined") {
  window.onload = function () {
      if (userLang !="pt-BR"){
      if (sessionStorage.firstLoad !== 'false'){
      window.location.replace("https://sendastrading.github.io/armazensgerais/en/index.html")
      sessionStorage.setItem('firstLoad','false')
          }}
      }
      };

}());