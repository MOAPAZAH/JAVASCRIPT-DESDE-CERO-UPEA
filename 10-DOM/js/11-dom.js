// click en eventos ver mas

const btnFlotante = document.querySelector(".btn-flotante");

console.log(btnFlotante);

const footer = document.querySelector("#footer");

console.log(footer);

btnFlotante.addEventListener("click", mostrarFooter);

function mostrarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    btnFlotante.classList.remove("activo");
  } else {
    footer.classList.add("activo");
    btnFlotante.classList.add("activo");
  }

  console.log("diste click aqui");
}

// TAREA
// - CUANDO SE LE DE CLICK SE MOSTRARA UN MENSAJE EN EL BOTON "MOSTRANDO"
// - CUANDO SE LE VUELVA A DAR CLICK "Ver más"
