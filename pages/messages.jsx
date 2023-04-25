import { StyleSheet, Text,  FlatList,View ,Image,Button,TextInput,TouchableOpacity} from "react-native";
import { useState,useEffect  } from "react";
import {getChats} from '../server/chats/getChats';
import {sendChat} from "../server/chats/sentChat";
import {getWithHo} from '../server/chats/getWithHo';
import * as React from "react";
import Cookies from 'js-cookie';
import moment from 'moment';

export default function Massages(id) {
  const [messagesData,setMessagesData]=useState();
  const [inputValue, setInputValue] = useState('');
  const [him,setHim]=useState(); 
  const [ref,setRef] =useState(false);

  let myCookies=Cookies.get();
  
  console.log(id);
  const handleInputChange = (text) => {
    setInputValue(text);
  };


  useEffect(()=>{
    try{
      getChats(id.route.params.data.id).then((data)=>{
        setMessagesData(data.data)
        setRef(false)
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }


     try{
      getWithHo(id.route.params.data.id).then((data)=>{
        if (Number(myCookies.user)===data.data[0].me) {
            setHim(data.data[0].chatWith)
        } 
        else{
            setHim(data.data[0].me)
        }
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    } 
   
  },[ref])


  const handleSendChat = (me,him,chatId,theChat) => {
    if ( inputValue === "") {
      return
    }
   
    try{
      sendChat(me,him,chatId,theChat).then((data)=>{
        setInputValue('')
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }
  };

 
  return (
    <View style={styles.container}>
      
      <View style={styles.Conme} >
        <View style={styles.Heder}> 
        <View style={styles.imgcont}>
           <Image source={{uri:id.route.params.data.photo!="null"?"http://localhost:5000/uploads/"+id.route.params.data.photo:"http://localhost:5000/uploads/1680041032785-219.jpg"}} style={styles.image} />  
        </View>
          <Text style={styles.HimName}>{id.route.params.data.name}</Text>
        </View>
      {messagesData&& messagesData.map((elemnt)=>{
      return (elemnt.me === Number(myCookies.user) ? <View  style={styles.me} key={elemnt.id}>
            <Text  style={styles.meChat}>{elemnt.theChat}</Text>
            <Text style={styles.meChat}>{ moment(elemnt.createAt).format('MMMM  YYYY') }</Text>
          </View>:
          <View  style={styles.him} key={elemnt.id}>
            <Text style={styles.HimChat}>{elemnt.theChat}</Text>
            <Text style={styles.HimChat}> { moment(elemnt.createAt).format('MMMM  YYYY') }</Text>
          </View>)
      }) 
      }    
      </View>
     <View style={styles.inputDiv}>
         <TextInput style={styles.input} value={inputValue}
        onChangeText={handleInputChange} placeholder={"what in your mind"}/>
         <TouchableOpacity style={styles.Send} onPress={()=>{
         handleSendChat(myCookies.user,him,id.route.params.data.id,inputValue)
         setRef(true)
        }
        }><Text style={styles.AddBtn}>+</Text></TouchableOpacity>
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
    flexWrap:"wrap",
    marginBottom:40
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
    backgroundColor:"#6c757d",
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
    gap:10
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
  ,
  HimChat:{
    color:"white",
    backgroundColor:"#6c757d",
  },
  meChat:{
    backgroundColor:"green",
    color:"white",
  },
  image: {
    width: '100%',
    height: '100%',
  },
  Heder:{
    backgroundColor:"white",
    width:"100%",
    display:"flex",
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:10,
    minHeight:70,

  },
  HimName:{
    marginRight:5,
    fontSize:20,
    fontWeight:"bold"
  },
  AddBtn:{
    color:"white",
    fontSize:25
  },
  imgcont:{
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  }
 
});
