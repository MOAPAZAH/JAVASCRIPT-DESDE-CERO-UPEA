// VEAMOS QUE SON EL OPERADOR AND && (Y)  ALT + 38 

// CODIGO ASCII 

const usuario = true;
const puedePagar = true;

// if (usuario && puedePagar) {
//    console.log("Tu pedido se hizo con exito");
// } else {
//    console.log("Hubo un error con tu pago");
// }



// cambiar true o false

if (usuario && puedePagar) {
   console.log("Tu pedido se hizo con exito");
} else if (!usuario) {
   console.log("Inicia sesión para realizar el pedido");
} else if (!puedePagar) {
   console.log("Fondos insuficientes");
} else {
   console.log("Hubo un error con tu pago");
}