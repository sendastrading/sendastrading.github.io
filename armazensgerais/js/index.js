(function(){
  
  //parallax
  $(".parallax").parallax(), 
  
  //rolapbaixo
  $("body").animatescroll()

  //idioma: sem redirect automatico. A escolha feita na bandeira fica salva
  //e e respeitada pelo redirect da raiz do site (app/index.html).
  $(".lang-switch").on("click", function () {
    try {
      localStorage.setItem("sendasLang", $(this).data("lang"))
    } catch (e) {}
  })

}());