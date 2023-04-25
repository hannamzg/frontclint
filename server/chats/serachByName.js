import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function serachByName(userName) {
   
    const res = await axios.get(`http://localhost:5000/chats/serachByName/${userName}`,{
        withCredentials: true
    });
    
    return res;
}
