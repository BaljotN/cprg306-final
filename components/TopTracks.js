export default function TopTracks({ tracks }) {
  return (
    <div>
      <h1>Your Top 5 Tracks of the Past Year</h1>
        <ol>
          {tracks.map((track) => (
            <li key={track.id}>
              <a href={track.external_urls.spotify} target="_blank" className="text-green-500">
                {track.name} by {track.artists.map((artist) => artist.name).join(", ")}
                {console.log(track.external_urls)}
              </a>
          </li>
          ))}
       </ol> 
    </div>
  );
}
