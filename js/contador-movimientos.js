function actualizaMovimientos () {
  movimientos++;
  var textoMovimientos = movimientos;

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
  if (modoRelax === true) {
    textoMaxMov = "∞";
  }
  document.querySelector("#mov-max").innerText = textoMaxMov;
}
