"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import { getTopTracks } from "../library/topTracks";
import { getUserInfo } from "../library/userInfo";
import { getTopArtists } from "../library/topArtists";
import { getRandomTracks } from "../library/randomTracks";
import { createPlaylist } from "../library/createPlaylist"
import { addTracksToPlaylist } from "../library/addTracks";
import UserInfo from "../components/userInfo";
import LoginPage from "../components/Login";
import TopTracks from "../components/TopTracks"; 
import TopArtists from "../components/TopArtists";
import RandomTracks from "../components/RandomTracks";

export default function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [topArtists, setTopArtists] = useState([]);
  const [randomTracks, setRandomTracks] = useState([]);
  const [genre, setGenre] = useState("pop");
  const [playlistId, setPlaylistId] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("access_token");
    if (token) {
      setAccessToken(token);
    }
  }, [searchParams]);

  useEffect(() => {
    if (accessToken) {
      const fetchUserInfo = async () => {
        try {
          const user = await getUserInfo(accessToken);
          setUserInfo(user);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
  
      fetchUserInfo();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const fetchTopTracks = async () => {
        try {
          const tracks = await getTopTracks(accessToken);
          setTopTracks(tracks);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      };
      fetchTopTracks();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const fetchArtists = async () => {
        try {
          const artists = await getTopArtists(accessToken);
          setTopArtists(artists);
        } catch (error) {
          console.error("Error fetching artists:", error);
        }
      };
      fetchArtists();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken && genre) {
      console.log("Fetching tracks for genre:", genre);
      const fetchRandomTracks = async () => {
        try {
          const tracks = await getRandomTracks(accessToken, genre);  
          setRandomTracks(tracks);
        } catch (error) {
          console.error("Error fetching random tracks:", error);
        }
      };
      fetchRandomTracks();
    }
  }, [genre, accessToken]);

  const handleCreatePlaylist = async () => {
    if (accessToken && userInfo && randomTracks.length > 0) {
      const trackUris = randomTracks.map(track => track.uri);
      const playlistName = "Random Songs Playlist";

      try {
        const newPlaylist = await createPlaylist(accessToken, userInfo.id, playlistName);
        const playlistId = newPlaylist.id;
        setPlaylistId(playlistId);

        await addTracksToPlaylist(accessToken, playlistId, trackUris);
        console.log("Tracks added to the playlist successfully!");
      } catch (error) {
        console.error("Error creating playlist and adding tracks:", error);
      }
    }
  };

  return (
    <div>
      {!accessToken ? (
        <LoginPage />
      ) : (
        <>
          {userInfo && <UserInfo user={userInfo} />}
          {topTracks && <TopTracks tracks={topTracks} />}
          {topArtists && <TopArtists artists={topArtists} />}
          {randomTracks && <RandomTracks tracks={randomTracks} />}
          
          <button onClick={handleCreatePlaylist}>Create Playlist and Add Random Tracks</button>
        </>
      )}
    </div>
  );
}
