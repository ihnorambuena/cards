function iniciar () {
  movimientos = 0;
  estadoCronometro = "iniciado";
  repartirTarjetas();

  // document.querySelector("#body").style.background="var(--bg)";
  document.querySelector("#body").classList.remove("bg-body");
  document.querySelector("#mov").innerText="00";
  document.querySelector("#tiempo").innerHTML='<span id="minutos">00</span>:<span id="segundos">00</span>';

  document.querySelectorAll(".tarjeta").forEach(function(e) {
    e.addEventListener("click", descubrir);
    // e.addEventListener("click", tarjetasDescubiertas);
  });

  iniciarCronometro();
  // iniciarTemporizador();
}

function botonIniciar (){
  document.querySelectorAll(".iniciaJuego").forEach(function(e){
    e.addEventListener ("click", iniciar);
  });
}

botonIniciar();
