import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCsV5KULDYoE9ZTc3aObu-7ms43jbwxnyU",
    authDomain: "revision-b77e3.firebaseapp.com",
    projectId: "revision-b77e3",
    storageBucket: "revision-b77e3.appspot.com",
    messagingSenderId: "109970877308",
    appId: "1:109970877308:web:d2fc8264389c3170be92f9",
    measurementId: "G-Q49PFXC8GD"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);