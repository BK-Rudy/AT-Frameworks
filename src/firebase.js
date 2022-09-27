import firebase from "firebase/app";
import "firebase/database";

let  firebaseConfig = {
  apiKey: "AIzaSyC-J--dNY7vCrwZvywfLvUXSJ2jy6yXtPE",
  authDomain: "at-frameworks-infnet.firebaseapp.com",
  projectId: "at-frameworks-infnet",
  storageBucket: "at-frameworks-infnet.appspot.com",
  messagingSenderId: "809112392631",
  appId: "1:809112392631:web:20a1d4c3c14a7b1ea58e32"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();