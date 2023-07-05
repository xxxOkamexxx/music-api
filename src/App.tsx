import { useState, useEffect } from "react"
import { getToken } from "./service/spotifyAPI"


function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
    };

    fetchToken();
  }, []);

  console.log(token); 

  return (
    <>
      <h1>Start music api project </h1>
    </>
  )
}

export default App
