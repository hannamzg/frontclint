import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function sendChat(me, him,chatId,theChat) {
    const res = await axios.post(
      "http://localhost:5000/chats/sendChat", 
      {
        me: me,
        him: him,
        chatId:chatId,
        theChat:theChat,
      },
      {
        withCredentials: true,
      }
    );
  
    return res;
}