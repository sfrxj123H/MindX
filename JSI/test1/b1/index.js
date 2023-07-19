document.querySelector(".num_grid").onclick = `add()`
document.querySelector(".sign_grid").onclick = `add()`
function add(numb) {
	document.querySelector("#nums").value += numb
}
function del() {
	document.querySelector("#nums").value.slice(0, -1)
}
function check() {
	window.alert(eval(document.querySelector("#nums").value))
}