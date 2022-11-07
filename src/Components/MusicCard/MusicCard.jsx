import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Banner from '../Banner/Banner';
import MusicList from '../MusicList/MusicList';
import './MusicCard.css';

const MusicCard = () => {
  return (
    <div className='section-right'>
      <Banner />
      <div className='discography'>
        <nav className='navigation'>
          <ul>
            <li>All Songs</li>
            <li>Albums</li>
            <li>Artists</li>
            <li>Favorite</li>
          </ul>
        </nav>
      </div>
      <MusicList />
      <AudioPlayer/>
    </div>
  );
};

export default MusicCard;
