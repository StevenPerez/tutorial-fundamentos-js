

var carros = [];

//console.log(typeof carros);
//console.log(Array.isArray(carros));

// AGREGAR

carros.push({ nombre: 'Tesla', modelo: 2015, puntos: 10 });
carros.push({ nombre: 'Eclipse', modelo: 2014, puntos: 8 });
carros.push({ nombre: 'Mazda', modelo: 2012, puntos: 7 });
carros.push({ nombre: 'Toyota', modelo: 2013, puntos: 6 });

console.log(carros);

// var tesla = carros[0];
// console.log(tesla);


// SIDE EFFECTS (Efectos Secundarios)
//tesla.nombre = 'Pato';
//console.log(tesla);

// Forma Correcta
// tesla = Object.assign({}, carros[0]);
// tesla.nombre = 'Pato';
// console.log(tesla);

// LEER / ITERAR

for (var posicion = 0; posicion < carros.length; posicion++) {
  // console.log(carros[posicion].nombre);
}

carros.forEach(function(carro) {
  // console.log(carro.nombre);
});

var nombreCarros = carros.map(function (carro) {
  // console.log(carro.nombre);
  return carro.nombre;
});

// console.log(nombreCarros);


// BORRAR

function borrarCarro(nombre) {
  var posicionCarro = carros
    .map(function (carro) {
      return carro.nombre;
    })
    .indexOf(nombre); // -1

  if (posicionCarro > -1) {
    carros.splice(posicionCarro, 1);
  }
}

borrarCarro('Eclipse');
// console.log(carros);


// ACTUALIZAR

function actualizar(nombreA, nombreB) {
  carros
    .map(function(carro) {
      if (carro.nombre === nombreA) {
        carro.nombre = nombreB;
      }
      return carro;
    });
}

actualizar('Mazda', 'Ferrari');
// console.log(carros);



// ****************************************************
// IDEA FILTER (FILTRO), SOME (ALGUNO), EVERY (TODOS)
// ****************************************************

var mayor2013 = carros.filter(function(carro) {
  return carro.modelo > 2013;
});

console.log(mayor2013);


var alguno = carros.some(function(carro) {
  return carro.nombre === 'Ferrari';
});

console.log(alguno);

var cadaUno = carros.every(function(carro) {
  return carro.puntos > 5;
});

console.log(cadaUno);

var ordenar = carros.sort(function(carro1, carro2) {
  return carro1.nombre > carro2.nombre;
});

console.log(ordenar);


// MEZCLAR

var puntos = carros
  .map(function(carro) {
    return carro.puntos;
  })
  .sort(function(punto1, punto2) {
    return punto1 - punto2;
  })
  .filter(function(punto) {
    return punto > 6;
  });

console.log(puntos);
