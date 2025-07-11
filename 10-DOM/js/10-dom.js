// const enlace = document.querySelector("a");
// console.log(enlace);

// enlace.textContent = "NUEVO ENLACE";
// enlace.href = "/nuevo-enlace";

// enlace.classList.add("enlace");
// enlace.setAttribute("data-enlace", "nuevo-enlace");

// const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace);
// console.log(enlace);

// card

// parrafos
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto creado";
parrafo1.classList.add("categoria-creada");
parrafo1.classList.add("concierto-creado");

console.log(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "TEXTO CREADO";
parrafo2.classList.add("titulo-creado");
console.log(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.textContent = "90 bs";
parrafo3.classList.add("precio-creado");
console.log(parrafo3);

// crear el div

const infoCreado = document.createElement("div");
infoCreado.classList.add("info-creado");
infoCreado.appendChild(parrafo1);
infoCreado.appendChild(parrafo2);
infoCreado.appendChild(parrafo3);

console.log(infoCreado);

// crear imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer3.jpg";

console.log(imagen);

// crear el card padre

const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(infoCreado);

console.log(card);

// insertando a html

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
