import axios from "axios";

axios.defaults.baseURL = "https://api.spotify.com/v1"

const CRIENT_ID = import.meta.env.VITE_API_CRIENT_ID;
const CRIENT_SECRET = import.meta.env.VITE_API_CRIENT_SECRET;

/**
 * Request an access token
 */
const getToken = async (): Promise<string> => {
  // API Access Token
  const authParameters = {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${CRIENT_ID}&client_secret=${CRIENT_SECRET}`
  }

  const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
  const data = await response.json();
  return data.access_token;
};

export {
  getToken
}