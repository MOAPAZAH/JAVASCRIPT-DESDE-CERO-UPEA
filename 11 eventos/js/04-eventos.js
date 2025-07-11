// EVENTOS SUBMIT A UN FORMULARIO

const formulario = document.querySelector(".formulario ");

formulario.addEventListener("submit", (e)=> {
   e.preventDefault();
   // console.log("Enviando...");

   console.log(e);
   console.log(e.target.action);

});


