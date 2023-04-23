let warn;
let users = eval(localStorage.users)
if (sessionStorage.user != null) {
    if (sessionStorage.user.length > 2) {
        window.location.assign("main.html");
    }
}
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
if (users != null) {
    if (users != "") {
        document.querySelector("#backon").innerHTML = `<input type="button" value="&#8592Back" class="field" onclick="window.location.assign('login.html')" style="width: 100px; height: 50px"/>`
    }
}
else {
    document.querySelector("#backon").innerHTML = `<input type="button" value="&#8592Back" class="field" onclick="window.location.assign('login.html')" style="width: 100px; height: 50px"/>`
}
let mainData = `<br>
<h1>EARTH DAY</h1>
<h2>General</h2>
<h3>Earth Day is an annual event on April 22 to demonstrate support for environmental protection. First held on April 22, 1970, it now includes a wide range of events coordinated globally by <a class="a" id="a1" title="earthday.org">earthday.org</a> (formerly Earth Day Network) including 1 billion people in more than 193 countries.</h3>
<h2>Organiser</h2>
<h3>The first Earth Day was organised by US <a class="a" id="a2" title="wikipedia.org">Senator Gaylord Nelson</a>, who was inspired by the anti-war protests of the 1960s to create a similar movement focused on environmental issues.</h3>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gaylord_Nelson.jpg/220px-Gaylord_Nelson.jpg" title="Senator Gaylord Nelson (1916 - 2005)" style="border: 3px solid black; border-radius: 15px;">
<h5>Senator Gaylord Nelson (1916 - 2005)</h5>
<h2>Earth day 2023</h2>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ihPpNHiX3vE?controls=0" title="YouTube video player" style="border: 3px solid black; border-radius: 15px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`
function password_show() {
    if (document.querySelector("#passshow").checked == true) {
        document.querySelector("#pass1").type = "text";
        document.querySelector("#pass2").type = "text";
    }
    else {
        document.querySelector("#pass1").type = "password";
        document.querySelector("#pass2").type = "password";
    }
}
var input = document.querySelector("#everything");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur()
        register_check();
    }
})
function register_check() {
    let user = document.querySelector("#user").value;
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    let lower = /[a-z]/g;
    let upper = /[A-Z]/g;
    let number = /[0-9]/g;
    let warn;
    let role;
    let k;
    if (users == null) {
        users = []
    }
    let counter = users.length;
    if (localStorage.users == null || localStorage.users == "" || localStorage.users == "[]") {
        role = "admin"
    }
    else {
        role = "user"
    }
    if (user.length >= 3) {
        if (pass1 === pass2) {
            if (pass1.length >= 6) {
                if (pass1.match(lower) && pass1.match(upper) && pass1.match(number)) {
                    for (k = 0; k < users.length; k++) {
                        if (!(users[k].user === user)) {
                            counter -= 1
                        }
                    }
                    if (counter == 0) {
                        users.push({
                            user: user,
                            pass: pass1,
                            role: role,
                            show: document.querySelector("#show").checked,
                            mainData: mainData,
                        })
                        localStorage.users = JSON.stringify(users);
                        sessionStorage.user = user;
                        window.location.assign("main.html")
                    }
                    else {
                        warn = "That account exists"
                    }
                }
                else {
                    warn = "Password must contain lowercase, uppercase and numbers";
                }
            }
            else {
                warn = "Password must contain at least 6 letters";
            }
        }
        else {
            warn = "Passwords isn't match";
        }
    }
    else {
        warn = "Username must contain at least 3 letters";
    }
    document.querySelector("#warning").innerHTML = warn;
}