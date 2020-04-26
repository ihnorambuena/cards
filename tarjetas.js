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

  comparar (totalDescubiertas);
};

function comparar(cosaAComparar) {
  if (cosaAComparar[0].dataset.valor === cosaAComparar[1].dataset.valor) {
    acierto(cosaAComparar);
  } else {
    error(cosaAComparar);
  }
}

function acierto (ayu) {
  console.log("acierto");
  ayu.forEach(function(e) {
    e.classList.add("acertada");
  });
}

function error (eje) {
  console.log("error");
  eje.forEach(function(e) {
    e.classList.remove("descubierta");
  });
}

// function ocultar() {
//   this.classList.remove("descubierta");
// };


document.querySelectorAll(".tarjeta").forEach(function(e) {
  e.addEventListener("click", descubrir);
  e.addEventListener("click", tarjetasDescubiertas);
});

function tarjetasDescubiertas() {
  document.querySelectorAll(".descubierta").forEach(function(e) {
    // e.addEventListener("click", ocultar);
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
