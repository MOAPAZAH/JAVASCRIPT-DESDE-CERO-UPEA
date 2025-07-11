// ELIMINAR UN ELEMENTO EN LOCALSTORAGE


localStorage.removeItem("Nombre");



const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);

mesesArray.push("Nuevo mes");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));