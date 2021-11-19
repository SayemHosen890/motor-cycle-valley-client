import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfuly');
                    reset()
                }
            })
    };
    return (
        <div>
            <h2>review</h2>
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

export default Review;