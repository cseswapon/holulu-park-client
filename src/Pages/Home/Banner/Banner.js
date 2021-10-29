import React from 'react';
import { Carousel } from 'react-bootstrap';
import img_1 from '../../../image/slider-img/imgs-1.jpg'
import img_2 from '../../../image/slider-img/imgs-2.jpg'
import img_3 from '../../../image/slider-img/imgs-3.jpg'
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>PARK HOURS</h3>
                <p>Belmont Park is open year round for your enjoyment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>FREE PARKING AND ADMISSION</h3>
                <p>Belmont Park offers free entry and is open to the public.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img_3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>GETTING HERE</h3>
                <p>Belmont Park is located at Mission Beach Boardwalk in San Diego, CA.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;