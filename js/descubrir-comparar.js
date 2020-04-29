function descubrir() {
  var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  // console.log(totalDescubiertas);

  if (totalDescubiertas.length > 1) {
    return
  }

  this.classList.add("descubierta");

  totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (totalDescubiertas.length < 2) {
    return
  }

  comparar(totalDescubiertas);
  actualizaMovimientos();
};

function comparar(tarjetasAComparar) {
  if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
};
