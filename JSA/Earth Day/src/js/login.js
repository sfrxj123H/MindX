let users = eval(localStorage.users);
let error = "Incorrect username or password";
let add;
for (let i = 0; i < users.length; i++) {
    if (users[i].show == true) {
        add = users[i].user;
        let create = document.createElement("option")
        create.setAttribute("value", users[i].user);
        create.innerText = users[i].user;
        document.querySelector("#shown").appendChild(create);
    }
}
if (users == null || users == "") {
    window.location.assign("signup.html");
}
if (sessionStorage.user != null) {
    if (sessionStorage.user.length > 2) {
        window.location.assign("main.html");
    }
}
if (!eval(localStorage.create)) {
    document.querySelector("#add").value = "Disabled by admin";
    document.querySelector("#add").disabled = true;
}
let create = document.createElement("option")
create.setAttribute("value", "m");
create.setAttribute("style", "background-color: black; color: white");
create.setAttribute("selected", "selected");
create.innerText = "All users";
document.querySelector("#shown").appendChild(create);
let password = document.createElement("label");
let password_label = `Show password`
let password_append = document.createElement("input")
password_append.setAttribute("type", "checkbox");
password_append.setAttribute("id", "passshow");
password_append.setAttribute("onclick", `password_show()`);
password_append.setAttribute("autocomplete", "off");
password_append.setAttribute("autocapitalize", "off");
password.appendChild(password_append);
password.innerHTML += (password_label);
document.querySelector(".passshow").appendChild(password);
shown_check()
function shown_check() {
    if (document.querySelector("#shown").value === "m") {
        document.querySelector("#user").value = "";
        document.querySelector("#user").type = "text";
        document.querySelector("#shown").style.backgroundColor = "aqua";
    }
    else {
        document.querySelector("#user").value = document.querySelector("#shown").value;
        document.querySelector("#user").type = "hidden";
    }
}
var input = document.querySelector("#everything");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur()
        login_check();
    }
})
function login_check() {
    //<h3 id="warning"></h3>
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    for (let k = 0; k < users.length; k++) {
        if (users[k].user === user && users[k].pass === pass) {
            error = ""
        }
    }
    if (error != "") {
        if (document.querySelector("#warning") == null) {
            let warn = document.createElement("h3");
            warn.setAttribute("id", "warning");
            warn.innerText = error;
            document.querySelector("#container").appendChild(warn);
        }
    }
    else {
        sessionStorage.user = user;
        window.location.assign("main.html");
    }
}
function password_show() {
    if (document.querySelector("#passshow").checked == true) {
        document.querySelector("#pass").type = "text";
    }
    else {
        document.querySelector("#pass").type = "password";
    }
}
function addd() {
    window.location.assign("signup.html");
}