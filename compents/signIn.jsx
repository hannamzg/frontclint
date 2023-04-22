import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {singinServer} from '../server/auth/singin';
import Toast from 'react-native-toast-message';

const SignInPage = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = () => {
    console.log(username,password);
    // Handle sign-in logic here
    try{
      singinServer(username,password).then((data)=>{
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success!',
          text2: data.data,
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 60,
          bottomOffset: 40,
          backgroundColor: 'red',
        })
        navigation.navigate('chats')
      }).catch((err)=>{
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'error',
          text2: err.message,          
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 60,
          bottomOffset: 40,
         
        })
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }
  }; 
    
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setusername}
        style={styles.input}
        placeholderTextColor={'black'}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor={'black'}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#1E90FF',
    fontSize: 16,
  },
});

export default SignInPage;