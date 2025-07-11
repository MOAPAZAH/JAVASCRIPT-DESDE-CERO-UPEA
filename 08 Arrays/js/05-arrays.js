// CREAR NUEVO ARREGLO CON EL SPREAD OPERATOR (operador de propagacion)
//   (...)

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

const producto4 = {
  nombre: "Grabadora",
  precio: 100,
};

let resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [...resultado, producto3];

resultado = [producto4, ...resultado];

console.table(resultado);
