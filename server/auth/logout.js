import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function logout() {
    const res = await axios.post(
      "http://localhost:5000/api/auth/logout", // <-- Update the URL here
      {
        withCredentials: true,
      }
    );
  
    return res;
}