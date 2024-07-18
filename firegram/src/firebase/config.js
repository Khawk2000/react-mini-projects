// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "firegram-d7878.firebaseapp.com",
  projectId: "firegram-d7878",
  storageBucket: "firegram-d7878.appspot.com",
  messagingSenderId: "351728020067",
  appId: "1:351728020067:web:1561bb64b46c2fc8b4e656",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const timestamp = serverTimestamp;

export { db, storage, timestamp };
