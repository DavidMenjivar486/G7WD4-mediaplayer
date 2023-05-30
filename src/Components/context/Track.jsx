import React, { useEffect, useState, createContext } from 'react';
import axios from "axios";
import { fetchLyricsByTrackId, fetchTrackById} from '../Request'

export const TrackContext = createContext()

export const TrackProvider = ({ children }) => {
  const [trackInfo, setTrackInfo] = useState(null);
  const [lyrics, setLyrics] = useState(null);

  // Obtener información de una canción y sus letras por su ID
  const getTrackAndLyrics = async (trackId) => {
    const track = await fetchTrackById(trackId);
    const trackLyrics = await fetchLyricsByTrackId(trackId);

    setTrackInfo(track);
    setLyrics(trackLyrics);
  };

  return (
    <TrackContext.Provider value={{ trackInfo, lyrics, getTrackAndLyrics }}>
      {children}
    </TrackContext.Provider>
  );
};


/*
const trackContext = createContext();

export function Track(){
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
          params: {
            q: 'nombre de la canción',
          },
          headers: {
            'X-RapidAPI-Key': '29ff09248cmshe7c02d93500d44ep1775b9jsn22093e0293d4',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        });
        setTrackData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <trackContext.Provider value={trackData}>
      <TrackInfo/>
    </trackContext.Provider>
  );
}

export const TrackInfo = () => {
  const tracks = React.useContext(trackContext);

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <h3>{track.title}</h3>
          <p>{track.artist.name}</p>
          <p>{track.album.name}</p>
          <p>{track.duration}</p>
          <p>{track.}</p>
        </div>
      ))}
    </div>
  );
};*/