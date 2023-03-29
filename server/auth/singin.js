import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function singinServer(username, password) {
    const res = await axios.post(
      "http://localhost:5000/api/auth/singin", // <-- Update the URL here
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  
    return res;
}