import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

export const TrackCard = () => {
  const { trackInfo } = useContext(TrackContext);

  if (!trackInfo) {
    return null; // Sin información de la canción actual
  }

  const { album, title, artist } = trackInfo;

  return (
    <div className="track-card">
      <img src={album.cover} alt="Album Cover" />
      <div className="track-info">
        <h1>{artist.name}</h1>
        <p>{album.title}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};
