if (localStorage.saves == null) {localStorage.saves = JSON.stringify([])}
let saves = eval(localStorage.saves)
document.querySelector("#data").innerHTML = JSON.stringify(saves)
class save {
	constructor(key, value) {
		this.savekey = key
		this.savevalue = value
	}
}
function addin() {
	let addData = new save(document.querySelector("#key").value, document.querySelector("#value").value)
	saves.push(addData)
	document.querySelector("#data").innerHTML = JSON.stringify(saves)
}
function savein() {
	localStorage.saves = JSON.stringify(saves)
	window.location.reload()
}