import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className='artist-image'>
      <p>
        <span className='new-album-announcement'>New Album</span>
      </p>
      <p>
        <span className='album-name'>Palm Wine Music III</span>
      </p>
      <p>
        <span className='album-artist'>Show Dem Camp</span>
      </p>
    </section>
  );
};

export default Banner;
