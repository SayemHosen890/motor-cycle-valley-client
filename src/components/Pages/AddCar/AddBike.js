import React from 'react';
import { useForm } from "react-hook-form";
import './AddBike.css';
import axios from 'axios';

const AddBike = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://afternoon-beyond-26035.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfuly');
                    reset()
                }
            })
    };
    return (
        <div className="service">
            <h2>add bike</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("image")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBike;