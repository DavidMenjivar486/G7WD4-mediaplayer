import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

export const TrackCard = () => {
  const { trackInfo, lyrics } = useContext(TrackContext);

  if (!trackInfo) {
    return <div><h1>Cargando...</h1></div>;
  }

  return (
    <div className="track-card">
      <img src={trackInfo.album.cover} alt={trackInfo.title} />
      <h2>{trackInfo.title}</h2>
      <p>{trackInfo.artist.name}</p>
      <p>{trackInfo.album.title}</p>
    </div>
  );
};