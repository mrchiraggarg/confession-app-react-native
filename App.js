// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'; // Import PaperProvider

import ConfessionsFeedScreen from './screens/ConfessionsFeedScreen';
import PostConfessionScreen from './screens/PostConfessionScreen';
import { ConfessionsProvider } from './contexts/ConfessionsContext';

const Stack = createStackNavigator();

// Optional: Define a theme for React Native Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Example primary color
    accent: '#03dac4',   // Example accent color
  },
};

export default function App() {
  return (
    <ConfessionsProvider>
      <PaperProvider theme={theme}> {/* Wrap with PaperProvider */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ConfessionsFeed">
            <Stack.Screen name="ConfessionsFeed" component={ConfessionsFeedScreen} />
            <Stack.Screen name="PostConfession" component={PostConfessionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ConfessionsProvider>
  );
}
