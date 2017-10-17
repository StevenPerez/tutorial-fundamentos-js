

// SWITCH

var mascota = 'Spanki';

switch (mascota) {
  case 'Toby':
    console.log('Es Toby');
  break;
  case 'Paquita':
    console.log('Es Paquita');
  break;
  case 'Spanki':
    console.log('Spanki !!!');
  break;
  default:
    console.log('No encontrado');
}

var poblacion = 400;

switch (true) {
  case (poblacion > 500):
    console.log('Mayor a 500');
  break;
  case (poblacion === 500):
    console.log('Igual a 500');
  break;
  default:
    console.log('Menor a 500');
}
