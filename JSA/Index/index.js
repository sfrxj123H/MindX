console.log("%c" + "INDEX.JS", "font-size: 36px; color: #7289DA");
b = 1;
c = 1;
h = 0;
l = 0
k = ""
for (a = 1; a <= 3; a++) {
    console.log("a = " + a);
}
while (b <= 3) {
    console.log("b = " + b);
    b++;
}
do {
    console.log("c = " + c);
    c++;
}
while (c <= 3);
d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
d.push(10);
for (e = 0; e <= d.length - 1; e++) {
    console.log("d = " + d[e])
}
f = [getRandomInt(10), getRandomInt(10), getRandomInt(10)];
for (g = 0; g <= 2; g++) {
    h += f[g];
}
i = h % 10;
for (g = 0; g <= 1; g++) {
    k += String(f[g]) + " + ";
}
k += String(f[g]);
i = h % 10;
i = check_zero(i);
console.log(String("Điểm trò chơi 3 cây người thứ 1: " + i + "(" + k + ")."));
k = ""
j = [getRandomInt(10), getRandomInt(10), getRandomInt(10)];
for (g = 0; g <= 2; g++) {
    l += j[g];
}
for (g = 0; g <= 1; g++) {
    k += String(j[g]) + " + ";
}
k += String(j[g]);
m = l % 10;
m = check_zero(m);
console.log(String("Điểm trò chơi 3 cây người thứ 2: " + m + "(" + k + ")."));
console.log("Vậy " + check_game(i, m));
var arr = [0, 1, 2, 3];
arr.pop(); /*remove last*/
arr.push(3); /*add last*/
arr.shift(); /*remove first*/
arr.unshift(3); /*add last*/
arr.splice(1, 0); /* arg0: remove from; arg1: remove count; arg+: add(no force, from arg0)*/
//arr.length(); arrays count
var dog = {
    name: "Doge",
    legs: 4,
}
dog.sound = "Ngu Ngu";
console.log(dog);
var diem_toan = [getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6)];
let sum = 0;
for (n = 0; n < diem_toan.length; n++) {
    sum += diem_toan[n] + 5;
}
trung_binh = sum / diem_toan.length;
console.log("Điểm toán: " + trung_binh)
console.log("Các điểm toán: " + String(diem_toan[0]) + ", " + String(diem_toan[1]) + ", " + String(diem_toan[2]) + ", " + String(diem_toan[3]) + ", " + String(diem_toan[4]));