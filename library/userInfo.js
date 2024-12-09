import axios from "axios";

const USER_API_URL = "https://api.spotify.com/v1/me";

export async function getUserInfo(accessToken){
  try{
    const response = await axios.get(USER_API_URL,{
      headers:{
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }catch(error){
    console.error("Error fetching user info:", error);
    throw error;
  }
}