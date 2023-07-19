fetch("https://64748ef77de100807b1b3384.mockapi.io/hw/hw1")
.then(value => value.json())
.then(data => {
    for(i=0; i<data.length; i++) {
        let html = `<div><br>`;
        html += `<img src=${data[i].img} />`;
        html += `<h1>${data[i].name}</h1>`;
        html += `<h2>${"ONLY $" + data[i].price}</h2>`;
		html += `<h5>${"Sell to: " + data[i].author}</h5>`
        html += `<h3>${data[i].description}</h3><br><br></div>`;
    document.querySelector("#list").innerHTML += html;
    }
}
)
.catch(error => {
console.log(error)
})
function sell() {
        let html = `<div id=buy>`;
        html += `<h1 id="buytext">Sell your own item!<br></h1>`;
        html += `<input type=text placeholder="Item name" id=s_name /><br><br>`;
        html += `<input type=number placeholder="Item price (by USD)" id=s_price /><br><br>`;
        html += `<input type=text placeholder="Item image link" id=s_img /><br><br>`;
		html += `<input type=text placeholder="Item description" id=s_des /><br><br>`;
		html += `<input type=text placeholder="Your name here" id=s_author /><br><br>`;
        html += `<input type=button value="Sell!" onclick="sellnow()" /><br><br></div>`;
        document.querySelector("#gobuy").innerHTML += html;
}
function sellnow() {
	let name = document.querySelector("#s_name").value
	let price = document.querySelector("#s_price").value
	let img = document.querySelector("#s_img").value
	let description = document.querySelector("#s_des").value
	let author = document.querySelector("#s_author").value
	console.log(name)
	
	fetch("https://64748ef77de100807b1b3384.mockapi.io/hw/hw1", {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: name,
			price: price,
			img: img,
			description: description,
			author: author,
	}),})
	.then(function(response) {
    if (response.ok) {
      return response.json();
    }})
    let alert = `If your item does not appear on the website, it was because there is an error uploading your item!`;
    window.alert(alert);
	window.location.reload();
	console.log(name + price + img + description + author)
}