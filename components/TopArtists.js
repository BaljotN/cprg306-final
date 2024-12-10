import React from "react";

export default function TopArtists({ artists }) {
  return (
    <div className="bg-black text-green-500">
    <h1 className="text-2xl underline">Your Top 5 artists of the Past Year</h1>
    <ol>
      {artists.map((artist) => (
        <li key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank" className="hover:underline">
          {artist.name}
          </a>
        </li>
      ))}
    </ol>
  </div>
  );
}
