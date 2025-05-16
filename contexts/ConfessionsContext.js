// contexts/ConfessionsContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
// We'll integrate Firebase here later

const ConfessionsContext = createContext();

export const ConfessionsProvider = ({ children }) => {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Placeholder for fetching confessions (will be replaced by Firebase listener)
  useEffect(() => {
    // Simulate fetching data
    const mockConfessions = [
      { id: '1', text: 'I ate the last cookie and blamed the dog.', createdAt: new Date() },
      { id: '2', text: 'I secretly love pineapple on pizza.', createdAt: new Date() },
    ];
    // setConfessions(mockConfessions);
    // setLoading(false);
    // Firebase logic will go here
  }, []);

  const addConfession = async (text) => {
    // Logic to add confession to Firebase and update state
    // For now, just add to local state (this will be handled by real-time updates later)
    // const newConfession = { id: Date.now().toString(), text, createdAt: new Date() };
    // setConfessions(prevConfessions => [newConfession, ...prevConfessions]);
    // Firebase logic will go here
  };

  return (
    <ConfessionsContext.Provider value={{ confessions, loading, addConfession, setConfessions, setLoading }}>
      {children}
    </ConfessionsContext.Provider>
  );
};

export const useConfessions = () => useContext(ConfessionsContext);
