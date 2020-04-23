var emoticonos = ["🐔", "🦊", "🐸", "🐌", "🐴", "🦖", "🐬"];

var dobleDeEmoticonos = emoticonos.concat(emoticonos);

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
        + '<div class="tarjeta">'
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


function descubrir() {
  this.classList.add("descubierta");
};

function ocultar() {
  this.classList.remove("descubierta");
};


document.querySelectorAll(".tarjeta").forEach(function(e) {
  e.addEventListener("click", descubrir);
  e.addEventListener("click", tarjetasDescubiertas);
});

function tarjetasDescubiertas() {
  document.querySelectorAll(".descubierta").forEach(function(e) {
    e.addEventListener("click", ocultar);
    // e.addEventListener("click", tarjetasCubiertas);
    // console.log(e);
  });
};

// function volverABarajar() {
//   var boton = document.querySelector("boton");
//   boton.addEventListener("click", barajarTarjetas);
//   boton.addEventListener("click", repartirTarjetas);
// };

// ***Nota: Aquí estoy intentando descubrir y cubrir
// la tarjeta cuantas veces yo quiera.***
// function tarjetasCubiertas() {
//   document.querySelectorAll(".tarjeta").forEach(function(e) {
//     e.addEventListener("click", descubrir);
//     e.addEventListener("click", tarjetasDescubiertas);
//   });
// }
