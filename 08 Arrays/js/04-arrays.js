// AÑADIR NUEVOS ELEMENTOS  AL FINAL Y AL INICIO DE UN ARREGLO

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];

meses[7] = "agosto";

console.log(meses);

// UTILIZANDO METODOS

meses.push("septiembre");
console.log(meses);

// EJEMPLO DE CARRITO DE COMPRAS
const carrito = [];

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

console.log(producto);
carrito.push(producto); // final
carrito.push(producto2); // final
carrito.unshift(producto3); // inicio
carrito.push(producto4);

console.table(carrito);
