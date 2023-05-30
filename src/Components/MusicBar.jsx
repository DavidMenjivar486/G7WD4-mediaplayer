import React, { useContext } from 'react';
import { TrackContext } from './context/Track';

const MusicBar = () => {
  const { trackInfo } = useContext(TrackContext);

  if (!trackInfo) {
    return null; // no hay información de la canción actual
  }

  const { duration, position } = trackInfo;

  //porcentaje de progreso de la canción
  const progressPercent = (position / duration) * 100;

  return (
    <div className="music-bar">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <div className="time">
        <span className="current-time">{formatTime(position)}</span>
        <span className="total-time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

//formato minutos:segundos
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicBar;