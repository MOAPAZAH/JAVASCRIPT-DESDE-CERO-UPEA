// Replace, slice y substring
const producto = "Television 20 pulgadas";
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("20", "30"));

console.log(producto.slice(0, 13));
console.log(producto.slice(10));
console.log(producto.slice(5, 10));

console.log(producto.slice(2, 1));

console.log(producto.substring(0, 13));

console.log(producto.substring(5, 1));

console.log(producto.charAt(5));
