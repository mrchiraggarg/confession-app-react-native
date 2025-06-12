import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card, ActivityIndicator } from 'react-native-paper';
import { useConfessions } from '../contexts/ConfessionsContext';

const ConfessionsFeedScreen = () => {
  const { confessions, loading } = useConfessions();

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loader} />;
  }

  return (
    <FlatList
      data={confessions}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text>{item.text}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
});

export default ConfessionsFeedScreen;
