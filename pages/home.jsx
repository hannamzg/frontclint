import { StyleSheet, Text, View ,Button} from "react-native";
import * as React from "react";
import Card from "../compents/card.jsx";
import SearchInput from "../compents/input.jsx";

export default function Home({ navigation }) {
  return (
    <View style={styles.body}>
      
      <SearchInput />

      <Card
        imageSource={
          "https://th.bing.com/th/id/OIP.jIwBKde_hz5cDOVw6tyA4QHaE8?pid=ImgDet&rs=1"
        }
        name={"hanna"}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
  },
});
