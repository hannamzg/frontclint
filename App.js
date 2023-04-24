import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Home from "./pages/home.jsx";
import Massages from "./pages/messages.jsx";
import SignInPage from './compents/signIn.jsx';
import SignUpPage from './compents/signUp.jsx';
import Toast from 'react-native-toast-message';
import * as React from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
/* import CookieManager from '@react-native-cookies/cookies'; */
 import {logout} from './server/auth/logout.js'; 
/* import Card from "./compents/card.jsx";
import SearchInput from "./compents/input.jsx"; */

export default function App() {
  const Stack = createStackNavigator();

   const handleLogout = () => {
     logout()
    .then((success) => { 
     navigation.navigate('SignInPage')
      console.log('Cookies cleared', success);
    })
    .catch((error) => {
      console.log('Error clearing cookies', error);
    }); 
   
  }; 

  return (
    <> 
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="SignUpPage" /* headerMode="none" */>
        <Stack.Screen name="chats"  options={{ header: () => (
            <View style={styles.nav}>
             <View>
                <Text style={styles.NavName}>
                chats
                </Text>
             </View>
            <TouchableOpacity onPress={()=>handleLogout()}>
              <View style={styles.NavsingOut}>
                <Text style={{color:"white"}}>
                  sing Out
                </Text>
             </View>
            </TouchableOpacity>

            </View>
          ), headerLeft: null}}  component={Home} />
        <Stack.Screen name="Massages"   component={Massages} />
        <Stack.Screen name="SignInPage" component={SignInPage}/>
        <Stack.Screen name="SignUpPage"  component={SignUpPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
 
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white', 
    height: "64px",
    color: 'blue', 
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    width:'100%'
  },
  NavName:{
    paddingStart:"20px",
    fontWeight:"bold",
    fontSize:"18px"
  },
  NavsingOut:{
    marginEnd:"20px",
    fontWeight:"bold",
    fontSize:"18px",
    backgroundColor:"red",
    color:"white",
    padding:"10px",
    borderRadius:"8px",    

  }
});
