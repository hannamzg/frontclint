import axios from "axios";
//import RNFetchBlob from 'rn-fetch-blob';

export async function singUpServer(name,username,password,photo) {
    const formData = new FormData();
    
    formData.append('photo', photo.uri);
    console.log(photo.uri);
   
    formData.append('name', name)
    formData.append('username', username)
    formData.append('password', password)
    const res = await axios.post("http://localhost:5000/api/auth/singUp",formData,{ 
    headers: {
        'Content-Type': 'multipart/form-data'
    }
    }
    );
    

    return res;
}
