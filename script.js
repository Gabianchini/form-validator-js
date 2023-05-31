const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show inputs error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control sucess";
}

//Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value == "") {
    showError(username, "Username is required");
  } else {
    showSucess(username);
  }

  if (email.value == "") {
    showError(email, "Username is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSucess(email);
  }

  if (password.value == "") {
    showError(password, "Username is required");
  } else {
    showSucess(password);
  }
  if (password2.value == "") {
    showError(password2, "Username is required");
  } else {
    showSucess(password2);
  }
});

//pegar nome do field e colocar a primeira letra em maiusculo
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucess(input);
    }
  });
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input`${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSucess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
