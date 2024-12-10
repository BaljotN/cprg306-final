import React from "react";

export default function RandomTracks({ tracks }) {
  return (
    <div className="bg-black text-green-500">
      <h1 className="text-2xl underline">Random Tracks you may enjoy</h1>
      <ol>
        {tracks.map((track) => (
          <li key={track.id}>
            <a href={track.external_urls.spotify} target="_blank" className="hover:underline">
            {track.name} by {track.artists.map((artist) => artist.name).join(", ")}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
