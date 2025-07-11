// Como concatenar o unir 2 textos o variables

const producto = "Pantalla";
const precio = " 600 Bs";

// concat es un methodo
console.log(producto.concat(" En Descuento"));
console.log(producto.concat(precio));

// otras formas de concatenar

console.log(producto + precio);
console.log(" " + producto + " Con un precio de " + precio);

// ES6
console.log(`El producto ${producto} tiene un precio de  ${precio}`);
