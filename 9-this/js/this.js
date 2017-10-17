// **************************************************************************************************************
// IDEA THIS / Esto
// **************************************************************************************************************

function cuenta(usuario) {
  console.log('cuenta ', this);

  return {
    imprimirSeguridad: function() {
      console.log('imprimirSeguridad', this);
    }
  };

}

var $this = cuenta('Steven');
// $this.imprimirSeguridad();

var demo = {usuario: 'Yolo'};
$this = cuenta.call(demo);
$this.imprimirSeguridad();
