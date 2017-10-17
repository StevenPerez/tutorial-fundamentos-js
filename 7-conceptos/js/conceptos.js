

// **************************************************
// NOTE               CONCEPTOS
// **************************************************

// ****************************************************************************
// IDEA FUNCTION SCOPE / Alcance de la Función
// NOTE Es la jerarquía sobre como accesar las variables, objetos y funciones.
// ****************************************************************************

// var nombre = 'Steven';   /* Variable Global */
//
// function miAlcance() {
//   var cuenta = '10010100';   /* cuenta solo existe dentro de la función */
//   console.log(cuenta);      // 10010100
//   console.log(nombre);      // Steven
// }
//
// miAlcance();
//
// console.log(nombre);        // Steven
// console.log(cuenta);        // cuenta is not defined





// ********************************************************************************************
// IDEA CLOSURE / Cierres
// NOTE Cuando una función utiliza una variable la cual fue declarada fuera de dicha función de manera privada.
// ********************************************************************************************

// var imprimir = (function() {
//   var saludo = 'hola';         /* Se define una variable */
//   function imprimirSaludo() {
//     console.log(saludo);       /* <- Closure: Se conserva el acceso a la variable saludo */
//   }
//   return imprimirSaludo;
// })();
//
// imprimir(); // =>  'hola'





// ****************************************************************************
// IDEA FACTORY / Fábrica
// NOTE Es una función que retorna un nuevo objeto.
// ****************************************************************************

// function calculadora() {
//   return {
//     sumar: function (num1, num2) {
//       return num1 + num2;
//     }
//   };
// }
//
// var cal = calculadora();
// cal.sumar(1, 2);





// ****************************************************************************
// IDEA INHERITANCE / Herencia
// NOTE Relacionar métodos y/o propiedades de un objeto a otro.
// ****************************************************************************

// var calculadora = {
//   sumar: function(num1, num2) {
//     return num1 + num2;
//   },
//   restar: function(num1, num2) {
//     return num1 - num2;
//   }
// };
//
// var cal = Object.create(calculadora); /* Hereda las propiedades de calculadora */
//
// cal.sumar(2, 2);  // 4
// cal.restar(2, 2); // 0





// ********************************************************************************************************
// IDEA OBJECT LITERALS / Objectos y Literales
// NOTE Es un objecto que contiene entre llaves propiedades con formato nombre:valor separados por comas..
// ********************************************************************************************************

// var persona = {
//   manos: 2,
//   piernas: 2,
//   caminar: function() { console.log('Caminando'); },
//   hablar: function() { console.log('Hablando'); },
// };
//
// console.log(persona.manos); // 2





// ************************************************************************************************
// IDEA POLYMORPHISM / Polimorfismo
// NOTE La posibilidad de llamar métodos en común de diferentes objectos sin alterar el resultado.
// ************************************************************************************************

// function fruta(ancho, alto) {
//   return {
//     descripcion: function() {
//       console.log('A. Dimensión de Fruta: ancho-' + ancho + ' / alto-' + alto);
//     },
//   };
// }
//
// function mercado(ancho, alto, precio) {
//   return {
//     descripcion: function() {
//       console.log('B. Dimensión de Fruta: ancho-' + ancho + ' / alto-' + alto + ' / $' + precio);
//     },
//   };
// }
//
// function mostrarDescripcion(obj) {
//   if (typeof obj.descripcion === 'function') {
//     obj.descripcion(); /* <-- Polimorfismo */
//   }
// }
//
// var miFruta = fruta(50, 60);
// var miMercado = mercado(50, 60, 25);
//
// mostrarDescripcion(miFruta);    // A. Dimensión de Fruta: ancho-50 / alto-60
// mostrarDescripcion(miMercado);  // B. Dimensión de Fruta: ancho-50 / alto-60 / $25





// ***************************************************************************************************
// IDEA METHOD CHAINING / Funciones en Cadena
// NOTE Técnica para simplificar la ejecución de múltiples métodos sobre una misma variable u objeto.
// ***************************************************************************************************

// var cal = function(num) {
//   var total = num || 0;
//   return {
//     sumar: function(num2) {
//       total = total + num2;
//       return this;           /* retorna this el cual contine sumar, restar e imprimirTotal */
//     },
//     restar: function(num2) {
//       total = total - num2;
//       return this;          /* retorna this el cual contine sumar, restar e imprimirTotal */
//     },
//     imprimirTotal: function() {
//       console.log(total);
//       return this;          /* retorna this el cual contine sumar, restar e imprimirTotal */
//     },
//   };
// };
//
// var calculator = cal(10);   /* num = 10 */
//
// calculator.sumar(10)        /* num = 20 */
//           .restar(2)        /* num = 18 */
//           .sumar(5)         /* num = 23 */
//           .imprimirTotal(); // 23





// ***************************************************************************************************
// IDEA RECURSION / Recursividad
// NOTE Técnica para iterar sobre una operación llamando una función por si misma múltiples veces.
// ***************************************************************************************************
/*
function imprimirNumHasta(hasta) {

  function imprimir(numero) {
    if (numero > hasta) {
      return numero;
    }

    console.log(numero);
    return imprimir(numero + 1);
  }

  return imprimir(1);
}

imprimirNumHasta(5);
*/
