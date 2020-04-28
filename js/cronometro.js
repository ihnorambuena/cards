function iniciarCronometro () {
  console.log("funcionando");
  var minutos = 0;
  var segundos = 0;



  function actualizarContador (){
    // console.log(segundos);
    segundos++;
    if (segundos>19) {
      segundos = 00;
      minutos++;
    }


    console.log(minutos+":"+segundos);
  }

  setInterval(actualizarContador, 1000);

}
