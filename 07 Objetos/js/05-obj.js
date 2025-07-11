// Como hacer desestructuracion de objetos anidado que esten dentro de otro objeto

const producto = {
  nombre: "Radio",
  precio: 20,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      origen: "Bolivia",
    },
  },
};

const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { origen },
  },
} = producto;

// console.log(nombre);
console.log(informacion);
console.log(origen);
console.log(fabricacion);

// TAREA ACCEDER A medida
