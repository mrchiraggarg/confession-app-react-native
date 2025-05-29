// contexts/ConfessionsContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase config
import firebase from 'firebase/compat/app'; // For serverTimestamp

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

    useEffect(() => {
        setLoading(true);
        const unsubscribe = db.collection('confessions')
            .orderBy('createdAt', 'desc') // Show newest first
            .onSnapshot(snapshot => { // This is the real-time listener
                const confessionsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setConfessions(confessionsData);
                setLoading(false);
            }, error => {
                console.error("Error fetching confessions: ", error);
                Alert.alert("Error", "Could not fetch confessions.");
                setLoading(false);
            });

        return () => unsubscribe(); // Cleanup: Unsubscribe when the component/context unmounts
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    const addConfession = async (text) => {
        if (!text.trim()) return; // Basic validation
        try {
            await db.collection('confessions').add({
                text: text,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(), // For sorting
                // anonymousUserId: 'some_generated_id' // Optional: for lightweight session tracking
            });
            // No need to manually update local state here,
            // onSnapshot listener will handle real-time updates.
        } catch (error) {
            console.error("Error adding confession: ", error);
            Alert.alert("Error", "Could not post your confession. Please try again.");
        }
    };

    return (
        <ConfessionsContext.Provider value={{ confessions, loading, addConfession, setConfessions, setLoading }}>
            {children}
        </ConfessionsContext.Provider>
    );
};

export const useConfessions = () => useContext(ConfessionsContext);
