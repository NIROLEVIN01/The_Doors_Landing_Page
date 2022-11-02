import React from 'react'
import ArtistCard from '../../components/Artist-card/ArtistCard'
import images from '../../constans/images'

import './About.css'

function About() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='About'>
        
        <h1 className="headtext__cormorant about-header">
            Meet The Band
        </h1>

        <ArtistCard 
            artistImg={images.jim_morrison} 
            artistName="Jim Morrison"
            artistRoll="Lead singer"
            artistInfo=
            "James Douglas Morrison (December 8, 1943 - July 3, 1971) was an 
            American singer, poet and songwriter who was the lead vocalist of
            the rock band The Doors. Due to his wild personality, poetic lyrics,
            distinctive voice, unpredictable and erratic performances, and the 
            dramatic circumstances surrounding his life and early death, Morrison
            is regarded by music critics and fans as one of the most influential
            frontmen in rock history."
        />

        <ArtistCard 
            artistImg={images.john_densmore} 
            artistName="John Densmore"
            artistRoll="drummer"
            artistInfo=
            "John Paul Densmore (born December 1, 1944) is an American musician, 
            songwriter, author and actor. He is best known as the drummer of the
             rock band the Doors, and as such is a member of the Rock and Roll Hall
            of Fame. He appeared on every recording made by the band, with drumming 
            inspired by jazz and world music as much as by rock and roll."
        />

        <ArtistCard 
            artistImg={images.ray_manzarek}
            artistName="Ray Manzarek"
            artistRoll="keyboardist"
            artistInfo=
            "Raymond Daniel Manzarek Jr. (February 12, 1939 – May 20, 2013) was an
            American keyboardist. He is best known as a member of the doors, co-founding
            the band with singer and lyricist Jim Morrison in 1965. Manzarek was inducted
            into the Rock and Roll Hall of Fame in 1993 as a member of the Doors."
        />

        <ArtistCard 
            artistImg={images.robby_krieger}
            artistName="Robby Krieger"
            artistRoll="guitarist"
            artistInfo=
            "Robert Alan Krieger (born January 8, 1946) is an American guitarist. He was the
            guitarist of rock band the Doors. as such he has been inducted into the Rock and 
            Roll Hall of Fame. Krieger wrote or co-wrote many of the Doors' songs, including 
            the hits “Light My Fire”, “Love Me Two Times”, “Touch Me“, and “Love Her Madly”. 
            He was listed by Rolling Stones as one of the 100 greatest guitarists of all time."
        />
    
    </div>
  )
}

export default About