const myForm = document.querySelector(".data-form");

let clearForm = () => {
  document.querySelector(".data-form").reset();
};

let dataConfirmed = (data, alert) => {
  if (data.value) {
    alert.classList.add("hiden");
    data.classList.remove("badInput");
    return true;
  } else {
    alert.classList.remove("hiden");
    data.classList.add("badInput");
    return false;
  }
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = [
    {
      param: e.target.name,
      paramAlert: document.getElementById("nameAlert"),
    },
    {
      param: e.target.lastname,
      paramAlert: document.getElementById("lastnameAlert"),
    },
    {
      param: e.target.email,
      paramAlert: document.getElementById("emailAlert"),
    },
    {
      param: e.target.password,
      paramAlert: document.getElementById("passwordAlert"),
    },
  ];

  let datos = [];

  data.forEach((e) => {
    dataConfirmed(e.param, e.paramAlert)
      ? datos.push(e.param.value)
      : datos.push("");
  });

  datos.some((e) => e == "") ? console.log("Faltan datos") : clearForm();
});

/*

//console.log(data);
  //console.log(dataConfirmed(data.name, alert.name));
  /*

let data = {
    name: e.target.name,
    lastname: e.target.lastname,
    email: e.target.email,
    pass: e.target.password,
  };






  if (data.name.value) {
    alert.name.classList.add("hiden");
    data.name.classList.remove("badInput");
  } else {
    alert.name.classList.remove("hiden");
    data.name.classList.add("badInput");
  }

  //data.name.setCustomValidity("invalid");
  //data.name.checkValidity("invalid");
  //console.log(data.name.value);
  //console.log(data.name.validity.valueMissing);

  

  data.name.addEventListener("invalid", () => {
    data.name.classList.toggle("badInput");
    alert.name.classList.toggle("hiden");
  });















name.setCustomValidity("");
  if (name.value == "") {
    console.log("error");
    alertName.class.toggle("hiden");
  }
  name.addEventListener("invalid", () => {
    console.log("error");
  });

  console.log(name);






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
