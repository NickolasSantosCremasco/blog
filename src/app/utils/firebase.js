// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-34a6c.firebaseapp.com",
  projectId: "blog-34a6c",
  storageBucket: "blog-34a6c.firebasestorage.app",
  messagingSenderId: "970035637036",
  appId: "1:970035637036:web:39ba7da2c3e3defb1c9a89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);