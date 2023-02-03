// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr72XcG7i0LsN2sAqwhXsJwdFCKXyQ9qY",
  authDomain: "react-firebase-79296.firebaseapp.com",
  projectId: "react-firebase-79296",
  storageBucket: "react-firebase-79296.appspot.com",
  messagingSenderId: "808667143696",
  appId: "1:808667143696:web:c536abc79bdf15e654b495"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)