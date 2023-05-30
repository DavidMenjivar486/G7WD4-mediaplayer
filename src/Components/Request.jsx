import axios from 'axios';

const API_URL = 'https://api.deezer.com';


// Obtener información de una canción por su ID

export const fetchTrackById = async (trackId) => {
  try {
    const response = await axios.get(`${API_URL}/track/${trackId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Obtener la letra de una canción por su ID
export const fetchLyricsByTrackId = async (trackId) => {
  try {
    const response = await axios.get(`${API_URL}/track/${trackId}/lyrics`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
