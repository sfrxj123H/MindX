import * as _noti from "../common/notify.js";

const config = {
  url: "http://127.0.0.1:5500/MindX/JSI/index4/",
  handleCodeInApp: true, // doc của nó ns là luôn phải đê là true
};

const createNewAccout = (email, password) => {// tạo function
  return firebase
    .auth()// firebase.auth() để sử dụng dịch vụ auth của n ó
    .createUserWithEmailAndPassword(email, password)// đây là một posmiss
    .then((userCredential) => {// mọi người sẽ được then và then song nó sẽ tạo ra cho mọi người một cái này.
      // Signed in
      let user = userCredential.user;// bỏ var thay let
    return  user.sendEmailVerification(config);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
      _noti.error(errorCode, errorMessage);
      // ..
    });
};

const loginWithEmailPass = async (email, password) => {
  /* firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      _noti.error(errorCode, errorMessage);
    }); */
    const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    let user = userCredential.user
    localStorage.setItem("emailLogined", user.email)
    localStorage.setItem("uid", user.uid)
    return user
};
const getCurrentUser = () => {
  return firebase.auth().currentUser
}
export { createNewAccout, loginWithEmailPass,getCurrentUser };
