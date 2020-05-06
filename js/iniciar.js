function iniciar () {
  movimientos = 0;
  estadoCronometro = "iniciado";
  repartirTarjetas();

  document.querySelector("#body").classList.remove("bg-body");
  document.querySelector("#mov").innerText="00";
  document.querySelector("#minutos").innerText = "00";
  document.querySelector("#segundos").innerText = "00";

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

// ----------------------------

document.addEventListener("keydown", laTecla);

function laTecla (e) {
  // console.log(e.key);
  // var granTexto1 = 'document.querySelector("#mesa div:nth-child(';
  // var granTexto2 = ') .card-container .tarjeta")';
  // carta1 = granTexto1 + "1" + granTexto2;

  carta1 = document.querySelector("#mesa div:nth-child(1) .tarjeta");
  carta2 = document.querySelector("#mesa div:nth-child(2) .tarjeta");
  carta3 = document.querySelector("#mesa div:nth-child(3) .tarjeta");
  carta4 = document.querySelector("#mesa div:nth-child(4) .tarjeta");
  carta5 = document.querySelector("#mesa div:nth-child(5) .tarjeta");
  carta6 = document.querySelector("#mesa div:nth-child(6) .tarjeta");
  carta7 = document.querySelector("#mesa div:nth-child(7) .tarjeta");
  carta8 = document.querySelector("#mesa div:nth-child(8) .tarjeta");
  carta9 = document.querySelector("#mesa div:nth-child(9) .tarjeta");
  carta10 = document.querySelector("#mesa div:nth-child(10) .tarjeta");
  carta11 = document.querySelector("#mesa div:nth-child(11) .tarjeta");
  carta12 = document.querySelector("#mesa div:nth-child(12) .tarjeta");
  carta13 = document.querySelector("#mesa div:nth-child(13) .tarjeta");
  carta14 = document.querySelector("#mesa div:nth-child(14) .tarjeta");
  if (e.key === "w"){
    descubrir(carta1);
  }
  if (e.key === "e"){
    descubrir(carta2);
  }
  if (e.key === "r"){
    descubrir(carta3);
  }
  if (e.key === "t"){
    descubrir(carta4);
  }
  if (e.key === "y"){
    descubrir(carta5);
  }
  if (e.key === "u"){
    descubrir(carta6);
  }
  if (e.key === "i"){
    descubrir(carta7);
  }
  if (e.key === "s"){
    descubrir(carta8);
  }
  if (e.key === "d"){
    descubrir(carta9);
  }
  if (e.key === "f"){
    descubrir(carta10);
  }
  if (e.key === "g"){
    descubrir(carta11);
  }
  if (e.key === "h"){
    descubrir(carta12);
  }
  if (e.key === "j"){
    descubrir(carta13);
  }
  if (e.key === "k"){
    descubrir(carta14);
  }
}
