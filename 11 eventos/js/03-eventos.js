// EVENTOS DEL TECLADO

const busqueda = document.querySelector(".busqueda");

// busqueda.addEventListener("input", () => {
//    console.log("Escribiendo....");
// })


// input - cuando llenamos el input
// keydown - cuando llenamos el input
// keyup - cuando sueltas la tecla 
// blur  - cuando salimos del input  - ideal para validaciones


// cut 
// copy
// paste
// input

// busqueda.addEventListener("input",(e)=>{
//    console.log(e);
//    console.log(e.target.value);
// });

busqueda.addEventListener("input", leerInput);
function leerInput(e) {
   console.log(e);
}

