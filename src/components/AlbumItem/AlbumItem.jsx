import React from 'react';

import './AlbumItem.css';

import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si"

function AlbumItem ({ title, releaseDate, image, appleUrl, spotifyUrl, youtubeUrl }) {
 
    return (
        <div className='albums flex__center'>

            <div className='albums-img'>
                
                <img 
                    src={image} 
                    alt="album__img"
                    height={300} 
                    width={300} 
                />

                <div className='album-icons'>

                    <a href={spotifyUrl} target="_blank">
                        <BsSpotify className='top-songs__image-icon'/>
                    </a>

                    <a href={youtubeUrl} target="_blank">
                        <BsYoutube className='top-songs__image-icon'/>
                    </a>

                    <a href={appleUrl} target="_blank">
                        <SiApplemusic className='top-songs__image-icon'/>
                    </a>

                </div>


            </div>

            <div className='albums-content flex__center'>

                <div className="app__menuitem-name flex__center">
                    <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
                </div>

                <div className="app__menuitem-price flex__cente">
                    <p className="p__cormorant">{releaseDate}</p>
                </div>

            </div>


        </div>
    )
}

export default AlbumItem;