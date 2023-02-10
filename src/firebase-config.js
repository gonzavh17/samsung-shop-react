import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwiaoYX2z6zcdf64CrdXger7rBXqtr2Kk",
  authDomain: "samsung-shop-edb49.firebaseapp.com",
  projectId: "samsung-shop-edb49",
  storageBucket: "samsung-shop-edb49.appspot.com",
  messagingSenderId: "345842894774",
  appId: "1:345842894774:web:754672c6bbec7da8952317"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const productsCollection = collection(db, "products")
export const ventasCollection = collection(db, "ventas")
