//

const primerEnlace = document.querySelector("a");
console.log(primerEnlace);

primerEnlace.remove();

const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);

const borrar = navegacion.children[1];
navegacion.removeChild(borrar);
