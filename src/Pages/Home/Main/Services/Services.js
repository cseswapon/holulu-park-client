import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Services = (props) => {
    // console.log(props);
    const { img, name, info, price, _id } = props.serve;
    const history = useHistory()
    const addCart = id => {
        // console.log(id);
        history.push(`service/${id}`);
    }
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
                            <Button onClick={()=>addCart(_id)} variant="outline-danger"><i className="fas fa-shopping-cart"></i> Add Booking</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;