import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

export function MusicControls() {
  const { trackInfo, isPlaying, continueTrack, stopTrack, previous, next } = useContext(TrackContext);

  const handlePrevious = () => {
    previous();
  };

  const handlePlayPause = () => {
    if (trackInfo.isPlaying) {
      continueTrack();
    } else {
      stopTrack();
    }
  };

  const handleNext = () => {
    next();
  };

  return (
    <div className="music-controls">
      <button onClick={handlePrevious} disabled={!trackInfo}>
        <img class='previous' src='./imgs/backward-solid.svg'/>
      </button>
      <button onClick={handlePlayPause} disabled={!trackInfo}>
        {trackInfo.isPlaying ? <img src='./imgs/pause-solid.svg'/> : <img src='./imgs/play-solid.svg'/>}
      </button>
      <button onClick={handleNext} disabled={!trackInfo}>
        <img class='next' src='./imgs/forward-solid.svg'/>
      </button>
    </div>
  );
}