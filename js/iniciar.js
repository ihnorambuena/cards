function iniciar () {
  movimientos = 0;
  repartirTarjetas();

  document.querySelectorAll(".tarjeta").forEach(function(e) {
    e.addEventListener("click", descubrir);
    // e.addEventListener("click", tarjetasDescubiertas);
  });

  iniciarCronometro();
  // iniciarTemporizador();
}

var botonIniciarJuego = document.querySelector("#iniciarJuego");
botonIniciarJuego.addEventListener ("click", iniciar);
