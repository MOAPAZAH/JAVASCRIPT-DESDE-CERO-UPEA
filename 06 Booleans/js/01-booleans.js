// Booleans
//true o  false

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"; // esto no es booleano

console.log(boolean1);
console.log(boolean2);
console.log(typeof boolean1);

console.log(boolean1 == boolean3); //true
console.log(boolean1 === boolean3); // false

let esDiaSoleado = true;
let esFinDeSemana = false; // estudes

if (esDiaSoleado) {
  console.log("Es un buen dia para salir");
} else {
  console.log("Es mejor quedarse en casa");
}

if (esFinDeSemana) {
  console.log("Es fin de semana");
} else {
  console.log("A trabajar...");
}
