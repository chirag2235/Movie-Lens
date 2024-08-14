// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {firebase} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACuWsY5OxAZp32jLfSKFLvaKaHNIGZiC8",
  authDomain: "movie-lens-8cba2.firebaseapp.com",
  projectId: "movie-lens-8cba2",
  storageBucket: "movie-lens-8cba2.appspot.com",
  messagingSenderId: "216239991959",
  appId: "1:216239991959:web:4d4165756546b471c14dd2",
  measurementId: "G-VLPMLVMWMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {provider,app,auth,db}