import { StyleSheet, Text, View  } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as React from 'react';
import Chats from "./compents/cahts.jsx"

export default function App() {
  const [text, setText] = React.useState('');

  const handleInputChange = (text) => {
    setText(text);
  };

  return (
    
    <View style={styles.body}>
      <View style={styles.nav}>
          <Text style={styles.TextNav}>chat</Text>
          <Text style={styles.TextNav}>name</Text>
      </View>
      
      <View style={styles.input}>
        <TextInput
            mode="outlined"
            placeholder="Type something"
            onChangeText={handleInputChange}
            right={<TextInput.Affix text={text.length+"/100"} />}
            style={{ width: 300,}}
          />
      </View>
     <Chats/>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
     marginTop:40
  },
  nav: {
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-between',
    width:"100vw",
    alignItems:"center",
   
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },

  input:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    marginTop:20,
  },

  TextNav:{
    margin:20,
  }

});
