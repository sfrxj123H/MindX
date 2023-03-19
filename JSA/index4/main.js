function find() {
    i = document.getElementById("search").value;
    for (let x = 0; x <= data.detail.length - 1; x++) {
        if (i == data.detail[x].name) {
            document.getElementById("result").innerHTML = "Tỉnh/TP: " + data.detail[x].name;
            document.getElementById("result2").innerHTML = "Ca tử vong: " + data.detail[x].death;
            document.getElementById("result3").innerHTML = "Số ca được điều trị: " + data.detail[x].treating;
            document.getElementById("result4").innerHTML = "Số ca mắc: " + data.detail[x].cases;
            document.getElementById("result5").innerHTML = "Số ca được phục hồi: " + data.detail[x].recovered;
            document.getElementById("result6").innerHTML = "Hôm nay có: " + data.detail[x].casesToday + " ca mắc";
            return (1);
        }
    }
}
var data = {
    "detail": [
        {
            "name": "Hà Nội",
            "death": 1231,
            "treating": 0,
            "cases": 1634755,
            "recovered": 0,
            "casesToday": 11
        },
        {
            "name": "TP. Hồ Chí Minh",
            "death": 19984,
            "treating": 0,
            "cases": 624252,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Hồ Chí Minh",
            "death": 19984,
            "treating": 0,
            "cases": 624252,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Sài Gòn",
            "death": 19984,
            "treating": 0,
            "cases": 624252,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Hải Phòng",
            "death": 138,
            "treating": 0,
            "cases": 533384,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Nghệ An",
            "death": 145,
            "treating": 0,
            "cases": 499681,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bắc Giang",
            "death": 91,
            "treating": 0,
            "cases": 390341,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Vĩnh Phúc",
            "death": 19,
            "treating": 0,
            "cases": 373041,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Hải Dương",
            "death": 116,
            "treating": 0,
            "cases": 369370,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Quảng Ninh",
            "death": 150,
            "treating": 0,
            "cases": 353289,
            "recovered": 0,
            "casesToday": 5
        },
        {
            "name": "Bắc Ninh",
            "death": 136,
            "treating": 0,
            "cases": 351134,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Thái Nguyên",
            "death": 112,
            "treating": 0,
            "cases": 342929,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Phú Thọ",
            "death": 97,
            "treating": 0,
            "cases": 328268,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bình Dương",
            "death": 3518,
            "treating": 0,
            "cases": 323997,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Nam Định",
            "death": 149,
            "treating": 0,
            "cases": 299477,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Thái Bình",
            "death": 23,
            "treating": 0,
            "cases": 296544,
            "recovered": 0,
            "casesToday": 2
        },
        {
            "name": "Hưng Yên",
            "death": 5,
            "treating": 0,
            "cases": 242400,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Hòa Bình",
            "death": 102,
            "treating": 0,
            "cases": 238884,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Lào Cai",
            "death": 38,
            "treating": 0,
            "cases": 187878,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Thanh Hóa",
            "death": 109,
            "treating": 0,
            "cases": 174804,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Đắk Lắk",
            "death": 201,
            "treating": 0,
            "cases": 172439,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Lạng Sơn",
            "death": 84,
            "treating": 0,
            "cases": 160218,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Yên Bái",
            "death": 13,
            "treating": 0,
            "cases": 154862,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Sơn La",
            "death": 0,
            "treating": 0,
            "cases": 153092,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Cà Mau",
            "death": 357,
            "treating": 0,
            "cases": 147347,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Tuyên Quang",
            "death": 14,
            "treating": 0,
            "cases": 146171,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Tây Ninh",
            "death": 941,
            "treating": 0,
            "cases": 139588,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bình Định",
            "death": 281,
            "treating": 0,
            "cases": 139264,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Quảng Bình",
            "death": 74,
            "treating": 0,
            "cases": 128708,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Hà Giang",
            "death": 80,
            "treating": 0,
            "cases": 122610,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Khánh Hòa",
            "death": 364,
            "treating": 0,
            "cases": 120999,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bình Phước",
            "death": 224,
            "treating": 0,
            "cases": 119694,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bà Rịa – Vũng Tàu",
            "death": 497,
            "treating": 0,
            "cases": 109591,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Đồng Nai",
            "death": 1901,
            "treating": 0,
            "cases": 107518,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Đà Nẵng",
            "death": 337,
            "treating": 0,
            "cases": 106259,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Ninh Bình",
            "death": 93,
            "treating": 0,
            "cases": 103558,
            "recovered": 0,
            "casesToday": 1
        },
        {
            "name": "Vĩnh Long",
            "death": 829,
            "treating": 0,
            "cases": 102537,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bến Tre",
            "death": 487,
            "treating": 0,
            "cases": 98951,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Cao Bằng",
            "death": 59,
            "treating": 0,
            "cases": 98171,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Lâm Đồng",
            "death": 141,
            "treating": 0,
            "cases": 96521,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Điện Biên",
            "death": 23,
            "treating": 0,
            "cases": 90325,
            "recovered": 0,
            "casesToday": 2
        },
        {
            "name": "Hà Nam",
            "death": 65,
            "treating": 0,
            "cases": 89127,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Quảng Trị",
            "death": 38,
            "treating": 0,
            "cases": 85694,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Cần Thơ",
            "death": 958,
            "treating": 0,
            "cases": 76570,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bắc Kạn",
            "death": 19,
            "treating": 0,
            "cases": 76226,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Lai Châu",
            "death": 0,
            "treating": 0,
            "cases": 75265,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Trà Vinh",
            "death": 115,
            "treating": 0,
            "cases": 74986,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Đắk Nông",
            "death": 47,
            "treating": 0,
            "cases": 73427,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Gia Lai",
            "death": 116,
            "treating": 0,
            "cases": 70836,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Hà Tĩnh",
            "death": 50,
            "treating": 0,
            "cases": 54585,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bình Thuận",
            "death": 482,
            "treating": 0,
            "cases": 53913,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Đồng Tháp",
            "death": 1007,
            "treating": 0,
            "cases": 51431,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Quảng Ngãi",
            "death": 127,
            "treating": 0,
            "cases": 50011,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Long An",
            "death": 1088,
            "treating": 0,
            "cases": 49853,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Quảng Nam",
            "death": 150,
            "treating": 0,
            "cases": 49345,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Thừa Thiên Huế",
            "death": 173,
            "treating": 0,
            "cases": 47686,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Bạc Liêu",
            "death": 470,
            "treating": 0,
            "cases": 46703,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Phú Yên",
            "death": 137,
            "treating": 0,
            "cases": 43855,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "An Giang",
            "death": 1325,
            "treating": 0,
            "cases": 43001,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Kiên Giang",
            "death": 1027,
            "treating": 0,
            "cases": 42512,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Tiền Giang",
            "death": 1290,
            "treating": 0,
            "cases": 38310,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Sóc Trăng",
            "death": 633,
            "treating": 0,
            "cases": 34407,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Kon Tum",
            "death": 1,
            "treating": 0,
            "cases": 26286,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Hậu Giang",
            "death": 231,
            "treating": 0,
            "cases": 17667,
            "recovered": 0,
            "casesToday": 0
        },
        {
            "name": "Ninh Thuận",
            "death": 60,
            "treating": 0,
            "cases": 8764,
            "recovered": 0,
            "casesToday": 0
        }
    ]
}