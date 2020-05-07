var animales = [
  [{nombre:"panda", img:"010-panda.svg"},
  {nombre:"fox", img:"054-fox.svg"}],

  [{nombre:"pig", img:"157-pig.svg"},
  {nombre:"chicken", img:"130-chicken-1.svg"}],

  [{nombre:"dog", img:"165-dog.svg"},
  {nombre:"monkey", img:"150-monkey.svg"},
  {nombre:"lion", img:"161-lion.svg"}]
];

var nivelActual = 0;
var niveles = [
  {tarjetas: animales[0]},
  {tarjetas: animales[0].concat(animales[1])},
  {tarjetas: animales[0].concat(animales[1], animales[2])}
];

var movimientos = 0;
var estadoCronometro = "iniciado";
