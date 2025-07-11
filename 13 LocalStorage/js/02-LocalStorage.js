// OBTENER DE REGRESO 

const nombre = localStorage.getItem("Nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("Producto");
// console.log(productoJSON);

// Convertimos un string a un obj
console.log(JSON.parse(productoJSON));


// MESES
const meses = localStorage.getItem("meses");
console.log(JSON.parse(meses));
