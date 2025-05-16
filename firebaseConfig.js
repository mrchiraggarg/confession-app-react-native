// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwFpJ3gruOUlY4CNemmpvWCatM1g9KPE",
  authDomain: "confession-app-react-native.firebaseapp.com",
  projectId: "confession-app-react-native",
  storageBucket: "confession-app-react-native.firebasestorage.app",
  messagingSenderId: "1048883653779",
  appId: "1:1048883653779:web:d82bab08d2ba10c368b166",
  measurementId: "G-4Q6M77R13B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);