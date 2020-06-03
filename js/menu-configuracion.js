function activarPistas() {
  if (estadoPista === "activo") {
    estadoPista = "inactivo";
    document.querySelector("#inter-pista").classList.remove("inter-on");
    document.querySelector("#inter-pista").classList.add("inter-off");
  } else {
    estadoPista = "activo";
    document.querySelector("#inter-pista").classList.add("inter-on");
    document.querySelector("#inter-pista").classList.remove("inter-off");
  }
  console.log(estadoPista);
}

function pista(){
  carta = document.querySelectorAll(".descubierta:not(.acertada)");

  dataNombre = carta[0].dataset.nombre;

  cartaPar = document.querySelector('[data-nombre="'+dataNombre+'"]:not(.descubierta)');

  if (cartaPar) {
    cartaPar.classList.add("pista");
    setTimeout(function() {
      cartaPar.classList.remove("pista");
    }, 1000);
  }
}

function activarFxSonido() {
  document.querySelector("#son-yes").toggleAttribute("muted");
  document.querySelector("#son-no").toggleAttribute("muted");
  document.querySelector("#son-giro").toggleAttribute("muted");
  document.querySelector("#inter-son").classList.toggle("inter-off");
  document.querySelector("#inter-son").classList.toggle("inter-on");
}

document.querySelector("#botonConfig").addEventListener ("click", abrirCerrar);

document.querySelector("#inter-pista").addEventListener("click", activarPistas);

document.querySelector("#inter-son").addEventListener("click", activarFxSonido);

function abrirCerrar () {
  document.querySelector("#menuConfig").classList.toggle("visible");
  if (document.querySelector("#menuConfig.visible")) {
    document.querySelector("#botonConfig img").setAttribute("src", "img/icons/x.svg");
  } else {
    document.querySelector("#botonConfig img").setAttribute("src", "img/icons/config.svg");
  }
}
