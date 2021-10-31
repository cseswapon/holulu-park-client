import React from 'react';
import { useHistory } from 'react-router';
import notfound from '../../image/404.3f1ed350.jpg'
const Notfound = () => {
    const history = useHistory();
    const homePage = () => {
        history.push('/home')
    }
    return (
        <div className="text-center mb-3">
            <img className="img-fluid" src={notfound} alt="not found" /><br />
            <button onClick={homePage} className="btn btn-outline-primary mb-3">Go Back Home <i class="fas fa-chevron-right"></i></button>
        </div>
    );
};

export default Notfound;