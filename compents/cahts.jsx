import { StyleSheet,  View  } from 'react-native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function Chats() {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  return (
    
    <View>
     <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
    </View>
  );
}

/* const styles = StyleSheet.create({


});

 */