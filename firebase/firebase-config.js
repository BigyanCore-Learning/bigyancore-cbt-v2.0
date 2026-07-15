// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcHPHRvTjXxvjGNuDs46W1x_Nfm4-_sqo",
    authDomain: "bigyancore-learning.firebaseapp.com",
    projectId: "bigyancore-learning",
    storageBucket: "bigyancore-learning.firebasestorage.app",
    messagingSenderId: "837306913620",
    appId: "1:837306913620:web:a8e71d6e4e41b67339aec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);