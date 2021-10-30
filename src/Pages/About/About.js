import React from 'react';
import img1 from '../../image/About/pexels-photo-137032.jpg';
import img2 from '../../image/About/pexels-photo-2881201.jpg';
const About = () => {
    return (
        <div className="container">
            <div className="container my-5">
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 align-items-stretch">
                    <div className="col">
                        <img className="img-fluid" src={img1} alt="park" />
                    </div>
                    <div className="col">
                        <h1 className="text-center fw-bold text-primary">Holulu Park With</h1>
                        <p style={{webkitTextEmphasis: "sesame"}}>A park is an area of natural, semi-natural or planted space set aside for human enjoyment and Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.recreation or for the protection of wildlife or natural habitats. Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.recreation or for the protection of wildlife or natural habitats. Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.</p>
                    </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 align-items-stretch mt-4">
                    <div className="col">
                        <h1 className="text-center fw-bold text-primary">About with me</h1>
                        <p style={{webkitTextEmphasis: "sesame"}}>A park is an area of natural, semi-natural or planted space set aside for human enjoyment and Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.recreation or for the protection of wildlife or natural habitats. Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.recreation or for the protection of wildlife or natural habitats. Urban parks are green spaces set aside for recreation inside towns and cities. ... Many parks have trails for walking, biking and other activities.</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={img2} alt="park" />
                    </div>
            </div>
        </div>
        </div>
    );
};

export default About;