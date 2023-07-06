import { useState, useEffect } from "react"
import { getToken } from "./service/spotifyAPI"
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'

// Pages
import { 
  ArtistDetails, 
  TopArtists, 
  AroundYou, 
  Discover,
  Search, 
  SongDetails,
  TopCharts 
} from "./Pages";
// Compoments
import Searchbar from "./Components/Searchbar";
import Sidebar from "./Components/Sidebar";
import MusicPlayer from "./Components/MusicPlayer";
import TopPlay from "./Components/TopPlay";


function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div id="App" className="relative flex">
      
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">

        <Searchbar />
        
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>

          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>

        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}

      <ReactQueryDevtools position='bottom-right' />
    </div>   
  )
}

export default App
