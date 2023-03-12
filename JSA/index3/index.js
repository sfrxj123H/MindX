var equation = (a, b) => {
    //ax + b = 0
    x = (-b) / a;
    document.getElementById("r").innerHTML = "x = " + x;
}
var triangle = (a, b) => {
    if (Math.abs(a) > Math.abs(b)) { var v = "Line 1"; var n = "Line 2"; c = a; d = b; }
    else { var v = "Line 2"; var n = "Line 1"; c = b; d = a;  }
    var pitago = Math.sqrt(Math.abs((a * a) - (b * b)));
    var acos_ = Math.acos((c ** 2 + d ** 2 - pitago ** 2) / (2 * Math.abs(d * c)))
    var deg = Math.round(acos_ * 180 / Math.PI);
    document.getElementById("s").innerHTML = v + " is hypotenuse.<br>" + n + " is leg.<br>Other leg: " + pitago + ".<br>Degree: " + deg + ".";
}