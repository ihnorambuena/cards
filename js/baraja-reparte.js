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
            + '<div class="key-name"></div>'
            + '<p><span>IHN</span></br>Cards</p>'
          +'</div>'
          + '<div class="back">'
            + '<img src="img/animals/' + e.img +'"/>'
          + '</div>'
        + '</div>'
      + '</div>';
    mesa.appendChild(tarjeta);
  });
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {
    console.log("Estás en Mobile");
    } else {
      asignarKeyName();
      console.log("Estás en Desktop");
  };
};


function asignarKeyName() {
  carta1 = document.querySelector("#mesa div:nth-child(1) .key-name");
  carta2 = document.querySelector("#mesa div:nth-child(2) .key-name");
  carta3 = document.querySelector("#mesa div:nth-child(3) .key-name");
  carta4 = document.querySelector("#mesa div:nth-child(4) .key-name");
  carta5 = document.querySelector("#mesa div:nth-child(5) .key-name");
  carta6 = document.querySelector("#mesa div:nth-child(6) .key-name");
  carta7 = document.querySelector("#mesa div:nth-child(7) .key-name");
  carta8 = document.querySelector("#mesa div:nth-child(8) .key-name");
  carta9 = document.querySelector("#mesa div:nth-child(9) .key-name");
  carta10 = document.querySelector("#mesa div:nth-child(10) .key-name");
  carta11 = document.querySelector("#mesa div:nth-child(11) .key-name");
  carta12 = document.querySelector("#mesa div:nth-child(12) .key-name");
  carta13 = document.querySelector("#mesa div:nth-child(13) .key-name");
  carta14 = document.querySelector("#mesa div:nth-child(14) .key-name");

  carta1.innerText="W";
  carta2.innerText="E";
  carta3.innerText="R";
  carta4.innerText="T";
  carta5.innerText="Y";
  carta6.innerText="U";
  carta7.innerText="I";
  carta8.innerText="S";
  carta9.innerText="D";
  carta10.innerText="F";
  carta11.innerText="G";
  carta12.innerText="H";
  carta13.innerText="J";
  carta14.innerText="K";

}
