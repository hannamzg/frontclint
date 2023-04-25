

import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function getWithHo(id) {
    const res = await axios.get(
      `http://localhost:5000/chats/getWithHo/${id}`, 

      {
        withCredentials: true,
      }
    );
  
    return res;
}