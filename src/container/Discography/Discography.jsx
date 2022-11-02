import React from 'react'

import './Discography.css'
import { data, images } from '../../constans'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import TopSongs from '../../components/TopSongs/TopSongs'

function Discography() {

  return (

    <div className='app__discography flex__center app__bg' id='Discography'>

      <h1 className="headtext__cormorant discography-header">Discography</h1>

      <p className="app__specialMenu-menu_heading flex__center">My Top 10</p>
      
      <div className='discography-container flex__center'>

        <div className='top-songs-right'>

          {data.topSongs1.map((topSongs1, index) => (
            <TopSongs 
              key={index} 
              title={topSongs1.title} 
              appleUrl={topSongs1.appleUrl}
              spotifyUrl={topSongs1.spotifyUrl}
              youtubeUrl={topSongs1.youtubeUrl}
            />
          ))}

        </div>

        <div className='guitar-image'>

          <img src={images.guitar} alt="guitar_img" />

        </div>  
       
        <div className='top-songs-left'>

          {data.topSongs2.map((topSongs2, index) => (
            <TopSongs
              key={index} 
              title={topSongs2.title}
              appleUrl={topSongs2.appleUrl}
              spotifyUrl={topSongs2.spotifyUrl}
              youtubeUrl={topSongs2.youtubeUrl}
            />
            ))}
          
        </div>

      </div>

        <div>

          <p className="app__specialMenu-menu_heading flex__center">Albums</p>
        
          <div className='album-covers-container flex__center'>
            {data.albums.map((albums, index) => (
              <AlbumItem 
                key={albums.title + index} 
                title={albums.title} 
                releaseDate={albums.releaseDate} 
                image={albums.image}
                appleUrl={albums.appleUrl}
                spotifyUrl={albums.spotifyUrl} 
                youtubeUrl={albums.youtubeUrl}
                />
              ))}
          </div>

        </div> 

    </div>

  )
}

export default Discography