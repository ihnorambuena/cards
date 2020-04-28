repartirTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(e) {
  e.addEventListener("click", descubrir);
  // e.addEventListener("click", tarjetasDescubiertas);
});

iniciarCronometro();
