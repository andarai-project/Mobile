import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //isso é para a navegação de outras páginas ''fora'' do tabnavigator
import TabNavigator from './andaraiCliente/app/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator /> 
    </NavigationContainer>
  );
}
