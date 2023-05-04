import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAInQ50G7WdDba25FYTiKEyzOqOmLLZJHM",
  authDomain: "flourisherslanding.firebaseapp.com",
  projectId: "flourisherslanding",
  storageBucket: "flourisherslanding.appspot.com",
  messagingSenderId: "670971498560",
  appId: "1:670971498560:web:3f1cf0921658e046384fa5",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };
