import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCseCsZ2B4fNLXpt0lCglPOpiqtVFq0lnE",
  authDomain: "clone-cedc4.firebaseapp.com",
  databaseURL: "https://clone-cedc4.firebaseio.com",
  projectId: "clone-cedc4",
  storageBucket: "clone-cedc4.appspot.com",
  messagingSenderId: "142296157362",
  appId: "1:142296157362:web:2963e921e7dad08a35cdab",
  measurementId: "G-WVFZ98QXYT",
});

const auth = firebase.auth();

export { auth, firebaseApp };
