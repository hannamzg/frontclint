import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function getUsers(userId) {
   
    const res = await axios.get(`http://localhost:5000/chats/getUsers/${userId}`,{
        withCredentials: true
    });
    
    return res;
}
