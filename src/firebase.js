import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA800g_CFur0Iw0h0Kkx0YavHFrJ5hILDQ",
  authDomain: "clone-ec9c4.firebaseapp.com",
  projectId: "clone-ec9c4",
  storageBucket: "clone-ec9c4.appspot.com",
  messagingSenderId: "488450805675",
  appId: "1:488450805675:web:c0a96fee1c2395f75accee",
  measurementId: "G-7NWEL1MP8D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db, auth };