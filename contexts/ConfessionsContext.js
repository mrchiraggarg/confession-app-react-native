import React, { createContext, useState, useContext, useEffect } from 'react';
import { db, serverTimestamp } from '../firebaseConfig';
import { collection, onSnapshot, addDoc, query, orderBy } from "firebase/firestore";
import { Text } from 'react-native';

const ConfessionsContext = createContext();

export const ConfessionsProvider = ({ children }) => {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "confessions"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedConfessions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setConfessions(fetchedConfessions);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addConfession = async (text) => {
    await addDoc(collection(db, "confessions"), {
      text: <Text>{text}</Text>,
      createdAt: serverTimestamp()
    });
  };

  return (
    <ConfessionsContext.Provider value={{ confessions, loading, addConfession }}>
      {children}
    </ConfessionsContext.Provider>
  );
};

export const useConfessions = () => useContext(ConfessionsContext);