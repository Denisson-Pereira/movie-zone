import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcsI7fAuxs-tw5CWiH4bVh3W553nA5C_0",
  authDomain: "fir-app-b6dad.firebaseapp.com",
  projectId: "fir-app-b6dad",
  storageBucket: "fir-app-b6dad.firebasestorage.app",
  messagingSenderId: "170887941682",
  appId: "1:170887941682:web:fcd80c161f425605ac762b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);