// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdBR45g973txFfuJ6crTpYahEU_gEux78",
  authDomain: "user-email-password-auth-m50.firebaseapp.com",
  projectId: "user-email-password-auth-m50",
  storageBucket: "user-email-password-auth-m50.appspot.com",
  messagingSenderId: "901281452886",
  appId: "1:901281452886:web:c0e1a560c4d88ec44cfcf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;