function finalizar (){
  var mesa = document.querySelector("#mesa");
  var tiempoFinal = document.querySelector("#tiempo").innerText;
  var movFinal = document.querySelector("#mov").innerText;

  document.querySelector("#body").style.backgroundImage="url(img/animals-2.png)";

  mesa.innerHTML=
    '<div class="card-container">'
    + '<div class="mensaje finalizado">'
    +   '<h2>¡Bien Hecho!</h2>'
    +   '<p>Tu tiempo fue <span>' + tiempoFinal + '</span> y lo lograste en <span>' + movFinal + ' movimientos</span></p>'
    +   '<a class="boton iniciaJuego">¿Reiniciar?</a>'
    + '</div>'
    +'</div>';

  botonIniciar();
}
