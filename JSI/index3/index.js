//Bài 1
let b1a = 0;
let b1a2 = "";
let end = 10;
for (i=1; i<=end; i++) {
    if (i % 2 == 0) {
        b1a += i;
        b1a2 += i + b1a2String();
    }
}
function b1a2String() {
    if (i == end) {
        return (" = ");
    }
    else {
        return (" + ");
    }
}
console.log("Tổng các số chắn từ 1 đến 10: " + b1a2 + b1a);