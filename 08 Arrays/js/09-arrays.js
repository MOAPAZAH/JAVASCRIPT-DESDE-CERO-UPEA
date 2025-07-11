// .map

const carrito = [
  { nombre: "Radio", precio: 90 },
  { nombre: "television", precio: 400 },
  { nombre: "Mouse", precio: 50 },
];

const nuevoArreglo = carrito.forEach(function (productos) {
  console.log(`${productos.nombre} - Precio: ${productos.precio}`);
});

const nuevoArreglo2 = carrito.map(function (productos) {
  console.log(`${productos.nombre} - Precio: ${productos.precio}`);
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
