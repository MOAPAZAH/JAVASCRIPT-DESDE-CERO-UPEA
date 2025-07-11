// SI SE DESEA REVISAR SI SE CUMPLE MAS DE UNA CONDICION



// let rol = "ADMIN";
// let rol2 = "EDITOR";
// let rol3 = "USUARIO";
let rol4 = "PUBLICADOR"


if (rol4 === "ADMIN") {
   console.log("El usuario puede editar, eliminar, crear y leer contendido etc.");
} else if (rol4 === "EDITOR") {
   console.log("El usuario puede editar los registros");
} else if(rol4 === "USUARIO") {
   console.log("El usuario puede leer los registros");
} else {
   console.log("El usuario no tiene permisos");
}
