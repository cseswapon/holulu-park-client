import React,{useEffect, useState} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Services from '../Services/Services';
import './Service.css';
const Service = () => {
    const [service,setService] = useState([]);
    const [isLoading,setIsloading] = useState(true);
    useEffect(() => {
        fetch('https://blooming-temple-57474.herokuapp.com/service')
        .then(res=>res.json())
            .then(data => {
                setService(data)
                setIsloading(false)
            })
    }, [])
    if (isLoading) {
        return <div className="text-center my-5 py-5">
            <div className="my-3">
                <Spinner animation="grow" variant="danger" />
            </div>     
        </div>
    }
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