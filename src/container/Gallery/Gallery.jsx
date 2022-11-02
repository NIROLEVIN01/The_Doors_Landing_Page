import React from 'react'
import './Gallery.css'

import { images } from '../../constans'; 

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


function Gallery() {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

  return (

    <div className="app__gallery flex__center" id='Gallery'>

        <div className="app__gallery-content">

            <h1 className="headtext__cormorant">Photo Gallery</h1>

            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
                here are some of the most iconic photos of the doors
            </p>

            <button type="button" className="custom__button">View More</button>
        
        </div>

        <div className="app__gallery-images">

            <div className="app__gallery-images_container" ref={scrollRef}>

                {[images.Gallery01, images.Gallery02, images.Gallery03, images.Gallery04].map((image, index) => (

                    <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                        
                        <img src={image} alt="gallery_image" />
                        
                    </div>

                ))}

            </div>

            <div className="app__gallery-images_arrows">

                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
     
             </div>

        </div>          

    </div>
)};

export default Gallery;
