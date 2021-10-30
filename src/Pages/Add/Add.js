import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Add.css';
const Add = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:4582/service',data)
        .then((result) => {
        console.log(result?.data?.insertedId);
        })
        reset()
    };
    return (
        <div className="container my-5">
            <h1 className="fw-bold text-primary text-center">Add New Service</h1>
            <div>
                <div className="add-form text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="Name" />
                        <textarea {...register("info")} placeholder="Details" />
                        <input {...register("img")} placeholder="img-url size 300px X 300px" />
                        <input {...register("price")} placeholder="price" />
                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;