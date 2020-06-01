function descubrir(e) {
  var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if ((totalDescubiertas.length > 1) || (estadoDePartida === "detenido")) {
    return
  }

  if (e.attributes) {
    e.classList.add("descubierta");
  } else {
    this.classList.add("descubierta");
  }

  document.querySelector("#son-giro").cloneNode().play();

  totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (estadoPista==="activo") {
    pista();
  }
  if (totalDescubiertas.length < 2) {
    return
  }

  comparar(totalDescubiertas);
  actualizaMovimientos();

  totalPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");

  if (totalPendientes.length === 0){
    estadoCronometro = "detenido";
    estadoTemporizador = "detenido";
    estadoDePartida = "detenido";
    setTimeout(function() {
      finalizar("modoGanador");
    }, 1000);
    return
  }

  if (movimientos >= niveles[nivelActual].movimientosMax) {
    estadoCronometro = "detenido";
    estadoTemporizador = "detenido";
    estadoDePartida = "detenido";
    setTimeout(function() {
      finalizar("modoSinMovimientos");
    }, 1000);
    return
  }

};

function comparar(tarjetasAComparar) {
  if (tarjetasAComparar[0].dataset.nombre === tarjetasAComparar[1].dataset.nombre) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
};

function activarPistas() {
  estadoPista = "activo";
  console.log(estadoPista);
}

function pista(){
  carta = document.querySelectorAll(".descubierta:not(.acertada)");

  dataNombre = carta[0].dataset.nombre;

  cartaPar = document.querySelector('[data-nombre="'+dataNombre+'"]:not(.descubierta)');

  if (cartaPar) {
    cartaPar.classList.add("pista");
    setTimeout(function() {
      cartaPar.classList.remove("pista");
    }, 1000);
  }
}
