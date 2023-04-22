import { StyleSheet, Text,  FlatList,View ,Button,TextInput,TouchableOpacity} from "react-native";
import { useState,useEffect  } from "react";
import {getChats} from '../server/chats/getChats';
import * as React from "react";
import Cookies from 'js-cookie';
import moment from 'moment';

export default function Massages(id) {
  const [messagesData,setMessagesData]=useState();

  let myCookies=Cookies.get();
  console.log(myCookies.user);
  
  useEffect(()=>{
    try{
      getChats(id.route.params.id).then((data)=>{
        setMessagesData(data.data)
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }
  },[])

  /* const messagesData = [
    {
      id: '1',
      sender: 'John',
      message: 'Hey, what\'s up?',
      timestamp: '9:15 AM',
    },
    {
      id: '2',
      sender: 'Mary',
      message: 'Nothing much, just hanging out. How about you?',
      timestamp: '9:30 AM',
    },
    {
      id: '3',
      sender: 'John',
      message: 'Same here. Want to grab lunch later?',
      timestamp: '9:35 AM',
    },
  ]; */
 
  return (
    <View style={styles.container}>
      
      <View style={styles.Conme} >
      {messagesData&& messagesData.map((elemnt)=>{
      return (elemnt.me === Number(myCookies.user) ? <View  style={styles.me}>
            <View >{elemnt.theChat}</View>
            <View>{ moment(elemnt.createAt).format('MMMM  YYYY') }</View>
          </View>:
          <View  style={styles.him}>
            <View >{elemnt.theChat}</View>
            <View>{ moment(elemnt.createAt).format('MMMM  YYYY') }</View>
          </View>)
      }) 
      }    
      </View>
      <View style={styles.inputDiv}>
         <TextInput style={styles.input} placeholder={"what in your maind"}/>
         <TouchableOpacity style={styles.Send}>+</TouchableOpacity>
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    width:"100%",
   
  },
  Conme:{
    padding: 20,
    backgroundColor: '#EAEAEA',
    flexDirection:"row", 
    flexWrap:"wrap"
  },
  me:{
    backgroundColor:"green",
    padding:6,
    borderRadius:10,
    color:"white",
    width:"80%",
    height:50,
    marginRight:50,
    marginTop:10,
  },
  him:{
    marginLeft:50,
    marginTop:10,
    backgroundColor:"black",
    padding:6,
    borderRadius:10,
    color:"white",
    width:"80%",
    height:50,
    textAlign: "end"
  },
  inputDiv:{
    display :"flex",    
    flexDirection:"row",
    position:'fixed',
    bottom:0,
    width:"100%",
    padding:10,
  },

  input: {
    height: 40,
    fontSize: 16,
    paddingHorizontal: 8,
    backgroundColor:"white",
    padding:10,
    borderRadius:12,
    width:"80%",
  },
  Send:{
    display :"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:20,
    color:"white",
    borderRadius:10,
    width:"20%",
    backgroundColor:"green"
  }
 
});
