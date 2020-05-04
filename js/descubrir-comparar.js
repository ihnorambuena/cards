function descubrir() {
  var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  // console.log(totalDescubiertas);

  if (totalDescubiertas.length > 1) {
    return
  }

  this.classList.add("descubierta");
  document.querySelector("#son-giro").cloneNode().play();

  totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (totalDescubiertas.length < 2) {
    return
  }

  comparar(totalDescubiertas);
  actualizaMovimientos();

  totalPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (totalPendientes.length === 0){
    estadoCronometro="detenido";
    setTimeout(finalizar, 1000);
  }
};

function comparar(tarjetasAComparar) {
  if (tarjetasAComparar[0].dataset.nombre === tarjetasAComparar[1].dataset.nombre) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
};
