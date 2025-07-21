import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw4rU2_37aK2igxjlt12KzjfADxdfE9DQ",
  authDomain: "miniblog-5f95a.firebaseapp.com",
  projectId: "miniblog-5f95a",
  storageBucket: "miniblog-5f95a.firebasestorage.app",
  messagingSenderId: "138715671127",
  appId: "1:138715671127:web:1c31816cd7cab6bc2d9112"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};