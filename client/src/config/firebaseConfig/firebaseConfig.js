
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWt9dhRJhl1q9yjLRJKfxfLQ0XwiTR97Y",
  authDomain: "learningmanagementsystem-cda5d.firebaseapp.com",
  projectId: "learningmanagementsystem-cda5d",
  storageBucket: "learningmanagementsystem-cda5d.appspot.com",
  messagingSenderId: "157501334617",
  appId: "1:157501334617:web:1d01cffca4cd3b183bbd48",
  measurementId: "G-R6CZ30370S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp, "gs://learningmanagementsystem-cda5d.appspot.com");
