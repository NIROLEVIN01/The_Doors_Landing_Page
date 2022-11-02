import React from 'react';

import images from '../../constans/images';
import './WelcomePage.css'

const WelcomePage = () => (
  <div className='app__header app__wrapper section__padding' id='Home'>
    <div className='app__wrapper_info'>

      <h1 className='app__header-h1'>
        The Doors 
      </h1>

      <p className='p__opensans' style={{margin: '2rem 0'}}>
        The Doors were an American rock band formed in Los Angeles
        in 1965, with vocalist Jim Morrison, keyboardist Ray Manzarek,
        guitarist Robby Krieger, and drummer John Densmore They were 
        among the most controversial and influential rock acts of the 1960s.
      </p>

    </div>

    <div className='app__wrapper_img'>
        <img src={images.The_Doors} alt="welcome img" />
    </div>
  </div>
);

export default WelcomePage;
