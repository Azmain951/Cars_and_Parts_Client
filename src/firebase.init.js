// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_YHHOqciBB8RyAUJQfvxxBWT7z4bbSnc",
    authDomain: "manufacturer-website-6cbb8.firebaseapp.com",
    projectId: "manufacturer-website-6cbb8",
    storageBucket: "manufacturer-website-6cbb8.appspot.com",
    messagingSenderId: "358233753521",
    appId: "1:358233753521:web:f71348b3973a4ab2b25f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;