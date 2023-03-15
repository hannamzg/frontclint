import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Card from "../compents/card";
import SearchInput from "../compents/input";

export default function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <View style={styles.nav}>
        <Text style={styles.TextNav}>chat</Text>
        <Text style={styles.TextNav}>name</Text>
      </View>
      <SearchInput />

      <Card
        imageSource={
          "https://th.bing.com/th/id/OIP.jIwBKde_hz5cDOVw6tyA4QHaE8?pid=ImgDet&rs=1"
        }
        name={"hanna"}
      />
      {/*  <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />  */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
  },

  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100vw",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },

  TextNav: {
    margin: 20,
  },
});
