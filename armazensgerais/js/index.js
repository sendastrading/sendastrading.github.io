(function(){
  
  //parallax
  $(".parallax").parallax(), 
  
  //ano do copyright no rodape
  $(".ano-atual").text(new Date().getFullYear())

  //menu mobile (< 993px): fecha ao clicar num link
  $(".button-collapse").sideNav({ closeOnClick: true })

  //formulario de contato: desativa o botao durante o envio para evitar duplo envio
  var $enviar = $(".formContato button[type=submit]")
  $enviar.data("texto", $enviar.text())
  $(".formContato form").on("submit", function () {
    $enviar.prop("disabled", true).text($enviar.data("enviando"))
  })
  //ao voltar com o botao do browser a pagina pode vir do cache com o botao desativado
  $(window).on("pageshow", function () {
    $enviar.prop("disabled", false).text($enviar.data("texto"))
  })

  //idioma: sem redirect automatico. A escolha feita na bandeira fica salva
  //e e respeitada pelo redirect da raiz do site (app/index.html).
  $(".lang-switch").on("click", function () {
    try {
      localStorage.setItem("sendasLang", $(this).data("lang"))
    } catch (e) {}
  })

}());