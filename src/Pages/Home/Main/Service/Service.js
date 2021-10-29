import React,{useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';
import './Service.css';
const Service = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        fetch('https://blooming-temple-57474.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="container mt-2 mb-4">
            <h1 className="text-center text-muted fw-bolder service-product mx-auto mb-4">Our Service</h1>
            <Row xs={1} md={3} className="g-4 mt-1">
                {
                    service.map(serve => <Services key={serve._id} serve={serve} />)
                }
            </Row>
        </div>
    );
};

export default Service;