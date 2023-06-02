import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

export const VolumeControl = () => {
  const { volume, setVolume } = useContext(TrackContext);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};