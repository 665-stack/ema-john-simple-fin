// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuoTmsixdaExrZn010GPsxPMpLCb8kH7U",
    authDomain: "ema-john-simple-fin.firebaseapp.com",
    projectId: "ema-john-simple-fin",
    storageBucket: "ema-john-simple-fin.appspot.com",
    messagingSenderId: "258313456757",
    appId: "1:258313456757:web:ac96c6e8acad2081387c3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;