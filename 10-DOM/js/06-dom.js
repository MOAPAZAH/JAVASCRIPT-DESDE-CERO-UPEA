// modificar el texto de la parte superior

// const encabezado = document.querySelector(".contenido-hero h1");
// console.log(encabezado);

// console.log(encabezado.innerText); // no lo va mostrar es como ocultarlo
// console.log(encabezado.textContent); // si lo va encontrar
// console.log(encabezado.innerHTML); // Se trae el html

const textoEncabezado =
  document.querySelector(".contenido-hero h1").textContent;
console.log(textoEncabezado);

document.querySelector(".contenido-hero h1").textContent = "NUEVO TEXTO";

// TAREA  MODIFICAR UNA IMAGEN
const imagen = document.querySelector(".card img");
console.log(imagen.src);
// cambiar por cualquiera de esas imagenes hacer2.jpg,hacer3.jpg,hacer4.jpg
