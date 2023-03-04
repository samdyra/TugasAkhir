import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

export const firebaseConfig = {
  apiKey: "AIzaSyAOGVNqUqEt29UXje3xXQ4jahoTwfo96OI",
  authDomain: "tugasakhir-6cc8d.firebaseapp.com",
  projectId: "tugasakhir-6cc8d",
  storageBucket: "tugasakhir-6cc8d.appspot.com",
  messagingSenderId: "497951229047",
  appId: "1:497951229047:web:78bcf1aad9f2bdc521b272"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
