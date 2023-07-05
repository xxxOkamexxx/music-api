import axios from "axios";

axios.defaults.baseURL = "https://open.spotify.com"

const CRIENT_ID = import.meta.env.VITE_API_CRIENT_ID;
const CRIENT_SECRET = import.meta.env.VITE_API_CRIENT_SECRET;

/**
 * Request an access token
 */
const getToken = async () => {
  // API Access Token
  const authParameters = {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${CRIENT_ID}&client_secret=${CRIENT_SECRET}`
  }

  fetch('https://accounts.spotify.com/api/token', authParameters)
};

export {
  getToken
}