// Nombre: realViewportHeight.js
// Forma de usar:
  // Antes -> height: 100vh;
  // Ahora -> height: calc(100 * var(--vh, 1vh));
  //Nota: las variables en CSS pueden tener un valor de reserva. En este caso el "1vh" en la declaración es el valor de reserva el cual solo se usara si algo falla y no encuentra el valor de la variable "--vh".

var vh;
console.log("RealVH Activado");

function realViewportHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return vh;
}

realViewportHeight();
window.addEventListener('resize', realViewportHeight);
window.addEventListener('load', realViewportHeight);
