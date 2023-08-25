import {LoginCheck} from "./account.js";

let br1 = document.createElement("br");
let br2 = document.createElement("br");

let title = document.createElement("h1")
title.classList.add("title")
title.innerText = "Login to EzFood";

let inputUsername = document.createElement("input")
inputUsername.classList.add("input")
inputUsername.id = "user"
inputUsername.autocomplete = "on";
inputUsername.type = "text";
let username = document.createElement("label")
username.classList.add("field")
username.append("Username*: ", inputUsername);

let inputPassword = document.createElement("input")
inputPassword.classList.add("input")
inputPassword.id = "pass"
inputPassword.autocomplete = "off"
inputPassword.type = "password";
let password = document.createElement("label")
password.classList.add("field")
password.append("Password*: ", inputPassword);

let submitButton = document.createElement("button")
submitButton.classList.add("submit-button")
submitButton.type = "submit"
submitButton.innerHTML = "Log in";

let error = document.createElement("h3")
error.classList.add("error");

let registerChild = document.createElement("a")
registerChild.href = "./register.html"
registerChild.innerText = "No account? Register now!"
registerChild.style.color = "black"
let register = document.createElement("h3")
register.append(registerChild)

let forgotPasswordChild = document.createElement("a")
forgotPasswordChild.href = "./forgotPassword.html"
forgotPasswordChild.innerText = "Forgot password?"
forgotPasswordChild.style.color = "black"
let forgotPassword = document.createElement("h3")
forgotPassword.append(forgotPasswordChild)

let formContainer = document.createElement("form")
formContainer.classList.add("account-form", "d-block")
formContainer.append(username, br1, password, br2, submitButton)
formContainer.addEventListener("submit", LoginCheck)
document.getElementById("container").append(title, formContainer, error, forgotPassword, register);