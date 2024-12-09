import axios from "axios";

const SEARCH_URL = "https://api.spotify.com/v1/search";
const GENRES = ["pop", "rock", "hip-hop", "R&B","k-pop"]; 

function getRandomGenre() {
    return GENRES[Math.floor(Math.random() * GENRES.length)];
}

export async function getRandomTracks(accessToken) {
    const genre = getRandomGenre();
    try {
        const response = await axios.get(SEARCH_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                q: `genre:${genre}`,
                type: "track",
                limit: 5,
            },
        });
        console.log("API Response for genre:", genre, response.data.tracks.items);
        return response.data.tracks.items;
    } catch (error) {
        console.error("Error fetching random tracks:", error);
        throw error;
    }
}
