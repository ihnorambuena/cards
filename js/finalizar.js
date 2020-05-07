function finalizar (){
  var mesa = document.querySelector("#mesa");
  var minutoFinal = document.querySelector("#minutos").innerText;
  var segundoFinal = document.querySelector("#segundos").innerText;
  var tiempoFinal = minutoFinal + ":" + segundoFinal;
  var movFinal = parseInt(document.querySelector("#mov").innerText);

  document.querySelector("#body").classList.add("bg-body");

  mesa.innerHTML="";
  document.querySelector("#tiempoFinal").innerText = tiempoFinal;
  document.querySelector("#movFinal").innerText = movFinal;
  // document.querySelector("#finalizado").classList.add("visible");

  if (nivelActual<niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
