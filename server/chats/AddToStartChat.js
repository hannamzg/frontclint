import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function AddToStartChat(me, him) {
    const res = await axios.post(
      "http://localhost:5000/chats/AddToStartChat", 
      {
        me: me,
        him: him,
      },
      {
        withCredentials: true,
      }
    );
  
    return res;
}