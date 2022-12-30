import React,{useState} from 'react'
//! Importing Stylsheet
import './styles/app.scss'
//! Adding Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library';

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
      <Library songs={songs} />
    </div>
  )
}

export default App
