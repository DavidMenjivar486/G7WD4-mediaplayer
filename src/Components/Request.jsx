/*import axios from 'axios';

const API_URL = 'https://api.deezer.com';
const API_KEY = 'a2e1059903c26e1516a38dc19d7f1968';

// Obtener información de una canción por su ID

export const fetchTrackById = async (trackId) => {
  try {
    const response = await axios.get(`${API_URL}/track/${trackId = 313554 }?apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Obtener la letra de una canción por su ID
export const fetchLyricsByTrackId = async (trackId) => {
  try {
    const response = await axios.get(`${API_URL}/track/${trackId = 313554}/lyrics`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
*/