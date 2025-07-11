// SWITCH


const usuarios = "publicador";

switch (usuarios) {
   case "admin":
        console.log("Acceso a todos los cursos" + " " + usuarios); 
      break;
   case "editor":
      console.log("Accesos a todos los cursos menos al administrador" + " " + usuarios);
      break;
      
   default:
         console.log("Usuario Incorrecto");
      break;
}
