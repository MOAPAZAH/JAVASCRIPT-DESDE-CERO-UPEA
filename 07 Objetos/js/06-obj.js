// Copiar objetos de otro objeto

const producto = {
  nombre: "Radio",
  precio: 20,
  disponible: true,
};

const informacion = {
  cantidad: 20,
  origen: "China",
};

// rest operator
const unido = { ...producto, ...informacion };
console.log(unido);

// otra forma
const resultado = Object.assign(producto, informacion);
console.log(resultado);
