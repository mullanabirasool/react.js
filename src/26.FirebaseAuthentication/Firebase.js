
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbmO_qu89mgph9BIW0xVMGV3YNvzeFJAc",
  authDomain: "react-24-4cbdf.firebaseapp.com",
  projectId: "react-24-4cbdf",
  storageBucket: "react-24-4cbdf.firebasestorage.app",
  messagingSenderId: "1083995826459",
  appId: "1:1083995826459:web:3a4c8085dabbab43aecbbe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);