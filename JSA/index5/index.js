const minh_quan = [
    {
        name: "SIU CR7",
        from: "Ronaldo",
        rate: 100,
    },
    {
        name: "YES YES YES NO NO NO",
        from: "KSI",
        rate: 90,
    },
    {
        name: "THROW COMPUTER",
        from: "Ron Swanson",
        rate: 80,
    },
]
function totalRate() {
    siu = 0
    if (document.querySelector("#a").checked) {
        siu += minh_quan[0].rate;
    }
    if (document.querySelector("#b").checked) {
        siu += minh_quan[1].rate;
    }
    if (document.querySelector("#c").checked) {
        siu += minh_quan[2].rate;
    }
    console.log(siu);
}
document.querySelector("#name1").innerHTML = minh_quan[0].name;
document.querySelector("#name2").innerHTML = minh_quan[1].name;
document.querySelector("#name3").innerHTML = minh_quan[2].name;
document.querySelector("#from1").innerHTML = minh_quan[0].from;
document.querySelector("#from2").innerHTML = minh_quan[1].from;
document.querySelector("#from3").innerHTML = minh_quan[2].from;
document.querySelector("#rate1").innerHTML = minh_quan[0].rate;
document.querySelector("#rate2").innerHTML = minh_quan[1].rate;
document.querySelector("#rate3").innerHTML = minh_quan[2].rate;