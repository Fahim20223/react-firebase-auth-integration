//DANGER !!!!!!!!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCme1pjkSbNnKu8hO-c06Y91I4jPHFi1e8",
  authDomain: "react-firebase-auth-cb79f.firebaseapp.com",
  projectId: "react-firebase-auth-cb79f",
  storageBucket: "react-firebase-auth-cb79f.firebasestorage.app",
  messagingSenderId: "918895494465",
  appId: "1:918895494465:web:767003c091c44eb9cacdc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
