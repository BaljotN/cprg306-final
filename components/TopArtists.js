import React from "react";

export default function TopArtists({ artists }) {
  return (
    <div>
    <h1>Your Top 5 artists of the Past Year</h1>
    <ol>
      {artists.map((artist) => (
        <li key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank">
          {artist.name}
          </a>
        </li>
      ))}
    </ol>
  </div>
  );
}
