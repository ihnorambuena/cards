function actualizaMovimientos () {
  movimientos++;
  var textoMovimientos = movimientos;

  if (movimientos < 10) {
    textoMovimientos = '0' + movimientos;
  }

  document.querySelector("#mov").innerText = textoMovimientos;
}
