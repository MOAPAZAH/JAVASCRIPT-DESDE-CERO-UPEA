// Foreach para iterrar un array

const carrito = [
  { nombre: "Radio", precio: 90 },
  { nombre: "television", precio: 400 },
  { nombre: "Mouse", precio: 50 },
];

// forma clasica
for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Forma moderna
carrito.forEach(function (productos) {
  console.log(`${productos.nombre} - Precio: ${productos.precio}`);
});
