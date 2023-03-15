import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home.jsx";
import Massages from "./pages/messages.jsx";
import SignInPage from './compents/signIn.jsx';
import SignUpPage from './compents/signUp.jsx';
import * as React from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import Card from "./compents/card.jsx";
import SearchInput from "./compents/input.jsx"; */

export default function App() {
  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUpPage" /* headerMode="none" */>
      <Stack.Screen name="chats" component={Home} />
      <Stack.Screen name="Massages" component={Massages} />
      <Stack.Screen name="SignInPage" component={SignInPage}/>
      <Stack.Screen name="SignUpPage" component={SignUpPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({});
