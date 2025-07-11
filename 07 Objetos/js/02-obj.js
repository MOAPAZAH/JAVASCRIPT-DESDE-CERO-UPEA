// Acceder a los valores de un obj

const producto = {
  nombre: "Radio",
  precio: 20,
  disponible: true,
};

console.log(producto);

console.log(producto.nombre);
console.log(producto.precio);

// agregar propiedades del obj
producto.cantidad = 10;

// eliminar
delete producto.precio;

console.log(producto["nombre"]);
