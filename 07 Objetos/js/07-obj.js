// Funciones en objetos y accediendo a sus valores

// this

const producto = {
  nombre: "Radio",
  precio: 20,
  disponible: true,
  miFuncion: function () {
    console.log("Hola");
  },
};

console.log(producto);
producto.miFuncion();

const nombre = "Television";
const precio = 800;

const producto2 = {
  nombre: "Radio",
  precio: 20,
  disponible: true,
  miFuncion: function () {
    console.log(
      "El producto: " + this.nombre + "Tiene un precio de : " + this.precio
    );
  },
};

producto2.miFuncion();
