// CAMBIAR CON CSS desde JS

const encabezado = document.querySelector("h1");
console.log(encabezado.style);

encabezado.style.backgroundColor = "red";
encabezado.style.textTransform = "uppercase";

const card = document.querySelector(".card");

card.classList.add("nueva-clase");

card.classList.remove("card");

console.log(card);
