function acierto(lasAcertadas) {
  console.log("acierto");
  lasAcertadas.forEach(function(e) {
    e.classList.add("acertada");
  });
}

function error(lasErroneas) {
  console.log("error");
  lasErroneas.forEach(function(e) {
    e.classList.add("error");
  });
  setTimeout(function () {
    lasErroneas.forEach(function(e) {
      e.classList.remove("descubierta");
      e.classList.remove("error");
    });
  }, 1400);
}
