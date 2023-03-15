import React from 'react';
import { TouchableOpacity,View, Text, Image, StyleSheet } from 'react-native';

function Card(prop) {
  const handleClick = () => {
     console.log(prop.navigation);
    prop.navigation.navigate('Massages')
   
  };
  
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.card} >
        <Image source={prop.imageSource} style={styles.image} />
        <Text style={styles.name}>{prop.name}</Text>
      </View>
    </TouchableOpacity>
  );  
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;