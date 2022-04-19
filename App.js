import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {Save,Plus,FoodDetail} from './screens';
import Tabs from './navigation/tabs';
import {useFonts} from 'expo-font';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}

const Stack =createStackNavigator();
export default function App() {
        const [loaded] = useFonts({
          "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
          "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
          "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
      })

      if(!loaded){
      return null;
      }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
      }}
      initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs}  />

        {/* Screens */}
        <Stack.Screen name="Plus" component={Plus} options={{ headerShown: false }} />
        <Stack.Screen name="Save" component={Save} options={{ headerShown: false }} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />


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
