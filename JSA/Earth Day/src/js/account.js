let users = eval(localStorage.users);
let list = "";
if (localStorage.create == null) {
    localStorage.create = false;
}
let varLocalStorage = eval(localStorage.users);
let r = 0;
let end = 0;
for (r = 0; r < varLocalStorage.length && end == 0; r++) {
    if (varLocalStorage[r].user === sessionStorage.user && varLocalStorage[r].role == "admin") {
        let label_admin_check = document.createElement("label");
        let label_admin_check_label = `Username: `;
        let label_admin_check_append1 = document.createElement("br");
        let label_admin_check_append2 = document.createElement("input");
        label_admin_check_append2.setAttribute("type", "text");
        label_admin_check_append2.setAttribute("name", "Username");
        label_admin_check_append2.setAttribute("id", "user");
        label_admin_check_append2.setAttribute("class", "field");
        label_admin_check_append2.setAttribute("onchange", "find_account()");
        label_admin_check_append2.setAttribute("autocomplete", "off");
        label_admin_check.innerHTML += label_admin_check_label;
        label_admin_check.appendChild(label_admin_check_append1);
        label_admin_check.appendChild(label_admin_check_append2);
        document.querySelector(".admin").appendChild(label_admin_check);
        //<label>Username: <br><input type="text" name="Username" id="user" class="field" onchange="find_account()"/></label><br>
        let label_admin3_check = document.createElement("label");
        let label_admin3_check_append = document.createElement("input");
        label_admin3_check_append.setAttribute("type", "checkbox");
        label_admin3_check_append.setAttribute("id", "admin");
        let label_admin3_check_label = `Admin account`;
        label_admin3_check.appendChild(label_admin3_check_append)
        label_admin3_check.innerHTML += label_admin3_check_label;
        document.querySelector(".admin3").appendChild(label_admin3_check);
        //<label><input type="checkbox" id="admin"/>Admin account</label><br>
        document.querySelector("#showcreate").innerHTML = `<label><input type="checkbox" id="create"
        onclick="localStorage.create = document.querySelector('#create').checked" />Allow guests to create
    accounts</label><br>`;
        document.querySelector("#create").checked = eval(localStorage.create);
        end = 1;
    }

}
let i;
if (end == 1) {
    for (i = 0; i < users.length; i++) {
        list += users[i].role + ": " + users[i].user + "<br>";
    }
}
else {
    list = sessionStorage.user;
    document.querySelector("#pass1").value = users[r - 1].pass;
    document.querySelector("#pass2").value = users[r - 1].pass;
}
let label_admin2_check = document.createElement("label");
let label_admin2_check_label = `Show password`
let label_admin2_check_append = document.createElement("input")
label_admin2_check_append.setAttribute("type", "checkbox");
label_admin2_check_append.setAttribute("id", "passshow");
label_admin2_check_append.setAttribute("onclick", `password_show()`);
label_admin2_check_append.setAttribute("autocomplete", "off");
label_admin2_check_append.setAttribute("autocapitalize", "off");
label_admin2_check.appendChild(label_admin2_check_append);
label_admin2_check.innerHTML += (label_admin2_check_label);
document.querySelector(".admin2").appendChild(label_admin2_check);
//<label><input type="checkbox" id="passshow" onclick="password_show()"/>Show password</label>
document.querySelector("#list").innerHTML = list;
var input = document.querySelector("#everything");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        input.blur()
        signup_check();
    }
});
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
function signup_check() {
    let user; let admin_check;
    if (end == 1) {
        user = document.querySelector("#user").value;
        admin_check = document.querySelector("#admin").checked;
    }
    else {
        user = sessionStorage.user;
        admin_check = false;
    }
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    let show = document.querySelector("#show").checked;
    let k;
    if (admin_check) {
        role = "admin";
    }
    else {
        role = "user";
    }
    let warn;
    let lower = /[a-z]/g;
    let upper = /[A-Z]/g;
    let number = /[0-9]/g;
    if (user.length >= 3) {
        if (pass1 === pass2) {
            if (pass1.length >= 6) {
                if (pass1.match(lower) && pass1.match(upper) && pass1.match(number)) {
                    list = "";
                    warn = "Account successfully created";
                    for (k = 0; k < users.length; k++) {
                        if (users[k].user == user) {
                            users.splice(k, 1);
                            warn = "Account successfully modified";
                        }
                    }
                    users.push({
                        user: user,
                        pass: pass1,
                        role: role,
                        show: show,
                        mainData: mainData,
                    })
                    if (end == 1) {
                        k = 0
                        for (k = 0; k < users.length; k++) {
                            list += users[k].role + ": " + users[k].user + "<br>";
                        }
                    }
                    else {
                        list = sessionStorage.user;
                    }
                    document.querySelector("#list").innerHTML = list;
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
function delete_check() {
    let user;
    warn = "There is no account to delete";
    if (end == 1) {
        user = document.querySelector("#user").value;
    }
    else {
        user = sessionStorage.user;
    }
    list = "";
    let k = 0;
    for (k = 0; k < users.length; k++) {
        if (users[k].user === user) {
            if (confirm(`You are about to delete (${user})! Are you sure?`)) {
                users.splice(k, 1);
                warn = "Account successfully deleted";
            }
        }
    }
    if (end == 1) {
        k = 0
        for (k = 0; k < users.length; k++) {
            list += users[k].role + ": " + users[k].user + "<br>";
        }
    }
    else {
        list = sessionStorage.user;
    }
    document.querySelector("#list").innerHTML = list;
    document.querySelector("#warning").innerHTML = warn;
}
function find_account() {
    let k;
    let role;
    document.querySelector("#admin").checked = false;
    document.querySelector("#admin").disabled = false;
    document.querySelector("#pass1").value = "";
    document.querySelector("#pass1").value = "";
    for (k = 0; k < users.length; k++) {
        if (users[k].role == "admin") { role = true } else { role = false };
        if (document.querySelector("#user").value === users[k].user) {
            document.querySelector("#admin").checked = role;
            document.querySelector("#show").checked = users[k].show;
            document.querySelector("#pass1").value = users[k].pass;
            document.querySelector("#pass2").value = users[k].pass;
            if (document.querySelector("#user").value === sessionStorage.user) {
                document.querySelector("#admin").checked = true;
                document.querySelector("#admin").disabled = true;
            }
        }
    }
}
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
function confirm_check() {
    let warn;
    let k;
    let counter = 0;
    let me = false;
    let logout = true;
    for (k = 0; k < varLocalStorage.length; k++) {
        if (varLocalStorage[k].user === sessionStorage.user) {
            me = true;
        }
        if (varLocalStorage[k].role == "admin") {
            counter++;
        }
    }
    for (k = 0; k < users.length; k++) {
        if (users[k].user === sessionStorage.user) {
            localStorage.setItem('users', JSON.stringify(users));
            logout = false;
            window.location.reload();
        }
    }
    if (me && counter == 1) {
        warn = "There must be at least 1 admin";
        document.querySelector("#warning").innerHTML = warn;
    }
    else {
        if (logout) {
            localStorage.setItem('users', JSON.stringify(users));
            sessionStorage.user = "";
            window.location.assign("login.html");
        }
    }
}