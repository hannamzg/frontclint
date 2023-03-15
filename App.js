import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home.jsx";
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import Card from "./compents/card.jsx";
import SearchInput from "./compents/input.jsx"; */

export default function App() {
  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({});
