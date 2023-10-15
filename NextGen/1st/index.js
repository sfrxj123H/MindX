// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: document.querySelector("#fb1").value,
    authDomain: document.querySelector("#fb2").value,
    projectId: document.querySelector("#fb3").value,
    storageBucket: document.querySelector("#fb4").value,
    messagingSenderId: document.querySelector("#fb5").value,
    appId: document.querySelector("#fb6").value,
    measurementId: document.querySelector("#fb7").value
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Run js
readTodo()

// Functions for Firebase
function addTodo() {
    todoName = document.querySelector("#todoName").value
    db.collection("todo").add({
        name: todoName,
        status: false,
    })
        .then((docRef) => {
            document.querySelector("#noti").innerHTML = "Todo Added! docRef ID:" + String(docRef.id)
        })
        .catch((error) => {
            document.querySelector("#noti").innerHTML = "Error adding todo!" + String(error)
        });
    readTodo()
    
}
function readTodo() {
    document.querySelector("#data").innerHTML = ""
    let todoArr = []
    db.collection("todo").get().then((querySnapshot) => {
    for (let doc of querySnapshot.docs) {
        let object = doc.data()
        object.id = doc.id
        todoArr.push(object)
    }
    let count = 0
    for (let i of todoArr) {
        count += 1
        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.id = "todo" + String(count)
        checkbox.setAttribute("onchange", `updateTodo('${i.id}', document.querySelector("#todo${count}").checked)`)
        checkbox.checked = i.status

        let label = document.createElement("label")
        label.innerHTML = i.name

        let remove = document.createElement("label")
        remove.innerHTML = "❌"
        remove.setAttribute("onclick", `deleteTodo('${i.id}')`)

        let contain = document.createElement("div")
        contain.append(checkbox, label, remove, document.createElement("br"))
        document.querySelector("#data").appendChild(contain)
    }
});
}
function updateTodo(id, complete) {
    let update = db.collection("todo").doc(id);
    update = update.update({
        status: complete
    })
    .then(() => {
        document.querySelector("#noti").innerHTML = "Todo successfully updated!";
        readTodo()
    })
    .catch((error) => {
        document.querySelector("#noti").innerHTML = "Error updating todo: " + String(error);
    })
}
function deleteTodo(id) {
    db.collection("todo").doc(id).delete().then(() => {
        document.querySelector("#noti").innerHTML = "Todo successfully deleted!"
        readTodo()
    }).catch((error) => {
        document.querySelector("#noti").innerHTML = "Error removing todo: " + String(error);
    });
}