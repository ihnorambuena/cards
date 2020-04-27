function acierto(lasAcertadas) {
  console.log("acierto");
  lasAcertadas.forEach(function(e) {
    e.classList.add("acertada");
  });
}

function error(lasErroneas) {
  console.log("error");

  setTimeout(function () {
    lasErroneas.forEach(function(e) {
      e.classList.remove("descubierta");
    });
  }, 1000);
}
