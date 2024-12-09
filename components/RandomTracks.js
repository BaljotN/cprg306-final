import React from "react";

export default function RandomTracks({ tracks }) {
  return (
    <div>
      <h1>Random Tracks you may enjoy</h1>
      <ol>
        {tracks.map((track) => (
          <li key={track.id}>
            <a href={track.external_urls.spotify} target="_blank">
            {track.name} by {track.artists.map((artist) => artist.name).join(", ")}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
