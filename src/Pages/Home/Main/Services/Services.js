import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Services = (props) => {
    console.log(props);
    const { img, name, info, price } = props.serve;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{name}</Card.Title><hr/>
                        <Card.Text>{info.slice(0, 150)}</Card.Text>
                        <div className="d-flex align-items-baseline justify-content-between">
                            <Card.Text className="fw-bold">Price : ${price}</Card.Text>
                            <Button variant="outline-danger"><i class="fas fa-shopping-cart"></i> Add Booking</Button>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;