(function(){
  
  //parallax
  $(".parallax").parallax(), 
  
  //ano do copyright no rodape
  $(".ano-atual").text(new Date().getFullYear())

  //menu mobile (< 993px): fecha ao clicar num link
  $(".button-collapse").sideNav({ closeOnClick: true })

  //idioma: sem redirect automatico. A escolha feita na bandeira fica salva
  //e e respeitada pelo redirect da raiz do site (app/index.html).
  $(".lang-switch").on("click", function () {
    try {
      localStorage.setItem("sendasLang", $(this).data("lang"))
    } catch (e) {}
  })

}());