const miInput = document.querySelector("input");
//quitar validacion mientras escribo

console.log(miInput);

miInput.addEventListener("input", () => {
  miInput.setCustomValidity("");
  //comprobar si se debe validar
  miInput.checkValidity();
});

//muestre el mensaje de validacion
miInput.addEventListener("invalid", () => {
  miInput.setCustomValidity("si no incomoda....me das tu");
});
/*
 */
