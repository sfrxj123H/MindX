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

async function addData() {
   let foodName = document.querySelector("#foodName").value
   let foodPrice = document.querySelector("#foodPrice").value
   let foodImg = document.querySelector("#foodImg").value
   let field = document.querySelector("#foodType").value
   let _return
   let isFood
   if (field == 0) {
      isFood = false
   }
   else {
      isFood = true
   }
await db.collection("menu").add({
   name: foodName,
   price: foodPrice,
   img: foodImg,
   isFood: isFood
})
   .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
   })
   .catch((error) => {
      console.error("Error adding document: ", error);
   });
}
async function deleteData() {
   let foodId = document.querySelector("#foodId").value
   await db.collection("menu").doc(foodId).delete().then(() => {
      console.log(`${foodId} successfully deleted!`);
   }).catch((error) => {
      console.error("Error removing document: ", error);
   });
}
async function viewData() {
   document.querySelector("#viewData").innerHTML = ""
   await db.collection("menu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         document.querySelector("#viewData").innerHTML += JSON.stringify(doc.data());
         document.querySelector("#viewData").innerHTML += "<br><br>";
      });
   })
}