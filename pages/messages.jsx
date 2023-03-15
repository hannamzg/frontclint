import { StyleSheet, Text, View ,Button} from "react-native";
import * as React from "react";


export default function Massages({ navigation }) {
  return (
    <View style={styles.body}>
        <Text>massages</Text>
        <Button
        title="Go to home"
        onPress={() => navigation.navigate('chats')}
      />  
    </View>
  );
}

const styles = StyleSheet.create({

});
