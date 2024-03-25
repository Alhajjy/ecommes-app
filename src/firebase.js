// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFlUlH7fro3gPijUjqArvqwExC9FWP9Vw",
  authDomain: "ecommers-aa7c6.firebaseapp.com",
  databaseURL: "https://ecommers-aa7c6-default-rtdb.firebaseio.com/",
  projectId: "ecommers-aa7c6",
  storageBucket: "ecommers-aa7c6.appspot.com",
  messagingSenderId: "186628270156",
  appId: "1:186628270156:web:ebaf4f8b704942f31aece9",
  measurementId: "G-23T1SHP01E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
