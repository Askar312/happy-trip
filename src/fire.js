import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvO20G6wU0zqU5pnFAA-4zwEcF9BrGeYg",
  authDomain: "podfontilo-project-mentor.firebaseapp.com",
  projectId: "podfontilo-project-mentor",
  storageBucket: "podfontilo-project-mentor.appspot.com",
  messagingSenderId: "12345762441",
  appId: "1:12345762441:web:2176b60167af0411001c58",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
