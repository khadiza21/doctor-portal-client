// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOCNBW6dAt1nHlGXu_LLcY65PdW4Ijvpo",
  authDomain: "doctor-portal-9183f.firebaseapp.com",
  projectId: "doctor-portal-9183f",
  storageBucket: "doctor-portal-9183f.appspot.com",
  messagingSenderId: "1076960764742",
  appId: "1:1076960764742:web:932d0ab12a5123bfa0bb47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;