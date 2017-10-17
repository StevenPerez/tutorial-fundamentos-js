// ******************************************************************
// IDEA DOM (Document Object Model) / Modelo de objeto de documento
// ******************************************************************

var btnContador = document.getElementById('contador');
var lblVisualizar = document.querySelector('.visualizar');

function incrementar() {
  lblVisualizar.innerHTML = parseInt(lblVisualizar.innerHTML) + 1;
}

btnContador.addEventListener('click', incrementar);
