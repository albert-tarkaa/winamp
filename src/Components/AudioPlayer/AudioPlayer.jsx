import React from 'react'
import './AudioPlayer.css'

const AudioPlayer = () => {
 return (
   <div>
     <audio src='./static/music/foo.mp3' controls autoPlay />
   </div>
 );
}

export default AudioPlayer;