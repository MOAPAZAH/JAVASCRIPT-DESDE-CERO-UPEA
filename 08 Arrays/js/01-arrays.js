// ARRAY

const numeros = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(numeros);

const todo = [
  10,
  "string",
  false,
  null,
  undefined,
  { nombre: "Sergio", apellido: "Yujra" },
  [1, 2, 3],
];
console.log(todo);

// Como accedo a un array
console.table(numeros);
console.log(numeros[0]);
console.log(numeros[2]);

// ARREGLOS DE ARREGLOS
const numero2 = [100, 200, 300, 400, 500, 600, 700, 800, 900, [10, 20, 30]];

console.log(numero2);
console.log(numero2[9][2]);
