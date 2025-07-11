// Eliminar elementos con el metodo splice

const carrito = [];

// agrgear productos al carrito

const producto = {
  nombre: "television",
  precio: 400,
};

const producto2 = {
  nombre: "Radio",
  precio: 200,
};

const producto3 = {
  nombre: "Consola",
  precio: 500,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

console.table(carrito);

// carrito.pop(); // Eliminamos el ultimo elemento del array
// console.table(carrito);

// carrito.shift(); //  Eliminamos el inicio del elemento array
// console.table(carrito);

// splice(posicion, cantidad de elementos que quiero eliminar)
carrito.splice(0, 2);
console.table(carrito);
