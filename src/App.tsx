import { useEffect } from "react"
import { getToken } from "./service/spotifyAPI"


function App() {
  useEffect(() => {
    getToken()
  },[])

  return (
    <>
      <h1>Start music api project </h1>
    </>
  )
}

export default App
