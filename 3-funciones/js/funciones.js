
function caminar() {
  console.log('Estoy caminando !');
}

caminar();

function contar(de, hasta) {
  console.log('Contando de ' + de + ' hasta ' + hasta);
}

contar(1, 3);


function sumar(num1, num2) {
  return num1 + num2;
}

var total = sumar(1, 2);
total = sumar(2, 2);
console.log(total);

console.log(typeof sumar);
var yolo = sumar;
var total2 = yolo(2, 2);
console.log(total2);

// Funciones Anónimas

var password = function (num) {
  return num * 4;
}

console.log( password(2) );
console.log( password(1) );

// IIFE

(function(sonrisa) {
  var seguro = 'seguro ';
  console.log('Esto es ' + seguro + sonrisa);
})(';)');

// Callback (Llamada de vuelta)

function Batman(edad) {
  console.log('Edad de Batman ' + edad);
}

function Superman(func) {
  console.log('Edad de Superman: 40');
  func(39);
}

Superman(Batman);
