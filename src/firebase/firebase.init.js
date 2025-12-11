// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh0FzMELVb1QgMR45TTJToTMdjb0k03ak",
  authDomain: "coffee-store-client-38f33.firebaseapp.com",
  projectId: "coffee-store-client-38f33",
  storageBucket: "coffee-store-client-38f33.firebasestorage.app",
  messagingSenderId: "792999203002",
  appId: "1:792999203002:web:5b9b44e888e3fd03a8f283",
  measurementId: "G-Z3CBB3TS4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
