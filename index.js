const myForm = document.querySelector(".data-form");

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
const createText = (_text) => {
  let _p = document.createElement("p");
  let _textNode = document.createTextNode(_text);
  _p.appendChild(_textNode);
  return _p;
};
const createTitle = (title) => {
  let strong = document.createElement("strong");
  strong.appendChild(createText(title));
  return strong;
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let _res = localStorage.getItem("infoStorage");

  let infoStorage;

  _res == undefined ? (infoStorage = []) : (infoStorage = JSON.parse(_res));

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

  let dataTest = [];

  data.forEach((e) => {
    dataConfirmed(e.param, e.paramAlert)
      ? dataTest.push(e.param.value)
      : dataTest.push("");
  });
  if (dataTest.some((e) => e == "")) {
    console.log("Faltan datos");
  } else {
    let infoComplete = {
      name: dataTest[0],
      lastname: dataTest[1],
      email: dataTest[2],
      password: dataTest[3],
    };
    infoStorage.push(infoComplete);
    let answerJSON = JSON.stringify(infoStorage);
    localStorage.setItem("infoStorage", answerJSON);
  }

  infoStorage.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "user");

    let name = createText(e.name);
    let lastname = createText(e.lastname);
    let email = createText(e.email);

    div.appendChild(createTitle("Nombre: "));
    div.appendChild(name);

    div.appendChild(createTitle("Apellido: "));
    div.appendChild(lastname);

    div.appendChild(createTitle("Email: "));
    div.appendChild(email);

    let showInfo = document.querySelector(".infoStored");
    showInfo.appendChild(div);
  });
});

/*








const myForm = document.querySelector(".data-form");

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
const createText = (_text) => {
  let _p = document.createElement("p");
  let _textNode = document.createTextNode(_text);
  _p.appendChild(_textNode);
  return _p;
};
const createTitle = (_text) => {
  let _p = document.createElement("p");
  let _textNode = document.createTextNode(<strong>_text</strong>);
  _p.appendChild(_textNode);
  return _p;
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let _res = localStorage.getItem("infoStorage");

  let infoStorage;

  _res == undefined ? (infoStorage = []) : (infoStorage = JSON.parse(_res));

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

  let dataTest = [];

  data.forEach((e) => {
    dataConfirmed(e.param, e.paramAlert)
      ? dataTest.push(e.param.value)
      : dataTest.push("");
  });
  if (dataTest.some((e) => e == "")) {
    console.log("Faltan datos");
  } else {
    let infoComplete = {
      name: dataTest[0],
      lastname: dataTest[1],
      email: dataTest[2],
      password: dataTest[3],
    };
    infoStorage.push(infoComplete);
    let answerJSON = JSON.stringify(infoStorage);
    localStorage.setItem("infoStorage", answerJSON);
  }

  infoStorage.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "user");

    let name = createText(e.name);
    let lastname = createText(e.lastname);
    let email = createText(e.email);

    //div.appendChild(createTitle(Nombre));
    div.appendChild(name);
    div.appendChild(lastname);
    div.appendChild(email);

    let showInfo = document.querySelector(".infoStored");
    showInfo.appendChild(div);
  });
});

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
