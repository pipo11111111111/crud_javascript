function onchangeEmail() {
  toggleButtonDisable();
  toogleEmailErrors();
}
function onchangePassword() {
  toggleButtonDisable();

  togglePasswordErrors();
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function toogleEmailErrors() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email-required-error").style.display = "block";
  } else {
    document.getElementById("email-required-error").style.display = "none";
  }

  if (validateEmail(email)) {
    document.getElementById("email-invalid-error").style.display = "none";
  } else {
    document.getElementById("email-invalid-error").style.display = "block";
  }
}
function togglePasswordErrors() {
  const pass = document.getElementById("password").value;
  if (!pass) {
    document.getElementById("password-invalid-error").style.display = "block";
  } else {
    document.getElementById("password-invalid-error").style.display = "none";
  }
}
function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleButtonDisable() {
  const EmailValid = isEmailValid();
  document.getElementById("recuperar").disabled = !EmailValid;

  const PasswordValid = isPasswordValid();
  document.getElementById("login").disabled = !EmailValid || !PasswordValid;
}

function isPasswordValid() {
  const pass = document.getElementById("password").value;
  if (!pass) {
    return false;
  }
  return true;
}
