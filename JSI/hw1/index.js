let globalname = [];
let globalprice = [];
fetch("https://64748ef77de100807b1b3384.mockapi.io/hw/hw1")
.then(value => value.json())
.then(data => {
    for(i=0; i<data.length; i++) {
        let html = `<div><br>`;
        html += `<img src=${data[i].img} />`;
        html += `<h1>${data[i].name}</h1>`;
        globalname.push(data[i].name);
        html += `<h2>${"ONLY $" + data[i].price}</h2>`;
        globalprice.push(data[i].price);
	html += `<h5>${"Sell to: " + data[i].author}</h5>`
        html += `<h3>${data[i].description}</h3><input type=button value="BUY NOW!" onclick="buy(${i})" /><br><br></div>`;
    document.querySelector("#list").innerHTML += html;
    }
})
function buy(id) {
        let html = `<div id=buy>`;
        html += `<h1 id="buytext">Buy ${globalname[id]} for $${globalprice[id]}<br></h1>`;
        html += `<input type=number placeholder="Credit card number" /><br>`;
        html += `<input type=date /><br>`;
        html += `<input type=number placeholder="Security code" /><br><br>`;
        html += `<input type=button value="Buy now!" onclick="goalert()" /><br><br></div>`;
        document.querySelector("#gobuy").innerHTML += html;
}
function goalert() {
    let alert = "You can't buy it";
    window.alert(alert);
}