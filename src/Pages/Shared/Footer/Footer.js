import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo/phpThumb_generated_thumbnailjpg.png';
import ssl from '../../../image/ssl-commerce.1d268dce.png';
import googleplay from '../../../image/app-download.439edada.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="custom-bg">
            <div className="container py-3">
                <div className="row align-items-start text-md-start g-4 mt-1 text-center">
                    <div className="col-md-4 col-sm-12">
                        <img src={logo} height="50" alt="logo not found" />
                        <div className="mt-3">
                            <p className="fw-bolder text-primary"><i class="fas fa-map-marker-alt"></i> uttra-4, 99, Holulu Centre, Dhaka, Bangladesh</p>
                            <p className="fw-bolder text-primary"><i class="fas fa-envelope"></i> abcdef@gmail.com</p>
                            <p className="fw-bolder text-primary"><i class="fas fa-phone"></i> Hotline: 012 345 678</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <div className="footer-link">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/support">Support</Link>
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="mb-2">
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fs-5 ms-2 text-primary"></i></a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square ms-4 fs-5 text-danger"></i></a>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square ms-4 fs-5 text-primary"></i></a>
                            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube ms-4 fs-5 text-danger"></i></a>
                        </div>
                        <img src={googleplay} alt="play store not found" />
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <img src={ssl} alt="payment pic not found" />
                    </div>
                </div>
                <p className="text-center mt-3 text-muted fw-bolder">Copyright &copy; 2021 Holulu theme park</p>
            </div>
        </div>
    );
};

export default Footer;