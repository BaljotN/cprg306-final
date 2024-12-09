import axios from "axios";

const TOP_TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks";

export async function getTopTracks(accessToken) {
  try {
    const response = await axios.get(`${TOP_TRACKS_URL}`, {
      headers:{
        Authorization:`Bearer ${accessToken}`,
      },
      params:{
        limit:5,
        time_range:"long_term"
      }
    });
    return response.data.items;  
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    throw error; 
  }
}
