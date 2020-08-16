import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgCl6U-sV48WahTmnV-pnnxxYrn-Jtdnc",
  authDomain: "learning-3ce94.firebaseapp.com",
  databaseURL: "https://learning-3ce94.firebaseio.com",
  projectId: "learning-3ce94",
  storageBucket: "learning-3ce94.appspot.com",
  messagingSenderId: "357755571348",
  appId: "1:357755571348:web:b9bd45095adf283be97881"
});

const db = firebaseApp.firestore();

export default db;