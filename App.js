import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, Surface, Text } from 'react-native-paper';
import { Appearance, View } from 'react-native';
import { VSizedBox, HSizedBox } from './Components/UI/spaces';
import { DashboardScreen } from './Components/DashboardScreen/Dashboard';
import { GameScreen } from './Components/PuzzleScreen/puzzle';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => Appearance.setColorScheme("light"), []);

  return (
    <PaperProvider>
      
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      
    </PaperProvider>
  );
}
