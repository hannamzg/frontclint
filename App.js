import { StyleSheet, Text, View  } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  const [text, setText] = React.useState('');

  const handleInputChange = (text) => {
    setText(text);
    console.log(text);
  };

  return (
    <View >
      <View style={styles.nav}>
          <Text style={styles.TextNav}>chats</Text>
          <Text style={styles.TextNav}>name</Text>
      </View>
      
      <View style={styles.input}>
        <TextInput
            mode="outlined"
            placeholder="Type something"
            onChangeText={handleInputChange}
            right={<TextInput.Affix text={text.length+"/100"} />}
            style={{ width: 300 }}
          />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-between',
    width:"100vw",
    alignItems:"center",
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingTop:"70px",
  },

  input:{
    width:"300px"
  },
  TextNav:{
    margin:"20px",
  }

});
