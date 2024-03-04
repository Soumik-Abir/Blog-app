// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogpost-1f2bc.firebaseapp.com",
  projectId: "blogpost-1f2bc",
  storageBucket: "blogpost-1f2bc.appspot.com",
  messagingSenderId: "970616297433",
  appId: "1:970616297433:web:f743595185df7382662bc8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);