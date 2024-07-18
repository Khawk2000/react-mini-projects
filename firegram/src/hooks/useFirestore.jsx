import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  doc,
  onSnapshot,
  setDoc,
  query,
  collection,
  orderBy,
} from "firebase/firestore";

const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, col), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (qSnap) => {
      let documents = [];
      qSnap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [col]);

  return { docs };
};

export default useFirestore;
