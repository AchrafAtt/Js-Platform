const user = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const conf = document.getElementById("confPwd");
const form = document.getElementById("form");
const submit = document.querySelector(".bts");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  validationInp();
});

const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = message;
  element.classList.add("error");
  element.classList.remove("success");
};

const setSeccess = (element) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = "";
  element.classList.add("success");
  element.classList.remove("error");
};

const isVAlidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const isVAlidPass = (pass) => {
  const rep = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return rep;
};

const validationInp = () => {
  const userValue = user.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();
  const confValue = conf.value.trim();
  let valid = false;
  if (userValue === "") {
    setError(user, "Usernam is required");
    valid = false;
  } else if (userValue.length > 25) {
    setError(user, "Usernam is too long");
    valid = false;
  } else if (userValue.length < 3) {
    setError(user, "Usernam is too short");
    valid = false;
  } else {
    setSeccess(user);
    valid = true;
  }
  if (emailValue === "") {
    setError(email, "Email is required");
    valid = false;
  } else if (!isVAlidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    valid = false;
  } else {
    setSeccess(email);
    valid = true;
  }

  if (passValue === "") {
    setError(pass, "Password is required");
  } else if (passValue.length < 8) {
    setError(pass, "Password is to short ");
    valid = false;
  } else if (!isVAlidPass(passValue)) {
    setError(pass, "Provide a valid Password ");
    valid = false;
  } else {
    setSeccess(pass);
    valid = true;
  }
  if (confValue === "") {
    setError(conf, "Confirmation Password is required");
    valid = false;
  } else if (passValue != confValue) {
    setError(conf, "Passwords doesn't match ");
    valid = false;
  } else {
    setSeccess(conf);
    valid = true;
  }

  if (valid) {
    form.setAttribute("action", "home.html");
  }
};
