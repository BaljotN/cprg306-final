import axios from "axios";

const TOP_ARTISTS_URL = "https://api.spotify.com/v1/me/top/artists";

export async function getTopArtists(accessToken) {
    try {
      const response = await axios.get(TOP_ARTISTS_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 5, 
          time_range: "long_term", 
        }
      });
      return response.data.items; 
    } catch (error) {
      console.error("Error fetching top artists:", error);
      throw error;
    }
  }
