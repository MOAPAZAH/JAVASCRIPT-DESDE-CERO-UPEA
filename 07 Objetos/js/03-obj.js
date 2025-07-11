// Vamos asignale variables a un obj

const producto = {
  nombre: "piña",
  precio: 10,
  peso: "1kg",
};

const nombreProducto = producto.nombre;
console.log(nombreProducto);

// Desestructuracion de objetos
const { nombre, precio, peso } = producto;
console.log(nombre);
console.log(precio);
console.log(peso);
