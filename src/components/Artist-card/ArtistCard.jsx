import React from 'react'

import './ArtistCard.css'

function ArtistCard({ artistImg, artistRoll, artistName, artistInfo }) {

  return (
    
    <div className="artist-card">

            <img 
                src={artistImg} 
                alt="artist_image" 
                className='artist-card-img'
                height={450} 
                width={300} 
            />

        <div className="artist-card-content">

            <h1 className="headtext__cormorant">{artistName}</h1>

            <p className='p__cormorant artistRoll'>
                {artistRoll}
            </p>
            
            <p className="p__opensans">{artistInfo}</p>

            <button type="button" className="custom__button artist-btn">View More</button>

        </div>

    </div>

  )

}

export default ArtistCard