console.log("APP IS RUNNING");

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DashboardScreen from './src/screens/DashboardScreen';
import CreateEventScreen from './src/screens/CreateEventScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';

// ✅ NEW IMPORTS
import TicketSelectionScreen from './src/screens/TicketSelectionScreen';
import RegisterScreen from './src/screens/RegisterScreen';

// Initialize screens
enableScreens();

const Stack = createStackNavigator();

import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
            <Stack.Screen name="EventDetail" component={EventDetailScreen} />

            {/* ✅ NEW SCREENS */}
            <Stack.Screen name="Tickets" component={TicketSelectionScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}