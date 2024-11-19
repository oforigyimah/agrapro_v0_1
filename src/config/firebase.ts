import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCy3znoME0XL8bQq9sJZocsFkjzbR0BV_I",
    authDomain: "agrapro00.firebaseapp.com",
    projectId: "agrapro00",
    storageBucket: "agrapro00.firebasestorage.app",
    messagingSenderId: "950374360960",
    appId: "1:950374360960:web:a9dc3f655770a41ac34365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
