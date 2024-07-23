// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtxsYSMs-dUa-lTVGJ4kaL-8_GLldZ8rY",
    authDomain: "job-portal-83a3a.firebaseapp.com",
    projectId: "job-portal-83a3a",
    storageBucket: "job-portal-83a3a.appspot.com",
    messagingSenderId: "130384243555",
    appId: "1:130384243555:web:40a0022f2f179a11320156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app