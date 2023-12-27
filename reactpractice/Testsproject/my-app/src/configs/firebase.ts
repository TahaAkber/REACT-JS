// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZpbyiD2gGtWExI2KJX_FYwYscJLTHmI",
  authDomain: "test-project-b43f4.firebaseapp.com",
  projectId: "test-project-b43f4",
  storageBucket: "test-project-b43f4.appspot.com",
  messagingSenderId: "673750175283",
  appId: "1:673750175283:web:7c5dac8bf11d5433415d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();