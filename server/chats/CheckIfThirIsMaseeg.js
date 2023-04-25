import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function CheckIfThirIsMaseeg(myId,him) {
   
    const res = await axios.get(`http://localhost:5000/chats/CheckIfThirIsMaseeg/${myId}/${him}`,{
        withCredentials: true
    });
    
    return res;
}
