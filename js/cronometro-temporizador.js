function iniciarCronometro () {
  var minutos = 0;
  var segundos = 0;
  var textoMinutos;
  var textoSegundos;
  console.log("Cronómetro iniciado");

  function actualizarContador (){
    segundos++;
    if (segundos>59) {
      segundos = 0;
      minutos++;
    }
    textoMinutos=minutos;
    textoSegundos=segundos;

    if (minutos<10) {
      textoMinutos="0"+minutos;
    }
    if (segundos<10) {
      textoSegundos="0"+segundos;
    }

    // console.log(textoMinutos + ":" + textoSegundos);
    document.querySelector("#minutos").innerText = textoMinutos;
    document.querySelector("#segundos").innerText = textoSegundos;
    if (estadoCronometro==="detenido") {
      clearInterval(cronometro);
    }
  }

  cronometro = setInterval(actualizarContador, 1000);
}

function iniciarTemporizador (min, seg) {
  var minutos = min;
  var segundos = seg;
  var textoMinutos;
  var textoSegundos;
  var temporizador;
  console.log("Temporizador de "+minutos+" minutos y "+segundos+" segundos iniciado");

  function actualizarContador (){
    // console.log(minutos+":"+segundos);
    segundos--;
    if (segundos<0) {
      segundos = 59;
      minutos--;
    }
    if (minutos<0) {
      minutos = 0;
      segundos = 0;
      estadoTemporizador="detenido";
      finalizar("modoSinTiempo");
      estadoDePartida = "detenido";
    }
    textoMinutos=minutos;
    textoSegundos=segundos;

    if (minutos<10) {
      textoMinutos="0"+minutos;
    }
    if (segundos<10) {
      textoSegundos="0"+segundos;
    }

    document.querySelector("#minutos").innerText = textoMinutos;
    document.querySelector("#segundos").innerText = textoSegundos;
    if (estadoTemporizador==="detenido") {
      clearInterval(temporizador);
    }
  }

  temporizador = setInterval(actualizarContador, 1000);
}
