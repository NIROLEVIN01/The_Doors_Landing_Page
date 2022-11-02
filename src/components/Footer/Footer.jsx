import React from 'react'

import './Footer.css'
import { images } from '../../constans'


function Footer() {
  return (

    <div className='footer flex__center'>

      <img 
        src={images.The_Doors_Logo} 
        alt="doors logo" 
        height={150}
      />

      <p className='p__cormorant'>
        “Music is your only friend” 
      </p>


    </div>

  )
}

export default Footer