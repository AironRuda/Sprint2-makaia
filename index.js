const myForm = document.querySelector(".data-form");

let clearForm = () => {
  document.querySelector(".data-form").reset();
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let lastname = e.target.lastname.value;
  let email = e.target.email.value;
  let pass = e.target.password.value;

  console.log(name, lastname, email, pass);
  clearForm();
});

/*
let outputElement = document.querySelector(".output")

outputElement.appendChild(
  crearElementoP("Mouse está en: x-" + registro.x + " y-" + registro.y)
)


  let name = e.target.name.value;
  let lastname = e.target.lastname.value;
  let email = e.target.email.value;
  let pass = e.target.password.value;

const name = document.querySelector("#name");
  const lastname = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const pass = document.querySelector("#pass");


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

 */
