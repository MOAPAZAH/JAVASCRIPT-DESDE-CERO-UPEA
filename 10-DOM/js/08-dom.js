// TRAVERSING THE DOM
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector(".card");
console.log(card.nodeType);

console.log(card.children[1]);
console.log(card.children[1].children[1]);
console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = "Cambiando el texto";

console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

card.children[0].src = "img/hacer2.jpg";

// parent

const enlace = document.querySelector("a");
console.log(enlace);

console.log(enlace.parentNode);
console.log(enlace.parentElement);

console.log(enlace.parentElement.parentElement);

console.log(enlace.nextElementSibling.nextElementSibling);

// cards
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);
