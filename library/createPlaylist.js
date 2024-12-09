import axios from 'axios';

export const createPlaylist = async (accessToken, userId, playlistName) => {
  const response = await axios.post(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      name: playlistName,
      description: "A playlist created from random tracks.",
      public: false,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};