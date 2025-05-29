// screens/ConfessionsFeedScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper'; // Using Paper components
import { useConfessions } from '../contexts/ConfessionsContext'; // Import the hook

function ConfessionsFeedScreen({ navigation }) {
  const { confessions, loading } = useConfessions();

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        {/* <Title>A Secret</Title> */}
        <Paragraph style={styles.confessionText}>{item.text}</Paragraph>
        <Text style={styles.timestamp}>
          {item.createdAt?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, {item.createdAt?.toDate().toLocaleDateString()}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {confessions.length === 0 && !loading ? (
        <Text style={styles.emptyText}>No confessions yet. Be the first!</Text>
      ) : (
        <FlatList
          data={confessions}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
      <Button
        icon="plus-circle-outline"
        mode="contained"
        style={styles.postButton}
        onPress={() => navigation.navigate('PostConfession')}
      >
        Post a New Confession
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' }, // Light grey background
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  list: { paddingHorizontal: 8, paddingVertical: 8 },
  card: {
    marginVertical: 8,
    marginHorizontal:8,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 8,
  },
  confessionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
    textAlign: 'right',
  },
  postButton: {
    margin: 16,
    paddingVertical: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#555',
  },
});

export default ConfessionsFeedScreen;