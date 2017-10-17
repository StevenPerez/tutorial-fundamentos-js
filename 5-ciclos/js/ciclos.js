

// *****************************************
// IDEA Ciclo FOR (Iterar De - Hasta)
// *****************************************

for (var galleta = 0; galleta < 5; galleta++) {
  console.log('Galleta ' + galleta);
    // Galleta = 0, 1, 2
  if (galleta === 2) {
    break;
  }
}

// *****************************************
// IDEA Ciclo Do - While (Hacer - Mientras)
// *****************************************

var confite = 0;

do {
  console.log('Confite ' + confite);
  if (confite === 2) {
    break;
  }
  confite++;
} while (confite < 5);

// *****************************************
// IDEA Ciclo While (Mientras)
// *****************************************

var combo = 0;

while (combo < 5) {
  console.log('Combo ' + combo);
  combo++;
  if (combo === 2) {
    continue;
    console.log('No aparezco');
  }
}

// *****************************************
// IDEA FOR - IN (Iterar En)
// *****************************************

var persona = {
  nombre: 'Steven',
  edad: 10
}

for (var atributo in persona) {
  console.log(persona[atributo]);
}
