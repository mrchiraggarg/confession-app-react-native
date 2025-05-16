// screens/ConfessionsFeedScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// Import UI components from React Native Paper if you're using it
// import { Appbar, Card, Paragraph } from 'react-native-paper';

function ConfessionsFeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confessions Feed</Text>
      {/* We'll populate this with a FlatList later */}
      <Button
        title="Post a New Confession"
        onPress={() => navigation.navigate('PostConfession')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default ConfessionsFeedScreen;