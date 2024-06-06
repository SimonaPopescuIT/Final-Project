import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import stiluri predefinite
import terapeutic1 from '../../Assets/terapeutic1.jpg';
import terapeutic2 from '../../Assets/terapeutic2.jpg';
import terapeutic3 from '../../Assets/terapeutic3.jpg';
import '../ImageCarousel/ImageCarousel.css';


const ImageCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} >
            <div className='terapeutic1'>
                <img src={terapeutic1} alt="Slide 1" />
                {/* <p className="legend">Slide 1</p> */}
            </div>
            <div className='terapeutic2'>
                <img src={terapeutic2} alt="Slide 2" />
                {/* <p className="legend">Slide 2</p> */}
            </div>
            <div className='terapeutic3'>
                <img src={terapeutic3} alt="Slide 3" />
                {/* <p className="legend">Slide 3</p> */}
            </div>
        </Carousel>
    );
};

export default ImageCarousel;
