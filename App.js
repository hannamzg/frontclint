import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  const [text, setText] = React.useState('');

  const handleInputChange = (text) => {
    setText(text);
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <TextInput
      mode="outlined"
      placeholder="Type something"
      onChangeText={handleInputChange}
      right={<TextInput.Affix text={text.length+"/100"} />}
      style={styles.input}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
   minWidth:"250px"
  }
});
