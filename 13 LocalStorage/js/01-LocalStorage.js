

localStorage.setItem("Nombre", "Sergio Yujra");

// sessionStorage.setItem("Nombre", "Sergio Yujra");


const producto = {
   nombre:"tv",
   precio: 300
}

// para mandar el obj a localStorage, Convertirlo a String

const productoString = JSON.stringify(producto);
console.log(typeof productoString);

localStorage.setItem("Producto", productoString);

// ARREGLO
const meses = ["enero", "febrero", "marzo"];
const mesesString = JSON.stringify(meses);

localStorage.setItem("meses", mesesString);

