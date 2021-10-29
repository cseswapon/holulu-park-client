import React from 'react';
import img1 from '../../../../image/manager/m1.JPG'
import img2 from '../../../../image/manager/m2.jpg'
const Manager = () => {
    return (
        <div className="container py-2 mt-3">
            <div className="text-center text-muted">
                <h2 className="fw-bolder service-product">Hear for Our Inside</h2><br />
                <p>
                    Fun unlimited, Holulu ensures the Kids right of recreation, No more bore evening for our children in the city.Find your all funs here at one step to your door at Holulu, Dhaka.
                </p>
            </div><br />
            <div className="row mt-2">
                <div className="col-md-6">
                    <div className="card mb-3" style={{maxWidth:"540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={img1} className="img-fluid rounded-start" alt="not found"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-muted">Swapon Saha</h5>
                                <p className="card-text text-muted">Chairman <br/>Holulu Theme Park Ltd.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3" style={{maxWidth:"540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={img2} className="img-fluid rounded-start" alt="not found"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-muted">Jolin Tsai</h5>
                                <p className="card-text text-muted">Co-Founder <br/>Holulu Theme Park Ltd.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;