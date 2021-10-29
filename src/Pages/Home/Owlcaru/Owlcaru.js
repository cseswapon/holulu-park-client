import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../image/resort/img-1.jpg';
import img2 from '../../../image/resort/img-2.jpg';
import img3 from '../../../image/resort/img-3.jpg';
import img5 from '../../../image/resort/img-5.jpg';
import img6 from '../../../image/resort/img-6.jpg';
import img7 from '../../../image/resort/img-7.jpg';
import img8 from '../../../image/resort/img-8.jpg';
import img9 from '../../../image/resort/img-9.jpg';

const Owlcaru = () => {
    return (
        <div className="container my-3 mb-5">
            <h1 className="text-muted text-center mb-4 service-product fw-bold">Our Resort</h1>
            <OwlCarousel
            className='owl-theme'
            items="8"
            autoplay
            nav
            dots
            loop
            >
                <div className='item'>
                    <img src={img1} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img2} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img3} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img5} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img6} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img7} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img8} alt="not found pic" />
                </div>
                <div className='item'>
                    <img src={img9} alt="not found pic" />
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Owlcaru;