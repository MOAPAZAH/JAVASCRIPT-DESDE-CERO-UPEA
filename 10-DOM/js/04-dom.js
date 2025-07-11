// querySelector con clases

const card = document.querySelector(".card"); // trae solo el primer card que encuentre
console.log(card);

const info = document.querySelector(".premium .info");
console.log(info);

const segundoCard = document.querySelector(
  ".contenedor-cards .card:nth-child(2)"
);
console.log(segundoCard);

// querySelector con id
const formulario = document.querySelector("#formulario");
console.log(formulario);
