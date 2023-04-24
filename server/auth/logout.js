import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function logout() {
    const res = await axios.post(
      "http://localhost:5000/api/auth/logout", // <-- Update the URL here
      {
        withCredentials: true,
        credentials: "include",
      }
    );
  
    return res;
}



/* function logOut() {
  fetch("http://localhost:5000/api/authUsers/logout", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => {
      console.log(response); 
      setCurrentUser("");
    })
    .catch((error) => {
      console.log(error);
    });
 
  localStorage.removeItem("UsersProduct");
} */