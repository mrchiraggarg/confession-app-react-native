import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2U743exwIVj37pMEMDMKpQA56WeEXvFw",
  authDomain: "confession-app-f5a67.firebaseapp.com",
  projectId: "confession-app-f5a67",
  storageBucket: "confession-app-f5a67.firebasestorage.app",
  messagingSenderId: "339307365760",
  appId: "1:339307365760:web:a64bfcdd686e68bcb0ed65",
  measurementId: "G-VP5F0BE7NW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, serverTimestamp };
