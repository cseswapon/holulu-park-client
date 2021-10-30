import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import {Spinner} from 'react-bootstrap';
import axios from 'axios';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { user } = useAuth();
    const  {id}  = useParams();
    // console.log(id);
    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://blooming-temple-57474.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => {
        // console.log(data);
            setService(data);
            setIsLoading(false);
        })
    }, [id])
    const { img, info, name, price } = service;
    const history = useHistory();
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://blooming-temple-57474.herokuapp.com/add', data)
            .then(() => { })
        setIsLoading(false);
        history.push('/order')
    };
    // console.log(name);
    if (isLoading) {
        return <div className="text-center my-5 py-5">
            <div className="my-3">
                <Spinner animation="grow" variant="danger" />
            </div>     
        </div>
    }
    return (
        <div className="container">
            <div className="text-center my-3">
                <small className="text-danger">Place Order Id : <strong>{id}</strong></small>
            </div>
            <div className="row my-3 p-4">
                <div className="col-md-8 col-12">
                    <h1 className="text-center text-primary fw-bold">Service Information</h1><hr />
                            <div className="card my-3 mx-auto border-0" style={{maxWidth: "540px"}}>
                                <div className="border-0 g-0 align-items-center g-0 p-2 rounded-3 row">
                                    <div className="col-md-4">
                                        <img src={img} className="img-fluid rounded-circle rounded-top" alt="not-found"/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body m-0 pt-0">
                                    <h3 className="card-title text-muted">{name}</h3><hr />
                                    <p className="card-text text-start text-muted">{info}</p><hr />
                                    <p className="card-text"><h5 className="text-muted">Price: ${price} </h5></p>
                                    </div>
                                </div>
                            </div>   
                    </div>
                </div>
                <div style={{borderLeft:"1px solid gray"}} className="col-md-4 col-12 place-order text-center">
                    <h1 className="text-center text-primary fw-bold">Place Order</h1><hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} />
                        <input defaultValue={user?.email} {...register("email")} />
                        <input defaultValue="Pending" {...register("status")} />
                        <input {...register("order")} placeholder={`"${name}" Please Type`} required />
                        <input className="btn btn-outline-primary" type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default PlaceOrder;