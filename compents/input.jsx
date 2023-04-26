import React, { useState,useEffect } from 'react';
import { View, Text, Modal, TextInput, FlatList, TouchableOpacity , StyleSheet} from 'react-native';import styled from 'styled-components/native';
import {serachByName} from '../server/chats/serachByName';
import {CheckIfThirIsMaseeg} from '../server/chats/CheckIfThirIsMaseeg';
import {AddToStartChat} from '../server/chats/AddToStartChat';
import Cookies from 'js-cookie';

function SearchInput({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [AskToAddHim,setAskToAddHim]=useState(false);
  const [users,setUsers]=useState();
  const [dataOfHim,setDataOfHim]=useState("")

  let myCookies=Cookies.get();

  
   const handleSearch = text => {
    setSearchText(text);
   
  }; 
  
  const handleAddToStartChat =(me ,him)=>{
    try{
      AddToStartChat(Number(me),him).then((data)=>
      {        
        console.log(data);
        handleClick(dataOfHim,dataOfHim.IdChat)
      }
      ).catch((err)=>{
        console.log(err);
      })
          
      }    
      catch(err){
        console.log(err);
      }
  }


  const handleClick =  (data,id) => {
    setDataOfHim(data)
    try{
      CheckIfThirIsMaseeg(myCookies.user,data.id).then((dataa)=>
      {
        console.log(dataa.data);
        if (dataa.data.length === 0) {
         
          return 
        }
        else{
          setModalVisible(false)
          navigation.navigate( {name: 'Massages', params: { id: id,data:dataa.data[0] } })
        } 
        console.log(data);
        console.log(data.data);
      }
      ).catch((err)=>{
        console.log(err);
      })
          
      }    
      catch(err){
        console.log(err);
      }
    setAskToAddHim(true)
    //
  };
 

  useEffect(()=>{
    try{
      serachByName(searchText).then((data)=>{
        setUsers(data.data)
      }).catch((err)=>{
        console.log(err);
      })
      
    }    
    catch(err){
      console.log(err);
    }

  },[searchText])

  return (
    <View >
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
                placeholder="Search"
                value={searchText}
                /* onChangeText={handleSearch} */
                style={styles.input}
        />
      </TouchableOpacity>
        <Modal  style={styles.modal} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.BigDiv}> 
            {AskToAddHim&&<View style={styles.AskToAddHimDiv}>
            <TouchableOpacity style={styles.closeTheAskHim} onPress={() => setAskToAddHim(false)}><View  >close</View></TouchableOpacity> 
            <View>
              <Text style={styles.AskToAddHimText}>do you whant to start Chat with {dataOfHim.name}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={()=>handleAddToStartChat(myCookies.user,dataOfHim.id)}><Text style={{color:"white"}}>add {dataOfHim.name}</Text></TouchableOpacity> 
            </View>
              

            </View>}
            <View style={{ flexDirection: 'row', paddingHorizontal: 10,justifyContent:"center",gap:10,marginTop:10 }}>
              <TextInput
                placeholder="Search"
                value={searchText}
                 onChangeText={handleSearch} 
                style={styles.input}
              />
              <View style={styles.closeBtnDiv}>
                <Text style={styles.closeBtn} onPress={() => setModalVisible(false)}>close</Text>
              </View>
            </View>
           
            <View>
              {users &&users.map((elemnt)=>{
                return <TouchableOpacity style={styles.option} onPress={()=>handleClick(elemnt,elemnt.IdChat)} key={elemnt.id}>
                <Text style={styles.optionText}>{elemnt.name}</Text>
              </TouchableOpacity>
              })} 
            </View>
          </View>
        </Modal>
      
    </View>
  );
};





const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  BigDiv:{
    backgroundColor: '#EAEAEA',
    height:"100vh"
  },
   modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', // semi-transparent black background
    height:"100vh",
  }, 
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:"white",
    margin:10,
    padding:10,
    borderRadius:5
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor:"white"
   
  },
  closeBtnDiv:{
    height:30,
    width:50,
    borderRadius:10,
    backgroundColor: 'red',
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    color:"white",
    marginTop:10
  },
  closeBtn:{
    fontSize:15,
    color:"white"
  },
  AskToAddHimDiv:{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    position:"relative",
    top:0,
    backgroundColor:"rgb(0, 0, 0,0.3)",
    height:"100Vh",
    width:"100%"
  },
  AskToAddHimText:{
    fontSize:18
  }, 
  closeTheAskHim:{
    position:"absolute",
    top:10,
    right:10,
    backgroundColor:'red',
    color:"white",
    padding:8,
    borderRadius:8
  },
  addBtn:{
    backgroundColor:"green",
    textAlign:"center",
    color:"white",
    borderRadius:8,
    padding:8,
    marginTop:5
  }

});

export default SearchInput;
