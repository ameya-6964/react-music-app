import React,{useState} from 'react'
//! Importing Stylsheet
import './styles/app.scss'
//! Adding Components
import Player from './components/Player'
import Song from './components/Song'

//! Import util 
import data from './util';

const App = () => {
  //! States
  const [songs,setSongs] = useState(data());
  const[currentSong,setCurrentSong]=useState(songs[0]);
  const[isPlaying,setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying}  setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  )
}

export default App
