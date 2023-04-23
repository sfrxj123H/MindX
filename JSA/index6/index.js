if (localStorage.food == null) {
    localStorage.food = JSON.stringify(["rau xào", "thịt luộc", "gà rán"]);
}
if (eval(localStorage.food) == "") {
    localStorage.food = JSON.stringify(["rau xào", "thịt luộc", "gà rán"]);
}
let menu = eval(localStorage.food);
document.querySelector("#menu").innerHTML = menu;
function modify(i) {
    if (i == "C" || i == "c") {
        menu.push(prompt("Mời người dùng nhập món ăn muốn thêm vào menu"));
    }
    if (i == "R" || i == "r") {
        let tell = String(menu);
        tell.slice(0, -1);
        tell += ".";
        alert("Các món ăn mới nhất: " + tell);
    }
    if (i == "U" || i == "u") {
        let delElement = prompt("Mời người dùng nhập vào tên món muốn đổi");
        let addElement = prompt("Mời người dùng nhập vào tên món ăn mới");
        for (let k = 0; k < menu.length; k++) {
            if (menu[k] == delElement) {
                menu.splice(k, 1, addElement);
            }
        }
    }
    if (i == "D" || i == "d") {
        let delElement = prompt("Mời người dùng nhập vào tên món muốn xóa");
        for (let k = 0; k < menu.length; k++) {
            if (menu[k] == delElement) {
                menu.splice(k, 1);
            }
        }
    }
    localStorage.food = JSON.stringify(menu);
    document.querySelector("#menu").innerHTML = menu;
}