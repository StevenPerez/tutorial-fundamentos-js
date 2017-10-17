
var persona = {
  nombre: 'Steven',
  pasos: 0,
  hablar: function() {
    console.log(this.nombre + ' está hablando...');
  },
  caminar: function caminar() {
    this.pasos++;
    console.log(this.nombre + ' está caminando... ' + this.pasos + ( (this.pasos > 1) ? ' pasos' : ' paso' ));
  },
  detener: function detener() {
    console.log(this.nombre + ' está congelado :) ');
  }
}

persona.hablar();
persona.detener();
persona.caminar();
persona.caminar();

// Object Functions / Funciones de objetos

function mascota(nombre) {
  return {
    comida: 0,
    nombre: nombre,
    comer: function comer() {
      this.comida = this.comida + 10;
    }
  }
}

var spanki = mascota('Spanki');

var terry = mascota();
terry.nombre = 'Terry';

console.log(spanki);
console.log(terry);

spanki.comer();
spanki.comer();
console.log(spanki.comida);

terry.comer();
console.log(terry.comida);
