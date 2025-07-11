// creando variables que seran utilizadas posteriomente.
const ListaCursos = document.querySelector("#lista-cursos");
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];


// cargando eventos 
cargarEventosListeners();
// primero vamos ver como agregar al curso
function cargarEventosListeners() {
   // console.log("Cargando...");
   ListaCursos.addEventListener("click", agregarCurso) // para agregar un curso

   carrito.addEventListener("click", eliminarCurso); // para eliminar un curso

   vaciarCarrito.addEventListener("click", () => {   // para vaciar un curso
      // console.log('vaciando..');
      articulosCarrito = []; // reseteamos el arreglo
      limpiarHTML();// limpiar el html

   })
   // localStorage
   document.addEventListener("DOMContentLoaded", () => {
      articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carritoHTML();
   })
  

}

function agregarCurso(e) {
   e.preventDefault();
   // console.log("click en agregar");
   // console.log(e.target);
   // console.log(e.target.classList);
   if (e.target.classList.contains("agregar-carrito")) { // contains verifica si el usuario ya preciono 
      // console.log("Agregando al carrito");
     const cursoSeleccionado = e.target.parentElement.parentElement;
   //   console.log(cursoSeleccionado); 
      leerDatosCurso(cursoSeleccionado);
   }
}

function eliminarCurso(e) {
   // console.log("Desde eliminar curso");
   // console.log(e.target.classList);
   if (e.target.classList.contains("borrar-curso")) {
      // console.log(e.target.getAttribute('data-id'));
      const cursoId = e.target.getAttribute('data-id');
      // console.log(cursoId);
      // Elimina el arreglo del articuloCarrito por el data-id
      articulosCarrito = articulosCarrito.filter(cursoSeleccionado => cursoSeleccionado.id !== cursoId)
      // El método .filter() es una función de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan (proporcionada como una función)
      // console.log(articulosCarrito);
      carritoHTML();
   }
}

function leerDatosCurso(cursoSeleccionado){
   // console.log(cursoSeleccionado);
  // crear un objeto del curso 
   const infoCurso = {
      imagen: cursoSeleccionado.querySelector('img').src,
      titulo: cursoSeleccionado.querySelector('h4').textContent,
      precio: cursoSeleccionado.querySelector('.precio span').textContent.replace('$', ''),
      id: cursoSeleccionado.querySelector('.agregar-carrito').getAttribute('data-id'),
      cantidad: 1
   }
   const existe = articulosCarrito.some(cursoSeleccionado => cursoSeleccionado.id === infoCurso.id);
   // El método some() en JS se utiliza para verificar si al menos un elemento de un array cumple con una determinada condición
   // console.log(existe);
   if (existe) {
      // actualizamos la cantidad
      const cursos = articulosCarrito.map(cursoSeleccionado => {
         if (cursoSeleccionado.id === infoCurso.id) {
            cursoSeleccionado.cantidad++;
            cursoSeleccionado.total = cursoSeleccionado.precio * cursoSeleccionado.cantidad;
            return cursoSeleccionado; // RETONA EL OBJETO ACTUALIZADO
         } else {
            return cursoSeleccionado; //  RETORNA LOS OBJ QUE NO SON DUPLICADOS.
         }
      })
      articulosCarrito = [...cursos];
   } else{
      // agregamos elementos al carrito
      infoCurso.total = infoCurso.precio;
      articulosCarrito = [...articulosCarrito, infoCurso];
   }
   // console.log(articulosCarrito);
   // console.log(infoCurso);
   carritoHTML();
}
// Mostrar el carrito de compras en el html, la parte de la tabla tbody
function carritoHTML() {
   limpiarHTML();
articulosCarrito.forEach(cursoSeleccionado => {
   const row = document.createElement("tr");
row.innerHTML = `
   <td>
     <img src="${cursoSeleccionado.imagen}" width="70">
   </td>
   <td>
      ${cursoSeleccionado.titulo}
   </td>
   <td>
      $${cursoSeleccionado.precio}
   </td>
   <td>
      ${cursoSeleccionado.cantidad}
   </td>
    <td>
      $${cursoSeleccionado.total}
   </td>
   <td>
     <a href="#" class="borrar-curso" data-id="${cursoSeleccionado.id}">Borrar</a>
   </td>
`;
   contenedorCarrito.appendChild(row);
});
   sincronizarStorage(); // con localStorage
}

// creando funciona para el localStorage
function sincronizarStorage() {
     localStorage.setItem("carrito", JSON.stringify(articulosCarrito))
}

function limpiarHTML() {
   contenedorCarrito.innerHTML = '';
}

