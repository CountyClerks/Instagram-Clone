import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  databaseURL: `${process.env.REACT_APP_databaseURL}`
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);