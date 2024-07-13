// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "avighna-43cc8.firebaseapp.com",
  projectId: "avighna-43cc8",
  storageBucket: "avighna-43cc8.appspot.com",
  messagingSenderId: "935706115478",
  appId: "1:935706115478:web:ccb3e80c58ea278b58b1b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);