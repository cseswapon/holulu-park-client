import React from 'react';
import support from '../../image/Support.png';
import './Support.css'
const Support = () => {
    return (
        <div className="support-section container">
                <div className="support-img">
                    <img className="img-fluid" src={support} alt="support" />
                </div>
                <div>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="abc@gmail.com" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="enter your password" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Present Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="your present address" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Parmanent Address</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="your parmanent address" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="enter your city" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakisthan</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" placeholder="zip code" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="btn" className="btn btn-primary"><i class="fas fa-paper-plane"></i> Send</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Support;