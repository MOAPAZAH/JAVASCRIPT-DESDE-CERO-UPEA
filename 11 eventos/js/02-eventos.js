// Evento del mouse

const nav = document.querySelector(".navegacion");

// nav.addEventListener("click", () => {
//    console.log("Diste click en nav");
// });

// vamos a registrar el eventListener para el nav
// nav.addEventListener("mouseenter", () =>{
//    console.log("Entrando a la navegacion");
//    nav.style.backgroundColor = "white";
// })

// nav.addEventListener("mouseout", ()=>{
//    console.log("Saliendo de la navegacion");
//   nav.style.backgroundColor = "transparent"; 
// })

// nav.addEventListener("mousedown", ()=>{
//    console.log("Diste click en nav con mousedown");
// })


// nav.addEventListener("dblclick", ()=>{
//    console.log("Diste doble click en nav");
// })

nav.addEventListener("mouseup", ()=>{
   console.log("soltaste el mouse");
})

