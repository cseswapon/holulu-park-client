import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Add.css';
import { useHistory } from 'react-router';
const Add = () => {
    const { register, handleSubmit,reset } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('https://blooming-temple-57474.herokuapp.com/service',data)
        .then((result) => {
        console.log(result?.data?.insertedId);
        })
        history.push('/home')
        reset()
    };
    return (
        <div className="container my-5">
            <h1 className="fw-bold text-primary text-center">Add New Service</h1>
            <div>
                <div className="add-form text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="Name" required/>
                        <textarea {...register("info")} placeholder="Details" required/>
                        <input {...register("img")} placeholder="img-url size 300px X 300px" required/>
                        <input {...register("price")} placeholder="price" required/>
                        <input className="btn btn-primary" type="submit" required/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;