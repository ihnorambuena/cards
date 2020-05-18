function acierto(lasAcertadas) {
  console.log("acierto");
  lasAcertadas.forEach(function(e) {
    e.classList.add("acertada");
  });
  document.querySelector("#son-yes").cloneNode().play();
}

function error(lasErroneas) {
  console.log("error");
  lasErroneas.forEach(function(e) {
    e.classList.add("error");
  });

  document.querySelectorAll(".tarjeta").forEach(function(e){
    // e.style.background = "blue";
    e.style.transition = ".3s";
  });

  setTimeout(function() {
    document.querySelector("#son-no").cloneNode().play()
  }, 400)
  setTimeout(function() {
    lasErroneas.forEach(function(e) {
      e.classList.remove("descubierta");
      e.classList.remove("error");
    });
  }, 1000);

  setTimeout(function() {
    document.querySelectorAll(".tarjeta").forEach(function(e){
      // e.style.background = "red";
      e.style.transition = "1s";
    });
  }, 1100);
}
