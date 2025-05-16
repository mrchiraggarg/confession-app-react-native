// screens/PostConfessionScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useConfessions } from '../contexts/ConfessionsContext'; // Import the hook
// import { TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';

function PostConfessionScreen({ navigation }) {
  const [confessionText, setConfessionText] = useState('');
  const { addConfession } = useConfessions(); // Get addConfession from context

  const handleSubmit = async () => {
    if (confessionText.trim() === '') {
      Alert.alert('Empty Confession', 'Please write something before posting.');
      return;
    }

    // Logic to submit confession to backend will go here    
    try {
      await addConfession(confessionText); // Use the context function
      Alert.alert('Posted!', 'Your confession has been posted anonymously.');
      setConfessionText('');
      navigation.goBack();
    } catch (error) {
      // Error is already handled in context, but you can add more specific UI feedback here
      console.error("Submit error in screen:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Secret</Text>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        multiline
        numberOfLines={4}
        value={confessionText}
        onChangeText={setConfessionText}
      />
      <Button title="Post Anonymously" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    minHeight: 100,
    textAlignVertical: 'top', // For Android multiline placeholder
    marginBottom: 20,
  },
});

export default PostConfessionScreen;
