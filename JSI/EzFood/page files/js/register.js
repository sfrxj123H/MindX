import {RegisterCheck} from "./account.js";

let br1 = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");

let title = document.createElement("h1")
title.classList.add("title")
title.innerText = "Register to EzFood";

let inputUsername = document.createElement("input")
inputUsername.classList.add("input")
inputUsername.id = "user"
inputUsername.type = "text";
inputUsername.autocomplete = "on";
let username = document.createElement("label")
username.classList.add("field")
username.append("Username*: ", inputUsername);

let inputPassword1 = document.createElement("input")
inputPassword1.classList.add("input")
inputPassword1.id = "pass1"
inputPassword1.type = "password";
inputPassword1.autocomplete = "off"
let password1 = document.createElement("label")
password1.classList.add("field")
password1.append("Create Password*: ", inputPassword1);

let inputPassword2 = document.createElement("input")
inputPassword2.classList.add("input")
inputPassword2.id = "pass2"
inputPassword2.type = "password";
inputPassword2.autocomplete = "off"
let password2 = document.createElement("label")
password2.classList.add("field")
password2.append("Confirm Password*: ", inputPassword2);

let submitButton = document.createElement("button")
submitButton.classList.add("submit-button")
submitButton.type = "submit"
submitButton.innerHTML = "Register now!";

let error = document.createElement("h3")
error.classList.add("error");

let loginChild = document.createElement("a")
loginChild.href = "./login.html"
loginChild.innerText = "Already have an account? Log in now!"
loginChild.style.color = "black"
let login = document.createElement("h3")
login.append(loginChild)

let formContainer = document.createElement("form")
formContainer.classList.add("account-form", "d-block")
formContainer.append(username, br1, password1, br2, password2, br3, submitButton)
formContainer.addEventListener("submit", RegisterCheck)
document.getElementById("container").append(title, formContainer, error, login);