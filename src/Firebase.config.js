// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa8-ywaev5pnCbu4DngGhPnQqzA9pnRGk",
  authDomain: "pencraft-126f8.firebaseapp.com",
  projectId: "pencraft-126f8",
  storageBucket: "pencraft-126f8.appspot.com",
  messagingSenderId: "979442750889",
  appId: "1:979442750889:web:f761202459a3cba05ba0b8",
  measurementId: "G-L3PWB4P0Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};