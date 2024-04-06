import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD-exJbaqqaJ7onLWFI4SDENG_g93Uu_78",
    authDomain: "react-auth-8b1e0.firebaseapp.com",
    projectId: "react-auth-8b1e0",
    storageBucket: "react-auth-8b1e0.appspot.com",
    messagingSenderId: "484138594237",
    appId: "1:484138594237:web:8b63bb78307dc0863e2cd4",
    measurementId: "G-4D8ZWQLMHX"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();