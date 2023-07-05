import { useState, useEffect } from "react"
import { getToken } from "./service/spotifyAPI"
import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'

// Pages
import HomePage from "./Page/HomePage";



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
    <div id="App">

      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>   
  )
}

export default App
