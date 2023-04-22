import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function getChats(cahtId) {
   
    const res = await axios.get(`http://localhost:5000/chats/getChats/${cahtId}`,{
        withCredentials: true
    });
    
    return res;
}
