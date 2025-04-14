// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0UXPkM3ZY1kV37rCs1qdr5ckli-VDybg",
  authDomain: "coder-flexproyect.firebaseapp.com",
  projectId: "coder-flexproyect",
  storageBucket: "coder-flexproyect.firebasestorage.app",
  messagingSenderId: "582850121140",
  appId: "1:582850121140:web:f65abacab53e9b634636e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 