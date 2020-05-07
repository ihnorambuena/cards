function subeNivel() {
  nivelActual++;
};

function actualizaNivel() {
  var textoNivel = nivelActual + 1;
  if (textoNivel < 10) {
    textoNivel = "0" + textoNivel;
  }
  document.querySelector("#nivel").innerText = textoNivel;
};

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
};
