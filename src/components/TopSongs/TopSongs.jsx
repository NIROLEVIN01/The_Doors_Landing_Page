import React from 'react';

import './TopSongs.css';

import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si"

function TopSongs ({ title, appleUrl, spotifyUrl, youtubeUrl }) {

    return (
        <div className='top-songs flex__center'>

            <div className='top-song-content'>

                <div className="app__menuitem-name">

                    <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>

                    <div className='songs-icon-row'>

                        <a href={spotifyUrl} target="_blank">
                            <BsSpotify className='top-songs__image-icon'/>
                        </a>

                        <a href={appleUrl} target="_blank">
                            <SiApplemusic className='top-songs__image-icon'/>
                        </a>
                        
                        <a href={youtubeUrl} target="_blank">
                            <BsYoutube className='top-songs__image-icon'/>
                        </a>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default TopSongs;