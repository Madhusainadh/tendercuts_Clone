import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiez1tMBZyhdVJ0e-jKdZDdFJBujYSRK0",
  authDomain: "tender-cuts.firebaseapp.com",
  projectId: "tender-cuts",
  storageBucket: "tender-cuts.appspot.com",
  messagingSenderId: "708801910073",
  appId: "1:708801910073:web:2ccb7f4301cddf70a404e8",
  measurementId: "G-76Y6LYNK8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
