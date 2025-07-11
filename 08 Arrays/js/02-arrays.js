// Recorrer un arreglo

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
];
console.table(meses);

console.log(meses[0]);
console.log(meses[2]);

console.log(meses.length); //8

for (let i = 0; i < meses.length; i++) {
  //   console.log(i);
  // iterrar
  console.log(meses[i]);
}
