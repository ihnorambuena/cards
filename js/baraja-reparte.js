function barajarTarjetas () {
  var resultado;
  resultado = dobleDeEmoticonos.sort(
    function() {
      return 0.5 - Math.random();
  });
  return resultado;
};

function repartirTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajarTarjetas();

  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(e) {
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML =
      '<div class="card-container">'
        + '<div class="tarjeta" data-valor= "'
        + e + '">'
          + '<div class="front">'
            + "<p><span>IHN</span></br>Cards</p>"
          +'</div>'
          + '<div class="back">'
            + e
          + '</div>'
        + '</div>'
      + '</div>';
    mesa.appendChild(tarjeta);
  });
};

repartirTarjetas();
