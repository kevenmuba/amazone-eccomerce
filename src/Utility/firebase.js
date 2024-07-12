import firebase from "firebase/compat/app";
// thos 3 things are very important to use auth and firebase database
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdr1PN1xM8pVFnlyk-gHus44ivY71c2ec",
  authDomain: "e-website-bd388.firebaseapp.com",
  projectId: "e-website-bd388",
  storageBucket: "e-website-bd388.appspot.com",
  messagingSenderId: "1048503777088",
  appId: "1:1048503777088:web:5764aea58c82c1f3332ca5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// to get every method for the auth and dtabase
export const auth = getAuth(app);
export const db = app.firestore();