import React from 'react'
import './MusicItem.css'
import asake from '../../assets/asake.jpg';
import { AiOutlineHeart } from 'react-icons/ai';

const MusicItem = () => {
  return (
    <div className='music-list'>
      <img src={asake} alt='asake' />
      <div className='artist-info'>
        <p className='artist-info-title'>Sungba</p>
        <p>Asake</p>
      </div>
      <p className='album'>Mr. Money With The Vibe</p>
      <p className='album-year'>2022</p>
      <p className='song-length'>2:04</p>
      <p className='song-genre'>Afrobeat</p>
      <AiOutlineHeart />
    </div>
  );
}

export default MusicItem