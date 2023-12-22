// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
//grab data and send to database from out app



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnd7YiF83LHfhXIEUkgybGRFW9dOKQc7g",
  authDomain: "first-project-f49e3.firebaseapp.com",
  projectId: "first-project-f49e3",
  storageBucket: "first-project-f49e3.appspot.com",
  messagingSenderId: "330945760593",
  appId: "1:330945760593:web:0de2963453b05e49db1770",
  measurementId: "G-Q6EK8PWJ1N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);