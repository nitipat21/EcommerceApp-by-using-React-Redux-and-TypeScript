import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEx7y2D5ql6ryZZRP1dVRRqKI2NOKGSnc",
  authDomain: "e-commerce-app-13cea.firebaseapp.com",
  databaseURL: "https://e-commerce-app-13cea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-app-13cea",
  storageBucket: "e-commerce-app-13cea.appspot.com",
  messagingSenderId: "287932131639",
  appId: "1:287932131639:web:8dbe20b2f04709174912b2",
  measurementId: "G-3C5QMHYJ71"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);