//  Desestructuracion

// RECORDANDO LA DESESTRUCTURACION
const producto = {
  nombre: "Radio",
  precio: 40,
};

const { nombre } = producto;
console.log(nombre);

const numeros = [1, 2, 3, 4, 5, 6, 7];

// const [uno, dos, tres] = numeros;
// console.log(tres);

// const [, , , cuatro] = numeros;
// console.log(cuatro);

const [primero, segundo, ...resto] = numeros;
console.log(resto);
