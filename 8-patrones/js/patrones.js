

// **************************************************
// NOTE          PATRONES DE DISEÑO
// **************************************************


// **************************************************************************************************************
// IDEA MODULE PATTERN / Patrón de módulo
// **************************************************************************************************************

function Carro() {
  var marca = "Tesla X";
  var modelos = [2016, 2017];

  function mostrarMarca() {
      console.log( marca );
  }

  function desplegarModelos() {
    modelos.forEach(function(modelo) {
      console.log(modelo);
    });
  }

  return {
      mostrarMarca: mostrarMarca,
      desplegarModelos: desplegarModelos
  };
}

var carro = Carro(); // No se requiere la palabra 'new'

console.log(carro);
carro.mostrarMarca();
carro.desplegarModelos();




/*
var carro = (function Carro() {
    var marca = "Tesla X";
    var modelos = [2016,  2017]

    function mostrarMarca() {
        console.log( marca );
    }

    function desplegarModelos() {
      modelos.forEach(function(modelo) {
        console.log(modelo);
      });
    }

    return {
        mostrarMarca: mostrarMarca,
        desplegarModelos: desplegarModelos
    };
})();

console.log(carro);
carro.mostrarMarca();
carro.desplegarModelos();
*/
