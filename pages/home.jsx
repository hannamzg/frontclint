import { StyleSheet, Text, View ,Button,TouchableOpacity} from "react-native";
import { useState,useEffect } from "react";
import * as React from "react";
import Card from "../compents/card.jsx";
import SearchInput from "../compents/input.jsx";
import Cookies from 'js-cookie';
import {getUsers} from '../server/chats/getUsers.js'


export default function Home({ navigation }) {
  const handleClick = (data,id) => {
    console.log(data);
    navigation.navigate( {name: 'Massages', params: { id: id,data:data } })
  };

  let myCookies=Cookies.get();

  const [users,setUsers]=useState();
  useEffect(()=>{
    try{
      getUsers(myCookies.user).then((data)=>{
        setUsers(data.data)
        console.log(data.data);
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }
  },[])
  
  
  return (
    <View style={styles.body}>
      
      <SearchInput navigation={ navigation }/>

      {users&& users.map((data)=>{
      return <TouchableOpacity key={data.id} onPress={()=>handleClick(data,data.IdChat)}>
       <Card  
        imageSource= {data.photo!="null"?"http://localhost:5000/uploads/"+data.photo:"http://localhost:5000/uploads/1680041032785-219.jpg" }
        name={data.name}
        navigation={navigation}
      />
      </TouchableOpacity>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
  },
});
