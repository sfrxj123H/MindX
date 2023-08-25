const menuConfig = {
   apiKey: "AIzaSyCA72AD2pRYjN3q2FZIAZC5TxE8B_i0400",
   authDomain: "ezfoodmenu.firebaseapp.com",
   projectId: "ezfoodmenu",
   storageBucket: "ezfoodmenu.appspot.com",
   messagingSenderId: "828496238484",
   appId: "1:828496238484:web:4f16409d96be78cf012181",
   measurementId: "G-SRFG2QFNC1"
};

firebase.initializeApp(menuConfig);
const db = firebase.firestore();

async function viewDataFood() {
   await db.collection("menu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         if (doc.data().isFood) {
            let divPart = document.createElement("div")
            divPart.classList.add("food")

            let picture = document.createElement("img")
            picture.classList.add("menu-picture")
            picture.setAttribute("src", doc.data().img)

            let name = document.createElement("h4")
            name.classList.add("menu-name")
            name.innerHTML = doc.data().name

            let price = document.createElement("h4")
            price.classList.add("menu-price")
            price.innerHTML = `$ ${doc.data().price}`

            let buyButton = document.createElement("button")
            buyButton.setAttribute("type", "button")
            buyButton.addEventListener("click", buyVerification)
            buyButton.classList.add("buy-button")
            buyButton.innerHTML = "Buy now!"

            divPart.append(document.createElement("br"), picture, document.createElement("hr"), name, document.createElement("br"), price, document.createElement("br"), buyButton)
            document.querySelector("#food-data").append(divPart)
         }
      });
   })
}

async function viewDataDrinks() {
   await db.collection("menu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         if (!doc.data().isFood) {
            let divPart = document.createElement("div")
            divPart.classList.add("drinks")

            let picture = document.createElement("img")
            picture.classList.add("menu-picture")
            picture.setAttribute("src", doc.data().img)

            let name = document.createElement("h4")
            name.classList.add("menu-name")
            name.innerHTML = doc.data().name

            let price = document.createElement("h4")
            price.classList.add("menu-price")
            price.innerHTML = `$ ${doc.data().price}`

            let buyButton = document.createElement("button")
            buyButton.setAttribute("type", "button")
            buyButton.addEventListener("click", buyVerification)
            buyButton.classList.add("buy-button")
            buyButton.innerHTML = "Buy now!"

            divPart.append(document.createElement("br"), picture, document.createElement("hr"), name, document.createElement("br"), price, document.createElement("br"), buyButton)
            document.querySelector("#drinks-data").append(divPart)
         }
      });
   })
}

viewDataFood(); viewDataDrinks()

function buyVerification() {
   let loginExist = localStorage.getItem("loginUser")
   if (loginExist == null || loginExist.length < 1) {
      window.location.assign("./login.html")
   }
   else {
      let user = JSON.parse(localStorage.loginUser)[0]
      let pass = JSON.parse(localStorage.loginUser)[1]
      let valid = false
      fetch("https://6473574bd784bccb4a3c7ada.mockapi.io/users/EzFood", {
         method: 'GET',
         headers: { 'content-type': 'application/json' },
      })
         .then(res => res.json())
         .then(data => {
            for (let i = 0; i < data.length; i++) {
               if (user.toLowerCase() === data[i].user.toLowerCase() && pass === data[i].pass) {
                  let id = data[i].id
                  valid = true
               }
            }
         })
      if (!valid) {
         window.location.assign("./login.html")
      }
      else {
         alert("Sorry, this is just a template website, you can't!")
      }
   }
}

let vCAr

function consoleAdminRequest() {
   let randomInt = Math.floor(Math.random() * 1000000)
    let verificationCode
    if (randomInt < 10) {
        verificationCode = `00000${randomInt}`
    }
    else if (randomInt < 100) {
        verificationCode = `0000${randomInt}`
    }
    else if (randomInt < 1000) {
        verificationCode = `000${randomInt}`
    }
    else if (randomInt < 10000) {
        verificationCode = `00${randomInt}`
    }
    else if (randomInt < 100000) {
        verificationCode = `0${randomInt}`
    }
    else { verificationCode = `${randomInt}` }
   emailjs.send("service_llxhb4e", "template_cyn2ire", {
      message: verificationCode,
  })
  vCAr = verificationCode
}
function consoleAdminVerify(code) {
   if (String(code) === String(vCAr)) {
      window.location.assign("./admin.html")
   }
}