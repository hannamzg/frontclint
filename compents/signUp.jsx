import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Button,Image } from 'react-native';
import Toast from 'react-native-toast-message';
import {singUpServer} from '../server/auth/singUp.js'
import * as ImagePicker from 'react-native-image-picker';
import Cookies from 'js-cookie';

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  let myCookies=Cookies.get()

   if (myCookies) {
    console.log(123);
    navigation.navigate('chats')
  } 

  const handleSignUp = () => {
    if (name.length==0||photo.length==0||username.length==0||password.length==0) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Success!',
        text2: 'You successfully completed the action.',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60,
        bottomOffset: 40
      })
      return 
    }
    try{
      singUpServer(name,username,password,photo).then((data)=>{
        if (data) {
          navigation.navigate('SignInPage')
        }
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }
  };

  const handleClick = () => { 
    navigation.navigate('SignInPage')
   
    console.log(ImagePicker);
   
  };


  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log(response.assets[0]);
        setPhoto(response.assets[0]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor={'black'}
      />
      <TextInput
        placeholder="user name"
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
        placeholderTextColor={'black'}
        style={styles.input}
      />

      <View>
        {photo && <Image source={{ uri: photo.uri }} style={{ width: 200, height: 200 }} />}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    
     

      <TouchableOpacity style={styles.button} onPress={()=>{
        handleSignUp()
        
      }}>
        <Text style={styles.buttonText} >Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signIn} onPress={handleClick}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
  signIn: {
    marginTop: 20,
  },
  signInText: {
    color: '#1E90FF',
    fontSize: 16,
  },
  photoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  photoPlaceholder: {
    fontSize: 16,
    color: '#888',
  }
});

export default SignUpPage;
