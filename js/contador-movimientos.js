function actualizaMovimientos () {
  movimientos++;
  var textoMovimientos = movimientos;

  if (movimientos>niveles[nivelActual].movimientosMax) {
    finalizar("modoPerdedor");
    return;
  }

  if (movimientos < 10) {
    textoMovimientos = '0' + movimientos;
  }

  document.querySelector("#mov").innerText = textoMovimientos;
}

function maxMovimientos() {
  var textoMaxMov = niveles[nivelActual].movimientosMax;
  if (textoMaxMov<10) {
    textoMaxMov = "0" + textoMaxMov;
  }
  document.querySelector("#mov-max").innerText = textoMaxMov;
}
