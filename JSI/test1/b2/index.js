fetch("https://64748ef77de100807b1b3384.mockapi.io/hw/test1-2")
.then(value => value.json())
.then(data => {
    for(let i=0; i<data.length; i++) {
        let html = `<div><br>`;
        html += `<img src=${data[i].avatar} />`;
        html += `<h1>${data[i].name}</h1>`;
        html += `<h2>${data[i].phone}</h2>`;
		html += `<h2>${data[i].email}</h2>`
    document.querySelector("#list").innerHTML += html;
    }
})
function find() {
	let search = document.querySelector("#search").value;
	fetch("https://64748ef77de100807b1b3384.mockapi.io/hw/test1-2")
	.then(value => value.json())
	.then(data => {	document.querySelector("#list").innerHTML = "";
    for(let i=0; i<data.length; i++) {
		if (data[i].name.toLowerCase().match(search.toLowerCase())) {
			let html = `<div><br>`;
			html += `<img src=${data[i].avatar} />`;
			html += `<h1>${data[i].name}</h1>`;
			html += `<h2>${data[i].phone}</h2>`;
			html += `<h2>${data[i].email}</h2>`
			document.querySelector("#list").innerHTML += html;
		}
    }
})
    }