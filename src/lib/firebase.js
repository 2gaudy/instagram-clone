// Import the functions you need from the SDKs you need
import {  getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI4EcCunTKdQt9RxOzH-RpmJcfb3hVMV8",
  authDomain: "instagram-clone-2gaudy.firebaseapp.com",
  projectId: "instagram-clone-2gaudy",
  storageBucket: "instagram-clone-2gaudy.appspot.com",
  messagingSenderId: "833075279458",
  appId: "1:833075279458:web:685d0404f2fa3df4cc433b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export {
    app,
    db,
    auth,
    storage
}