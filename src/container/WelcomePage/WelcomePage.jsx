import React from 'react';

import images from '../../constans/images';
import './WelcomePage.css'

import { motion } from "framer-motion";

const WelcomePage = () => (
  <div className='app__header app__wrapper section__padding' id='Home'>
    <div className='app__wrapper_info'>

      <motion.h1 
        className='app__header-h1'
        initial={{ opacity: 1 , x: -500, scale: 1}}
        whileInView={{ opacity: 1, x:0, scale: 1 }}
        viewport={{ once: true }}
        transition={{duration:0.75}}
      >
        The Doors 
      </motion.h1>

      <motion.p 
        className='p__opensans' 
        style={{margin: '2rem 0'}}
        initial={{ opacity: 1 , x: -500, scale: 1}}
        whileInView={{ opacity: 1, x:0, scale: 1 }}
        viewport={{ once: true }}
        transition={{duration:1.25}}
      >
        The Doors were an American rock band formed in Los Angeles
        in 1965, with vocalist Jim Morrison, keyboardist Ray Manzarek,
        guitarist Robby Krieger, and drummer John Densmore They were 
        among the most controversial and influential rock acts of the 1960s.
      </motion.p>

    </div>

    <div className='app__wrapper_img'>
        <img src={images.The_Doors} alt="welcome img" />
    </div>
  </div>
);

export default WelcomePage;
