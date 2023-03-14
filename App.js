import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
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
});
