import React from 'react';
import './TopBanner.css';
const TopBanner = () => {
    return (
        <div className="row m-0 p-0 text-center align-items-center top-bg p-2">
            <div className="col-md-6 col-sm-12 mb-2 m-0 p-0">
                <p className="fw-bold text-white m-0 p-0">Hotline: 012 345 678</p>
            </div>
            <div className="col-md-6 col-sm-12">
                <a href="http://www.facebook.com"><i className="fab fa-facebook fs-5 text-white"></i></a>
                <a href="http://www.instagram.com"><i className="fab fa-instagram-square ms-4 fs-5 text-white"></i></a>
                <a href="http://www.twitter.com"><i className="fab fa-twitter-square ms-4 fs-5 text-white"></i></a>
                <a href="http://www.youtube.com"><i className="fab fa-youtube ms-4 fs-5 text-white"></i></a>
            </div>
        </div>
    );
};

export default TopBanner;