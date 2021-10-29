import React from 'react';
import './TopBanner.css';
const TopBanner = () => {
    return (
        <div className="top-bg">
            <div className="row m-0 p-0 text-center align-items-center container p-2 mx-auto">
                <div className="col-md-3 col-sm-12 mb-2 m-0 p-0">
                    <p className="text-white m-0 p-0 ms-2">Dhaka,Bangladesh,holulu</p>
                </div>
                <div className="col-md-3 col-sm-12 mb-2 m-0 p-0">
                    <p className="text-white m-0 p-0 ms-2">Hotline: 012 345 678</p>
                </div>
                <div className="col-md-3 col-sm-12 mb-2 m-0 p-0">
                    <p className="text-white m-0 p-0 ms-2">abcdef@gmail.com</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fs-5 ms-2 text-white"></i></a>
                    <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square ms-4 fs-5 text-white"></i></a>
                    <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square ms-4 fs-5 text-white"></i></a>
                    <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube ms-4 fs-5 text-white"></i></a>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;