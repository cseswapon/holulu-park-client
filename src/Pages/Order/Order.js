import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Thead from '../Thead/Thead';

const Order = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [person, setPerson] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://blooming-temple-57474.herokuapp.com/add')
        .then(result=>result.json())
            .then(data => {
                setPerson(data)
                setIsLoading(false)
            })
    },[])
    // console.log(user.email);
    const filtering = person.filter(email => email?.email === user?.email)
    if (isLoading) {
        return <div className="text-center my-5 py-5">
            <div className="my-3">
                <Spinner animation="grow" variant="danger" />
            </div>     
        </div>
    }
    return (
        <div className="container mb-4">
            <h1 className="fw-bold text-center my-4 text-muted service-product">My Order</h1>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                    <th style={{textAlign:"center"}}>ID</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Orders</th>
                    <th style={{textAlign:"center"}}>Cancel Orders</th>
                    <th style={{textAlign:"center"}}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtering.map(users => <Thead key={users._id} use={users} person={person} set={setPerson}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Order;