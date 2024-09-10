import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import  Login  from './src/screens/Login';
import { Home } from './src/screens/Home';
import { Donate } from './src/screens/Donate';
import { ThankYou } from './src/screens/ThankYou';
import Ongs from './src/screens/Ongs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  style={styles.container} initialRouteName='Login' screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Donate' component={Donate}></Stack.Screen>
        <Stack.Screen name='ThankYou' component={ThankYou}></Stack.Screen>
        <Stack.Screen name='Ongs' component={Ongs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
