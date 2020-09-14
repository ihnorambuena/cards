var animales = [
  [{nombre:"panda", img:"010-panda.svg"},
  {nombre:"fox", img:"054-fox.svg"}],

  [{nombre:"pig", img:"157-pig.svg"},
  {nombre:"chicken", img:"130-chicken-1.svg"}],

  [{nombre:"dog", img:"165-dog.svg"},
  {nombre:"monkey", img:"150-monkey.svg"},
  {nombre:"lion", img:"161-lion.svg"}],

  [{nombre:"zebra", img:"018-zebra.svg"},
  {nombre:"wolf", img:"116-wolf.svg"}],

  [{nombre:"gorilla", img:"030-gorilla.svg"},
  {nombre:"owl", img:"122-owl.svg"}]
];

var nivelActual = 0;
var niveles = [
  {
    tarjetas: animales[0],
    movimientosMax:3, minMax: 0, segMax: 20},
  {
    tarjetas: animales[0].concat(
      animales[1]),
    movimientosMax:8, minMax: 0, segMax: 30},
  {
    tarjetas: animales[0].concat(
      animales[1],
      animales[2]),
    movimientosMax:12, minMax: 0, segMax: 40},
  {
    tarjetas: animales[0].concat(
      animales[1],
      animales[2],
      animales[3]),
    movimientosMax:18, minMax: 0, segMax: 50},
  {
    tarjetas: animales[0].concat(
      animales[1],
      animales[2],
      animales[3],
      animales[4]),
    movimientosMax:25, minMax: 1, segMax: 0}
];

var movimientos = 0;
var estadoCronometro = "iniciado";
var estadoTemporizador = "iniciado";
var estadoDePartida = "andando";
var minTemp;
var segTemp;
var estadoPista = "inactivo";
var modoRelax = false;
var cronometrus;
