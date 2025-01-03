function onchangeEmail() {
  toggleButtonDisable();
  toogleEmailErrors();
}
function onchangePassword() {
  toggleButtonDisable();
  togglePasswordErrors();
}
function loginHome(){
  window.location.href = "/pages/home/home.html"
  console.log("window",window.location)
}
function registar(){
  window.location.href ="/pages/register/registar.html"
}
function toogleEmailErrors() {
  const email = form.email().value;
  form.email_error().style.display = email ? "none" : "block";

  form.email_invalid().style.display = validateEmail(email) ? "none" : "block";
}
function togglePasswordErrors() {
  const pass = form.password().value;
  form.password_invalid().style.display = pass ? "none" : "block";
}
function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleButtonDisable() {
  const EmailValid = isEmailValid();
  form.recuperar().disabled = !EmailValid;

  const PasswordValid = isPasswordValid();
  form.login().disabled = !EmailValid || !PasswordValid;
}

function isPasswordValid() {
  const pass = form.password().value;
  if (!pass) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById("email"),
  password: () => document.getElementById("password"),
  email_error: () => document.getElementById("email-required-error"),
  email_invalid: () => document.getElementById("email-invalid-error"),
  password_invalid: () => document.getElementById("password-invalid-error"),
  recuperar: () => document.getElementById("recuperar"),
  login: () => document.getElementById("login"),
};
