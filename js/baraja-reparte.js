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
        + '<div class="tarjeta" data-nombre= "'
        + e.nombre + '">'
          + '<div class="front">'
            + "<p><span>IHN</span></br>Cards</p>"
          +'</div>'
          + '<div class="back">'
            + '<img src="img/animals/' + e.img +'"/>'
          + '</div>'
        + '</div>'
      + '</div>';
    mesa.appendChild(tarjeta);
  });
};


// + '<div class="back" style="background-image: url(img/animals/' + e.img +')">'
