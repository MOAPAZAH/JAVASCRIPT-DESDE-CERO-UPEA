// Objetos dentro de objetos

const producto = {
  nombre: "pina",
  precio: 20,
  peso: "1kg",
  informacion: {
    cantidad: 20,
    origen: "Boliviana",
  },
};

console.log(producto);
console.log(producto.informacion.origen);

// tarea extraer pais
const producto2 = {
  nombre: "pina",
  precio: 20,
  peso: "1kg",
  informacion: {
    medida: {
      medida: "1m",
    },
    fabricacion: {
      pais: "Bolivia",
    },
  },
};
