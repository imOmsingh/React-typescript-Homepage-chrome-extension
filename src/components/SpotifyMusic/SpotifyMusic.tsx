import React from "react";

const SpotifyMusic = () => {
  return (
    <div style={{ width: "540px", height: "340px" }}>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyMusic;
