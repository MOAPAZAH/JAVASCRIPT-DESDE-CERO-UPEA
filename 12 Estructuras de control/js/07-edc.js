// OPERADOR OR (O) ||  


let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;



// if (efectivo > totalCarrito) {
//    console.log("Si podemos pagar");
// }  else {
//    console.log("Fondos insuficientes");
// }

if (efectivo > totalCarrito || credito > totalCarrito) {
      console.log("Puedes pagar con efectivo o credito");
} else if (disponible >= totalCarrito) {
   console.log("Puedes pagar con ambos");
} else {
   console.log("No puedes pagar");
}

