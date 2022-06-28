const form = document.querySelector("#form");
const passwordEl1 = document.querySelector("#password1");
const passwordEl2 = document.querySelector("#password2");
const msgContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;

let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    msgContainer.style.borderColor = "red";
    return;
  }

  if (passwordEl1.value === passwordEl2.value) {
    passwordsMatch = true;
    passwordEl1.style.borderColor = "green";
    passwordEl2.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    msgContainer.style.color = "red";
    passwordEl1.style.borderColor = "red";
    passwordEl2.style.borderColor = "red";
    return;
  }

  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    msgContainer.style.color = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener("submit", processFormData);
