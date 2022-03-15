import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKIzIOvyXwmQvrkd98D7TkE0kuucgHdDQ",
  authDomain: "happytrip-c5ae4.firebaseapp.com",
  projectId: "happytrip-c5ae4",
  storageBucket: "happytrip-c5ae4.appspot.com",
  messagingSenderId: "89715648299",
  appId: "1:89715648299:web:2ebac01ca410a95850876e",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
