import axios from "axios";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export default async function handler(req, res) {
  const refresh_token = req.query.refresh_token;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
        client_id,
        client_secret,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error refreshing token:", error);
    res.status(500).send("Failed to refresh token");
  }
}
