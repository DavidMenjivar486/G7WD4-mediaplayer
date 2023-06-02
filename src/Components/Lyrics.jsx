import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

export const Lyrics = () => {
  const { lyrics } = useContext(TrackContext);

  return (
    <div>
      <h2>Lyrics</h2>
      <p>{lyrics}</p>
    </div>
  );
};
