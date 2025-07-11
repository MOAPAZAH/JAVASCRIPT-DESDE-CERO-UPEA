// Comparar 2 valores si un numeroe es igual al otro

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true

console.log(numero1 === numero2); // false

// Typeof
console.log(typeof numero1);
console.log(typeof numero2);

console.log(numero1 === parseInt(numero2)); // Con parseInt conviento un string a numero // TRUE

// Diferente a
console.log(numero1 != numero3);
console.log(numero1 != numero2); // false
console.log(numero1 !== numero2); // true
// tranformar
