// Funciones para convertir a numeros

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// console.log(numero1); //string

//Convertir de String a Numeros
console.log(Number.parseInt(numero1)); // Convertir de string a numero
console.log(Number.parseFloat(numero2)); // Convertir a numero con decimales
console.log(Number.parseInt(numero3)); // NAN quiere decir que no es numero

console.log(Number.isInteger(numero4));
