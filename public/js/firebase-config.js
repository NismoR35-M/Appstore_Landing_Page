// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIimkFBavrtMGz_nicOv1kdpPUT6f9-xY",
    authDomain: "californiappstudios.firebaseapp.com",
    projectId: "californiappstudios",
    storageBucket: "californiappstudios.appspot.com",
    messagingSenderId: "1013417516604",
    appId: "1:1013417516604:web:8c3f48bb9bae65c97bad39",
    measurementId: "G-WP07DRVHGM"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
