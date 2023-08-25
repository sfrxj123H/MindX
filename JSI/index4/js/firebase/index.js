const firebaseConfig = {
  apiKey: "AIzaSyBFouxHsTscTlmP81v08TV31hfir1h-Zks",
  authDomain: "index4-fc1d3.firebaseapp.com",
  projectId: "index4-fc1d3",
  storageBucket: "index4-fc1d3.appspot.com",
  messagingSenderId: "674766380224",
  appId: "1:674766380224:web:cab47de6e02bf85b52e125",
  measurementId: "G-N5GN2QMM8D"
};
const appFb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db;
