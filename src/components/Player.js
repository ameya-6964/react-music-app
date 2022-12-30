import React,{useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft,faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong,isPlaying,setIsPlaying}) => {
  //! Ref

  const audioRef = useRef(null);

  //! State For Time Update
  const [songInfo,setSongInfo] = useState({
        currentTime : 0,
        duration : 0,
  });

  //! Event Handlers
  const playSongHandler = () =>{
       if(isPlaying)
       {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
       }
       else
       {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
       }
  }

  const timeUpdateHandler= (e) =>
  {
      const current = e.target.currentTime
      const duration = e.target.duration
      setSongInfo({...songInfo, currentTime: current, duration })
  }
  const draghandler = (e) =>
  {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo , currentTime : e.target.value})
  }
   //! Time Format
   const getTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const secondsWithZero = String(seconds).padStart(2, "0")
    return `${minutes}:${secondsWithZero}`
  }

  return (
    <div className='player'>
      <div className='time-control'>
       <p>{getTime(songInfo.currentTime)}</p>
      <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={draghandler} type="range"/>
       <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
       <FontAwesomeIcon className='skip-back' icon={faAngleLeft} size="2x" />
       <FontAwesomeIcon className='play' onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" />
       <FontAwesomeIcon className='skip-forward' icon={faAngleRight} size="2x" />
      </div>
      <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler} ></audio>
    </div>
  );
}

export default Player
