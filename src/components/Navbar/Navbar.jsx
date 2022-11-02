import React, { useState }  from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

// import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (

    <nav className='app__navbar'>

        <ul className='app__navbar-links'>

        <li className='p__opensans'>
          <a href='#home'>
            Home
          </a>
        </li>

        <li className='p__opensans'>
          <a href='#About'>
            About
          </a>
        </li>

        <li className='p__opensans'>
          <a href='#Gallery'>
            Gallery
          </a>
        </li>

        <li className='p__opensans'>
          <a href='#Discography'>
            Discography
          </a>
        </li>

      </ul> 

        <div className='app__navbar-smallscreen'>

            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

            {toggleMenu && (

                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>

                    <ul className='app__navbar-smallscreen_links'>

                      <li className='p__opensans'>
                        <a href='#home' onClick={() => setToggleMenu(false)}>
                          Home
                        </a>
                      </li>

                      <li className='p__opensans'>
                        <a href='#About' onClick={() => setToggleMenu(false)}>
                          About
                        </a>
                      </li>

                      <li className='p__opensans'>
                        <a href='#Gallery' onClick={() => setToggleMenu(false)}>
                          Gallery
                        </a>
                      </li>

                      <li className='p__opensans'>
                        <a href='#Discography' onClick={() => setToggleMenu(false)}>
                          Discography
                        </a>
                      </li>

                    </ul> 

                </div>
            )}

        </div> 

    </nav>
  )
};

export default Navbar;
