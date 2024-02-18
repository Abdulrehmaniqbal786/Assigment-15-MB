// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zTs4pJEQTZFKPxBzBCiRdPauUKkXx8U",
  authDomain: "assigment-15-mb.firebaseapp.com",
  projectId: "assigment-15-mb",
  storageBucket: "assigment-15-mb.appspot.com",
  messagingSenderId: "207653364344",
  appId: "1:207653364344:web:411dbb5eddea88eb55838d"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {firebase_app, auth}