//Add data
async function addData() {
   await db.collection("menu").add({
      name: "",
      price: "1",
      img: ""
   })
      .then((docRef) => {
         console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
         console.error("Error adding document: ", error);
      });
      return 0;
}

//Read data
async function readData() {
   let allData = []
   await db.collection("menu").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         allData.push(doc.data());
      });
   })
   return allData;
}; 

async function deleteData(handle) {
   handle.preventDefault()
   let foodId // document ID
   await db.collection("menu").doc(foodId).delete().then(() => {
      console.log(`${foodId} successfully deleted!`);
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  return 0;
}