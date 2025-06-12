import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useConfessions } from '../contexts/ConfessionsContext';

const PostConfessionScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);
  const { addConfession } = useConfessions();

  const handleSubmit = async () => {
    if (!text.trim()) return;
    await addConfession(text);
    setText('');
    setVisible(true);
    navigation.navigate('ConfessionsFeed');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Your Confession"
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit}>
        <Text>Submit</Text>
      </Button>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={2000}>
        <Text>Confession Posted!</Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
});

export default PostConfessionScreen;