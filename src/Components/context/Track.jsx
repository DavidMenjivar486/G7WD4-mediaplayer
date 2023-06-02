import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com';
const trackID = 313554
export const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const [trackInfo, setTrackInfo] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const continueTrack = () => {
    setIsPlaying(true);
  };

  const stopTrack = () => {

    setIsPlaying(false);
  };

  const previous = () => {
    if (trackInfo.id > 0) {

      const currentTrackId = trackInfo.id;
      const previousTrackId = currentTrackId - 1;

      return trackInfo.id = previousTrackId
    }

    else {
      return trackInfo.id
    }
  };

  const next = () => {
    const currentTrackId = trackInfo.id;
    const nextTrackId = currentTrackId + 1;

    return trackInfo.id = nextTrackId
  };

  const fetchTrackAndLyrics = async () => {
    const options = {
      method: 'GET',
      url: `${API_URL}/track/${trackID}`,
      headers: {
        'X-RapidAPI-Key': '29ff09248cmshe7c02d93500d44ep1775b9jsn22093e0293d4',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const track = response.data;

      const lyricsOptions = {
        method: 'GET',
        url: `${API_URL}/track/${trackID}/lyrics`,
        headers: {
          'X-RapidAPI-Key': '29ff09248cmshe7c02d93500d44ep1775b9jsn22093e0293d4',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      const lyricsResponse = await axios.request(lyricsOptions);
      const trackLyrics = lyricsResponse.data;

      setTrackInfo(track);
      setLyrics(trackLyrics);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrackAndLyrics();
  }, []);

  return (
    <TrackContext.Provider value={{ trackInfo, lyrics, isPlaying, continueTrack, stopTrack, previous, next}}>
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