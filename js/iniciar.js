function iniciar () {
  movimientos = 0;
  estadoCronometro = "iniciado";
  estadoTemporizador = "iniciado";
  estadoDePartida = "andando";
  repartirTarjetas(niveles[nivelActual].tarjetas);
  maxMovimientos();

  document.querySelector("#finalizado").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOverMov").classList.remove("visible");
  document.querySelector("#gameOverTime").classList.remove("visible");
  document.querySelector("#body").classList.remove("bg-body");
  document.querySelector("#mov").innerText="00";

  document.querySelectorAll(".inter-niv").forEach(function(e) {
    e.classList.remove("inter-on");
    if (!modoRelax) {
        e.classList.add("inter-bloq");
    } else {
      e.classList.add("inter-off");
    }
  });

  document.querySelectorAll(".inter-niv").forEach(function(e) {
    if (e.innerText == nivelActual+1) {
      e.classList.add("inter-on");
      e.classList.remove("inter-bloq");
    }
  });


  if (!modoRelax) {
    document.querySelector("#minutos").innerText = '0' + niveles[nivelActual].minMax;

    var textoSegundosInicial = niveles[nivelActual].segMax;
    if (niveles[nivelActual].segMax < 10) {
      textoSegundosInicial = '0' + niveles[nivelActual].segMax;
    }
    document.querySelector("#segundos").innerText = textoSegundosInicial;

    iniciarTemporizador(niveles[nivelActual].minMax, niveles[nivelActual].segMax);
  } else {
    document.querySelector("#minutos").innerText = "00"
    document.querySelector("#segundos").innerText = "00"
    iniciarCronometro();
  }

  document.querySelectorAll(".tarjeta").forEach(function(e) {
    e.addEventListener("click", descubrir);
  });

  document.addEventListener("keydown", laTecla);
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}


document.querySelectorAll(".reiniciaJuego").forEach(function(e){
  e.addEventListener ("click", reiniciar);
});

document.querySelectorAll(".reiniciaNivel").forEach(function(e){
  e.addEventListener ("click", iniciar);
});

document.querySelectorAll(".subeNivel").forEach(function(e){
  e.addEventListener ("click", cargaNuevoNivel);
});

document.querySelectorAll(".iniciaModoNormal").forEach(function(e){
  e.addEventListener ("click", iniciaJuegoNormal);
});

document.querySelectorAll(".iniciaModoRelax").forEach(function(e){
  e.addEventListener ("click", iniciaJuegoRelax);
});

function iniciaJuegoNormal() {
  modoRelax = false;
  estadoNavNiveles = "bloqueado"
  nivelActual = 0;
  actualizaNivel();
  iniciar();
  document.querySelector("#tiempo").classList.remove("invisible");
};

function iniciaJuegoRelax() {
  modoRelax = true;
  estadoNavNiveles = "desbloqueado"
  nivelActual = 0;
  actualizaNivel();
  iniciar();
  document.querySelector("#tiempo p").innerText = "Cronómetro";
  document.querySelectorAll(".inter-niv:not(.inter-on)").forEach(function(e) {
    e.classList.remove("inter-bloq");
    e.classList.add("inter-off");
  });
};

// ----------------------------

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
  carta15 = document.querySelector("#mesa div:nth-child(15) .tarjeta");
  carta16 = document.querySelector("#mesa div:nth-child(16) .tarjeta");
  carta17 = document.querySelector("#mesa div:nth-child(17) .tarjeta");
  carta18 = document.querySelector("#mesa div:nth-child(18) .tarjeta");
  carta19 = document.querySelector("#mesa div:nth-child(19) .tarjeta");
  carta20 = document.querySelector("#mesa div:nth-child(20) .tarjeta");
  carta21 = document.querySelector("#mesa div:nth-child(21) .tarjeta");
  carta22 = document.querySelector("#mesa div:nth-child(22) .tarjeta");

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
  if (e.key === "z"){
    descubrir(carta15);
  }
  if (e.key === "x"){
    descubrir(carta16);
  }
  if (e.key === "c"){
    descubrir(carta17);
  }
  if (e.key === "v"){
    descubrir(carta18);
  }
  if (e.key === "b"){
    descubrir(carta19);
  }
  if (e.key === "n"){
    descubrir(carta20);
  }
  if (e.key === "m"){
    descubrir(carta21);
  }
  if (e.key === ","){
    descubrir(carta22);
  }
}
