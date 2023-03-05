function save() {
    localStorage.setItem(String(document.getElementById("k").value), String(document.getElementById("v").value));
}
function del() {
    if (localStorage.length != 0) {
        if (localStorage.getItem(document.getElementById("k2").value) != null) {
            localStorage.removeItem(String(document.getElementById("k2").value));
        }
        else {
            alert("No storage key found!")
        }
    }
    else {
            alert("The storage has nothing!")
        }
}
function load() {
    document.getElementById("l").innerHTML = (String(localStorage.getItem(document.getElementById("k3").value)));
}
function log() {
    console.log(String(document.getElementById("k3").value) + ": " + String(localStorage.getItem(document.getElementById("k3").value)));
}
function delAll() {
    if (localStorage.length != 0) {
            localStorage.clear;
    }
    else {
        alert("The storage has nothing!");
    }
}