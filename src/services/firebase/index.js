import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBx-CnJWZqiIFJbXroGNzrKV2PDrU0RUnU",
  authDomain: "backend-shanticommerce.firebaseapp.com",
  projectId: "backend-shanticommerce",
  storageBucket: "backend-shanticommerce.appspot.com",
  messagingSenderId: "222449434511",
  appId: "1:222449434511:web:fe55c959c8dd22d24495fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

