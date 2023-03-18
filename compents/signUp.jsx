import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Button } from 'react-native';
import Toast from 'react-native-toast-message';

import * as ImagePicker from 'react-native-image-picker';

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  const handleClick = () => { 
    console.log(12);
    navigation.navigate('SignInPage')
   
    console.log(ImagePicker);
   
  };


  /* const handlePhotoUpload = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response.uri);
      }
    });
  }; */

  const handlePhotoUpload = () => {
    const option ={};
    ImagePicker.launchImageLibrary(option,response=>{
      console.log(response);
    })
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
        value={email}
        onChangeText={setEmail}
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

      <TouchableOpacity onPress={handlePhotoUpload}>
        <View style={styles.photoContainer}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <Text style={styles.photoPlaceholder}>Upload Photo</Text>
          )}
        </View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText} onPress={()=>Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success!',
        text2: 'You successfully completed the action.',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60,
        bottomOffset: 40
      })}>Sign Up</Text>
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
