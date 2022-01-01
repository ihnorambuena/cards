function barajarTarjetas (tarjetasABarajar) {
  var resultado;
  var dobleDeTarjetas = tarjetasABarajar.concat(tarjetasABarajar);
  resultado = dobleDeTarjetas.sort(
    function() {
      return 0.5 - Math.random();
  });
  return resultado;
};

function repartirTarjetas(tarjetasARepartir) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajarTarjetas(tarjetasARepartir);

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
          + '</div>'
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
  carta15 = document.querySelector("#mesa div:nth-child(15) .key-name");
  carta16 = document.querySelector("#mesa div:nth-child(16) .key-name");
  carta17 = document.querySelector("#mesa div:nth-child(17) .key-name");
  carta18 = document.querySelector("#mesa div:nth-child(18) .key-name");
  carta19 = document.querySelector("#mesa div:nth-child(19) .key-name");
  carta20 = document.querySelector("#mesa div:nth-child(20) .key-name");
  carta21 = document.querySelector("#mesa div:nth-child(21) .key-name");
  carta22 = document.querySelector("#mesa div:nth-child(22) .key-name");

  if (carta1) {carta1.innerText="W";}
  if (carta2) {carta2.innerText="E";}
  if (carta3) {carta3.innerText="R";}
  if (carta4) {carta4.innerText="T";}
  if (carta5) {carta5.innerText="Y";}
  if (carta6) {carta6.innerText="U";}
  if (carta7) {carta7.innerText="I";}
  if (carta8) {carta8.innerText="S";}
  if (carta9) {carta9.innerText="D";}
  if (carta10) {carta10.innerText="F";}
  if (carta11) {carta11.innerText="G";}
  if (carta12) {carta12.innerText="H";}
  if (carta13) {carta13.innerText="J";}
  if (carta14) {carta14.innerText="K";}
  if (carta15) {carta15.innerText="Z";}
  if (carta16) {carta16.innerText="X";}
  if (carta17) {carta17.innerText="C";}
  if (carta18) {carta18.innerText="V";}
  if (carta19) {carta19.innerText="B";}
  if (carta20) {carta20.innerText="N";}
  if (carta21) {carta21.innerText="M";}
  if (carta22) {carta22.innerText=",";}
}
