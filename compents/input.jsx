import React, { useState,useEffect } from 'react';
import { View, Text, Modal, TextInput, FlatList, TouchableOpacity , StyleSheet} from 'react-native';import styled from 'styled-components/native';
import {serachByName} from '../server/chats/serachByName';
import {CheckIfThirIsMaseeg} from '../server/chats/CheckIfThirIsMaseeg'
import Cookies from 'js-cookie';

function SearchInput({ navigation }) {
 /*  const options = [  { label: 'Option 1', value: '1' },  { label: 'Option 2', value: '2' },  { label: 'Option 3', value: '3' },  { label: 'Option 4', value: '4' },  { label: 'Option 5', value: '5' },]; */
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
/*   const [filteredOptions, setFilteredOptions] = useState(options); */
  const [users,setUsers]=useState();
  let myCookies=Cookies.get();

  
   const handleSearch = text => {
    setSearchText(text);
   
  }; 

 /*  const handleSelect = option => {
    onSelect(option);
    setModalVisible(false);
    setSearchText('');
    setFilteredOptions(options);
  }; */

  const handleClick = async (data,id) => {
    console.log(data);
    try{
    await  CheckIfThirIsMaseeg(myCookies.user,data.chatWith).then((dataa)=>
      {
        console.log(dataa.data);
        if (dataa.data.length === 0) {
            console.log("in");
          return 
        }
        else{
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
   
    setModalVisible(false)
  };
 

  useEffect(()=>{
    try{
      serachByName(searchText).then((data)=>{
        setUsers(data.data)
        console.log(data.data);
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
          
            <View style={{ flexDirection: 'row', paddingHorizontal: 10,justifyContent:"space-between",gap:10,marginTop:10 }}>
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
           {/*  <FlatList
              data={filteredOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            /> */}
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
    height:50,
    width:50,
    borderRadius:10,
    backgroundColor: 'red',
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    color:"white",
    margin:0
  },
  closeBtn:{
    fontSize:15,
    color:"white"
  }
});

export default SearchInput;
